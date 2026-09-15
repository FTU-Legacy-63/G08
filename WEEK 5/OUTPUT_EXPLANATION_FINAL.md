# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 5 — INPUT DESIGN, OUTPUT EXPLANATION & INTERFACE CLARITY

## 1. Nguyên tắc

Week 3 xác định input/data/evidence/state.

Week 4 xác định logic/scoring/state transition.

Week 5 quyết định:

- user nhìn thấy input/evidence thế nào;
- user phải nhập/chọn gì;
- feedback xuất hiện lúc nào;
- output hierarchy;
- limitation;
- next action.

Prepared case data is read-only.

---

# 2. Input Design

## 2.1 Read-only Case Data

| Data | Label hiển thị | Unit | User action |
|---|---|---|---|
| Revenue | Doanh thu | triệu USD | Đọc |
| Receivables | Khoản phải thu | triệu USD | Đọc |
| SG&A | Chi phí SG&A | triệu USD | Đọc |
| Income from Continuing Operations | Lợi nhuận từ hoạt động liên tục | triệu USD | Đọc |
| CFO | Dòng tiền từ hoạt động kinh doanh | triệu USD | Đọc |
| Total Assets | Tổng tài sản | triệu USD | Đọc |
| Materiality reference | Mức tham chiếu trọng yếu của case | triệu USD | Đọc |
| Approval policy | Chính sách phê duyệt nội bộ | value / role | Đọc |

Không hiển thị technical JSON field names.

---

## 2.2 User-Entered Calculation / Judgment Inputs

| Tab | Input trên UI | Type | Example | Required |
|---|---|---|---|---|
| 1 | DSRI | number | 0.9333 | Yes |
| 1 | SGAI | number | 1.12 | Yes |
| 1 | TATA | number | 0.0273 | Yes |
| 1 | Focus Area | single select | SG&A | Yes |
| 2 | Advisory change | number | 250 | Yes |
| 2 | Subaccount | single select | Advisory Expense | Yes |
| 3 | Northstar total | number | 2.6 | Yes |
| 3 | Northstar share | number | 61.9 | Yes |
| 3 | Transaction group | single select | AGR-NST-01 | Yes |
| 3 | Linkage evidence | multi-select | agreement/purpose | Yes for full credit |
| 4 | Surface Approval | none — read-only | — | No |
| 4 | Factual Finding | single select / structured choice | Finance step Completed, no recorded Finance approver | Yes |
| 4 | Control Interpretation | single select | Possible Finance approval bypass | Yes |
| 4 | Supporting evidence | multi-select | Policy + Personnel + Raw Audit | Yes |
| 4 | Proxy Route compliance | single select | Non-Compliant | Yes |
| 4 | Aggregate approval requirement | single select | CFO + Board | Yes |
| 4 | Management Override assessment | single select | Supported | Yes |
| 4 | Override evidence | multi-select | relevant evidence groups | Yes |
| 5 | Primary responsible person | person cards / radio | Victor | Yes |
| 5 | Responsibility evidence | multi-select | direct action + linkage + conflict | Yes |
| 6 | Final evidence set | multi-select | integrated chain | Yes |

---

# 3. Output Design theo từng Tab

## 3.1 Tab 1 — Financial Screening

### Main result

> **Khu vực ưu tiên: SG&A**

### Metrics

```text
DSRI = 0.9333
SGAI = 1.12
TATA = 0.0273
```

### Explanation

> SG&A được ưu tiên vì SGAI = 1.12 vượt case-specific review rule 1.10. DSRI và TATA không tạo hướng chính trong sample.

### Limitation

> Screening does not prove fraud or Management Override.

### Next

> **Open SG&A Breakdown.**

---

## 3.2 Tab 2 — Account Drill-down

### Main result

> **Advisory Expense là khoản mục cần truy vết.**

```text
1.2 → 4.2
absolute increase = 3.0
percentage change = 250%
materiality reference = 1.1
```

### Limitation

> Large movement justifies tracing; it does not prove control violation.

### Next

> **Open Advisory Expense Ledger.**

---

## 3.3 Tab 3 — Transaction Tracing

### Main result

> **Northstar là transaction group cần kiểm tra.**

