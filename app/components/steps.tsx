"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

type StepsProps = {
  stepOne: string;
  stepTwo: string;
  stepThree: string;
};

export default function Steps({ stepOne, stepTwo, stepThree }: StepsProps) {
  return (
    <Accordion variant='bordered' isCompact={true} className='mb-6'>
      <AccordionItem key='1' aria-label='Step 1' title='Step 1'>
        {stepOne}
      </AccordionItem>
      <AccordionItem key='2' aria-label='Step 2' title='Step 2'>
        {stepTwo}
      </AccordionItem>
      <AccordionItem key='3' aria-label='Step 3' title='Step 3'>
        {stepThree}
      </AccordionItem>
    </Accordion>
  );
}
