import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <nav className="navbar flex justify-between items-center w-full py-6">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

      <ul className="sm:flex flex-1 justify-end items-center hidden list-none">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-neutral-300 text-[16px] font-normal font-poppins`}
          >
            <a
              href={`#${nav.id}`}
              className={index === active ? "text-white" : "text-dimWhite"}
              onClick={() => handleClick(index)}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleMenu ? close : menu}
          alt="menu"
          className="cursor-pointer w-[28px] h-[28px] object-contain"
          onClick={() => setToggleMenu((prev) => !prev)}
        />

        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } absolute top-20 right-0 min-w-[140px] 
          mx-4 my-2 p-6 bg-black-gradient rounded-xl sidebar`}
        >
          <ul className="flex flex-1 flex-col justify-end items-center list-none">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white text-[16px] font-normal font-poppins`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
