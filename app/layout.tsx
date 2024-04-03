import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import AppBar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "Easygoing",
  description: "Decisions helper app designed for your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <AppBar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
