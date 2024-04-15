import { Metadata } from "next";
import Steps from "@/app/components/steps";
import { OptionForm } from "@/app/components/option-form";
import { OptionList } from "@/app/components/option-list";
import Hero from "@/app/components/hero";

export const metadata: Metadata = {
  title: "Listo",
};

export default function Page() {
  return (
    <>
      <Hero
        title='Struggling with decisions?'
        text='Whether it&apos;s picking a team to win or planning a date or the
        classic back-and-forth of "Where should we go?" "I
        don&apos;t know, what about you?". We&apos;ve got you covered.'
      />
      <Steps
        stepOne='Write your option in the input field, then click the "Add" button. Don&apos;t worry, options can always be removed if necessary.'
        stepTwo='Repeat the first step for each option you want to add. Finished? Move on to the last step.'
        stepThree='Click the "Ask the Oracle" button. It&apos;s easy, isn&apos;t it?'
      />
      <OptionForm />
      <OptionList />
    </>
  );
}
