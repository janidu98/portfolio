import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title={"Experience"} />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135432] w-2/3 text-center sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((exp, index) => (
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
                {exp.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, facere
            assumenda, veritatis accusantium rem corporis obcaecati perferendis
            ipsum repellat dolor culpa commodi ut alias voluptatum praesentium
            autem omnis doloremque facilis vel distinctio. Dolor quam recusandae
            unde consequuntur sit iusto. Repellat, modi optio autem perferendis
            cum distinctio voluptates omnis adipisci et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
