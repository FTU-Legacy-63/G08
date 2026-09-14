# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — INPUT, THÔNG TIN VÀ MỨC ĐỘ SẴN SÀNG CỦA EVIDENCE

## 1. Mục tiêu của Week 3

Week 3 tiếp tục trực tiếp từ Product Direction và Solution Structure đã chốt ở Week 2.

Week 1 xác định **Information Integration** là Problem Direction. Week 2 chuyển problem đó thành một Financial Learning Game với một investigation chain thống nhất:

**Thông tin tài chính → Sàng lọc → Khoanh vùng → Phân rã khoản mục → Truy vết giao dịch → Kiểm tra bằng chứng kiểm soát → Đánh giá Management Override → Quy trách nhiệm → Kết luận dựa trên bằng chứng**

Week 3 không thay đổi problem, target user, user task, product pattern hoặc core logic. Nhiệm vụ của tuần này là kiểm tra liệu từng bước trong chuỗi trên đã có đủ input, source, assumption và sample data để có thể xây dựng và kiểm thử hay chưa.

Câu hỏi trung tâm:

> **Sản phẩm cần thông tin gì để hoạt động, thông tin đó đến từ đâu, và bộ input hiện tại có đủ khả thi để triển khai core logic hay không?**

---

## 2. Liên kết Week 1 → Week 2 → Week 3

### Week 1 — Problem Direction

Người học gặp khó khăn khi phải kết nối thông tin tài chính, dữ liệu giao dịch, bằng chứng kiểm soát và thông tin về trách nhiệm để đi đến một kết luận có căn cứ.

Hai quyết định cuối cùng là:

1. Các bằng chứng hiện có có hỗ trợ kết luận rằng Management Override đã xảy ra hay không?
2. Cá nhân nào chịu trách nhiệm chính, và bằng chứng nào hỗ trợ việc quy trách nhiệm đó?

### Week 2 — Product Direction

Nhóm lựa chọn Financial Learning Game với một core flow duy nhất:

**Sàng lọc → Khoanh vùng → Phân rã → Truy vết → Kiểm tra → Đánh giá → Quy trách nhiệm → Kết luận**

Technical route được chốt ở mức:

- Unity;
- C#;
- dữ liệu tình huống được chuẩn bị trước;
- lưu cục bộ;
- rule-based logic;
- không cần database, backend hoặc external API cho MVP.

### Week 3 — Input Readiness

Week 3 cụ thể hóa các nhóm input đã xác định ở Week 2 thành:

- Input Dictionary;
- Source Register;
- simulated case data;
- assumptions;
- local data structure;
- validation rules;
- data flow;
- early logic test;
- ownership của từng nhóm evidence.

Week 3 lựa chọn **JSON** làm định dạng lưu trữ cục bộ. Đây là quyết định được cụ thể hóa ở Week 3, không phải một giả định đã được chốt từ Week 2.

---

## 3. Operational Data và Problem Evidence

### Operational Data

Operational Data là dữ liệu trực tiếp làm cho game vận hành và tạo output.

Trong The Last Heir, Operational Data gồm:

- dữ liệu tài chính hai kỳ;
- dữ liệu SG&A breakdown;
- Advisory Expense transactions;
- Northstar transaction information;
- approval policy và approval records;
- personnel facts;
- conflict-of-interest evidence;
- các rule dùng để sàng lọc và kiểm tra case.

### Problem Evidence

Problem Evidence được sử dụng để hỗ trợ Problem Direction **Information Integration** đã xác định ở Week 1.

Problem Evidence không phải dữ liệu để game tính toán. Nó trả lời câu hỏi:

> **Vì sao người học cần một sản phẩm giúp kết nối nhiều nguồn thông tin và bằng chứng?**

Hai nhóm thông tin này được lưu và quản lý riêng để tránh nhầm giữa dữ liệu của case và bằng chứng chứng minh problem.

---

## 4. Quyết định về loại dữ liệu

Nhóm sử dụng **simulated data** làm dữ liệu chính của case Aster Holdings.

Lý do:

