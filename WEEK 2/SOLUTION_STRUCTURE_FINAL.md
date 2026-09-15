# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 2 — SOLUTION STRUCTURE

## 1. Mục đích của Solution Structure

Tài liệu này chuyển Product Direction trong `PROJECT_PROPOSAL.md` thành một cấu trúc giải pháp có thể bắt đầu xây dựng.

Câu hỏi trung tâm:

> **Sản phẩm cần nhận input gì, xử lý theo logic nào và tạo output gì để user đánh giá Management Override và responsibility bằng evidence mà không bị lộ answer, không thể chỉ đoán judgment và vẫn có thể tiếp tục learning flow khi mắc lỗi?**

---

## 2. User–Input–Process–Output–User

### User

Sinh viên Tài chính, Kế toán, Ngân hàng hoặc Kinh doanh có kiến thức tài chính cơ bản và đã được tiếp cận COSO và Fraud Triangle.

Fraud Triangle chỉ là background risk framework.

### Input

Đầu vào gồm:

1. financial data;
2. screening indicators và interpretation rules;
3. account-level data;
4. transaction data;
5. surface approval/control status;
6. approval/control requirements;
7. role/authority information;
8. raw approval/audit records;
9. responsibility/conflict evidence ở stage phù hợp;
10. materiality reference.

### Process

**Screen → Drill-down → Trace → Observe → Cross-reference → Fact Finding → Interpret → Synthesize → Attribute → Integrate**

### Output

1. **Evidence-Based Management Override and Responsibility Conclusion**
2. **Financial Trace Map**

### User Action

User phải có khả năng giải thích:

1. why Management Override is supported or not supported;
2. raw facts nào dẫn tới control interpretation;
3. why one person is primary responsible;
4. which evidence supports each conclusion.

---

## 3. Target Product Structure

**User**  
↓  
**Financial Information**  
↓  
**Financial Screening**  
↓  
**Area to Investigate**  
↓  
**Account Drill-down**  
↓  
**Transaction Tracing**  
↓  
**Northstar**  
↓  
**Surface Approval / Control Observation**  
↓  
**Cross-Source Control Investigation**  
↓  
**Factual Finding**  
↓  
**Control Interpretation**  
↓  
**Management Override Assessment**  
↓  
**Responsibility Attribution**  
↓  
**Evidence-Based Conclusion**

Surface Approval là observation layer, không phải mandatory scored choice.

---

## 4. Backward Mapping from Main Output

| Required result | Logic | Input | Component |
|---|---|---|---|
| Area to investigate | Interpret screening indicators | Financial data + DSRI/SGAI/TATA rules | Financial Screening |
| Account to investigate | Drill-down + significance review | SG&A breakdown | Account Drill-down |
| Northstar | Transaction grouping/tracing | Advisory transactions | Transaction Tracing |
| Initial control context | Observe status without interpreting actor/process | Surface Approval Summary | Control Observation |
| Factual control finding | Cross-reference required role + role holder + raw record | Policy + Personnel + Raw Audit | Control Evidence Workspace |
| Control interpretation | Explain meaning of confirmed fact | Factual finding + control rule | Control Interpretation |
| Management Override | Synthesize multiple control findings | Confirmed evidence states | Management Override Assessment |
| Primary responsible person | Compare authority/direct action/transaction link/conflict | Responsibility evidence | Responsibility Attribution |
| Final conclusion | Integrate confirmed nodes | All prior states | Final Review |
| Trace Map | Record signal, evidence, fact, interpretation, conclusion | State history | Trace Map |

Beneish không trực tiếp tạo ra Northstar.

Một raw approval record cũng không trực tiếp tạo ra Management Override.

---

## 5. Layer 1 — Financial Screening and Transaction Tracing

### 5.1 Financial Screening

Selected indicators:

**DSRI**  
**SGAI**  
**TATA**

Ba indicators được dùng độc lập cho screening, không tạo reduced M-Score.

Kết quả chỉ trả lời:

> **Where should the investigation go next?**

### 5.2 Area Selection

Case direction dẫn tới SG&A.

SGAI không chứng minh fraud trong SG&A.

### 5.3 Account Drill-down

SG&A được phân rã thành Salary, Marketing, Legal, Advisory Expense và Other.

Advisory Expense được xác định là account cần trace.

