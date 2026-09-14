# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

## WEEK 2 — SOLUTION STRUCTURE

### 1. Purpose of the Solution Structure

Tài liệu này chuyển định hướng sản phẩm trong `PROJECT_PROPOSAL.md` thành một cấu trúc có thể triển khai. Nếu Project Proposal giải thích sản phẩm giúp ai, giải quyết vấn đề gì và tạo ra giá trị gì, Solution Structure tập trung vào cách đầu vào được chuyển thành đầu ra, MVP cần giữ những thành phần nào và hướng kỹ thuật ban đầu của dự án.

Câu hỏi trung tâm là:

> **Sản phẩm cần nhận đầu vào gì, xử lý theo logic nào và tạo đầu ra gì để người dùng vừa đánh giá Management Override vừa xác định cá nhân chịu trách nhiệm chính bằng bằng chứng?**

### 2. Target Product Structure

Sản phẩm hoàn chỉnh được tổ chức quanh một chuỗi điều tra duy nhất:

**Người dùng → Thông tin tài chính → Sàng lọc tài chính → Tín hiệu tài chính đáng ngờ → Thông tin cấp giao dịch → Bằng chứng kiểm soát và phê duyệt → Đánh giá Management Override → Quy trách nhiệm → Kết luận về Management Override và trách nhiệm dựa trên bằng chứng → Hành động của người dùng**

Materiality và việc xem xét gian lận hoặc Management Override là hai nguyên tắc xuyên suốt toàn bộ chuỗi.

### 3. Layer Structure

| Layer | Vai trò | Kiến thức / logic chính | Đầu ra |
|---|---|---|---|
| Layer 1 — Financial Screening | Ưu tiên hướng điều tra | Các chỉ số Beneish được lựa chọn / sàng lọc tài chính | Tín hiệu tài chính đáng ngờ |
| Layer 2 — Control Investigation | Kiểm tra bằng chứng kiểm soát và phê duyệt | COSO, thẩm quyền, tính độc lập, xung đột lợi ích, dấu hiệu vượt qua kiểm soát | Bằng chứng về Management Override |
| Layer 3 — Responsibility Attribution | Xác định cá nhân chịu trách nhiệm chính | Thẩm quyền, mức độ tham gia, xung đột lợi ích, mức độ liên hệ với giao dịch, bằng chứng vượt qua kiểm soát; Fraud Triangle chỉ hỗ trợ giải thích | Cá nhân chịu trách nhiệm chính và lập luận quy trách nhiệm |

Ba layer không phải ba bài tập độc lập. Đầu ra của Layer 1 là đầu vào cho Layer 2, còn đầu ra của Layer 2 là bằng chứng cần thiết để Layer 3 thực hiện việc quy trách nhiệm.

### 4. User–Input–Process–Output–User

**Người dùng:** sinh viên Tài chính, Kế toán, Ngân hàng hoặc Kinh doanh có kiến thức tài chính cơ bản và đã được tiếp cận COSO và Fraud Triangle.

**Đầu vào:** dữ liệu tài chính, thông tin giao dịch, bằng chứng kiểm soát và phê duyệt, thông tin về vai trò và thẩm quyền, thông tin về tính độc lập hoặc xung đột lợi ích, cùng ngưỡng trọng yếu được thiết lập từ đầu.

**Quy trình xử lý:** sàng lọc, so sánh, truy vết giao dịch, kiểm tra kiểm soát, đánh giá Management Override, quy trách nhiệm và tổng hợp bằng chứng.

**Đầu ra:** Sơ đồ truy vết tài chính và Kết luận về Management Override và trách nhiệm dựa trên bằng chứng.

**Hành động của người dùng:** người chơi đưa ra hai quyết định cuối cùng: Management Override có xảy ra hay không, và ai là cá nhân chịu trách nhiệm chính; sau đó giải thích chuỗi bằng chứng hỗ trợ cả hai quyết định.

