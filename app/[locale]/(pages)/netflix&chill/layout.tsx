import { Metadata } from "next";
import MovieNavbar from "@/app/components/movie-navbar";
import Hero from "@/app/components/hero";
import Steps from "@/app/components/steps";
import { useTranslations } from "next-intl";
export const metadata: Metadata = {
  title: "Netflix&Chill",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Netflix");
  return (
    <>
      <Hero title={t("title")} text={t("text")} />
      <Steps
        stepOne={t("stepOne")}
        stepTwo={t("stepTwo")}
        stepThree={t("stepThree")}
      />
      <MovieNavbar />
      <div>{children}</div>
    </>
  );
}