- sản phẩm là educational prototype, không phải công cụ kiểm toán thực tế;
- core value nằm ở reasoning process, không phụ thuộc dữ liệu real-time;
- một investigation chain có kiểm soát giúp đảm bảo người học phải thực hiện đúng các bước suy luận;
- việc gắn Management Override hoặc trách nhiệm cá nhân với doanh nghiệp/người thật là không cần thiết;
- simulated data giúp nhóm kiểm thử output mong đợi một cách có kiểm soát.

Framework, công thức và khái niệm được lấy từ nguồn học thuật/chuyên môn; số liệu Aster Holdings, approval policy, transaction records và personnel records là dữ liệu mô phỏng.

---

## 5. Data Structure được chọn trong Week 3

Theo technical route Week 2, game sử dụng Unity/C# với dữ liệu cục bộ và rule-based logic.

Week 3 lựa chọn cấu trúc sau:

```text
data/
  case_data.json
  rules.json
  evidence.json
  answer_key.json
```

### `case_data.json`

Chứa các fact tài chính và giao dịch mà người chơi có thể quan sát hoặc mở khóa:

- financial statements hai kỳ;
- SG&A breakdown;
- Advisory Expense Ledger;
- Northstar tranches.

### `rules.json`

Chứa các rule/assumption mà hệ thống sử dụng:

- materiality reference;
- case-specific screening rules cho DSRI, SGAI, TATA;
- approval policy.

Các công thức tính ratio không được lưu dưới dạng chuỗi để thực thi động. C# chịu trách nhiệm thực hiện phép tính và so sánh với rule.

### `evidence.json`

Chứa evidence liên quan tới:

- approval records;
- contract/agreement facts;
- personnel roles;
- direct involvement;
- conflict of interest;
- control evidence.

File này chỉ chứa **facts/evidence**, không ghi sẵn ai là thủ phạm hoặc ai chịu trách nhiệm chính.

### `answer_key.json`

Chứa expected conclusion và minimum evidence set dùng nội bộ để kiểm thử hoặc chấm logic.

File này:

- không phải evidence;
- không được hiển thị cho người chơi;
- không được dùng như một shortcut thay cho evidence-based reasoning.

---

## 6. Investigation Chain được hỗ trợ bởi dữ liệu

Bộ input Week 3 hỗ trợ toàn bộ chain:

**Financial Data**  
↓  
**DSRI / SGAI / TATA Screening**  
↓  
**SG&A được ưu tiên**  
↓  
**Materiality cross-check**  
↓  
**SG&A Breakdown**  
↓  
**Advisory Expense**  
↓  
**Transaction Tracing**  
↓  
**Northstar — 3 related tranches**  
↓  
**Approval and Control Evidence**  
↓  
**Management Override Assessment**  
↓  
**Responsibility Attribution**  
↓  
**Evidence-Based Conclusion + Financial Trace Map**

Beneish chỉ hỗ trợ xác định khu vực cần xem thêm. Northstar chỉ xuất hiện sau bước phân rã khoản mục và truy vết giao dịch.

---

## 7. Visible Contribution

Mỗi workstream có output cụ thể và evidence location rõ ràng.

