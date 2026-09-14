# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 2 — SOLUTION STRUCTURE

## 1. Mục đích của Solution Structure

Tài liệu này chuyển Product Direction trong `PROJECT_PROPOSAL.md` thành một cấu trúc giải pháp có thể bắt đầu xây dựng.

Câu hỏi trung tâm là:

> **Sản phẩm cần nhận đầu vào gì, xử lý theo logic nào và tạo đầu ra gì để người dùng vừa đánh giá Management Override vừa xác định cá nhân chịu trách nhiệm chính bằng bằng chứng?**

---

## 2. User–Input–Process–Output–User

### User

Sinh viên Tài chính, Kế toán, Ngân hàng hoặc Kinh doanh có kiến thức tài chính cơ bản và đã được tiếp cận COSO và Fraud Triangle.

### Input

Đầu vào của sản phẩm gồm:

- dữ liệu tài chính tổng hợp;
- các chỉ số sàng lọc và benchmark hoặc quy tắc diễn giải;
- dữ liệu chi tiết theo khoản mục;
- dữ liệu giao dịch;
- bằng chứng kiểm soát và phê duyệt;
- thông tin về vai trò và thẩm quyền;
- thông tin về tính độc lập hoặc xung đột lợi ích;
- ngưỡng trọng yếu.

### Process

Sản phẩm xử lý đầu vào theo chuỗi:

**Sàng lọc → Khoanh vùng → Phân rã → Truy vết → Kiểm tra → Đánh giá → Quy trách nhiệm → Tổng hợp**

### Output

Sản phẩm hiển thị:

- **Kết luận về Management Override và trách nhiệm dựa trên bằng chứng**;
- **Financial Trace Map** thể hiện chuỗi lập luận dẫn đến kết luận.

### User Action

Sau khi xem output, người chơi phải có khả năng giải thích:

- vì sao Management Override được kết luận có hoặc không xảy ra;
- vì sao một cá nhân được xác định là người chịu trách nhiệm chính;
- bằng chứng nào hỗ trợ hai quyết định trên.

Sơ đồ khái niệm:

**Sinh viên → Dữ liệu tài chính và bằng chứng → Sàng lọc, truy vết và đánh giá → Kết luận + Financial Trace Map → Giải thích quyết định dựa trên bằng chứng**

---

## 3. Target Product Structure

Sản phẩm hoàn chỉnh được tổ chức theo chuỗi:

**Người dùng**  
↓  
**Thông tin tài chính tổng hợp**  
↓  
**Sàng lọc tài chính**  
↓  
**Xác định khu vực cần điều tra**  
↓  
**Phân rã khoản mục**  
↓  
**Truy vết dữ liệu giao dịch**  
↓  
**Xác định giao dịch đáng chú ý**  
↓  
**Kiểm tra bằng chứng kiểm soát và phê duyệt**  
↓  
**Đánh giá Management Override**  
↓  
**Quy trách nhiệm**  
↓  
**Kết luận về Management Override và trách nhiệm dựa trên bằng chứng**

Materiality và việc xem xét khả năng Fraud / Management Override được duy trì xuyên suốt chuỗi.

---

## 4. Suy ngược từ Main Output

Main output của sản phẩm là **Kết luận về Management Override và trách nhiệm dựa trên bằng chứng**.

| Kết quả cần tạo | Logic cần có | Input cần có | Component cần có |
|---|---|---|---|
| Khu vực tài chính cần điều tra | Diễn giải tín hiệu từ các chỉ số sàng lọc | Dữ liệu hai kỳ, DSRI, SGAI, TATA, benchmark hoặc quy tắc diễn giải | Financial Screening |
| Khoản mục đáng chú ý | Phân rã khu vực đã được khoanh vùng | Dữ liệu chi tiết SG&A | Account Drill-down |
| Giao dịch Northstar | Truy vết khoản mục xuống giao dịch | Danh sách giao dịch Advisory Expense | Transaction Tracing |
| Kết luận về Management Override | Đối chiếu phê duyệt, thẩm quyền, tính độc lập, xung đột lợi ích và dấu hiệu vượt qua kiểm soát | Hồ sơ phê duyệt, thông tin vai trò, tài liệu kiểm soát, dữ liệu giao dịch | Control Investigation |
| Cá nhân chịu trách nhiệm chính | So sánh thẩm quyền, mức độ tham gia, xung đột lợi ích và mức độ liên hệ với hành vi vượt qua kiểm soát | Hồ sơ các cá nhân liên quan | Responsibility Attribution |
| Kết luận cuối | Kết nối toàn bộ bằng chứng thành một chuỗi lập luận | Toàn bộ kết quả trung gian | Final Review |
| Financial Trace Map | Ghi lại đường đi từ tín hiệu đến kết luận | Kết quả của các bước trước | Trace Map |

