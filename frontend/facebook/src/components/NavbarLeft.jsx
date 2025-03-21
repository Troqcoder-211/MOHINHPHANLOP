import ResultSearch from "./ResultSearch";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useRef, useState } from "react";
import assets from "../assets/icons/LibraryIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const { data: session } = useSession();

const NavbarLeft = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const divRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchOpen(true);
    divRef.current.style.height = `auto`;
  };
  const toggleSearchClose = () => {
    setIsSearchOpen(false);
    divRef.current.style.height = `0px`;
  };

  return (
    <div
      ref={divRef}
      id="seacrhResult"
      className="z-52 h-0 bg-white dark:bg-[#1c1e21] shadow-neutral-500 absolute rounded-2xl transform  -translate-x-1 top-[-36px] left-[-12px]"
    >
      <div className="flex flex-col items-center gap-2 p-4">
        <div className="flex items-center gap-2  ">
          <div>
            {isSearchOpen ? (
              <FontAwesomeIcon
                onClick={() => toggleSearchClose()}
                className={`dark:text-white w-[40px] h-[40px] cursor-pointer transition-transform duration-300  ${
                  isSearchOpen ? `-translate-x-1` : ``
                }`}
                icon={assets.faArrowLeft}
              />
            ) : (
              <BsFacebook className="text-[#1B74E4] text-[40px]" />
            )}
          </div>

          {/* Search bar */}
          <div className="ml-auto relative hidden sm:block">
            <AiOutlineSearch className="absolute text-[20px] top-[10px] left-[10px] text-gray-500" />
            <input
              onClick={toggleSearch}
              onBlur={toggleSearchClose}
              className="bg-[#F0F2F5] dark:bg-[#333334] p-2 rounded-full pl-9 outline-none placeholder:text-gray-500"
              type="text"
              placeholder="Tìm kiếm Facebook"
            />
          </div>
        </div>

        {isSearchOpen && (
          <div className="flex flex-col gap-2.5 w-auto">
            <ResultSearch />
            <ResultSearch />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarLeft;
