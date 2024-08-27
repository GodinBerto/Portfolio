import Image from "next/image";

export default function About() {
  return (
    <div id="about">
      <div className="lg:absolute lg:top-0 lg:pl-3 lg:h-screen lg:right-0 lg:w-[50%] lg:items-center lg:flex bg-black h-auto pt-10 bg-opacity-50 lg:bg-transparent pb-10 flex z- mt-0 top-0">
        <div className="lg:rounded-l-lg lg:pl-3 pl-3 pt-3 pb-3 pr-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm w-[100%] text-white mt-10 lg:mt-0 flex items-center lg:pr-5">
          <div className="w-2 h-[100%] pt-5 pb-5 bg-white mr-3 rounded-xl">
            -
          </div>

          <div>
            <h1 className="mb-4 text-4xl font-bold">About Me</h1>
            <p>
              Hello! I&apos;m Godfred Agyekum Quarm, a passionate full-stack
              developer with a knack for crafting seamless, user-centric digital
              experiences. With a solid foundation in both front-end and
              back-end technologies, I bring a comprehensive approach to
              building web applications that are not only functional but also
              engaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
