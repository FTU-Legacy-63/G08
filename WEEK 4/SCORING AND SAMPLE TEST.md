# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 4 — SCORING, EXPLAINABILITY & SAMPLE LOGIC TEST

## 1. Scoring Principle

Scoring hỗ trợ gameplay, không thay thế evidence-based reasoning.

| Tab | Điểm |
|---|---:|
| Financial Screening | 10 |
| Account Drill-down | 10 |
| Transaction Tracing | 10 |
| Control Investigation & Management Override | 30 |
| Responsibility Attribution | 25 |
| Final Review | 15 |
| **Total** | **100** |

---

## 2. Detailed Scoring

| Tab | Component | Điểm |
|---|---|---:|
| 1 | DSRI/SGAI/TATA | 3 |
| 1 | SG&A judgment | 7 |
| 2 | Advisory % change | 3 |
| 2 | Advisory judgment | 7 |
| 3 | Northstar total/share | 3 |
| 3 | Northstar group judgment | 7 |
| 4 | Nhận ra surface approval appears complete | 3 |
| 4 | Nhận ra audit trail: Lucas did not approve; Victor used override/proxy | 8 |
| 4 | Nhận ra 2.6 aggregate requires CFO + Board | 8 |
| 4 | Management Override + appropriate evidence | 11 |
| 5 | Victor = primary responsible | 10 |
| 5 | Authority/direct participation evidence | 5 |
| 5 | Conflict evidence | 5 |
| 5 | Direct control-bypass evidence | 5 |
| 6 | Final integrated evidence set | 15 |
| **Total** | | **100** |

---

## 3. Ending

| Score | Ending |
|---:|---|
| 95–100 | Succession Confirmed |
| 75–94 | Conditional Succession |
| 50–74 | Delayed Succession |
| 0–49 | Succession Denied |

Đây là gameplay thresholds, không phải financial classification.

---

## 4. Explainability Examples

### Tab 4

> Hồ sơ bề mặt hiển thị cả Department Head và Finance Approval đều Completed. Tuy nhiên audit trail cho thấy Finance step được hoàn tất bằng management override/proxy route do Victor kích hoạt; Lucas không có approval event. Required justification và retrospective Finance review đều thiếu. Ba Northstar tranches còn thuộc cùng agreement/economic purpose và tổng 2.6 triệu USD, nên đáng lẽ phải được escalated lên CFO + Board. Hai lớp evidence này hỗ trợ Management Override khi được đọc cùng Victor's authority/direct involvement.

### Tab 5

> Victor có evidence trực tiếp hơn Lucas: Victor khởi tạo transactions, ký agreement, thực hiện Department Head approval và là actor kích hoạt override/proxy route, đồng thời có conflict evidence. Lucas là Finance Manager đáng lẽ phải approve nhưng audit trail cho thấy anh bị bypass.

---

## 5. Perfect-Path Logic Test

| Step | Expected | Manual | Status |
|---|---|---|---|
| DSRI | 0.9333 | 0.9333 | Pass |
| SGAI | 1.12 | 1.12 | Pass |
| TATA | 0.0273 | 0.0273 | Pass |
| Advisory % | 250% | 250% | Pass |
| Northstar total | 2.6 | 2.6 | Pass |
| Northstar share | 61.9% | 61.9% | Pass |
| Surface approval | appears complete | yes | Pass |
| Audit trail | Victor override/proxy; Lucas no approval event | yes | Pass |
| Override-route compliance | missing requirements | non-compliant | Pass |
| Aggregate approval | CFO + Board required | yes | Pass |
| Management Override | Supported | manual chain supports | Pass |
| Primary responsibility | Victor | manual chain supports | Pass |

---

## 6. Edge Cases

| Scenario | Expected behavior |
|---|---|
| Surface approval says Completed but audit trail missing | evidence incomplete; no actor conclusion |
| Audit trail shows Lucas direct approval | Finance-bypass finding should not trigger |
| Override route used with all required conditions satisfied | do not label route misuse |
| Same vendor but different agreement/purpose | do not auto-aggregate |
| Missing agreement ID | do not auto-aggregate |
| Conflict evidence missing | unknown, not false |
| Calculation wrong but judgment right | evidence can still unlock; lose calculation points |
| Answer key visible in UI | technical test fail |
