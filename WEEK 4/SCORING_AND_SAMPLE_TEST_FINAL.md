# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 4 — SCORING, EXPLAINABILITY & SAMPLE LOGIC TEST

## 1. Scoring Principle

Scoring hỗ trợ gameplay.

**Scoring không quyết định case conclusion.**

Hai hệ thống:

```text
Evidence State
→ Case reasoning / conclusion

Performance Score
→ User performance / ending
```

Management Override không được xác định bằng:

```text
score >= threshold
```

---

## 2. Total Scoring

| Tab | Điểm |
|---|---:|
| Tab 1 — Financial Screening | 10 |
| Tab 2 — Account Drill-down | 10 |
| Tab 3 — Transaction Tracing | 10 |
| Tab 4 — Control Investigation & Management Override | 30 |
| Tab 5 — Responsibility Attribution | 25 |
| Tab 6 — Final Review | 15 |
| **Total** | **100** |

Surface Approval Observation = **0 điểm**.

---

## 3. Detailed Scoring

### Tab 1 — 10

| Component | Điểm |
|---|---:|
| DSRI/SGAI/TATA calculation | 3 |
| SG&A judgment | 4 |
| Calculation/rule support for focus judgment | 3 |

### Tab 2 — 10

| Component | Điểm |
|---|---:|
| Advisory calculation | 3 |
| Advisory judgment | 4 |
| Materiality/change support | 3 |

### Tab 3 — 10

| Component | Điểm |
|---|---:|
| Northstar total/share | 3 |
| Transaction-group judgment | 4 |
| Linkage evidence | 3 |

### Tab 4 — 30

| Component | Điểm |
|---|---:|
| Cross-source factual finding | 5 |
| Control interpretation + supporting evidence | 5 |
| Proxy Route compliance | 5 |
| Aggregate approval + linkage reasoning | 5 |
| Management Override synthesis + evidence | 10 |

### Tab 5 — 25

| Component | Điểm |
|---|---:|
| Victor = primary responsible | 8 |
| Authority/direct action evidence | 6 |
| Transaction/control connection evidence | 5 |
| Conflict/corroboration | 3 |
| Correct Lucas/David/Sophia distinction | 3 |

### Tab 6 — 15

| Component | Điểm |
|---|---:|
| Final evidence coverage/relevance | 10 |
| Final reasoning consistency | 5 |

---

## 4. Evidence Quality Formula

Evidence-selection components use both **Coverage** and **Relevance**.

### 4.1 Coverage

```text
Coverage =
required evidence groups satisfied
/
total required evidence groups
```

Range: `0–1`.

### 4.2 Relevance

```text
Relevance =
selected relevant evidence
/
total selected evidence
```

Where:

```text
relevant =
required_relevant + additional_relevant
```

Range: `0–1`.

If nothing is selected:

```text
Relevance = 0
```

### 4.3 Evidence Quality

```text
EvidenceQuality =
0.70 × Coverage
+
0.30 × Relevance
```

### 4.4 Contradictory Evidence Penalty

For each selected `contradictory` item:

```text
-25% of that evidence component's maximum points
```

Penalty is capped so the component cannot go below 0.

### 4.5 Final Component Score

```text
EvidenceComponentScore =
max(
    0,
    ComponentMax × EvidenceQuality
    - ContradictoryPenalty
)
```

Round only at display stage.

### Why this formula?

- Missing required evidence lowers Coverage strongly.
- Selecting all evidence lowers Relevance.
- Additional relevant evidence is not unfairly punished.
- Contradictory evidence receives a stronger penalty.

---

## 5. Anti-Guess Principle

A correct single-select judgment does not automatically receive full reasoning credit.

Example:

```text
User guesses:
Management Override = Supported
```

but fails to select relevant evidence.

Result:

```text
judgment points may be earned
evidence-quality points remain low
Evidence State may remain unresolved if required reasoning prerequisites are not confirmed
```

Thus:

> **Guessing the right answer is not equivalent to building the right evidence chain.**

---

## 6. Evidence State and Score Interaction

Example:

### Case A — Correct judgment + correct support

