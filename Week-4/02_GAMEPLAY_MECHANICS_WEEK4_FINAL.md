# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 4 — GAMEPLAY MECHANICS & RULES

## 1. Vai trò của 6 Tab

Sáu tab là cách tổ chức interaction cho core flow đã chốt ở Week 2–3. Chúng không tạo thêm product pattern hoặc learning objective mới.

```text
Tab 1  Financial Screening
Tab 2  Account Drill-down
Tab 3  Transaction Tracing
Tab 4  Control Investigation
Tab 5  Responsibility Attribution
Tab 6  Final Review
```

Ở mỗi tab, người chơi:

1. xem information/evidence đang được mở;
2. thực hiện calculation nếu cần;
3. đưa ra judgment;
4. chọn supporting evidence khi phù hợp;
5. Submit;
6. nhận feedback;
7. hệ thống ghi decision vào Financial Trace Map;
8. chuyển sang tab tiếp theo.

Mỗi tab Submit một lần trong MVP.

---

## 2. Nguyên tắc Unlock

Week 4 sử dụng nguyên tắc:

> **Investigative judgment quyết định việc mở evidence chính; calculation chủ yếu dùng để kiểm tra financial understanding và chấm điểm.**

Lý do:

- core problem là Information Integration;
- financial calculation chỉ hỗ trợ narrowing/tracing;
- một lỗi arithmetic nhỏ không nên phá toàn bộ investigation chain.

Nếu judgment sai, game vẫn cho phép tiếp tục bằng fallback information ít chi tiết hơn.

---

## 3. Tab 1 — Financial Screening — 10 điểm

### Mục tiêu

Dùng selected Beneish indicators để xác định **khu vực cần điều tra**, không kết luận fraud.

### Input

- financial data N-1 và N từ `case_data.json`;
- screening rules từ `rules.json`;
- materiality reference.

### Calculation

- DSRI = 0.9333;
- SGAI = 1.12;
- TATA = 0.0273.

### Judgment

Người chơi chọn khu vực ưu tiên:

> **SG&A**

### Unlock

- Chọn đúng SG&A → mở full **SG&A Breakdown**.
- Calculation đúng/sai ảnh hưởng score nhưng không chặn full breakdown nếu judgment đúng.
- Chọn sai focus area → fallback chỉ cho thấy summary movement của các khu vực.

### Feedback

Phải nhấn mạnh:

> SGAI chỉ tạo screening signal. Nó không trực tiếp chỉ ra Advisory Expense và không chứng minh fraud.

---

## 4. Tab 2 — Account Drill-down — 10 điểm

### Mục tiêu

Xác định khoản mục con nào giải thích phần đáng chú ý trong SG&A.

### Input

SG&A breakdown:

- Salary;
- Marketing;
- Legal;
- Advisory Expense;
- Other.

### Calculation

```text
Advisory % change
= (4.2 - 1.2) / 1.2
= 250%
```

Absolute increase:

```text
+3.0 triệu USD
```

Materiality cross-check:

```text
3.0 > 1.1
```

### Judgment

> **Advisory Expense**

### Unlock

- Chọn đúng Advisory Expense → mở full Advisory Expense Ledger.
- Sai calculation nhưng chọn đúng khoản mục → vẫn mở ledger.
- Chọn sai khoản mục → fallback chỉ cho thấy tổng Advisory Expense N mà không có full transaction ledger.

### Feedback

> SGAI dẫn đến SG&A; SG&A breakdown mới dẫn đến Advisory Expense.

---

## 5. Tab 3 — Transaction Tracing — 10 điểm

### Mục tiêu

Đi từ account-level information xuống related transaction group.

### Input

Advisory Expense Ledger.

### Calculation

```text
Northstar total
= 0.9 + 0.9 + 0.8
= 2.6 triệu USD

Northstar share
= 2.6 / 4.2
= 61.9%
```

### Judgment

Người chơi chọn:

> **Northstar / AGR-NST-01**

### Transaction-link evidence

Ba tranche có:

- cùng vendor;
- cùng `agreement_id = AGR-NST-01`;
- cùng `economic_purpose_code = NORTHSTAR_ADVISORY_2026`.

### Unlock

- Chọn đúng Northstar transaction group → mở full agreement + approval records.
- Calculation sai nhưng chọn đúng group → vẫn mở full evidence.
- Chọn sai group → fallback chỉ hiển thị một control-policy summary mà không mở full Northstar evidence.

### Feedback

> Northstar được xác định sau transaction tracing; không phải do Beneish trực tiếp phát hiện.

---

## 6. Tab 4 — Control Investigation & Management Override — 30 điểm

### Mục tiêu

Đánh giá liệu evidence có hỗ trợ kết luận rằng approval process đã bị circumvention ở mức aggregate economic transaction hay không.

### Approval Policy

| Aggregate economic transaction value | Required approval |
|---|---|
| `<= 0.5` | Department Head |
| `> 0.5 and <= 1.0` | Department Head + Finance Manager |
| `> 1.0` | CFO + Board |

### Evidence người chơi thấy

Mỗi Northstar tranche:

```text
0.9 → Victor + Lucas
0.9 → Victor + Lucas
0.8 → Victor + Lucas
```

