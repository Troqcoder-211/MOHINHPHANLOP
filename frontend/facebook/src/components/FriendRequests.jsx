import assetsImgs from "../assets/imgs/LibraryImgs";

const FriendRequests = () => {
  return (
    <div className="py-2 hover:bg-gray-300 hover:rounded-2xl">
      <div className="flex gap-2 w-[100%]">
        <img
          className="h-[50px] w-[50px] rounded-full object-cover"
          src={assetsImgs.Profile}
          alt="dp"
        />
        <div>
          <h1 className="font-semibold">Nguyễn Thành Trọng</h1>
          <p className="text-gray-500 text-[14px]">11 bạn chung</p>
        </div>
        <p className="ml-auto text-[#1B74E4] text-[14px]">1 ngày trước</p>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button className="bg-[#1B74E4] text-white py-2 px-5 rounded-lg">
          Xác Nhận
        </button>
        <button className="bg-gray-300 text-black py-2 px-5 rounded-lg">
          Từ chối
        </button>
      </div>
    </div>
  );
};

export default FriendRequests;
