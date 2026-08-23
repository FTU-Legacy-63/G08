# The Last Heir — Checkpoint Tuần 1 & 2

> Học phần: **NHA408E** · Nhóm: **G08** · Ý tưởng: Một trò chơi điều tra tài chính, trong đó người chơi phải tự đọc dữ liệu tài chính thô, tự tính toán chỉ số, và xác định đúng cách giải thích được bằng chứng định lượng ủng hộ mạnh nhất cho một bất thường tài chính doanh nghiệp, trong vòng 48 giờ ảo.

## Repository evidence

| Giai đoạn | Bằng chứng |
|---|---|
| Week 1 | Problem candidates, target user, user task, problem statement, đóng góp cá nhân và revision sau checkpoint — trong README này |
| Week 2 | [Project Proposal](docs/PROJECT_PROPOSAL.md) |
| Week 2 | [Solution Structure](docs/SOLUTION_STRUCTURE.md) |

## Thành viên nhóm

| Họ tên | MSSV | Vai trò |
|---|---|---|
| Phạm Quỳnh Phương | 2411380865 | Trưởng nhóm & Tích hợp hệ thống |
| Phạm Triệu Tiến Dũng | 2412380014 | Thiết kế dữ liệu tài chính & bằng chứng |
| Nguyễn Minh Hiền | 2412380018 | Thiết kế gameplay & cơ chế tính toán |
| Tôn Khánh Ngọc | 2412380035 | Thiết kế cốt truyện & luồng điều tra |
| Đinh Thị Minh Khuê | 2412380022 | Thiết kế UI/UX & tích hợp giao diện |

Tên vai trò tự nó không được xem là bằng chứng đóng góp — mỗi thành viên được gắn với output cụ thể, có thể kiểm tra tại vị trí nêu trong các bảng đóng góp cá nhân bên dưới.

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

*(Phát biểu vấn đề không đề cập đến công nghệ hay giải pháp cụ thể, tuân theo nguyên tắc ở mục 8 của tài liệu hướng dẫn Tuần 1.)*

## 5. Initial Source / Observation (Nguồn giả định ban đầu & kế hoạch quan sát)

Khó khăn của người dùng được đề xuất hiện đang được xem là một **giả định cần được kiểm chứng**:

> Sinh viên có kiến thức tài chính cơ bản có thể gặp khó khăn trong việc tích hợp thông tin tài chính phân mảnh và phân biệt bằng chứng đã kiểm chứng với suy đoán khi xử lý một tình huống doanh nghiệp mở.

**Kế hoạch kiểm chứng:** thực hiện một buổi quan sát quy mô nhỏ với sinh viên thuộc nhóm người dùng mục tiêu, sử dụng một tình huống tài chính doanh nghiệp ngắn gồm nhiều loại thông tin. Buổi quan sát sẽ kiểm tra xem người tham gia có thể xác định bất thường tài chính chính, xác định thông tin nào liên quan, phân biệt thông tin đã kiểm chứng với chưa kiểm chứng, kết nối bằng chứng từ nhiều nguồn, và đưa ra kết luận có căn cứ.

## 6. Vì sao đây là vấn đề tài chính hoặc ngân hàng?

Vấn đề này liên quan trực tiếp đến lĩnh vực tài chính vì người dùng phải diễn giải báo cáo tài chính, đánh giá các giao dịch doanh nghiệp, so sánh thông tin từ nhiều nguồn khác nhau, và hình thành một nhận định tài chính dựa trên bằng chứng. Dự án do đó xuất phát từ một **vấn đề về lập luận tài chính**, còn công nghệ sẽ được lựa chọn sau, chỉ nhằm hỗ trợ người dùng thực hiện nhiệm vụ này hiệu quả hơn.

## 7. Đóng góp cá nhân trong Week 1
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
| Decision | **Keep** — giữ nguyên problem statement, target user và user task như bản nháp Tuần 1. |
| Revision made | Không có thay đổi nào về problem/target user/user task. |
| Reason | Hướng đã được duyệt, không cần điều chỉnh. |

**Câu hỏi mở cho Tuần 2:** Main output cụ thể của sản phẩm là gì? Product pattern nào phù hợp nhất? MVP tối thiểu nào vẫn giữ được giá trị cốt lõi của user task?

---

# Week 2 — Product Direction

## Product decision summary

Week 2 kế thừa difficulty đã xác định ở Week 1, nhưng được thu hẹp thêm sau quá trình brainstorm sản phẩm: khó khăn cốt lõi không nằm ở việc phân biệt nguồn tin thật/giả (email, hồ sơ nhân sự, tin đồn), mà nằm ở việc **tự đọc dữ liệu tài chính thô, tự tính chỉ số, và nhận diện bất thường qua số liệu** — thay vì đoán qua lời kể. Thay đổi này được thực hiện để tránh sản phẩm lệch thành một trò chơi trinh thám thuần túy, đảm bảo cơ chế chơi thực sự đo đúng năng lực phân tích tài chính.

