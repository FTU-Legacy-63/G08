# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 4 — GAMEPLAY MECHANICS & RULES

## 1. Cơ chế chung

6 tab là UI grouping của một investigation chain.

Mỗi decision point có thể gồm:

1. xem input/evidence;
2. calculation nếu cần;
3. judgment;
4. chọn supporting evidence ở major decisions;
5. Submit;
6. feedback + Performance Score update;
7. Evidence State update;
8. Trace Map update;
9. tiếp tục.

Không phải mọi màn hình đều cần judgment.

**Surface Approval là observation, không phải pseudo-choice.**

Judgment đúng nhưng không có supporting evidence không nhận full reasoning credit ở các major decisions.

---

## 2. Tab 1 — Financial Screening — 10

User:

- tính DSRI/SGAI/TATA;
- chọn SG&A;
- dùng calculation/rule làm support.

Expected:

```text
DSRI = 0.9333
SGAI = 1.12
TATA = 0.0273
Focus Area = SG&A
```

Nếu đúng:

```text
focus_area_state = confirmed
```

Nếu wrong:

```text
focus_area_state = unresolved
```

Game không game-over; limited/assisted continuation có thể mở để giữ chain.

---

## 3. Tab 2 — Account Drill-down — 10

User:

- tính Advisory change;
- chọn Advisory Expense;
- dựa trên breakdown + materiality reference.

Expected:

```text
Advisory increase = 250%
Absolute increase = 3.0
Subaccount = Advisory Expense
```

Correct:

```text
subaccount_state = confirmed
```

Wrong but progression needed:

```text
subaccount_state = assisted/unresolved
```

---

## 4. Tab 3 — Transaction Tracing — 10

User:

- tính Northstar total/share;
- identify related transaction group;
- select linkage evidence.

Expected:

```text
Northstar total = 2.6
Northstar share = 61.9%
Transaction group = AGR-NST-01
```

If correct:

```text
transaction_state = confirmed
```

If wrong:

```text
transaction_state = unresolved
↓
unlock REF-NORTHSTAR-01
↓
transaction_state = assisted
```

Assisted Referral Packet cung cấp minimum Northstar data để Tab 4 hoạt động.

System không giả vờ user đã tự xác định đúng Northstar.

Sau đó mở Surface Approval Summary.

---

## 5. Tab 4 — Control Investigation & Management Override — 30

### Stage 1 — Surface Approval Observation

User thấy:

```text
Department Head Approval = Completed
Finance Approval = Completed
Overall = Approved
```

Không có câu hỏi scored kiểu:

> “Hồ sơ có vẻ complete không?”

System chỉ ghi:

```text
surface_approval_state = reviewed
```

Next:

> Open Control Evidence Workspace.

---

### Stage 2 — Control Evidence Workspace

User có thể mở theo thứ tự khác nhau:

```text
[ Approval Policy ]
[ Personnel Directory ]
[ Raw Approval Audit Trail ]
```

#### Approval Policy

```text
0.5 < amount <= 1.0
requires Department Head + Finance Manager
```

#### Personnel Directory

Baseline facts:

```text
Victor = Department Head
Lucas = Finance Manager
David = CFO
Sophia = Internal Control Manager
```

#### Raw Approval Audit Trail

```text
Department Head step
Status = Completed
Recorded actor = Victor

Finance step
Required role = Finance Manager
Status = Completed
Completion type = Proxy Route
Recorded approver = —
Route initiated by = Victor

Supporting record
Reason code = —
Justification = —
Retrospective Finance review = —
```

Không hiển thị:

```text
Lucas bypassed
control bypass = true
Management Override = true
```

---

### Stage 3 — Fact Finding

Prompt:

> **Which factual statement is best supported by the available records?**

Expected:

> **Finance step is recorded as Completed, but no Finance Manager approver is recorded; the Proxy Route was initiated by Victor.**

State:

```text
factual_finding_state = confirmed
```

Fact finding không phải final Management Override conclusion.

---

### Stage 4 — Control Interpretation + Evidence

Prompt:

> **What control implication does this factual finding create?**

Expected:

> **Finance approval control may have been bypassed.**

User phải chọn supporting evidence.

Full reasoning credit requires:

```text
correct interpretation
+
required evidence coverage
+
acceptable relevance
```

Correct judgment without support:

```text
interpretation may proceed
but full reasoning credit = false
```

---

### Stage 5 — Proxy Route Compliance

User mở simulated Proxy Route policy.

Required:

```text
documented justification
valid reason code
retrospective Finance Manager review
```

