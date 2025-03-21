import { HiOutlineXMark } from "react-icons/hi2";
import assetsImgs from "../assets/imgs/LibraryImgs";

const ResultSearch = () => {
  return (
    <div className="w-[280px] flex items-center space-x-8 p-2 hover:bg-gray-100 hover:rounded-2xl  dark:hover:bg-gray-500 cursor-pointer ">
      <img
        src={assetsImgs.Profile}
        alt="Profile"
        className="w-10 h-10 ml-0 rounded-full mr-4"
      />
      <div>
        <p className="font-semibold dark:text-white">John Doe</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Bạn bè</p>
      </div>

      <button className="ml-auto dark:text-white  dark:hover:bg-gray-600 p-2 hover:bg-gray-200 hover:rounded-full">
        <HiOutlineXMark />
      </button>
    </div>
  );
};

export default ResultSearch;
