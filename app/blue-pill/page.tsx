"use client";
import Link from "next/link";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default function Page() {
  const { width, height } = useWindowSize();

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10'>
      <div className='text-center'>
        <h1 className='gradient-animation bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl mb-6 p-6'>
          You made the right choice, didn&apos;t you?
        </h1>
        <p className='xl:text-xl text-lg text-justify  xl:leading-8 md:leading-6 text-gray-500 mb-6 lg:text-center xl:px-56 lg:px-40 md:px-20'>
          “Here is only one way out, take the{" "}
          <span className='text-red-600 font-semibold'>red pill</span>.”
        </p>
      </div>
      <div>
        <Link href='/listo' className='btn red'>
          Click me
        </Link>
      </div>
      <Confetti
        width={width}
        height={height}
        gravity={0.2}
        friction={0.95}
        numberOfPieces={500}
      />
    </div>
  );
}