### 5.4 Transaction Tracing

Advisory transactions được review để xác định Northstar.

Layer 1:

**Financial Data → DSRI/SGAI/TATA → SG&A → Advisory Expense → Northstar**

---

## 6. Layer 2 — Control Investigation

### 6.1 Surface Control Observation

User có thể xem:

Department Head: Completed  
Finance: Completed  
Overall: Approved

Đây là **read-only observation**.

Không hỏi một pseudo-choice kiểu “hồ sơ có vẻ complete không?” như một scored gate.

Mục đích chỉ là tạo contrast giữa surface status và actual process.

### 6.2 Control Evidence Workspace

User được truy cập một nhóm nhỏ evidence sources, ví dụ:

**Approval Policy**  
**Personnel Directory**  
**Raw Approval Audit Trail**

User có thể mở theo thứ tự khác nhau.

Không evidence source nào được ghi sẵn:

`Finance control was bypassed`

hoặc

`Management Override occurred`.

### 6.3 Fact Finding

User phải trả lời:

> **What do the records directly support?**

Fact finding chỉ mô tả direct evidence.

### 6.4 Evidence-Supported Interpretation

User không chỉ chọn một judgment.

Ở major control decision, user phải chọn:

**Judgment + Supporting Evidence**

Ví dụ:

```text
Control implication:
Finance approval control may have been bypassed.

Support:
✓ Finance Manager is required
✓ No Finance Manager approver is recorded
✓ Alternative route was initiated by another actor
```

Nếu judgment đúng nhưng evidence support yếu hoặc sai, user có thể tiếp tục nhưng không nhận full reasoning credit.

### 6.5 Route / Policy Compliance

Nếu case dùng special approval route, user phải so actual route conditions với simulated Aster policy.

Specific route conditions sẽ được formalize ở Week 3 và phải được label rõ là company-specific simulated rule.

### 6.6 Aggregate Approval / Escalation

Related transactions được aggregate dựa trên documented linkage, không chỉ vì cùng vendor.

Aggregate amount được đối chiếu với approval threshold.

### 6.7 Management Override Synthesis

Management Override conclusion không được tính bằng tổng score.

System duy trì một **Evidence State** riêng.

Ví dụ logic khái niệm:

```text
Confirmed Control Circumvention
AND
Non-Compliant Route Use
AND
Escalation Issue
AND
Direct Management Connection
→ Management Override Supported
```

Gameplay Score chỉ đánh giá user performance.

---

## 7. Layer 3 — Responsibility Attribution

Responsibility dựa trên:

**authority + direct action + transaction connection + control-circumvention evidence + conflict + corroboration**

Không dùng:

`required role = responsible`

hoặc

`person appears in file = responsible`.

Cần phân biệt:

**Required Role**  
**Actual Actor**  
**Monitoring Role**  
**Primary Responsible Individual**

Monitoring responsibility nếu có phải có evidence riêng.

Fraud Triangle không được dùng để chọn responsible person.

---

## 8. MVP

| Câu hỏi | Câu trả lời |
|---|---|
| Core user need | Đi từ signal đến evidence-based Management Override / responsibility conclusion |
| Core input | Financial data + account/transaction data + một nhóm nhỏ control/role/raw-record evidence |
| Core logic | Screen → Drill-down → Trace → Cross-reference → Fact → Interpretation → Synthesis → Attribution |
| Core output | Management Override + Primary Responsible Individual + Trace Map |
| Must include | Một complete reasoning chain |
| Not included | Full Beneish, full COSO/SOX, Fraud Triangle scoring, AI, many cases |

---

## 9. MVP User Flow

### Step 1 — Case Introduction

User nhận Aster Holdings context, financial data và materiality reference.

### Step 2 — Financial Screening

User tính/diễn giải selected indicators.

### Step 3 — Area Selection

User chọn area và supporting reasoning.

### Step 4 — Account Drill-down

User xác định Advisory Expense.

### Step 5 — Transaction Tracing

User xác định Northstar.

### Step 6 — Surface Control Observation

Read-only screen. Không score.

### Step 7 — Control Evidence Workspace

User cross-reference Policy + Personnel + Raw Audit.

### Step 8 — Factual Finding

User xác định direct facts.

### Step 9 — Control Interpretation

