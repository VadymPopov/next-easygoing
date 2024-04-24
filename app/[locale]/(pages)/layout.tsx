import AppBar from "@/app/components/navbar";
import { useTranslations } from "next-intl";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("Footer");
  return (
    <>
      <AppBar />
      <main className='my-10'>{children}</main>
      <footer className='flex items-baseline justify-center lg:px-7 lg:py-14 mt-auto px-5 py-10 '>
        <p>&copy; 2024 {t("author")} </p>
      </footer>
    </>
  );
}
