# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 5 — USER FLOW

## 1. User Goal

Người chơi phải hoàn thành một explainable investigation chain:

> **Financial signal → Northstar → cross-source control evidence → factual finding → control interpretation → Management Override → primary responsibility → final evidence-based conclusion**

User flow bắt đầu từ user goal và kết thúc khi hai final decisions được giải thích bằng evidence.

---

## 2. Flow Overview

```text
START
↓
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
↓
RESULT + TRACE MAP + SCORE/ENDING + RETRY/REVIEW
```

User có thể xem lại evidence đã unlock.

Logical step không được bỏ qua, nhưng assisted continuation có thể giữ flow khi user sai.

---

# 3. Happy Path

| Step | User Action | System Response | Evidence / State |
|---|---|---|---|
| Start | Open case | Load local JSON | Case context |
| Tab 1 | Calculate + select SG&A | Validate calculation/judgment/support | Focus node confirmed |
| Tab 2 | Analyze SG&A + select Advisory | Validate calculation/judgment/support | Subaccount node confirmed |
| Tab 3 | Calculate/group Northstar + linkage evidence | Validate | Transaction node confirmed |
| Tab 4A | Read Surface Approval | Mark reviewed | Surface node reviewed |
| Tab 4B | Open Policy/Personnel/Raw Audit | Track reviewed sources | Evidence workspace reviewed |
| Tab 4C | Submit factual finding | Validate direct fact | Fact node confirmed |
| Tab 4D | Submit control interpretation + evidence | Validate judgment + evidence quality | Interpretation node confirmed |
| Tab 4E | Check Proxy Route compliance | Validate conditions | Compliance node confirmed |
| Tab 4F | Aggregate tranches + compare policy | Validate linkage/value | Escalation node confirmed |
| Tab 4G | Assess Management Override + evidence | Read prerequisite Evidence States | Override node confirmed |
| Tab 5 | Compare people + evidence | Comparative attribution | Victor confirmed |
| Tab 6 | Integrate final evidence set | Check coverage/relevance/consistency | Final conclusion |
| Result | Review | Show conclusion, state, score, gaps | Retry / Review |

---

# 4. Happy Path chi tiết

## Tab 1 — Financial Screening

Read-only:

Revenue  
Receivables  
SG&A  
Income from Continuing Operations  
CFO  
Total Assets

User inputs:

```text
DSRI = 0.9333
SGAI = 1.12
TATA = 0.0273
Focus Area = SG&A
```

Full credit needs correct calculation/rule support + judgment.

Correct:

```text
focus_area_state = confirmed
```

---

## Tab 2 — Account Drill-down

User sees SG&A Breakdown.

Expected:

```text
Advisory change = 250%
absolute increase = 3.0
Subaccount = Advisory Expense
```

Correct:

```text
subaccount_state = confirmed
```

---

## Tab 3 — Transaction Tracing

Expected:

```text
Northstar total = 2.6
Northstar share = 61.9%
Transaction group = AGR-NST-01
```

Linkage:

```text
same vendor
same agreement
same economic purpose
```

Correct:

```text
transaction_state = confirmed
```

Then open Surface Approval.

---

## Tab 4 — Control Investigation

### Stage A — Surface Approval Observation

User sees:

```text
Department Head Approval = Completed
Finance Approval = Completed
Overall = Approved
```

No question.

No score.

System:

```text
surface_approval_state = reviewed
```

Next:

> **Open Control Evidence Workspace**

---

### Stage B — Control Evidence Workspace

User can open:

```text
Approval Policy
Personnel Directory
Raw Approval Audit Trail
```

in any order.

#### Policy

```text
0.5 < amount <= 1.0
requires Department Head + Finance Manager
```

#### Personnel

```text
Victor = Department Head
Lucas = Finance Manager
David = CFO
Sophia = Internal Control Manager
```

#### Raw Audit

```text
Department Head actor = Victor

Finance step
Required role = Finance Manager
Status = Completed
Completion type = Proxy Route
Recorded approver = —
Route initiated by = Victor
Reason code = —
Justification = —
Retrospective review = —
```

