import ProgressBar from "@/components/progressbar";

export default function Skills() {
  return (
    <div id="skills">
      <div className="bg-white pt-10 pb-10 pr-5 pl-5 text-black h-auto gap-4">
        <div className="flex flex-col items-start p-4">
          <div className="w-full flex flex-col items-center justify-center mb-6">
            <h1 className="bg-[#3f1e63] text-white p-2 rounded-md mb-5 text-2xl">
              Skills
            </h1>
            <p className="font-semibold">Things am good at.</p>
          </div>
          <div className="lg:flex lg:justify-between w-full">
            <div className="w-full p-4">
              <h1 className="text-[#3f1e63] font-bold text-xl mb-4">
                LANGUAGES
              </h1>
              <div className="mx-4">
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">HTML</h2>
                  <ProgressBar percentage={"100%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">CSS</h2>
                  <ProgressBar percentage={"100%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">TAILWIND</h2>
                  <ProgressBar percentage={"100%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">JAVASCRIPT</h2>
                  <ProgressBar percentage={"100%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">TYPESCRIPT</h2>
                  <ProgressBar percentage={"100%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">PYTHON</h2>
                  <ProgressBar percentage={"100%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">C#</h2>
                  <ProgressBar percentage={"60%"} />
                </div>
              </div>
            </div>
            <div className="lg:border-l-[#3f1e631c] lg:border-l-[2px] w-full p-4 lg:h-[500px] h-auto">
              <h1 className="text-[#3f1e63] font-bold text-xl mb-4">
                FRAMEWORKS
              </h1>
              <div className="mx-4">
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">NEXTJS</h2>
                  <ProgressBar percentage={"100%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">REACT</h2>
                  <ProgressBar percentage={"100%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">ANGULAR</h2>
                  <ProgressBar percentage={"60%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">FLASK</h2>
                  <ProgressBar percentage={"100%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">DJANGO</h2>
                  <ProgressBar percentage={"70%"} />
                </div>
              </div>
            </div>
            <div className="lg:border-l-[#3f1e631c] lg:border-l-[2px] w-full p-4 lg:h-[500px] h-auto">
              <h1 className="text-[#3f1e63] font-bold text-xl mb-4">BACKEND</h1>
              <div className="mx-4">
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">SQL</h2>
                  <ProgressBar percentage={"100%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">MONGODB</h2>
                  <ProgressBar percentage={"70%"} />
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 font-semibold">POSTGRESQL</h2>
                  <ProgressBar percentage={"80%"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
