# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 4 — PROJECT LOGIC CHAIN

## 1. Week 4 đang làm gì?

Week 4 không tạo lại problem, user, product direction, MVP hoặc input.

Week 4 formalize logic từ Week 3 để có thể code, test và giải thích được.

Câu hỏi trung tâm:

> **Từ các input, raw evidence, simulated rules và Evidence State đã chốt ở Week 3, game xử lý chúng bằng logic nào để người chơi đi đến Management Override conclusion và primary responsibility conclusion mà không dựa vào score hoặc một single field?**

---

## 2. Project Logic Chain

**Problem → Target User → User Task → Difficulty → Technology Support → Input → Reasoning / Evidence State → Output → User Action**

Trong The Last Heir:

- Problem: Information Integration;
- Target user: sinh viên Tài chính/Kế toán/Ngân hàng/Kinh doanh;
- User task: đánh giá Management Override + primary responsibility;
- Technology: Unity + C#;
- Data: `case_data.json`, `rules.json`, `evidence.json`; `answer_key.json` internal-only;
- Reasoning state: Evidence State tách khỏi Performance Score;
- Output: conclusion + supporting evidence + Financial Trace Map.

---

## 3. Six-Tab Structure

| Layer | Tab | Purpose |
|---|---|---|
| Layer 1 | Tab 1 — Financial Screening | Xác định SG&A |
| Layer 1 | Tab 2 — Account Drill-down | Xác định Advisory Expense |
| Layer 1 | Tab 3 — Transaction Tracing | Xác định Northstar |
| Layer 2 | Tab 4 — Control Investigation | Cross-source fact finding → interpretation → compliance/escalation → Management Override synthesis |
| Layer 3 | Tab 5 — Responsibility Attribution | So sánh Victor/Lucas/David/Sophia |
| Final | Tab 6 — Evidence Integration | Final evidence-based conclusion |

**Layer ≠ Tab.**  
Layer là knowledge structure; Tab là interaction structure.

---

## 4. Input → Logic → Output Mapping

| Input | Logic | Output |
|---|---|---|
| Revenue, Receivables | DSRI | 0.9333; no revenue priority |
| Revenue, SG&A | SGAI | 1.12; review SG&A |
| Income from continuing operations, CFO, Assets | TATA | 0.0273 |
| Materiality reference 1.1 | Absolute movement cross-check | SG&A/Advisory worth drilling down |
| SG&A breakdown | Change analysis | Advisory +250% |
| Advisory ledger | Group related transactions | Northstar 2.6 / 61.9% |
| Surface Approval Summary | Read-only observation | Surface status reviewed |
| Approval Policy + Personnel + Raw Audit Trail | Cross-source fact finding | Finance step Completed, no recorded Finance approver; Proxy Route initiated by Victor |
| Factual finding + relevant evidence | Control interpretation | Possible Finance approval bypass |
| Proxy Route policy + raw records | Compliance check | Non-compliant route use |
| 3 related tranches + approval policy | Aggregate and compare approval level | CFO + Board required |
| Confirmed Layer 2 evidence states | Evidence synthesis | Management Override Supported |
| Responsibility evidence | Comparative attribution | Victor primary responsible |
| All confirmed/assisted/unresolved nodes | Integration | Final conclusion + Trace Map |

---

## 5. Financial Formula

### DSRI

```text
(21/150)/(18/120) = 0.9333
```

### SGAI

```text
(21/150)/(15/120) = 1.12
```

### TATA

```text
(11-8)/110 = 0.0273
```

### Advisory Expense

```text
(4.2-1.2)/1.2 = 250%
absolute increase = 3.0 > materiality reference 1.1
```

### Northstar

```text
0.9 + 0.9 + 0.8 = 2.6
2.6 / 4.2 = 61.9%
```

Financial outputs are screening/tracing evidence, not fraud or Override conclusions.

---

## 6. Evidence State

Week 3 defines:

```text
unreviewed
reviewed
confirmed
unresolved
assisted
contradicted
```

### Meaning

| State | Meaning |
|---|---|
| `unreviewed` | User chưa xem/đánh giá |
| `reviewed` | Evidence đã xem nhưng chưa đủ để confirm node |
| `confirmed` | Evidence + reasoning đủ để confirm node |
| `unresolved` | User chưa xác định đúng node |
| `assisted` | System cung cấp minimum correct-path information để downstream learning tiếp tục |
| `contradicted` | User conclusion mâu thuẫn với confirmed evidence |

Evidence State phục vụ:

- Management Override synthesis;
- Trace Map;
- Final Review;
- Retry / Review.

Evidence State không bị Performance Score ghi đè.

---

## 7. Control Logic

### Rule A — Surface Approval Is Observation, Not Judgment

Surface screen:

```text
Department Head Approval = Completed
Finance Approval = Completed
Overall Status = Approved
```

System action:

```text
surface_approval_state = reviewed
```

Không có scored pseudo-choice “Looks complete?” ở đây.

`Completed` không chứng minh actual actor hoặc control effectiveness.

---

### Rule B — Cross-Source Fact Finding

User phải cross-reference:

```text
Approval Policy
+
Personnel Directory
+
Raw Approval Audit Trail
```

Raw Audit chỉ hiển thị neutral facts:

```text
Required role = Finance Manager
Status = Completed
Completion type = Proxy Route
Recorded approver = null
Route initiated by = Victor
```

Expected factual finding:

> **Finance step is recorded as Completed, but no Finance Manager approver is recorded; the Proxy Route was initiated by Victor.**

Đây là Fact, chưa phải Management Override.

---

### Rule C — Evidence-Supported Control Interpretation

User chọn:

```text
Control interpretation
+
Supporting evidence
```

Expected interpretation:

