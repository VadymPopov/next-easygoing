import { Metadata } from "next";
import MovieForm from "@/app/components/movie-form";
import MovieCard from "@/app/components/movie-card";

export const metadata: Metadata = {
  title: "Netflix&Chill",
};

export default function Page() {
  return (
    <>
      <div className='text-center mb-6'>
        <h1 className='bg-gradient-to-r from-red-700 via-purple-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl leading-8 p-4'>
          The name speaks by itself
        </h1>
        <p className='xl:text-xl text-lg text-justify  xl:leading-8 md:leading-6 text-gray-500  lg:text-center xl:px-56 lg:px-40 md:px-20'>
          Classic back-and-forth of &quot;What should we watch?&quot; &quot;I
          don&apos;t know, what do you want?&quot;.
        </p>
      </div>
      <MovieForm />
      <MovieCard />
    </>
  );
}
