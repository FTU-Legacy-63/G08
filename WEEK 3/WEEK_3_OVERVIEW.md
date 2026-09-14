# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — INPUT, THÔNG TIN VÀ MỨC ĐỘ SẴN SÀNG CỦA EVIDENCE

## 1. Mục tiêu của Week 3

Week 3 tiếp tục trực tiếp từ Problem Direction của Week 1 và Product Direction của Week 2. Nhóm không thay đổi problem, target user, user task, product pattern hoặc core investigation chain.

Week 1 xác định **Information Integration** là vấn đề trung tâm. Week 2 chuyển vấn đề này thành một Financial Learning Game với chuỗi:

**Thông tin tài chính → Sàng lọc → Khoanh vùng → Phân rã khoản mục → Truy vết giao dịch → Kiểm tra bằng chứng kiểm soát → Đánh giá Management Override → Quy trách nhiệm → Kết luận dựa trên bằng chứng**

Week 3 trả lời:

> **Sản phẩm cần thông tin gì để chuỗi trên hoạt động, thông tin đến từ đâu, và bộ input/evidence hiện tại có đủ khả thi để triển khai hay không?**

---

## 2. Liên kết Week 1 → Week 2 → Week 3

### Week 1 — Problem Direction

Người học gặp khó khăn khi kết nối financial information, transaction evidence, control evidence và responsibility evidence để trả lời hai câu hỏi:

1. Evidence có hỗ trợ kết luận Management Override hay không?
2. Cá nhân nào chịu trách nhiệm chính và bằng chứng nào hỗ trợ việc quy trách nhiệm?

### Week 2 — Product Direction

Nhóm chốt:

- Financial Learning Game;
- một investigation chain chính;
- Unity + C#;
- dữ liệu chuẩn bị trước, lưu cục bộ;
- rule-based logic;
- không database, backend hoặc external API cho MVP.

### Week 3 — Input Readiness

Week 3 cụ thể hóa input thành:

- Input Dictionary;
- Source Register;
- simulated case data;
- assumptions;
- local JSON structure;
- validation;
- data flow;
- early logic test;
- ownership của data/evidence.

JSON là quyết định cụ thể hóa ở Week 3, không phải giả định đã được chốt từ Week 2.

---

## 3. Operational Data và Problem Evidence

### Operational Data

Operational Data là dữ liệu làm game chạy:

- financial data hai kỳ;
- SG&A breakdown;
- Advisory Expense ledger;
- Northstar tranches;
- approval policy;
- approval summary;
- approval audit trail;
- personnel facts;
- conflict-of-interest evidence;
- rules phục vụ screening và investigation.

### Problem Evidence

Problem Evidence hỗ trợ Problem Direction Information Integration của Week 1. Nó không được dùng làm calculation input của game.

---

## 4. Quyết định về loại dữ liệu

Nhóm sử dụng **simulated data** cho Aster Holdings vì:

- sản phẩm là educational prototype;
- core value là reasoning, không phải real-time data;
- nhóm cần kiểm soát progression của evidence;
- Management Override và responsibility không cần gắn với doanh nghiệp/người thật;
- simulated data dễ kiểm thử thủ công và trong C#.

Framework/công thức được lấy từ nguồn học thuật/chuyên môn; dữ liệu Aster Holdings, Northstar, approval policy, audit trail và personnel evidence là dữ liệu mô phỏng.

---

## 5. Case Logic được chốt ở Week 3

### 5.1. Approval policy

| Aggregate economic transaction value | Required approval |
|---|---|
| `<= 0.5` triệu USD | Department Head |
| `> 0.5 and <= 1.0` triệu USD | Department Head + Finance Manager |
| `> 1.0` triệu USD | CFO + Board |

### 5.2. Northstar

Northstar được chia thành ba tranche:

```text
0.9 + 0.9 + 0.8 = 2.6 triệu USD
```

### 5.3. Surface approval và audit trail

Ở lớp **approval summary bề mặt**, mỗi tranche hiển thị:

- Department Head Approval: Completed;
- Finance Approval: Completed.

Do đó hồ sơ ban đầu **trông như đã đáp ứng dual approval**.

Tuy nhiên, khi người chơi mở **approval audit trail**, evidence cho thấy:

- Department Head approval được thực hiện bởi Victor;
- Finance approval step không được Lucas thực hiện;
- Finance step được hệ thống hoàn tất thông qua một **management override / proxy route** do Victor kích hoạt;
- không có required documented justification;
- không có retrospective Finance Manager review.

Case không sử dụng giả chữ ký hay forgery. Learning point là **management override of an approval control**, không phải document falsification.

### 5.4. Hai lớp control issue

**Control issue 1 — Finance approval bypass**  
Bề mặt hiển thị Finance Approval = Completed, nhưng audit trail cho thấy Lucas không approve; Victor dùng override/proxy route để hoàn tất step này không đúng điều kiện.

