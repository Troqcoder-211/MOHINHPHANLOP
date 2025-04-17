// import React from "react";

const MessengerChat = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md mx-auto ova">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Đoạn chat</h2>
        <div className="flex space-x-2">
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732a2.5 2.5 0 013.536 3.536z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Tìm kiếm trên Messenger"
          className="bg-transparent border-none focus:ring-0 w-full"
        />
      </div>

      <div className="flex space-x-4 mb-4">
        <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
          Hộp thư
        </button>
        {/* <button className="text-gray-500">Cộng đồng</button> */}
      </div>

      <div className="space-y-4 overflow-x-auto h-[400px]">
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
        <BoxChat />
      </div>
    </div>
  );
};

const BoxChat = ({ props }) => {
  console.log(props);
  return (
    <div className="flex items-start space-x-3">
      <div className="w-10 h-10 rounded-full bg-purple-300"></div>
      <div>
        <h3 className="font-semibold">Bộ trưởng bộ dthuong</h3>
        <p className="text-sm text-gray-600">
          Bạn đã gửi một nhãn dán . - 55 phút
        </p>
      </div>
    </div>
  );
};
export default MessengerChat;
