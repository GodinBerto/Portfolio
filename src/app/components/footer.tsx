import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGit,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="bg-[#3f1e63] text-white p-4 w-[100%]">
        <div className="text-4xl justify-center items-center flex h-auto mb-5">
          Logo
        </div>
        <div className="flex items-center justify-center gap-4 mb-5">
          <Link href={"#"}>Welcome</Link>
          <Link href={"#"}>About Me</Link>
          <Link href={"#"}>Portfolio </Link>
          <Link href={"#"}>Contact Me</Link>
        </div>
        <div className="flex items-center justify-center gap-4 mb-5">
          <Link href={"#"}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="bg-[#3f1e63] text-white w-5 p-1 h-10 rounded-full mr-2 text-xl"
            />
          </Link>
          <Link href={"#"}>
            <FontAwesomeIcon
              icon={faFacebookF}
              className="bg-[#3f1e63] text-white w-5 p-1 h-10 rounded-full mr-2 text-xl"
            />
          </Link>
          <Link href={"#"}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="bg-[#3f1e63] text-white w-5 p-1 h-10 rounded-full mr-2 text-xl"
            />
          </Link>
          <Link href={"#"}>
            <FontAwesomeIcon
              icon={faTwitter}
              className="bg-[#3f1e63] text-white w-5 p-1 h-10 rounded-full mr-2 text-xl"
            />
          </Link>
          <Link href={"#"}>
            <FontAwesomeIcon
              icon={faGit}
              className="bg-[#3f1e63] text-white w-5 p-1 h-10 rounded-full mr-2 text-xl"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <p className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faCopyright}
              className="bg-[#3f1e63] text-white w-5 p-1 h-10 rounded-full  text-xl"
            />
            by Berto Studios
          </p>
        </div>
      </div>
    </>
  );
}