Backward mapping cho thấy Beneish không thể trực tiếp tạo ra Northstar. Giữa hai bước phải có **phân rã khoản mục** và **truy vết giao dịch**.

---

## 5. Layer 1 — Financial Screening and Transaction Tracing

Layer 1 trả lời hai câu hỏi:

> **Khu vực nào cần được điều tra sâu hơn?**

và

> **Giao dịch nào trong khu vực đó cần được xem xét?**

### 5.1. Financial Screening

Người chơi sử dụng ba chỉ số được lựa chọn từ Beneish Model:

- **DSRI — Days' Sales in Receivables Index**;
- **SGAI — Sales, General and Administrative Expenses Index**;
- **TATA — Total Accruals to Total Assets**.

Nhóm không sử dụng ba chỉ số này để tạo một “Beneish M-Score rút gọn”. Mỗi chỉ số được sử dụng độc lập như một công cụ sàng lọc.

**DSRI** hỗ trợ xem xét sự thay đổi của khoản phải thu tương đối với doanh thu. Trong tình huống của game, kết quả DSRI giúp người chơi đánh giá mức độ cần ưu tiên hướng nghi vấn liên quan đến ghi nhận doanh thu.

**SGAI** hỗ trợ xem xét sự thay đổi của SG&A tương đối với doanh thu. Nếu SG&A thay đổi đáng chú ý, người chơi có cơ sở để ưu tiên khu vực này cho bước phân tích tiếp theo.

**TATA** cung cấp góc nhìn bổ sung về accrual và chất lượng lợi nhuận. Chỉ số này không trực tiếp xác định một khoản mục hoặc giao dịch cụ thể.

Ba chỉ số thực hiện ba chức năng bổ sung:

- DSRI hỗ trợ kiểm tra hướng nghi vấn liên quan đến doanh thu;
- SGAI hỗ trợ xác định SG&A có cần được đào sâu hay không;
- TATA cung cấp tín hiệu bổ trợ về accrual và chất lượng lợi nhuận.

Nhóm không so sánh trực tiếp độ lệch tuyệt đối của DSRI, SGAI và TATA để chọn “chỉ số bất thường nhất”. Mỗi chỉ số phải được đánh giá theo benchmark hoặc quy tắc diễn giải phù hợp với chính nó.

Kết quả của bước này chỉ trả lời:

> **Khu vực nào cần được ưu tiên điều tra?**

### 5.2. Xác định khu vực cần điều tra

Trong tình huống The Last Heir, kết quả sàng lọc dẫn người chơi đến việc ưu tiên SG&A.

Điều này không có nghĩa SGAI chứng minh có gian lận trong SG&A. Kết quả chỉ tạo cơ sở để phân tích khu vực này sâu hơn.

### 5.3. Phân rã khoản mục

Người chơi tiếp tục phân rã SG&A thành các khoản mục cấu thành, chẳng hạn:

- Salary;
- Marketing;
- Legal;
- Advisory Expense;
- Other SG&A.

Từ dữ liệu chi tiết, người chơi xác định Advisory Expense là khoản mục đáng chú ý.

### 5.4. Truy vết giao dịch

Sau khi Advisory Expense được xác định, người chơi xem các giao dịch cấu thành khoản mục này.

Northstar chỉ được xác định là giao dịch cần điều tra sâu hơn sau quá trình truy vết.

Logic hoàn chỉnh của Layer 1 là:

**Dữ liệu tài chính → DSRI, SGAI, TATA → Tổng hợp tín hiệu → Ưu tiên SG&A → Phân rã SG&A → Advisory Expense → Truy vết giao dịch → Northstar**

Layer 1 kết thúc khi người chơi xác định được giao dịch cần điều tra sâu hơn.

---

## 6. Layer 2 — Control Investigation

Layer 2 bắt đầu từ giao dịch Northstar.

