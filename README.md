# The Last Heir — Checkpoint Tuần 1 & 2

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

Nhóm lựa chọn **Đề xuất 1 — Tích hợp thông tin**, vì đây là khó khăn cốt lõi mà dự án hướng tới khai thác: sinh viên có thể hiểu từng khái niệm tài chính riêng lẻ, nhưng gặp khó khi kết hợp thông tin từ nhiều nguồn và xác định thông tin nào nên được dùng làm căn cứ cho kết luận cuối cùng.

*(Xem mục "Vì sao đây là Week 2, không phải Week 1" trong phần Week 2 bên dưới về cách hướng này được thu hẹp thêm sau checkpoint.)*

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

> Sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản gặp khó khăn khi xác định cách giải thích đáng tin cậy nhất cho một bất thường tài chính doanh nghiệp, vì thông tin liên quan bị phân mảnh giữa hồ sơ tài chính, tài liệu nội bộ, thông tin công khai và các thông tin chưa được kiểm chứng — khiến việc phân biệt bằng chứng đáng tin cậy với nhiễu và suy đoán trở nên khó khăn.


## 5. Initial Source / Observation (Nguồn giả định ban đầu & kế hoạch quan sát)

Khó khăn của người dùng được đề xuất hiện đang được xem là một **giả định cần được kiểm chứng**:

> Sinh viên có kiến thức tài chính cơ bản có thể gặp khó khăn trong việc tích hợp thông tin tài chính phân mảnh và phân biệt bằng chứng đã kiểm chứng với suy đoán khi xử lý một tình huống doanh nghiệp mở.

**Kế hoạch kiểm chứng:** thực hiện một buổi quan sát quy mô nhỏ với sinh viên thuộc nhóm người dùng mục tiêu, sử dụng một tình huống tài chính doanh nghiệp ngắn gồm nhiều loại thông tin. Buổi quan sát sẽ kiểm tra xem người tham gia có thể xác định bất thường tài chính chính, xác định thông tin nào liên quan, phân biệt thông tin đã kiểm chứng với chưa kiểm chứng, kết nối bằng chứng từ nhiều nguồn, và đưa ra kết luận có căn cứ.

## 6. Vì sao đây là vấn đề tài chính hoặc ngân hàng?

Vấn đề này liên quan trực tiếp đến lĩnh vực tài chính vì người dùng phải diễn giải báo cáo tài chính, đánh giá các giao dịch doanh nghiệp, so sánh thông tin từ nhiều nguồn khác nhau, và hình thành một nhận định tài chính dựa trên bằng chứng. Dự án do đó xuất phát từ một **vấn đề về lập luận tài chính**, còn công nghệ sẽ được lựa chọn sau, chỉ nhằm hỗ trợ người dùng thực hiện nhiệm vụ này hiệu quả hơn.

