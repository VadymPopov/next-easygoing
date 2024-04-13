import MovieForm from "@/app/components/movie-form";
import MovieCard from "@/app/components/movie-card";

export default function Page() {
  return (
    <>
      <MovieForm />
      <MovieCard type='oracle' />
    </>
  );
}
