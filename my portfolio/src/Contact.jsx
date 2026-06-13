import { FaGithub } from "react-icons/fa6";
import Icon from "./Icon";
import IconButton from "./IconButton";
import { FaLinkedin, FaMailBulk, FaVoicemail } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText("net@gmail.com");
  };

  return (
    <div class="flex flex-row items-center m-4 w-4xl h-auto p-4">
      <div class="flex flex-col w-1/2">
        <h1 class="text-2xl font-bold">Contact:</h1>

        <div class="flex flex-row items-center">
          <p
            onClick={copyEmail}
            class="flex felx-row underline text-xl hover:text-blue-700 group cursor-pointer"
          >
            My Email: net@gmail.com
            <span class="flex text-sm scale-0 mx-3 bg-blue-900 text-blue-50 rounded-sm p-0.5 group-active:scale-100 transition-all duration-10 eas">
              Copied
            </span>
          </p>
        </div>
        <p class="text-xl">My Resume</p>
      </div>

      <div class="flex flex-row items-center justify-center space-x-10 w-1/2 ">
        <IconButton
          icon={<FaLinkedin size={64} />}
          url={"https://www.linkedin.com/in/kojotenk"}
        />
        <IconButton
          icon={<FaGithub size={64} />}
          url={"https://github.com/Koj101"}
        />
        <IconButton
          icon={<IoIosMail size={64} />}
          url={"mailto:net@gmail.com"}
        />
      </div>
    </div>
  );
}

export default Contact;
