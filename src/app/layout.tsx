import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HR Master Academy AI",
  description: "Personal AI-powered HR Staff & CHCO Certification Mentor",
  keywords: "HR certification, CHCO, human capital, e-learning, AI mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
