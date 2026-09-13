# The Last Heir — Gameplay Mechanics & Rules (Week 4)

> Học phần: **NHA408E**
> Nhóm: **G08**
> File 2/4 của bộ tài liệu Week 4 — tương ứng mục 5 (Formula, Rule và Scoring/Classification) của Week 4 Guide
> Nội dung: cơ chế tab input chi tiết (rule + classification theo từng tab), document unlock, reassess hypothesis, financial trace map.

---

## 1. Cơ chế Tab Input

### 1.1 Nguyên tắc chung (áp dụng cho toàn bộ engine, không phải ngoại lệ riêng cho tab nào)

Mỗi tab gồm: ô nhập tự do (số liệu người chơi tự tính) + câu hỏi gating dạng dropdown + nút Submit.

**Điều kiện unlock (khi tab có ô nhập tự do) = Gating dropdown đúng VÀ tất cả ô nhập tự do của tab đó đúng trong tolerance ±10%.** Thiếu một trong hai — dù chỉ 1 ô tính toán sai — tài liệu của tab đó không mở khóa. Với tab không có ô nhập tự do (Tab 2, 3, 5), điều kiện unlock chỉ còn là Gating đúng.

Submit → so đáp án (gating + từng ô tính toán) → ghi log toàn bộ (kể cả sai) → unlock tài liệu nếu tất cả điều kiện trên đều đúng → luôn chuyển tab tiếp theo bất kể đúng/sai.

### 1.2 Tab 1 — Financial Diagnosis (15 điểm)

| Thành phần | Nội dung |
|---|---|
| Ô nhập tự do (có chấm điểm, tolerance ±10%) | DSRI, SGAI, TATA |
| Gating 1 (quyết định unlock) | "Biến nào lệch benchmark ngành lớn nhất?" — Options: DSRI / SGAI / TATA / Revenue / Net Income → Đáp án: **SGAI** |
| Gating 2 | "DSRI ở mức bình thường loại trừ hypothesis nào?" — Options: Loại Hypothesis A (Cash Theft) / Loại Hypothesis B (Asset Misappropriation) / Loại Hypothesis C (Aggressive Revenue Recognition) / Loại Hypothesis D (Separate Cash-Outflow) → Đáp án: **Loại Hypothesis C** |
| Điểm | 5 (3 biến đúng trong tolerance) + 5 (Gating 1 đúng) + 5 (Gating 2 đúng) |
| Unlock | Vendor Breakdown — chỉ mở khi Gating 1 đúng VÀ cả 3 biến (DSRI/SGAI/TATA) đúng trong tolerance ±10% |
| Tab kế tiếp | Transaction Investigation |

### 1.3 Tab 2 — Transaction Investigation (15 điểm)

Gating "vendor nào là trọng tâm?" → **Northstar**. Đúng → unlock Northstar Contract + Payment Ledger. Tab kế tiếp: Reconciliation.

### 1.4 Tab 3 — Reconciliation (15 điểm)

Gating "kết luận đối chiếu Contract và Payment là gì?" → **"khớp 100%, cần xem tiếp phần control"**. Đúng → unlock Control Policy + 4 dossier. Tab kế tiếp: Control Investigation.

### 1.5 Tab 4 — Control Investigation (20 điểm)

| Thành phần | Nội dung |
|---|---|
| Ô nhập tự do (có chấm điểm, tolerance ±10%) | Magnitude = \|northstar_price_actual − market_price_benchmark\| = 470; Magnitude/Materiality = 470/38 = 12.4×; Likelihood = payments_below_threshold_count/payment_count = 23/26 = 88.5% |
| Gating 1 (quyết định unlock) | "Nhận định về payment pattern này là gì?" — Options: "đây là bằng chứng gian lận rõ ràng" / "đây là red flag cần giải thích thêm, chưa phải bằng chứng" → Đáp án: **vế thứ hai** |
| Gating 2 | "COSO Component nào bị vi phạm?" — Options: Control Environment / Risk Assessment / Control Activities / Information & Communication / Monitoring → Đáp án: **Control Environment** |
| Gating 3 | "Severity Assessment (SOX 404) phù hợp là gì?" — Options: Control Deficiency / Significant Deficiency / Material Weakness → Đáp án: **Material Weakness** |
| Điểm | 5 (Magnitude + Likelihood đúng trong tolerance) + 5 (Gating 1 đúng) + 5 (Gating 2 đúng) + 5 (Gating 3 đúng) |
| Unlock | Amendment History — chỉ mở khi Gating 1 đúng VÀ cả Magnitude và Likelihood đúng trong tolerance ±10% |
| Tab kế tiếp | Responsibility Investigation |

