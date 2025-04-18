export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Logo & Description */}
        <div className="bg-gray-50 md:w-1/2 p-10 flex flex-col items-center justify-center">
          <h1 className="text-blue-600 font-extrabold text-5xl mb-4">
            facebook
          </h1>
          <p className="text-gray-800 text-lg text-center">
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
            của bạn.
          </p>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <form className="bg-white space-y-4">
              <input
                type="text"
                placeholder="Email hoặc số điện thoại"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Đăng nhập
              </button>

              <p className="text-center text-sm">
                <a href="#" className="text-blue-600 hover:underline">
                  Quên mật khẩu?
                </a>
              </p>

              <hr className="my-4" />

              <button
                type="button"
                className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
              >
                Tạo tài khoản mới
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              <span className="font-semibold">Tạo Trang</span> dành cho người
              nổi tiếng, thương hiệu hoặc doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
