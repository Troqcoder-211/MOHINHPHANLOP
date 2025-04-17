const NotificationList = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 w-full max-w-md mx-auto h-[400px] overflow-y-scroll">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Thông báo</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>

      <div className="flex space-x-4 mb-4">
        <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
          Tất cả
        </button>
        <button className="text-gray-500">Chưa đọc</button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Trước đó</h3>
        <button className="text-blue-600">Xem tất cả</button>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <h3 className="font-semibold">Tuyết Thương đã thêm 5 ảnh mới:</h3>
            <p className="text-sm text-gray-600">heheh</p>
            <p className="text-sm text-gray-600">
              20 giờ - 84 cảm xúc - 24 bình luận
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-300"></div>
          <div>
            <h3 className="font-semibold">
              Châu Hoàng và 24 người khác đã bày tỏ cảm xúc về một bài viết:
            </h3>
            <p className="text-sm text-gray-600">
              Nhưng liệu ngàn lời nói Nhá nhe...
            </p>
            <p className="text-sm text-gray-600">1 ngày</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <h3 className="font-semibold">
              Tin gần đây nhất của bạn có 152 lượt xem trước khi hết hạn. Bạn
              hãy tạo tin mới nhé.
            </h3>
            <p className="text-sm text-gray-600">1 ngày</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <h3 className="font-semibold">
              Dung Nguyên đã chia sẻ bài viết của Lê Quang Hưng.
            </h3>
            <p className="text-sm text-gray-600">3 ngày</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <h3 className="font-semibold">
              Bạn có một gợi ý kết bạn mới: Yến Nhi.
            </h3>
            <p className="text-sm text-gray-600">4 ngày</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <h3 className="font-semibold">Dung Nguyên đã đăng 2 liên kết.</h3>
            <p className="text-sm text-gray-600">1 tuần</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="text-blue-600">Xem thông báo trước đó</button>
      </div>
    </div>
  );
};

export default NotificationList;