### 1.6 Tab 5 — Responsibility Investigation (15 điểm)

Gating "EMP-0231 khớp với ai?" — Options: Victor / Lucas / David / Sophia → Đáp án: **Victor**. Không unlock thêm tài liệu. Tab kế tiếp: Final Board Review.

### 1.7 Tab 6 — Final Board Review (20 điểm + 10 điểm bonus), 2 bước

**Bước 1 — Xác định thủ phạm (20 điểm, gating chính, luôn kết thúc game):**

| Thành phần | Nội dung |
|---|---|
| Gating chính | "Kết luận cuối cùng về primary management responsibility là ai?" — Options: Victor / Lucas / David / Sophia / "chưa đủ bằng chứng để kết luận" → Đáp án: **Victor** |
| Gating phụ | "Phân loại hành vi theo Fraud Triangle" — Options: Fraud / Misconduct / Poor Decision → Đáp án: **Fraud** |
| Điểm | 15 (chọn đúng Victor) + 5 (chọn đúng Fraud) |

**Bước 2 — Tính tác động tài chính (10 điểm bonus, chỉ mở khi Bước 1 chọn đúng Victor):**

| Thành phần | Nội dung |
|---|---|
| Điều kiện mở | suspect_selected == "Victor" (đúng ở Bước 1) |
| Input hiển thị | overpayment_magnitude = 470, discount_rate_r = 15%, projection_years = 3 |
| Công thức | PV = 470 × [1 − (1.15)⁻³] / 0.15 ≈ 1,073 tỷ |
| Chấm điểm | Đúng trong sai số ±10% → +10 điểm bonus (ngoài thang 100 gốc) |
| Nếu Bước 1 chọn sai | Bước 2 không mở khóa, không có điểm bonus |

Sau Bước 1 (dù đúng/sai), game luôn hiển thị màn hình tổng kết. Bước 2 chỉ là lớp bổ sung nằm trên cùng màn hình, không chặn việc kết thúc game.

### 1.8 Pseudocode unlock cho Tab 1 và Tab 4

Đây là thay đổi cốt lõi so với thiết kế trước: trước đây chỉ gating dropdown quyết định unlock, ô tính toán chỉ để log; từ nay ô tính toán ở Tab 1 và Tab 4 là điều kiện bắt buộc, ngang hàng với gating, để mở các tài liệu quan trọng nhất của investigation chain (Vendor Breakdown dẫn tới Northstar; Amendment History dẫn tới Victor).

```
Tab 1 Submit:
gating_1_correct = (lựa chọn == "SGAI")
calc_correct = (DSRI trong tolerance) AND (SGAI trong tolerance) AND (TATA trong tolerance)
IF gating_1_correct AND calc_correct → unlock Vendor Breakdown
ELSE → Vendor Breakdown không xuất hiện (dù chỉ 1 trong 2 điều kiện sai)

Tab 4 Submit:
gating_1_correct = (lựa chọn == "red flag cần giải thích thêm")
calc_correct = (Magnitude trong tolerance) AND (Likelihood trong tolerance)
IF gating_1_correct AND calc_correct → unlock Amendment History (+ Employee Directory)
ELSE → Amendment History không xuất hiện
```

---

## 2. Document Unlock (Classification: unlock vs fallback)