Ở phạm vi MVP, cấu trúc này được giữ nguyên nhưng mỗi thành phần được thu nhỏ.

### 5. Main Output Backward Mapping

| Đầu ra chính | Logic cần có | Đầu vào cần có | Thành phần cần có |
|---|---|---|---|
| Kết luận về Management Override | Đối chiếu thiết kế và vận hành kiểm soát, phê duyệt, thẩm quyền, tính độc lập và dấu hiệu vượt qua kiểm soát | Hồ sơ phê duyệt, thông tin vai trò, bằng chứng kiểm soát, dữ liệu giao dịch | Control Investigation |
| Cá nhân chịu trách nhiệm chính | So sánh thẩm quyền, mức độ tham gia, xung đột lợi ích, lợi ích liên quan, mức độ liên hệ trực tiếp với giao dịch và bằng chứng vượt qua kiểm soát | Thông tin vai trò, luồng phê duyệt, bằng chứng xung đột lợi ích, mức độ tham gia giao dịch | Responsibility Attribution |
| Lập luận quy trách nhiệm | Chỉ ra vì sao bằng chứng đối với một cá nhân mạnh hơn các cá nhân khác | Hồ sơ bằng chứng của các cá nhân liên quan | Final Review |
| Sơ đồ truy vết tài chính | Ghi lại quá trình lập luận từ tín hiệu đến cá nhân và kết luận | Kết quả của toàn bộ các bước | Financial Trace Map |

Việc suy ngược từ đầu ra cho thấy rằng nếu MVP bỏ bước quy trách nhiệm thì sản phẩm không còn tạo được đầy đủ đầu ra cốt lõi đã xác định trong Project Proposal.

### 6. MVP Definition

MVP của The Last Heir là **phiên bản điều tra tài chính rút gọn nhưng hoàn chỉnh từ đầu đến cuối**.

MVP giữ nguyên giá trị cốt lõi, nhiệm vụ cốt lõi của người dùng, logic điều tra và đầu ra cuối cùng. Nhóm giảm số biến, tài liệu, nhân vật liên quan, lựa chọn và nhánh xử lý thay vì loại bỏ một giai đoạn hoàn chỉnh.

Nhiệm vụ cốt lõi của MVP là:

> **Đi từ một tín hiệu tài chính đáng chú ý đến giao dịch Northstar, kiểm tra bằng chứng kiểm soát và phê duyệt, đánh giá Management Override và xác định cá nhân chịu trách nhiệm chính dựa trên một tập bằng chứng tối thiểu nhưng đủ để hình thành kết luận.**

Đầu vào cốt lõi gồm:

- dữ liệu tài chính hai kỳ;
- một hoặc một nhóm rất nhỏ chỉ số sàng lọc;
- một giao dịch Northstar;
- một hoặc hai bằng chứng kiểm soát hoặc phê duyệt;
- thông tin về vai trò và thẩm quyền của một số ít cá nhân liên quan;
- thông tin về tính độc lập hoặc xung đột lợi ích;
- ngưỡng trọng yếu.

Đầu ra cốt lõi gồm:

- Sơ đồ truy vết tài chính rút gọn;
- Kết luận rút gọn về Management Override và trách nhiệm dựa trên bằng chứng.

### 7. MVP User Flow

**Bước 1 — Mở đầu tình huống**

Người chơi nhận bối cảnh doanh nghiệp, ngưỡng trọng yếu và thông tin tài chính ban đầu. Sản phẩm cũng đặt ra nguyên tắc rằng khả năng gian lận và Management Override phải được xem xét xuyên suốt quá trình điều tra.

**Bước 2 — Quan sát thông tin tài chính**

Người chơi quan sát dữ liệu tài chính hai kỳ và xác định biến động đáng chú ý.

**Bước 3 — Sàng lọc tài chính**

Người chơi sử dụng các chỉ số sàng lọc được lựa chọn để quyết định tín hiệu nào đáng được ưu tiên. Bước này chỉ trả lời câu hỏi **“vấn đề nào đáng được điều tra sâu hơn?”**, không trả lời **“gian lận đã xảy ra hay chưa?”**.

