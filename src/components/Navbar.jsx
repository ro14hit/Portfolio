import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  // console.log(navLinks)
  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain " />
          <p className="text-white text-[18px] font-bold cursor-pointer ">
            Rohit Singh
          </p>
        </Link>
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks?.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link?.id}`}>{link?.title}</a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks?.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link?.id}`}>{link?.title}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <a
        href="https://drive.google.com/file/d/1gHodWRxTiEi4_l0C1tH9saYhbH77YPle/view?usp=sharing"
        target="_blank"
        class="bg-white text-black rounded-3xl p-1 ml-2 hover:bg-red-500 whitespace-nowrap"
      >
        My Resume
      </a>
      </div>
      
    </nav>
  );
};

export default Navbar;
