# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — ASSUMPTIONS & LIMITATIONS

## 1. Financial Assumptions

- Tất cả số tiền dùng triệu USD.
- Aster Holdings là doanh nghiệp phi tài chính giả lập.
- DSRI/SGAI/TATA chỉ dùng cho screening.
- Không tạo reduced M-Score.
- TATA prototype = `(Income from Continuing Operations - CFO) / Total Assets`.
- Case-specific screening rules là pedagogical rules.

---

## 2. Materiality Assumption

```text
materiality_threshold = 1.1 triệu USD
```

Materiality chỉ là reference về mức độ đáng chú ý, không phải approval threshold hoặc formal audit materiality calculation.

---

## 3. Approval Policy Assumption

| Aggregate economic value | Required approval |
|---|---|
| `<=0.5` | Department Head |
| `>0.5 and <=1.0` | Department Head + Finance Manager |
| `>1.0` | CFO + Board |

---

## 4. Override / Proxy Route Assumption

Aster Holdings có một simulated **management override / proxy route** trong hệ thống approval, chỉ được phép dùng trong tình huống đặc biệt.

Để route này hợp lệ, case policy yêu cầu:

1. documented justification;
2. reason code hợp lệ;
3. retrospective Finance Manager review.

Trong Northstar:

- surface approval summary hiển thị Finance step = Completed;
- audit trail cho thấy Victor kích hoạt override/proxy route;
- Lucas không thực hiện Finance approval;
- justification bắt buộc không có;
- retrospective Finance review không có.

Case không giả định Victor giả chữ ký Lucas.

---

## 5. Transaction Splitting Assumption

Ba Northstar tranches:

```text
0.9 + 0.9 + 0.8 = 2.6
```

có cùng:

- vendor;
- agreement ID;
- economic purpose;
- transaction initiator.

Do đó game cho phép đánh giá chúng như một aggregate economic transaction 2.6 triệu USD.

Mức này >1.0 nên yêu cầu CFO + Board.

---

## 6. Management Override Assumption

Không dùng một rule đơn giản kiểu:

```text
Finance step bypassed = automatically Override
```

hoặc:

```text
2.6 > 1.0 = automatically Override
```

Kết luận phải dựa trên evidence set:

```text
unauthorized / unsupported override-route use
+ transaction splitting / escalation bypass
+ Victor authority and direct participation
+ agreement/transaction connection
+ corroborating conflict evidence
→ Management Override supported
```

---

## 7. Responsibility Attribution Assumption

Primary responsibility dựa trên:

- authority;
- transaction initiation;
- agreement signature;
- direct approval activity;
- override-route action;
- conflict of interest;
- link to control circumvention;
- corroboration.

Lucas là Finance Manager bị bypass. Không có evidence cho thấy Lucas thực hiện Northstar approval hoặc kích hoạt override route.

Fraud Triangle chỉ hỗ trợ risk context.

---

## 8. Technical Assumption

```text
Local JSON
↓
Unity
↓
C# Objects
↓
Validation
↓
Rule-Based Logic
↓
Game/Evidence State
↓
Output
```

Không database/backend/API trong MVP.

---

## 9. Limitations

- Simulated policy và override route không đại diện quy trình của một doanh nghiệp thật.
- Management Override conclusion chỉ áp dụng trong fictional case.
- Case không phải full audit simulation hoặc legal fraud determination.
- Approval audit trail được thiết kế phục vụ mục tiêu học Information Integration.
