"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      footerRef.current,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-gradient-to-tr from-[#f8f4ec] to-white text-gray-700 py-12 px-6 shadow-inner overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-wide">
            Ramy Esam
          </h2>
          <p className="text-gray-500 text-sm max-w-sm mx-auto md:mx-0">
            Where elegance meets design — creating digital experiences that feel as good as they look.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl flex-wrap justify-center">
          {[
            { Icon: FaFacebook, link: "https://www.facebook.com/share/14Pv6VLLKeQ" },
            { Icon: FaTelegram, link: "https://t.me/ramy_esam" },
            { Icon: FaInstagram, link: "https://www.instagram.com/ramy_e_14?igsh=MWR4ZWNzMjZja2owZw==" },
            { Icon: FaLinkedin, link: "https://www.linkedin.com/in/ramy-esam-03845a226/" },
          ].map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-transform duration-300 hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300" />

      {/* Footer Text */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Ramy Essam. All rights reserved.
      </div>
    </footer>
  );
}
