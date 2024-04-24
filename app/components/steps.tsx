"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoFootsteps } from "react-icons/io5";
import { useTranslations } from "next-intl";

type StepsProps = {
  stepOne: string;
  stepTwo: string;
  stepThree: string;
};

export default function Steps({ stepOne, stepTwo, stepThree }: StepsProps) {
  const t = useTranslations("Steps");
  return (
    <>
      <p className='text-lg flex items-center justify-end gap-4 mb-6 font-semibold'>
        {t("steps-title")}
        <IoFootsteps size={20} /> {t("steps-title-two")}
      </p>

      <Accordion
        variant='bordered'
        isCompact={true}
        className='mb-6'
        defaultExpandedKeys={["1"]}>
        <AccordionItem
          key='1'
          aria-label={`${t("step")} 1`}
          title={`${t("step")} 1`}>
          {stepOne}
        </AccordionItem>
        <AccordionItem
          key='2'
          aria-label={`${t("step")} 2`}
          title={`${t("step")} 2`}>
          {stepTwo}
        </AccordionItem>
        <AccordionItem
          key='3'
          aria-label={`${t("step")} 3`}
          title={`${t("step")} 3`}>
          {stepThree}
        </AccordionItem>
      </Accordion>
    </>
  );
}
