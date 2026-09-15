# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — ASSUMPTIONS & LIMITATIONS

## 1. Financial Assumptions

Tất cả số tiền dùng triệu USD.

Aster Holdings là doanh nghiệp phi tài chính giả lập.

DSRI/SGAI/TATA chỉ dùng cho screening.

Không tạo reduced M-Score.

TATA prototype:

```text
(Income from Continuing Operations - CFO) / Total Assets
```

Case-specific screening rules là pedagogical rules.

---

## 2. Materiality Assumption

```text
materiality_reference = 1.1 triệu USD
```

Materiality chỉ là investigation reference, không phải approval threshold hoặc formal audit materiality calculation.

---

## 3. Approval Policy Assumption

| Aggregate economic value | Required approval |
|---|---|
| `<=0.5` | Department Head |
| `>0.5 and <=1.0` | Department Head + Finance Manager |
| `>1.0` | CFO + Board |

Đây là simulated Aster Holdings internal policy.

---

## 4. Special Proxy Completion Route Assumption

Aster Holdings có một simulated **Special Proxy Completion Route** trong fictional approval environment.

Player-facing UI dùng neutral label `Proxy Route`.

Không dùng `Management Override` trong tên raw route.

Để route hợp lệ, simulated Aster policy yêu cầu:

1. documented justification;
2. valid reason code;
3. retrospective Finance Manager review.

Ba điều kiện này là **case-specific fictional policy**, không phải PCAOB/COSO requirement.

Northstar records cho thấy route được sử dụng nhưng required supporting conditions không hiện diện.

Case không giả định Victor giả chữ ký Lucas.

---

## 5. Legacy Approval System Assumption

Aster sử dụng fictional legacy approval environment có thể:

record workflow event;  
record actor/method;  
retain historical log.

Nhưng MVP system không được giả định có:

full real-time compliance engine;  
automatic policy-exception detection;  
automatic escalation alert.

Do đó:

> **Logging capability does not imply automatic detection capability.**

Succession review tạo trigger để historical records được retrospectively cross-referenced.

Assumption này nhằm giữ storyline causally coherent.

---

## 6. Transaction Aggregation Assumption

Ba Northstar tranches:

```text
0.9 + 0.9 + 0.8 = 2.6
```

có cùng vendor, agreement và economic purpose.

Initiator match là supporting evidence.

Same vendor alone không đủ để auto-aggregate.

---

## 7. Surface Approval Assumption

Surface Approval chỉ hiển thị workflow status:

```text
Department Head = Completed
Finance = Completed
Overall = Approved
```

Surface status không cho biết:

actual Finance approver;  
completion route validity;  
control effectiveness.

Surface screen là observation layer, không phải scored pseudo-choice.

---

## 8. Raw Evidence Assumption

Raw Audit Trail chỉ trình bày facts.

Không được đưa vào player-facing raw evidence:

`Lucas was bypassed`  
`control bypass = true`  
`Management Override = true`  
`culprit = Victor`

Những câu trên là interpretation/conclusion và chỉ xuất hiện sau user reasoning hoặc final synthesis.

---

## 9. Management Override Assumption

Không dùng simple rule:

```text
Finance step irregularity = automatically Override
```

hoặc:

```text
2.6 > 1.0 = automatically Override
```

Conclusion dựa trên multiple confirmed Evidence States.

Conceptual evidence synthesis:

```text
control circumvention evidence
+ non-compliant Proxy Route use
+ escalation issue
+ Victor authority/direct participation
+ transaction/agreement connection
+ corroborating responsibility evidence
→ Management Override Supported
```

Gameplay Score không quyết định conclusion.

---

## 10. Responsibility Attribution Assumption

Primary responsibility dựa trên:

authority;  
direct action;  
transaction initiation;  
agreement signature;  
approval/proxy-route action;  
transaction/control connection;  
conflict evidence;  
corroboration.

Lucas là required Finance role nhưng không có recorded Northstar approval event.

Không có evidence hiện tại cho thấy Lucas kích hoạt Proxy Route.

Việc Lucas có monitoring failure hay không là một **separate governance question** và cần evidence riêng.

Current case không dùng monitoring role để quy primary responsibility.

David relevant vì CFO nằm trong higher approval requirement.

Sophia relevant vì monitoring/control role, nhưng current case không có direct override evidence gắn với Sophia.

Fraud Triangle chỉ là background fraud-risk context.

---

## 11. Evidence Selection Assumption

Major judgment cần supporting evidence để nhận full reasoning credit.

Evidence được phân loại:

required relevant;  
additional relevant;  
irrelevant;  
contradictory.

Selecting all available evidence không được tự động đạt full score.

Detailed scoring formalized ở Week 4.

---

## 12. Assisted Continuation Assumption

Wrong judgment không tạo game-over.

Nếu wrong choice làm mất data cần cho downstream learning task, system có thể cung cấp minimal assisted packet.

Assisted path:

```text
wrong / unresolved node
→ reduced reasoning credit
→ state = assisted
→ minimal required information provided
→ downstream investigation continues
```

Assisted node không được đổi thành confirmed.

---

## 13. Evidence State and Performance Assumption

Evidence State:

```text
unreviewed
reviewed
confirmed
unresolved
assisted
contradicted
```

Performance Score đánh giá user behavior.

Case conclusion dựa trên Evidence State synthesis.

Hai hệ thống phải tách biệt.

---

## 14. Retry / Review Assumption

MVP là một fixed case với intended evidence chain.

Do đó nhóm không claim high replayability.

Sau lần chơi đầu, product có thể dùng **Retry / Review Mode** để user xem lại unresolved/assisted nodes và reasoning gaps.

Randomized/multi-case replay là future extension.

---

## 15. Technical Assumption

```text
Local JSON
↓
Unity
↓
C# Objects
↓
Validation
↓
Evidence State + Gameplay State
↓
Rule-Based Logic
↓
UI / Trace Map / Feedback
```

Không database/backend/API trong MVP.

---

## 16. Limitations

Simulated policy, thresholds, Proxy Route và legacy-system behavior không đại diện quy trình của một doanh nghiệp thật.

Management Override conclusion chỉ áp dụng trong fictional case.

Case không phải full audit simulation hoặc legal fraud determination.

Fraud Triangle không được operationalized.

Approval audit trail được thiết kế cho Information Integration learning goal.

Working Unity behavior phải được xác nhận bằng actual implementation evidence; documentation không được xem là proof rằng build đã chạy.
