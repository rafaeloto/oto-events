import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Providers from "@/contexts/Providers";
import { Toaster } from "sonner";

const mulish = Mulish({
  subsets: ["latin-ext"],
});


export const metadata: Metadata = {
  title: "Oto Events",
  description: "Software for events qr code management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mulish.className} antialiased`}>
        <Providers>
          <div className="flex h-full flex-col overflow-hidden">{children}</div>
        </Providers>

        <Toaster />
      </body>
    </html>
  );
}
