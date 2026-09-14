# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 4 — ASSUMPTIONS, TECHNICAL READINESS & MIDTERM READINESS

## 1. Week 4 Assumptions Carried Forward

- Unity + C#.
- Local JSON.
- Rule-based logic.
- DSRI/SGAI/TATA = screening only.
- Materiality = 1.1 million USD reference.
- Approval policy uses aggregate economic value.
- Northstar 0.9 + 0.9 + 0.8 = 2.6.
- Surface approval can appear complete while audit trail shows a bypassed control.
- Lucas is the Finance Manager bypassed by Victor's override/proxy action.
- Case does not use forged signatures.

---

## 2. Official Data Structure

```text
case_data.json
rules.json
evidence.json
answer_key.json
```

### Technical separation

- `case_data`: facts/transactions;
- `rules`: screening, approval, override-route and aggregation rules;
- `evidence`: surface approval, audit trail, personnel/conflict evidence;
- `answer_key`: internal only.

---

## 3. Technical Route

| Component | Route |
|---|---|
| Engine | Unity |
| Language | C# |
| Storage | Local JSON |
| Logic | Rule-based |
| State | Local game/evidence state |
| Database | No |
| Backend | No |
| API | No |

```text
Local JSON
↓
Deserialize to C# objects
↓
Validation
↓
Financial Logic
↓
Evidence / Control Logic
↓
Game State
↓
UI + Trace Map + Feedback
```

---

## 4. C# Logic Needed

### Financial

- CalculateDSRI
- CalculateSGAI
- CalculateTATA
- CalculatePercentChange
- CalculateTransactionShare

### Transaction

- GroupRelatedTransactions by agreement/economic purpose
- AggregateAmount

### Approval / Control

- ReadSurfaceApprovalSummary
- ReadApprovalAuditTrail
- CheckActualFinanceApprover
- CheckOverrideRouteConditions
- CompareAggregateApprovalRequirement
- BuildManagementOverrideEvidenceState

### Responsibility

- Compare person evidence
- Distinguish actual actor vs required/bypassed approver
- Evaluate authority/direct involvement/conflict/bypass link

### Game

- unlock/fallback
- scoring
- trace logging
- ending

---

## 5. Deployment and Fallback

Primary: **Unity Windows Standalone Build**.

Fallback:

1. run in Unity Editor;
2. keep JSON/C# logic;
3. reduce animation/visual polish;
4. preserve core evidence chain;
5. do not replace with API/database.

---

## 6. Technical Validation Checklist

- [ ] JSON loads correctly.
- [ ] Surface approval summary shows Completed without exposing actor detail too early.
- [ ] Audit trail identifies Victor as override actor.
- [ ] Audit trail has no Lucas approval event.
- [ ] Override route requirements load from `rules.json`.
- [ ] Missing justification/review causes non-compliant route result.
- [ ] Northstar aggregates to 2.6 based on agreement/economic purpose.
- [ ] 2.6 maps to CFO + Board requirement.
- [ ] Lucas displays as bypassed Finance Manager, not co-approver.
- [ ] `answer_key.json` never binds to player UI.
- [ ] Trace Map stores surface impression and later audit finding separately.

---

## 7. Limitations

- Override/proxy route is simulated.
- Case conclusion is educational, not legal/audit determination.
- Game is not a full audit simulation.
- No fake-signature storyline.
- No claim that the case-specific approval policy is a professional standard.

---

## 8. Visible Contribution — Week 4

| Owner | Responsibility | Visible Contribution | Evidence Location | Next Action |
|---|---|---|---|---|
| Phạm Quỳnh Phương | Integration/consistency/midterm readiness | Logic-chain consistency and version control | Week 4 docs + README | Check official midterm checklist |
| Phạm Triệu Tiến Dũng | Financial logic/data verification | DSRI/SGAI/TATA, SG&A, Advisory, Northstar calculations | Logic + sample test | Compare C# outputs |
| Nguyễn Minh Hiền | Rule engine/validation/scoring | Override-route compliance, aggregation, approval comparison, scoring tests | Gameplay + scoring docs | Implement/test C# rules |
| Tôn Khánh Ngọc | Evidence/narrative/explainability | Surface approval, audit trail, Victor/Lucas dossiers, feedback | evidence JSON + gameplay docs | Finalize evidence cards |
| Đinh Thị Minh Khuê | Unity integration | JSON loading, state, 6-tab UI, Trace Map, build | Unity project | Produce working build |

---

## 9. Midterm Readiness

Repo should let evaluator trace:

```text
Week 1 Problem
→ Week 2 Product/MVP
→ Week 3 Input/Evidence
→ Week 4 Formalized Logic/Test
```

The official `../assessment/midterm-checklist.md` must still be opened and checked directly before marking the midterm-readiness item complete.
