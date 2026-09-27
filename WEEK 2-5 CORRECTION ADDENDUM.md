# The Last Heir — Week 2–5 Correction Addendum & Implementation Clarification

**Project:** The Last Heir — Financial Investigation Game  
**Nhóm:** G08  
**Status:** Final correction / clarification addendum  
**Phạm vi:** Week 2, Week 3, Week 4, Week 5  
**Mục đích:** Ghi nhận và sửa các điểm chưa nhất quán trong tài liệu Week 2–5 mà **không cần chỉnh sửa trực tiếp các file cũ**.

---

# 0. Cách sử dụng file này

Các file Week 2–5 hiện tại được giữ nguyên như documentation theo từng giai đoạn phát triển.

File này đóng vai trò **correction addendum** và **implementation clarification**.

Quy tắc sử dụng:

1. Nếu nội dung Week 2–5 không mâu thuẫn với file này, giữ nguyên cách hiểu cũ.
2. Nếu có naming, state, scoring, evidence rule hoặc implementation detail khác nhau giữa các file cũ, **file này là reference cuối cùng cho implementation**.
3. File này **không thay đổi Product Direction** của project.
4. File này chủ yếu chuẩn hóa:
   - Evidence State;
   - canonical state names;
   - Evidence ID;
   - confirmation rules;
   - Assisted Continuation;
   - anti-guess logic;
   - evidence scoring;
   - Management Override synthesis;
   - Responsibility Attribution;
   - UI behavior cần thiết để logic được enforce.
5. Các file Week 2–5 cũ không cần bị rewrite. Những mục dưới đây được hiểu là **correction / clarification applied on top of those files**.

---

# 1. Những nguyên tắc vẫn giữ nguyên

Các quyết định sau từ Week 2–5 **không thay đổi**:

```text
Financial Screening
→ Account Drill-down
→ Transaction Tracing
→ Surface Approval Observation
→ Control Evidence Workspace
→ Factual Finding
→ Control Interpretation
→ Proxy Route Compliance
→ Aggregate Approval
→ Management Override Assessment
→ Responsibility Attribution
→ Final Evidence Integration
```

Các nguyên tắc vẫn giữ nguyên:

- DSRI, SGAI và TATA chỉ dùng cho screening.
- Financial signal không tự chứng minh fraud hoặc Management Override.
- Surface Approval chỉ là observation layer.
- Surface Approval không được score.
- Raw evidence phải chứa fact, không chứa final conclusion.
- Major judgment phải có supporting evidence.
- Evidence State tách khỏi Performance Score.
- Gameplay score không quyết định Management Override.
- Wrong path không bắt buộc gây game-over.
- Assisted Continuation có thể giữ downstream learning flow.
- Required role không đồng nghĩa actual actor.
- Required role không đồng nghĩa primary responsible individual.
- Conflict evidence không được leak quá sớm.
- `answer_key.json` là internal-only.
- Fixed-case MVP dùng Retry / Review, không claim high replayability.

---

# 2. WEEK 2 — Correction / Clarification

## W2-01 — Management Override logic chỉ là conceptual ở Week 2

### Vấn đề

Week 2 mô tả conceptual logic:

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

Logic này đúng về direction nhưng Week 2 chưa xác định exact state name, exact evidence groups hoặc exact confirmation conditions.

### Correction

Week 2 được hiểu là **product-level logic**, không phải implementation contract cuối cùng.

Exact implementation sử dụng canonical nodes:

```text
control_interpretation_state
proxy_compliance_state
aggregate_approval_state
direct_management_connection_state
override_assessment_state
```

Exact synthesis được định nghĩa tại Section 7 của file này.

### Impact

Không thay đổi Product Direction. Chỉ làm rõ rằng Week 2 không phải nguồn cuối cùng cho variable/state naming.

---

## W2-02 — Responsibility factors không phải tất cả đều là mandatory prerequisite

### Vấn đề

Week 2 mô tả Responsibility dựa trên:

```text
authority
+ direct action
+ transaction connection
+ control-circumvention evidence
+ conflict
+ corroboration
```

Cách viết này có thể bị hiểu rằng tất cả yếu tố đều bắt buộc.

### Correction

Responsibility Attribution sử dụng hai nhóm:

**Primary attribution factors**

```text
direct action
transaction / control connection
authority over the relevant action
```