Người chơi kiểm tra:

- hồ sơ phê duyệt;
- thẩm quyền của người phê duyệt;
- tính độc lập;
- xung đột lợi ích;
- quy trình kiểm soát thông thường;
- bằng chứng về việc kiểm soát bị vượt qua hoặc vô hiệu hóa.

COSO được sử dụng để hỗ trợ việc hiểu mục tiêu và chức năng của kiểm soát.

Layer 2 kết thúc bằng quyết định:

> **Các bằng chứng hiện có có hỗ trợ kết luận rằng Management Override đã xảy ra hay không?**

---

## 7. Layer 3 — Responsibility Attribution

Sau khi đánh giá Management Override, người chơi xác định cá nhân chịu trách nhiệm chính.

Việc quy trách nhiệm dựa trên:

- thẩm quyền;
- mức độ tham gia;
- xung đột lợi ích;
- lợi ích liên quan;
- mức độ liên hệ với giao dịch;
- bằng chứng về hành vi vượt qua hoặc chỉ đạo vượt qua kiểm soát.

Fraud Triangle chỉ được sử dụng để hỗ trợ giải thích bối cảnh rủi ro gian lận, không được dùng như công cụ tự động lựa chọn cá nhân chịu trách nhiệm.

Layer 3 kết thúc bằng hai câu hỏi:

> **Ai là cá nhân chịu trách nhiệm chính?**

> **Bằng chứng nào cho phép quy trách nhiệm cho cá nhân đó?**

---

## 8. MVP

MVP được xác định là **phiên bản rút gọn nhưng hoàn chỉnh từ đầu đến cuối của sản phẩm cuối**.

| Câu hỏi | Câu trả lời |
|---|---|
| **Core user need** | Thực hành cách đi từ tín hiệu tài chính đến kết luận về Management Override và trách nhiệm bằng một chuỗi bằng chứng |
| **Core input** | Dữ liệu tài chính hai kỳ, DSRI/SGAI/TATA, dữ liệu SG&A, Advisory Expense, Northstar, một số ít bằng chứng kiểm soát và thông tin về cá nhân liên quan |
| **Core logic** | Sàng lọc → Khoanh vùng → Phân rã → Truy vết → Kiểm tra → Đánh giá Management Override → Quy trách nhiệm |
| **Core output** | Kết luận về Management Override và cá nhân chịu trách nhiệm chính, kèm Financial Trace Map rút gọn |
| **Must include** | Một chuỗi điều tra hoàn chỉnh từ dữ liệu tài chính đến kết luận |
| **Not included yet** | Full Beneish M-Score, nhiều giao dịch, nhiều nhánh điều tra, phân tích COSO đầy đủ, nhiều ending, hệ thống tài khoản hoặc AI model |

MVP không phải chỉ là Layer 1. Nếu chỉ giữ Financial Screening, sản phẩm chưa tạo được core value đã xác định trong Project Proposal.

---

## 9. MVP User Flow

### Bước 1 — Mở đầu tình huống

Người chơi nhận bối cảnh Aster Holdings, dữ liệu tài chính hai kỳ và ngưỡng trọng yếu.

### Bước 2 — Sàng lọc tài chính

Người chơi sử dụng DSRI, SGAI và TATA. Mỗi chỉ số được diễn giải theo benchmark hoặc quy tắc riêng.

### Bước 3 — Khoanh vùng

Người chơi xác định SG&A là khu vực cần xem xét sâu hơn.

### Bước 4 — Phân rã khoản mục

Người chơi phân rã SG&A và xác định Advisory Expense là khoản mục đáng chú ý.

### Bước 5 — Truy vết giao dịch

Người chơi truy vết các giao dịch Advisory và xác định Northstar là giao dịch cần điều tra.

### Bước 6 — Kiểm tra bằng chứng kiểm soát và phê duyệt

Người chơi xem hồ sơ phê duyệt, thẩm quyền, tính độc lập, xung đột lợi ích và quy trình kiểm soát.

### Bước 7 — Đánh giá Management Override

Người chơi tổng hợp bằng chứng và quyết định Management Override có xảy ra hay không.

### Bước 8 — Quy trách nhiệm

Người chơi so sánh một nhóm nhỏ cá nhân liên quan và xác định cá nhân chịu trách nhiệm chính.

