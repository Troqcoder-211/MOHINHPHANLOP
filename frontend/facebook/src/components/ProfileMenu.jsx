function ProfileMenu() {
  return (
    <div className="dark:bg-[#1c1e21] text-white w-80 p-4 rounded-lg shadow-2xl ">
      <div className="flex items-center mb-4">
        <img
          src="url_anh_dai_dien_cua_ban" // Thay thế bằng URL ảnh đại diện của bạn
          alt="Ảnh đại diện"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="font-semibold">Nguyễn Thành Trọng</p>
          <a href="#" className="text-sm text-blue-400">
            Xem tất cả trang cá nhân
          </a>
        </div>
      </div>

      <div className="space-y-2">
        <MenuItem text="Màn hình & trợ năng" />

        <MenuItem text="Đăng xuất" />
      </div>

      <div className="mt-4 text-xs text-gray-400">
        <p>
          Quyền riêng tư . Điều khoản . Quảng cáo - Lựa chọn quảng cáo - Cookie
          . Xem thêm . Meta © 2025
        </p>
      </div>
    </div>
  );
}

function MenuItem({ text, icon, shortcut }) {
  return (
    <div className="flex items-center justify-between p-2 bg-white hover:bg-[#5c5e62]  text-black  rounded-md cursor-pointer z-50 ">
      <div className="flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        <span>{text}</span>
      </div>
      {shortcut && <span className="text-xs text-gray-400">{shortcut}</span>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}

export default ProfileMenu;
