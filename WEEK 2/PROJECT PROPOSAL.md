# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 2 — PROJECT PROPOSAL

## 1. Liên kết với Week 1

Week 2 tiếp tục trực tiếp từ kết quả đã chốt ở Week 1. Nhóm không xác định lại problem, target user hoặc user task từ đầu mà sử dụng các kết quả đó làm đầu vào cho Product Direction.

Định hướng vấn đề vẫn là **Information Integration**. Người dùng mục tiêu vẫn là sinh viên Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản và đã được tiếp cận COSO và Fraud Triangle.

User task được giữ nguyên về bản chất: người học phải kết nối nhiều nguồn information để đi từ một financial signal đến conclusion về Management Override và responsibility.

Hai final decisions:

1. Các bằng chứng hiện có có hỗ trợ kết luận rằng Management Override đã xảy ra hay không?
2. Cá nhân nào chịu trách nhiệm chính, và bằng chứng nào hỗ trợ việc quy trách nhiệm đó?

Week 2 tập trung trả lời:

> **Sản phẩm nhỏ nhất cần tạo ra output gì và cần có cấu trúc nào để hỗ trợ người học thực hiện user task trên mà không để một indicator, một status hoặc một evidence source tự tiết lộ conclusion?**

---

## 2. Desired Outcome

Sau khi hoàn thành sản phẩm, người dùng được kỳ vọng có khả năng:

1. phân biệt financial signal với evidence đủ mạnh để hỗ trợ conclusion;
2. xác định khu vực nào cần điều tra sâu hơn;
3. truy vết từ financial data xuống account và transaction;
4. phân biệt surface approval status với actual approval process;
5. cross-reference policy, role information và raw records để xác định factual finding;
6. phân biệt factual finding, control interpretation và Management Override assessment;
7. hỗ trợ judgment bằng evidence thay vì chỉ chọn đáp án;
8. xác định primary responsible individual bằng comparative evidence thay vì dựa trên chức danh hoặc sự xuất hiện trong một record riêng lẻ.

Kết quả mong muốn:

> **Người học có thể nhận diện Management Override và quy trách nhiệm dựa trên một evidence chain có thể giải thích được, thay vì dựa vào một chỉ số, một trạng thái phê duyệt hoặc một record riêng lẻ.**

---

## 3. Product Statement

The Last Heir là một **Scenario-Based Financial Investigation Learning Game**, trong đó người chơi vào vai người thừa kế của Aster Holdings và điều tra một vấn đề tài chính trong doanh nghiệp.

Người chơi bắt đầu từ financial data, sử dụng một số selected indicators from Beneish Model để screening, sau đó account drill-down và transaction tracing tới Northstar.

Từ Northstar, người chơi không được nhận ngay một control conclusion. Người chơi phải cross-reference approval/control requirements, role/authority information và raw approval records để hình thành factual finding, sau đó mới diễn giải control implication và đánh giá Management Override.

Cuối cùng, người chơi so sánh evidence liên quan đến các cá nhân để xác định primary responsible individual.

Mỗi thông tin mới phải có một chức năng rõ: định hướng bước tiếp theo, hỗ trợ hoặc loại bỏ một hypothesis, tạo factual finding, hỗ trợ control interpretation hoặc hỗ trợ responsibility attribution.

---

## 4. Product Value, Product Form và Product Logic

### Product Value

Sản phẩm giúp người học thực hành cách kết nối nhiều loại information thành một reasoning chain có căn cứ.

Giá trị chính không nằm ở việc thực hiện nhiều phép tính mà ở khả năng hiểu:

1. calculation result cho phép kết luận đến đâu;
2. information nào cần được xem tiếp;
3. evidence nào thực sự liên quan đến cùng một issue;
4. raw fact khác interpretation như thế nào;
5. evidence nào support hoặc contradict một judgment;
6. khi nào evidence set đủ mạnh để hỗ trợ Management Override và responsibility conclusion.

### Product Form

