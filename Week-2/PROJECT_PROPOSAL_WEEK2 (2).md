# The Last Heir — Project Proposal

> Học phần: **NHA408E**  
> Nhóm: **G08**

# WEEK 2 — PRODUCT DIRECTION

## 1. Problem Direction

Dự án tiếp tục problem direction được lựa chọn trong Week 1: **Information Integration**.

Sinh viên có kiến thức tài chính cơ bản có thể hiểu từng loại thông tin riêng biệt nhưng gặp khó khăn khi phải kết nối dữ liệu từ nhiều nguồn để giải thích một vấn đề doanh nghiệp. Trong một tình huống mở, thông tin cần thiết có thể nằm ở dữ liệu tài chính tổng hợp, dữ liệu giao dịch, hợp đồng, quy tắc kiểm soát và các tài liệu nội bộ. Không một nguồn riêng lẻ nào cung cấp toàn bộ câu trả lời.

Sau Checkpoint 1, nhóm thu hẹp vấn đề quanh một **investigation chain thống nhất**. Người dùng sẽ bắt đầu từ một dấu hiệu tài chính ban đầu, truy vết đến giao dịch liên quan, tiếp tục kiểm tra các bằng chứng về giao dịch và kiểm soát, sau đó kết nối chúng với trách nhiệm của các cá nhân trong case để hình thành kết luận.

---

## 2. Target User and User Task

Người dùng mục tiêu là **sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh đã có kiến thức tài chính cơ bản**.

### Core user task

Người dùng phải:

1. xác định vấn đề tài chính cần ưu tiên điều tra;
2. truy vết từ dữ liệu tổng hợp xuống giao dịch cụ thể;
3. đối chiếu giao dịch với hợp đồng, payment information và control information;
4. kết nối các bằng chứng với những cá nhân liên quan;
5. lựa chọn người chịu trách nhiệm chính và giải thích kết luận dựa trên evidence chain.

Nhiệm vụ trọng tâm không phải là thực hiện càng nhiều phép tính càng tốt. Calculation chỉ được sử dụng khi nó giúp người chơi phát hiện signal, kiểm tra một giả thuyết hoặc củng cố một evidence link.

---

## 3. Desired User Outcome

Sau khi hoàn thành sản phẩm, người dùng được kỳ vọng có thể:

- xác định thông tin nào quan trọng trong một tình huống có nhiều dữ liệu;
- đi từ dữ liệu tổng hợp xuống transaction và document-level evidence;
- kết nối nhiều nguồn thông tin đề cập đến cùng một vấn đề;
- phân biệt **red flag** với bằng chứng đủ mạnh;
- điều chỉnh giả thuyết khi xuất hiện thông tin mới;
- đưa ra kết luận không vượt quá bằng chứng hiện có.

Desired outcome của sản phẩm là:

> **Cải thiện khả năng tổng hợp và lập luận từ thông tin tài chính phân mảnh để đưa ra một kết luận có căn cứ.**

---

## 4. Product Statement

> **The Last Heir** là một **Scenario-Based Financial Investigation Learning Game**, trong đó người chơi vào vai người thừa kế của Aster Holdings và phải điều tra một vấn đề tài chính đang diễn ra trong doanh nghiệp. Người chơi bắt đầu từ dữ liệu tài chính tổng hợp, truy vết giao dịch Northstar, kiểm tra bằng chứng về giao dịch và kiểm soát, so sánh trách nhiệm của các cá nhân liên quan và cuối cùng **chọn đích danh một cá nhân chịu trách nhiệm chính**, kèm giải thích dựa trên evidence chain.

Sản phẩm sử dụng một case thống nhất để biến việc đọc và phân tích thông tin tài chính thành một quá trình điều tra có mục tiêu. Mỗi thông tin mới phải đóng góp vào việc xây dựng, kiểm tra hoặc điều chỉnh reasoning của người chơi.

Signal khởi đầu (lợi nhuận tăng nhưng OCF không tăng tương ứng) chỉ là screening indicator, không phải bằng chứng — người chơi phải truy vết tiếp để xác định nguyên nhân.

---

## 5. Product Value, Product Form and Product Logic

### Product Value

Giúp người học **kết nối nhiều nguồn financial information thành một evidence-based reasoning chain**, thay vì chỉ đọc từng nguồn hoặc tính từng chỉ số độc lập.

### Product Form

**Scenario-Based Financial Investigation Learning Game** dưới dạng web application.

### Product Logic

