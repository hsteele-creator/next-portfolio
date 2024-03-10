import { ProjectData } from "../ProjectData";
import Project from "./Project";

export default function Projects() {
  console.log(ProjectData);
  return (
    <div className="my-24">
      <h1 id="projects" className="text-left text-5xl font-medium my-12">Projects</h1>
      <div className="mb-20 flex items-center justify-between flex-wrap w-full">
        {ProjectData.map((p) => {
          return (
            <Project
              key={p.name}
              name={p.name}
              link={p.link}
              skills={p.skills}
              github={p.github}
              description={p.description}
              img={p.image.src}
            />
          );
        })}
      </div>
    </div>
  );
}
