# WEEK 5 — USER FLOW

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 5

## 1. User Goal and Flow Boundaries

Người học đóng vai người thừa kế Aster Foods, cần giải thích khoản tư vấn năm 2025, xác định trách nhiệm có căn cứ và chọn cách xử lý tương xứng. Điểm bắt đầu là mở tệp trò chơi; điểm kết thúc là biên bản, ba quyết định quản trị và bản ghi kết quả.

Luồng dưới đây mô tả hành vi thiết kế được đọc từ bản tích hợp `THE_LAST_HEIR_FULL_GAME_FINAL(3).html`. Trạng thái kiểm thử được trình bày riêng ở Tuần 6; mô tả luồng không thay biên bản đã chơi thử.

## 2. Flow Overview

| Giai đoạn | Người học thực hiện | Kết quả và bước tiếp theo |
|---|---|---|
| Mở đầu | Xem hoặc bỏ qua phần giới thiệu | Vào hồ sơ Chương I |
| I | Đọc báo cáo, doanh thu, biên lợi nhuận và dòng tiền | Chọn khoản chênh kế hoạch 3,0 |
| II | Làm ví dụ nhân sự và bốn tài khoản còn lại | Tư vấn còn 2,6; mở kết luận chương |
| III | Chọn khoản, đọc nguồn, kiểm tra ranh giới | NST-01 bằng 2,6 |
| IV | Kiểm tra thẩm quyền, phân luồng, ngoại lệ và con người | Biên bản có giới hạn, dữ kiện đã xác lập |
| V | Kiểm tra lời khai, khóa trách nhiệm, đọc Northstar | Biên bản kiểm soát và rủi ro gian lận |
| Sau điều tra | Chọn cách xử lý ba vấn đề quản trị | Kết quả kế nhiệm, điểm và danh hiệu |

Mỗi chương hoàn thành giữ nhận định trên màn hình. Người học mở bàn giao và chọn tiếp tục; hoàn thành không đồng nghĩa tự động bỏ qua phần kết luận.

## 3. Happy Path

Luồng điển hình giả định các nguồn được mở đầy đủ và lựa chọn đúng. Kết thúc chấp thuận còn cần điều kiện điểm; chỉ chọn ba phương án cân bằng chưa đủ bảo đảm kết thúc đó.

| Bước | Hành động người học | Phản hồi hoặc trạng thái cần thấy |
|---|---|---|
| 1 | Mở HTML, xem hoặc bỏ qua giới thiệu | Chương I được nạp, các chương sau còn khóa |
| 2 | Đọc hồ sơ doanh thu, cầu nối và phải thu | Nhận định doanh thu được khóa đúng giới hạn |
| 3 | Chọn dòng bất lợi, đọc kế hoạch và nguồn thực tế | Tiếp thị và quản lý còn phần chênh kế hoạch |
| 4 | Đối chiếu dòng tiền, chọn khoản bàn giao | Chương I hoàn thành với 3,0 |
| 5 | Đọc bàn giao và tiếp tục | Chương II mở |
| 6 | Gán vai trò đúng cho nhân sự | Ví dụ được khóa tự động |
| 7 | Xử lý bốn tài khoản, xem bảng chênh lệch | Bốn tài khoản có giải trình, tư vấn còn mở 2,6 |
| 8 | Trả lời ba câu kết luận | Mở bước truy vết giao dịch |
| 9 | Chọn NS-051, NS-073, NS-101, đọc sáu hồ sơ | Đủ nguồn của giả thuyết |
| 10 | Đánh giá cùng hợp đồng, cùng mục đích, chọn kết luận | NST-01 đầy đủ, tổng 2,6 |
| 11 | Dựng bảng kiểm, áp dụng ba ngày và phân luồng | Mốc 19/07, tổng 1,8, cơ sở hệ thống 0,9 |
| 12 | Kiểm tra ngoại lệ, giám sát và giới hạn cá nhân | Khóa mức 3 và bốn dòng bàn giao Chương IV |
| 13 | Chọn hồ sơ và đánh giá năm lời khai | Mỗi lời khai đúng được chấp nhận |
| 14 | Khóa bốn hồ sơ trách nhiệm | Mở hồ sơ Northstar |
| 15 | Đánh giá xung đột lợi ích; chọn hai kết luận riêng | Biên bản kiểm soát `identified`, gian lận `risk` |
| 16 | Chọn ba hành động quản trị | Kết thúc được xét theo lựa chọn và ngưỡng điểm |
| 17 | Đọc kết quả và bản ghi quá trình | Hiểu điểm, hỗ trợ đã dùng và lý do kết thúc |

