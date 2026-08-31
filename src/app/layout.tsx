import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Venkat Nikhil Vallamsetty | Cloud Security Engineer & Linux Administrator",
  description: "Portfolio of Venkat Nikhil Vallamsetty, a Cloud & Cybersecurity Enthusiast, Full-Stack Web Developer, and aspiring Software Engineer specializing in AWS Cloud, Linux Administration, Network Security, Python, React, and modern web applications.",
  keywords: ["Venkat Nikhil Vallamsetty","Portfolio","Cloud Computing","Cybersecurity","Cloud Security","AWS Cloud","Linux Administration","Full-Stack Web Developer","Python Developer","Network Security","India"],
  authors: [{ name: "Venkat Nikhil Vallamsetty" }],
  creator: "Venkat Nikhil Vallamsetty",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/venkatnikhil616/",
    title: "Venkat Nikhil Vallamsetty | Cloud Security Engineer & Linux Enthusiast",
    description: "Explore the projects, achievements, and technical skillset of Venkat Nikhil Vallamsetty, a Cloud & Cybersecurity Enthusiast, aspiring Software Engineer, and Full-Stack Web Developer passionate about AWS Cloud, Linux Administration, Network Security, Python, and modern web technologies.",
    siteName: "Venkat Nikhil Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {/* Global glassy mesh backdrop */}
          <div className="bg-mesh-container">
            <div className="bg-orb-1"></div>
            <div className="bg-orb-2"></div>
            <div className="bg-orb-3"></div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
