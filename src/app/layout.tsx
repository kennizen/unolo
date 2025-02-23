import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { poppins } from "../font/poppins";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unolo | Field Force Management Software",
  description:
    "All-in-one Sales Team Tracking — Track Real Time Location and Work Progress. Record and Validate Client Visits. Free Trial. Field force management software that tracks location, automates attendance & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("overflow-hidden antialiased", poppins.className)}>
        {children}
      </body>
    </html>
  );
}
