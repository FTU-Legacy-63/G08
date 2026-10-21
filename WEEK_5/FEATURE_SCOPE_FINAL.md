# WEEK 5 — FEATURE SCOPE

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 5

## 1. Purpose and User Goal

Tuần 5 chuyển logic đã xác định thành trải nghiệm tương tác rõ ràng. Người học cần đọc và kết nối hồ sơ để giải thích khoản tư vấn, xác định trách nhiệm đúng giới hạn bằng chứng và chọn hành động quản trị tương xứng.

Mục tiêu này kế thừa các tuần trước; không mở rộng sang công cụ quyết định tài chính ngoài thực tế. Tài liệu xác định tính năng chính, hỗ trợ, phạm vi bắt buộc và phần có thể hoãn.

## 2. Main Feature

Tính năng chính là chuỗi điều tra dựa trên bằng chứng qua năm chương, tạo biên bản kết luận về NST-01. Người học đi từ chênh lệch tiếp thị và quản lý 3,0, khoanh vùng tư vấn 2,6, xác lập giao dịch, kiểm tra kiểm soát rồi đánh giá lời khai và trách nhiệm.

Nếu không có chuỗi này, sản phẩm không thực hiện được nhiệm vụ cốt lõi. Điểm, nhạc, hình ảnh và kết thúc hỗ trợ trải nghiệm; chúng không thay chuỗi chứng minh.

| Chặng | Giá trị người dùng nhận được | Đầu ra cần giữ |
|---|---|---|
| I | Phân biệt giải thích tổng hợp với khoản cần đi sâu | Chênh kế hoạch 3,0 |
| II | Phân biệt vai trò của chứng từ | Tư vấn còn 2,6 |
| III | Tự xác định ranh giới và mức đầy đủ | NST-01 bằng 2,6 |
| IV | Phân biệt yêu cầu kiểm soát với cách xử lý thực tế | Nhận định có căn cứ và dữ kiện đã xác lập |
| V | Quy trách nhiệm từ hiểu biết và hành động | Biên bản kiểm soát, xung đột lợi ích và rủi ro gian lận |

## 3. Core and Supporting Features

| Tính năng | Vai trò | Khi bỏ đi |
|---|---|---|
| Mở hồ sơ nguồn | Bắt buộc | Người học mất cơ sở đối chiếu |
| Lựa chọn, phân loại và xác nhận | Bắt buộc | Không ghi nhận được lập luận |
| Chọn bút toán, đọc hợp đồng và bàn giao | Bắt buộc | Không xác lập được giao dịch |
| Bảng kiểm, ngoại lệ và dữ kiện | Bắt buộc | Không giải thích được kiểm soát và giới hạn trách nhiệm |
| Kiểm tra lời khai, hồ sơ cá nhân và biên bản | Bắt buộc | Không hoàn thành đầu ra trung tâm |
| Phản hồi và giới hạn kết luận | Bắt buộc | Kết quả khó hiểu và dễ bị suy diễn |
| Bàn giao và điều hướng theo tiến trình | Bắt buộc | Chuỗi giữa các chương mất tính liên tục |
| Sổ hồ sơ, bảng truy vết và sổ điều tra | Hỗ trợ cốt lõi | Khó xem lại nguồn và nhận định |
| Hướng dẫn thao tác, gợi ý và lời giải có ghi nhận | Hỗ trợ | Người học gặp khó có ít phương án tiếp tục |
| Điểm và ba quyết định quản trị | Phần đánh giá của bản hoàn chỉnh | Không có đầy đủ đánh giá tiến trình, lựa chọn cuối |
| Phim kết thúc | Trình bày bổ sung | Kết quả vẫn có thể diễn đạt bằng văn bản nếu chuẩn bị phương án thay thế |

Trong Chương IV, ghim dữ kiện áp dụng từ phần ngoại lệ và các đánh giá cần nguồn; hai bước đầu không yêu cầu ghim thủ công. Không mô tả mọi thao tác trong năm chương như cùng một cơ chế chọn bằng chứng.

## 4. Optional Features and Scope Limits

Phạm vi tối thiểu cần một hành trình điều tra đầy đủ. Bản hoàn chỉnh có thêm lớp trình bày và đánh giá; việc chúng đang tồn tại trong mã không làm chúng trở thành điều kiện không thể rút gọn của phiên bản tối thiểu.

- Phim mở đầu, phim kết thúc, âm thanh, ảnh minh họa và chuyển cảnh là lớp trình bày có thể giảm khi cần ổn định hoặc giảm dung lượng.
- Bộ đếm 90 giây tạo điều kiện thực hiện của bản hiện tại. Chưa có xác nhận về nút cho người chơi tắt bộ đếm; bỏ áp lực thời gian là thay đổi thiết kế cần triển khai và kiểm tra.
- Sắp xếp chứng từ giúp duyệt nguồn nhưng không thay điều kiện gán vai trò.
- Không bổ sung tài khoản, bảng xếp hạng, nhiều vụ việc, xuất báo cáo PDF hoặc máy chủ dữ liệu trong phạm vi hiện tại.

