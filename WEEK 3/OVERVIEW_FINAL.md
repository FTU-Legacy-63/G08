# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — INPUT, THÔNG TIN VÀ MỨC ĐỘ SẴN SÀNG CỦA EVIDENCE

## 1. Mục tiêu của Week 3

Week 3 tiếp tục trực tiếp từ Problem Direction của Week 1 và Product Direction của Week 2. Nhóm không thay đổi problem, target user, product pattern hoặc hai final decisions.

Week 1 xác định **Information Integration** là vấn đề trung tâm.

Week 2 chuyển vấn đề này thành Financial Learning Game với core reasoning chain:

**Financial Information → Financial Screening → Area to Investigate → Account Drill-down → Transaction Tracing → Cross-Source Control Investigation → Factual Finding → Control Interpretation → Management Override Assessment → Responsibility Attribution → Evidence-Based Conclusion**

Week 3 trả lời:

> **Sản phẩm cần exact input, raw evidence field, simulated assumption, evidence state và data structure nào để chain trên hoạt động mà không lộ conclusion, không biến interaction thành pseudo-choice và không làm đứt learning flow khi user mắc lỗi?**

---

## 2. Liên kết Week 1 → Week 2 → Week 3

### Week 1 — Problem Direction

Người học gặp khó khăn khi kết nối financial information, transaction evidence, control evidence và responsibility evidence để trả lời:

1. Evidence có hỗ trợ Management Override hay không?
2. Ai là primary responsible individual và evidence nào hỗ trợ attribution?

Week 1 cũng làm rõ rằng judgment đúng nhưng không có supporting evidence chưa đủ để chứng minh learning task đã hoàn thành.

### Week 2 — Product Direction

Nhóm chốt:

1. Financial Learning Game;
2. một investigation chain chính;
3. Surface Approval chỉ là observation layer, không phải scored pseudo-choice;
4. major judgments phải được hỗ trợ bằng evidence;
5. Evidence State và Performance Score là hai hệ thống khác nhau;
6. wrong choice không gây game-over nếu có thể dùng Assisted Continuation;
7. fixed-case MVP dùng Retry / Review thay vì claim high replayability.

### Week 3 — Input Readiness

Week 3 cụ thể hóa các quyết định trên thành:

1. Input Dictionary;
2. Source Register;
3. simulated case data;
4. assumptions;
5. local JSON structure;
6. raw evidence design;
7. Evidence State;
8. Assisted Continuation requirements;
9. validation;
10. data flow;
11. early logic test;
12. Unity/C# binding requirements.

JSON là quyết định cụ thể hóa ở Week 3, không phải giả định đã được chốt từ Week 2.

---

## 3. Operational Data và Problem Evidence

### Operational Data

Operational Data là dữ liệu làm game chạy:

financial data hai kỳ;  
SG&A breakdown;  
Advisory Expense ledger;  
Northstar tranches;  
approval policy;  
surface approval summary;  
raw approval audit trail;  
personnel role facts;  
proxy-route policy;  
agreement/economic-purpose linkage;  
responsibility/conflict evidence;  
screening/investigation rules;  
Evidence State;  
Assisted Continuation data.

### Problem Evidence

Problem Evidence hỗ trợ Problem Direction Information Integration của Week 1.

Problem Evidence không được dùng như calculation input hoặc case answer.

---

## 4. Quyết định về loại dữ liệu

Nhóm sử dụng **simulated data** cho Aster Holdings vì:

1. sản phẩm là educational prototype;
2. core value là reasoning, không phải real-time data;
3. nhóm cần kiểm soát progression của evidence;
4. Management Override và responsibility không cần gắn với doanh nghiệp hoặc cá nhân thật;
5. simulated data dễ kiểm thử thủ công và trong C#.

Framework/công thức được lấy từ nguồn học thuật/chuyên môn.

Aster Holdings, Northstar, approval policy, Special Proxy Completion Route, audit trail, legacy-system behavior và personnel evidence là **simulated case content**.

---

## 5. Case Logic được chốt ở Week 3

### 5.1. Approval Policy

| Aggregate economic transaction value | Required approval |
|---|---|
| `<= 0.5` triệu USD | Department Head |
| `> 0.5 and <= 1.0` triệu USD | Department Head + Finance Manager |
| `> 1.0` triệu USD | CFO + Board |

Đây là simulated Aster Holdings policy.

### 5.2. Northstar

Northstar gồm ba tranches:

```text
0.9 + 0.9 + 0.8 = 2.6 triệu USD
```

