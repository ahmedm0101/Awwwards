import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "150 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
      return () => ctx.revert();
    }, containerRef);
  }, []);
  return (
    <div
      ref={containerRef}
      className={`mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem] ${containerClass}`}
    >
      {title.split("<br />").map((line, index) => (
        <div
          className="flex-center max-w-full flex-wrap md:gap-3 gap-2 px-10"
          key={index}
        >
          {line.split(" ").map((word, index) => (
            <span
              key={index}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
