import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <>
      <div className="flex items-center justify-center relative h-screen w-full">
        <div className="h-auto lg:grid lg:grid-cols-2 text-center items-center lg:gap-[100px] w-screen z-20">
          <div className="p-10 flex flex-col items-center justify-center">
            <div className="w-[100%] flex items-center justify-center">
              <Image
                width={200}
                height={200}
                className="hover:shadow-black transition duration-[.4s] ease-in-out shadow-lg mt-32 lg:mt-0"
                src="/images/profile.jpg"
                alt="Profile"
                style={{ borderRadius: "100%" }}
              />
            </div>
            <div>
              <h1 className="text-[4rem] mt-10 mb-5 font-semibold text-white">
                Godfred Quarm
              </h1>
            </div>
            <div>
              <h2 className="text-[1.5rem] mb-10 text-white">
                Full-stack Developer
              </h2>
            </div>
            <div className="">
              <Link
                href="/files/Godfred Quarm - cv.docx"
                download="Godfred-Quarm-cv.docx"
                className="text-[1.5rem] hover:text-white hover:bg-purple-700 bg-white p-2 transition duration-[0.4s] shadow-lg hover:shadow-black rounded-md">
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