No bypass conclusion appears yet.

---

### Stage C — Fact Finding

Prompt:

> **Which factual statement is best supported by the records?**

Expected:

> **Finance step is recorded as Completed, but no Finance Manager approver is recorded; the Proxy Route was initiated by Victor.**

Correct:

```text
fact_state = confirmed
```

---

### Stage D — Control Interpretation

Prompt:

> **What control implication does this create?**

Expected:

> **Finance approval control may have been bypassed.**

User also selects supporting evidence.

System evaluates:

```text
judgment
coverage
relevance
contradictory evidence
```

Correct + sufficient support:

```text
control_interpretation_state = confirmed
```

---

### Stage E — Proxy Route Compliance

Policy:

```text
requires:
- documented justification
- valid reason code
- retrospective Finance Manager review
```

Raw record:

```text
all absent
```

Expected:

> **Non-compliant under simulated Aster policy.**

---

### Stage F — Aggregate Approval

User evaluates:

```text
0.9 + 0.9 + 0.8 = 2.6
```

Policy:

```text
>1.0 → CFO + Board
```

Expected:

> **CFO + Board required.**

---

### Stage G — Management Override

User selects:

```text
Supported
or
Not Supported
```

plus evidence.

System checks prerequisite Evidence States.

It does not check total score to decide case conclusion.

---

## Tab 5 — Responsibility Attribution

Detailed evidence unlocks.

### Victor

Direct action + agreement + route + conflict.

### Lucas

Required Finance role; no recorded approval event; no route-initiation evidence.

Monitoring responsibility requires separate evidence.

### David

CFO; relevant to required escalation.

No direct override-action evidence.

### Sophia

Internal Control Manager; monitoring context.

No direct override-action evidence.

Expected:

```text
Primary Responsible Individual = Victor
```

with supporting evidence.

---

## Tab 6 — Final Evidence Integration

User selects final evidence chain.

System checks:

- required groups;
- relevance;
- contradiction;
- assisted/unresolved states;
- reasoning consistency.

Then shows final conclusion.

---

# 5. Alternative / Assisted Paths

Alternative path = valid input but reasoning/calculation not fully correct.

| Situation | System Behavior | Evidence State | Learning Effect |
|---|---|---|---|
| Calculation wrong, judgment/support correct | Lose calculation points | reasoning node may still confirm | Arithmetic separate from investigation |
| Judgment correct but evidence weak | Partial score; feedback asks for support | unresolved/reviewed until requirement met | Guessing not equal reasoning |
| Tab 1 wrong focus | Limited/guided continuation | unresolved/assisted | Keep downstream flow |
| Tab 2 wrong subaccount | Limited/guided continuation | unresolved/assisted | Keep downstream flow |
| Tab 3 wrong transaction group | Load `REF-NORTHSTAR-01` | assisted | Tab 4 remains playable |
| Control factual finding wrong | Feedback; evidence workspace remains accessible | unresolved | User can continue with weaker state |
| Correct fact, wrong control interpretation | Partial score | unresolved | Fact ≠ interpretation |
| Miss Proxy Route conditions | Partial/incomplete Override reasoning | unresolved | Compliance evidence matters |
| Miss aggregate escalation | Override prerequisite incomplete | unresolved | Synthesis incomplete |
| Tab 5 chooses Lucas | Final Review still opens | responsibility unresolved | Required role ≠ responsible actor |
| Tab 6 evidence set contains irrelevant cards | Lower relevance | final evidence quality reduced | Select-all exploit blocked |

Principle:

> **Wrong reasoning changes score/state/feedback, not whether the application can continue.**

---

# 6. Error Paths

Error path = invalid input or unprocessable system/data state.

## 6.1 Input Error

| Error | Message | Action |
|---|---|---|
| Blank calculation | `Vui lòng nhập kết quả tính toán.` | No Submit |
| Non-numeric input | `Chỉ nhập giá trị số.` | No Submit |
| Percentage format wrong | `Nhập phần trăm dưới dạng số, ví dụ 250.` | No Submit |
| Required judgment absent | `Hãy chọn một kết luận trước khi tiếp tục.` | No Submit |
| Required evidence absent | `Hãy chọn bằng chứng hỗ trợ kết luận.` | No Submit |

