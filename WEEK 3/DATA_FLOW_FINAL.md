# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — DATA FLOW, VALIDATION & EARLY LOGIC TEST

## 1. Data Structure

```text
data/
  case_data.json
  rules.json
  evidence.json
  answer_key.json
```

`answer_key.json` is internal only.

---

## 2. Revised End-to-End Data Flow

```text
Local Scenario Data
↓
Validation
↓
DSRI / SGAI / TATA
↓
SG&A
↓
Advisory Expense
↓
Transaction Tracing
↓
Northstar or Assisted Referral
↓
Surface Approval — read-only observation
↓
Control Evidence Workspace
  ├─ Approval Policy
  ├─ Personnel Directory
  └─ Raw Approval Audit Trail
↓
Fact Finding
↓
Control Interpretation + Supporting Evidence
↓
Proxy Route Compliance
↓
Aggregate Approval Check
↓
Management Override Evidence Synthesis
↓
Responsibility Attribution
↓
Final Evidence-Based Conclusion
```

Surface Approval không phải scored pseudo-choice.

---

## 3. Case Walkthrough

### Step 1 — Financial Screening

```text
DSRI = 0.9333
SGAI = 1.12
TATA = 0.0273
```

Expected routing: SG&A.

### Step 2 — Drill-down

```text
SG&A: 15 → 21
Advisory: 1.2 → 4.2
Advisory change = +3.0 > materiality reference 1.1
```

Expected: Advisory Expense.

### Step 3 — Transaction Tracing

```text
Northstar = 0.9 + 0.9 + 0.8 = 2.6
Northstar / Advisory = 61.9%
```

Same vendor + same agreement + same economic purpose.

Expected: Northstar.

### Step 3A — Assisted Continuation

Nếu user chọn wrong transaction group:

```text
transaction_node = unresolved
assistance_state = assisted
↓
minimal Northstar referral packet unlocked
↓
Control Investigation can continue
```

System không ghi user đã tìm đúng Northstar.

### Step 4 — Surface Approval

Player reads:

```text
Department Head Approval = Completed
Finance Approval = Completed
Overall Status = Approved
```

No scored choice.

### Step 5 — Control Evidence Workspace

Player cross-references:

Approval Policy  
Personnel Directory  
Raw Audit Trail

Raw Audit Trail shows only neutral facts.

### Step 6 — Fact Finding

Expected factual finding:

```text
Finance step status = Completed
Recorded Finance approver = null
Completion type = Proxy Route
Route initiated by = Victor
```

No automatic `bypass` label at this stage.

### Step 7 — Control Interpretation

Expected:

> Finance approval control may have been bypassed.

Full reasoning credit requires relevant supporting evidence.

### Step 8 — Proxy Route Compliance

Northstar:

```text
valid reason code = false
documented justification = false
retrospective Finance review = false
```

Expected:

> Non-compliant use under simulated Aster policy.

### Step 9 — Aggregate Approval

```text
Northstar aggregate = 2.6 > 1.0
```

Expected:

> CFO + Board required.

### Step 10 — Management Override

Case conclusion is generated from Evidence State, not gameplay score.

Conceptual synthesis:

```text
control circumvention evidence confirmed
AND
proxy-route non-compliance confirmed
AND
approval escalation issue confirmed
AND
direct management connection confirmed
→ Management Override Supported
```

### Step 11 — Responsibility

Victor has strongest direct evidence.

Lucas is a required Finance role with no recorded approval event. Monitoring responsibility is not inferred without separate evidence.

---

## 4. Evidence Selection Logic

Evidence selection must evaluate both:

**coverage** — user selected evidence needed for conclusion;  
**relevance** — user avoided irrelevant/contradictory evidence.

Week 3 categories:

```text
required_relevant
additional_relevant
irrelevant
contradictory
```

Week 4 will define exact scoring formula.

A simple superset rule is not acceptable because it allows `select all`.

---

## 5. Evidence State vs Score

Evidence State:

```text
unreviewed
reviewed
confirmed
unresolved
assisted
contradicted
```

Performance Score:

calculation;  
judgment;  
evidence coverage;  
evidence relevance;  
reasoning consistency.

Management Override conclusion uses Evidence State.

Score does not create the case conclusion.

---

## 6. Validation Rules

| Rule | Invalid example | Response |
|---|---|---|
| N and N-1 required | missing revenue N-1 | ratio unavailable |
| denominator nonzero | revenue = 0 | calculation error |
| SG&A reconcile | breakdown != total | reconciliation error |
| Advisory ledger reconcile | ledger != 4.2 | reconciliation error |
| transaction IDs unique | duplicate ADV-02A | reject dataset |
| person/evidence refs valid | unknown person | invalid reference |
| aggregation needs linkage | same vendor only | do not auto-aggregate |
| Surface Approval has no actor | actor appears in summary | no-answer-leak test fail |
| Raw Audit has no conclusion | `bypass=true` in player data | no-answer-leak test fail |
| Raw Audit uses neutral route name | `management_override_proxy` shown to player | no-answer-leak test fail |
| Proxy route conditions explicit | route exists but rule missing | compliance unavailable |
| Missing Finance approver | null without context | unknown until other record fields reviewed |
| Missing conflict evidence | none | unknown, not false |
| answer_key not player-facing | UI bind detected | technical test fail |
| wrong transaction + downstream dependency | no referral packet | fallback design fail |
| evidence set = all options | full score automatically | matching-design fail |

---

## 7. Missing Value Handling

Missing raw audit trail → `evidence_incomplete`.

Missing recorded Finance approver alone → `unknown`; do not auto-label bypass.

Missing route-policy condition → route compliance cannot be concluded.

Missing conflict evidence → `unknown`, not false.

Missing monitoring evidence for Lucas → do not infer negligence or exoneration.

Missing assisted packet when downstream stage requires Northstar → block continuation and log fallback error.

---

## 8. Early Logic Test

| Input | Expected process | Expected output | Status |
|---|---|---|---|
| Financial sample | DSRI/SGAI/TATA | 0.9333 / 1.12 / 0.0273 | Pass |
| SG&A breakdown | drill-down | Advisory | Pass |
| Northstar ledger | group/aggregate | 2.6 / 61.9% | Pass |
| Surface Approval | read-only | reviewed state only | Pass |
| Policy + Personnel + Raw Audit | cross-reference | fact-level finding | Pass |
| Factual finding | interpret | possible Finance approval bypass | Pass |
| Proxy policy | compliance check | non-compliant use | Pass |
| Aggregate approval | 2.6 vs policy | CFO + Board required | Pass |
| Evidence State | synthesis | Management Override Supported | Pass |
| Responsibility evidence | compare | Victor primary | Pass |
| Wrong transaction | assisted fallback | downstream flow continues; node remains assisted | Design test |
| Select all evidence | relevance check | no automatic full score | Design test |

---

## 9. Legacy-System Logic Test

Assumption:

> Aster system logs events but does not run full real-time compliance detection.

Test:

raw event exists  
+ missing justification/review exists  
+ no automatic alert is required by current simulated system  
→ no plot contradiction.

This is a storyline/technical assumption, not an external control standard.