### Bước 9 — Kết quả

Sản phẩm hiển thị:

- kết luận về Management Override;
- cá nhân chịu trách nhiệm chính;
- bằng chứng hỗ trợ hai kết luận;
- Financial Trace Map rút gọn;
- phản hồi giải thích.

---

## 10. In Scope

Trong MVP, nhóm cam kết thực hiện:

- một tình huống Aster Holdings;
- dữ liệu tài chính hai kỳ;
- ngưỡng trọng yếu;
- DSRI, SGAI và TATA;
- quy tắc diễn giải cho từng chỉ số;
- một hướng chính dẫn đến SG&A;
- một bước phân rã SG&A;
- Advisory Expense;
- một bước truy vết giao dịch;
- giao dịch Northstar;
- một số ít bằng chứng kiểm soát và phê duyệt;
- một bước đánh giá Management Override;
- một bước quy trách nhiệm;
- một Financial Trace Map rút gọn;
- một kết luận cuối dựa trên bằng chứng.

---

## 11. Out of Scope

Các nội dung chưa nằm trong MVP gồm:

- đầy đủ tám biến và công thức Beneish M-Score hoàn chỉnh;
- nhiều khu vực tài chính hoặc nhiều tuyến điều tra;
- nhiều giao dịch cạnh tranh;
- nhiều tài liệu kiểm soát;
- phân tích đầy đủ tất cả các thành phần COSO;
- đánh giá SOX 404 đầy đủ;
- nhiều nhánh quy trách nhiệm;
- chấm điểm Fraud Triangle chi tiết;
- tính Present Value thiệt hại chi tiết;
- nhiều ending;
- nhiều tình huống doanh nghiệp;
- dữ liệu thị trường thời gian thực;
- external API;
- hệ thống tài khoản và xác thực;
- chatbot;
- AI model;
- cơ sở dữ liệu phức tạp.

---

## 12. Initial Technical Route

Hướng kỹ thuật ban đầu của MVP là:

- **Giao diện:** Unity;
- **Ngôn ngữ:** C#;
- **Môi trường phát triển:** Visual Studio Code;
- **Dữ liệu:** dữ liệu được chuẩn bị trước và lưu cục bộ;
- **Logic:** rule-based logic;
- **Backend:** chưa cần trong MVP;
- **External API:** chưa cần trong MVP.

Sản phẩm có một tình huống, một chuỗi điều tra chính và số lượng dữ liệu hữu hạn. Vì vậy, nhóm có thể triển khai core logic mà không cần phụ thuộc vào dữ liệu thời gian thực hoặc hạ tầng phức tạp.

---

## 13. Fallback

Nếu route chính gặp rủi ro về thời gian hoặc kỹ thuật, nhóm giảm số lượng thông tin và tương tác nhưng không cắt mất chuỗi điều tra cốt lõi.

Có thể giảm:

- số chỉ số sàng lọc được hiển thị;
- số khoản mục phụ;
- số giao dịch nền;
- số tài liệu kiểm soát;
- số cá nhân liên quan;
- số màn hình, animation và tương tác phụ.

Không được cắt:

- một tín hiệu tài chính;
- bước khoanh vùng;
- bước phân rã khoản mục;
- bước truy vết xuống Northstar;
- bước kiểm tra bằng chứng kiểm soát;
- đánh giá Management Override;
- quyết định quy trách nhiệm;
- kết luận cuối dựa trên bằng chứng.

Nguyên tắc fallback là:

> **Giảm số lượng, không phá vỡ core flow.**

---

## 14. Responsibility Map

