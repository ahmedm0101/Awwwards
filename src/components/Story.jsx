import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { RiRoundedCorner } from "react-icons/ri";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef("null");
  const onMouseLeave = () => {
    gsap.to(frameRef.current, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };
  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    if (!frameRef.current) return;
    const { left, top, width, height } =
      frameRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex flex-col size-full items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>
        <div className="relative size-full ">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content ">
                <img
                  src="img/entrance.webp"
                  alt="entrance"
                  ref={frameRef}
                  className=""
                  onMouseUp={onMouseLeave}
                  onMouseLeave={onMouseLeave}
                  onMouseEnter={onMouseLeave}
                  onMouseMove={onMouseMove}
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className=" mt-3 max-w-sm text-center md:text-start font-circular-web text-violet-50">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button
              title="discover prologue"
              containerClass="mt-5"
              id="realm-button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
