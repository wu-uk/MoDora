import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoDora - Multimodal Document Analysis Assistant",
  description: "Organize text, tables, and figures into a structured tree for grounded retrieval and reasoning.",
  icons: {
    icon: "/MoDora/icon.svg",
    shortcut: "/MoDora/icon.svg",
    apple: "/MoDora/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
