// SignupPage.js
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: gọi API đăng ký
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-center text-blue-600 font-extrabold text-5xl">
          facebook
        </h1>
        <h2 className="mt-4 text-center text-2xl font-bold">
          Tạo tài khoản mới
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Nhanh chóng và dễ dàng.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Họ & Tên */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Họ"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Tên"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Ngày sinh */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Ngày sinh{" "}
              <span
                className="text-gray-500 cursor-help"
                title="Ngày sinh của bạn"
              >
                ?
              </span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <select
                name="birthDay"
                value={formData.birthDay}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Ngày</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                name="birthMonth"
                value={formData.birthMonth}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Tháng</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    Tháng {i + 1}
                  </option>
                ))}
              </select>
              <select
                name="birthYear"
                value={formData.birthYear}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Năm</option>
                {Array.from({ length: 100 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Giới tính */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Giới tính{" "}
              <span
                className="text-gray-500 cursor-help"
                title="Chọn giới tính của bạn"
              >
                ?
              </span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Nữ", "Nam", "Tùy chỉnh"].map((g) => (
                <label
                  key={g}
                  className="flex items-center px-3 py-2 border border-gray-300 rounded-md cursor-pointer"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* Liên hệ & Mật khẩu */}
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Số di động hoặc email"
            value={formData.emailOrPhone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu mới"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Chú thích & Button */}
          <p className="text-xs text-gray-600">
            Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên
            hệ của bạn lên Facebook. Tìm hiểu thêm.
            <br />
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách
            quyền riêng tư và Chính sách cookie của chúng tôi. Bạn có thể nhận
            được thông báo qua SMS và hủy nhận bất kỳ lúc nào.
          </p>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
          >
            Đăng ký
          </button>
        </form>

        <p className="mt-4 text-center">
          <a href="#" className="text-blue-600 hover:underline">
            Bạn đã có tài khoản ư?
          </a>
        </p>
      </div>
    </div>
  );
}