Mã có xáo trộn thứ tự một số lựa chọn; đây là hành vi đang có. Không nhầm hành vi này với tính năng sinh ngẫu nhiên nhiều tình huống điều tra.

## 5. Feature-to-Chapter Mapping

| Thành phần | Tương tác chính | Công cụ hỗ trợ |
|---|---|---|
| Chương I | Ba nhóm hồ sơ, đánh dấu dòng, lựa chọn và đánh giá | Sổ kết quả doanh thu, biên lợi nhuận và dòng tiền |
| Chương II | Tủ chứng từ, phiếu bốn vai trò, đánh giá tự động | Ví dụ nhân sự, sắp xếp chứng từ và bảng chênh lệch |
| Chương III | Chọn sổ, mở hợp đồng và bàn giao, kiểm tra ranh giới | Bảng giả thuyết và đóng nhóm ngoài mục tiêu |
| Chương IV | Bảng kiểm, ngày, phân luồng, ngoại lệ, lập luận | Dữ kiện đang dùng, đã xác lập và hồ sơ bốn người |
| Chương V | Hồ sơ lời khai, yêu cầu nguồn, trách nhiệm và biên bản | Đồng hồ, hồ sơ kế thừa và bản ghi bằng chứng |
| Lớp điều phối | Mở chương, lưu chung, điểm và quyết định | Bàn giao, xem lại, xác nhận bắt đầu lại |

## 6. Revision Record

Bảng sau ghi các điểm khác giữa mô tả cũ được đính kèm với bản đang đối chiếu. Đây là điều chỉnh tài liệu, không tự khẳng định thời điểm nhóm đã triển khai từng thay đổi.

| Nội dung cần điều chỉnh | Mô tả dùng trong hồ sơ này | Lý do |
|---|---|---|
| Sáu màn và chỉ số Beneish ở hướng cũ | Năm chương, bắt đầu từ báo cáo và chênh kế hoạch | Khớp chuỗi dữ liệu trong HTML |
| Mọi bước cần ghim | Hai bước đầu Chương IV dùng bảng kiểm; phần sau chọn dữ kiện | Khớp tương tác từng bước |
| Gợi ý luôn chỉ ghi một lần mỗi câu | Khử trùng khi sự kiện có `hintKey`; sự kiện không khóa vẫn được cộng | Khớp bộ nhận sự kiện |
| Mọi chương đều có lời giải từng câu | Chỉ mô tả cơ chế được cung cấp trong từng giao diện | Không suy từ hàm không được gọi |
| Tắt được đồng hồ | Chưa có xác nhận nút tắt; muốn thay cần sửa và thử | Phân biệt tính năng với đề xuất |
| Bắt đầu lại riêng chương | Bản tích hợp chuyển các lối bắt đầu lại về xóa cả lượt sau xác nhận | Khớp mã điều phối |
| Các ô kiểm đều hoàn thành | Tách có trong mã, đã kiểm tra hàm và chưa kiểm tra giao diện | Giữ đúng mức bằng chứng |

## 7. Ownership and Build Priorities

| Đầu mối theo phân công | Sản phẩm cần phụ trách | Ưu tiên tiếp theo |
|---|---|---|
| Phạm Quỳnh Phương | Phạm vi, luồng và thống nhất giữa tuần | Đối chiếu giá trị của từng bước |
| Phạm Triệu Tiến Dũng | Nhãn tài chính, đơn vị và số liệu | Kiểm tra số hiển thị với dữ liệu |
| Nguyễn Minh Hiền | Tương tác chấm, hỗ trợ và điểm | Thử ngưỡng, khóa và tình huống sai |
| Tôn Khánh Ngọc | Hồ sơ, lời khai và giải thích | Rà gợi đáp án sớm và giới hạn kết luận |
| Đinh Thị Minh Khuê | Giao diện, điều phối và tích hợp | Kiểm tra xuyên suốt trên trình duyệt đích |

Bằng chứng đóng góp cần gắn với sản phẩm và lịch sử thực tế. Danh sách trên là đầu mối trách nhiệm, không phải biên bản xác nhận từng người đã hoàn thành toàn bộ tính năng.

## 8. Working Interface Status

Tệp HTML có mã giao diện và xử lý của năm chương, cơ chế bàn giao, điều phối và kết thúc. Đã đọc các lớp nhúng và chạy kiểm tra hàm; chưa có lần chơi trọn giao diện hoặc kết quả nhiều trình duyệt được xác nhận trong đợt rà soát này.

Luồng sử dụng nằm trong [USER_FLOW_FINAL.md](USER_FLOW_FINAL.md), cách trình bày đầu vào và đầu ra nằm trong [OUTPUT_EXPLANATION_FINAL.md](OUTPUT_EXPLANATION_FINAL.md). Tuần 6 tiếp tục kiểm thử các hành vi đó, ưu tiên chuỗi cốt lõi trước khi bổ sung lớp trình bày.
