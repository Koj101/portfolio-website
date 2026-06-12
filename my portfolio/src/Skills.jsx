import { FaJs } from "react-icons/fa";
import Icon from "./Icon";
function Skills() {
  return (
    <div class="flex flex-col items-center m-4 w-4xl h-auto p-4">
      <h1 class="text-2xl font-bold ">Skills</h1>
      <div class="grid grid-cols-3 gap-1 place-items-center w-lg p-2 ">
        <Icon icon={<FaJs size={32} />} name="JavaScript" />
        <Icon icon={<FaJs size={32} />} name="JavaScript" />
        <Icon icon={<FaJs size={32} />} name="JavaScript" />
        <Icon icon={<FaJs size={32} />} name="JavaScript" />
        <Icon icon={<FaJs size={32} />} name="JavaScript" />
        <Icon icon={<FaJs size={32} />} name="JavaScript" />
        <Icon icon={<FaJs size={32} />} name="JavaScript" />
        <Icon icon={<FaJs size={32} />} name="JavaScript" />
        <Icon icon={<FaJs size={32} />} name="JavaScript" />
      </div>
    </div>
  );
}

export default Skills;
