import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

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
      <head>
        <link rel='icon' type='image/svg+xml' href='/icon.svg' />
      </head>
      <body>
        <Providers>
          <main className='mx-10'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
