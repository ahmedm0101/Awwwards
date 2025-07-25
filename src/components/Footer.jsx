import React from "react";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
const Footer = () => {
  const links = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
    { href: "https://medium.com", icon: <FaMedium /> },
  ];
  return (
    <footer className='"w-screen bg-violet-300 py-4 text-black'>
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Nova 2025. All rights reserved
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          {links.map(({ href, icon }, i) => (
            <a
              key={i}
              className="text-black transition-colors duration-500 hover:text-white"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
