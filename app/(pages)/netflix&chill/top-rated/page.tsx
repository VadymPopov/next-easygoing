import TopRatedForm from "@/app/components/top-rated-form";
import MovieCard from "@/app/components/movie-card";

export default function Page() {
  return (
    <>
      <TopRatedForm />
      <MovieCard type='top-rated' />
    </>
  );
}
