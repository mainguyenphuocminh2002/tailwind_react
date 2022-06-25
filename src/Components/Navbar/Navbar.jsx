import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../hooks/useDarkMode";
function Navbar({ isMobile }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <nav className="flex items-center ">
        <div className="flex items-center ">
          <div className="mr-2 text-20 font-bold">NerdCard</div>
          {isDarkMode ? (
            <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=>toggleDarkMode()} />
          ) : (
            <FaMoon size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=>toggleDarkMode()} />
          )}
        </div>
        <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
          {openMenu && isMobile ? (
            <MdOutlineClose
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          ) : !openMenu && isMobile ? (
            <HiOutlineMenu
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          ) : (
            <>
              <li className="btn-hover">Features</li>
              <li className="btn-hover">Menu</li>
              <li className="btn-hover">Our Story</li>
              <li className="btn-hover ml-28">Contact</li>
            </>
          )}
          {openMenu && (
            <div className="absolute z-10 right-8 bg-white p-8 text-center text-13 text-black">
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Menu</li>
              <li className="cursor-pointer">Our Story</li>
              <li className="cursor-pointer">Contact</li>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;