Sản phẩm được triển khai dưới dạng **Financial Learning Game** theo kịch bản điều tra tài chính.

Data và evidence được mở dần theo tiến trình investigation thay vì được cung cấp đồng thời ngay từ đầu.

### Product Logic

Logic cốt lõi:

**Quan sát → Sàng lọc → Khoanh vùng → Phân rã → Truy vết → Cross-reference evidence → Fact Finding → Control Interpretation → Đánh giá → Quy trách nhiệm → Kết luận**

Tương ứng:

**Financial Information → Financial Screening → Area to Investigate → Account Drill-down → Transaction Tracing → Control Evidence Integration → Factual Finding → Control Interpretation → Management Override Assessment → Responsibility Attribution → Evidence-Based Conclusion**

Surface Approval nếu được sử dụng chỉ đóng vai trò **observation/exposition layer**, không phải một pseudo-choice bắt người chơi chọn một đáp án hiển nhiên để được đi tiếp.

---

## 5. Product Pattern

Nhóm lựa chọn **Financial Learning Game** làm product pattern chính.

Pattern này phù hợp vì người học học thông qua một unified scenario, các investigation decisions nối tiếp, progressive evidence, cross-source comparison, feedback và final evidence-based conclusion.

Các thành phần như calculation, score, data table hoặc Trace Map chỉ đóng vai trò hỗ trợ. Product không được định nghĩa như Calculator, Dashboard hoặc Scoring Tool độc lập.

---

## 6. Main Visible Output

Main visible output:

> **Kết luận về Management Override và trách nhiệm dựa trên bằng chứng**

Output phải thể hiện:

1. Management Override có được evidence support hay không;
2. primary responsible individual;
3. evidence chính hỗ trợ Management Override assessment;
4. evidence chính hỗ trợ responsibility attribution.

Supporting visible output:

> **Financial Trace Map — Sơ đồ truy vết tài chính**

Trace Map thể hiện:

**Financial Signal → Area → Account → Northstar → Control Evidence → Factual Finding → Control Interpretation → Management Override → Responsibility → Conclusion**

Main output là conclusion. Trace Map giúp process hình thành conclusion trở nên observable và explainable.

---

## 7. Knowledge Structure

### Layer 1 — Financial Screening and Transaction Tracing

Layer 1 trả lời:

> **Where should the user investigate?**

và

> **Which transaction should the user investigate?**

Người chơi sử dụng **DSRI, SGAI và TATA** như selected Beneish indicators for screening.

Nhóm không xem ba chỉ số này là một “Beneish M-Score rút gọn” và không dùng chúng để tự động kết luận fraud.

Vai trò:

**DSRI** hỗ trợ đánh giá hướng revenue/receivables.  
**SGAI** hỗ trợ xác định SG&A có cần drill-down.  
**TATA** cung cấp additional accrual/earnings-quality context.

Các indicator không được so sánh trực tiếp bằng raw deviation để chọn “abnormal nhất”.

Layer 1 logic:

**Financial Data → DSRI/SGAI/TATA → Prioritize SG&A → SG&A Breakdown → Advisory Expense → Transaction Tracing → Northstar**

### Layer 2 — Control Investigation

Layer 2 bắt đầu sau khi Northstar được xác định.

Control Investigation không được thiết kế như một screen chứa sẵn câu trả lời `bypass` hoặc `Management Override`.

Một surface approval summary có thể được trình bày trước để tạo context, nhưng đây là **passive observation**, không phải scored judgment gate.

Gameplay thực sự bắt đầu khi user phải cross-reference các evidence sources như:

1. approval/control requirements;
2. personnel role/authority;
3. raw approval/audit records;
4. supporting control documentation nếu cần.

Reasoning của Layer 2:

**Raw Evidence → Factual Finding → Control Interpretation → Evidence Synthesis → Management Override Assessment**

Không một raw evidence field đơn lẻ được phép thay thế quá trình synthesis.