| Thành viên | Trách nhiệm Week 3 | Visible Contribution | Evidence Location | Dependency | Next Action |
|---|---|---|---|---|---|
| **Phạm Quỳnh Phương** | Tổng hợp Week 3, kiểm tra sự nhất quán với Week 1–2 và quản lý revision | Week 3 overview, consistency check, ownership map, handoff sang Week 4 | `WEEK_3_OVERVIEW.md`; review toàn bộ `docs/` và `data/` | Đầu ra của tất cả workstream | Chốt version dùng cho Checkpoint 3 và ghi feedback/revision |
| **Phạm Triệu Tiến Dũng** | Chuẩn bị dữ liệu tài chính, SG&A breakdown và transaction data | Input Dictionary phần financial input; simulated financial data; Advisory ledger; `case_data.json` | `docs/input-dictionary.md`; `data/case_data.json` | Investigation chain từ Week 2 | Rà lại tính nhất quán tổng SG&A, Advisory ledger và unit |
| **Nguyễn Minh Hiền** | Xây dựng financial screening rules, validation và early logic test | Rule definitions, approval thresholds, validation rules, expected-process test; `rules.json` | `docs/data-flow.md`; `data/rules.json` | Financial data từ Dũng | Chuyển các rule thành C# functions ở Week 4 |
| **Tôn Khánh Ngọc** | Chuẩn bị control/responsibility evidence và source register liên quan | Approval evidence, personnel facts, conflict evidence, source register; `evidence.json` | `docs/sources.md`; `data/evidence.json` | Storyline và Northstar chain | Hoàn thiện evidence cards và feedback wording |
| **Đinh Thị Minh Khuê** | Kiểm tra khả năng data binding với Unity/C# và cấu trúc field cho UI | Mapping JSON → C# objects → UI states; checklist field cần load theo từng layer | `docs/unity-data-binding.md`; Unity project | JSON schema đã chốt | Implement loader/state binding và kiểm thử dữ liệu trong Unity |

### Reviewer / Integrator

- Phạm Quỳnh Phương là integrator của tài liệu và consistency.
- Nguyễn Minh Hiền review logic/rule.
- Đinh Thị Minh Khuê review khả năng sử dụng dữ liệu trong Unity.
- Owner tạo dữ liệu vẫn chịu trách nhiệm cho meaning và tính nhất quán của field thuộc workstream của mình.

---

## 8. Evidence Map

| Evidence / Data Group | Primary Owner | Reviewer | Dùng ở đâu |
|---|---|---|---|
| Financial statements hai kỳ | Dũng | Hiền | Layer 1 |
| DSRI/SGAI/TATA rule | Hiền | Phương | Layer 1 |
| SG&A breakdown | Dũng | Hiền | Layer 1 |
| Advisory transaction ledger | Dũng | Hiền | Layer 1 |
| Approval policy | Hiền | Ngọc | Layer 2 |
| Northstar approval records | Ngọc | Hiền | Layer 2 |
| Northstar agreement facts | Ngọc | Phương | Layer 2 |
| Personnel facts | Ngọc | Phương | Layer 3 |
| Conflict evidence | Ngọc | Phương | Layer 3 |
| JSON → C# mapping | Khuê | Hiền | Technical integration |
| Final consistency / handoff | Phương | Cả nhóm | Week 3 → Week 4 |

---

## 9. Week 3 Completion Check

- [x] Phân biệt Operational Data và Problem Evidence.
- [x] Input Dictionary có meaning, type, unit, example, validation, missing handling và owner.
- [x] Source Register có purpose, access date/creation point, limitation và owner.
- [x] Có simulated data để chạy toàn bộ MVP journey.
- [x] Assumptions được ghi rõ và không ẩn trong code.
- [x] Data structure phù hợp Unity/C# và local storage.
- [x] Data flow nối trực tiếp với Product Logic Week 2.
- [x] Có input validation.
- [x] Có early logic test.
- [x] Evidence và data group có owner rõ.
- [x] JSON chứa facts/rules được tách khỏi internal answer key.
- [ ] Feedback sau Checkpoint 3 sẽ được bổ sung khi nhận được.

---

## 10. Handoff to Week 4

Week 3 trả lời:

> **Sản phẩm đã có đủ input, source, assumption và simulated evidence để chạy thử core journey hay chưa?**

Kết quả hiện tại: **Có, ở mức prototype và kiểm thử thủ công.**

Week 4 tập trung chuyển bộ input này thành financial logic và investigation rules thực thi trong C#, đặc biệt:

1. tính DSRI, SGAI và TATA;
2. áp dụng case-specific screening rules;
3. materiality cross-check;
4. phân rã SG&A;
5. group/trace các tranches có cùng `agreement_id` và economic purpose;
6. đối chiếu aggregate transaction value với approval policy;
7. tổng hợp evidence cho Management Override;
8. so sánh responsibility evidence;
9. tạo Financial Trace Map và final feedback.