**Bước 4 — Truy vết xuống giao dịch**

Người chơi truy vết tín hiệu xuống giao dịch Northstar.

**Bước 5 — Kiểm tra bằng chứng kiểm soát và phê duyệt**

Người chơi xem hồ sơ phê duyệt, thông tin về thẩm quyền, tính độc lập hoặc mối quan hệ lợi ích, cùng bằng chứng về quy trình kiểm soát thông thường. Mục tiêu là xác định liệu phê duyệt chỉ hợp lệ về hình thức hay kiểm soát thực sự được vận hành đúng bản chất.

**Bước 6 — Đánh giá Management Override**

Người chơi tổng hợp bằng chứng kiểm soát và đánh giá liệu bằng chứng hiện có có hỗ trợ kết luận về Management Override hay không.

**Bước 7 — Quy trách nhiệm**

Người chơi so sánh các cá nhân liên quan dựa trên thẩm quyền, mức độ tham gia, xung đột lợi ích, lợi ích liên quan, mức độ liên hệ trực tiếp với giao dịch và bằng chứng vượt qua kiểm soát để xác định cá nhân chịu trách nhiệm chính.

Fraud Triangle chỉ được sử dụng để hỗ trợ giải thích bối cảnh rủi ro gian lận, không tự xác định người chịu trách nhiệm.

**Bước 8 — Kết quả cuối**

Sản phẩm hiển thị:

- Sơ đồ truy vết tài chính rút gọn;
- kết luận về Management Override;
- cá nhân chịu trách nhiệm chính;
- bằng chứng quan trọng hỗ trợ đánh giá Management Override;
- bằng chứng quan trọng hỗ trợ việc quy trách nhiệm;
- phản hồi giải thích logic đúng hoặc sai.

### 8. Why the MVP Is a Mini Final Product

| Sản phẩm hoàn chỉnh | MVP |
|---|---|
| Nhiều chỉ số tài chính | 1–3 chỉ số thiết yếu |
| Nhiều tín hiệu giao dịch | 1 giao dịch Northstar |
| Nhiều tài liệu kiểm soát | 1–2 bằng chứng thiết yếu |
| Phân tích kiểm soát đầy đủ | 1 vấn đề kiểm soát cốt lõi |
| Nhiều cá nhân liên quan | Một nhóm nhỏ nhân vật cần so sánh |
| Nhiều nhánh quy trách nhiệm | 1 quyết định trách nhiệm chính |
| Sơ đồ truy vết tài chính đầy đủ | Sơ đồ truy vết tài chính rút gọn |
| Kết luận đầy đủ về Management Override và trách nhiệm | Kết luận rút gọn nhưng đủ hai thành phần |

MVP vẫn cho người chơi trải nghiệm toàn bộ hành trình từ tín hiệu tài chính đến việc xác định cá nhân chịu trách nhiệm chính.

### 9. In Scope

Trong phạm vi MVP, nhóm cam kết hoàn thành một tình huống Aster Holdings với một hướng điều tra chính. Tình huống bao gồm một ngưỡng trọng yếu, một tín hiệu tài chính chính, một nhóm nhỏ chỉ số sàng lọc, một giao dịch Northstar, một hoặc hai bằng chứng kiểm soát, một bước đánh giá Management Override và một bước quy trách nhiệm giữa một số ít cá nhân liên quan.

MVP phải tạo được Sơ đồ truy vết tài chính rút gọn và Kết luận rút gọn về Management Override và trách nhiệm dựa trên bằng chứng, kèm phản hồi giải thích bằng chứng hỗ trợ cả hai phần kết luận.

### 10. Out of Scope

Để kiểm soát khối lượng công việc, các nội dung sau chưa nằm trong MVP:

