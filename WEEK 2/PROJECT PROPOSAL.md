# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 2 — PROJECT PROPOSAL

## 1. Liên kết với Week 1

Week 2 tiếp tục trực tiếp từ kết quả đã chốt ở Week 1. Nhóm không xác định lại problem, target user hoặc user task từ đầu mà sử dụng các kết quả đó làm đầu vào cho Product Direction.

Định hướng vấn đề vẫn là **Information Integration**. Người dùng mục tiêu vẫn là sinh viên Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản và đã được tiếp cận COSO và Fraud Triangle.

User task được giữ nguyên về bản chất: người học phải kết nối nhiều nguồn thông tin để đi từ một tín hiệu tài chính đến kết luận về Management Override và trách nhiệm.

Hai quyết định cuối cùng được giữ như Week 1:

1. Các bằng chứng hiện có có hỗ trợ kết luận rằng Management Override đã xảy ra hay không?
2. Cá nhân nào chịu trách nhiệm chính, và bằng chứng nào hỗ trợ việc quy trách nhiệm đó?

Week 2 tập trung trả lời câu hỏi mới:

> **Sản phẩm nhỏ nhất cần tạo ra đầu ra gì và cần có cấu trúc nào để hỗ trợ người học thực hiện user task trên?**

---

## 2. Desired Outcome

Sau khi hoàn thành sản phẩm, người dùng được kỳ vọng có khả năng:

- phân biệt một tín hiệu tài chính với bằng chứng đủ mạnh để hỗ trợ kết luận;
- xác định khu vực nào cần điều tra sâu hơn thay vì xử lý tất cả dữ liệu như nhau;
- truy vết từ dữ liệu cấp báo cáo tài chính xuống khoản mục và giao dịch cụ thể;
- đánh giá liệu một giao dịch có đầy đủ phê duyệt về hình thức có thực sự an toàn hay đang che giấu Management Override;
- xác định cá nhân chịu trách nhiệm chính dựa trên bằng chứng về thẩm quyền, mức độ tham gia, xung đột lợi ích và hành vi vượt qua kiểm soát.

Kết quả mong muốn có thể tóm gọn như sau:

> **Người học có thể nhận diện Management Override và quy trách nhiệm dựa trên một chuỗi bằng chứng có thể giải thích được, thay vì dựa vào một chỉ số hoặc một hồ sơ phê duyệt riêng lẻ.**

---

## 3. Product Statement

The Last Heir là một **Scenario-Based Financial Investigation Learning Game**, trong đó người chơi vào vai người thừa kế của Aster Holdings và điều tra một vấn đề tài chính trong doanh nghiệp.

Người chơi bắt đầu từ dữ liệu tài chính tổng hợp, sử dụng một số chỉ số được lựa chọn từ Beneish Model để sàng lọc hướng điều tra, sau đó phân rã khoản mục và truy vết xuống giao dịch Northstar. Từ giao dịch này, người chơi kiểm tra bằng chứng kiểm soát và phê duyệt, đánh giá khả năng Management Override, rồi xác định cá nhân chịu trách nhiệm chính dựa trên bằng chứng.

Sản phẩm sử dụng một tình huống thống nhất. Mỗi thông tin mới phải có vai trò rõ ràng trong quá trình điều tra: định hướng bước tiếp theo, hỗ trợ hoặc loại bỏ một giả thuyết, xác định vấn đề kiểm soát hoặc hỗ trợ việc quy trách nhiệm.

---

## 4. Product Value, Product Form và Product Logic

### Product Value — Giá trị sản phẩm

Sản phẩm giúp người học thực hành cách kết nối nhiều loại thông tin thành một chuỗi lập luận có căn cứ.

Giá trị chính không nằm ở việc thực hiện nhiều phép tính mà ở khả năng hiểu:

- kết quả tính toán cho phép kết luận đến đâu;
- thông tin nào cần được xem tiếp;
- bằng chứng nào thực sự liên quan đến cùng một vấn đề;
- mức độ bằng chứng nào đủ để hỗ trợ việc đánh giá Management Override và quy trách nhiệm.

### Product Form — Hình thức sản phẩm

Sản phẩm được triển khai dưới dạng **Financial Learning Game** theo kịch bản điều tra tài chính.

Dữ liệu và bằng chứng được mở dần theo tiến trình điều tra thay vì được cung cấp đồng thời ngay từ đầu.

### Product Logic — Logic sản phẩm

