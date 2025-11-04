import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloggy Blog",
  description: "Blog app for everybody!",
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
