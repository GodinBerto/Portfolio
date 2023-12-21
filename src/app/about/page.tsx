import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="lg:absolute lg:top-0 lg:pl-3 lg:h-screen lg:right-0 lg:w-[50%] lg:items-center lg:flex bg-black h-auto pt-10 bg-opacity-50 lg:bg-transparent pb-10 flex z-40">
        <div className="lg:rounded-l-lg lg:pl-3 pl-3 pt-3 pb-3 pr-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm w-[100%] text-white mt-10 lg:mt-0 flex items-center lg:pr-5">
          <div className="w-2 h-[100%] pt-5 pb-5 bg-white mr-3 rounded-xl">
            -
          </div>

          <div>
            <h1 className="mb-4 text-4xl font-bold">Welcome</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              consequuntur sed eius non dolore voluptates nostrum dolores
              dolorum praesentium qui.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