> **Finance approval control may have been bypassed.**

Full reasoning credit yêu cầu:

1. correct judgment;
2. required evidence coverage;
3. acceptable evidence relevance.

Correct single-select answer alone không đủ full reasoning credit.

---

### Rule D — Proxy Route Compliance

Simulated Aster policy:

```text
Proxy Route
requires:
- documented justification
- valid reason code
- retrospective Finance Manager review
```

Northstar raw records:

```text
all three required supports absent
```

Expected:

> **Proxy Route use is non-compliant with simulated Aster policy.**

Không dùng:

```text
Proxy Route used = automatically Management Override
```

---

### Rule E — Related Transaction Aggregation

```text
same agreement
+ same economic purpose
+ vendor match
+ initiator match as supporting linkage
→ related transaction group
```

Same vendor alone không đủ.

Northstar:

```text
0.9 + 0.9 + 0.8 = 2.6
```

---

### Rule F — Approval Escalation

```text
aggregate Northstar = 2.6 > 1.0
→ CFO + Board required
```

Đây là separate control issue.

---

### Rule G — Management Override Synthesis

Management Override conclusion dùng **Evidence State**, không dùng total gameplay score.

Conceptual prerequisite:

```text
finance_control_interpretation = confirmed
AND
proxy_route_compliance = confirmed
AND
aggregate_approval_requirement = confirmed
AND
direct_management_connection = confirmed
→ Management Override Supported
```

`direct_management_connection` có thể được support bởi raw audit actor/route initiator + transaction initiator information đã có trước Tab 5.

Conflict evidence là corroboration mạnh ở Responsibility Attribution, không phải prerequisite bắt buộc để Layer 2 conclusion tồn tại.

---

## 8. Evidence Selection Logic

Week 3 phân loại evidence:

```text
required_relevant
additional_relevant
irrelevant
contradictory
```

### 8.1 Coverage

```text
Coverage =
number of required evidence groups satisfied
/
total required evidence groups
```

### 8.2 Relevance / Precision

```text
Relevance =
number of selected relevant evidence items
/
total selected evidence items
```

Trong đó:

```text
relevant =
required_relevant + additional_relevant
```

### 8.3 Contradictory Evidence

Contradictory evidence làm giảm evidence-quality score mạnh hơn irrelevant evidence.

### 8.4 Principle

> **Selecting all evidence must not guarantee full credit.**

Exact component scoring được định nghĩa trong Scoring document.

---

## 9. Responsibility Attribution

### Victor

Evidence:

- transaction initiator;
- agreement signatory;
- Department Head actor;
- Proxy Route initiator;
- direct control/transaction connection;
- conflict evidence.

### Lucas

Evidence:

- Finance Manager;
- required Finance role under tranche-level policy;
- no recorded Northstar approval event;
- no evidence of Proxy Route initiation;
- no agreement-signature evidence.

Important:

> **Required role ≠ actual actor ≠ primary responsible individual.**

Monitoring responsibility, nếu có, là separate governance question và cần evidence riêng.

### David

David = CFO.

Relevant because aggregate Northstar >1.0 should require CFO + Board.

Current case has no direct Northstar override-action evidence for David.

### Sophia

Sophia = Internal Control Manager / monitoring role.

Current case has no direct Northstar override-action evidence for Sophia.

Không tự suy ra Sophia failed monitoring chỉ từ chức danh.

### Conclusion Rule

```text
authority
+ direct action
+ transaction connection
+ control-circumvention evidence
+ conflict/corroboration
→ comparative primary responsibility
```

Victor has the strongest evidence set.

---

## 10. Assisted Continuation

Wrong reasoning does not create game-over.

Nếu một wrong node làm downstream data unavailable:

```text
node = unresolved
↓
system provides minimum assisted information
↓
node = assisted
↓
downstream investigation continues
```

Ví dụ Tab 3:

```text
wrong transaction group
→ REF-NORTHSTAR-01
→ transaction node = assisted
→ Control Investigation continues
```

Assisted node không trở thành Confirmed và không nhận full reasoning credit.

---

## 11. Legacy-System Story Logic

Aster's fictional legacy approval environment:

```text
can log events
can retain actor/method records
supports retrospective review
does NOT run full real-time compliance detection
does NOT automatically alert every policy exception
```

Succession review triggers retrospective cross-reference.

Therefore:

> **Can log ≠ can automatically detect.**

Điều này giải thích tại sao raw audit data tồn tại nhưng issue chưa tự động được flag trước khi investigation bắt đầu.

---

## 12. Explainability

Correct explainability sequence:

> Surface Approval chỉ cho thấy workflow status và được ghi nhận như observation. Khi người chơi cross-reference Approval Policy, Personnel Directory và Raw Audit Trail, họ xác định factual finding rằng Finance step được ghi Completed nhưng không có recorded Finance Manager approver, trong khi Proxy Route được Victor initiated. Từ factual finding và supporting evidence, người chơi diễn giải possible Finance approval bypass. Route sau đó được kiểm tra với simulated Aster policy và không đáp ứng required conditions. Ba related Northstar tranches có aggregate value 2.6 triệu USD, vượt ngưỡng CFO + Board. Khi các control evidence states này được confirmed cùng direct management connection, evidence supports Management Override. Responsibility Attribution sau đó so sánh direct evidence giữa Victor, Lucas, David và Sophia.

---

## 13. Scope Control

Không:

- full Beneish M-Score;
- fake-signature/forgery storyline;
- SOX 404 scoring;
- Fraud Triangle culprit score;
- database/backend/API;
- ratio tự động kết luận fraud/Override;
- score tự động quyết định case conclusion;
- raw evidence chứa sẵn `bypass=true`;
- random multi-case replay system trong MVP.
