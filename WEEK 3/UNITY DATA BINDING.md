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
Game/Evidence State
↓
UI
```

Files:

- `case_data.json`
- `rules.json`
- `evidence.json`
- `answer_key.json` — internal only

---

## 2. C# Object Groups

```text
CaseData
FinancialPeriodData
SgaSubaccount
TransactionRecord

RuleData
ScreeningRules
ApprovalPolicyRule
OverrideRouteRule
AggregationRule

EvidenceData
ApprovalSummary
ApprovalAuditEvent
AgreementEvidence
PersonnelRecord
ConflictEvidence

AnswerKey
```

---

## 3. UI Binding

| Screen | Data | State |
|---|---|---|
| Financial Screening | financials + screening rules | focus area |
| SG&A Drill-down | breakdown + materiality | subaccount |
| Transaction Tracing | Advisory ledger | transaction group |
| Approval Summary | surface approval records | initial control impression |
| Control Investigation | audit trail + override policy + approval policy | override assessment + evidence IDs |
| Responsibility | personnel + conflict/involvement evidence | responsible individual |
| Final Review | all unlocked evidence + player state | Trace Map + feedback |

---

## 4. Technical Safety / Consistency

- Approval summary UI must not expose audit trail before unlock.
- `answer_key.json` must never bind to player-facing views.
- Lucas must not appear as an actual approver in audit-trail actor data.
- Surface `Finance Approval = Completed` is a status, not proof that Lucas acted.
- Victor's override/proxy action must be represented by audit event fields, not by fake signature data.