Các tranche có cùng vendor, agreement và economic purpose. Initiator match là supporting linkage.

### 5.3. Surface Approval

Surface Approval chỉ là **read-only observation layer**.

Mỗi tranche hiển thị:

```text
Department Head Approval = Completed
Finance Approval = Completed
Overall Status = Approved
```

Không yêu cầu user trả lời một pseudo-choice kiểu “hồ sơ có vẻ complete không?” để được đi tiếp.

### 5.4. Cross-Source Control Investigation

Sau Surface Approval, user được truy cập một small evidence workspace gồm:

**Approval Policy**  
**Personnel Directory**  
**Raw Approval Audit Trail**

Không một source nào nói sẵn:

`Lucas was bypassed`

`Finance control was bypassed`

hoặc

`Management Override occurred`.

### 5.5. Raw Audit Trail

Raw Audit Trail chỉ chứa facts như:

```text
Required role: Finance Manager
Status: Completed
Completion type: Proxy Route
Recorded Finance approver: —
Route initiated by: Victor
Reason code: —
Documented justification: —
Retrospective Finance review: —
```

Player phải cross-reference Policy + Personnel + Raw Audit Trail để tự tạo factual finding.

### 5.6. Factual Finding

Expected factual finding:

> Finance step is recorded as Completed, but no Finance Manager approver is recorded; the Proxy Route was initiated by Victor.

Đây là fact-level output, chưa phải final control conclusion.

### 5.7. Control Interpretation

Sau factual finding, user mới diễn giải:

> Finance approval control may have been bypassed.

Full reasoning credit yêu cầu **judgment + relevant supporting evidence**.

### 5.8. Proxy Route Compliance

Aster có simulated **Special Proxy Completion Route**.

Route chỉ hợp lệ khi có:

1. documented justification;
2. valid reason code;
3. retrospective Finance Manager review.

Northstar không có ba điều kiện này.

Expected finding:

> Proxy Route use is non-compliant with simulated Aster policy.

### 5.9. Aggregate Approval

Northstar aggregate = 2.6 > 1.0.

Expected required approval:

> CFO + Board.

Đây là một control issue riêng với Finance-step issue.

### 5.10. Management Override Synthesis

Management Override không được suy ra từ một single field hoặc từ gameplay score.

Evidence State cần xác nhận nhiều components như:

control circumvention evidence;  
non-compliant Proxy Route use;  
approval escalation issue;  
Victor direct management/transaction connection;  
corroborating responsibility evidence.

### 5.11. Responsibility

Victor có direct transaction/control evidence mạnh nhất.

Lucas là required Finance role nhưng không có recorded Northstar approval event. Monitoring responsibility là một governance question riêng và cần evidence riêng; current case không dùng monitoring role để tự động quy primary responsibility.

David có relevance vì aggregate transaction >1.0 đáng lẽ đi qua CFO + Board.

Sophia có relevance ở monitoring/control context nhưng không có direct override evidence trong current case.

---

## 6. Storyline / System Assumption

Aster Holdings sử dụng một fictional legacy approval environment có khả năng **record workflow events for retrospective review** nhưng không thực hiện full real-time compliance testing hoặc automatic policy-exception alerting.

Do đó:

> **System can log an event without automatically detecting or escalating the control problem.**

Succession review tạo trigger để historical financial/control records được cross-reference lại.

Assumption này giải thích vì sao raw logs tồn tại nhưng issue chưa tự động được flag trước investigation.

Đây là simulated storyline assumption, không phải claim về hệ thống thực tế hoặc professional standard.

---

## 7. Data Structure được chọn

```text
data/
  case_data.json
  rules.json
  evidence.json
  answer_key.json
```

### `case_data.json`

Chứa player-visible case facts:

financials;  
SG&A breakdown;  
Advisory transactions;  
transaction initiator;  
agreement/economic-purpose linkage.

### `rules.json`

Chứa:

materiality reference;  
case-specific DSRI/SGAI/TATA rules;  
approval policy;  
Special Proxy Completion Route policy;  
aggregation rule;  
Evidence State rules;  
Assisted Continuation rules.

### `evidence.json`

Chứa:

surface approval summaries;  
raw approval audit records;  
agreement evidence;  
baseline personnel facts;  
responsibility evidence;  
conflict evidence.

### `answer_key.json`

Chỉ dùng nội bộ cho validation/feedback.

Không player-visible.

Ngoài expected answers, answer key cần phân loại evidence thành:

