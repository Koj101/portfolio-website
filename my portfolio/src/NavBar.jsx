import Icon from "./Icon";
import { MdSunny } from "react-icons/md";

function NavBar() {
  return (
    <div class="fixed top-0 h-16 w-screen flex flex-row items-center bg-blue-200 border-gray-500">
      <MdSunny
        size={32}
        class="my-2 mx-4  text-sky-950 cursor-pointer hover:text-amber-50"
      />
      <div class=" flex flex-row mx-auto px-16 ">
        <NavText text="Home" />
        <NavText text="About" />
        <NavText text="Skills" />
        <NavText text="Project" />
        <NavText text="About" />
      </div>
    </div>
  );
}

const NavText = ({ text }) => (
  <p class="mx-2 text-xl font-bold hover:mx-3 hover:text-2xl hover:text-blue-900 transition-all ease-in-out cursor-pointer">
    {text}
  </p>
);

export default NavBar;
