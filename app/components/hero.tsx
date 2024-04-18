interface HeroProps {
  title: string;
  text: string;
}

export default function Hero({ title, text }: HeroProps) {
  return (
    <div className='text-center mb-6'>
      <h1 className='bg-gradient-to-r from-warning via-primary to-danger first:bg-clip-text text-3xl font-bold text-transparent sm:text-4xl leading-8 p-4'>
        {title}
      </h1>
      <p className='xl:text-xl text-lg text-justify  xl:leading-8 md:leading-6 lg:text-center xl:px-56 lg:px-40 md:px-20'>
        {text}
      </p>
    </div>
  );
}
