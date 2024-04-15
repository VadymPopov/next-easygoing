"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoFootsteps } from "react-icons/io5";

type StepsProps = {
  stepOne: string;
  stepTwo: string;
  stepThree: string;
};

export default function Steps({ stepOne, stepTwo, stepThree }: StepsProps) {
  return (
    <>
      <p className='text-lg flex items-center justify-end gap-4 mb-6 font-semibold'>
        Steps <IoFootsteps size={20} /> to take
      </p>

      <Accordion
        variant='bordered'
        isCompact={true}
        className='mb-6'
        defaultExpandedKeys={["1"]}>
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
    </>
  );
}
