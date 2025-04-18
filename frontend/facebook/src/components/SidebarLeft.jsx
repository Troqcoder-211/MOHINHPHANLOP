// import React from "react";

import SidebarRow from "./SidebarRow";
// import { useSession } from "next-auth/react";
// import { BsChevronDown } from "react-icons/bs";
import assetsImgs from "../assets/imgs/LibraryImgs";

const LeftSidebar = () => {
  // const { data: session } = useSession();

  return (
    <div className="px-4 fixed mt-5 hidden lg:block h-full overflow-y-scroll z-40">
      <div className="flex flex-col gap-2">
        <SidebarRow image={assetsImgs.Profile} text={"Nguyễn Thành Trọng"} />
        <SidebarRow image={assetsImgs.Friends} text="Bạn bè" />
        <SidebarRow image={assetsImgs.Save} text="Lưu" />
        <SidebarRow image={assetsImgs.Groups} text="Nhóm" />
        {/* <SidebarRow image={assetsImgs.Market} text="Marketplace" /> */}
        {/* <SidebarRow image={assetsImgs.Pages} text="Trang" />
        <SidebarRow image={assetsImgs.Events} text="Sự kiện" />
        <SidebarRow image={assetsImgs.MostRecent} text="Gần đây nhất" /> */}

        {/* <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
            <BsChevronDown />
          </div>
          <h1 className="text-[16px] font-medium">See More</h1>
        </div> */}

        <p className="text-[14px] text-gray-500 mt-2">
          Privacy · Terms · Advertising · Ad choices · <br /> Cookies · Meta ©
          2025
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
