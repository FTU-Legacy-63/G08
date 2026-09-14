# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 4 — SCORING, EXPLAINABILITY & SAMPLE LOGIC TEST

## 1. Vai trò của Scoring

Scoring là lớp hỗ trợ gameplay. Nó không thay thế evidence-based reasoning.

Phân bổ điểm phản ánh Product Direction đã chốt:

- Financial Screening & Tracing cần đủ trọng số để người chơi không đoán mò;
- Control Investigation và Responsibility Attribution là trọng tâm;
- Final Review kiểm tra Information Integration.

---

## 2. Tổng điểm

| Tab | Nội dung | Điểm |
|---|---|---:|
| Tab 1 | Financial Screening | **10** |
| Tab 2 | Account Drill-down | **10** |
| Tab 3 | Transaction Tracing | **10** |
| Tab 4 | Control Investigation & Management Override | **30** |
| Tab 5 | Responsibility Attribution | **25** |
| Tab 6 | Final Review / Evidence Integration | **15** |
| **Tổng** |  | **100** |

Như vậy:

- Financial Screening & Tracing: 30%;
- Control Investigation: 30%;
- Responsibility Attribution: 25%;
- Evidence Integration: 15%.

---

## 3. Phân bổ điểm trong từng Tab

| Tab | Thành phần | Điểm |
|---|---|---:|
| Tab 1 | DSRI/SGAI/TATA trong tolerance | 3 |
|  | Chọn đúng focus area = SG&A | 7 |
| Tab 2 | Advisory Expense change trong tolerance | 3 |
|  | Chọn đúng Advisory Expense | 7 |
| Tab 3 | Northstar total/share trong tolerance | 3 |
|  | Chọn đúng Northstar related transaction group | 7 |
| Tab 4 | Tính đúng aggregate Northstar = 2.6 | 5 |
|  | Nhận ra 3 tranches phải aggregate vì cùng agreement/economic purpose | 7 |
|  | Nhận ra tranche-level approval có vẻ hợp lệ nhưng aggregate 2.6 cần CFO + Board | 7 |
|  | Management Override Assessment đúng và có evidence phù hợp | 11 |
| Tab 5 | Xác định Victor là primary responsible individual | 10 |
|  | Authority + direct involvement evidence | 5 |
|  | Conflict-of-interest evidence | 5 |
|  | Comparative attribution: giải thích vì sao Victor mạnh hơn Lucas/David/Sophia | 5 |
| Tab 6 | Chọn đúng evidence set hỗ trợ đồng thời Override + Responsibility | 15 |
| **Tổng** |  | **100** |

### Điểm sửa so với bản Week 4 cũ

Không còn 7 điểm cho:

> “mỗi tranche thiếu Finance Manager”

vì Week 3 đã chốt Victor + Lucas cùng phê duyệt từng tranche.

---

## 4. Ending

Ending là gameplay assumption, không phải financial classification.

| Điểm | Ending | Ý nghĩa |
|---:|---|---|
| **95–100** | **Succession Confirmed** | Gần như hoàn thành toàn bộ investigation chain và không sai các judgment trọng yếu |
| **75–94** | Conditional Succession | Hiểu phần lớn case nhưng evidence chain còn thiếu hoặc có judgment sai |
| **50–74** | Delayed Succession | Nhận diện được một phần chain nhưng reasoning về control/responsibility còn yếu |
| **0–49** | Succession Denied | Investigation chain đứt ở nhiều bước |

Ngưỡng này là **game-design assumption**, không phải external financial threshold.

---

## 5. Tolerance cho Calculation

Để arithmetic không lấn át reasoning:

- ratio / percentage input có thể chấp nhận sai số làm tròn hợp lý;
- tolerance triển khai trong C# phải được ghi rõ và test;
- tolerance không thay đổi đúng/sai của judgment.

Đề xuất MVP:

```text
Calculated numeric answer accepted
if |user_value - expected_value| <= max(fixed_tolerance, percentage_tolerance)
```

Giá trị tolerance cụ thể cần chốt khi implement/playtest. Không nên ghi một con số tùy ý nếu chưa test.

---

## 6. Explainability

Mỗi feedback cần trả lời:

1. Kết quả là gì?
2. Input/evidence nào tạo ra kết quả?
3. Rule nào được áp dụng?
4. Vì sao lựa chọn đó đúng/sai?
5. Output không khẳng định điều gì?

### Tab 1 example

> SG&A được ưu tiên vì SGAI = 1.12 vượt case-specific review rule 1.10. DSRI và TATA không tạo hướng chính trong sample. Kết quả chỉ là screening direction, không chứng minh fraud.

### Tab 4 example

> Từng Northstar tranche 0.8–0.9 triệu USD có Victor và Lucas nên nhìn riêng phù hợp với approval level Department Head + Finance Manager. Tuy nhiên ba khoản thuộc cùng Northstar agreement và economic purpose, tạo aggregate economic transaction 2.6 triệu USD. Theo simulated policy, mức này cần CFO + Board. Vì vậy evidence hỗ trợ một control-circumvention pattern cần được đọc cùng authority, participation và conflict evidence khi đánh giá Management Override.