Logic cốt lõi được xác định như sau:

**Quan sát → Sàng lọc → Khoanh vùng → Phân rã → Truy vết → Kiểm tra → Đánh giá → Quy trách nhiệm → Kết luận**

Tương ứng với:

**Thông tin tài chính → Sàng lọc tài chính → Khu vực cần điều tra → Khoản mục đáng chú ý → Giao dịch đáng chú ý → Bằng chứng kiểm soát → Đánh giá Management Override → Cá nhân chịu trách nhiệm → Kết luận dựa trên bằng chứng**

Hình thức giao diện có thể được đơn giản hóa trong quá trình phát triển, nhưng Product Value và Product Logic phải được giữ nguyên.

---

## 5. Product Pattern

Nhóm lựa chọn **Financial Learning Game** làm product pattern chính.

Pattern này phù hợp vì người học học thông qua:

- một tình huống thống nhất;
- các quyết định điều tra nối tiếp;
- dữ liệu và bằng chứng được mở dần;
- phản hồi sau các decision point;
- kết luận cuối dựa trên chuỗi bằng chứng.

Các thành phần như calculation, scoring, bảng dữ liệu hoặc sơ đồ chỉ đóng vai trò hỗ trợ. Sản phẩm không được định nghĩa như Calculator, Dashboard hoặc Scoring Tool độc lập.

---

## 6. Main Visible Output

Đầu ra nhìn thấy được chính của sản phẩm là:

> **Kết luận về Management Override và trách nhiệm dựa trên bằng chứng**

Đầu ra này phải thể hiện:

- Management Override có xảy ra hay không;
- cá nhân chịu trách nhiệm chính;
- bằng chứng chính hỗ trợ đánh giá Management Override;
- bằng chứng chính hỗ trợ việc quy trách nhiệm.

Sản phẩm đồng thời hiển thị **Financial Trace Map — Sơ đồ truy vết tài chính** như một đầu ra hỗ trợ.

Financial Trace Map thể hiện chuỗi:

**Tín hiệu tài chính → Khu vực cần điều tra → Khoản mục đáng chú ý → Giao dịch Northstar → Bằng chứng kiểm soát → Đánh giá Management Override → Cá nhân chịu trách nhiệm → Kết luận**

Main output là kết luận cuối. Financial Trace Map làm cho quá trình hình thành kết luận trở nên quan sát được và có thể giải thích.

---

## 7. Knowledge Structure

Sản phẩm sử dụng ba layer kiến thức, nhưng cả ba cùng phục vụ một chuỗi điều tra.

### Layer 1 — Financial Screening and Transaction Tracing

Layer 1 giúp người chơi xác định **nơi cần điều tra** và **giao dịch cần xem xét**.

Người chơi sử dụng ba chỉ số được lựa chọn từ Beneish Model gồm **DSRI, SGAI và TATA**. Nhóm không xem ba chỉ số này là một “Beneish M-Score rút gọn” và không dùng chúng để tự động kết luận gian lận.

Vai trò của từng chỉ số được giới hạn:

- **DSRI** hỗ trợ đánh giá mức độ cần ưu tiên hướng nghi vấn liên quan đến doanh thu và khoản phải thu;
- **SGAI** hỗ trợ xác định SG&A có cần được phân tích sâu hơn hay không;
- **TATA** cung cấp góc nhìn bổ sung về accrual và chất lượng lợi nhuận.

Ba chỉ số không được so sánh trực tiếp bằng độ lệch tuyệt đối để chọn “chỉ số bất thường nhất”, vì chúng có thang đo và ý nghĩa khác nhau. Mỗi chỉ số được đánh giá theo benchmark hoặc quy tắc diễn giải phù hợp với chính nó.

Kết quả sàng lọc không trực tiếp xác định Northstar. Sau khi SG&A được ưu tiên, người chơi tiếp tục phân rã SG&A, xác định Advisory Expense là khoản mục đáng chú ý, sau đó truy vết các giao dịch cấu thành Advisory Expense để xác định Northstar.

Logic của Layer 1:

**Dữ liệu tài chính → DSRI, SGAI, TATA → Tổng hợp tín hiệu → Ưu tiên SG&A → Phân rã SG&A → Advisory Expense → Truy vết giao dịch → Northstar**

### Layer 2 — Control Investigation

Layer 2 bắt đầu sau khi Northstar đã được xác định.

