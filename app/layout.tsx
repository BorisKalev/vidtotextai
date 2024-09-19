import type { Metadata } from "next";
import { IBM_Plex_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/home/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Verbto",
  description:
    "Transform audio or video into text using advanced AI. Turn podcasts, interviews, or videos into blog posts, transcripts, and more in seconds.",
  icons: {
    icon: "/favicons/favicon.ico",
  },
  // metadataBase: new URL(ORIGIN_URL),
  // alternates: {
  //   canonical: ORIGIN_URL,
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon" />
        </head>
        <body
          className={cn(
            `min-h-screen bg-background font-sans antialiased`,
            fontSans.variable
          )}
        >
          <Header></Header>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
