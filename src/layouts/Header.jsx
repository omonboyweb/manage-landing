import { useState } from "react";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/nav-icon.svg";
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-full max-w-[1110px] flex justify-between items-center px-5 py-5 m-auto">
      <a href="index.html" className="w-full max-w-[150px]">
        <img src={Logo} alt="Brand logo" />
      </a>
      <ul className="hidden sm:flex items-center gap-7 md:gap-8 text-navtext font-medium">
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
      </ul>
      <button className="hidden md:flex lg:px-8 lg: bg-buttonbg  px-4 py-3 rounded-3xl text-4 text-white font-bold hover:scale-[1.1] transition-all">
        Get Started
      </button>
      <button onClick={toggleMenu} className="sm:hidden">
        <img src={Hamburger} alt="Navigation icon" />
      </button>
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col gap-4 p-4 text-center shadow-md sm:hidden">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      )}
    </div>
  );
}
