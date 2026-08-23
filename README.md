# The Last Heir 

> Học phần: **NHA408E** · Nhóm: **G08** · Ý tưởng: Một trò chơi điều tra tài chính, trong đó người chơi phải tự đọc dữ liệu tài chính thô, tự tính toán chỉ số, và xác định đúng cách giải thích được bằng chứng định lượng ủng hộ mạnh nhất cho một bất thường tài chính doanh nghiệp, trong vòng 48 giờ ảo.

## Thành viên nhóm

| Họ tên | MSSV | Vai trò |
|---|---|---|
| Phạm Quỳnh Phương | 2411380865 | Trưởng nhóm & Tích hợp hệ thống |
| Phạm Triệu Tiến Dũng | 2412380014 | Thiết kế dữ liệu tài chính & bằng chứng |
| Nguyễn Minh Hiền | 2412380018 | Thiết kế gameplay & cơ chế tính toán |
| Tôn Khánh Ngọc | 2412380035 | Thiết kế cốt truyện & luồng điều tra |
| Đinh Thị Minh Khuê | 2412380022 | Thiết kế UI/UX & tích hợp giao diện |

---

# Week 1 — Problem Direction

## 1. Các Problem Candidates (đề xuất vấn đề)

### Đề xuất 1: Tích hợp thông tin

Sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh gặp khó khăn khi đánh giá các tình huống tài chính doanh nghiệp phức tạp, vì thông tin liên quan có thể bị phân mảnh giữa báo cáo tài chính, hồ sơ giao dịch, tài liệu nội bộ, thông tin công khai và các thông tin chưa được kiểm chứng.

### Đề xuất 2: Xác minh bằng chứng

Sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh gặp khó khăn khi phân biệt bằng chứng tài chính đáng tin cậy với tin đồn, suy đoán và thông tin gây hiểu lầm khi đánh giá một vấn đề tài chính doanh nghiệp.

### Đề xuất 3: Lập luận dựa trên bằng chứng

Sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh gặp khó khăn khi kết nối các bất thường tài chính với giao dịch, các bên liên quan và bằng chứng hỗ trợ để hình thành một kết luận logic và có căn cứ.

### Hướng vấn đề được lựa chọn

Nhóm lựa chọn **Đề xuất 1: Tích hợp thông tin**, vì đây là khó khăn cốt lõi mà dự án hướng tới khai thác: sinh viên có thể hiểu từng khái niệm tài chính riêng lẻ, nhưng gặp khó khi kết hợp thông tin từ nhiều nguồn và xác định thông tin nào nên được dùng làm căn cứ cho kết luận cuối cùng.

## 2. Target User (Người dùng mục tiêu được lựa chọn)

Đối tượng người dùng chính là **sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức cơ bản về báo cáo tài chính và tài chính doanh nghiệp**. Nhóm người dùng này đã nắm được các khái niệm tài chính nền tảng, nhưng còn ít kinh nghiệm áp dụng chúng vào các tình huống mở, nơi thông tin bị phân tán trên nhiều nguồn có độ tin cậy khác nhau.

## 3. User Task / Decision (Nhiệm vụ hoặc quyết định của người dùng)

**Nhiệm vụ cốt lõi:** Đánh giá các thông tin tài chính và doanh nghiệp hiện có, từ đó xác định cách giải thích nào cho một bất thường tài chính doanh nghiệp được bằng chứng ủng hộ mạnh nhất.

**Luồng nhiệm vụ:**

```
Xác định bất thường → Đánh giá thông tin → Xác minh bằng chứng → Kết nối bằng chứng → Hình thành kết luận
```

Người dùng không đơn thuần được yêu cầu nhớ lại kiến thức tài chính, mà phải quyết định thông tin nào là liên quan và thông tin đó ủng hộ một cách giải thích cụ thể đến mức nào.

## 4. Draft Problem Statement (Bản nháp phát biểu vấn đề)

> Sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản gặp khó khăn khi xác định cách giải thích đáng tin cậy nhất cho một bất thường tài chính doanh nghiệp, vì thông tin liên quan bị phân mảnh giữa hồ sơ tài chính, tài liệu nội bộ, thông tin công khai và các thông tin chưa được kiểm chứng khiến việc phân biệt bằng chứng đáng tin cậy với nhiễu và suy đoán trở nên khó khăn.


