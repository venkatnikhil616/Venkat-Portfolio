import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all required fields (Name, Email, Message).' },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || '0e1a69be-f8e2-4949-adff-542af2da6d4a';

    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email service access key is missing.'
        },
        { status: 500 }
      );
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        subject: `📬 Portfolio Message from ${name}: ${subject || 'General Inquiry'}`,
        message: message,
        from_name: `${name} via Venkat Portfolio`,
      }),
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: 'Message delivered to your email successfully!'
      });
    } else {
      console.error('Web3Forms delivery error:', data);
      return NextResponse.json(
        { success: false, error: data.message || 'Failed to send message.' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Contact route error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Internal server error.' },
      { status: 500 }
    );
  }
}
