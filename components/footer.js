import { FaTwitter, FaGithub } from "react-icons/fa";
import { ImLifebuoy } from "react-icons/im";
import { GiScrollQuill } from "react-icons/gi";

function Footer() {
  const twitterUrl = "https://twitter.com/Monhero";
  const githubUrl = "https://github.com/antoine007/monhero";

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-3 align-center">
          <div className="w-full">
            <li className="mt-2 text-center mr-2 md:block md:mr-0">
              <a
                href="/help"
                className="flex-center no-underline hover:underline text-gray-800 hover:text-gray-600"
                title="Help"
              >
                <span className="pr-1">
                  {" "}
                  <ImLifebuoy />
                </span>
                Help
              </a>
            </li>
            <li className="mt-2 text-center mr-2 md:block md:mr-0">
              <a
                href="/terms"
                className="flex-center no-underline hover:underline text-gray-800 hover:text-gray-600"
                title="Terms"
              >
                <span className="pr-1">
                  <GiScrollQuill />
                </span>
                Terms
              </a>
            </li>
          </div>

          <div className="flex items-center w-full flex-col ">
            <li className="mt-2 text-center mr-2 md:block md:mr-0">
              <a
                href={twitterUrl}
                target="_blank"
                className="flex-center no-underline hover:underline text-gray-800 hover:text-gray-600"
                title="Twitter"
              >
                <FaTwitter />
                <div className="pl-2 inline sm:hidden lg:inline">Twitter</div>
              </a>
            </li>
            <li className="mt-2 text-center mr-2 md:block md:mr-0">
              <a
                href={githubUrl}
                target="_blank"
                className="flex-center no-underline hover:underline text-gray-800 hover:text-gray-600"
                title="Instagram"
              >
                <FaGithub />
                <div className="pl-2 inline sm:hidden lg:inline">Github</div>
              </a>
            </li>
          </div>
        </div>

        <div className="text-black text-center">
          Made with ❤️ and Privacy, on 🌍
        </div>
      </div>
    </footer>
  );
}

export default Footer;
