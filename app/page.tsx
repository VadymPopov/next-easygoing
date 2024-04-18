import Link from "next/link";

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10'>
      <div className='text-center'>
        <h1 className='gradient-animation bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl mb-6'>
          Choose wisely
        </h1>
        <p className='xl:text-xl text-lg text-justify  xl:leading-8 md:leading-6 mb-6 lg:text-center xl:px-56 lg:px-40 md:px-20'>
          “You take the{" "}
          <span className='text-blue-600 font-semibold'>blue pill</span>, the
          story ends, you wake up in your bed and believe whatever you want to
          believe. You take the{" "}
          <span className='text-red-600 font-semibold'>red pill</span>, you stay
          in wonderland, and I show you how deep the rabbit hole goes.”
        </p>
      </div>
      <div>
        <Link href='/listo' className='btn red'>
          Red pill btn
        </Link>
        <Link href='/blue-pill' className='btn blue'>
          Blue pill btn
        </Link>
      </div>
    </div>
  );
}
