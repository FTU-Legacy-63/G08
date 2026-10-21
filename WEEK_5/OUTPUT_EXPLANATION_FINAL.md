# WEEK 5 — INPUT DESIGN AND OUTPUT EXPLANATION

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 5

## 1. Purpose and Presentation Principles

Tài liệu mô tả cách trình bày đầu vào, kết quả, lý do, giới hạn và hành động tiếp theo. Logic nằm ở Tuần 4; trọng tâm tuần này là người học có thể hiểu và sử dụng kết quả trên giao diện.

Kết quả chính cần dễ nhận diện, đơn vị rõ, giải thích có nguồn và bước tiếp theo cụ thể. Việc hạn chế gợi đáp án sớm là mục tiêu thiết kế cần rà soát theo ngữ cảnh mở hồ sơ, không phải cam kết rằng mọi chuỗi trong mã không chứa kết luận.

## 2. Input Presentation

### 2.1 Case Records

Dữ liệu tình huống do trò chơi cung cấp và không yêu cầu người học nhập lại báo cáo. Người học chủ yếu chọn, phân loại, đối chiếu và xây nhận định.

| Nhóm hồ sơ | Nội dung giao diện theo mã | Điều cần kiểm tra khi trình bày |
|---|---|---|
| Chương I | Báo cáo và ghi chú có tiêu đề, số liệu, mục đích hoặc giới hạn sử dụng | Phân biệt năm, đơn vị, tỷ lệ và cơ sở kế hoạch |
| Chương II | Chứng từ có loại nguồn, ngày, đầu mối và nội dung | Vai trò do người học xác định; không gọi mọi nguồn là giải trình |
| Chương III | Sổ, hợp đồng, mục đích, trần và bàn giao | Phân biệt USD với triệu USD; giữ đúng ngày theo từng nguồn |
| Chương IV | Chính sách, trường biểu mẫu, thư, nhật ký và báo cáo | Giữ dấu `-` của ô chưa điền; không tự đổi thành 0 |
| Chương V | Lời khai, nguồn, nội dung và giới hạn hồ sơ | Phân biệt lời nói, chứng cứ hỗ trợ và kết luận sau kiểm tra |

Không phải mọi chứng từ trong năm chương đều có cùng mẫu mục đích–đơn vị–giới hạn. Ví dụ, giấy tờ Chương II dùng siêu dữ liệu và nội dung; không khẳng định có đầy đủ chân trang giống Chương I.

### 2.2 User Inputs

| Đầu vào | Điều khiển | Hướng dẫn và kiểm tra |
|---|---|---|
| Nhận định Chương I | Lựa chọn, đánh dấu, đánh giá dòng | Nêu câu hỏi; chỉ rõ nguồn bắt buộc theo từng bước |
| Vai trò Chương II | Danh sách chọn trong bốn ô | Giải thích cơ sở, thực tế, giải trình và bối cảnh; ô không cần tài liệu bị vô hiệu hóa |
| Bút toán Chương III | Chọn dòng và mở hồ sơ | Chọn ít nhất một; đọc đủ hợp đồng, bàn giao |
| Ranh giới | Hai câu về hợp đồng, mục đích | Không dùng tên nhà cung cấp thay mục đích kinh tế |
| Bảng kiểm Chương IV | Bốn bước và bốn vai trò | Đủ tám lựa chọn trước kiểm tra |
| Ngày và phân luồng | Lựa chọn về khoản trước, tổng và cấp | Phân biệt số hiện tại với tổng liên quan |
| Dữ kiện | Chọn dòng, ô hoặc đoạn ở phạm vi áp dụng | Có nguồn, phù hợp nhận định, trong giới hạn số lượng |
| Biên bản Chương IV | Bốn dòng có cấu trúc | Ghi chú tự do không dùng chấm đúng, sai |
| Lời khai Chương V | Tập hồ sơ và đánh giá | Đúng tập, không trùng, hồ sơ khả dụng, đúng mức nhận định |
| Trách nhiệm | Lựa chọn cho từng người | Chỉ khóa sau điều kiện lời khai hoặc hết giờ tương ứng |
| Hội đồng | Hai nhóm nhận định | Tách kiểm soát và gian lận |
| Quản trị | Ba vấn đề, mỗi vấn đề ba phương án | Đủ ba lựa chọn trước kết quả |

## 3. Output Hierarchy

| Thứ tự hiển thị đề xuất | Nội dung | Mục đích |
|---|---|---|
| 1 | Kết quả chính | Người học nhận ra điều vừa xác lập |
| 2 | Cơ sở và phép đối chiếu | Giải thích vì sao có kết quả |
| 3 | Bảng chi tiết hoặc nguồn đã dùng | Cho phép kiểm tra ngược |
| 4 | Giới hạn | Ngăn mở rộng kết luận quá hồ sơ |
| 5 | Hành động tiếp theo | Hướng người học tới câu hỏi còn mở |
| 6 | Điểm và hỗ trợ | Giải thích quá trình, không thay kết luận |