**Corroborating factors**

```text
agreement linkage
conflict evidence
other supporting responsibility evidence
```

Conflict evidence giúp attribution mạnh hơn nhưng không phải prerequisite bắt buộc để Management Override ở Tab 4 được support.

---

# 3. WEEK 3 — Data, Evidence và State Corrections

## W3-01 — Canonical Evidence State

Chỉ sử dụng sáu giá trị:

```text
Unreviewed
Reviewed
Confirmed
Unresolved
Assisted
Contradicted
```

Ý nghĩa:

| State | Meaning |
|---|---|
| `Unreviewed` | Node/source chưa được user xem hoặc xử lý |
| `Reviewed` | Source đã được xem nhưng chưa tạo confirmed decision |
| `Confirmed` | Required reasoning + evidence conditions đã đạt |
| `Unresolved` | User chưa xác định đúng hoặc evidence support chưa đủ |
| `Assisted` | System đã cung cấp minimum correct-path information để downstream flow tiếp tục |
| `Contradicted` | User conclusion xung đột với confirmed evidence |

Không tạo thêm state `PartiallyConfirmed`.

Partial performance được thể hiện bằng **score**, không phải bằng một Evidence State mới.

---

## W3-02 — `assistance_state` không còn là state độc lập

### Vấn đề

Week 3 có cả:

```text
evidence_state
assistance_state
```

trong khi `Assisted` đã tồn tại trong Evidence State.

### Correction

Trong implementation, dùng:

```text
evidence_state = Assisted
```

Nếu cần lưu nguồn hỗ trợ:

```text
assisted_referral_packet_id
```

Nếu cần lịch sử:

```text
was_assisted = true
```

`was_assisted` là metadata, không phải một state cạnh tranh với Evidence State.

---

## W3-03 — Canonical state names

Để tránh Week 3–5 sử dụng nhiều tên cho cùng một node, implementation dùng duy nhất:

```text
focus_area_state
subaccount_state
transaction_group_state

surface_approval_state

factual_finding_state
control_interpretation_state
proxy_compliance_state
aggregate_approval_state
direct_management_connection_state
override_assessment_state

responsibility_state
final_integration_state
```

Các tên cũ như:

```text
fact_state
finance_control_interpretation
proxy_route_compliance
aggregate_approval_requirement
```

được hiểu là conceptual/legacy wording, không phải canonical implementation field.

---

## W3-04 — `CFO` phải được tách nghĩa

### Vấn đề

`CFO` đang có thể được hiểu theo hai nghĩa:

```text
Cash Flow from Operations
Chief Financial Officer
```

### Correction

Trong data / C#:

```text
cash_flow_from_operations
```

dùng cho financial metric.

Trong personnel:

```text
role = Chief Financial Officer
```

hoặc display label:

```text
Chief Financial Officer (CFO)
```

TATA dùng:

```text
TATA =
(Income from Continuing Operations - Cash Flow from Operations)
/
Total Assets
```

---

## W3-05 — Canonical Evidence ID catalogue

Từ thời điểm implementation, evidence card phải có stable ID.

Recommended catalogue:

```text
POL-APP-01
Approval Policy — tranche-level approval requirement

POL-AGG-01
Approval Policy — aggregate economic transaction threshold

POL-PROXY-01
Special Proxy Completion Route conditions

PER-VICTOR-01
Victor — baseline role / authority

PER-LUCAS-01
Lucas — Finance Manager baseline role

PER-DAVID-01
David — CFO baseline role

PER-SOPHIA-01
Sophia — Internal Control Manager baseline role

AUD-DH-01
Raw Audit — Department Head step / Victor recorded actor

AUD-FIN-01
Raw Audit — Finance step Completed / no recorded Finance approver

AUD-PROXY-01
Raw Audit — Proxy Route initiated by Victor

AUD-PROXY-SUPPORT-01
Raw Audit — reason code / justification / retrospective review absent

TX-NST-LINK-01
Northstar — same vendor

TX-NST-LINK-02
Northstar — same agreement

TX-NST-LINK-03
Northstar — same economic purpose

TX-NST-INIT-01
Northstar — initiated by Victor

AGR-NST-SIGN-01
Northstar agreement — Victor connection/signature

RESP-VICTOR-CONFLICT-01
Victor — conflict evidence

RESP-LUCAS-01
Lucas — no recorded Northstar approval event

RESP-DAVID-01
David — escalation relevance / no direct override-action evidence

RESP-SOPHIA-01
Sophia — monitoring context / no direct override-action evidence
```

