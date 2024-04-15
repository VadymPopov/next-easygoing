import { Metadata } from "next";
import Steps from "@/app/components/steps";
import NumberForm from "@/app/components/number-form";
import Hero from "@/app/components/hero";

export const metadata: Metadata = {
  title: "Nums",
};

export default function Page() {
  return (
    <>
      <Hero
        title='Do you believe in the magic of numbers?'
        text='Our lives are filled with countless choices. An average adult makes
          about 35,000 remotely conscious decisions each day. Factors such as
          stress, fatigue, and time pressure can influence the number and
          quality of decisions made in a day.'
      />
      <Steps
        stepOne='Enter the initial value in the minimum value field. It can be zero but must be less than the maximum value.'
        stepTwo='Enter the initial value in the maximum value field. It must be greater than the minimum value.'
        stepThree='Click the "Ask the Oracle" button. It&apos;s easy, isn&apos;t it?'
      />
      <NumberForm />
    </>
  );
}