## 4. Chapter Interaction Details

### 4.1 Chapters I–III

Chương I mở ba nhóm hồ sơ theo tiến trình. Người học đọc nguồn rồi chọn hoặc đánh dấu; sổ kết quả giúp xem lại điều đã xác lập và câu hỏi còn mở. Cần tách biến động giữa hai năm với chênh lệch kế hoạch khi giải thích biên lợi nhuận.

Chương II bắt đầu từ nhân sự. Người học mở tài khoản, đọc chứng từ, đóng tài liệu và gán qua các ô vai trò. Hệ thống đánh giá sau mỗi lần thay đổi; tài liệu không cần thiết không bắt buộc chọn. Ô giải trình tư vấn và ô bối cảnh tài khoản khác không yêu cầu đính kèm.

Chương III cho chọn một giả thuyết, đọc hợp đồng và bàn giao, rồi trả lời hai câu ranh giới. Nhóm thiếu khoản quay lại sổ; nhóm hợp lệ nhưng ngoài mục tiêu có thể đóng để tiếp tục xây giả thuyết khác.

### 4.2 Chapter IV

| Bước | Thao tác | Điều kiện chuyển tiếp |
|---|---|---|
| 1 | Đọc chính sách, vai trò và dựng bảng kiểm | Đúng bốn bước, bốn vai trò |
| 2 | Mở hồ sơ ba ngày, xác định tổng, cấp và phân luồng | Khóa từng nhận định; đọc sự cố và thủ tục thay thế |
| 3 | Chọn dữ kiện ngoại lệ, ba dòng giám sát, hồ sơ Sophia | Dữ kiện và nhận định đủ, phù hợp |
| 4 | Phân loại, đánh giá từng người, chọn mức và biên bản | Giữ giới hạn chưa quy hành vi chủ động cho cá nhân |

Hai bước đầu không yêu cầu ghim thủ công. Ở phần sau, dữ kiện đang chọn chỉ thành đã xác lập khi nhận định liên quan được xác nhận; trạng thái này quyết định nội dung kế thừa sang Chương V.

### 4.3 Chapter V and Succession

Người học chọn nhân chứng, đọc lời khai, mở hoặc yêu cầu thêm hồ sơ, chọn tập bằng chứng và đánh giá rồi gửi. Tập đúng phải chính xác; chọn thêm nguồn không liên quan không tạo cách vượt qua kiểm tra.

Victor có hai lời khai dùng chung 90 giây. Sau các lời khai của mỗi người, người học khóa hồ sơ trách nhiệm. Khi đủ bốn hồ sơ, Northstar mở; kết luận xung đột lợi ích được đánh giá trước hai quyết định cuối của Hội đồng.

Sau biên bản, ba quyết định về Victor, Northstar và hệ thống được ghi. Kết thúc và điểm phản ánh cách thực hiện, trong khi kết luận tình huống giữ giới hạn bằng chứng.

## 5. Alternative and Assisted Paths

| Tình huống hợp lệ khác | Hành vi tiếp tục |
|---|---|
| Chưa biết thao tác | Mở hướng dẫn vị trí hoặc quy tắc |
| Cần hỗ trợ nội dung | Dùng gợi ý; mức sử dụng được ghi theo sự kiện |
| Lỗi mới thứ hai | Mở lại hồ sơ hoặc chờ 15 giây rồi tiếp tục |
| Lỗi mới thứ ba | Gợi ý tự mở; câu không còn điểm làm chủ |
| Xem lời giải | Tiếp tục với trạng thái hỗ trợ được ghi nhận |
| Chương III đúng ranh giới nhưng thiếu | Quay lại sổ bổ sung giả thuyết |
| Chương III ngoài mục tiêu | Đóng nhóm và chọn lại |
| Hồ sơ nền Chương V chưa kế thừa | Yêu cầu truy xuất lại; nguồn không được gọi là đã kế thừa |
| Nhân chứng hết giờ | Chỉ lời khai chưa hoàn thành mất điểm; tiếp tục trách nhiệm |
| Tải lại trong chất vấn | Xác nhận tiếp tục từ thời gian đã lưu |
| Xem lại chương trước | Đọc chương đã hoàn thành với kết quả được giữ |

