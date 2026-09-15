# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 5 — FEATURE SCOPE

## 1. Mục tiêu và liên kết với Weeks 1–4

Week 5 không xác định lại problem, user task, input hoặc financial/investigation logic.

Chuỗi kế thừa:

**Week 1 — Problem Direction:** Information Integration  
↓  
**Week 2 — Product Direction:** Financial Learning Game with evidence-supported reasoning  
↓  
**Week 3 — Input Readiness:** financial/transaction data + raw control evidence + Evidence State + Assisted Continuation  
↓  
**Week 4 — Formalized Logic:** screening → tracing → cross-source fact finding → control interpretation → synthesis → responsibility  
↓  
**Week 5 — User Experience:** biến logic trên thành feature/interface mà không tạo pseudo-choice, answer leakage hoặc score-driven conclusion

Câu hỏi trung tâm:

> **Người dùng sẽ tương tác với evidence-integration logic như thế nào để đi từ financial data đến Evidence-Based Management Override and Responsibility Conclusion?**

---

## 2. User Goal kế thừa từ Week 1–2

Người chơi phải:

1. nhận diện financial area cần điều tra;
2. drill-down tới account đáng chú ý;
3. trace xuống Northstar;
4. quan sát Surface Approval mà không nhầm status với actual process;
5. cross-reference Policy + Personnel + Raw Audit;
6. tạo factual finding;
7. tạo evidence-supported control interpretation;
8. kiểm tra Proxy Route compliance và aggregate approval;
9. đánh giá Management Override từ confirmed Evidence States;
10. xác định primary responsible individual bằng comparative evidence;
11. tổng hợp final evidence chain.

Hai final decisions vẫn là:

> **Does the available evidence support Management Override?**

và

> **Who bears primary responsibility, and which evidence supports that attribution?**

---

## 3. Main Feature

### Main Feature: Evidence-Based Investigation Flow

6-step UI:

```text
Tab 1 — Financial Screening
↓
Tab 2 — Account Drill-down
↓
Tab 3 — Transaction Tracing
↓
Tab 4 — Control Investigation & Management Override
↓
Tab 5 — Responsibility Attribution
↓
Tab 6 — Final Evidence Integration
```

Within Tab 4:

```text
Surface Observation
↓
Control Evidence Workspace
↓
Fact Finding
↓
Control Interpretation
↓
Proxy Compliance
↓
Aggregate Approval
↓
Management Override Synthesis
```

Feature trực tiếp tạo main output:

> **Kết luận về Management Override và trách nhiệm dựa trên bằng chứng**

---

## 4. Supporting Features

### 4.1 Progressive Evidence Viewer — Core

Hiển thị evidence theo investigation state:

Financial Overview  
SG&A Breakdown  
Advisory Ledger  
Surface Approval Summary  
Approval Policy  
Baseline Personnel Directory  
Raw Approval Audit Trail  
Proxy Route Policy  
Agreement/linkage evidence  
Responsibility/conflict evidence

Evidence chưa unlock không hiển thị đầy đủ.

Conflict/detailed responsibility evidence không hiện ở Control Investigation.

---

### 4.2 Control Evidence Workspace — Core

Tab 4 phải cho user cross-reference ít nhất:

```text
Approval Policy
Personnel Directory
Raw Approval Audit Trail
```

User có thể mở theo thứ tự khác nhau.

Không một evidence card nào tự nói final conclusion.

---

### 4.3 Calculation, Judgment & Evidence Panel — Core

Decision screen có thể gồm:

- calculation;
- judgment;
- supporting-evidence selection;
- Submit;
- feedback.

Major judgments require supporting evidence for full reasoning credit.

Surface Approval không dùng panel này vì nó chỉ là observation.

---

### 4.4 Evidence Quality Feedback — Core

System phản hồi:

- required evidence coverage;
- evidence relevance;
- irrelevant evidence selected;
- contradictory evidence selected;
- missing evidence groups.

Không chỉ phản hồi “đúng/sai”.

---

### 4.5 Financial Trace Map — Core Supporting

Trace Map ghi:

financial signal;  
focus area;  
subaccount;  
transaction group;  
Surface Approval reviewed;  
factual finding;  
control interpretation;  
Proxy compliance;  
aggregate approval;  
Management Override;  
responsibility;  
final evidence set.

Trace node có state:

```text
confirmed
unresolved
assisted
contradicted
```

---

### 4.6 Explainability Feedback — Core

Sau decision quan trọng, feedback trả lời:

1. What happened?
2. Why?
3. Which evidence/rule supports it?
4. What is the limitation?
5. What is the next action?

---

### 4.7 Investigation-State Tracker — Core Supporting

Logical progress:

```text
Step 1/6 Financial Screening
Step 2/6 Account Drill-down
Step 3/6 Transaction Tracing
Step 4/6 Control Investigation
Step 5/6 Responsibility Attribution
Step 6/6 Final Review
```

Tracker có thể hiển thị state như:

```text
Confirmed
Assisted
Unresolved
```

---

### 4.8 Assisted Continuation — Core

Nếu wrong choice khiến downstream data unavailable, system có thể cung cấp minimum assisted information.

Specific Week 3 example:

```text
Wrong Northstar selection
→ REF-NORTHSTAR-01
→ Transaction node = Assisted
→ Tab 4 continues
```

Assisted state được lưu và hiển thị ở Final Review.

---

### 4.9 Retry / Review Mode — Supporting

Fixed-case MVP không claim high replayability.

Sau khi hoàn thành, user có thể:

- review unresolved/assisted nodes;
- xem evidence missed;
- retry the fixed case.

Multi-case/randomized replay is future work.

---

### 4.10 Rule & Assumption Reference — Core Content, Optional Dedicated Panel