- đầy đủ tám biến của Beneish M-Score;
- nhiều benchmark ngành;
- nhiều giao dịch;
- nhiều tài liệu kiểm soát;
- phân tích đầy đủ các thành phần COSO;
- đánh giá đầy đủ mức độ nghiêm trọng theo SOX 404;
- nhiều nhân vật và các nhánh quy trách nhiệm phức tạp;
- chấm điểm Fraud Triangle chi tiết;
- tính toán Present Value thiệt hại chi tiết;
- nhiều ending hoặc nhiều tình huống doanh nghiệp;
- dữ liệu thị trường thời gian thực;
- external API;
- hệ thống tài khoản, xác thực hoặc chatbot;
- AI model hoặc cơ sở dữ liệu phức tạp.

### 11. Product Logic and Product Form

**Giá trị sản phẩm** là giúp người học kết nối bằng chứng để trả lời hai câu hỏi cuối: **Management Override có xảy ra hay không** và **ai chịu trách nhiệm chính**.

**Logic sản phẩm** là:

**Sàng lọc → Truy vết → Kiểm tra → Đánh giá → Quy trách nhiệm → Kết luận**

**Hình thức sản phẩm** là Scenario-Based Financial Investigation Learning Game được triển khai bằng Unity.

Nếu giao diện phải đơn giản hóa, giá trị và logic sản phẩm vẫn phải được giữ nguyên.

### 12. Initial Technical Route

Hướng kỹ thuật ban đầu sử dụng Unity làm giao diện, C# làm ngôn ngữ lập trình và Visual Studio Code làm môi trường phát triển. Dữ liệu của tình huống được chuẩn bị trước và lưu dưới dạng dữ liệu tĩnh hoặc cục bộ. Logic cốt lõi được triển khai theo rule-based logic.

Hướng này phù hợp với MVP vì sản phẩm có một tình huống, một hướng điều tra chính, số lượng đầu vào hữu hạn và logic xác định trước. Nhóm chưa cần backend, external API hoặc cơ sở dữ liệu phức tạp để tạo ra giá trị cốt lõi.

### 13. Fallback Plan

Nếu gặp rủi ro kỹ thuật hoặc thiếu thời gian, nhóm giảm độ phức tạp của từng bước nhưng không cắt bỏ hành trình cốt lõi.

Có thể giảm:

- số chỉ số sàng lọc;
- số tài liệu kiểm soát;
- số cá nhân liên quan;
- số màn hình;
- số tương tác phụ.

Không được cắt:

- một tín hiệu tài chính;
- một bước truy vết giao dịch;
- một bước kiểm tra kiểm soát và phê duyệt;
- một bước đánh giá Management Override;
- một quyết định quy trách nhiệm;
- một kết luận cuối dựa trên bằng chứng;
- Sơ đồ truy vết tài chính rút gọn.

Nguyên tắc dự phòng là giảm **số lượng**, không giảm **logic cốt lõi**.

### 14. Evidence and Input to Validate in Week 3

Week 3 cần xác định rõ nguồn, giả định, dữ liệu mẫu và quy tắc trò chơi cho:

- chỉ số sàng lọc;
- benchmark, ngưỡng hoặc quy tắc diễn giải;
- ngưỡng trọng yếu;
- dữ liệu Aster Holdings;
- dữ liệu giao dịch Northstar;
- bằng chứng phê duyệt và thẩm quyền;
- thông tin về vai trò và thẩm quyền;
- thông tin về tính độc lập hoặc xung đột lợi ích;
- bằng chứng vượt qua kiểm soát;
- logic đánh giá Management Override;
- logic quy trách nhiệm;
- mức bằng chứng cần thiết để xác định cá nhân chịu trách nhiệm chính;
- nguồn học thuật hoặc nguồn chuyên môn cho các framework được sử dụng.

### 15. Open Questions for Week 3

Nhóm cần tiếp tục xác định mức bằng chứng tối thiểu để một kết luận về Management Override được xem là hợp lý, cũng như mức bằng chứng cần thiết để quy trách nhiệm chính mà không vượt quá dữ liệu.

