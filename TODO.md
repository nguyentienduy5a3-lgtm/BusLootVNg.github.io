# TODO - BusLoot hiệu ứng & map di chuyển

## Step 1
- Rà soát lại các hàm liên quan trong `index.html`: `claimDaily`, `verifyRoute`, `startRide` và phần map iframe.

## Step 2
- Thêm hàm audio `playSoftConfirm()` và hiệu ứng UI cho điểm danh.

## Step 3
- Sửa `claimDaily()` để: có hiệu ứng + tiếng nhấn nhẹ.

## Step 4
- Sửa `verifyRoute()` để: hiển thị toast/thông báo “Bạn đã tạo lộ trình thành công ✅”.

## Step 5
- Đổi map panel từ iframe embed sang **Google Maps JavaScript API** (thêm `<div id="map">`).

## Step 6
- Implement geocode pickup/destination và init map + marker xe buýt.

## Step 7
- Sửa `startRide()` để animate marker trong đúng 5s từ đón → đến.

## Step 8
- Khi đến nơi: hiển thị “Bạn đã đến nơi an toàn 🚌🟢” và tiếp tục logic +1 roll như cũ.

## Step 9
- Chạy kiểm tra bằng cách mở `index.html` trên trình duyệt, bấm thử: điểm danh → verify route → start ride.