### Tab 5 example

> Victor được quy primary responsibility vì evidence nối ông với Northstar ở nhiều chiều: authority, ký agreement, phê duyệt tranche-level, direct transaction connection và documented conflict of interest. Lucas có approval involvement nhưng hiện không có conflict evidence hoặc evidence tương đương cho thấy ông là người tạo/định hướng transaction structure. Kết luận này dựa trên comparative evidence, không dựa trên Fraud Triangle.

---

## 7. Sample Calculation / Logic Test — Perfect Path

| Bước | Expected logic | Expected output | Manual check | Status |
|---|---|---|---|---|
| DSRI | `(21/150)/(18/120)` | 0.9333 | 0.9333 | Pass |
| SGAI | `(21/150)/(15/120)` | 1.12 | 1.12 | Pass |
| TATA | `(11-8)/110` | 0.0273 | 0.0273 | Pass |
| SG&A change | `21-15` | +6.0 | +6.0 | Pass |
| Advisory change | `4.2-1.2` | +3.0 | +3.0 | Pass |
| Advisory % change | `3.0/1.2` | +250% | +250% | Pass |
| Northstar total | `0.9+0.9+0.8` | 2.6 | 2.6 | Pass |
| Northstar share | `2.6/4.2` | 61.9% | 61.9% | Pass |
| Per-tranche approval | Victor + Lucas | Appears formally compliant | Matches Week 3 evidence | Pass |
| Related-transaction rule | Same vendor + agreement + economic purpose | Aggregate as one group | Matches case fields | Pass |
| Aggregate approval | 2.6 > 1.0 | CFO + Board required | Matches policy | Pass |
| Override logic | Evidence synthesis | Supported | Manual evidence chain works | Pass |
| Responsibility | Comparative evidence | Victor primary | Manual evidence chain works | Pass |

---

## 8. Sample Gameplay Test — Mixed Answers

Kịch bản này kiểm tra scoring mà không làm đứt flow.

| Tab | Player result | Điểm |
|---|---|---:|
| Tab 1 calculation | đúng | 3 |
| Tab 1 judgment | SG&A đúng | 7 |
| Tab 2 calculation | sai | 0 |
| Tab 2 judgment | Advisory Expense đúng | 7 |
| Tab 3 calculation | đúng | 3 |
| Tab 3 judgment | Northstar đúng | 7 |
| Tab 4 aggregate total | đúng | 5 |
| Tab 4 related-transaction judgment | đúng | 7 |
| Tab 4 approval-escalation judgment | đúng | 7 |
| Tab 4 Override assessment | đúng | 11 |
| Tab 5 Victor | đúng | 10 |
| Tab 5 authority/involvement | đúng | 5 |
| Tab 5 conflict evidence | đúng | 5 |
| Tab 5 comparative attribution | sai | 0 |
| Tab 6 final evidence set | đúng | 15 |

Tổng:

```text
10 + 7 + 10 + 30 + 20 + 15 = 92
```

Ending:

> **92/100 → Conditional Succession**

Kịch bản này cho thấy một lỗi arithmetic nhỏ không cắt investigation chain, nhưng thiếu comparative responsibility reasoning vẫn khiến người chơi không đạt ending cao nhất.

---

## 9. Edge Cases cần Test

| Kịch bản | Expected behavior |
|---|---|
| Missing financial field | Ratio liên quan không tính; hiển thị validation error |
| Revenue denominator = 0 | Không tính ratio |
| SG&A breakdown không reconcile | Data validation fail |
| Advisory ledger không reconcile | Data validation fail |
| Same vendor nhưng khác agreement/economic purpose | Không tự aggregate |
| Thiếu `agreement_id` | Transaction có thể hiển thị nhưng không auto-aggregate |
| Missing approval record | `evidence_incomplete`; không tự kết luận violation |
| Missing conflict evidence | `unknown`, không mặc định false |
| Người chơi đúng judgment nhưng calculation sai | Full evidence vẫn unlock; calculation mất điểm |
| Người chơi sai judgment | Nhận fallback và tiếp tục |
| Evidence chưa unlock | Không được chọn ở final evidence set |
| Answer key bị bind vào UI | Technical test phải fail |
| Score = 95 | Succession Confirmed |
| Score = 94 | Conditional Succession |
| Score = 75 | Conditional Succession |
| Score = 74 | Delayed Succession |
| Score = 50 | Delayed Succession |
| Score = 49 | Succession Denied |

---

## 10. Logic Test Conclusion

Week 4 logic test chứng minh rằng:

- financial input tạo ra đúng screening output;
- account drill-down nối được với transaction tracing;
- related transaction fields đủ để aggregate Northstar;
- approval logic khớp Week 3;
- Management Override không được suy ra từ một threshold đơn lẻ;
- Responsibility Attribution có thể giải thích bằng comparative evidence;
- scoring không thay thế final evidence conclusion.