## 5. Initial Source / Observation (Nguồn giả định ban đầu & kế hoạch quan sát)

Khó khăn của người dùng được đề xuất hiện đang được xem là một **giả định cần được kiểm chứng**:

> Sinh viên có kiến thức tài chính cơ bản có thể gặp khó khăn trong việc tích hợp thông tin tài chính phân mảnh và phân biệt bằng chứng đã kiểm chứng với suy đoán khi xử lý một tình huống doanh nghiệp mở.

**Kế hoạch kiểm chứng:** Thực hiện một buổi quan sát quy mô nhỏ với sinh viên thuộc nhóm người dùng mục tiêu, sử dụng một tình huống tài chính doanh nghiệp ngắn gồm nhiều loại thông tin. Buổi quan sát sẽ kiểm tra xem người tham gia có thể xác định bất thường tài chính chính, xác định thông tin nào liên quan, phân biệt thông tin đã kiểm chứng với chưa kiểm chứng, kết nối bằng chứng từ nhiều nguồn, và đưa ra kết luận có căn cứ.

## 6. Vì sao đây là vấn đề tài chính hoặc ngân hàng?

Vấn đề này liên quan trực tiếp đến lĩnh vực tài chính vì người dùng phải diễn giải báo cáo tài chính, đánh giá các giao dịch doanh nghiệp, so sánh thông tin từ nhiều nguồn khác nhau, và hình thành một nhận định tài chính dựa trên bằng chứng. Dự án do đó xuất phát từ một **vấn đề về lập luận tài chính**, còn công nghệ sẽ được lựa chọn sau, chỉ nhằm hỗ trợ người dùng thực hiện nhiệm vụ này hiệu quả hơn.

## 7. Đóng góp cá nhân 
| Họ tên (MSSV) | Vai trò | Output | Sản phẩm Tuần 1 |
|---|---|---|---|
| **Phạm Quỳnh Phương**<br>(2411380865) | Trưởng nhóm & Tích hợp hệ thống (Integration Owner) | Xây dựng và quản lý cấu trúc trạng thái trò chơi (Game State): nhân vật nào đã được mở, chỉ số nào đã được tính đúng, tin đồn đã được xác minh hay chưa, thời gian còn lại trên đồng hồ 48 giờ. Nối luồng dữ liệu do Dũng thiết kế, logic tính toán/chấm điểm do Hiền xây dựng, và nội dung phản hồi do Ngọc viết vào đúng các màn hình do Khuê thiết kế, thành một luồng chơi chạy được từ đầu đến Báo cáo điều tra cuối. Duy trì Nhật ký Lộ trình & Quyết định (Roadmap & Decision Log) để cả nhóm theo dõi tiến độ và các quyết định thiết kế đã chốt. | README phiên bản 1, cấu trúc repository, bản tóm tắt hướng vấn đề, và điều phối chung của nhóm. |
| **Phạm Triệu Tiến Dũng**<br>(2412380014) | Thiết kế dữ liệu tài chính thô & đáp án chuẩn (Input Owner) | Xây dựng ba bộ dữ liệu tài chính thô độc lập tương ứng ba bất thường chính (Earnings Quality, DSO, Customer Concentration), một bộ dữ liệu nhiễu cho bẫy ngưỡng trọng yếu, và đáp án đúng cho từng chỉ số (cho phép sai số nhỏ khi chấm). Thiết kế hồ sơ hợp đồng Northstar và cơ cấu khách hàng làm nền cho việc suy luận thẩm quyền phê duyệt ở Phần 3 của thiết kế. | Ba đề xuất vấn đề (problem candidates) và cấu trúc ban đầu của hồ sơ tài chính/bằng chứng. |
| **Nguyễn Minh Hiền**<br>(2412380018) | Thiết kế gameplay & cơ chế tính toán (Logic Owner) | Xây dựng công thức tính từng chỉ số (OCF/NI, DSO, % tập trung khách hàng), benchmark ngành dùng để so sánh, danh sách 5 nhãn cờ đỏ kế toán (3 đúng, 2 nhiễu), và logic đồng hồ 48 giờ (đếm ngược thời gian thực, không trừ giờ theo hành động). Xây dựng bảng trọng số chấm điểm cuối (40% tính toán, 30% phân loại cờ đỏ, 20% kết luận thẩm quyền, 10% tin đồn/trọng yếu) và các điều kiện hoàn thành vụ án. | Luồng nhiệm vụ/quyết định của người dùng và các điểm khó khăn chính cần được kiểm chứng. |
| **Tôn Khánh Ngọc**<br>(2412380035) | Thiết kế cốt truyện & luồng điều tra (Output Owner) | Xây dựng cốt truyện, bối cảnh khủng hoảng, và hồ sơ 5 nhân vật theo mô hình "mỗi người là một vùng dữ liệu tài chính" (không phải hồ sơ tường thuật tách rời số liệu). Thiết kế cơ chế Ghi chú ẩn của David (thưởng có điều kiện theo thứ tự tính toán) và sự kiện tin đồn có điều kiện kích hoạt. Viết nội dung phản hồi của Báo cáo điều tra cuối (giải thích đúng/sai từng phần) và ba đoạn kết theo độ chính xác. | Bối cảnh vụ án ban đầu, luồng thông tin, và các giả định về thông tin phân mảnh hoặc mâu thuẫn. |
| **Đinh Thị Minh Khuê**<br>(2412380022) | Thiết kế UI/UX & tích hợp giao diện (Interface Owner) | Xây dựng wireframe và Design System dùng chung toàn sản phẩm. Thiết kế màn hình Hồ sơ vụ án (hiển thị đầy đủ ngay từ đầu, không cần mở khóa tuần tự), màn hình Danh mục nhân vật (nơi người chơi thực sự lựa chọn điều tra ai), Bảng chẩn đoán tài chính (nhập chỉ số, chọn cờ đỏ, đánh giá độ tin cậy nguồn), Bản đồ quyền hạn tài chính dạng bảng tra cứu tĩnh, đồng hồ đếm ngược 48 giờ, và form Báo cáo điều tra cuối. | Định dạng trình bày cho người dùng mục tiêu, cấu trúc buổi quan sát, và định hướng giao diện ban đầu. |