Đây là nguyên tắc để rà soát giao diện. Độ nổi bật, khả năng đọc và vị trí thực tế cần được xác nhận bằng lần chạy trên kích thước màn hình sử dụng.

## 4. Chapter Outputs and Explanation

### 4.1 Chapter I — Financial Review

Kết quả chính là tiếp thị và quản lý có cơ sở kế hoạch 18,0, số ghi nhận 21,0 và phần chênh 3,0 cần phân rã. Kết quả phụ gồm doanh thu tăng 25,0% có cầu nối, chất lượng phải thu ở cấp tổng hợp và các dòng tiền có nguồn.

Phần giải thích cần tách biến động giữa hai năm khỏi kế hoạch. Giá vốn có giải thích giảm biên gộp giữa hai năm khoảng 2,5 điểm; mức so kế hoạch là khoảng 0,7 điểm. Nghiên cứu và phát triển tăng 1,6 nhưng chỉ vượt kế hoạch 0,1; chi phí khác tăng 2,5 nhưng vượt kế hoạch 0,2.

Giới hạn là số tổng hợp chưa xác minh từng giao dịch và dòng tiền có nguồn chưa chứng minh quyết định tối ưu. Hành động tiếp theo là phân rã khoản 3,0 ở Chương II.

### 4.2 Chapter II — Cost Breakdown

| Tài khoản | Ngân sách | Thực tế | Chênh lệch | Diễn giải |
|---|---:|---:|---:|---|
| Nhân sự | 8,7 | 9,0 | +0,3 | Có giải trình định lượng |
| Tiếp thị và hỗ trợ bán hàng | 4,4 | 4,5 | +0,1 | Có đối chiếu chi phí chiến dịch |
| Pháp lý và đăng ký | 1,6 | 1,8 | +0,2 | Có đối chiếu phí bổ sung |
| Tư vấn | 1,6 | 4,2 | +2,6 | Còn mở ở cấp giao dịch |
| Khác | 1,7 | 1,5 | −0,2 | Có giải trình phần giảm |

Kết quả cần làm nổi bật tư vấn còn 2,6, kèm nguồn ngân sách và sổ ghi nhận. Dự báo 4,0 chỉ cập nhật kỳ vọng; không thay mức được duyệt. Chênh lệch chưa giải thích chưa chứng minh sai phạm; bước tiếp theo là truy giao dịch.

### 4.3 Chapter III — Transaction Trace

NST-01 / ROP-25 gồm NS-051 là 900.000 USD, NS-073 là 900.000 USD và NS-101 là 800.000 USD, tổng 2.600.000 USD. Nếu dùng triệu USD, hiển thị tương ứng 0,9 + 0,9 + 0,8 = 2,6.

Giải thích dựa trên cùng hợp đồng, cùng mục đích và đủ khoản. NS-119 thuộc NST-02 / TAX-25 nên nằm ngoài. Kết quả chưa xác lập chia nhỏ để né phê duyệt, gian lận hoặc trách nhiệm; bước sau kiểm tra thẩm quyền và cách xử lý.

### 4.4 Chapter IV — Control Investigation

Kết quả hiện tại là có cơ sở điều tra khả năng nhà quản lý vô hiệu hóa kiểm soát. Cần trình bày kết quả này cùng các nhận định đã khóa:

- Trong mô hình tổng đã phát sinh, 19/07 đạt 1,8 và cần cấp giám đốc tài chính, Hội đồng quản trị.
- Hệ thống phân luồng lúc 10:48 theo khoản hiện tại 0,9; sự cố 10:51 không giải thích cơ sở giá trị sai trước đó.
- NS-051 là mẫu có ủy quyền, quyết định gắn với giao dịch và tổng được kiểm tra.
- NS-073 có lý do sự cố thật nhưng hồ sơ chưa thể hiện quyết định cho 1,8 hoặc đánh giá lại tổng, cấp.
- NS-101 dùng lý do pháp lý mâu thuẫn tài liệu về mốc nội bộ; hàng đợi chung chưa định danh người chọn lý do.
- Sophia mở hồ sơ sau khi ngoại lệ đã xảy ra; đây là giám sát, không phải phê duyệt trước giao dịch.

Biên bản bàn giao nêu điều đã chứng minh về hệ thống, điều còn phải làm rõ về hiểu biết và hành động, mức hiện tại, và điều chưa được kết luận. Chưa quy hành vi chủ động cho một cá nhân ở chương này.

