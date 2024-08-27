import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGit,
  faGithub,
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
          BERTO&apos;Studio
        </div>
        <div className="flex items-center justify-center gap-4 mb-5">
          <Link href={"#"}>About</Link>
          <Link href={"#skills"}>Skills</Link>
          {/* <Link href={"#"}>Portfolio </Link> */}
          <Link href={"#contact"}>Contact</Link>
        </div>
        <div className="flex items-center justify-center gap-4 mb-5">
          <Link href={"#"}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="bg-[#3f1e63] text-white p-1 rounded-full text-3xl"
            />
          </Link>
          <Link href={"#"}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="bg-[#3f1e63] text-white p-1 rounded-full text-3xl"
            />
          </Link>
          <Link href={"#"}>
            <FontAwesomeIcon
              icon={faGithub}
              className="bg-[#3f1e63] text-white p-1 rounded-full text-3xl"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <p className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faCopyright}
              className="bg-[#3f1e63] text-white w-5 p-1 h-10 rounded-full  text-xl"
            />
            by BertoStudio
          </p>
        </div>
      </div>
    </>
  );
}
