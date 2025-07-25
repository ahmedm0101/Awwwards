import React from "react";
import Button from "./Button";

const Contact = () => {
  const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
      <img src={src} alt="contact" />
    </div>
  );
  return (
    <div id="contact" className="py-20 min-h-96 w-screen px-10">
      <div className="relative bg-black rounded-lg py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:w-96 lg:left-20">
          <ImageClipBox
            src="img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">join zentry</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-8xl">
            Let's b<b>u</b>ild the <br /> n<b>e</b>w era of <br /> g<b>a</b>ming
            t<b>o</b>gether
          </p>
          <Button title='contact us' containerClass='mt-10' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
