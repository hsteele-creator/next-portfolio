import { ProjectData } from "../ProjectData";
import Project from "./Project";

export default function Projects() {
  console.log(ProjectData);
  return (
      <div>
          <h1 className="text-center text-5xl font-medium my-8">Projects</h1>
      <div className="mb-20 flex items-center justify-evenly flex-wrap w-full">
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
