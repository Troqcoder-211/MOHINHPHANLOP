import { HiBookOpen } from "react-icons/hi";

import { AiOutlinePlus } from "react-icons/ai";
import SingleStory from "./SingleStory";
import assetsImgs from "../assets/imgs/LibraryImgs";

const Story = () => {
  const singleStoryData = [
    {
      title: "Nguyễn Thành Trọng",
      img: "/profile.jpg",
      postImg: "bg-[url(/profile.jpg)]",
    },
    {
      title: "Nguyễn Thành Trọng",
      img: "/profile.jpg",
      postImg: "bg-[url(/profile.jpg)]",
    },
    {
      title: "Nguyễn Thành Trọng",
      img: "/profile.jpg",
      postImg: "bg-[url(/profile.jpg)]",
    },
    {
      title: "Nguyễn Thành Trọng",
      img: "/profile.jpg",
      postImg: "bg-[url(/profile.jpg)]",
    },
    {
      title: "Nguyễn Thành Trọng",
      img: "/profile.jpg",
      postImg: "bg-[url(/profile.jpg)]",
    },
    {
      title: "Nguyễn Thành Trọng",
      img: "/profile.jpg",
      postImg: "bg-[url(/profile.jpg)]",
    },
    {
      title: "Nguyễn Thành Trọng",
      img: "/profile.jpg",
      postImg: "bg-[url(/profile.jpg)]",
    },
  ];

  return (
    <div className="px-4 bg-white rounded-[17px] shadow-md">
      <div className="grid grid-cols-1 bg-white border-b border-gray-300">
        <div className="relative">
          <div className="mx-auto w-fit flex gap-2 items-center text-[#1B74E4] py-2">
            <HiBookOpen className="text-[30px]" />
            <p className="font-bold">Bảng tin</p>
          </div>
          <div className="bg-[#1B74E4] h-[3px]"></div>
        </div>

        {/* <div>
          <div className="mx-auto w-fit flex gap-2 items-center text-gray-500 py-2">
            <TfiVideoClapper className="text-[26px]" />
            <p className="font-bold">ss</p>
          </div>
        </div> */}
      </div>

      <div className="flex gap-[10px] mt-5 pb-5 overflow-x-scroll scrollbar-hide">
        <div className="w-[112px] shadow-md rounded-[15px] pb-2 shrink-0">
          <img
            className="w-[112px] h-[151px] rounded-t-[15px] object-cover"
            src={assetsImgs.Profile}
            alt="dp"
          />
          <div>
            <div className="bg-[#1B74E4] w-[35px] h-[35px] rounded-full grid place-items-center text-[24px] text-white mx-auto -mt-[20px] relative outline outline-[6px] outline-white">
              <AiOutlinePlus />
            </div>
            <p className="text-center mt-2 font-medium">Tạo tin</p>
          </div>
        </div>
        {singleStoryData.map(({ title, img, postImg }, index) => {
          return (
            <SingleStory
              key={index}
              title={title}
              img={img}
              postImg={postImg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Story;