**required relevant**  
**additional relevant**  
**irrelevant / contradictory**

để tránh exploit kiểu “select all evidence”.

---

## 8. Evidence State vs Performance Score

### Evidence State

Evidence State mô tả trạng thái reasoning/evidence chain:

```text
unreviewed
reviewed
confirmed
unresolved
assisted
contradicted
```

Evidence State dùng để xác định case conclusion và Trace Map.

### Performance Score

Performance Score đánh giá user:

calculation accuracy;  
judgment quality;  
evidence coverage;  
evidence relevance;  
reasoning consistency.

**Score không quyết định Management Override có tồn tại trong case hay không.**

---

## 9. Assisted Continuation

Nếu user chọn sai một bước nhưng correct-path information cần cho step tiếp theo, game không game-over.

Ví dụ user chọn sai transaction group:

```text
Wrong Transaction Selection
↓
Transaction node = unresolved / assisted
↓
Lose or reduce reasoning credit
↓
System provides Minimal Investigation Referral Packet
↓
Control Investigation continues using required Northstar data
```

Assisted packet chỉ chứa minimum data cần cho downstream step.

System không đánh dấu previous node là correct.

---

## 10. Investigation Chain được hỗ trợ bởi dữ liệu

**Financial Data**  
↓  
**DSRI / SGAI / TATA Screening**  
↓  
**SG&A**  
↓  
**Advisory Expense**  
↓  
**Northstar**  
↓  
**Surface Approval — read-only observation**  
↓  
**Policy + Personnel + Raw Audit cross-reference**  
↓  
**Factual Finding**  
↓  
**Control Interpretation**  
↓  
**Proxy Route Compliance**  
↓  
**Aggregate Approval Check**  
↓  
**Management Override Evidence Synthesis**  
↓  
**Responsibility Attribution**  
↓  
**Evidence-Based Conclusion + Financial Trace Map**

---

## 11. Visible Contribution

| Thành viên | Trách nhiệm Week 3 | Visible Contribution | Next Action |
|---|---|---|---|
| **Phạm Quỳnh Phương** | Integration, Week 1–3 consistency, revision control | Overview, consistency check, Evidence State/score separation review | Chốt Week 3 và handoff Week 4 |
| **Phạm Triệu Tiến Dũng** | Financial/transaction data | Financial input, SG&A, Advisory ledger, Northstar data/reconciliation | Verify totals, units and assisted packet minimum data |
| **Nguyễn Minh Hiền** | Rules, validation, evidence-state/fallback logic | Screening rules, approval/proxy rules, aggregation, Evidence State, Assisted Continuation | Formalize functions/scoring in Week 4 |
| **Tôn Khánh Ngọc** | Control/responsibility evidence and storyline | Surface summary, raw audit records, personnel/conflict evidence, legacy-system assumption | Finalize neutral evidence wording |
| **Đinh Thị Minh Khuê** | Unity/C# data binding | JSON→C# mapping, UI state, evidence workspace, assisted-state binding | Implement/test no-answer-leak |

---

## 12. Week 3 Completion Check

- [x] Operational Data và Problem Evidence được phân biệt.
- [x] Input Dictionary có validation/missing handling/owner.
- [x] Source Register phân biệt external source với simulated case rule.
- [x] Surface Approval là observation, không phải pseudo-choice.
- [x] Raw Audit Trail không chứa bypass/Management Override conclusion.
- [x] Factual Finding được tách khỏi Control Interpretation.
- [x] Major judgment yêu cầu supporting evidence để nhận full reasoning credit.
- [x] Evidence State được tách khỏi Performance Score.
- [x] Evidence-set matching có relevance categories.
- [x] Assisted Continuation được định nghĩa.
- [x] Legacy log / no real-time alert assumption được ghi rõ.
- [x] Lucas không phải co-approver.
- [x] Fraud Triangle là background only.
- [x] Không dùng forgery/fake signature.

---

## 13. Handoff to Week 4

Week 4 cần formalize/code/test:

1. DSRI/SGAI/TATA;
2. materiality/drill-down;
3. Northstar grouping;
4. Evidence State transitions;
5. evidence coverage/relevance scoring;
6. cross-source factual finding;
7. control interpretation;
8. Proxy Route compliance;
9. aggregate approval;
10. Management Override synthesis independent of score;
11. Assisted Continuation;
12. Responsibility Attribution;
13. Trace Map;
14. no-answer-leak tests;
15. Retry / Review logic.
