import { Metadata } from "next";
import Steps from "@/app/components/steps";
import NumberForm from "@/app/components/number-form";
import Hero from "@/app/components/hero";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Nums",
};

export default function Page() {
  const t = useTranslations("Nums");
  return (
    <>
      <Hero title={t("title")} text={t("text")} />
      <Steps
        stepOne={t("stepOne")}
        stepTwo={t("stepTwo")}
        stepThree={t("stepThree")}
      />
      <NumberForm />
    </>
  );
}