Các câu hỏi chính gồm:

- Chỉ số nào thực sự cần giữ trong MVP?
- Ngưỡng trọng yếu được xác định như thế nào?
- Bằng chứng nào đủ để cho thấy có hành vi vượt qua kiểm soát?
- Những cá nhân nào cần xuất hiện để bước quy trách nhiệm có ý nghĩa nhưng không làm phạm vi quá lớn?
- Tiêu chí nào phân biệt trách nhiệm chính với việc chỉ có liên quan?
- Fraud Triangle nên xuất hiện ở mức hỗ trợ giải thích nào?
- Sơ đồ truy vết tài chính nên thể hiện cá nhân chịu trách nhiệm ở vị trí nào trong chuỗi lập luận?

### 16. Responsibility Map

| Thành viên | Trách nhiệm trong Week 2 | Expected Output | Evidence Location | Dependency |
|---|---|---|---|---|
| Phạm Quỳnh Phương | Tổng hợp định hướng sản phẩm và cấu trúc giải pháp, đối chiếu tính nhất quán giữa đánh giá Management Override và bước quy trách nhiệm | Final Project Proposal, Solution Structure, decision log và danh sách câu hỏi mở cho Week 3 | `PROJECT_PROPOSAL.md`, `SOLUTION_STRUCTURE.md`, README | Phụ thuộc đầu ra từ tất cả workstream |
| Phạm Triệu Tiến Dũng | Xác định nội dung tài chính và đầu vào phục vụ điều tra | Dữ liệu tài chính, chỉ số sàng lọc, benchmark dự kiến và ngưỡng trọng yếu | Data and Input documentation | Cần kiểm chứng nguồn ở Week 3 |
| Nguyễn Minh Hiền | Xác định logic gameplay từ đầu đến cuối | Luồng người dùng, logic câu hỏi, bước đánh giá Management Override và quy trách nhiệm | Solution Structure và logic notes | Phụ thuộc đầu vào đã chốt |
| Tôn Khánh Ngọc | Xây dựng storyline, phản hồi và cách trình bày đầu ra | Nội dung phản hồi, định dạng Sơ đồ truy vết tài chính, cách trình bày cá nhân chịu trách nhiệm và kết luận | Output and feedback notes | Phụ thuộc chuỗi bằng chứng |
| Đinh Thị Minh Khuê | Chuyển logic sản phẩm thành interactive prototype | Working Unity prototype cho luồng MVP | Unity project và prototype evidence | Phụ thuộc luồng và đầu vào đã chốt |

### 17. Week 2 Completion Check

Đến cuối Week 2, nhóm đã xác định được người dùng mục tiêu, nhiệm vụ người dùng, kết quả mong muốn, đầu ra chính, mô hình sản phẩm, cấu trúc User–Input–Process–Output–User, MVP, phạm vi thực hiện, phạm vi chưa thực hiện, hướng kỹ thuật, phương án dự phòng và phân công trách nhiệm.

MVP hiện được xác định là phiên bản rút gọn nhưng hoàn chỉnh từ đầu đến cuối của sản phẩm cuối. Hai quyết định cuối cùng đã được tách rõ thành đánh giá Management Override và quy trách nhiệm. Đầu ra chính cũng được điều chỉnh thành **Kết luận về Management Override và trách nhiệm dựa trên bằng chứng** để phản ánh đầy đủ cả việc xác định hành vi và xác định cá nhân chịu trách nhiệm chính.

### 18. Handoff to Week 3

Week 2 đã trả lời sản phẩm cần làm gì, người dùng phải đưa ra những quyết định nào và MVP nhỏ nhất phải giữ những bước nào.

Week 3 sẽ tiếp tục trả lời:

> **Những đầu vào, nguồn, giả định và dữ liệu mẫu cụ thể nào cần có để người chơi có thể đưa ra cả kết luận về Management Override và việc quy trách nhiệm một cách có căn cứ?**