### 4.5 Chapter V — Board Inquiry

| Nhân vật hoặc hồ sơ | Kết quả cần hiển thị đúng phạm vi |
|---|---|
| Victor | Có thẩm quyền, nhận thông tin cụ thể trước biểu mẫu tiếp tục xử lý; chịu trách nhiệm hành vi chủ động |
| Lucas | Có thiếu sót kiểm soát; chưa đủ chứng cứ hành vi chủ động tương tự |
| David | Chưa đủ bằng chứng quy lỗi cá nhân; hàng đợi chỉ chứng minh không có nhiệm vụ hệ thống |
| Sophia | Có giám sát sau giao dịch; không tự xác lập mọi hoạt động giám sát đều hiệu quả |
| Northstar | Elena sở hữu 70%, là vợ Victor; khai báo không phản ánh lợi ích này |
| Kiểm soát | Hành vi chủ động đã được quy cho Victor, mã `identified` |
| Gian lận | Rủi ro cần điều tra độc lập, mã `risk` |

Biên bản cần giữ tách biệt nhận định kiểm soát, công bố Northstar và gian lận. Danh sách bằng chứng đã dùng phụ thuộc tiến trình thực tế; lời khai đã được chấp nhận giữ kết quả khi cửa sổ của người đó hết giờ.

### 4.6 Succession and Investigation Record

Kết quả kế nhiệm được giải thích bằng ba quyết định quản trị và điều kiện điểm. Điểm cao chưa đủ nếu không có ba lựa chọn cân bằng; chẳng hạn một quyết định vội vàng có thể cho tổng 94 nhưng vẫn là kế nhiệm có giám sát.

Bản ghi cuối hiển thị bốn nhóm điểm, tổng, danh hiệu và mức dùng hỗ trợ. Khi giải thích một gợi ý hoặc lỗi lặp, dùng đúng cách làm tròn và mức sàn của công thức, không biến chúng thành mức trừ cố định ở mọi trường hợp.

## 5. Wording and Feedback Rules

Phần thuyết minh dùng các cách diễn đạt như đã xác lập, được hỗ trợ, chưa tìm thấy, mâu thuẫn, còn mở và rủi ro cần điều tra. Phải nêu rõ chủ thể và phạm vi thay vì dùng nhãn quy kết chung.

| Tình huống | Cách diễn đạt phù hợp |
|---|---|
| Khoản chưa giải thích | Cần truy vết thêm; chưa tự chứng minh không hợp lệ |
| Không tìm thấy phê duyệt | Hồ sơ đang có chưa thể hiện quyết định cho giao dịch này |
| Nhật ký hàng đợi chung | Chưa định danh người thao tác cụ thể |
| David không có nhiệm vụ | Chưa có nhiệm vụ hệ thống, không suy thành không biết mọi kênh |
| Xung đột lợi ích | Tăng quan ngại về động cơ, không thay bằng chứng hành vi |
| Gian lận | Rủi ro cần điều tra độc lập khi hồ sơ chưa đủ kết luận |

Tránh các nhãn tội phạm, thủ phạm gian lận hoặc khẳng định gian lận đã được chứng minh. Việc kiểm tra gợi đáp án phải xét thời điểm người học được mở nguồn; không cấm máy móc mọi từ chuyên môn dù chúng xuất hiện đúng giai đoạn.

## 6. Interface Review and Ownership

| Hạng mục | Bằng chứng hiện có | Bước cần xác nhận |
|---|---|---|
| Nhãn, số liệu và nguồn | Có trong mã đã đọc | Khả năng đọc, đơn vị và bố cục trên màn hình |
| Kết quả và giới hạn | Có chuỗi kết luận, biên bản | Thứ tự hiển thị, mức nổi bật và thời điểm mở |
| Thông báo lỗi | Có trong các hàm kiểm tra | Hiển thị đúng lúc, không bị che, có đường phục hồi |
| Hỗ trợ và đồng hồ | Có quy tắc, một phần đã kiểm tra hàm | Điều kiện tạm dừng, tiếp tục và hết giờ trên trình duyệt |
| Phim và âm thanh | Có mã và dữ liệu nhúng | Phát, bỏ qua, phát lại và khả năng tiếp tục khi lỗi |

Dũng kiểm tra số và đơn vị; Ngọc kiểm tra câu chữ, hồ sơ và giới hạn; Hiền kiểm tra phản hồi chấm; Khuê kiểm tra giao diện; Phương kiểm tra tính nhất quán. Các mục xác nhận giao diện được chuyển sang [TEST_CASES_FINAL.md](../WEEK_6/TEST_CASES_FINAL.md), không đánh dấu đã hoàn thành chỉ từ đọc mã.