Northstar:

```text
all absent
```

Expected:

> **Proxy Route use is non-compliant with simulated Aster policy.**

State:

```text
proxy_compliance_state = confirmed
```

---

### Stage 6 — Aggregate Approval Investigation

User groups:

```text
0.9 + 0.9 + 0.8 = 2.6
```

Linkage:

```text
same agreement
same economic purpose
vendor match
initiator match as support
```

Policy:

```text
2.6 > 1.0
→ CFO + Board
```

Expected:

> **Northstar should have been escalated to CFO + Board at aggregate economic-transaction level.**

State:

```text
aggregate_approval_state = confirmed
```

---

### Stage 7 — Management Override Assessment

User chooses:

```text
Supported
or
Not Supported
```

and supporting evidence.

System does **not** use score threshold.

Conceptual synthesis:

```text
finance_control_interpretation = confirmed
AND
proxy_compliance_state = confirmed
AND
aggregate_approval_state = confirmed
AND
direct_management_connection = confirmed
→ Management Override Supported
```

State:

```text
override_assessment_state = confirmed
```

---

## 6. Tab 5 — Responsibility Attribution — 25

Detailed personnel/responsibility evidence unlocks here.

### Victor

- initiator;
- agreement signatory;
- Department Head actor;
- Proxy Route initiator;
- direct transaction/control connection;
- conflict evidence.

### Lucas

- Finance Manager;
- required role under tranche-level policy;
- no recorded Northstar approval event;
- no Proxy Route initiation evidence;
- monitoring responsibility is separate and requires separate evidence.

### David

- CFO;
- relevant because aggregate >1.0 requires CFO + Board;
- no direct Northstar override-action evidence.

### Sophia

- Internal Control Manager;
- monitoring/control context;
- no direct Northstar override-action evidence.

User chooses:

```text
primary responsible individual
+
supporting evidence
```

Expected:

```text
Victor
```

State:

```text
responsibility_state = confirmed
```

---

## 7. Tab 6 — Final Review — 15

Final Review reads:

- Evidence State;
- user selected evidence;
- assisted/unresolved nodes;
- Performance Score.

Correct logical chain:

```text
SGAI signal
→ SG&A
→ Advisory Expense
→ Northstar
→ Surface Approval reviewed
→ Policy + Personnel + Raw Audit cross-reference
→ Factual Finding
→ Possible Finance approval bypass
→ Proxy Route non-compliant
→ Aggregate 2.6 requires CFO + Board
→ Management Override Supported
→ Victor Primary Responsible
```

If earlier node = assisted, Final Review shows it explicitly.

Score/ending remains secondary.

---

## 8. Unlock / Assisted Continuation

| Source / Evidence | Normal unlock | Assisted path |
|---|---|---|
| SG&A Breakdown | SG&A confirmed | limited/guided SG&A continuation; node not confirmed |
| Advisory Ledger | Advisory confirmed | limited/guided Advisory continuation; node not confirmed |
| Surface Approval | Northstar confirmed | `REF-NORTHSTAR-01`; transaction node becomes assisted |
| Control Evidence Workspace | Surface Approval reviewed | same; Surface is never scored |
| Responsibility Evidence | Layer 2 completed | baseline personnel may remain visible; detailed responsibility evidence unlocks when Override stage completed |
| Final Review | Tab 5 completed | shows confirmed + assisted + unresolved states |

Wrong reasoning affects:

- Performance Score;
- Evidence State;
- feedback;
- confidence/completeness of Trace Map.

Wrong reasoning does not create game-over.

---

## 9. Evidence Selection Mechanics

Evidence classes:

```text
required_relevant
additional_relevant
irrelevant
contradictory
```

User cannot gain full evidence score by selecting all cards.

At a major decision, system evaluates:

```text
Coverage
+
Relevance
+
Contradiction penalty
```

Detailed formula is in Scoring document.

---

## 10. Financial Trace Map

Happy path:

**SGAI 1.12 → SG&A → Advisory +250% → Northstar 2.6 / 61.9% → Surface Approval Reviewed → Cross-Source Fact Finding → Possible Finance Approval Bypass → Proxy Route Non-Compliant → Aggregate 2.6 Requires CFO + Board → Management Override Supported → Victor Primary Responsible → Final Evidence Set**

Example assisted path:

```text
Northstar Transaction Selection
[ASSISTED]
↓
REF-NORTHSTAR-01
↓
Control Investigation continues
```

Trace Map không tự đổi `assisted` thành `confirmed`.