**Control issue 2 — Approval escalation bypass**  
Ba tranche cùng vendor, same agreement và same economic purpose nên phải được xem xét như một aggregate economic transaction 2.6 triệu USD. Mức này yêu cầu CFO + Board, nhưng transaction được cấu trúc thành ba khoản dưới 1.0 triệu USD.

Hai issue này phải được đọc cùng evidence về authority, participation, transaction connection và conflict khi người chơi đánh giá Management Override.

---

## 6. Data Structure được chọn

```text
data/
  case_data.json
  rules.json
  evidence.json
  answer_key.json
```

### `case_data.json`

Chứa player-visible case facts:

- financials;
- SG&A breakdown;
- Advisory transactions;
- transaction initiator;
- agreement/economic-purpose linkage.

### `rules.json`

Chứa:

- materiality reference;
- case-specific DSRI/SGAI/TATA screening rules;
- approval policy;
- conditions của emergency/override route;
- transaction aggregation rule.

### `evidence.json`

Chứa:

- approval summaries;
- approval audit trail;
- agreement evidence;
- personnel facts;
- conflict evidence;
- control evidence.

Không ghi sẵn `culprit=true` hoặc final responsibility answer.

### `answer_key.json`

Chỉ dùng nội bộ để test/feedback. Không player-visible và không phải evidence.

---

## 7. Investigation Chain được hỗ trợ bởi dữ liệu

**Financial Data**  
↓  
**DSRI / SGAI / TATA Screening**  
↓  
**SG&A**  
↓  
**Materiality Cross-Check**  
↓  
**Advisory Expense**  
↓  
**Northstar 3 Tranches**  
↓  
**Surface Approval: Completed**  
↓  
**Audit Trail: Lucas did not approve; Victor used override/proxy route**  
↓  
**Aggregate 2.6 > 1.0 → CFO + Board required**  
↓  
**Management Override Assessment**  
↓  
**Responsibility Attribution**  
↓  
**Evidence-Based Conclusion + Financial Trace Map**

---

## 8. Visible Contribution

| Thành viên | Trách nhiệm Week 3 | Visible Contribution | Evidence Location | Dependency | Next Action |
|---|---|---|---|---|---|
| **Phạm Quỳnh Phương** | Integration, consistency với Week 1–2 và revision control | Week 3 overview, evidence map, consistency check, handoff Week 4 | `WEEK_3_OVERVIEW.md`; review toàn bộ `docs/` và `data/` | Tất cả workstream | Chốt Checkpoint 3 và kiểm tra các file dùng cùng version approval logic |
| **Phạm Triệu Tiến Dũng** | Financial data và transaction data | Financial input, SG&A breakdown, Advisory ledger, Northstar tranches và transaction initiator | `docs/input-dictionary.md`; `data/case_data.json` | Investigation chain Week 2 | Reconcile totals và kiểm tra unit |
| **Nguyễn Minh Hiền** | Rule, validation và early logic test | Screening rules, materiality, approval policy, override-route rule, aggregation rule | `docs/data-flow.md`; `data/rules.json` | Case data | Chuyển rule sang C# functions ở Week 4 |
| **Tôn Khánh Ngọc** | Control/responsibility evidence và source register | Approval summary, audit trail, personnel facts, conflict evidence | `docs/sources.md`; `data/evidence.json` | Northstar storyline | Hoàn thiện evidence-card wording để không lộ đáp án sớm |
| **Đinh Thị Minh Khuê** | Unity/C# data binding | Mapping JSON → C# objects → UI/evidence state | `docs/unity-data-binding.md`; Unity project | JSON schema | Implement loader/state binding |

---

## 9. Week 3 Completion Check

- [x] Operational Data và Problem Evidence được phân biệt.
- [x] Input Dictionary có meaning, type, unit, validation, missing handling và owner.
- [x] Source Register có purpose, limitation và owner.
- [x] Simulated data support toàn bộ investigation chain.
- [x] Assumptions được ghi, không ẩn trong code.
- [x] JSON structure phù hợp Unity/C#.
- [x] Surface approval và audit trail được tách thành hai lớp evidence.
- [x] Lucas được xác định là Finance Manager bị bypass, không phải co-approver thực tế.
- [x] Không dùng forgery/fake signature trong case.
- [x] Có early logic test.
- [x] Evidence có owner.

---

## 10. Handoff to Week 4

Week 4 cần formalize và code/test các logic sau:

1. DSRI/SGAI/TATA;
2. materiality cross-check;
3. SG&A drill-down;
4. Northstar aggregation;
5. surface approval vs audit-trail comparison;
6. override/proxy-route compliance check;
7. aggregate approval requirement;
8. Management Override evidence synthesis;
9. Responsibility Attribution;
10. Financial Trace Map và feedback.
