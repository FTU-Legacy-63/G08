# WEEK 4 — PROJECT LOGIC CHAIN

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 4

## 1. Purpose and Continuity

Tuần 4 chính thức hóa cách chuyển đầu vào thành kết quả có thể giải thích và kiểm tra. Vấn đề kế thừa vẫn là sinh viên khó kết nối báo cáo tài chính, giao dịch, chính sách và lời khai để đưa ra kết luận kiểm soát có căn cứ.

Người dùng mục tiêu là sinh viên đã có kiến thức tài chính và kiểm soát nội bộ cơ bản. Nhiệm vụ cuối gồm hai quyết định: có xác lập hành vi chủ động vô hiệu hóa kiểm soát hay không, và cá nhân nào chịu trách nhiệm chính. Đầu ra trung tâm là biên bản kết luận về NST-01.

Tài liệu sử dụng dữ liệu và phạm vi đã xác định ở các tuần trước. Nguồn triển khai được đối chiếu là `THE_LAST_HEIR_FULL_GAME_FINAL(3).html`; không thay tình huống bằng một mô hình phân tích khác.

## 2. Project Logic Chain

| Mắt xích | Nội dung của dự án |
|---|---|
| Vấn đề | Khó tổng hợp thông tin từ nhiều nguồn thành lập luận nhất quán |
| Người dùng | Sinh viên có kiến thức nền về tài chính và kiểm soát |
| Nhiệm vụ | Điều tra NST-01, xác định kết luận kiểm soát và trách nhiệm |
| Khó khăn | Nhầm dấu hiệu với bằng chứng; nhầm bối cảnh với giải trình; suy trách nhiệm từ chức danh |
| Hỗ trợ công nghệ | Tổ chức hồ sơ theo bước, kiểm tra lựa chọn, ghi trạng thái và cung cấp phản hồi |
| Đầu vào | Báo cáo, kế hoạch, sổ chi tiết, hợp đồng, chính sách, nhật ký, ngoại lệ và lời khai |
| Logic | Tính toán, đối chiếu kế hoạch, phân loại nguồn, xác lập ranh giới và kiểm tra hiểu biết, hành động |
| Đầu ra | Hồ sơ trách nhiệm, biên bản kiểm soát, xung đột lợi ích và rủi ro gian lận |
| Hành động | Giải thích kết luận và chọn cách xử lý quản trị tương xứng |

Chuỗi điều tra cụ thể được tổ chức thành năm chương. Mỗi chương giải quyết một câu hỏi và giữ lại giới hạn để chương sau tiếp tục xử lý.

| Chương | Câu hỏi chính | Kết quả chuyển tiếp | Số điểm kiểm tra |
|---|---|---|---:|
| I | Khoản chênh lệch nào chưa được giải thích ở cấp tổng hợp? | Tiếp thị và quản lý vượt kế hoạch 3,0 | 9 |
| II | Phần chênh lệch nằm ở tài khoản nào? | Tư vấn còn 2,6 cần truy vết | 6 |
| III | Những bút toán nào tạo thành một giao dịch kinh tế? | NST-01 / ROP-25 có tổng 2,6 | 2 |
| IV | Giao dịch đi qua kiểm soát như thế nào? | Có cơ sở điều tra khả năng vô hiệu hóa kiểm soát | 17 |
| V | Hồ sơ xác lập trách nhiệm của từng người đến mức nào? | Victor có hành vi chủ động; gian lận ở mức rủi ro cần điều tra | 11 |
| **Tổng** | | | **45** |

## 3. Input–Logic–Output Mapping

