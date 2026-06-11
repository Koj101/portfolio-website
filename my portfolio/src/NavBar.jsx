import Icon from "./Icon";
import { MdSunny } from "react-icons/md";

function NavBar() {
  return (
    <div class="fixed top-0 h-16 w-screen flex flex-row items-center bg-blue-200 border-gray-500">
      <MdSunny
        size={32}
        class="my-2 mx-4  text-sky-950 cursor-pointer hover:text-amber-50"
      />
      <div class=" flex items-center flex-row mx-auto px-16 ">
        <NavText text="Home" />
        <NavText text="About" />
        <NavText text="Skills" />
        <NavText text="Project" />
        <NavText text="About" />
        <button class="mx-5 p-1.5 text-xl text-blue-50 font-bold hover:mx-3 hover:text-sky-100 hover:p-2 bg-blue-500 border-2 border-blue-400 shadow-sx rounded-2xl transition-all ease-in-out hover:bg-blue-800 cursor-pointer">
          Contact
        </button>
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
