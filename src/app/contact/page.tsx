"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
      setLoading(false);
    }
    setShowStatus(true);
  };

  useEffect(() => {
    if (showStatus) {
      const timer = setTimeout(() => {
        setShowStatus(false);
      }, 5000); // Hide status message after 5 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [showStatus]);

  return (
    <div className="bg-white pt-10 pb-10" id="contact">
      <div className="w-full flex flex-col items-center justify-center mb-16 px-10">
        <h1 className="bg-[#3f1e63] text-white p-2 rounded-md mb-5 text-2xl">
          Contact
        </h1>
        <p className="font-semibold">
          Let&apos;s connect! Feel free to reach out via email or phone for any
          inquiries or collaborations.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:px-44 px-10 text-black h-auto gap-4">
        <div className="flex flex-col items-start justify-between h-[350px] p-4">
          <div className="flex justify-center items-center gap-3">
            <FontAwesomeIcon
              icon={faPhone}
              className="bg-[#3f1e63] text-white p-[15px] rounded-md text-2xl"
            />
            <div>
              <h1 className="text-gray-500 text-md font-semibold">Call me</h1>
              <p className="font-semibold">+233531395716</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="bg-[#3f1e63] text-white p-[15px] rounded-md text-2xl"
            />
            <div>
              <h1 className="text-gray-500 text-md font-semibold">Whatsapp</h1>
              <p className="font-semibold">+233545287775</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="bg-[#3f1e63] text-white p-[15px] rounded-md text-2xl"
            />
            <div>
              <h1 className="text-gray-500 text-md font-semibold">Linkedin</h1>
              <p className="font-semibold">
                <a
                  href="https://www.linkedin.com/in/godfred-quarm-84b506207"
                  className="text-blue-700">
                  Linkedin
                </a>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FontAwesomeIcon
              icon={faGithub}
              className="bg-[#3f1e63] text-white p-[15px] rounded-md text-2xl"
            />
            <div>
              <h1 className="text-gray-500 text-md font-semibold">Github</h1>
              <p className="font-semibold">
                <a
                  href="https://github.com/GodinBerto"
                  className="text-blue-700">
                  Github
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="flex">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 w-[100%] border-[1px] border-gray-300 outline-none rounded-md"
                required
              />
            </div>
            <div className="flex">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 w-[100%] border-[1px] border-gray-300 outline-none rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 w-[100%] border-[1px] border-gray-300 outline-none rounded-md h-36 flex items-start overscroll-contain"
                required
              />
            </div>
            <div className="w-[100%] flex justify-end">
              <input
                type="submit"
                value={loading ? "Sending..." : "Submit Message"}
                className="p-4 bg-[#3f1e63] text-white w-52 rounded-lg hover:bg-[#532881] mt-3 transition-all duration-200 ease-in-out"
              />
            </div>
          </form>
          {showStatus && (
            <div className="bg-green-300 rounded-md p-3 flex justify-center items-center mt-6">
              <p className="">{status}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
