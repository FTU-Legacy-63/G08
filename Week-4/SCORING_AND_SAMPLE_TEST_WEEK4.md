# The Last Heir — Scoring, Sample Calculation & Explainability (Week 4)

> Học phần: **NHA408E**
> Nhóm: **G08**
> File 3/4 của bộ tài liệu Week 4 — tương ứng mục 5 (Scoring), mục 6 (Explainability) và mục 7 (Sample Calculation/Logic Test) của Week 4 Guide

---

## 1. Scoring và Ending

### 1.1 Tổng điểm

| Tab | Điểm |
|---|---|
| Tab 1 — Financial Diagnosis | 15 |
| Tab 2 — Transaction Investigation | 15 |
| Tab 3 — Reconciliation | 15 |
| Tab 4 — Control Investigation | 20 |
| Tab 5 — Responsibility Investigation | 15 |
| Tab 6 Bước 1 — Final Board Review | 20 |
| **Tổng thang chính** | **100** |
| Tab 6 Bước 2 — Bonus (PV thiệt hại) | +10 (ngoài thang 100) |

### 1.2 Bảng ending (dựa trên thang 100, không tính bonus)

| Khoảng điểm | Ending |
|---|---|
| ≥ 85 | Succession Confirmed |
| 60–84 | Conditional Succession |
| 35–59 | Delayed Succession |
| < 35 | Succession Denied |

### 1.3 Hiển thị kết quả

Màn hình tổng kết hiển thị: điểm/100, ending tương ứng, điểm bonus/10 (nếu có, hiển thị riêng, không cộng vào ending), Financial Trace Log đầy đủ, danh sách tài liệu đã/chưa unlock (đã phản ánh đúng điều kiện gating + calc ở Tab 1/Tab 4), và trạng thái giả thuyết 4 nhân vật.

---

## 2. Explainability

Theo mục 6 Week 4 Guide, mỗi output cần trả lời: kết quả là gì, vì sao kết quả xuất hiện, input nào ảnh hưởng, assumption nào được dùng, user nên hiểu output thế nào, và output không khẳng định điều gì.

### 2.1 Mẫu giải thích ending

- **Succession Confirmed (≥85):** đạt {điểm}/100, đúng ở hầu hết các bước gating chính, bao gồm cả thủ phạm tại Final Board Review.
- **Conditional Succession (60–84):** đạt {điểm}/100, một số bước bị bỏ lỡ hoặc sai, một số tài liệu không mở.
- **Delayed Succession (35–59):** đạt {điểm}/100, phần lớn gating bị sai.
- **Succession Denied (<35):** đạt {điểm}/100, hầu hết gating sai.

Nếu có bonus, ghi thêm 1 dòng riêng: "Bạn đạt thêm {bonus}/10 nhờ tính đúng tác động tài chính của hành vi Victor gây ra." Bonus không thay đổi ending.

### 2.2 Input nào ảnh hưởng điểm/ending

| Loại input | Ảnh hưởng |
|---|---|
| Gating dropdown (tất cả tab) | Ảnh hưởng điểm; ở Tab 2/3/5/Tab6-Bước1 cũng quyết định unlock một mình |
| Free input Tab 1 (DSRI/SGAI/TATA) | Ảnh hưởng điểm (tolerance) **và** là điều kiện bắt buộc để unlock Vendor Breakdown (cùng với Gating 1) |
| Free input Tab 4 (Magnitude/Likelihood) | Ảnh hưởng điểm (tolerance) **và** là điều kiện bắt buộc để unlock Amendment History + Employee Directory (cùng với Gating 1) |
| Free input Bước 2 Tab 6 (PV) | Ảnh hưởng bonus, không ảnh hưởng ending, không ảnh hưởng unlock (đây là tab cuối) |

---

## 3. Sample Calculation / Logic Test

### 3.1 Kịch bản test — trả lời hỗn hợp

