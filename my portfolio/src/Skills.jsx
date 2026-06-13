import {
  FaJs,
  FaBootstrap,
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaC } from "react-icons/fa6";

import Icon from "./Icon";
function Skills() {
  return (
    <div class="flex flex-col items-center m-4 w-4xl h-auto p-4">
      <h1 class="text-2xl font-bold ">Skills</h1>
      <div class="grid grid-cols-3 gap-1 place-items-center w-lg p-2 ">
        <Icon icon={<FaJs size={32} />} name="JavaScript" />
        <Icon icon={<FaReact size={32} />} name="React" />
        <Icon icon={<RiTailwindCssFill size={32} />} name="Tailwind" />
        <Icon icon={<FaBootstrap size={32} />} name="Bootstrap" />
        <Icon icon={<FaJava size={32} />} name="Java" />
        <Icon icon={<FaPython size={32} />} name="Python" />
        <Icon icon={<FaGithub size={32} />} name="github" />
        <Icon icon={<FaFigma size={32} />} name="Figma" />
        <Icon icon={<FaC size={32} />} name="C" />
      </div>
    </div>
  );
}

export default Skills;