```text
Information
    ↓
Identify Signal
    ↓
Trace Transaction
    ↓
Check Contract / Control Evidence
    ↓
Connect Responsibility Evidence
    ↓
Compare Hypotheses
    ↓
Conclude
```

Product form có thể được đơn giản hóa về giao diện hoặc công nghệ, nhưng product value và product logic phải được giữ nguyên.

---

## 6. Main Visible Output

Main output của Target Product là:

> **Financial Trace Map + Evidence-Based Responsibility Conclusion**

### Evidence-Based Responsibility Conclusion (output quyết định)

Bước cuối cùng của mọi lượt chơi: người chơi chọn đích danh một cá nhân trong số các suspect (Victor / Lucas / David / Sophia ở Target Product; 2–3 suspect ở MVP), giải thích bằng key evidence, và nhận phản hồi đúng/sai từ hệ thống.

### Financial Trace Map (bằng chứng hỗ trợ)

Thể hiện cách người dùng đi từ vấn đề tài chính ban đầu đến transaction, control evidence và responsibility evidence — làm bằng chứng dẫn tới Responsibility Conclusion.

Main output phù hợp với problem direction vì nó làm cho **Information Integration** trở nên quan sát được: người dùng không chỉ chọn một đáp án mà phải thể hiện được chuỗi thông tin dẫn đến đáp án.

Phần giải thích đi kèm verdict có thể phân biệt mức độ hành vi (poor decision vs. misconduct), nhưng verdict được chấm vẫn chỉ là chọn đích danh 1 suspect đúng/sai.

Các yếu tố như score, timer, hint, narrative ending hoặc animation chỉ là supporting features và không thay thế main output.

---

## 7. Product Pattern

Sản phẩm sử dụng một product pattern chính:

> **Financial Learning Game — Scenario-Based Financial Investigation**

Core interaction được tổ chức quanh investigation loop:

```text
Observe
   ↓
Investigate
   ↓
Analyse
   ↓
Connect
   ↓
Reassess
   ↓
Conclude
```

Sản phẩm không phải Question Bank vì các lựa chọn không tồn tại độc lập mà cùng thuộc một case và cùng đóng góp vào một investigation chain.

Sản phẩm cũng không phải Calculator hoặc Dashboard thuần túy vì calculation và data display chỉ là công cụ hỗ trợ reasoning process.

---

## 8. MVP — Simplified End-to-End Game Journey

### MVP Principle

MVP không phải là cắt bỏ nửa sau của game. MVP phải là **phiên bản nhỏ nhất nhưng vẫn cho người dùng trải nghiệm đầy đủ hành trình cốt lõi từ phát hiện vấn đề đến kết luận trách nhiệm**.

Do đó, MVP của The Last Heir giữ toàn bộ investigation journey nhưng giảm độ phức tạp của data, evidence và logic.

### MVP User Journey

```text
Financial Overview
        ↓
Identify One Financial Signal
        ↓
Select / Trace One Suspicious Transaction
        ↓
Check One Contract or Payment Evidence
        ↓
Check One Control Evidence
        ↓
Review Simplified Suspect Information
        ↓
Connect Key Evidence
        ↓
Choose Primary Responsible Person (chọn đích danh 1 trong 2–3 suspect)
        ↓
Receive Verdict (đúng/sai) + Financial Trace Recap
```

### MVP Core Output

> **Simplified Evidence-Based Responsibility Conclusion (chọn đích danh 1 suspect + verdict đúng/sai) + Simplified Financial Trace Map (bằng chứng đi kèm)**

Người chơi phải hoàn thành được toàn bộ reasoning chain, nhưng với số lượng input và nhánh lựa chọn nhỏ hơn Target Product.

### MVP Simplifications

| Dimension | MVP | Target Product |
|---|---|---|
| Financial signals | 1 signal chính — Cash Conversion (OCF/Net Income) | Thêm DSRI và các supporting indicators khác |
| Suspicious transaction | 1 transaction chain dẫn đến Northstar | Nhiều transaction/payment details để drill down |
| Contract evidence | 1–2 key fields | Contract detail đầy đủ hơn |
| Control evidence | 1 control rule + 1 substance-over-form clue (payment splitting dưới ngưỡng duyệt) | Nhiều control conditions và payment patterns |
| Suspects | 2–3 trong số 4 executive của case (Victor, David, Lucas, Sophia) | 4 executive dossiers đầy đủ |
| Evidence links | Một số evidence link bắt buộc | Nhiều supporting và conflicting evidence |
| Hypothesis logic | Rule-based, ít nhánh | Nhiều nhánh reassessment và comparison |
| Final conclusion | Chọn đích danh 1 người chịu trách nhiệm chính trong 2–3 suspect + lý do ngắn, hệ thống trả về đúng/sai | Responsibility conclusion có reasoning sâu hơn, nhiều executive dossier hơn |
| Gameplay | Linear / lightly branching | Evidence unlocking và branching phong phú hơn |