| Tab | Lựa chọn người chơi | Đáp án đúng | Kết quả | Điểm | Unlock |
|---|---|---|---|---|---|
| Tab 1 Gating 1 | SGAI | SGAI | Đúng | +5 | — |
| Tab 1 Gating 2 | Loại Hypothesis C | Loại Hypothesis C | Đúng | +5 | — |
| Tab 1 free input (DSRI/SGAI/TATA) | trong tolerance | — | Đúng | +5 | Gating 1 đúng + calc đúng → **Vendor Breakdown mở** |
| Tab 2 | Northstar | Northstar | Đúng | +15 | Northstar Contract + Payment Ledger mở |
| Tab 3 | tien_bien_mat | khop_100_can_xem_control | Sai | +0 | Control Policy + 4 dossier KHÔNG mở |
| Tab 4 Gating 1 | red_flag | red_flag | Đúng | +5 | — |
| Tab 4 Gating 2 | Control Environment | Control Environment | Đúng | +5 | — |
| Tab 4 Gating 3 | Material Weakness | Material Weakness | Đúng | +5 | — |
| Tab 4 free input (Magnitude/Likelihood) | ngoài tolerance (ví dụ lệch >10%) | — | **Sai** | +0 | Gating 1 đúng nhưng calc sai → **Amendment History KHÔNG mở** |
| Tab 5 | Lucas | Victor | Sai | +0 | — |
| Tab 6 Bước 1 (thủ phạm) | Victor | Victor | Đúng | +15 | Bước 2 mở |
| Tab 6 Bước 1 (hành vi) | Fraud | Fraud | Đúng | +5 | — |
| Tab 6 Bước 2 (PV) | ~1,073 tỷ, trong tolerance | — | Đúng | +10 (bonus) | — |

### 3.2 Kết quả kỳ vọng

| Chỉ tiêu | Cách tính | Kết quả |
|---|---|---|
| Tổng điểm thang chính | 15 (Tab1) + 15 (Tab2) + 0 (Tab3) + 15 (Tab4: 3 gating đúng, calc sai) + 0 (Tab5) + 20 (Tab6 Bước1) | 65/100 |
| Ending | 65 ∈ [60,84] | Conditional Succession |
| Bonus | Tab 6 Bước 2 đúng | +10 |
| Tài liệu unlock | Tab 1: Gating 1 đúng + calc đúng → Vendor Breakdown mở. Tab 2 đúng → Northstar Contract + Payment Ledger mở. Tab 3 sai → Control Policy + 4 dossier KHÔNG mở. Tab 4: Gating 1 đúng nhưng calc sai → Amendment History + Employee Directory KHÔNG mở (dù cả 3 gating của Tab 4 đều đúng) | Đúng như thiết kế |

### 3.3 Edge case cần test

| Kịch bản | Kỳ vọng |
|---|---|
| Đúng cả 6 tab, kể cả Bước 2 Tab 6 | 100/100 + 10 bonus → Succession Confirmed |
| Sai cả 6 tab | 0/100, không mở Bước 2 Tab 6 → Succession Denied |
| Đúng Tab 1–5, sai thủ phạm ở Tab 6 Bước 1 | Bước 2 không mở khóa, không có bonus, dù các layer khác đều đúng |
| Đúng thủ phạm nhưng sai PV (ngoài tolerance ±10%) ở Bước 2 | Không cộng bonus, ending vẫn theo thang 100 |
| Điểm rơi đúng ranh giới (85, 60, 35) | 85 → Confirmed; 84 → Conditional; 60 → Conditional; 59 → Delayed; 35 → Delayed; 34 → Denied |
| Tab 1: Gating 1 đúng nhưng 1 trong 3 biến (DSRI/SGAI/TATA) lệch ngoài tolerance | Mất 5 điểm phần calc; **Vendor Breakdown KHÔNG mở**, dù Gating 1 đúng |
| Tab 1: Gating 1 sai nhưng cả 3 biến tính đúng trong tolerance | Mất 5 điểm phần Gating 1; **Vendor Breakdown KHÔNG mở**, dù calc đúng |
| Tab 4: cả 3 gating đúng nhưng Magnitude hoặc Likelihood lệch ngoài tolerance | Mất 5 điểm phần calc; **Amendment History và Employee Directory KHÔNG mở** |
| Tab 1 và Tab 4 đều đúng cả gating lẫn calc | Vendor Breakdown và Amendment History đều mở bình thường, không có gì thay đổi so với luồng chính |

Sample calculation này giúp phát hiện: sai formula, unit mismatch, threshold reversed, rounding issue, assumption không rõ (theo mục 7 Week 4 Guide).

---

*Xem tiếp File 4/4 — `ASSUMPTIONS_AND_TECHNICAL_READINESS_WEEK4.md`: assumptions, limitations, technical route và deployment fallback.*
