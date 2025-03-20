import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SidebarRow = (props) => {
  return (
    <div className="dark:bg-[#181820] dark:text-white bg-gray-200 dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-gray-300 hover:rounded-2xl cursor-pointer pr-65 ">
      <div className="flex items-center ">
        <div className=" flex items-center p-4 ">
          {props.img && (
            <img
              src={props.img}
              alt={props.title}
              className="w-12 h-12 rounded-full ml-4 "
            />
          )}
          {props.src && (
            <div className="ml-4">
              <FontAwesomeIcon
                className="text-[#2e81f4] border-[#2e81f4] color-[#2e81f4]"
                icon={props.src}
              />
            </div>
          )}
          <p className="ml-4">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarRow;
