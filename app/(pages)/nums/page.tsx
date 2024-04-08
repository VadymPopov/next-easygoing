import { Metadata } from "next";
import Steps from "@/app/components/steps";
import { IoFootsteps } from "react-icons/io5";
import { NumberForm } from "@/app/components/number-form";

export const metadata: Metadata = {
  title: "Nums",
};

export default function Page() {
  return (
    <>
      <div className='text-center mb-6'>
        <h1 className='bg-gradient-to-r from-red-700 via-purple-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl leading-8 p-4'>
          Do you believe in the magic of numbers?
        </h1>
        <p className='xl:text-xl text-lg text-justify  xl:leading-8 md:leading-6 text-gray-500   xl:px-56 lg:px-40 md:px-20'>
          Our lives are filled with countless choices. An average adult makes
          about 35,000 remotely conscious decisions each day. Factors such as
          stress, fatigue, and time pressure can influence the number and
          quality of decisions made in a day.
        </p>
      </div>
      <p className='text-lg flex items-center justify-end gap-4 mb-6 font-semibold'>
        Steps <IoFootsteps size={20} /> to take
      </p>
      <Steps
        stepOne='Write the initial value in the minimum value field, it can be zero but must be less than the maximum value.'
        stepTwo='Write the initial value in the maximum value field, it must be greater than the minimum value.'
        stepThree='Press the button "Ask the Oracle". It&apos;s easy, isn&apos;t it?'
      />
      <NumberForm />
    </>
  );
}