## 8. Open Questions (Câu hỏi còn bỏ ngỏ — Week 1)

1. Người dùng mục tiêu có thực sự gặp khó khăn khi thông tin tài chính bị phân mảnh trên nhiều nguồn hay không?
2. Khó khăn nào đáng kể hơn: việc kết nối thông tin từ nhiều nguồn, hay việc phân biệt bằng chứng đã kiểm chứng với tin đồn và suy đoán?
3. Có nên thu hẹp thêm đối tượng người dùng mục tiêu theo năm học hoặc theo các học phần tài chính đã học hay không?
4. Mức độ phức tạp tài chính nào là phù hợp với nhóm người dùng mục tiêu đã chọn?
5. Loại thông tin nào tạo ra khó khăn có ý nghĩa mà không khiến tình huống trở nên rối rắm không cần thiết?
6. Những khái niệm tài chính nào nên được tích hợp vào phần điều tra?
7. Có nên đưa yếu tố giới hạn thời gian vào hay không, hay điều đó sẽ gây xao nhãng khỏi nhiệm vụ lập luận tài chính?

## 9. Feedback từ checkpoint (Tuần 1)

| Nội dung | Ghi nhận |
|---|---|
| Feedback received | Problem direction (Đề xuất 1: Tích hợp thông tin), target user và user task được **duyệt, không yêu cầu chỉnh sửa**. Không có nhược điểm nào được nêu riêng cho nhóm. |
| Decision | **Keep** — Giữ nguyên problem statement, target user và user task như bản nháp Tuần 1. |
| Revision made | Không có thay đổi nào về problem/target user/user task. |
| Reason | Hướng đã được duyệt, không cần điều chỉnh. |

**Câu hỏi mở cho Tuần 2:** Main output cụ thể của sản phẩm là gì? Product pattern nào phù hợp nhất? MVP tối thiểu nào vẫn giữ được giá trị cốt lõi của user task?