```text
total = 2.6
share = 61.9%
```

Linkage:

- same vendor;
- same agreement;
- same economic purpose.

### Limitation

> Large share does not prove a control problem.

### If assisted

If user failed to identify Northstar:

> **Investigation Referral: Northstar has been referred for further control review. Your transaction-identification node remains Assisted.**

### Next

> **Review Surface Approval Summary.**

---

## 3.4 Tab 4 — Surface Approval Observation

### Display

```text
Department Head Approval: Completed
Finance Approval: Completed
Overall Status: Approved
```

### UI behavior

No scored judgment.

The system records:

```text
Surface Approval = Reviewed
```

### Warning

> **Completed status does not identify the actual actor or prove that the control operated as designed.**

### Next

> **Open the Control Evidence Workspace.**

---

## 3.5 Tab 4 — Control Evidence Workspace

Display three source cards:

```text
[ Approval Policy ]
[ Personnel Directory ]
[ Raw Approval Audit Trail ]
```

### Approval Policy

Shows required approval roles.

### Personnel Directory

Shows baseline role/authority only.

### Raw Audit Trail

```text
Department Head step
Status: Completed
Recorded actor: Victor

Finance step
Required role: Finance Manager
Status: Completed
Completion type: Proxy Route
Recorded approver: —
Route initiated by: Victor

Supporting record
Reason code: —
Documented justification: —
Retrospective Finance review: —
```

Do **not** display:

```text
Lucas was bypassed
Finance control was bypassed
Management Override
culprit
```

at this point.

---

## 3.6 Tab 4 — Fact Finding

Prompt:

> **Which factual statement is best supported by the available records?**

After Submit, expected feedback:

> **Finance step is recorded as Completed, but no Finance Manager approver is recorded; the Proxy Route was initiated by Victor.**

### Limitation

> This is a factual finding. It is not yet the final Management Override assessment.

---

## 3.7 Tab 4 — Control Interpretation

Prompt:

> **What control implication does this factual finding create?**

User chooses interpretation + supporting evidence.

Expected after Submit:

> **Finance approval control may have been bypassed.**

### Why

Policy requires Finance Manager approval; baseline personnel identifies Lucas as Finance Manager; raw record has no recorded Finance Manager approver and shows another actor initiating the Proxy Route.

### Evidence-quality feedback

Example:

```text
Required evidence coverage: Complete
Relevant evidence selected: 3/3
Irrelevant evidence selected: 0
```

---

## 3.8 Tab 4 — Proxy Route Compliance

### Main result

> **Proxy Route use is non-compliant with simulated Aster policy.**

Missing:

```text
valid reason code
documented justification
retrospective Finance Manager review
```

### Limitation

> These conditions are fictional Aster policy, not external professional standards.

---

## 3.9 Tab 4 — Aggregate Approval

### Main result

> **Northstar should require CFO + Board approval.**

```text
0.9 + 0.9 + 0.8 = 2.6
2.6 > 1.0
```

### Explanation

The related tranches share agreement/economic purpose and are evaluated at aggregate economic-transaction level under simulated Aster policy.

---

## 3.10 Tab 4 — Management Override Assessment

### Main result

> **Management Override Assessment: Supported**

### Why

Interface summarizes **confirmed Evidence States**:

```text
✓ Finance-control interpretation confirmed
✓ Proxy Route non-compliance confirmed
✓ Aggregate approval/escalation issue confirmed
✓ Direct management connection confirmed
```

### Important

Do not say:

```text
Score > X → Management Override
```

The conclusion comes from Evidence State synthesis.

---

## 3.11 Tab 5 — Responsibility Attribution

### Victor

- transaction initiator;
- agreement signatory;
- Department Head actor;
- Proxy Route initiator;
- direct transaction/control connection;
- conflict evidence.

### Lucas

- Finance Manager;
- required role;
- no recorded Northstar approval event;
- no evidence of Proxy Route initiation;
- monitoring responsibility requires separate evidence.

### David

- CFO;
- relevant because aggregate Northstar requires CFO + Board;
- no direct Northstar override-action evidence.

### Sophia

- Internal Control Manager;
- monitoring/control context;
- no direct Northstar override-action evidence.

### Result