Exact display text có thể thay đổi, nhưng ID phải ổn định sau khi code bắt đầu.

---

## W3-06 — Evidence classification phải theo decision context

### Vấn đề

Một evidence item không phải lúc nào cũng globally `required_relevant`, `irrelevant` hoặc `contradictory`.

### Correction

Không dùng một classification duy nhất trên Evidence Card.

Classification được map theo:

```text
decision_id
+
judgment_id
+
evidence_id
```

Conceptual structure trong `answer_key.json`:

```text
decision_id
correct_judgment_id
required_evidence_groups
additional_relevant_evidence
irrelevant_evidence
contradictory_evidence
confirmation_rule
```

Ví dụ:

```text
Decision:
CTRL_INTERPRETATION

Judgment:
POSSIBLE_FINANCE_BYPASS

Required groups:
- policy requirement
- personnel role
- raw approval record
```

---

## W3-07 — Source node và decision node có transition khác nhau

Không phải Evidence State nào cũng hợp lý cho mọi node.

### Source node

Ví dụ:

```text
Surface Approval
Approval Policy
Personnel Directory
Raw Audit Trail
```

Transition:

```text
Unreviewed → Reviewed
```

### Decision node

Ví dụ:

```text
Factual Finding
Control Interpretation
Proxy Compliance
Aggregate Approval
Management Override
Responsibility
```

Transition:

```text
Unreviewed
→ Confirmed
or
→ Unresolved
or
→ Contradicted
or
→ Assisted
```

Không dùng:

```text
Surface Approval = Contradicted
```

và không dùng:

```text
Control Interpretation = Reviewed
```

như final decision state.

---

## W3-08 — Assisted Continuation phải được định nghĩa cho upstream flow

Tab 3 đã có:

```text
REF-NORTHSTAR-01
```

Để logic đồng nhất, implementation có thể dùng:

```text
REF-SGA-01
REF-ADVISORY-01
REF-NORTHSTAR-01
```

Rules:

```text
Wrong Focus Area
→ focus_area_state = Assisted
→ REF-SGA-01 unlocked
→ SG&A Breakdown remains available
```

```text
Wrong Subaccount
→ subaccount_state = Assisted
→ REF-ADVISORY-01 unlocked
→ Advisory Ledger remains available
```

```text
Wrong Transaction Group
→ transaction_group_state = Assisted
→ REF-NORTHSTAR-01 unlocked
→ Control Investigation remains available
```

Assisted node không tự chuyển thành Confirmed.

Final Review phải hiển thị Assisted.

---

# 4. WEEK 4 — Logic, State và Scoring Corrections

## W4-01 — Không dùng `partially confirmed`

### Vấn đề

Một số wording cũ mô tả:

```text
unresolved or partially confirmed
```

nhưng enum không có `PartiallyConfirmed`.

### Correction

Sử dụng:

```text
Correct judgment + sufficient evidence
→ Confirmed
```

```text
Correct judgment + insufficient / weak evidence
→ Unresolved
```

```text
Wrong judgment + conflict with confirmed evidence
→ Contradicted
```

```text
System supplies correct-path information
→ Assisted
```

Partial credit chỉ tồn tại trong Performance Score.

---

## W4-02 — Exact confirmation rule

Để một major decision node trở thành `Confirmed`:

```text
correct_judgment == true
AND required_evidence_coverage == 1.00
AND evidence_relevance >= 0.75
AND contradictory_evidence_count == 0
AND prerequisite_states_satisfied == true
```

Nếu judgment đúng nhưng rule trên chưa đạt:

```text
Evidence State = Unresolved
Performance Score = Partial
```

Nếu user được system cung cấp correct-path information:

```text
Evidence State = Assisted
```

Score không được override Evidence State.

---

## W4-03 — Evidence Quality formula chỉ dùng cho performance

Giữ formula:

```text
Coverage =
required evidence groups satisfied
/
total required evidence groups
```

```text
Relevance =
selected relevant evidence
/
total selected evidence
```

```text
EvidenceQuality =
0.70 × Coverage
+
0.30 × Relevance
```