| Owner | Responsibility | Expected output | Evidence location | Dependency | Next action |
|---|---|---|---|---|---|
| Phạm Quỳnh Phương | Tổng hợp Product Direction, kiểm tra tính nhất quán giữa các workstream và kiểm soát phạm vi | `PROJECT_PROPOSAL.md`, `SOLUTION_STRUCTURE.md`, decision log và danh sách câu hỏi mở | `docs/`, README | Đầu ra của tất cả workstream | Chốt tài liệu Week 2 và chuyển danh sách input cần kiểm chứng sang Week 3 |
| Phạm Triệu Tiến Dũng | Xác định nội dung tài chính và input cho quá trình sàng lọc, phân rã và truy vết | DSRI, SGAI, TATA, dữ liệu hai kỳ, cấu trúc SG&A, Advisory Expense và dữ liệu giao dịch ban đầu | Data/Input documentation | Product logic đã chốt | Kiểm chứng công thức, benchmark và nguồn dữ liệu ở Week 3 |
| Nguyễn Minh Hiền | Xác định logic điều tra từ đầu đến cuối | User flow, logic khoanh vùng, phân rã, truy vết, Management Override và quy trách nhiệm | Solution Structure / logic notes | Financial input | Chuyển logic thành các decision point và rule cụ thể |
| Tôn Khánh Ngọc | Xây dựng storyline, feedback và cách trình bày output | Nội dung phản hồi, Financial Trace Map và cách trình bày conclusion | Output/feedback notes | User flow và evidence chain | Hoàn thiện feedback cho từng decision point |
| Đinh Thị Minh Khuê | Chuyển product logic thành prototype tương tác | Unity prototype cho core MVP flow | Unity project | Finalized flow và input structure | Nối các bước MVP trong prototype và kiểm thử trạng thái |

---

## 15. Input cần kiểm tra ở Week 3

Week 3 cần phân biệt rõ **source-based input, assumption, sample data và gameplay rule**.

Các nội dung cần kiểm tra gồm:

- công thức DSRI, SGAI và TATA;
- benchmark hoặc quy tắc diễn giải cho từng chỉ số;
- ngưỡng trọng yếu;
- dữ liệu tài chính Aster Holdings;
- cấu trúc SG&A;
- Advisory Expense;
- danh sách giao dịch Advisory;
- dữ liệu Northstar;
- hồ sơ phê duyệt;
- thông tin về thẩm quyền;
- tính độc lập và xung đột lợi ích;
- bằng chứng vượt qua kiểm soát;
- logic đánh giá Management Override;
- logic quy trách nhiệm;
- mức bằng chứng cần thiết để xác định cá nhân chịu trách nhiệm chính.

---

## 16. Open Questions for Week 3

Các câu hỏi cần tiếp tục giải quyết gồm:

- benchmark hoặc quy tắc diễn giải nào phù hợp cho DSRI, SGAI và TATA;
- dữ liệu nào có thể lấy từ nguồn và dữ liệu nào cần được tạo cho tình huống;
- ngưỡng trọng yếu nên được xác định như thế nào;
- mức thay đổi nào của SG&A và Advisory Expense đủ để tạo lý do điều tra tiếp;
- bao nhiêu giao dịch nền cần có để Northstar không bị lộ ngay;
- bằng chứng nào đủ để hỗ trợ Management Override;
- tiêu chí nào phân biệt cá nhân chịu trách nhiệm chính với cá nhân chỉ có liên quan;
- Fraud Triangle nên xuất hiện ở mức độ nào để hỗ trợ lập luận mà không thay thế bằng chứng;
- Financial Trace Map nên trình bày chuỗi suy luận như thế nào để người học dễ theo dõi.

---

## 17. Week 2 Completion Check

- [x] Problem vẫn liên kết trực tiếp với Week 1.
- [x] Target user được giữ và làm rõ.
- [x] User task và hai decision cuối rõ.
- [x] Desired outcome được xác định.
- [x] Main visible output được xác định.
- [x] Một product pattern chính được chọn.
- [x] Có cấu trúc User–Input–Process–Output–User.
- [x] Có backward mapping từ main output.
- [x] MVP là phiên bản rút gọn nhưng hoàn chỉnh của final product.
- [x] In Scope và Out of Scope rõ.
- [x] Technical route ban đầu được xác định.
- [x] Có fallback giữ nguyên core flow.
- [x] Mỗi workstream có owner, expected output, evidence location, dependency và next action.
- [x] Các input cần kiểm tra ở Week 3 đã được xác định.

---

## 18. Handoff to Week 3

Week 2 đã trả lời:

> **Sản phẩm cần tạo ra kết quả gì và cấu trúc nhỏ nhất nào có thể hỗ trợ user task đã chốt ở Week 1?**

Week 3 sẽ tiếp tục trả lời:

> **Những input, nguồn, giả định và dữ liệu mẫu cụ thể nào cần có để chuỗi từ sàng lọc tài chính, phân rã khoản mục, truy vết giao dịch đến Management Override và quy trách nhiệm thực sự hoạt động?**
