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
- Surface Approval is read-only observation.
- Raw Audit Trail contains facts, not bypass/Management Override conclusion.
- Special Proxy Completion Route is simulated Aster policy.
- Aster legacy environment logs events but does not run full real-time compliance detection.
- Lucas is the required Finance role with no recorded Northstar approval event.
- Monitoring responsibility is a separate evidence question.
- David = CFO; Sophia = Internal Control Manager.
- Case does not use forged signatures.
- Evidence State is separate from Performance Score.
- Assisted Continuation may keep downstream learning flow available.

---

## 2. Official Data Structure

```text
case_data.json
rules.json
evidence.json
answer_key.json
```

### Technical separation

**case_data**  
financial/transaction facts + case context.

**rules**  
screening, approval, Proxy Route, aggregation, Evidence State, evidence selection and assisted continuation rules.

**evidence**  
Surface Approval, Raw Audit Trail, baseline personnel, responsibility/conflict evidence and assisted referral packet.

**answer_key**  
internal-only expected findings, evidence groups and synthesis prerequisites.

---

## 3. Technical Route

| Component | Route |
|---|---|
| Engine | Unity |
| Language | C# |
| Storage | Local JSON |
| Logic | Rule-based |
| State | Evidence State + Gameplay/Performance State |
| Database | No |
| Backend | No |
| API | No |

```text
Local JSON
↓
Deserialize to C# Objects
↓
Validation
↓
Financial / Transaction Logic
↓
Evidence State Logic
↓
Gameplay / Score Logic
↓
UI + Trace Map + Feedback
```

Evidence State and Performance Score must remain separate.

---

## 4. C# Logic Needed

### Financial

- `CalculateDSRI`
- `CalculateSGAI`
- `CalculateTATA`
- `CalculatePercentChange`
- `CalculateTransactionShare`

### Transaction

- `GroupRelatedTransactions`
- `AggregateAmount`
- `LoadAssistedReferralPacket`

### Control Evidence

- `ReadSurfaceApprovalSummary`
- `LoadApprovalPolicy`
- `LoadBaselinePersonnel`
- `ReadRawApprovalAuditTrail`
- `BuildFactualControlFinding`
- `EvaluateControlInterpretation`
- `CheckProxyRouteConditions`
- `CompareAggregateApprovalRequirement`
- `BuildManagementOverrideEvidenceState`

### Evidence Selection

- `CalculateEvidenceCoverage`
- `CalculateEvidenceRelevance`
- `ApplyContradictoryEvidencePenalty`
- `ValidateRequiredEvidenceGroups`

### Responsibility

- `ComparePersonEvidence`
- `DistinguishRequiredRoleFromActualActor`
- `EvaluateDirectAction`
- `EvaluateTransactionConnection`
- `EvaluateConflictCorroboration`
- `HandleMonitoringResponsibilityAsSeparateEvidenceQuestion`

### State / Game

- `UpdateEvidenceState`
- `ApplyAssistedContinuation`
- `UpdatePerformanceScore`
- `WriteTraceNode`
- `BuildRetryReviewState`
- `CalculateEnding`

---

## 5. State Separation

Recommended conceptual objects:

```text
EvidenceState
PlayerDecisionState
PerformanceScoreState
```

Example:

```text
TransactionNode:
    evidence_state = Assisted
    player_choice = Bright Path
    performance_points = partial
```

No function should change:

```text
EvidenceState = Confirmed
```

merely because total score is high.

---

## 6. Legacy-System Technical Assumption

The fictional approval environment:

```text
records_workflow_events = true
retains_historical_logs = true
full_real_time_compliance_detection = false
automatic_policy_exception_alerting = false
```

Unity should not display an unexplained automatic historical warning that contradicts this assumption.

Investigation performs retrospective cross-reference.

---

## 7. Deployment and Fallback

Primary target:

**Unity Windows Standalone Build**

Fallback:

1. run in Unity Editor;
2. keep JSON/C# logic;
3. reduce animation/visual polish;
4. preserve core evidence chain;
5. preserve Evidence State;
6. preserve Assisted Continuation;
7. do not replace with API/database.

