# React + Vite

## Figma

https://www.figma.com/design/be2unEUq71mbLXPg4oEW9g/Facebook-Web-Redesign---Dark-(Community)?node-id=0-1&m=dev&t=XyVZlLCzSDfz5GWl-1

## -- Bảng quản lý yêu cầu kết bạn

> CREATE TABLE FriendRequests (
> request_id INT AUTO_INCREMENT PRIMARY KEY,
> sender_id INT NOT NULL, -- Người gửi yêu cầu kết bạn
> receiver_id INT NOT NULL, -- Người nhận yêu cầu kết bạn
> status ENUM('pending','accepted','declined') DEFAULT 'pending', -- Trạng thái yêu cầu
> created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Thời gian gửi yêu cầu
> updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Thời gian cập nhật ? trạng thái
> UNIQUE KEY unique_request (sender_id, receiver_id), -- Đảm bảo không gửi trùng yêu cầu
> INDEX idx_receiver (receiver_id), -- Tối ưu truy vấn các yêu cầu đến một người dùng cụ thể
> FOREIGN KEY (sender_id) REFERENCES Users(user_id) ON DELETE CASCADE,
> FOREIGN KEY (receiver_id) REFERENCES Users(user_id) ON DELETE CASCADE
> );
