import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const Navbar = () => {
  const navItems = ["Nexus", "Vault", "prologue", "About", "Contact"];
  const audioRef = useRef(null);
  const navContainerRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };
  useEffect(() => {
    if (isAudioPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isAudioPlaying]);
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);
  return (
    <div
      className="fixed inset-x-0 top-4 border-none transition-all duration-700 h-16 z-50 sm:inset-x-6"
      ref={navContainerRef}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="size-full flex items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex justify-center items-center gap-1 hidden"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio
                src="/audio/loop.mp3"
                ref={audioRef}
                className="hidden"
                loop
              />
              {[1, 2, 3, 4, 5, 6].map((bar) => (
                <div
                  style={{ animationDelay: `${Math.random() * 1}s` }}
                  key={bar}
                  className={`indicator-line ${isIndicatorActive && "active"}`}
                ></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
