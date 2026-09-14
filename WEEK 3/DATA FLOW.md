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

## 2. End-to-End Data Flow

```text
Local Scenario Data
↓
Validation
↓
DSRI / SGAI / TATA
↓
SG&A
↓
Materiality Cross-Check
↓
Advisory Expense
↓
Northstar Tranches
↓
Surface Approval Summary
↓
Audit Trail
↓
Override/Proxy Route Check
↓
Aggregate Approval Check
↓
Management Override Assessment
↓
Responsibility Attribution
↓
Final Evidence-Based Conclusion
```

---

## 3. Case Walkthrough

### Step 1 — Financial Screening

```text
DSRI = 0.9333
SGAI = 1.12
TATA = 0.0273
```

→ SG&A is priority area.

### Step 2 — Materiality / Drill-down

```text
SG&A: 15 → 21, change +6 > 1.1
Advisory: 1.2 → 4.2, change +3 > 1.1
```

→ Advisory Expense.

### Step 3 — Transaction Tracing

```text
Northstar = 0.9 + 0.9 + 0.8 = 2.6
2.6 / 4.2 = 61.9%
```

Same vendor + agreement + economic purpose + initiator.

### Step 4 — Surface Approval

Player sees:

```text
Department Head Approval = Completed
Finance Approval = Completed
Overall Status = Approved
```

Surface evidence appears compliant.

### Step 5 — Audit Trail

Audit trail shows:

```text
Department Head actor = Victor
Finance step method = management_override_proxy
Actual Finance Manager approver = null
Override actor = Victor
Justification present = false
Retrospective Finance review = false
Lucas approval event = none
```

→ first control issue: Finance approval step was bypassed by Victor.

### Step 6 — Aggregate Approval

Northstar aggregate = 2.6 >1.0.

→ CFO + Board required.

→ second control issue: transaction structure avoided approval escalation.

### Step 7 — Management Override

Player connects:

- unsupported override/proxy use;
- splitting/escalation bypass;
- Victor authority;
- Victor transaction initiation/agreement signature;
- conflict evidence.

### Step 8 — Responsibility

Victor has stronger direct evidence. Lucas is the bypassed Finance Manager, not a co-approver.

---

## 4. Validation Rules

| Rule | Invalid example | Response |
|---|---|---|
| N and N-1 fields required | missing revenue N-1 | ratio unavailable |
| denominator nonzero | revenue = 0 | calculation error |
| SG&A reconcile | subaccounts != total | reconciliation error |
| Advisory ledger reconcile | ledger != 4.2 | reconciliation error |
| transaction IDs unique | duplicate ADV-02A | reject dataset |
| person/evidence refs valid | unknown person | invalid reference |
| same-agreement/economic-purpose needed for auto-group | same vendor only | do not aggregate |
| surface status and audit trail both present for Northstar | audit trail missing | evidence incomplete |
| override actor must exist | unknown actor | invalid reference |
| override route valid only if required conditions satisfied | no justification/review | route non-compliant |
| missing Lucas approval event must not be auto-labeled fraud | no event | control evidence only |
| answer key not player-visible | UI bind detected | technical test fail |

---

## 5. Missing Value Handling

- Missing audit trail → `evidence_incomplete`; do not conclude Lucas approved or did not approve.
- Missing actual finance approver ID → state is unknown unless audit trail explicitly records override/proxy completion.
- Missing justification/review field → do not silently default; flag incomplete.
- Missing conflict evidence → `unknown`, not false.

---

## 6. Early Logic Test

| Input | Expected process | Expected output | Manual check | Status |
|---|---|---|---|---|
| Financial sample | DSRI/SGAI/TATA | 0.9333 / 1.12 / 0.0273 | match | Pass |
| SG&A breakdown | materiality + drill-down | Advisory | match | Pass |
| Northstar ledger | aggregate | 2.6 / 61.9% | match | Pass |
| Surface approval | read status | appears approved | match | Pass |
| Audit trail | compare actual actor/method | Lucas did not approve; Victor used override/proxy | match | Pass |
| Override route rule | check justification/review | non-compliant use | match | Pass |
| Aggregate approval | 2.6 vs policy | CFO + Board required | match | Pass |
| Override evidence set | synthesize evidence | Supported | manual chain works | Pass |
| Responsibility | compare evidence | Victor primary; Lucas bypassed | manual chain works | Pass |
