# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 4 — PROJECT LOGIC CHAIN

## 1. Week 4 đang làm gì?

Week 4 không tạo lại problem, user, product direction, MVP hoặc input. Week 4 formalize logic từ Week 3 để code/test được.

> **Từ các input/evidence đã chốt, game xử lý chúng bằng logic nào để người chơi đi đến Management Override conclusion và primary responsibility conclusion?**

---

## 2. Project Logic Chain

**Problem → Target User → User Task → Difficulty → Technology Support → Input → Financial / Investigation Logic → Output → User Action**

Trong The Last Heir:

- Problem: Information Integration;
- Target user: sinh viên Tài chính/Kế toán/Ngân hàng/Kinh doanh;
- User task: đánh giá Management Override + primary responsibility;
- Technology: Unity + C#;
- Data: `case_data.json`, `rules.json`, `evidence.json`; `answer_key.json` internal-only;
- Output: conclusion + evidence + Financial Trace Map.

---

## 3. Six-Tab Structure

| Layer | Tab | Purpose |
|---|---|---|
| Layer 1 | Tab 1 Financial Screening | SG&A |
| Layer 1 | Tab 2 Account Drill-down | Advisory Expense |
| Layer 1 | Tab 3 Transaction Tracing | Northstar |
| Layer 2 | Tab 4 Control Investigation | Override/proxy bypass + escalation bypass + Management Override |
| Layer 3 | Tab 5 Responsibility Attribution | Victor vs Lucas/David/Sophia |
| Final | Tab 6 Evidence Integration | Final conclusion |

---

## 4. Input → Logic → Output Mapping

| Input | Logic | Output |
|---|---|---|
| Revenue, Receivables | DSRI | 0.9333; no revenue priority |
| Revenue, SG&A | SGAI | 1.12; review SG&A |
| Income from continuing operations, CFO, Assets | TATA | 0.0273 |
| Materiality 1.1 | Absolute movement cross-check | SG&A/Advisory worth drilling down |
| SG&A breakdown | Change analysis | Advisory +250% |
| Advisory ledger | Group related transactions | Northstar 2.6 / 61.9% |
| Approval summary | Read surface control status | Appears approved |
| Approval audit trail | Compare actual actor/method with required control | Lucas did not approve; Victor used override/proxy |
| Override-route policy | Check justification/review conditions | Victor's use non-compliant |
| 3 related tranches + approval policy | Aggregate to 2.6 and compare approval level | CFO + Board required |
| Override + splitting + authority + conflict evidence | Evidence synthesis | Management Override Supported |
| Personnel evidence | Comparative attribution | Victor primary responsible |

---

## 5. Financial Formula

### DSRI

```text
(21/150)/(18/120)=0.9333
```

### SGAI

```text
(21/150)/(15/120)=1.12
```

### TATA

```text
(11-8)/110=0.0273
```

### Advisory Expense

```text
(4.2-1.2)/1.2=250%
absolute increase=3.0 > materiality 1.1
```

### Northstar

```text
0.9+0.9+0.8=2.6
2.6/4.2=61.9%
```

---

## 6. Control Logic

### Rule A — Surface vs Actual Approval

```text
Surface status = Completed
≠
automatic proof that Lucas approved
```

Audit trail is required to identify actor/method.

### Rule B — Override / Proxy Compliance

```text
override route used
+ justification missing
+ valid reason missing
+ retrospective Finance review missing
→ non-compliant use of override route
```

### Rule C — Related Transaction Aggregation

```text
same vendor
+ same agreement
+ same economic purpose
+ same initiator supports linkage
→ aggregate transaction group
```

### Rule D — Approval Escalation

```text
aggregate Northstar = 2.6 > 1.0
→ CFO + Board required
```

### Rule E — Management Override Assessment

Không kết luận từ một field đơn lẻ.

```text
non-compliant override route
+ Lucas bypassed
+ transaction splitting / escalation bypass
+ Victor authority/direct involvement
+ corroborating conflict evidence
→ Management Override Supported
```

---

## 7. Responsibility Attribution

### Victor

- initiates all Northstar tranches;
- signs agreement;
- Department Head actor;
- override/proxy actor;
- direct link to control bypass;
- conflict evidence.

### Lucas

- Finance Manager required by policy;
- no actual approval event in audit trail;
- bypassed control participant;
- no evidence of override activation, agreement signature or conflict.

### David / Sophia

Contextual/process relevance but weaker direct evidence.

### Conclusion Rule

```text
authority
+ direct action
+ transaction connection
+ control-bypass action
+ conflict
+ corroboration
→ comparative primary responsibility
```

Victor has the strongest evidence set.

---

## 8. Explainability

Example:

> Approval Summary ban đầu cho thấy cả Department Head và Finance Approval đều Completed, vì vậy giao dịch nhìn bề mặt có vẻ phù hợp. Audit trail sau đó cho thấy Finance step không được Lucas thực hiện mà được hoàn tất bằng management override/proxy route do Victor kích hoạt, trong khi required justification và retrospective Finance review đều thiếu. Đồng thời ba khoản Northstar thuộc cùng agreement/economic purpose có tổng 2.6 triệu USD, vượt ngưỡng cần CFO + Board. Kết hợp với evidence về Victor's authority, transaction initiation, agreement signature và conflict, evidence set hỗ trợ Management Override và quy Victor là primary responsible individual.

---

## 9. Scope Control

Không:

- full Beneish;
- fake-signature/forgery storyline;
- SOX 404 scoring;
- Fraud Triangle culprit score;
- database/backend/API;
- ratio tự động kết luận fraud/Override.