User chọn judgment + supporting evidence.

### Step 10 — Compliance / Escalation Checks

User đối chiếu relevant simulated rules.

### Step 11 — Management Override Assessment

User đưa ra assessment dựa trên confirmed evidence set.

### Step 12 — Responsibility Attribution

User so sánh people evidence.

### Step 13 — Final Review

System hiển thị final conclusion, evidence set, Trace Map và explainability feedback.

---

## 10. Anti-Guess Principle

Một single-select đúng không đủ để nhận full credit ở major decision.

Full reasoning credit cần ít nhất:

**Correct Judgment + Relevant Supporting Evidence**

Detailed scoring algorithm được formalize sau, nhưng nguyên tắc Week 2 là:

> **Guessing the right answer must not be equivalent to building the right evidence chain.**

---

## 11. Evidence-Set Matching Principle

Selecting all evidence không được bảo đảm full score.

Detailed matching được thiết kế ở Week 4, nhưng Week 2 chốt ba categories:

**Required Relevant Evidence** — cần cho conclusion.  
**Additional Relevant Evidence** — có thể hỗ trợ nhưng không bắt buộc.  
**Irrelevant / Contradictory Evidence** — giảm evidence-quality score.

Hệ thống sau này phải đánh giá cả **coverage** và **relevance**, thay vì chỉ kiểm tra user có chọn đủ minimum IDs hay không.

---

## 12. Assisted Fallback

Sai judgment không tạo game-over.

Tuy nhiên, nếu wrong choice ở một bước làm mất data cần thiết cho bước sau, system dùng **Assisted Continuation**.

Ví dụ:

```text
Wrong Transaction Selection
↓
Lose / reduce reasoning credit
↓
Trace Node = Unresolved or Assisted
↓
System provides Minimal Investigation Referral Packet
↓
Next control stage can continue
```

Assisted packet chỉ chứa minimum data cần cho next stage.

System không đánh dấu previous node là correct.

---

## 13. Evidence State vs Performance Score

Hai hệ thống tách biệt:

### Evidence State

Dùng để xác định case conclusion:

```text
unreviewed
reviewed
confirmed
unresolved
assisted
contradicted
```

### Performance Score

Dùng để chấm user:

calculation accuracy  
judgment quality  
evidence coverage  
evidence relevance  
reasoning consistency

**Score không quyết định Management Override có tồn tại trong case hay không.**

---

## 14. Storyline / System Assumption

Aster Holdings sử dụng một fictional legacy approval environment có khả năng **record workflow events for retrospective review** nhưng không thực hiện full real-time compliance testing hoặc automatic policy-exception alerting.

Vì vậy:

> **System can log an event without automatically detecting or escalating the control problem.**

Succession review tạo trigger để historical financial/control records được đối chiếu lại.

Assumption này phải được formalize ở Week 3 như simulated case assumption, không được trình bày như một claim về hệ thống thực tế hoặc professional standard.

---

## 15. Retry / Review Mode

MVP có một fixed case và một intended evidence chain.

Do đó sản phẩm không claim high replayability.

Sau lần chơi đầu, chức năng phù hợp là **Retry / Review Mode**:

user có thể xem lại unresolved nodes, evidence-selection errors và reasoning gaps.

Multiple cases, randomization hoặc branching scenario generation là future extension, không nằm trong MVP.

---

## 16. In Scope

1. One Aster Holdings case.
2. Two-period financial data.
3. DSRI/SGAI/TATA.
4. SG&A drill-down.
5. Advisory Expense.
6. Northstar transaction group.
7. Surface control observation.
8. Small control evidence workspace.
9. Fact Finding.
10. Evidence-supported Control Interpretation.
11. Compliance/escalation checks.
12. Management Override Assessment.
13. Responsibility Attribution.
14. Trace Map.
15. Assisted fallback.
16. Retry / Review Mode.

---

## 17. Out of Scope

Full Beneish M-Score.  
Multiple independent investigation branches.  
Full COSO assessment.  
SOX 404 scoring.  
Fraud Triangle scoring.  
Legal fraud determination.  
PV loss analysis.  
Real-time data.  
External API.  
AI model.  
Complex backend/database.  
Randomized multi-case replay system.  
Automatic player-facing `culprit` or `Management Override` flags.

---

