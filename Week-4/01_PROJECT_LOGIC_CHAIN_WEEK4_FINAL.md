# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 4 — PROJECT LOGIC CHAIN

## 1. Mục tiêu của Week 4

Week 4 là tuần **consolidation and formalization**. Nhóm không xác định lại problem, target user, product direction, MVP hoặc input đã được chốt ở Weeks 1–3.

Chuỗi phát triển của dự án được giữ nguyên:

**Week 1 — Problem Direction:** Information Integration  
↓  
**Week 2 — Product Direction:** Financial Learning Game với một investigation chain end-to-end  
↓  
**Week 3 — Input Readiness:** local JSON data, source, assumptions, validation và early logic test  
↓  
**Week 4 — Logic Formalization:** biến input thành output bằng các công thức, rule và decision logic có thể kiểm tra được

Câu hỏi trung tâm:

> **Từ các input đã chốt ở Week 3, game xử lý chúng bằng logic nào để người chơi đi đến kết luận về Management Override và cá nhân chịu trách nhiệm chính?**

---

## 2. Project Logic Chain

Project logic chain đầy đủ:

**Problem → Target User → User Task → Difficulty → Technology Support → Input → Financial / Investigation Logic → Output → User Action**

Áp dụng cho The Last Heir:

| Thành phần | Nội dung |
|---|---|
| **Problem** | Người học gặp khó khăn khi kết nối nhiều nguồn thông tin tài chính, giao dịch, kiểm soát và trách nhiệm |
| **Target User** | Sinh viên Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản |
| **User Task** | Kết nối evidence để đánh giá Management Override và xác định cá nhân chịu trách nhiệm chính |
| **Difficulty** | Signal, transaction data, approval evidence và responsibility evidence nằm ở các lớp thông tin khác nhau |
| **Technology Support** | Unity + C# giúp mở evidence theo tiến trình, thực hiện calculation/rule check và lưu reasoning state |
| **Input** | `case_data.json`, `rules.json`, `evidence.json`; `answer_key.json` chỉ dùng nội bộ |
| **Logic** | Screening → Materiality cross-check → Drill-down → Transaction aggregation → Control assessment → Responsibility attribution → Evidence integration |
| **Output** | Kết luận về Management Override + cá nhân chịu trách nhiệm chính + supporting evidence + Financial Trace Map |
| **User Action** | Xem lại evidence chain và hiểu vì sao kết luận được hình thành |

---

## 3. Quan hệ với ba Layer đã chốt

Sáu tab trong Week 4 chỉ là cách chia **UI và interaction** cho ba layer đã có, không tạo thêm layer kiến thức mới.

| Layer | Tab | Mục tiêu |
|---|---|---|
| **Layer 1 — Financial Screening and Transaction Tracing** | Tab 1–3 | Xác định khu vực, khoản mục và giao dịch cần điều tra |
| **Layer 2 — Control Investigation** | Tab 4 | Đánh giá control circumvention pattern và Management Override |
| **Layer 3 — Responsibility Attribution** | Tab 5 | Xác định cá nhân chịu trách nhiệm chính dựa trên evidence |
| **Final Review** | Tab 6 | Tích hợp toàn bộ evidence thành kết luận cuối |

Financial analysis không phải learning objective cuối cùng. Nó giúp người chơi **tìm đúng nơi cần điều tra** trước khi đi vào control và responsibility evidence.

---

## 4. Investigation Chain của case