## 6.2 Evidence / State Error

| Error | Response |
|---|---|
| Locked evidence selected | Keep locked |
| Evidence ID missing | Log technical error |
| Raw Audit missing | `Evidence incomplete`; no actor/control conclusion |
| Conflict evidence missing | `Unknown` |
| Assisted packet missing when required | Log fallback error; cannot silently fabricate |
| Evidence State invalid | Log state error |
| answer_key visible | Technical fail |

## 6.3 Local Data Load Error

If core JSON fails:

> **Case data could not be loaded. Please restart the case.**

No fabricated defaults.

---

# 7. Progress & Navigation

```text
Step 1 / 6 — Financial Screening
Step 2 / 6 — Account Drill-down
Step 3 / 6 — Transaction Tracing
Step 4 / 6 — Control Investigation
Step 5 / 6 — Responsibility Attribution
Step 6 / 6 — Final Review
```

User:

- can revisit unlocked evidence;
- can inspect Trace Map;
- cannot unlock future-stage evidence early;
- can see `assisted/unresolved/confirmed` state where appropriate.

During a scored run, an evaluated decision can be locked after Submit to preserve consistency.

Retry is handled through **Retry / Review Mode**, not by silently editing a previously scored decision.

---

# 8. Trace Map Behavior

Happy path:

```text
SGAI 1.12
↓
SG&A
↓
Advisory Expense +250%
↓
Northstar 2.6 / 61.9%
↓
Surface Approval [REVIEWED]
↓
Cross-Source Fact Finding [CONFIRMED]
↓
Possible Finance Approval Bypass [CONFIRMED]
↓
Proxy Route Non-Compliant [CONFIRMED]
↓
Aggregate 2.6 Requires CFO + Board [CONFIRMED]
↓
Management Override Supported [CONFIRMED]
↓
Victor Primary Responsible [CONFIRMED]
```

Assisted example:

```text
Transaction Group [ASSISTED]
↓
REF-NORTHSTAR-01
```

Trace Map does not auto-resolve an assisted/unresolved node.

---

# 9. Retry / Review Mode

The fixed MVP case does not claim high replayability.

After Result, user may:

1. review missed evidence;
2. review irrelevant/contradictory evidence;
3. review assisted/unresolved nodes;
4. retry the case from the start.

Multiple cases/randomization are future extensions.

---

# 10. Working Interface Draft — Week 5 Target

Minimum functional evidence:

- [ ] Unity loads local JSON.
- [ ] Six-step navigation works.
- [ ] Tab 1 read-only data + inputs work.
- [ ] Tab 2/3 read correct data.
- [ ] Wrong Tab 3 can load `REF-NORTHSTAR-01`.
- [ ] Surface Approval is read-only/non-scored.
- [ ] Control Evidence Workspace has Policy + Personnel + Raw Audit.
- [ ] Raw Audit uses neutral `Proxy Route`.
- [ ] Raw Audit does not reveal bypass conclusion.
- [ ] Fact Finding and Control Interpretation are separate.
- [ ] Supporting-evidence selection works.
- [ ] Evidence coverage/relevance can be evaluated.
- [ ] Evidence State is separate from score.
- [ ] Tab 5 reads detailed responsibility evidence only at correct stage.
- [ ] Tab 6 displays confirmed/assisted/unresolved states.
- [ ] Progress tracker works.
- [ ] Trace Map records a happy path.
- [ ] Trace Map records an assisted path.
- [ ] Blank/non-numeric errors work.
- [ ] Retry / Review screen works or is explicitly marked partial.

If a feature is mock/partial, label it as such.

---

# 11. Week 6 Handoff

Priority:

1. connect full 6-step flow;
2. test happy path;
3. test assisted path;
4. test no-answer-leak;
5. test evidence coverage/relevance;
6. test state vs score separation;
7. test Tab 4 fact → interpretation → synthesis;
8. test responsibility evidence unlock;
9. test final Trace Map;
10. playtest usability and fix issues.