Rules visible when needed:

- DSRI/SGAI/TATA case-specific rules;
- materiality reference;
- approval policy;
- Special Proxy Completion Route conditions;
- aggregation logic.

A dedicated panel is optional.

---

## 5. Core vs Optional

| Feature | Nếu bỏ đi | Classification |
|---|---|---|
| 6-step Evidence-Based Investigation Flow | Không tạo main output | **Core** |
| Prepared Case Data View | Không có input | **Core** |
| Progressive Evidence Viewer | Không thể cross-reference | **Core** |
| Control Evidence Workspace | Tab 4 mất Information Integration | **Core** |
| Judgment + Supporting Evidence | Guessing exploit tăng mạnh | **Core** |
| Evidence Quality Feedback | Không phản hồi chất lượng evidence | **Core** |
| Management Override synthesis | Không đánh giá final decision 1 | **Core** |
| Responsibility Attribution | Không đánh giá final decision 2 | **Core** |
| Explainability Feedback | Mất learning value | **Core** |
| Assisted Continuation | Wrong path có thể làm đứt game | **Core** |
| Financial Trace Map | Reasoning path khó quan sát | **Core supporting** |
| Progress Tracker | Flow khó hiểu | **Supporting** |
| Retry / Review Mode | Reflection yếu hơn | **Supporting** |
| Dedicated Rule Panel | Rules có thể đặt inline | **Optional UI form** |
| Hint economy | Không ảnh hưởng core | **Optional** |
| Animation/cutscene | Không ảnh hưởng core | **Optional** |
| Drag/drop evidence board | Checkbox/cards đủ | **Optional** |
| Export | Không ảnh hưởng core | **Optional** |
| Leaderboard | Không ảnh hưởng core | **Optional** |
| Randomized cases | Không cần cho MVP | **Future extension** |

Principle:

> **Freeze optional features if the core reasoning flow is unstable.**

---

## 6. Feature Mapping theo từng Tab

| Tab | Core user action | Evidence / information | Feature output |
|---|---|---|---|
| 1 — Financial Screening | Calculate + select focus + support | Financial Overview + rules | SG&A state |
| 2 — Account Drill-down | Calculate/read movement + select account | SG&A Breakdown + materiality | Advisory state |
| 3 — Transaction Tracing | Calculate/group/select linkage | Advisory Ledger | Northstar confirmed or assisted |
| 4 — Control Investigation | Cross-reference → fact → interpretation → compliance → escalation → synthesis | Surface + Policy + Personnel + Raw Audit + Proxy Policy + linkage | Management Override state |
| 5 — Responsibility Attribution | Compare people + evidence | Detailed personnel/involvement/conflict | Primary responsibility state |
| 6 — Final Review | Integrate evidence and review state quality | Evidence State + Trace Map | Final conclusion + reflection |

---

## 7. Visible Contribution & Ownership

| Thành viên | Trách nhiệm Week 5 | Visible Contribution | Next Build Priority |
|---|---|---|---|
| **Phạm Quỳnh Phương** | Integration, Weeks 1–5 consistency, user-flow QA | Feature-scope integration, alternative/error-path review, revision control | End-to-end QA |
| **Phạm Triệu Tiến Dũng** | Financial labels/calculation verification | Tab 1–3 numbers/units/explanation | Verify UI vs C# |
| **Nguyễn Minh Hiền** | Interaction logic, Evidence State, fallback, scoring | State transitions, evidence matching, assisted continuation | Connect rules to UI |
| **Tôn Khánh Ngọc** | Evidence presentation, responsibility comparison, feedback | Neutral evidence cards, person comparison, explainability | Prevent answer leakage |
| **Đinh Thị Minh Khuê** | Unity implementation/integration | Navigation, binding, evidence panels, tracker, Trace Map | Produce working flow |

---

## 8. Revision Log

| Old logic | Final logic | Reason |
|---|---|---|
| Surface Approval had a scored “appears complete?” choice | Surface Approval = read-only observation | Remove pseudo-choice |
| Audit Trail directly revealed bypass | Raw Audit + Policy + Personnel → Fact Finding → Interpretation | Preserve Information Integration |
| `management_override_proxy` player-facing | neutral `Proxy Route` | Remove answer leakage |
| Judgment alone was main gate | major judgment + supporting evidence | Reduce guessing exploit |
| Minimum evidence IDs could be satisfied by select-all | coverage + relevance + contradiction handling | Prevent evidence exploit |
| Wrong Northstar could block downstream data | Assisted Referral Packet | Preserve learning chain |
| Score and conclusion loosely coupled | Evidence State determines case conclusion; score = performance | Preserve synthesis principle |
| Lucas = simply bypassed | required role + no recorded approval; monitoring separate | More precise governance logic |
| David contextual only | David = CFO, relevant to escalation | Align approval policy |
| Sophia possible control failure | monitoring context only unless evidence supports failure | Avoid unsupported attribution |
| Replay | Retry / Review for fixed MVP | Avoid false replayability claim |
| Log implies flag | legacy system logs without full real-time compliance detection | Fix storyline causality |

---

## 9. Feature-Scope Checklist

- [x] Main feature directly creates main output.
- [x] Surface Observation is not a pseudo-choice.
- [x] Raw Audit does not reveal conclusion.
- [x] Cross-source Evidence Workspace exists in design.
- [x] Major judgments require supporting evidence for full credit.
- [x] Evidence quality handles select-all behavior.
- [x] Assisted Continuation prevents broken downstream flow.
- [x] Evidence State is separate from Performance Score.
- [x] Retry / Review replaces high replayability claim.
- [x] David/Sophia/Lucas logic matches Week 3.
- [x] No new financial theory added.
- [ ] Working Unity interface evidence must be updated from actual build.