Contradictory evidence vẫn áp penalty theo rule của Week 4.

### Clarification

`EvidenceQuality` là **performance calculation**.

Nó không tự xác định node `Confirmed`.

Ví dụ:

```text
User selects all evidence
Coverage = 1.00
Relevance = 0.50
EvidenceQuality = 0.85
```

User có thể nhận partial/high partial evidence points, nhưng:

```text
Relevance < 0.75
→ decision node is not Confirmed
```

Như vậy select-all không bypass anti-guess rule.

---

## W4-04 — Canonical Management Override prerequisites

Management Override không đọc total score.

Canonical synthesis:

```text
control_interpretation_state == Confirmed
AND
proxy_compliance_state == Confirmed
AND
aggregate_approval_state == Confirmed
AND
direct_management_connection_state == Confirmed
→ evidence supports Management Override
```

Sau đó user vẫn phải submit:

```text
override_assessment
+
override_supporting_evidence
```

Để:

```text
override_assessment_state = Confirmed
```

Nếu prerequisites không đầy đủ, đúng single-select `Supported` không đủ để Confirmed.

---

## W4-05 — `direct_management_connection_state` phải có nguồn rõ ràng

State này được xác lập từ evidence đã available trước Responsibility stage.

Required evidence groups:

```text
Transaction connection:
TX-NST-INIT-01

Control-action connection:
AUD-PROXY-01

Authority / role context:
PER-VICTOR-01
```

Khi đủ required groups:

```text
direct_management_connection_state = Confirmed
```

Conflict evidence không phải prerequisite của node này.

Conflict evidence được giữ cho Responsibility Attribution.

---

## W4-06 — Canonical scoring breakdown

Total vẫn là:

```text
Tab 1 = 10
Tab 2 = 10
Tab 3 = 10
Tab 4 = 30
Tab 5 = 25
Tab 6 = 15
Total = 100
```

Để implementation không phải đoán cách chia điểm bên trong combined component, dùng breakdown:

### Tab 1 — 10

```text
DSRI / SGAI / TATA calculation = 3
Focus Area judgment = 4
Calculation / rule support = 3
```

### Tab 2 — 10

```text
Advisory calculation = 3
Subaccount judgment = 4
Materiality / change support = 3
```

### Tab 3 — 10

```text
Northstar total / share = 3
Transaction-group judgment = 4
Linkage evidence = 3
```

### Tab 4 — 30

```text
Factual Finding = 5

Control Interpretation = 5
- judgment = 2
- evidence quality = 3

Proxy Route Compliance = 5
- condition checks = 3
- final compliance judgment = 2

Aggregate Approval = 5
- linkage / grouping = 2
- aggregate calculation = 1
- approval conclusion = 2

Management Override = 10
- assessment judgment = 4
- evidence quality / prerequisite integration = 6
```

### Tab 5 — 25

Giữ tổng structure Week 4:

```text
Primary responsible person = 8
Authority / direct action evidence = 6
Transaction / control connection = 5
Conflict / corroboration = 3
Correct distinction of Lucas / David / Sophia = 3
```

### Tab 6 — 15

```text
Final evidence coverage / relevance = 10
Final reasoning consistency = 5
```

Score là performance only.

---

# 5. WEEK 5 — User Flow / UI Corrections

## W5-01 — Factual Finding không được chỉ là guess-only single select

### Required UI behavior

Trước khi Factual Finding có thể Confirmed:

```text
Approval Policy = Reviewed
AND
Personnel Directory = Reviewed
AND
Raw Approval Audit Trail = Reviewed
AND
correct factual finding submitted
```

Recommended user interaction:

```text
Which factual statement is best supported by the records?
```

Có thể vẫn dùng single-select, nhưng state không Confirmed nếu required sources chưa được review.

Expected fact:

```text
Finance step is recorded as Completed,
but no Finance Manager approver is recorded;
the Proxy Route was initiated by Victor.
```

Đây vẫn chỉ là fact, chưa phải Management Override.

---

## W5-02 — Control Interpretation phải enforce Judgment + Evidence

User submit:

```text
control interpretation
+
supporting evidence
```

Expected judgment:

```text
Finance approval control may have been bypassed.
```

Required evidence groups:

```text
Approval requirement
Personnel role
Raw approval record
```

Confirmation dùng W4-02.