Người chơi kiểm tra hồ sơ phê duyệt, thẩm quyền, tính độc lập, xung đột lợi ích và bằng chứng về việc kiểm soát bị vượt qua hoặc vô hiệu hóa.

COSO được sử dụng để hỗ trợ việc hiểu mục tiêu và chức năng của kiểm soát.

Layer 2 kết thúc bằng việc đánh giá liệu tập bằng chứng hiện có có hỗ trợ kết luận rằng Management Override đã xảy ra hay không.

### Layer 3 — Responsibility Attribution

Layer 3 tập trung vào việc xác định cá nhân chịu trách nhiệm chính.

Việc quy trách nhiệm dựa trên thẩm quyền, mức độ tham gia, xung đột lợi ích, lợi ích liên quan, mức độ liên hệ trực tiếp với giao dịch và bằng chứng về việc vượt qua hoặc chỉ đạo vượt qua kiểm soát.

Fraud Triangle chỉ được sử dụng như một khung hỗ trợ để giải thích các yếu tố rủi ro gian lận. Framework này không được sử dụng độc lập để xác định cá nhân chịu trách nhiệm.

---

## 8. Cross-Cutting Audit Principles

Chuỗi điều tra trong sản phẩm là một cấu trúc phục vụ mục tiêu học tập, không phải mô phỏng đầy đủ toàn bộ quy trình kiểm toán theo ISA hoặc PCAOB.

Hai nguyên tắc được duy trì xuyên suốt sản phẩm.

**Materiality — Trọng yếu** được xác định từ đầu tình huống và được sử dụng như một điểm tham chiếu khi đánh giá mức độ đáng chú ý của biến động hoặc giao dịch.

**Fraud and Management Override Consideration** được xem xét xuyên suốt quá trình điều tra. Bước “Đánh giá Management Override” chỉ là giai đoạn tổng hợp chính thức các bằng chứng đã thu thập, không phải thời điểm đầu tiên người chơi bắt đầu cân nhắc khả năng này.

---

## 9. MVP Direction

MVP được xác định là **phiên bản rút gọn nhưng hoàn chỉnh từ đầu đến cuối của sản phẩm cuối**, không phải chỉ là một module riêng.

MVP vẫn giữ chuỗi:

**Tín hiệu tài chính → Khoanh vùng → Phân rã khoản mục → Truy vết giao dịch → Bằng chứng kiểm soát → Đánh giá Management Override → Quy trách nhiệm → Kết luận**

Sự tối giản được thực hiện bằng cách giảm số lượng dữ liệu, khoản mục, giao dịch, tài liệu và cá nhân liên quan.

Trong MVP:

- Layer 1 sử dụng DSRI, SGAI và TATA để sàng lọc;
- một hướng chính dẫn tới SG&A;
- một chuỗi phân rã chính dẫn tới Advisory Expense;
- một giao dịch chính là Northstar;
- chỉ một số ít bằng chứng kiểm soát và cá nhân liên quan được sử dụng;
- người chơi vẫn phải đưa ra cả kết luận về Management Override và cá nhân chịu trách nhiệm chính.

Chi tiết về cấu trúc User–Input–Process–Output–User, backward mapping, scope, technical route, fallback và responsibility map được trình bày trong `SOLUTION_STRUCTURE.md`.

---

## 10. Week 1 to Week 2 Revision

Nhóm giữ nguyên Information Integration, target user và user task đã xác định ở Week 1. Week 2 không tạo lại problem từ đầu mà chuyển Problem Direction đó thành Product Direction.

Các điểm được làm rõ thêm ở Week 2 gồm:

- phân tích tài chính chỉ có vai trò sàng lọc và khoanh vùng;
- Beneish không trực tiếp dẫn đến Northstar;
- giữa sàng lọc và giao dịch phải có bước phân rã khoản mục và truy vết;
- kết luận cuối gồm hai phần: đánh giá Management Override và quy trách nhiệm;
- MVP phải giữ toàn bộ core journey nhưng giảm số lượng thông tin và nhánh xử lý.

---

## 11. Product Direction in One Sentence

> **The Last Heir giúp sinh viên luyện kỹ năng kết nối dữ liệu tài chính, dữ liệu giao dịch, bằng chứng kiểm soát và bằng chứng trách nhiệm để nhận diện Management Override và xác định cá nhân chịu trách nhiệm chính thông qua một tình huống điều tra tài chính có cấu trúc.**
