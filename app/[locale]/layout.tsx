import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "./providers";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: "Easygoing",
  description: "Decisions helper app designed for your needs",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel='icon' type='image/svg+xml' href='/icon.svg' />
      </head>
      <body>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <main className='mx-10'>{children}</main>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
