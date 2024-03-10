import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full flex items-center justify-evenly py-10">
      <div className="w-2/5 px-auto flex flex-col gap-8 ">
        <h2 id="main" className="text-7xl">
          Hi, My Name is <span>Harry Steele</span>
        </h2>
        <p className="text-gray-500">
          I am a software developer, specializing in Next Js and Typescript
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <Link href="#projects">
            <button className="bg-white hover:bg-gray-50 text-[#1F75FE] border-[1px] border-[#1F75FE] text-sm p-2 rounded-md">
              My Projects
            </button>
          </Link>
          <Link href="#contact">
            <button className="bg-[#1F75FE] hover:bg-blue-600 text-white text-sm p-2 rounded-md">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/4  flex">
        <div className="w-full overflow-hidden relative mx-auto rounded-full bg-blue-500">
          <Image
            src="/Images/hero.jpg"
            alt="picture of me"
            width={100}
            height={100}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
