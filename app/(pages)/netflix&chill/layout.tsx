import { Metadata } from "next";
import MovieNavbar from "@/app/components/movie-navbar";
import Hero from "@/app/components/hero";
import Steps from "@/app/components/steps";
export const metadata: Metadata = {
  title: "Netflix&Chill",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Hero
        title="What's on Tonight? Let's Decide Together!"
        text='Classic back-and-forth of "What should we watch tonight?"
          "I don&apos;t know, what do you want?".'
      />
      <Steps
        stepOne="On this page, you have two options to choose from: the Oracle's Choice and Top Rated. Decide how you want to search for a movie today."
        stepTwo="Oracle's Choice: Select one or more genres, or leave the field empty for a genreless search. Then, enter the release year of the films. For Top Rated, simply proceed to the next step."
        stepThree='Click the "Ask the Oracle" button, and don&apos;t forget to read the movie details!'
      />
      <MovieNavbar />
      <div>{children}</div>
    </>
  );
}
