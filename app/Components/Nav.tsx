import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex items-center justify-evenly md:justify-between w-full lg:w-4/5 mx-auto py-8">
      <Link href="#main">
        <Image src="/Images/home.png" width={25} height={25} alt="home logo" />
      </Link>
      <div className="text-xs lg:text-sm font-medium decoration-4 flex items-center gap-6 ">
        <Link
          href="#projects"
          className="underline-offset-4 underline decoration-[#1F75FE] hover:text-blue-600"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="underline-offset-4 underline decoration-[#1F75FE] hover:text-blue-600"
        >
          Contact Me
        </Link>
        <Link
          href="#skills"
          className="underline-offset-4 underline decoration-[#1F75FE] hover:text-blue-600"
        >
          Skills
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <a target="_blank" href="https://github.com/hsteele-creator">
          <Image
            src="/Images/github.png"
            width={25}
            height={25}
            alt="github logo"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/harry-b-steele/">
          {" "}
          <Image
            src="/Images/linkedin.png"
            width={25}
            height={25}
            alt="linkedin logo"
          />
        </a>
      </div>
    </div>
  );
}
