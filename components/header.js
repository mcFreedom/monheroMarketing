import Link from "next/link";
import { appUrl } from "../utils/constants";
import { useState, useMemo, useEffect } from "react";

function Header({ initialStyle }) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const toggleExpansion = () => {
    setMenuExpanded((x) => !x);
  };

  return (
    <nav
      id="header"
      className={`fixed w-full z-30 top-0 text-white border-none transition ease-in duration-300 ${
        initialStyle ? "bg-transparent" : "bg-white shadow"
      }`}
    >
      <div
        className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
        // style={{ "background-clip": "padding-box" }}
      >
        <div className="pl-4 flex items-center">
          <a
            className={`toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl ${
              initialStyle ? "text-white" : "text-gray-800"
            }`}
            href="/#"
          >
            <span id="logo" className=" pr-1">
              🦸🏻‍♂️
            </span>
            Monhero
          </a>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className={`flex items-center p-1 ${
              initialStyle ? "text-white-800" : "text-gray-400"
            } hover:text-gray-800`}
            onClick={() => toggleExpansion()}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-white lg:p-0 z-20 ${
            menuExpanded ? "" : "hidden"
          }`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="flex justify-end ">
              <a
                className={`inline-block no-underline hover:text-gray-600 hover:text-underline py-2 px-4 ${
                  initialStyle && !menuExpanded ? "text-white" : "text-gray-800"
                }`}
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row items-end justify-end">
            <button
              id="Log In"
              className={`btn mx-0 md:mx-4
              ${initialStyle && !menuExpanded ? "white" : "purple"}
              `}
              onClick={() => (window.location = appUrl())}
            >
              Log In
            </button>
            <button
              id="Sign Up"
              className={`btn mx-0 md:mx-4 mt-4 md:mt-0
              ${initialStyle && !menuExpanded ? "white" : "purple"}
              `}
              onClick={() => (window.location = appUrl("", "#sign-up"))}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0" /> */}
    </nav>
  );
}

export default Header;