## 7. Đóng góp cá nhân 
| Họ tên (MSSV) | Vai trò | Sản phẩm cuối cùng | Sản phẩm Tuần 1 |
|---|---|---|---|
| **Phạm Quỳnh Phương**<br>(2411380865) | Trưởng nhóm & Tích hợp hệ thống | Chịu trách nhiệm xây dựng cấu trúc trạng thái trò chơi (Game-State Structure), theo dõi phần trăm độ tin cậy, lịch sử hành động, số giờ ảo còn lại và các tài liệu đã mở khóa. Xây dựng và duy trì Nhật ký Lộ trình & Quyết định (Roadmap & Decision Log) phục vụ việc theo dõi tiến độ chung giữa các phân hệ. Đảm nhận việc tích hợp hệ thống, kết nối nội dung do Dũng và Ngọc xây dựng với phần giao diện của Khuê và phần logic gameplay của Hiền thành một sản phẩm mẫu thống nhất. | README phiên bản 1, cấu trúc repository, bản tóm tắt hướng vấn đề, và điều phối chung của nhóm. |
| **Phạm Triệu Tiến Dũng**<br>(2412380014) | Thiết kế hồ sơ tài chính & bằng chứng | Xây dựng bộ dữ liệu tài chính (báo cáo tài chính, sao kê ngân hàng, hợp đồng) và bản đồ bằng chứng (Evidence Map) mô tả nội dung, ý nghĩa và mức độ tin cậy của từng bằng chứng. Xây dựng dòng chảy giao dịch (Transaction Trail) thể hiện dòng tiền xuyên suốt ba giai đoạn điều tra, cùng bộ manh mối gây nhiễu (Red Herring Set). Xây dựng logic vụ án cuối cùng (Final Case Logic), tức chuỗi bằng chứng xác lập Victor là thủ phạm thực sự. | Ba đề xuất vấn đề (problem candidates) và cấu trúc ban đầu của hồ sơ tài chính/bằng chứng. |
| **Nguyễn Minh Hiền**<br>(2412380018) | Thiết kế gameplay & cơ chế giải đố | Xây dựng vòng lặp lõi của trò chơi (Thu thập → Phân tích → Xác minh → Kết nối → Kết luận), cùng cơ chế gợi ý (hint economy) xác định công thức thay đổi phần trăm độ tin cậy theo từng thao tác và chi phí thời gian tương ứng. Xây dựng quy tắc chấm điểm theo bốn tiêu chí và quy tắc giới hạn thời gian, cùng các điều kiện tiến trình và hoàn thành vụ án. Thực hiện kiểm thử tích hợp cho phần logic gameplay, phối hợp cùng Phương. | Luồng nhiệm vụ/quyết định của người dùng và các điểm khó khăn chính cần được kiểm chứng. |
| **Tôn Khánh Ngọc**<br>(2412380035) | Thiết kế cốt truyện & luồng điều tra | Xây dựng cốt truyện, bối cảnh khủng hoảng và hồ sơ các nghi phạm (động cơ, mối quan hệ). Xây dựng bản đồ hé lộ thông tin (Information Reveal Map), xác định thời điểm và giai đoạn mà từng bằng chứng do Dũng thiết kế sẽ được mở khóa cho người chơi, theo trình tự bóc tách nhiều lớp. Thiết kế trình tự mở đầu trò chơi, bao gồm cảnh dẫn nhập và các giả thuyết mồi ban đầu. | Bối cảnh vụ án ban đầu, luồng thông tin, và các giả định về thông tin phân mảnh hoặc mâu thuẫn. |
| **Đinh Thị Minh Khuê**<br>(2412380022) | Thiết kế UI/UX & tích hợp giao diện | Xây dựng wireframe và hệ thống thiết kế (Design System) dùng chung cho toàn bộ sản phẩm. Thiết kế các màn hình xem tài liệu (Document Viewer), bảng tin tức/tin đồn (News/Rumor Feed) và bảng điều khiển điều tra (Investigation Dashboard). Đảm nhận thiết kế Assumption Board — giao diện dạng corkboard, bao gồm thao tác kéo-thả ở Lớp 1, khung gợi ý ở Lớp 2, và hiệu ứng thay đổi độ tin cậy theo thời gian thực; đây là thành phần có độ phức tạp cao nhất trong giao diện. Thiết kế các trạng thái phản hồi của bằng chứng (đã xác minh / đã bác bỏ / bị khóa / hoàn tất). | Định dạng trình bày cho người dùng mục tiêu, cấu trúc buổi quan sát, và định hướng giao diện ban đầu. |


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
| Feedback received | Problem direction (Đề xuất 1 — Tích hợp thông tin), target user và user task được thầy **duyệt, không yêu cầu chỉnh sửa**. Không có nhược điểm nào được nêu riêng cho nhóm. |
| Decision | **Keep** — Giữ nguyên problem statement, target user và user task như bản nháp Tuần 1. |
| Revision made | Không có thay đổi nào về problem/target user/user task. |
| Reason | Hướng đã được duyệt, không cần điều chỉnh. |

**Câu hỏi mở cho Tuần 2:** Main output cụ thể của sản phẩm là gì? Product pattern nào phù hợp nhất? MVP tối thiểu nào vẫn giữ được giá trị cốt lõi của user task?