### Why this MVP is viable

MVP vẫn có:

- **một target user**;
- **một core task**: hoàn thành một financial investigation;
- **một nhóm input thiết yếu**;
- **một logic path chính**;
- **một output có ý nghĩa**;
- **một user flow hoàn chỉnh từ đầu đến cuối**.

Như vậy, MVP có thể kiểm chứng product value của The Last Heir mà không cần xây toàn bộ độ phức tạp của Target Product.

---

## 9. In Scope and Out of Scope

### In Scope for MVP

- một case doanh nghiệp: Aster Holdings;
- một investigation chain chính liên quan đến Northstar;
- một financial signal chính;
- một transaction path;
- một contract/payment evidence set tối giản;
- một control evidence set tối giản;
- 2–3 suspect profiles đơn giản;
- rule-based evidence linking;
- simplified Financial Trace Map;
- primary responsibility choice: chọn đích danh 1 suspect + phản hồi đúng/sai;
- một user flow hoàn chỉnh từ opening đến conclusion.

### Out of Scope for MVP

- nhiều case doanh nghiệp;
- nhiều investigation branches phức tạp;
- open-world exploration;
- real-time market data;
- external API;
- backend phức tạp;
- AI-generated cases hoặc AI-generated judgement;
- multiplayer;
- leaderboard;
- virtual economy;
- inventory/shop;
- authentication;
- gamification phức tạp không trực tiếp hỗ trợ learning outcome.

---

## 10. Technical Route and Fallback

### Initial Technical Route

**Code-Based Web Application sử dụng React/JavaScript và static JSON/CSV data.**

Route này phù hợp vì:

- case có interaction flow hữu hạn;
- dữ liệu có thể chuẩn bị trước;
- logic có thể triển khai theo rule-based flow;
- không cần real-time API hoặc database cho MVP;
- nhóm có thể ưu tiên core journey và output trước.

### Fallback Route

Nếu route chính gặp rủi ro về kỹ thuật hoặc thời gian:

- giữ nguyên end-to-end investigation journey;
- giảm số lượng screens;
- giảm số lượng evidence cards;
- dùng local JSON thay cho database;
- dùng linear flow thay cho branching flow;
- dùng rule-based feedback đơn giản;
- nếu cần, chuyển thành interactive prototype nhưng vẫn phải cho người dùng đi từ financial signal đến responsibility conclusion.

> **Fallback được phép giảm độ phức tạp, nhưng không được cắt mất core journey của sản phẩm — bước chọn đích danh người chịu trách nhiệm chính và phản hồi đúng/sai luôn phải còn ở cuối flow.**

---

## 11. Feasibility and Open Questions

Dự án sử dụng một case doanh nghiệp, một investigation chain chính và dữ liệu mô phỏng có giới hạn. Vì vậy, nhóm có thể xây MVP bằng static data và logic xác định trước mà không cần backend phức tạp.

Các câu hỏi cần tiếp tục kiểm tra trong Week 3 gồm:

1. Financial signal nào đủ rõ để khởi động investigation mà không chỉ sẵn đáp án?
2. Bộ input tối thiểu nào đủ để người chơi đi hết MVP journey?
3. Cần bao nhiêu evidence để người chơi thực sự phải thực hiện Information Integration?
4. Evidence nào là bắt buộc để responsibility conclusion có căn cứ?
5. Simplified Financial Trace Map nên hiển thị những evidence link nào?
6. Logic feedback nào đủ đơn giản để triển khai nhưng vẫn phản ánh reasoning đúng/sai?

---

## 12. Week 2 Completion Criteria

Week 2 được xem là hoàn chỉnh khi repository thể hiện rõ:

- problem direction;
- target user;
- core user task;
- desired outcome;
- main visible output;
- một product pattern chính;
- product value, form và logic;
- simplified end-to-end MVP;
- in scope và out of scope;
- technical route và fallback;
- các open questions chuyển sang Week 3.

> **Week 3 sẽ xác định và kiểm tra liệu các input, source và evidence cần cho end-to-end MVP có đủ rõ, nhất quán và khả thi để chuyển sang xây logic hay không.**