| Tài liệu | Điều kiện unlock | Fallback nếu KHÔNG unlock |
|---|---|---|
| Financial Overview, Tab 1 | Có sẵn từ đầu | — |
| Vendor Breakdown | Gating 1 đúng ở Tab 1 **VÀ** DSRI, SGAI, TATA đều đúng trong tolerance ±10% | **Bảng Tổng Hợp Chi Phí Vận Hành** — chi phí gộp theo nhóm lớn (Nhân sự, Thuê mặt bằng, Marketing, Professional Services...), không tách theo từng vendor |
| Northstar Contract + Payment Ledger | Gating đúng ở Tab 2 (không có ô tính toán) | **Bảng Tổng Hợp Thanh Toán Nhà Cung Cấp** — chỉ có tổng số tiền đã trả cho nhóm "External Advisory" nói chung, không có contract_id, không tách theo từng khoản thanh toán |
| Control Policy + 4 Executive Dossiers | Gating đúng ở Tab 3 (không có ô tính toán) | **Trích Sổ Tay Nhân Viên (Employee Handbook Excerpt)** — mô tả chung về quy tắc ứng xử công ty, không có approval threshold cụ thể, không có dossier điều hành |
| Temporary Exception Memo | Có sẵn cùng Control Policy | (theo fallback của Control Policy nếu Tab 3 sai) |
| Amendment History | Gating 1 đúng ở Tab 4 **VÀ** Magnitude, Likelihood đều đúng trong tolerance ±10% | **Sơ Đồ Tổ Chức Công Ty (Organizational Chart)** — chỉ có chức danh và tuyến báo cáo, không có mã nhân viên (EMP-XXXX), không có approval record |
| Employee Directory | Có sẵn cùng Amendment History | (theo fallback của Amendment History nếu Tab 4 sai) |
| Bước 2 Tab 6 (PV calculation) | Bước 1 Tab 6 chọn đúng Victor (không có ô tính toán ở Bước 1) | — (không cần fallback, đây là tab cuối) |

**Nguyên tắc fallback:** mỗi tài liệu "trông liên quan nhưng không liên quan" là nội dung tĩnh, dựng sẵn, không cần logic mới ngoài một điều kiện hiển thị đơn giản (`IF unlock == false → show fallback_doc ELSE show real_doc`). Fallback không chứa mấu chốt evidence (tên vendor cụ thể, mã nhân viên, ngưỡng phê duyệt) nên không giúp người chơi trả lời đúng tab kế tiếp — chỉ giúp tab kế tiếp không hoàn toàn "trống", giữ đúng tinh thần "đi tiếp trong tình trạng thiếu dữ liệu" mà không phá vỡ độ khó.

Submit sai ở bất kỳ tab nào → tài liệu tương ứng không xuất hiện, thay vào đó hiển thị fallback ở trên; game vẫn chuyển tab tiếp theo bình thường. Mỗi tab chỉ submit được một lần.

---

## 3. Reassess Hypothesis

| Nhân vật | Trạng thái đầu | Điều kiện chuyển | Trạng thái sau |
|---|---|---|---|
| Victor | Considered | Submit đúng ở Tab 5 (chọn Victor) | Strong |
| Lucas | Considered | Submit đúng ở Tab 4 (Gating 1: red flag, không phải fraud) | Weakened |
| David | Considered | Không có điều kiện | Considered |
| Sophia | Considered | Không có điều kiện | Considered |

Chỉ dùng để hiển thị tường thuật trong Financial Trace Map, không ảnh hưởng điểm/ending.

---

## 4. Financial Trace Map

| # | Nguồn | Nội dung mốc | Layer |
|---|---|---|---|
| 1 | Submit Tab 1 | SGAI lệch chuẩn nhất → External Advisory; DSRI bình thường loại Hypothesis C | Layer 1 |
| 2 | Submit Tab 2 | Northstar chiếm 80.6% khoản chi | — |
| 3 | Submit Tab 3 | Contract và Payment reconcile 100% | — |
| 4 | Submit Tab 4 | Magnitude 12.4× materiality; Likelihood 88.5%; Control Environment vi phạm; Material Weakness | Layer 2 |
| 5 | Submit Tab 5 | EMP-0231 = Victor | — |
| 6 | Submit Tab 6 Bước 1 | Kết luận cuối cùng + phân loại hành vi (Fraud) | Layer 3 |
| 7 | Submit Tab 6 Bước 2 | PV thiệt hại lũy kế 3 năm ≈ 1,073 tỷ (nếu mở khóa) | Layer 3 |

Ghi lại mọi lần submit, kể cả sai, kèm cờ đúng/sai.

---

*Xem tiếp File 3/4 — `SCORING_AND_SAMPLE_TEST_WEEK4.md`: scoring, ending, sample calculation/logic test và explainability.*
