import { Metadata } from "next";
import Steps from "@/app/components/steps";
import { OptionForm } from "@/app/components/option-form";
import { OptionList } from "@/app/components/option-list";
import Hero from "@/app/components/hero";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Listo",
};

export default function Page() {
  const t = useTranslations("Listo");
  return (
    <>
      <Hero title={t("title")} text={t("text")} />
      <Steps
        stepOne={t("stepOne")}
        stepTwo={t("stepTwo")}
        stepThree={t("stepThree")}
      />
      <OptionForm />
      <OptionList />
    </>
  );
}
