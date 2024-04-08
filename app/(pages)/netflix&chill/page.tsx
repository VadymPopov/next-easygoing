import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netflix&Chill",
};

export default function Page() {
  return (
    <p className='xl:text-xl text-lg text-justify  xl:leading-8 md:leading-6 text-gray-500   xl:px-56 lg:px-40 md:px-20'>
      Our lives are filled with countless choices. An average adult makes about
      35,000 remotely conscious decisions each day. Factors such as stress,
      fatigue, and time pressure can influence the number and quality of
      decisions made in a day.
    </p>
  );
}