Do đó:

> **Mỗi tranche appears formally compliant when viewed separately.**

Nhưng cả ba tranche có cùng agreement và economic purpose:

```text
0.9 + 0.9 + 0.8 = 2.6
```

Aggregate transaction:

```text
2.6 > 1.0
→ CFO + Board required
```

### Judgment người chơi phải thực hiện

1. Nhận ra ba tranche phải được xét như related transaction group.
2. Nhận ra từng tranche có vẻ hợp lệ riêng lẻ.
3. Nhận ra aggregate 2.6 triệu USD yêu cầu CFO + Board.
4. Đánh giá evidence có hỗ trợ Management Override hay không.
5. Chọn supporting evidence.

### Lưu ý

Game không dùng:

> “Thiếu Finance Manager ở từng tranche”

làm violation, vì approval records của Week 3 đã có cả Victor và Lucas.

### Unlock

Nếu người chơi nhận ra đúng **aggregation + approval escalation issue**, Personnel Dossiers được mở đầy đủ.

Nếu không, game hiển thị fallback organization/control summary để vẫn tiếp tục được Tab 5.

### COSO

COSO chỉ được dùng trong feedback để giải thích vì sao một control có thể tồn tại về hình thức nhưng không đạt mục tiêu nếu transaction bị cấu trúc để tránh escalation.

Không có COSO quiz riêng.

---

## 7. Tab 5 — Responsibility Attribution — 25 điểm

### Mục tiêu

Xác định **primary responsible individual**, không phải chỉ tìm người đã xuất hiện trong approval records.

### Các cá nhân

#### Victor

Evidence:

- Department Head / Business Development Director;
- ký Northstar agreement;
- phê duyệt các tranches với vai trò Department Head;
- có direct transaction connection;
- có documented conflict-of-interest evidence.

#### Lucas

Evidence:

- Finance Manager;
- có phê duyệt từng tranche;
- có transaction involvement ở cấp approval;
- hiện chưa có evidence về conflict of interest;
- hiện chưa có evidence cho thấy Lucas ký agreement hoặc là người tạo/định hướng transaction structure.

Lucas vì vậy **không được mô tả là “không tham gia Northstar”**. Đúng hơn là evidence của Lucas yếu hơn Victor trong việc quy **primary responsibility**.

#### David

Có governance/process irregularity trong storyline nhưng chưa có evidence đủ mạnh nối trực tiếp David với transaction splitting hoặc conflict.

#### Sophia

Có control-monitoring responsibility và potential control failure, nhưng không có evidence cho thấy cố ý tham gia Management Override.

### Responsibility Criteria

Người chơi so:

- authority;
- direct involvement;
- transaction connection;
- conflict of interest;
- link to control circumvention;
- corroborating evidence.

### Judgment

> **Victor = primary responsible individual**

### Fraud Triangle

Chỉ dùng để hỗ trợ giải thích risk context. Không được dùng làm scoring formula để chọn Victor.

---

## 8. Tab 6 — Final Review / Evidence Integration — 15 điểm

### Mục tiêu

Tích hợp toàn bộ evidence để trả lời đồng thời:

1. Evidence có hỗ trợ Management Override hay không?
2. Ai chịu trách nhiệm chính và vì sao?

### Evidence chain đúng

```text
SGAI signal
→ SG&A
→ Advisory Expense
→ Northstar related tranches
→ same agreement + same economic purpose
→ aggregate value 2.6
→ CFO + Board required at aggregate level
→ tranche-level approvals appear formally valid
→ control circumvention pattern
→ Victor direct involvement + agreement connection + conflict evidence
→ Management Override supported
→ Victor primary responsible
```

Không được dùng:

```text
missing Finance Manager
```

vì field này không còn phù hợp với Week 3.

---

## 9. Unlock và Fallback Summary

| Full evidence | Điều kiện mở đầy đủ | Fallback |
|---|---|---|
| SG&A Breakdown | Chọn đúng SG&A | Summary financial movement |
| Advisory Ledger | Chọn đúng Advisory Expense | Advisory total / limited summary |
| Northstar Agreement + Approval Records | Chọn đúng Northstar group | Control-policy summary |
| Personnel Dossiers | Nhận ra aggregate transaction + approval escalation issue | Organization/control summary |
| Final evidence view | Hoàn thành Tab 5 | Evidence đã mở trong toàn game |

Calculation ảnh hưởng scoring nhưng không phải điều kiện bắt buộc duy nhất để mở evidence.

---

## 10. Financial Trace Map

Trace Map ghi lại cả lựa chọn đúng và sai.

Core correct chain:

**DSRI/SGAI/TATA → SG&A → Advisory Expense → Northstar → Aggregate Transaction 2.6 → Approval Escalation Issue → Management Override Assessment → Victor → Final Evidence Set**

Trace Map phải phân biệt:

- financial signal;
- transaction evidence;
- control evidence;
- responsibility evidence;
- user judgment.

---

## 11. Fallback Principle

Fallback phải:

- cho người chơi tiếp tục;
- không lộ đáp án;
- không phá investigation chain;
- không tạo evidence mới ngoài case;
- không khiến arithmetic trở thành gate duy nhất của learning process.