| Đầu vào | Ý nghĩa | Phép xử lý hoặc quy tắc | Đầu ra |
|---|---|---|---|
| Doanh thu 120,0 và 150,0 | Mức tăng giữa hai năm | Lấy chênh lệch chia doanh thu gốc | Tăng 25,0% |
| Doanh thu theo giá gốc 140,4 | Tách ảnh hưởng sản lượng với giá, cơ cấu | 140,4 − 120,0; 150,0 − 140,4 | 20,4 và 9,6 |
| Phải thu và doanh thu | Chất lượng thu tiền ở cấp tổng hợp | Phải thu cuối kỳ / doanh thu × 365; đọc thêm tuổi nợ và dự phòng | Khoảng 54,8 xuống 51,1 ngày |
| Báo cáo và bảng cơ cấu | Đóng góp vào thay đổi biên lợi nhuận | So tỷ trọng trên cùng cơ sở doanh thu | Khoanh vùng giá vốn, tiếp thị và quản lý, nghiên cứu và phát triển, chi phí khác |
| Kế hoạch và chứng từ thực tế | Phân biệt số được duyệt với số ghi nhận | Đối chiếu từng cơ sở so sánh | Tiếp thị và quản lý còn 3,0 |
| Năm tài khoản và chứng từ | Giải thích chênh lệch chi phí | Phân loại cơ sở, thực tế, giải trình và bối cảnh | Tư vấn còn 2,6 |
| Sổ, hợp đồng và bàn giao | Ranh giới kinh tế và mức đầy đủ | Cùng hợp đồng, cùng mục đích, đủ khoản | Ba khoản NST-01 bằng 2,6 |
| Tổng liên quan và FIN-AUTH-05 | Thẩm quyền áp dụng | Cộng tổng đã phát sinh, so ma trận | 19/07 đạt 1,8 và cần cấp cao hơn theo mô hình |
| Nhật ký phân luồng, sự cố | Phân biệt thiết kế hệ thống với sự cố vận hành | So cơ sở 0,9 với tổng 1,8; so thời điểm 10:48 với 10:51 | Lỗi phân luồng có trước sự cố |
| Ngoại lệ và giám sát | Tính hợp lệ của cách xử lý, hành động sau giao dịch | Kiểm tra lý do, quyết định và việc đánh giá tổng | Nhận định NS-073, NS-101 và giám sát |
| Thông báo, mở thư, biểu mẫu và lịch sử | Hiểu biết cụ thể và hành động trực tiếp | Kết nối thẩm quyền, hiểu biết và hành động với cùng một người | Hồ sơ trách nhiệm cá nhân |
| Sở hữu, quan hệ và khai báo | Xung đột lợi ích | Đối chiếu ba nguồn | Quan ngại về động cơ; chưa chứng minh gian lận |

## 4. Financial Calculations

### 4.1 Growth and Receivables

Các phép tính dùng triệu USD, trừ tỷ lệ và số ngày. Tính trên số gốc rồi làm tròn khi trình bày.

| Phép tính | Kết quả | Cách diễn giải |
|---|---|---|
| (150,0 − 120,0) / 120,0 | 25,0% | Tăng doanh thu |
| 140,4 − 120,0 | 20,4 | Ảnh hưởng sản lượng |
| 150,0 − 140,4 | 9,6 | Ảnh hưởng giá và cơ cấu |
| 120,0 + 20,4 + 9,6 | 150,0 | Cầu nối khớp doanh thu |
| (21,0 − 18,0) / 18,0 | 16,7% | Phải thu tăng chậm hơn doanh thu |
| 18,0 / 120,0 × 365 | 54,8 ngày | Ước tính năm 2024 |
| 21,0 / 150,0 × 365 | 51,1 ngày | Ước tính năm 2025 |

Số ngày thu tiền dùng phải thu cuối kỳ và doanh thu năm, không phải phải thu bình quân hoặc doanh thu bán chịu. Kết quả tổng hợp không xác minh riêng mọi giao dịch doanh thu.

### 4.2 Margin and Comparison Bases

Biên lợi nhuận hoạt động giảm từ 22,3 / 120,0 = 18,6% xuống 20,5 / 150,0 = 13,7%. Giá vốn, tiếp thị và quản lý, nghiên cứu và phát triển, chi phí hoạt động khác tăng tỷ trọng; chi phí phân phối giảm tỷ trọng và thu nhập hoạt động khác giữ khoảng 1,0%.

