
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "CloudMind Solutions | AI, Software & Cloud Services",
    template: "%s | CloudMind Solutions",
  },

  applicationName: "CloudMind Solutions",

  description:
    "CloudMind Solutions builds intelligent software, AI-powered solutions, cloud platforms, data analytics, and modern digital experiences for growing businesses.",

  keywords: [
    "CloudMind Solutions",
    "AI and machine learning",
    "software development",
    "web development",
    "cloud solutions",
    "data analytics",
    "business automation",
  ],

  openGraph: {
    title: "CloudMind Solutions",
    description:
      "Intelligent software, AI solutions, cloud platforms, and modern digital experiences for growing businesses.",
    siteName: "CloudMind Solutions",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary",
    title: "CloudMind Solutions",
    description:
      "Intelligent software, AI solutions, cloud platforms, and modern digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
