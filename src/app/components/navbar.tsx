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
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    const isLargerScreen = window.matchMedia("(min-width: 1024px)").matches;

    // Close the toggle if the screen size is larger than or equal to lg
    if (isLargerScreen) {
      setIsOpen(false);
    } else {
      // Toggle the isOpen state for smaller screens
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }
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
              <Link href={"#"}>LOGO</Link>
            </li>
          </div>

          <div
            className={`${
              isOpen
                ? " absolute w-screen inset-0 h-[500px] lg:relative lg:top-0 top-20"
                : "hidden"
            } lg:flex lg:w-auto gap-4 mt-50 items-center text-xl ${
              isOpen ? "flex flex-col lg:flex lg:flex-row lg:h-auto" : "hidden"
            }`}>
            <li className="hover:text-purple-700 mt-[40%] lg:mt-0">
              <Link href={"#"}>Welcome</Link>
            </li>

            <li className="hover:text-purple-700">
              <Link href={"#"}>About Me</Link>
            </li>

            <li className="hover:text-purple-700">
              <Link href={"#"}>Portfolio</Link>
            </li>

            <li className="hover:text-purple-700">
              <Link href={"#"}>Contact Me</Link>
            </li>

            <li className="bg-white text-black rounded-sm p-2 hover:bg-purple-700 hover hover:text-white shadow-lg hover:shadow-[#242424] outline-none border-none">
              <Link href={"#"}>Hire Me</Link>
            </li>
          </div>
          <div className="lg:hidden">
            <li className={`text-2xl items-end`} onClick={handleToggle}>
              <FontAwesomeIcon icon={faBars} />
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