| Khoản mục | Biến động thực tế 2024–2025 | Thực tế 2025 so kế hoạch 2025 |
|---|---|---|
| Biên lợi nhuận gộp | Giảm khoảng 2,5 điểm phần trăm | 43,3% so 44,0%; thấp hơn khoảng 0,7 điểm |
| Tiếp thị và quản lý | Tăng 6,0 | 21,0 − 18,0 = +3,0 |
| Nghiên cứu và phát triển | Tăng 1,6 | 6,1 − 6,0 = +0,1 |
| Chi phí hoạt động khác | Tăng 2,5 | 6,9 − 6,7 = +0,2 |

Tác động biên lợi nhuận gộp −1,7 − 0,6 − 0,4 + 0,2 = −2,5 điểm, phần tăng nghiên cứu và phát triển 1,6 và RC-25 là 2,5 giải thích biến động giữa hai năm. Không gọi các số này là mức vượt kế hoạch. Hồ sơ tiếp thị và quản lý xác nhận số ghi nhận 21,0 nhưng phần chênh kế hoạch 3,0 vẫn cần phân rã.

### 4.3 Cash and Account Reconciliation

| Phép đối chiếu | Kết quả |
|---|---:|
| 20,5 + 5,5 − 5,0 − 1,0 − 9,0 | Dòng tiền kinh doanh 11,0 |
| −8,0 − 4,0 + 1,0 | Dòng tiền đầu tư −11,0 |
| +6,0 − 7,0 − 1,0 | Dòng tiền tài trợ −2,0 |
| 8,0 + 11,0 − 11,0 − 2,0 | Tiền cuối kỳ 6,0 |
| 8,7 + 4,4 + 1,6 + 1,6 + 1,7 | Tổng ngân sách 18,0 |
| 9,0 + 4,5 + 1,8 + 4,2 + 1,5 | Tổng thực tế 21,0 |
| 0,3 + 0,1 + 0,2 + 2,6 − 0,2 | Tổng chênh lệch 3,0 |
| 0,9 + 0,9 + 0,8 | NST-01 bằng 2,6; khoảng 61,9% sổ tư vấn 4,2 |

## 5. Classification and Control Rules

### 5.1 Document Roles and Transaction Boundary

Chương II sử dụng bảng chấp nhận `ANSWERS` để kiểm tra vai trò chứng từ. Cơ sở được phê duyệt và số ghi nhận phải được xác lập; giải trình định lượng cần thiết để đóng tài khoản thông thường. Nhân sự là ví dụ yêu cầu đủ các vai trò; tư vấn không có tài liệu giải trình định lượng trong chương, còn tài khoản khác không yêu cầu ô bối cảnh.

Dự báo nháp khoảng 4,0 không tự thay ngân sách tư vấn 1,6. Chứng từ bối cảnh không thay nguồn định lượng phần chênh lệch. Chương III tiếp tục kiểm tra cùng hợp đồng, cùng mục đích và đủ các bút toán liên quan; cùng nhà cung cấp hoặc cộng đúng 2,6 chưa đủ.

### 5.2 Authority and Alternative Procedures

| Tổng giá trị theo quy tắc giả lập | Thẩm quyền tối thiểu |
|---|---|
| Không quá 0,5 | Trưởng bộ phận |
| Trên 0,5 đến 1,0 | Trưởng bộ phận và quản lý tài chính |
| Trên 1,0 | Giám đốc tài chính và Hội đồng quản trị |

Mô hình Chương IV xét tổng đã phát sinh 0,9 → 1,8 → 2,6; mốc 19/07 là lần đầu tổng này vượt 1,0. Trần NST-01 là 2,8 và quy định phê duyệt trước cam kết là các thông tin riêng; thời điểm toàn bộ cam kết có hiệu lực chưa đủ rõ để mở rộng kết luận về mốc ban đầu.

Cách xử lý thay thế chỉ đổi phương thức lấy quyết định. Người học kiểm tra ba phần: lý do có tài liệu, quyết định đúng thẩm quyền cho chính giao dịch và việc đánh giá lại tổng, cấp phê duyệt. NS-073 có sự cố thật nhưng thiếu chứng cứ quyết định và đánh giá tổng; NS-101 có lý do thời hạn pháp lý mâu thuẫn với tài liệu về mốc nội bộ.

