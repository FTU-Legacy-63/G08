# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — UNITY DATA BINDING NOTE

**Primary Owner:** Đinh Thị Minh Khuê  
**Logic Reviewer:** Nguyễn Minh Hiền  
**Integration Reviewer:** Phạm Quỳnh Phương

## 1. Local Data Load

```text
Local JSON
↓
JSON Loader
↓
C# Serializable Classes
↓
Validation
↓
Evidence State + Gameplay State
↓
Rule Logic
↓
UI
```

Files:

`case_data.json`  
`rules.json`  
`evidence.json`  
`answer_key.json` — internal only

---

## 2. C# Object Groups

```text
CaseData
FinancialPeriodData
SgaSubaccount
TransactionRecord
PersonnelRecord

RuleData
ScreeningRules
ApprovalPolicyRule
ProxyRouteRule
AggregationRule
AssistedContinuationRule

EvidenceData
ApprovalSummary
RawApprovalAuditRecord
AgreementEvidence
ResponsibilityEvidence
ConflictEvidence
AssistedReferralPacket

EvidenceState
PlayerDecisionState
PerformanceScoreState

AnswerKey
EvidenceRelevanceMap
```

`EvidenceState` và `PerformanceScoreState` phải là separate objects / concerns.

---

## 3. UI Binding

| Screen / Panel | Data | State |
|---|---|---|
| Financial Screening | financials + screening rules | focus-area state |
| SG&A Drill-down | breakdown + materiality | subaccount state |
| Transaction Tracing | Advisory ledger | transaction-group state |
| Assisted Referral | referral packet if required | assisted state |
| Surface Approval | surface approval records | reviewed only |
| Control Evidence Workspace | approval policy + baseline personnel + raw audit trail | sources reviewed |
| Fact Finding | raw evidence + selected fact | factual-finding state |
| Control Interpretation | fact + supporting evidence selection | interpretation state |
| Proxy Compliance | route policy + supporting records | compliance state |
| Aggregate Approval | related transactions + approval policy | escalation state |
| Management Override | confirmed Evidence States | override assessment |
| Responsibility | responsibility/conflict evidence | responsible individual |
| Final Review | Evidence State + player history | Trace Map + feedback |
| Retry / Review | unresolved/assisted/contradicted nodes | review state |

---

## 4. No-Answer-Leak Rules

1. Surface Approval must not expose actor.
2. Surface Approval is read-only and not a scored pseudo-choice.
3. Raw Audit Trail must not contain `bypass=true`.
4. Player-facing completion label must use neutral wording such as `Proxy Route`.
5. Raw Audit Trail must not use `Management Override` as a route name.
6. Baseline Personnel must not reveal final responsibility or conflict conclusion.
7. Conflict/detailed involvement evidence unlocks at Responsibility stage.
8. `answer_key.json` must never bind to player-facing views.
9. Feedback may confirm bypass only after user submits control interpretation.
10. Lucas must not appear as actual approver unless a raw record actually contains such an event.

---

## 5. Evidence-Supported Judgment Binding

Major judgment component should bind:

```text
SelectedJudgment
+
SelectedSupportingEvidenceIds
+
EvidenceRelevanceMap
```

Full reasoning credit requires both judgment and evidence quality.

Selecting all evidence must not automatically produce full credit.

---

## 6. Evidence State

Recommended enum:

```text
Unreviewed
Reviewed
Confirmed
Unresolved
Assisted
Contradicted
```

Trace Map displays Evidence State.

Management Override synthesis reads Evidence State.

Performance Score must not overwrite Evidence State.

---

## 7. Assisted Continuation

If wrong transaction selection would block downstream data:

```text
if TransactionState == Unresolved:
    unlock MinimalReferralPacket
    TransactionState = Assisted
    continue ControlInvestigation
```

This is conceptual Week 3 logic; exact implementation belongs to Week 4.

Assisted state must remain visible in Trace Map / review.

---

## 8. Legacy-System Narrative Binding

No automatic UI alert should appear merely because raw audit fields are missing/irregular.

The fictional system records events but the investigation logic performs retrospective cross-reference.

Do not implement an unexplained real-time compliance warning that contradicts the storyline assumption.

---

## 9. Technical Safety / Consistency Checklist

[ ] Surface summary UI hides actors.  
[ ] Surface summary is not scored.  
[ ] Raw Audit uses neutral facts only.  
[ ] `answer_key.json` is never player-facing.  
[ ] Evidence State is separate from Performance Score.  
[ ] Supporting-evidence selection is stored separately from judgment.  
[ ] Select-all evidence does not yield automatic full credit.  
[ ] Assisted Referral Packet can keep downstream flow alive.  
[ ] Assisted node does not become Confirmed automatically.  
[ ] Conflict evidence unlock timing is respected.  
[ ] Lucas is not shown as co-approver.  
[ ] No fake signature/forgery data exists.  
[ ] Retry / Review can surface unresolved/assisted nodes.

Do not mark these items complete until verified in actual Unity implementation.
