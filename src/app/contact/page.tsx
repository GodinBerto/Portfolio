import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 bg-white pt-10 pb-10 pr-5 pl-5 text-black h-auto gap-4">
        <div className="flex flex-col items-start p-4">
          <h1 className="bg-[#3f1e63] text-white p-2 rounded-md mb-5">
            Contact Me
          </h1>
          <p>
            Let&apos;s connect! Feel free to reach out via email or phone for
            any inquiries or collaborations.
          </p>
          <p className="flex items-center justify-center mt-4 gap-3">
            <FontAwesomeIcon
              icon={faPhone}
              className="bg-[#3f1e63] text-white w-5 p-1 h-10 rounded-full mr-2 text-xl"
            />{" "}
            Phone Number: <span>+233 531 395 716</span>
          </p>
          <p className="flex items-center justify-center mt-4 gap-3">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="bg-[#3f1e63] text-white w-5 p-1 h-10 rounded-full mr-2 text-xl"
            />{" "}
            Whatsapp: <span>+233 545 287 775</span>
          </p>
          <p className="flex items-center justify-center mt-4 gap-3">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="bg-[#3f1e63] text-white w-5 p-1 h-10 rounded-full mr-2 text-xl"
            />{" "}
            Linkedin:
            <a
              href="https://www.linkedin.com/in/berto-s-studio-84b506207/"
              className="text-blue-700">
              Berto Studio
            </a>
          </p>
        </div>
        <div className="p-4">
          <form action="">
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="name" className="text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-3 w-[100%] border-[1px] border-gray-300 outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="Email" className="text-lg">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="p-3 w-[100%] border-[1px] border-gray-300 outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="message" className="text-lg">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="p-3 w-[100%] border-[1px] border-gray-300 outline-none rounded-md h-52 flex items-start overscroll-contain"
              />
            </div>
            <div className="w-[100%] flex justify-center">
              <input
                type="submit"
                value="Send"
                className="p-2 bg-[#3f1e63] text-white w-52 rounded-md mt-3"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
