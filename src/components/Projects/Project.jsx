import React from "react";
import { ProjectCard } from "./Project-Card/ProjectCard";
import data from "./data.json";
export const Project = React.forwardRef((props, ref) => {
  return (
    <section
      className="flex flex-col items-center justify-start w-screen pt-4 bg-gray-900 h-max"
      ref={ref}
    >
      <h1 className="text-5xl font-bold text-center text-gray-600 ">
        Projects
      </h1>
      <div className="flex flex-col justify-center lg:w-10/12 w-11/12 h-auto gap-8 mt-8">
        {data.map((data, ix) => {
          return (
            <ProjectCard
              key={ix}
              id={ix}
              icons={data.icons}
              description={data.description}
              project={data.project}
              url={data.url}
              imgurl={data.img}
            />
          );
        })}
      </div>
    </section>
  );
});
