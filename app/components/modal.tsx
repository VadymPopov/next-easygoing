"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useMovieModal } from "@/hooks/useMovieModal";
import { useTranslations } from "next-intl";

interface MovieModalProps {
  type: "oracle" | "top-rated";
}

export default function MovieModal({ type }: MovieModalProps) {
  const { isOpen, onOpen, onOpenChange, trailerKey, movieDetails } =
    useMovieModal(type);
  const t = useTranslations("Modal");

  const {
    backdrop_path,
    genres,
    overview,
    poster_path,
    release_date,
    tagline,
    vote_average,
    vote_count,
    production_countries,
    runtime,
    title,
  } = movieDetails || {};

  const handleBtnClick = () => {
    window.open(`https://www.youtube.com/watch?v=${trailerKey}`, "_blank");
  };

  return (
    <>
      <Button
        variant='flat'
        color='default'
        radius='lg'
        size='sm'
        className='text-tiny text-white bg-black/20'
        onPress={onOpen}>
        {t("details")}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size='4xl'
        backdrop='blur'
        shouldBlockScroll={true}
        scrollBehavior='outside'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'></ModalHeader>
              <ModalBody className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
                <Image
                  alt={title || "movie cover"}
                  className='object-contain md:col-span-1 w-fit'
                  src={
                    poster_path || backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${
                          poster_path || backdrop_path
                        }`
                      : "/fallback-img-two.jpg"
                  }
                  removeWrapper={true}
                />
                <div className='md:col-span-2'>
                  {title && (
                    <h2 className='mb-4 font-bold text-3xl'>{title}</h2>
                  )}
                  {tagline && <p className='mb-4'>&quot;{tagline}&quot;</p>}

                  <table className='mb-4'>
                    <tbody>
                      {vote_average !== 0 && (
                        <tr>
                          <td className='text-gray-300 pr-8 whitespace-no-wrap'>
                            {t("rating")}
                          </td>
                          <td>
                            <span className='px-2 py-1 text-white bg-orange-500 rounded-xl'>
                              {vote_average}
                            </span>
                            <span> / </span>
                            <span>{vote_count}</span>
                          </td>
                        </tr>
                      )}
                      {genres && genres.length > 0 && (
                        <tr>
                          <td className='text-gray-300 pr-8 whitespace-no-wrap'>
                            {t("genre")}
                          </td>
                          <td>
                            {genres.map((genre) => genre.name).join(", ")}
                          </td>
                        </tr>
                      )}
                      {release_date && (
                        <tr>
                          <td className='text-gray-300 pr-8 whitespace-no-wrap'>
                            {t("date")}
                          </td>
                          <td>{release_date}</td>
                        </tr>
                      )}
                      {runtime !== 0 && (
                        <tr>
                          <td className='text-gray-300 pr-8 whitespace-no-wrap'>
                            {t("time")}
                          </td>
                          <td>{runtime} min</td>
                        </tr>
                      )}

                      {production_countries &&
                        production_countries.length > 0 && (
                          <tr>
                            <td className='text-gray-300 pr-8 whitespace-no-wrap'>
                              {t("country")}
                            </td>
                            <td>
                              {production_countries
                                .map((country) => country.iso_3166_1)
                                .join(", ")}
                            </td>
                          </tr>
                        )}
                    </tbody>
                  </table>
                  {overview && (
                    <>
                      <h3 className='text-lg'>{t("about")}</h3>
                      <p className='text-justify'>{overview}</p>
                    </>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  {t("close")}
                </Button>
                {trailerKey && (
                  <Button color='primary' onPress={handleBtnClick}>
                    {t("watch")}
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