---

## 8. Technical Validation Checklist

### Data / Loading

- [ ] `case_data.json` loads correctly.
- [ ] `rules.json` loads correctly.
- [ ] `evidence.json` loads correctly.
- [ ] `answer_key.json` is internal only.
- [ ] All evidence/person IDs resolve.
- [ ] Assisted referral packet ID resolves.

### No-Answer-Leak

- [ ] Surface Approval hides actors.
- [ ] Surface Approval is not scored.
- [ ] Raw Audit uses neutral `Proxy Route` wording.
- [ ] Raw Audit does not display `bypass=true`.
- [ ] Raw Audit does not display `Management Override`.
- [ ] Baseline Personnel does not reveal final responsibility/conflict too early.
- [ ] Conflict evidence unlocks at Responsibility stage.

### Logic

- [ ] Policy + Personnel + Raw Audit can produce factual finding.
- [ ] Control interpretation requires supporting evidence for full credit.
- [ ] Missing Proxy Route requirements create non-compliant result.
- [ ] Northstar aggregates to 2.6 based on linkage.
- [ ] 2.6 maps to CFO + Board.
- [ ] Management Override reads Evidence State, not total score.
- [ ] David displays as CFO.
- [ ] Sophia displays as monitoring context, not automatically failed control.
- [ ] Lucas displays as required Finance role with no recorded approval event.

### Evidence Selection / Exploit Tests

- [ ] Required evidence groups validate.
- [ ] Selecting all evidence does not produce automatic full score.
- [ ] Irrelevant evidence lowers relevance.
- [ ] Contradictory evidence applies penalty.
- [ ] Correct single-select without evidence does not receive full reasoning credit.

### Assisted Continuation

- [ ] Wrong transaction selection can trigger `REF-NORTHSTAR-01`.
- [ ] Transaction node becomes `assisted`.
- [ ] Downstream Control Investigation continues.
- [ ] Assisted node never auto-becomes Confirmed.
- [ ] Final Review displays Assisted state.

### Interface / Build

- [ ] Six-tab navigation works.
- [ ] Trace Map stores fact and interpretation as separate nodes.
- [ ] Retry / Review displays unresolved/assisted nodes.
- [ ] At least one full happy path runs.
- [ ] At least one assisted path runs.
- [ ] Windows Build or Unity Editor demo is available.

Do not tick items without actual implementation evidence.

---

## 9. Limitations

- Proxy Route and approval policy are simulated.
- Legacy-system behavior is simulated.
- Case conclusion is educational, not legal/audit determination.
- Game is not a full audit simulation.
- No fake-signature storyline.
- No claim that case-specific Aster rules are professional standards.
- Fixed-case MVP does not provide high replayability.
- Documentation is not proof that Unity implementation already works.

---

## 10. Visible Contribution — Week 4

| Owner | Responsibility | Visible Contribution | Next Action |
|---|---|---|---|
| Phạm Quỳnh Phương | Integration/consistency/midterm readiness | Cross-week logic, state/score separation, QA | Verify end-to-end consistency |
| Phạm Triệu Tiến Dũng | Financial/data verification | DSRI/SGAI/TATA, SG&A, Advisory, Northstar checks | Compare UI/C# numbers |
| Nguyễn Minh Hiền | Rule engine/validation/scoring/state | Evidence State, evidence matching, assisted continuation, scoring | Implement/test C# rules |
| Tôn Khánh Ngọc | Evidence/narrative/explainability | Neutral raw evidence wording, personnel/context, legacy-system assumption | Finalize evidence cards/feedback |
| Đinh Thị Minh Khuê | Unity integration | JSON load, state binding, 6-tab UI, Trace Map, build | Produce working flow evidence |

---

## 11. Midterm Readiness

Evaluator should be able to trace:

```text
Week 1 Problem
→ Week 2 Product/MVP
→ Week 3 Inputs/Evidence/State
→ Week 4 Formalized Logic/Scoring/Test
→ Actual Unity evidence where available
```

The official midterm checklist must still be checked directly before marking readiness complete.