### 5.3 Evidence and Responsibility

Chỉ dữ kiện gắn với nhận định đã xác nhận được chuyển tiếp dưới trạng thái đã xác lập. Hai bước đầu Chương IV không yêu cầu ghim thủ công; nhận định phân luồng được khóa tự xác lập các dữ kiện hệ thống tương ứng.

Chương V chấp nhận lời khai khi chọn đúng tập hồ sơ, không trùng, các hồ sơ đều khả dụng và đánh giá đúng. Đây là phép kiểm tra tập bằng chứng chính xác, không phải chỉ cần chọn một tập lớn có chứa đáp án đúng.

| Nhân vật | Kết luận có căn cứ | Giới hạn |
|---|---|---|
| Victor | Hành vi chủ động vô hiệu hóa kiểm soát | Dựa trên thông báo tổng 1,8, nhật ký mở thư và biểu mẫu 11:23 |
| Lucas | Thiếu sót kiểm soát | Chưa đủ chứng cứ hành vi chủ động tương tự |
| David | Chưa đủ bằng chứng quy lỗi cá nhân | Không có nhiệm vụ hệ thống không chứng minh không biết qua mọi kênh |
| Sophia | Có hành động giám sát sau giao dịch | Không tự chứng minh toàn bộ hệ thống giám sát hiệu quả |

Nhật ký NS-101 ghi Victor tạo yêu cầu, đính kèm thư; việc chọn loại ngoại lệ thuộc hàng đợi dùng chung `FIN-OPS-Q2`. Không quy thao tác đó cho một cá nhân khi chưa có nhật ký định danh bổ sung.

## 6. Explainability and Validation

Mỗi kết quả cần nêu điều đã xác lập, nguồn hỗ trợ, giới hạn và hành động tiếp theo. Xung đột lợi ích của Elena và Victor làm tăng quan ngại về động cơ; không thay bằng chứng hành vi hoặc chứng minh gian lận.

- Công thức điểm và các ví dụ kiểm tra nằm trong [SCORING_AND_SAMPLE_TEST_FINAL.md](SCORING_AND_SAMPLE_TEST_FINAL.md).
- Cách thao tác từng chương nằm trong [GAMEPLAY_MECHANICS_FINAL.md](GAMEPLAY_MECHANICS_FINAL.md).
- Giả định, kỹ thuật và mức sẵn sàng nằm trong [ASSUMPTIONS_AND_TECHNICAL_READINESS_FINAL.md](ASSUMPTIONS_AND_TECHNICAL_READINESS_FINAL.md).

Kiểm tra ngày 21/10/2026 gồm 40 tình huống logic và 18 phép đối chiếu dữ liệu, có kết quả tại [hồ sơ kiểm thử Tuần 6](../WEEK_6/TEST_CASES_FINAL.md). Các phép kiểm tra này không thay thế chơi thử giao diện hoặc đo hiệu quả học tập.

## 7. Ownership and Handoff

| Đầu mối theo phân công | Nội dung phụ trách | Bước tiếp theo |
|---|---|---|
| Phạm Quỳnh Phương | Chuỗi vấn đề–đầu ra và tính thống nhất | Đối chiếu với yêu cầu giữa kỳ |
| Phạm Triệu Tiến Dũng | Công thức, số liệu và ranh giới | Kiểm tra cơ sở so sánh và đơn vị |
| Nguyễn Minh Hiền | Quy tắc, điểm và điều kiện | Rà soát kết quả kiểm tra, giới hạn chấm điểm |
| Tôn Khánh Ngọc | Chứng từ, lời khai và kết luận | Giữ đúng phạm vi chứng minh |
| Đinh Thị Minh Khuê | Ánh xạ dữ liệu và mã | Nối luồng với giao diện và kiểm thử tích hợp |

Tuần 5 sử dụng các kết quả này để trình bày đầu vào, phản hồi và đầu ra trên giao diện. Phân công là đầu mối công việc; xác nhận đóng góp thực tế cần đi kèm sản phẩm và lịch sử thay đổi.