> Người dùng không thể chỉ đọc câu chuyện để suy đoán bất thường tài chính — bất thường chỉ lộ ra sau khi người dùng tự tính đúng chỉ số và so với benchmark ngành.

| Thành phần | Quyết định hiện tại |
|---|---|
| Target user | Sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản |
| Problem | Bằng chứng thật nằm trong số liệu định lượng nhưng dễ bị lấn át bởi thông tin định tính (hồ sơ, tin đồn) |
| User task | Tự tính chỉ số tài chính từ dữ liệu thô, so benchmark, phân loại cờ đỏ, đối chiếu thẩm quyền, hình thành kết luận có căn cứ |
| Desired outcome | Người dùng tự đọc dữ liệu thô, tự tính chỉ số, tự nhận diện bất thường có ý nghĩa — không đoán theo cảm tính |
| Main output | Kết quả đối chiếu chỉ số/kết luận người dùng tự tính với đáp án đúng, kèm giải thích |
| Core process | Tính toán → Phân loại → Đối chiếu thẩm quyền → Giải thích |
| Product pattern | Financial Learning Game — mô hình quyết định và hệ quả (decision-consequence loop) |
| Core MVP | 3 bất thường tài chính chính (Earnings Quality, DSO, Customer Concentration) + 1 bẫy ngưỡng trọng yếu + Bảng chẩn đoán tài chính + đồng hồ 48 giờ + Báo cáo điều tra cuối |

Mô phỏng giá cổ phiếu phản ứng động theo thời gian thực không còn là yêu cầu bắt buộc của core MVP — đã được đánh giá là rủi ro kỹ thuật cao nhất và không ảnh hưởng trực tiếp điểm số, thay bằng một đồng hồ đếm ngược 48 giờ đơn giản. Chi tiết lý do nằm trong [Solution Structure, mục 7](docs/SOLUTION_STRUCTURE.md#7-initial-route-hypothesis).

Chi tiết lập luận sản phẩm nằm trong [Project Proposal](docs/PROJECT_PROPOSAL.md). Chuỗi giải pháp, MVP, fallback, technical route và responsibility map nằm trong [Solution Structure](docs/SOLUTION_STRUCTURE.md).

## Đóng góp cá nhân trong Week 2

| Thành viên | Đóng góp Week 2 | Output nhìn thấy được | Evidence location |
|---|---|---|---|
| Phạm Quỳnh Phương | Thiết kế cấu trúc state xuyên suốt game (nhân vật đã mở, chỉ số đã tính, tin đồn đã xác minh, đồng hồ 48 giờ); tích hợp các phần thành luồng thống nhất | Integration owner trong Responsibility by Output | [Solution Structure, mục 8](docs/SOLUTION_STRUCTURE.md#8-responsibility-by-output) |
| Phạm Triệu Tiến Dũng | Thiết kế ba bộ dữ liệu tài chính thô (Earnings Quality, DSO, Customer Concentration), bộ dữ liệu nhiễu (ngưỡng trọng yếu), đáp án đúng cho từng chỉ số | Input owner; số liệu chi tiết ở Initial Required Information | [Solution Structure, mục 3](docs/SOLUTION_STRUCTURE.md#3-initial-required-information) |
| Nguyễn Minh Hiền | Xây dựng công thức tính chỉ số, benchmark so sánh, danh sách nhãn cờ đỏ (đúng + nhiễu), logic đồng hồ 48 giờ | Logic owner; Core Process Type | [Solution Structure, mục 4](docs/SOLUTION_STRUCTURE.md#4-core-process-type) |
| Tôn Khánh Ngọc | Thiết kế cơ chế Follow the Money (nhân vật = vùng dữ liệu), Ghi chú ẩn có điều kiện, sự kiện tin đồn, nội dung Báo cáo điều tra cuối | Output owner; MVP Flow | [Solution Structure, mục 5](docs/SOLUTION_STRUCTURE.md#5-mvp-flow) |
| Đinh Thị Minh Khuê | Thiết kế màn hình Bảng chẩn đoán tài chính, danh sách 5 nhân vật, Bảng phân quyền, đồng hồ 48 giờ, form Báo cáo điều tra cuối | Interface owner | [Solution Structure, mục 8](docs/SOLUTION_STRUCTURE.md#8-responsibility-by-output) |

## Checkpoint 2 revision record

Phần này được cập nhật sau Checkpoint 2 để lưu lại chu trình PBL.

| Nội dung | Ghi nhận |
|---|---|
| Feedback received | *Chưa cập nhật* |
| Decision | *Keep / Change / Simplify / Restart* |
| Revision made | *Chưa cập nhật* |
| Reason | *Chưa cập nhật* |

---

*Cập nhật lần cuối: Checkpoint Tuần 2.*