Các route, thresholds hoặc conditions cụ thể của Aster Holdings nếu được formalize ở Week 3 phải được label rõ là **simulated company-specific rules**, không phải PCAOB/COSO requirement.

### Layer 3 — Responsibility Attribution

Responsibility Attribution dựa trên:

1. authority;
2. direct action;
3. transaction connection;
4. control-circumvention evidence;
5. conflict of interest;
6. corroborating evidence.

Cần phân biệt rõ:

**required role ≠ actual actor ≠ primary responsible individual**

Một người đáng lẽ phải tham gia một control step không tự động là primary responsible person.

Fraud Triangle chỉ là **background fraud-risk context**. Project không score Pressure/Opportunity/Rationalization và không dùng framework này để tự động chọn responsible person.

---

## 8. Cross-Cutting Product Principles

### 8.1 Materiality

Materiality được sử dụng như reference khi đánh giá biến động hoặc transaction significance.

### 8.2 Fraud / Management Override Consideration

Management Override được cân nhắc xuyên suốt investigation. Formal Management Override Assessment chỉ là bước synthesis cuối của Layer 2.

### 8.3 No-Answer-Leak

Raw evidence phải trình bày facts trước khi user đưa ra interpretation. UI, variable names hoặc evidence wording không được chứa sẵn final control conclusion nếu conclusion đó chính là learning task.

### 8.4 Meaningful Interaction

Không tạo interaction chỉ để bắt user bấm một đáp án hiển nhiên. Observation có thể là passive screen. Judgment chỉ nên xuất hiện khi có từ hai reasonable alternatives trở lên và user cần reasoning để chọn.

### 8.5 Evidence-Supported Judgment

Ở các decision point chính, judgment đúng nhưng không có supporting evidence không nhận full reasoning credit.

### 8.6 Evidence Synthesis Is Separate from Gameplay Score

Final case conclusion được xác định từ **evidence state / synthesis logic**.

Gameplay score dùng để đánh giá performance của user.

> **Score does not determine whether Management Override exists in the case.**

### 8.7 Assisted Continuation

Nếu user chọn sai một bước nhưng information của correct path cần thiết để các bước sau hoạt động, system có thể cung cấp một **minimal assisted investigation packet**.

Previous node vẫn được ghi là `unresolved` hoặc `assisted`, vì system không được giả vờ rằng user đã làm đúng.

---

## 9. MVP Direction

MVP là **phiên bản rút gọn nhưng hoàn chỉnh từ đầu đến cuối**, không phải một module riêng.

Core journey:

**Financial Signal → Area → Account → Northstar → Cross-Source Control Investigation → Factual Finding → Control Interpretation → Management Override → Responsibility → Conclusion**

MVP giảm số lượng data, transactions, documents và people nhưng không cắt reasoning chain.

Một fixed case có thể hỗ trợ **Retry / Review Mode**, trong đó user xem lại reasoning errors và evidence gaps. Multi-case replayability hoặc randomized case generation không phải core requirement của MVP.

---

## 10. Week 1 to Week 2 Revision

Nhóm giữ nguyên Information Integration, target user và user task từ Week 1.

Week 2 làm rõ:

1. financial analysis chỉ có vai trò screening;
2. Beneish không trực tiếp dẫn đến Northstar;
3. screening phải qua drill-down và transaction tracing;
4. Surface Approval là observation layer, không phải pseudo-choice;
5. Control Investigation yêu cầu cross-reference nhiều nguồn;
6. raw fact, interpretation và assessment là ba levels khác nhau;
7. major judgment phải có supporting evidence;
8. score và case conclusion là hai hệ thống khác nhau;
9. fallback phải giữ learning chain nhưng không được giả vờ user đã làm đúng;
10. fixed MVP case dùng Retry/Review, không claim replayability cao.

---

## 11. Product Direction in One Sentence

> **The Last Heir giúp sinh viên luyện kỹ năng kết nối financial data, transaction data, control evidence và responsibility evidence để hình thành factual findings, đánh giá Management Override và xác định primary responsible individual thông qua một structured financial investigation.**
