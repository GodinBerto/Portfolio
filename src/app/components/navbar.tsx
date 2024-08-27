"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
      console.log("Scrolling");
    } else {
      setScrolling(false);
      console.log("Not scrolling");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add or remove no-scroll class on body
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const handleToggle = () => {
    const isLargerScreen = window.matchMedia("(min-width: 1024px)").matches;

    if (isLargerScreen) {
      setIsOpen(false);
    } else {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }
  };

  const handleLinkClick = () => {
    // Close menu when a link is clicked
    setIsOpen(false);
  };

  return (
    <div
      className={`p-5 fixed top-0 z-50 w-full items-center text-center ${
        isOpen
          ? `w-full h-screen bg-[#3f1e63] lg:bg-transparent lg:h-auto ${
              scrolling
                ? "lg:bg-[#3f1e63] transition duration-[0.4s] ease-in-out shadow-lg shadow-[#242424]"
                : ""
            }`
          : ""
      } ${
        scrolling
          ? "bg-[#3f1e63] transition duration-[0.4s] ease-in-out shadow-lg shadow-[#242424]"
          : ""
      }`}>
      <nav>
        <ul className="flex justify-between text-white z-60">
          <div>
            <li className="text-xl z-10">
              <Link href={"#"} onClick={handleLinkClick}>
                BERTO&apos;Studio
              </Link>
            </li>
          </div>

          <div
            className={`${
              isOpen
                ? "absolute w-screen inset-0 h-[500px] lg:relative lg:top-0 top-20"
                : "hidden"
            } lg:flex lg:w-auto gap-4 mt-50 items-center text-xl ${
              isOpen ? "flex flex-col lg:flex lg:flex-row lg:h-auto" : "hidden"
            }`}>
            <li className="hover:text-purple-700">
              <Link href={"#about"} onClick={handleLinkClick}>
                About Me
              </Link>
            </li>

            <li className="hover:text-purple-700">
              <Link href={"#skills"} onClick={handleLinkClick}>
                Skills
              </Link>
            </li>

            <li className="hover:text-purple-700">
              <Link href={"#contact"} onClick={handleLinkClick}>
                Contact Me
              </Link>
            </li>

            <li className="bg-white text-black rounded-sm p-2 hover:bg-purple-700 hover:text-white shadow-lg hover:shadow-[#242424] outline-none border-none">
              <a
                href="/files/Godfred Quarm - CV.docx"
                download="Godfred-Quarm-cv.docx"
                onClick={handleLinkClick}>
                Download CV
              </a>
            </li>
          </div>
          <div className="lg:hidden">
            <li className="text-2xl items-end" onClick={handleToggle}>
              <FontAwesomeIcon icon={faBars} />
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
