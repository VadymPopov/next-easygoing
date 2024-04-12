import { Metadata } from "next";
import Steps from "@/app/components/steps";
import { OptionForm } from "@/app/components/option-form";
import { OptionList } from "@/app/components/option-list";
import { IoFootsteps } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Listo",
};

export default function Page() {
  return (
    <>
      <div className='text-center mb-6'>
        <h1 className='bg-gradient-to-r from-red-700 via-purple-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl leading-8 p-4'>
          Struggling with decisions?
        </h1>
        <p className='xl:text-xl text-lg text-justify  xl:leading-8 md:leading-6 text-gray-500  lg:text-center xl:px-56 lg:px-40 md:px-20'>
          Whether it&apos;s picking a team to win or planning a date or the
          classic back-and-forth of &quot;Where should we go?&quot; &quot;I
          don&apos;t know, what about you?&quot;. We&apos;ve got you covered.
        </p>
      </div>
      <p className='text-lg flex items-center justify-end gap-4 mb-6 font-semibold'>
        Steps <IoFootsteps size={20} /> to take
      </p>
      <Steps
        stepOne='Write your option in the input field. Then click the add button. Do not be afraid, the option can always be removed if necessary.'
        stepTwo='Repeat the first step as many times as there are options to choose from. Did you finish? Go to the last step then'
        stepThree='Press the button "Ask the Oracle". It&apos;s easy, isn&apos;t it?'
      />
      <OptionForm />
      <OptionList />
    </>
  );
}
