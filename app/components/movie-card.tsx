"use client";
import { Card, CardFooter, Image, CardBody } from "@nextui-org/react";
import MovieModal from "./modal";

type MovieCardProps = {
  title: string;
  poster: string;
  type: "oracle" | "top-rated";
};

export default function MovieCard({ title, poster, type }: MovieCardProps) {
  return (
    <>
      <Card isFooterBlurred radius='lg' className='border-none max-w-96 m-auto'>
        <CardBody className='overflow-visible p-0'>
          <Image
            alt={title}
            className='object-cover max-w-96'
            src={
              poster
                ? `https://image.tmdb.org/t/p/w500/${poster}`
                : "/fallback-img.jpg"
            }
            isZoomed
          />
        </CardBody>
        <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='text-tiny text-white/80 uppercase'>{title}</p>
          <MovieModal type={type} />
        </CardFooter>
      </Card>
    </>
  );
}
