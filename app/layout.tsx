import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "MemeCoinForge - Launch Meme Coins on Base",
  description: "Rapidly design, launch, and manage meme coins on Base with integrated Kimbo burn and Farcaster social tools.",
  openGraph: {
    title: "MemeCoinForge on Base",
    description: "Create and deploy meme coins with Kimbo burn mechanics",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
