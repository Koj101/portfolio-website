import Icon from "./Icon";
import { MdSunny } from "react-icons/md";

function NavBar() {
  return (
    <div class="fixed z-2 top-0 h-16 w-full flex flex-row items-center justify-center bg-blue-200 border-gray-500 inset-shadow-sm/50 inset-shadow-blue-900">
      <div class=" flex items-center flex-row mx-auto px-16 ">
        <NavText text="Home" scroll={0} />
        <NavText text="About" scroll={330} />
        <NavText text="Skills" scroll={575} />
        <NavText text="Projects" scroll={1120} />

        <button
          onClick={() => NavScroll(10028)}
          class="mx-1 p-1.5 text-md md:text-xl text-blue-50 font-bold  hover:text-sky-100 hover:p-2 bg-blue-500 border-2 border-blue-400 shadow-sx rounded-2xl transition-all ease-in-out hover:bg-blue-800 hover:rounded-sm hover:border-blue-800 cursor-pointer"
        >
          Contact
        </button>
      </div>
    </div>
  );
}
//Scrolls to pre-determined coordinate on page
const NavScroll = (scroll) => {
  window.scrollTo({
    top: scroll,
    left: 0,
    behavior: "smooth",
  });
};

const NavText = ({ text, scroll = 0 }) => (
  <p
    onClick={() => NavScroll(scroll)}
    class="mx-2 text-md md:text-xl font-bold hover:mx-1 hover:text-2xl hover:text-blue-900 transition-all ease-in-out cursor-pointer"
  >
    {text}
  </p>
);

export default NavBar;