```text
Evidence State = confirmed
Performance Score = high
```

### Case B — Correct judgment + weak/irrelevant support

```text
Evidence State = unresolved or partially confirmed depending on prerequisite rule
Performance Score = partial
```

### Case C — Wrong judgment + later Assisted Continuation

```text
Evidence State = assisted
Performance Score = reduced
Downstream progression = allowed
```

Score never overwrites Evidence State.

---

## 7. Ending

| Score | Ending |
|---:|---|
| 95–100 | Succession Confirmed |
| 75–94 | Conditional Succession |
| 50–74 | Delayed Succession |
| 0–49 | Succession Denied |

These are gameplay endings only.

They do not classify:

- fraud;
- audit opinion;
- Management Override;
- legal responsibility.

---

## 8. Explainability Examples

### Tab 4 — After Fact Finding

> Finance step is recorded as Completed, but no Finance Manager approver is recorded. The Proxy Route was initiated by Victor.

This is a factual finding.

### Tab 4 — After Control Interpretation

> Because the policy requires Finance Manager approval and the raw records do not show a Finance Manager approver, the evidence supports a possible Finance approval bypass. This interpretation is confirmed only after the user links the relevant policy, personnel role and raw audit evidence.

### Tab 4 — After Proxy Compliance

> The route does not satisfy the simulated Aster policy because documented justification, a valid reason code and retrospective Finance Manager review are absent.

### Tab 4 — Management Override

> Management Override is supported by the combined confirmed evidence states: Finance-control circumvention, non-compliant Proxy Route use, approval-escalation issue and direct management connection. The conclusion is not generated from the gameplay score.

### Tab 5

> Victor has the strongest direct evidence set. Lucas is the required Finance role but has no recorded Northstar approval event. David is relevant to escalation as CFO, while Sophia is relevant to monitoring context; neither has direct override-action evidence in the current case.

---

## 9. Perfect-Path Logic Test

| Step | Expected | Manual | Status |
|---|---|---|---|
| DSRI | 0.9333 | 0.9333 | Pass |
| SGAI | 1.12 | 1.12 | Pass |
| TATA | 0.0273 | 0.0273 | Pass |
| Advisory % | 250% | 250% | Pass |
| Northstar total | 2.6 | 2.6 | Pass |
| Northstar share | 61.9% | 61.9% | Pass |
| Surface Approval | read-only observation | reviewed | Pass |
| Cross-source fact finding | no recorded Finance approver; Proxy Route initiated by Victor | match | Pass |
| Control interpretation | possible Finance approval bypass | match | Pass |
| Proxy Route compliance | non-compliant | match | Pass |
| Aggregate approval | CFO + Board required | match | Pass |
| Management Override | Supported from Evidence State | manual chain supports | Pass |
| Primary responsibility | Victor | manual chain supports | Pass |

---

## 10. Edge / Exploit Tests

| Scenario | Expected behavior |
|---|---|
| Surface Approval says Completed but Raw Audit missing | Evidence incomplete; no actor/control conclusion |
| Raw Audit shows Lucas direct approval | Finance-bypass interpretation should not confirm |
| Proxy Route satisfies all required conditions | Do not confirm route non-compliance |
| Same vendor but different agreement/purpose | Do not auto-aggregate |
| Missing agreement ID | Do not auto-aggregate |
| Missing conflict evidence | Unknown, not false |
| Calculation wrong but judgment/evidence strong | Lose calculation points; reasoning node may still progress |
| Correct single-select by guessing but poor evidence | Partial score; no automatic full reasoning credit |
| User selects all evidence | Relevance falls; no automatic full score |
| User selects contradictory evidence | Apply contradiction penalty |
| Wrong Northstar group | `REF-NORTHSTAR-01`; transaction node = assisted |
| Assisted node reaches Final Review | Show `[ASSISTED]`; do not convert to Confirmed |
| Total score high but required Evidence State missing | Case conclusion does not change to supported solely from score |
| `answer_key.json` visible in UI | Technical test fail |
| Raw audit UI shows `Management Override` before reasoning | No-answer-leak test fail |