## 18. Initial Technical Route

| Component | Initial direction |
|---|---|
| Interface | Unity |
| Language | C# |
| Development environment | Visual Studio Code |
| Data | Prepared local data |
| Logic | Rule-based |
| Backend | Not required for MVP |
| External API | Not required for MVP |

Week 2 chưa khóa specific data format. Week 3 sẽ formalize actual input structure.

---

## 19. Fallback

Có thể giảm số indicators hiển thị, background transactions, evidence cards, visual complexity và optional interactions.

Không được cắt:

1. financial signal;
2. drill-down;
3. transaction tracing;
4. cross-source control evidence;
5. factual finding;
6. control interpretation;
7. Management Override Assessment;
8. Responsibility Attribution;
9. final conclusion.

Nguyên tắc:

> **Reduce quantity, not reasoning.**

---

## 20. Responsibility Map

| Owner | Responsibility | Expected output | Next action |
|---|---|---|---|
| Phạm Quỳnh Phương | Product integration, scope control, cross-week consistency, end-to-end QA | Project Proposal, Solution Structure, revision decisions | Verify Week 2→3 handoff |
| Phạm Triệu Tiến Dũng | Financial content/input | Screening data, SG&A, Advisory, transaction inputs | Verify formulas/units/sample data |
| Nguyễn Minh Hiền | Investigation logic, state transitions, fallback, evidence-selection logic | Decision rules, Evidence State, assisted continuation | Formalize rules in Week 3–4 |
| Tôn Khánh Ngọc | Storyline/evidence/output | Evidence presentation, responsibility context, feedback | Formalize storyline/system assumptions |
| Đinh Thị Minh Khuê | UI/technical integration | Unity prototype, state/UI binding | Implement meaningful interactions without answer leakage |

---

## 21. Input cần kiểm tra ở Week 3

Week 3 cần phân biệt:

**source-based input**  
**simulated assumption**  
**sample data**  
**gameplay rule**

Cần formalize:

1. DSRI/SGAI/TATA formulas;
2. case-specific screening rules;
3. materiality reference;
4. Aster financial data;
5. SG&A / Advisory data;
6. Northstar linkage;
7. Surface Approval;
8. approval policy;
9. Personnel Directory;
10. Raw Audit Trail;
11. any special route policy;
12. aggregation rule;
13. responsibility/conflict evidence;
14. Evidence State;
15. assisted fallback data;
16. no-answer-leak rule;
17. legacy logging / no real-time alert assumption.

---

## 22. Open Questions for Week 3–4

1. What raw fields are needed without revealing conclusion?
2. Which evidence is required, additional relevant or irrelevant?
3. How should evidence coverage and relevance be scored?
4. Which wrong decisions trigger assisted continuation?
5. What minimum data belongs in each assisted packet?
6. How are `unresolved`, `assisted` and `confirmed` states represented?
7. What exact evidence states are required for Management Override synthesis?
8. What feedback is shown before vs after user interpretation?
9. How is Retry / Review presented without claiming replayability?
10. How will Unity verify that a player cannot receive full reasoning credit by simply guessing single-select answers?

---

## 23. Week 2 Completion Check

[x] Problem links directly to Week 1.  
[x] Information Integration remains the core problem.  
[x] Surface observation is separated from meaningful judgment.  
[x] Control Investigation requires cross-source evidence.  
[x] Fact Finding is separated from Control Interpretation.  
[x] Major judgment requires supporting evidence for full credit.  
[x] No-answer-leak principle is explicit.  
[x] Evidence State is separated from Performance Score.  
[x] Assisted fallback principle is explicit.  
[x] Evidence-set matching principle prevents “select all” exploit.  
[x] Fixed-case replay is reframed as Retry / Review.  
[x] Legacy logging vs automatic alert assumption is identified for Week 3 formalization.  
[x] Fraud Triangle remains background only.  
[x] MVP preserves the full reasoning chain.

---

## 24. Handoff to Week 3

Week 2 đã trả lời:

> **Product cần tạo output gì và solution structure nào có thể support Information Integration without answer leakage, pseudo-choice or score-driven conclusions?**

Week 3 sẽ trả lời:

> **Những exact inputs, raw evidence fields, simulated assumptions, states và sample data nào cần có để structure này hoạt động trong một case cụ thể?**
