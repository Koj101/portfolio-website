import { useState } from "react";
import Carsouel from "./ProjectList";
import project0 from "./assets/placeholderImg.png";
import blogImg from "./assets/AppleBlog1.png";

function Projects() {
  let projects = [
    {
      id: 0,
      name: "Express Webiste",
      img: blogImg,
      description:
        "A small blog webiste made using Node.js, Express and MongoDB. A user with database access can post delete blog object to the mongodb noSQL database",
    },
    {
      id: 1,
      name: "PlaceHolder",
      img: project0,
      description: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "PlaceHolder",
      img: project0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "PlaceHolder",
      img: project0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="flex z-1 flex-row items-center justify-center p-2 mb-9 w-full bg-blue-100 h-auto">
      <Carsouel slides={projects} />
    </div>
  );
}

export default Projects;