## 6. Error Paths

| Đầu vào hoặc thao tác không hợp lệ | Phản hồi có ý nghĩa | Hành động phục hồi |
|---|---|---|
| Chưa đọc nguồn bắt buộc | Chỉ rõ nguồn hoặc bước còn thiếu theo giao diện | Mở nguồn rồi trở lại |
| Chưa chọn bút toán | Chưa được tiếp tục | Chọn ít nhất một khoản |
| Thiếu hợp đồng hoặc bàn giao đã đọc | Chưa đủ nguồn cho giả thuyết | Đọc cả hai loại cho từng khoản |
| Thiếu câu trả lời ranh giới | Yêu cầu hoàn thành cả hai | Chọn nhận định |
| Chứng từ sai vai trò | Nội dung chưa hỗ trợ vai trò đã gán | Đọc và sửa vai trò |
| Phiếu Chương IV chưa đủ | Chưa chấm như câu hoàn chỉnh | Hoàn thành ô và dữ kiện cần dùng |
| Chương V thiếu hồ sơ hoặc đánh giá | Chưa gửi kết luận hoàn chỉnh | Bổ sung lựa chọn |
| Chương V chọn tập dư, trùng hoặc nhận định sai | Lời khai chưa được chấp nhận | Đối chiếu từng nguồn và giới hạn |
| Biên bản thiếu một trong hai mức | Chưa khóa biên bản | Chọn kiểm soát và gian lận riêng |
| Quyết định cuối chưa đủ ba | Chưa tạo kết quả | Hoàn thành ba vấn đề |

Sự tồn tại của thông báo trong mã không chứng minh thông báo luôn nhìn thấy, đủ rõ hoặc không che khuất trên mọi thiết bị. Những điểm này phải được chạy giao diện.

## 7. Navigation, Persistence and Restart

Thanh điều hướng phản ánh trạng thái từng chương; lớp điều phối chặn đi tới chương chưa đủ điều kiện trước đó. Bảng điểm có thể xem tiến độ trong quá trình điều tra, còn kết quả cuối cần đi qua luồng quyết định.

Trình duyệt lưu bản ghi chung và trạng thái nội dung theo lượt. Việc xem lại, tải lại hoặc chuyển chương phải giữ nhận định đã khóa, thời gian nhân chứng và dữ kiện đã chuyển. Cần thử riêng các hành vi này trên môi trường đích.

Trong bản tích hợp, các nút bắt đầu lại của chương được liên kết về xác nhận xóa toàn bộ lượt chơi. Không mô tả đây là khởi động lại riêng một chương. Hủy xác nhận cần giữ tiến trình; đồng ý xóa cần quay về lượt mới.

## 8. Media and Distribution Paths

Phần mở đầu có thao tác bỏ qua; mã có xử lý trường hợp phim không phát. Các hành vi đó hỗ trợ tiếp cận nội dung nhưng chưa thay một bản dự phòng đã kiểm tra trên máy khác.

Nếu lưu cục bộ bị hạn chế, không khẳng định tiến độ đã được bảo toàn. Hướng dẫn chạy phải nêu cách nhận diện bản HTML đúng và trạng thái kiểm tra của môi trường sử dụng.

## 9. Ownership and Week 6 Handoff

Phương phụ trách tính liên tục của luồng; Dũng kiểm tra nhãn và đơn vị; Hiền kiểm tra lỗi, hỗ trợ và điểm; Ngọc kiểm tra cách diễn đạt hồ sơ; Khuê kiểm tra kết nối giao diện.

Tuần 6 chuyển từng hành vi điển hình, thay thế và lỗi thành tình huống có đầu vào, kỳ vọng và kết quả thực tế. Vị trí bằng chứng là [TEST_CASES_FINAL.md](../WEEK_6/TEST_CASES_FINAL.md) và [BUG_LOG_FINAL.md](../WEEK_6/BUG_LOG_FINAL.md). Ưu tiên kiểm tra xuyên suốt, lưu và khôi phục, thời gian, bằng chứng kế thừa và bắt đầu lại.
