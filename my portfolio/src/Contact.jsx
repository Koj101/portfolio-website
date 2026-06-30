import { FaGithub } from "react-icons/fa6";
import Icon from "./Icon";
import IconButton from "./IconButton";
import { FaLinkedin, FaMailBulk, FaVoicemail } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText("tenkoj01@gmail.com");
  };

  return (
    <div class="flex flex-col  md:flex-row items-center mb-9 my-4 w-xs md:w-3xl h-auto p-4 transition-all">
      <div class="flex flex-col md:w-1/2">
        <h1 class=" text-2xl md:text-2xl font-bold">Contact:</h1>

        <div class="flex p-4 md:p-0 flex-row items-center">
          <p
            onClick={copyEmail}
            class=" text-md md:text-xl flex felx-row underline hover:text-blue-700 group cursor-pointer transition-all "
          >
            My Email: tenkoj01@gmail.com
            <span class="flex text-sm scale-0 mx-8 bg-blue-900 text-blue-50 rounded-sm p-0.5 group-hover:scale-100 transition-all duration-200 ease-out">
              Copy to clipboard
            </span>
          </p>
        </div>
      </div>

      <div class="flex flex-row items-center justify-center space-x-10 w-1/2 ">
        <IconButton
          icon={<FaLinkedin size={56} />}
          url={"https://www.linkedin.com/in/kojotenk"}
        />
        <IconButton
          icon={<FaGithub size={56} />}
          url={"https://github.com/Koj101"}
        />
        <IconButton
          icon={<IoIosMail size={56} />}
          url={"mailto:tenkoj01@gmail.com"}
        />
      </div>
    </div>
  );
}

export default Contact;