---

## W5-03 — Proxy Route Compliance phải kiểm tra conditions trước conclusion

Không chỉ hiển thị một radio:

```text
Compliant
Non-Compliant
```

Recommended interaction:

```text
Valid reason code:
Present / Missing

Documented justification:
Present / Missing

Retrospective Finance Manager review:
Present / Missing
```

Sau đó user chọn:

```text
Compliant
Non-Compliant
```

Northstar expected:

```text
Reason code = Missing
Justification = Missing
Retrospective Finance review = Missing
→ Non-Compliant
```

Điều kiện này là simulated Aster policy.

---

## W5-04 — Aggregate Approval phải enforce linkage + aggregation + policy

User phải xác nhận hoặc chọn evidence về linkage:

```text
same vendor
same agreement
same economic purpose
initiator match as supporting evidence
```

Same vendor alone không đủ.

Sau đó:

```text
0.9 + 0.9 + 0.8 = 2.6
```

và đối chiếu:

```text
2.6 > 1.0
→ CFO + Board required
```

UI cần phân biệt:

```text
Applied tranche-level workflow:
Department Head + Finance Manager
```

với:

```text
Correct aggregate-level requirement:
CFO + Board
```

để tránh người dùng hiểu đây là hai policy mâu thuẫn.

---

## W5-05 — Management Override screen

User submit:

```text
Supported
or
Not Supported
```

plus evidence.

UI chỉ được Confirmed khi:

```text
control_interpretation_state = Confirmed
proxy_compliance_state = Confirmed
aggregate_approval_state = Confirmed
direct_management_connection_state = Confirmed
```

và evidence submission đạt confirmation gate.

Không dùng:

```text
score >= threshold
```

để tạo Management Override conclusion.

---

## W5-06 — Responsibility screen

Detailed responsibility/conflict evidence chỉ unlock ở stage này.

### Victor

Relevant evidence có thể gồm:

```text
initiated Northstar transaction
agreement connection
Department Head authority
Proxy Route initiation
direct transaction/control connection
conflict corroboration
```

### Lucas

```text
Finance Manager
required role at tranche-level
no recorded Northstar approval event
no Proxy Route initiation evidence
```

Không tự suy ra negligence hoặc primary responsibility.

### David

```text
Chief Financial Officer
relevant to aggregate escalation
no direct Northstar override-action evidence
```

### Sophia

```text
Internal Control Manager
monitoring / control context
no direct Northstar override-action evidence
```

Expected case answer:

```text
Primary Responsible Individual = Victor
```

nhưng user vẫn phải chọn supporting evidence.

---

## W5-07 — Final Review hierarchy

Final Review phải ưu tiên:

```text
1. Management Override evidence conclusion
2. Primary Responsibility conclusion
3. Evidence chain / Trace Map
4. Assisted / Unresolved / Contradicted gaps
5. Performance Score
6. Gameplay Ending
```

Score/ending không được hiển thị như bằng chứng cho case conclusion.

---

## W5-08 — Gameplay ending label

Các ending kiểu:

```text
Succession Confirmed
Conditional Succession
Delayed Succession
Succession Denied
```

được hiểu là **gameplay performance ending**, không phải:

```text
fraud conclusion
audit opinion
legal conclusion
Management Override conclusion
```

UI nên có label:

```text
Gameplay Performance Ending
```

để giảm ambiguity.

---

# 6. Canonical Implementation Contract

Đây là phần dùng trực tiếp khi code.

## 6.1 Canonical nodes

```text
focus_area_state
subaccount_state
transaction_group_state
surface_approval_state
factual_finding_state
control_interpretation_state
proxy_compliance_state
aggregate_approval_state
direct_management_connection_state
override_assessment_state
responsibility_state
final_integration_state
```

---

## 6.2 Allowed Evidence States

```text
Unreviewed
Reviewed
Confirmed
Unresolved
Assisted
Contradicted
```

---

## 6.3 Decision confirmation gate

```text
Confirmed =
correct judgment
AND Coverage == 1.00
AND Relevance >= 0.75
AND contradictory_count == 0
AND prerequisites satisfied
```

---

## 6.4 Assisted rule

```text
Assisted =
system provides minimum correct-path information
because user result would otherwise block downstream learning
```

Assisted:

```text
does not become Confirmed automatically
is shown in Trace Map
is shown in Final Review
reduces performance credit
does not block all downstream gameplay
```

---

## 6.5 Contradicted rule

Use `Contradicted` when:

```text
user conclusion conflicts with already confirmed evidence
```

Do not use it merely because user selected an incomplete evidence set.

Incomplete evidence normally produces:

```text
Unresolved
```

---

# 7. Canonical Management Override Logic

## Step A — Surface observation

```text
surface_approval_state = Reviewed
```

No score.

No bypass conclusion.

---

## Step B — Fact Finding

Required review:

```text
Approval Policy
Personnel Directory
Raw Approval Audit Trail
```

Expected fact:

```text
Finance step = Completed
Recorded Finance approver = none
Proxy Route initiated by Victor
```

Correct + required source review:

```text
factual_finding_state = Confirmed
```

---

## Step C — Control Interpretation

Expected:

```text
Possible Finance approval bypass
```

Required evidence groups:

```text
Policy requirement
Personnel role
Raw audit record
```

If confirmation gate passes:

```text
control_interpretation_state = Confirmed
```

---

## Step D — Proxy Route Compliance

Required policy conditions:

```text
valid reason code
documented justification
retrospective Finance Manager review
```

Northstar:

```text
all missing
```

Expected:

```text
Non-Compliant
```

If condition checks + judgment correct:

```text
proxy_compliance_state = Confirmed
```

---

## Step E — Aggregate Approval

Required linkage:

```text
same agreement
same economic purpose
vendor match
```

Initiator match is supporting linkage.

Calculation:

```text
0.9 + 0.9 + 0.8 = 2.6
```

Policy:

```text
> 1.0 → CFO + Board
```

If grouping, calculation and policy judgment are correct:

```text
aggregate_approval_state = Confirmed
```

---

## Step F — Direct Management Connection

Required evidence groups:

```text
Victor transaction initiation
Victor Proxy Route initiation
Victor authority / Department Head role
```

If sufficient:

```text
direct_management_connection_state = Confirmed
```

No conflict evidence required here.

---

## Step G — Management Override

System prerequisite check:

```text
control_interpretation_state == Confirmed
AND
proxy_compliance_state == Confirmed
AND
aggregate_approval_state == Confirmed
AND
direct_management_connection_state == Confirmed
```

Then user submits:

```text
override_assessment = Supported
+
supporting evidence
```

If judgment + evidence confirmation gate pass:

```text
override_assessment_state = Confirmed
```

Case interpretation:

```text
Available evidence supports Management Override
within the simulated Aster case.
```

This is not a legal or real-world audit determination.

---

# 8. Canonical Responsibility Logic

Responsibility is evaluated after Management Override investigation.

## Victor

Primary factors:

```text
direct transaction initiation
direct Proxy Route initiation
authority
transaction/control connection
```

Corroborating:

```text
agreement connection
conflict evidence
```

## Lucas

```text
required Finance role
no recorded Northstar approval event
no recorded Proxy Route initiation
monitoring responsibility unknown unless separate evidence exists
```

## David

```text
CFO
relevant to escalation requirement
no direct Northstar override action in current evidence
```

## Sophia

```text
Internal Control Manager
monitoring context
no direct Northstar override action in current evidence
```

Expected current-case attribution:

```text
Victor
```

Full confirmation still requires responsibility evidence selection.

---

# 9. Required `answer_key.json` structure

Conceptually:

```text
DecisionKey
- decision_id
- correct_judgment_id
- prerequisite_state_ids
- required_evidence_groups
- additional_relevant_evidence_ids
- contradictory_evidence_ids
- irrelevant_evidence_ids
- coverage_required
- minimum_relevance
- max_contradictory_count
```

Recommended:

```text
coverage_required = 1.00
minimum_relevance = 0.75
max_contradictory_count = 0
```

`answer_key.json` must never bind to player-facing UI.

---

# 10. Required C# responsibility separation

Recommended concerns:

```text
CaseData
RuleData
EvidenceData
AnswerKey

EvidenceStateManager
PlayerDecisionState
PerformanceScoreState

FinancialCalculator
TransactionGroupingService
EvidenceEvaluationService
ControlInvestigationService
ResponsibilityEvaluationService
AssistedContinuationService
TraceMapService
```

Critical rule:

```text
PerformanceScoreState
must not directly set
EvidenceState = Confirmed
```

---

# 11. Minimum test cases after applying this correction

## Happy Path

```text
DSRI = 0.9333
SGAI = 1.12
TATA = 0.0273
→ SG&A

Advisory:
1.2 → 4.2
+250%
+3.0
→ Advisory Expense

Northstar:
0.9 + 0.9 + 0.8 = 2.6
61.9%
→ AGR-NST-01

Surface Approval
→ Reviewed

Fact Finding
→ Confirmed

Control Interpretation
→ Confirmed

Proxy Route
→ Non-Compliant / Confirmed

Aggregate Approval
→ CFO + Board / Confirmed

Direct Management Connection
→ Confirmed

Management Override
→ Supported / Confirmed

Responsibility
→ Victor / Confirmed
```

---

## Guess-only test

User chooses:

```text
Management Override = Supported
```

but does not provide sufficient evidence.

Expected:

```text
judgment points may be earned
evidence points low
override_assessment_state = Unresolved
```

Not Confirmed.

---

## Select-all exploit test

User selects all available evidence.

Expected:

```text
Coverage may be high
Relevance decreases
if Relevance < 0.75:
    state != Confirmed
```

---

## Contradictory evidence test

Expected:

```text
contradictory_count > 0
→ confirmation gate fails
```

Performance penalty also applies.

---

## Assisted path test

Wrong Northstar:

```text
transaction_group_state = Assisted
REF-NORTHSTAR-01 unlocked
Control Investigation continues
Final Review displays Assisted
```

Node never silently becomes Confirmed.

---

## Raw evidence no-answer-leak test

Fail if player-facing raw data contains:

```text
bypass = true
Management Override = true
culprit = Victor
Lucas was bypassed
```

---

## Approval aggregation test

Do not aggregate if only:

```text
same vendor
```

Aggregate only when required documented linkage exists.

---

# 12. Priority order for implementation

## Priority 0 — Freeze before coding

- [ ] Use canonical state names from this file.
- [ ] Use only six Evidence State values.
- [ ] Do not use `PartiallyConfirmed`.
- [ ] Treat `Assisted` as Evidence State.
- [ ] Rename financial `cfo` to `cash_flow_from_operations` in implementation.
- [ ] Freeze Evidence IDs.
- [ ] Freeze decision-specific evidence mapping.

## Priority 1 — Rule Engine

- [ ] Implement confirmation gate.
- [ ] Implement Coverage.
- [ ] Implement Relevance.
- [ ] Implement contradictory evidence handling.
- [ ] Implement direct management connection.
- [ ] Implement Management Override prerequisite synthesis.
- [ ] Keep score separate from Evidence State.

## Priority 2 — User Interaction

- [ ] Fact Finding requires source review.
- [ ] Control Interpretation requires evidence.
- [ ] Proxy Compliance requires condition checking.
- [ ] Aggregate Approval requires linkage + aggregation + policy comparison.
- [ ] Override requires prerequisite states + evidence.
- [ ] Responsibility requires comparative evidence.

## Priority 3 — Assisted / Review

- [ ] Implement upstream assisted packets if needed.
- [ ] Assisted nodes remain visible.
- [ ] Retry / Review surfaces unresolved and assisted nodes.
- [ ] Final Review shows evidence quality before score/ending.

## Priority 4 — QA

- [ ] Happy path.
- [ ] Guess-only path.
- [ ] Select-all exploit.
- [ ] Contradictory evidence.
- [ ] Wrong Northstar assisted path.
- [ ] Missing raw audit.
- [ ] Missing route policy.
- [ ] Same vendor but different agreement/purpose.
- [ ] No-answer-leak.
- [ ] `answer_key.json` not player-facing.

---

# 13. Final clarification statement

Các file Week 2–5 cũ được giữ nguyên như record của quá trình thiết kế.

Từ thời điểm implementation, nếu có sự khác nhau giữa các file cũ về:

```text
state name
state transition
evidence classification
confirmation condition
Assisted Continuation
Management Override prerequisite
scoring implementation
UI anti-guess behavior
```

thì sử dụng rule trong:

> **WEEK 2-5 CORRECTION ADDENDUM.md**

File này không thay Product Direction; nó chỉ chuẩn hóa các điểm cần thiết để project có thể được implement và test nhất quán.
