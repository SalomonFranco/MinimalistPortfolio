import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className, subClasses }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          onClick={() => window.open(social.link)}
          classes={subClasses || ""}
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;