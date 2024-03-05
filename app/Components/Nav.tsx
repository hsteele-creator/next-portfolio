import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex items-center justify-between w-4/5 mx-auto py-8">
      <Link href="/">
        <Image src="/Images/home.png" width={25} height={25} alt="home logo" />
      </Link>
      <div className="text-sm font-bold flex items-center gap-6 ">
        <Link
          href="#"
          className="underline-offset-4 underline decoration-[#1F75FE] hover:text-blue-600"
        >
          Projects
        </Link>
        <Link
          href="#"
          className="underline-offset-4 underline decoration-[#1F75FE] hover:text-blue-600"
        >
          Contact Me
        </Link>
        <Link
          href="#"
          className="underline-offset-4 underline decoration-[#1F75FE] hover:text-blue-600"
        >
          Skills
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/linkedin.com">
          <Image
            src="/Images/github.png"
            width={25}
            height={25}
            alt="github logo"
          />
        </Link>
        <Link href="linkedin.com">
          {" "}
          <Image
            src="/Images/linkedin.png"
            width={25}
            height={25}
            alt="linkedin logo"
          />
        </Link>
      </div>
    </div>
  );
}
