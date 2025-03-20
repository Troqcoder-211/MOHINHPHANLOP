import SidebarRow from "./SidebarRow.jsx";
import assets from "../assets/icons/LibraryIcons.jsx";
import assetsImgs from "../assets/imgs/LibraryImgs.jsx";
const Sidebar = () => {
  return (
    <div className="scrollbar">
      <SidebarRow img={assetsImgs.Profile} title="Profile" />
      <SidebarRow src={assets.faBookmark} title="Lưu bài viết" />
      <SidebarRow src={assets.faUserGroup} title="Bạn bè" />
      <SidebarRow src={assets.faFacebookMessenger} title="Tin nhắn" />
      <SidebarRow src={assets.faVideo} title="Video" />
    </div>
  );
};

export default Sidebar;
