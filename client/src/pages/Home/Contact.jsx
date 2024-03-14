import React from "react";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  const user = {
    name: "Janidu Chathushan",
    age: 26,
    gender: "Male",
    email: "janinduchathushan@gmail.com",
    mobile: "0717777624",
    country: "Sri Lanka",
  };

  return (
    <div>
      <SectionTitle title={"Contact Me"} />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary text-sm">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1 className="text-sm">
              <span className="text-tertiary ml-8 mr-2">{`"${key}" : `}</span>
              <span className="text-tertiary">{`"${user[key]}"`}</span>
            </h1>
          ))}
          <h1 className="text-tertiary text-sm">{"}"}</h1>
        </div>

        <div className="h-[400px]">
          <lottie-player
            src="https://lottie.host/e902b62f-cb46-466b-a285-23fd0a894bdc/EJelJcDDcx.json"
            background="##FFFFFF"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
