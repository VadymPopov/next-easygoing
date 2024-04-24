import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("Home");

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10'>
      <div className='text-center'>
        <h1 className='gradient-animation bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl mb-6 p-4'>
          {t("title")}
        </h1>
        <p className='xl:text-xl text-lg text-justify  xl:leading-8 md:leading-6 mb-6 lg:text-center xl:px-56 lg:px-40 md:px-20'>
          {t("text-one")}
          <span className='text-blue-600 font-semibold'> {t("span-one")}</span>
          {t("text-two")}
          <span className='text-red-600 font-semibold'>
            {" "}
            {t("span-two")}
          </span>{" "}
          {t("text-three")}
        </p>
      </div>
      <div>
        <Link href={`${locale}/listo`} className='btn red'>
          Red pill btn
        </Link>
        <Link href={`${locale}/blue-pill`} className='btn blue'>
          Blue pill btn
        </Link>
      </div>
    </div>
  );
}
