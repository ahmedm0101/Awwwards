import React, { useRef, useState } from "react";

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
  };
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
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
      </div>
    </div>
  );
};

export default Hero;