| Tab | Người chơi làm gì? | Logic | Kết quả đúng |
|---|---|---|---|
| **Tab 1 — Financial Screening** | Tính và diễn giải DSRI, SGAI, TATA | Mỗi indicator được đánh giá theo case-specific screening rule riêng | SGAI tạo tín hiệu review → ưu tiên **SG&A** |
| **Tab 2 — Account Drill-down** | So SG&A breakdown và kiểm tra materiality | Advisory Expense tăng 3.0 triệu USD, vượt materiality reference 1.1 | **Advisory Expense** cần truy vết |
| **Tab 3 — Transaction Tracing** | Xem Advisory Expense Ledger và nhóm các transaction liên quan | Northstar có 3 tranches cùng vendor, agreement ID và economic purpose; tổng 2.6 triệu USD | **Northstar / AGR-NST-01** là transaction group cần kiểm tra |
| **Tab 4 — Control Investigation** | So aggregate economic transaction với approval policy | Từng tranche có Victor + Lucas nên có vẻ hợp lệ riêng lẻ; nhưng aggregate 2.6 triệu USD yêu cầu CFO + Board | Evidence hỗ trợ **control circumvention pattern** và Management Override Assessment |
| **Tab 5 — Responsibility Attribution** | So evidence giữa Victor, Lucas, David và Sophia | Authority + direct involvement + transaction connection + conflict + control-bypass connection | **Victor** có evidence mạnh nhất cho primary responsibility |
| **Tab 6 — Final Review** | Chọn bộ evidence hỗ trợ hai decision cuối | Evidence integration | Management Override được hỗ trợ + Victor là primary responsible individual |

---

## 5. Input → Financial / Investigation Logic → Output Mapping

| Input | Financial / control meaning | Rule / Calculation / Process | Output |
|---|---|---|---|
| Revenue, Receivables | Revenue-recognition screening | DSRI | DSRI = 0.9333; không ưu tiên revenue/receivables |
| Revenue, SG&A | SG&A screening | SGAI | SGAI = 1.12; SG&A cần review |
| Income from continuing operations, CFO, Total Assets | Accrual / earnings-quality screening | TATA | TATA = 0.0273; không tạo hướng chính |
| Materiality reference = 1.1 | Mức độ đáng chú ý trong case | So absolute movement với materiality reference | SG&A +6.0 và Advisory +3.0 đều đáng để drill-down |
| SG&A breakdown | Thành phần tạo biến động SG&A | So absolute và % change | Advisory Expense 1.2 → 4.2; +250% |
| Advisory Expense Ledger | Nguồn tạo Advisory Expense | Group related transactions theo vendor + agreement ID + economic purpose | Northstar = 2.6 / 4.2 = 61.9% |
| Northstar tranches | Bản chất kinh tế của transaction group | 0.9 + 0.9 + 0.8 = 2.6 | Aggregate economic transaction = 2.6 |
| Approval records | Formal approval ở cấp tranche | Victor + Lucas ở từng tranche | Từng tranche appears formally compliant |
| Approval policy | Cấp approval theo aggregate economic value | 2.6 > 1.0 | Aggregate transaction yêu cầu CFO + Board |
| Agreement + approval + involvement + conflict evidence | Management Override evidence | Evidence synthesis, không dùng một điều kiện đơn lẻ | Override assessment: **Supported** |
| Personnel evidence | Responsibility evidence | So authority, involvement, conflict, bypass connection và corroboration | Victor = primary responsible individual |
| Supporting evidence IDs | Evidence integration | Kiểm tra evidence đã mở khóa và có liên quan | Final evidence-based conclusion |

---

## 6. Formalized Formula và Rule

### 6.1. DSRI

```text
DSRI =
(Receivables_N / Revenue_N)
/
(Receivables_N-1 / Revenue_N-1)
```

Sample:

```text
(21 / 150) / (18 / 120) = 0.9333
```

Case-specific interpretation:

```text
0.90–1.15 → no priority flag
```

### 6.2. SGAI

```text
SGAI =
(SG&A_N / Revenue_N)
/
(SG&A_N-1 / Revenue_N-1)
```

Sample:

```text
(21 / 150) / (15 / 120) = 1.12
```

Case-specific interpretation:

```text
SGAI > 1.10 → review SG&A
```

SGAI không tự động kết luận fraud.

### 6.3. TATA — prototype implementation

```text
TATA =
(Income from Continuing Operations_N - CFO_N)
/
Total Assets_N
```

Sample:

```text
(11 - 8) / 110 = 0.0273
```

Case-specific interpretation:

```text
|TATA| > 0.05 → additional accrual review
```

### 6.4. Advisory Expense Change

