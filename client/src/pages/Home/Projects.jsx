import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title={"Projects"} />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135432] w-2/3 text-center sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#804040] p-3"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-10 justify-center">
          <img src={projects[selectedItemIndex].image} alt="image" className="h-36 w-72"/>

          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>
            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
              facere assumenda, veritatis accusantium rem corporis obcaecati
              perferendis ipsum repellat dolor culpa commodi ut alias voluptatum
              praesentium autem omnis doloremque facilis vel distinctio. Dolor
              quam recusandae unde consequuntur sit iusto. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
