import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import assets from "../assets/icons/LibraryIcons.jsx";
import assetsImgs from "../assets/imgs/LibraryImgs.jsx";
import { useState } from "react";
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const IconMiddle = [assets.faHouse, assets.faUserGroup, assets.faVideo];

  console.log(isSearchOpen + setIsSearchOpen);

  return (
    // Header
    <header
      className="bg-white dark:bg-[rgb(36,37,38)] 
    text-foreground shadow-md h-16 fixed top-0 left-0 right-0 z-50 "
    >
      <div className="mx-auto flex justify-between items-center p-2">
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src={assetsImgs.LogoFacebook}
            alt="Logo"
            width={40}
            height={40}
          />
          <div className="relative">
            <form className="">
              <div className="relative">
                <FontAwesomeIcon
                  className="absolute left-2 top-1/2 transform -translate-y-1/2
                   text-gray-400 "
                  icon={assets.faMagnifyingGlass}
                />
                <input
                  type="text"
                  placeholder="Search Facebook"
                  className="bg-gray-200 dark:bg-gray-600 dark:text-gray-100
                   rounded-full py-2 pl-8 pr-4 focus:outline-none focus:bg-white
                    focus:ring-2 focus:ring-blue-500 focus:text-gray-900"
                />
              </div>
              {isSearchOpen && (
                <div
                  className="absolute top-full left-0 w-full bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700 rounded-md shadow-lg mt-1 z-50"
                >
                  <div className="p-2">
                    <div className="flex items-center space-x-8 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rouded-md cursor-pointer">
                      <FontAwesomeIcon
                        className="absolute text-sm 
                   text-gray-400 "
                        icon={assets.faMagnifyingGlass}
                      />
                      <div className="flex items-center  gap-2">
                        <img
                          src={assetsImgs.Profile}
                          alt="Profile"
                          className="w-10 h-10 rounded-full ml-4 "
                        />
                        <div>
                          <p className="font-semibold">John Doe</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Bạn bè
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        <nav className="hidden md:flex justify-around w-[40%] max-w-md ">
          {IconMiddle.map((icon, index) => (
            <FontAwesomeIcon
              key={index}
              icon={icon}
              className="mr-4 box-border hover:text-blue-500  cursor-pointer "
            />
          ))}
        </nav>

        <div className="flex space-x-2 md:space-x-4 items-center">
          <button
            size="icon"
            className="md:hidden  p-2 text-gray-600 cursor-pointer  pl-1"
          >
            <FontAwesomeIcon icon={assets.faBars} />
          </button>
          <button
            size="icon"
            className="md:block hidden  p-2 text-gray-600 cursor-pointer pl-1 "
          >
            <FontAwesomeIcon icon={assets.faBell} />
          </button>
          <button
            size="icon"
            className="md:block hidden  p-2 text-gray-600 cursor-pointer pl-1 "
          >
            <FontAwesomeIcon icon={assets.faFacebookMessenger} />
          </button>

          {/* Dropdown Menu */}
          <div>
            <button>
              <p className="text-white cursor-pointer dark:bg-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
                T
              </p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
