import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaSphere v2",
  description: "Enhanced Header Navigation with Red Circle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
