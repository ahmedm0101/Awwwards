import React, { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const nextVideoRef = useRef(null);
  const handleVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
    // console.log(upcomingVideoIndex, currentIndex);
  };
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  useGSAP(() => {}, { dependencies: [currentIndex], revertOnUpdate: true });
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative h-dvh w-screen z-10 overflow-hidden rounded-lg bg-blue-75"
      >
        <div className="">
          <div className="mask-clip-path absolute absolute-center z-50 size-64 overflow-hidden cursor-pointer rounded-lg">
            <div
              onClick={handleVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSrc(upcomingVideoIndex)}
                ref={nextVideoRef}
                loop
                muted
                id="current-video"
                className="size-64 object-cover origin-center scale-150 object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            loop
            muted
            id="next-video"
            className="absolute absolute-center z-20 size-64 object-cover object-center invisible"
            onLoadedData={handleVideoLoad}
            src={getVideoSrc(currentIndex)}
            ref={nextVideoRef}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute top-0 right-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-blue-75 z-40">
          G<b>a</b>ming
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
