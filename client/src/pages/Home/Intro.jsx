import React from "react";

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-9 py-10">
      <h1 className="text-white">Hi, I am</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        Janidu Chathushan
      </h1>
      <h1 className="text-6xl sm:text-3xl text-tertiary font-semibold">
        I build thing for the web
      </h1>
      <p className="text-white w-2/3 text-justify">
        I am a Fullstack Web Developer. And I am a undergraduate computer
        science student in Trincomalee Campus at Eastern University. I hope to
        learn new technologies and work with team as a good team member.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 hover:rounded-xl">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
