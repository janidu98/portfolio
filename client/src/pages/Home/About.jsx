import React from "react";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  const skills = [
    "Java",
    "Javascript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "MySQL",
  ];

  return (
    <div className="">
      <SectionTitle title={"About"} />

      <div className="flex w-full items-center gap-5 sm:flex-col">
        <div className="flex items-center">
          <img
            src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg"
            alt="developer"
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            sequi. Ullam aperiam aut recusandae quaerat ducimus consectetur
            corporis. Fugit dicta reiciendis qui nostrum cum facere?
          </p>
          <p className="text-white text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            sequi. Ullam aperiam aut recusandae quaerat ducimus consectetur
            corporis. Fugit dicta reiciendis qui nostrum cum facere?
          </p>
        </div>
      </div>

      <div className="py-5 mt-5">
        <h1 className="text-tertiary text-xl mt-4">
          Here are the technologies, I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
