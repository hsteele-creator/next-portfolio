"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  name: string;
  link: string;
  skills: string[];
  github: string;
  description: string;
  img: string;
};

export default function Project({
  name,
  link,
  skills,
  github,
  description,
  img,
}: ProjectProps) {
  return (
    <div className="my-4 md:my-0 w-full md:w-[270px] h-full md:h-72 shadow-md">
      <div className="h-3/5 w-full flex items-center justify-center">
        <Image src={img} width={800} height={100} alt="project img" />
      </div>
      <div className="h-2/5 p-2 flex flex-col justify-center">
        <h2 className="my-2 font-bold">{name}</h2>
        <div className="flex gap-1">
          {skills.map((s) => {
            return (
              <Image key={s} width={20} height={20} src={s} alt="skill image" />
            );
          })}
        </div>
        <div className="my-2 flex gap-2 items-center">
          <Link href={github}>
            <button className="flex items-center gap-1 border px-2 py-1 rounded-md">
              <Image
                bg-black
                src="/Images/github.png"
                width={12}
                height={20}
                alt="github"
              />
              <p className="text-[10px]">Github</p>
            </button>
          </Link>
          <Link href={link}>
            <button className="bg-[#1F75FE] text-white text-[10px] px-2 py-1 rounded-md">
              Check it Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
