import Image from "next/image";

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
    <div className="my-4 md:my-0 w-full md:w-1/5 h-full border-2">
      <div className="h-1/2 w-full flex items-center justify-center">
        <Image
          src={img}
          width={800}
          height={100}
          alt="project img"
        />
      </div>
      <div className="h-1/2"></div>
    </div>
  );
}