> **Primary Responsible Individual: Victor**

### Limitation

> Educational case attribution, not legal finding.

---

## 3.12 Tab 6 — Final Review

### Highest hierarchy

> **Evidence-Based Management Override and Responsibility Conclusion**

```text
Management Override: Supported
Primary Responsible Individual: Victor
```

### Trace

```text
SGAI
→ SG&A
→ Advisory Expense
→ Northstar
→ Surface Approval Reviewed
→ Cross-Source Fact Finding
→ Possible Finance Approval Bypass
→ Proxy Route Non-Compliant
→ Aggregate 2.6 Requires CFO + Board
→ Management Override Supported
→ Victor Primary Responsible
```

### State notes

If an earlier step was assisted:

```text
[ASSISTED — Transaction Group]
```

must remain visible.

### Gameplay result — lower hierarchy

```text
Score: xx / 100
Ending: ...
```

Score/ending must not visually dominate evidence conclusion.

### Review options

- Correct evidence used;
- Evidence missed;
- Irrelevant/contradictory evidence;
- Assisted/unresolved nodes;
- Retry / Review.

Do not label this as high-replayability.

---

# 4. Interface Explainability Components

| Component | Screen | Purpose |
|---|---|---|
| Short formula note | Tab 1–3 | Calculation structure |
| Rule box | Tab 1 / 4 | Relevant case rules |
| Evidence source tag | Tab 4–6 | Source provenance |
| Fact vs Interpretation labels | Tab 4 | Prevent reasoning collapse |
| Evidence-quality feedback | Tab 4–6 | Coverage/relevance reflection |
| Person comparison cards | Tab 5 | Distinguish role/involvement/responsibility |
| Limitation box | Tab 1/4/5/6 | Prevent overclaim |
| Next-action button | each step | Progress guidance |
| Trace Map | all | State/history |
| Retry / Review summary | Result | Reflection |

---

# 5. UI Wording Rules

## Use

- `Khu vực cần ưu tiên điều tra`
- `Transaction group cần kiểm tra`
- `Surface Approval Summary`
- `Raw Approval Audit Trail`
- `Proxy Route`
- `Factual Finding`
- `Control Interpretation`
- `Evidence supports...`
- `Management Override: Supported`
- `Primary Responsible Individual`
- `Assisted`

## Do not use before user reasoning

- `Lucas was bypassed`
- `Finance approval control was bypassed`
- `Victor overrode Lucas`
- `Management Override occurred`

## Do not use at all

- `Fraud detected`
- `Victor committed fraud`
- `M-Score proves manipulation`
- `Material Weakness`
- `SOX severity`
- `PV damage`
- `culprit=true`
- `Finance Approval Completed = Lucas approved`

---

# 6. Screen Hierarchy

Observation screen:

```text
1. Step title
2. Read-only evidence
3. Warning/context
4. Next action
```

Decision screen:

```text
1. Step title + goal
2. Read-only evidence
3. Relevant rule/reference
4. Judgment/calculation
5. Supporting evidence if required
6. Submit
7. Result
8. Why
9. Evidence-quality feedback
10. Limitation
11. Next action
12. Trace Map update
```

---

# 7. Working Interface Review Checklist

- [ ] Prepared case data is read-only.
- [ ] Labels do not expose technical JSON names unnecessarily.
- [ ] Surface Approval is not scored.
- [ ] Surface Approval hides actors.
- [ ] Control Evidence Workspace includes Policy + Personnel + Raw Audit.
- [ ] Raw Audit uses neutral `Proxy Route`.
- [ ] Raw Audit does not reveal bypass/Management Override conclusion.
- [ ] Fact Finding appears before Control Interpretation.
- [ ] Major judgment requires supporting evidence for full credit.
- [ ] Evidence-quality feedback handles select-all.
- [ ] Conflict evidence remains locked until Responsibility.
- [ ] Lucas is not shown as co-approver.
- [ ] David is CFO.
- [ ] Sophia is not labeled as failed monitor without evidence.
- [ ] Assisted nodes remain visible.
- [ ] Score/ending does not dominate final evidence conclusion.
- [ ] Retry / Review replaces generic replay claim.
- [ ] Actual Unity behavior matches documentation.