```text
(4.2 - 1.2) / 1.2 = 250%
```

Absolute increase:

```text
4.2 - 1.2 = 3.0 triệu USD
```

Materiality cross-check:

```text
3.0 > 1.1
```

### 6.5. Northstar Share

```text
Northstar total = 0.9 + 0.9 + 0.8 = 2.6
Northstar share = 2.6 / 4.2 = 61.9%
```

### 6.6. Transaction Aggregation Rule

Related transactions được aggregate khi có đủ evidence cho thấy chúng cùng một economic transaction, trong case này:

```text
same vendor
+ same agreement_id
+ same economic_purpose_code
→ related transaction group
```

Không group transaction chỉ vì cùng vendor.

### 6.7. Approval Rule

```text
Aggregate value <= 0.5
→ Department Head

0.5 < Aggregate value <= 1.0
→ Department Head + Finance Manager

Aggregate value > 1.0
→ CFO + Board
```

Northstar:

```text
Aggregate value = 2.6
→ CFO + Board required
```

### 6.8. Management Override Decision Rule

Không sử dụng:

```text
2.6 > 1.0
→ automatically Management Override
```

Logic đúng:

```text
related transaction splitting / circumvention pattern
+ approval-policy evidence
+ authority / participation evidence
+ corroborating case evidence
→ evidence set supports or does not support Management Override
```

### 6.9. Responsibility Attribution Rule

Primary responsibility được đánh giá bằng:

```text
authority
+ direct involvement
+ transaction connection
+ conflict of interest
+ link to control circumvention
+ corroborating evidence
```

Fraud Triangle chỉ hỗ trợ giải thích risk context, không dùng làm culprit score.

---

## 7. Explainability Requirement

Mỗi output quan trọng phải trả lời được:

1. Kết quả là gì?
2. Vì sao kết quả đó xuất hiện?
3. Input/evidence nào ảnh hưởng?
4. Rule hoặc assumption nào được sử dụng?
5. Người chơi nên hiểu kết quả thế nào?
6. Kết quả không khẳng định điều gì?

Ví dụ:

> **SG&A được ưu tiên** vì SGAI = 1.12 vượt case-specific review rule 1.10 và mức tăng SG&A 6.0 triệu USD vượt materiality reference 1.1. Kết quả này chỉ xác định khu vực cần điều tra sâu hơn; nó không chứng minh fraud hay Management Override.

Ví dụ:

> **Management Override được đánh giá là Supported** vì ba khoản Northstar thuộc cùng agreement và economic purpose nhưng được tách thành các tranche 0.8–0.9 triệu USD. Từng tranche có Victor + Lucas nên nhìn riêng có vẻ phù hợp với approval level tương ứng, nhưng aggregate economic transaction 2.6 triệu USD vượt ngưỡng cần CFO + Board. Kết luận cuối còn phải được đọc cùng evidence về authority, participation và conflict; không dựa vào một con số đơn lẻ.

---

## 8. Scoring chỉ là lớp hỗ trợ

Scoring được sử dụng để:

- phản hồi mức độ hoàn thành investigation chain;
- khuyến khích reasoning đúng;
- tạo ending cho game.

Scoring không thay thế evidence-based conclusion.

Trọng số được đặt cao hơn cho:

- Control Investigation;
- Responsibility Attribution;
- Final Evidence Integration;

vì đây là core learning objective đã chốt từ Week 1–2.

Chi tiết scoring nằm trong `03_SCORING_AND_SAMPLE_TEST_WEEK4_FINAL.md`.

---

## 9. Những gì Week 4 không làm

Để giữ MVP realistic:

- không triển khai full Beneish M-Score 8 biến;
- không dùng SOX 404 severity classification;
- không tính Present Value thiệt hại;
- không dùng Fraud Triangle để tự động chọn người chịu trách nhiệm;
- không để một ratio tự động kết luận Management Override;
- không bổ sung database, backend hoặc external API;
- không thay đổi core investigation chain đã chốt ở Week 2–3.

Week 4 chỉ formalize những logic cần thiết để có thể code, test và giải thích.
