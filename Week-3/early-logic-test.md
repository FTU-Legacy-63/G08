# Early Logic Test

Mục tiêu: chứng minh input trong `data/sample-data.json` đủ để chạy đúng công thức của cả 3 layer, khớp với các con số đã cố định trong thiết kế game (`NHA408E___VAI_TRÒ___Ý_TƯỞNG__7_.pdf`).

## Layer 1 — Beneish MVP (3 biến)

| Input | Expected process | Expected output | Actual (tính tay từ sample-data.json) | Issue |
| ----- | ----------------- | ---------------- | --------------------------------------- | ----- |
| AR0=400, Rev0=4000, AR1=460, Rev1=4400 | DSRI = (AR1/Rev1)/(AR0/Rev0) | ~1.0 – nằm trong benchmark 1.0–1.2 (bình thường) | DSRI = (460/4400)/(400/4000) = 0.1045/0.10 = **1.0455** | Không |
| SGA0=320, Rev0=4000, SGA1=610, Rev1=4400 | SGAI = (SGA1/Rev1)/(SGA0/Rev0) | rõ ràng cao hơn benchmark 1.0–1.1 (bất thường mạnh) | SGAI = (610/4400)/(320/4000) = 0.1386/0.08 = **1.7330** | Không |
| NI1=760, OCF1=550, TotalAssets1=9000 | TATA = (NI1−OCF1)/TotalAssets1 | nằm trong hoặc sát biên benchmark −0.05–0.05 | TATA = (760−550)/9000 = **0.0233** | Không |

**Kết luận test:** SGAI (1.733) lệch benchmark rõ nhất so với DSRI (1.0455, trong ngưỡng bình thường) và TATA (0.0233, trong ngưỡng bình thường) → khớp đúng thiết kế "Gating Q1 = SGAI". DSRI bình thường → khớp đúng thiết kế "Gating Q2: loại trừ Aggressive Revenue Recognition, thu hẹp về Advisory".

## Layer 2 — COSO + SOX 404 Severity

| Input | Expected process | Expected output | Actual | Issue |
| ----- | ----------------- | ---------------- | ------ | ----- |
| price_paid=620, fair_value=150 | Magnitude = \|620−150\| | 470 | **470** | Không |
| net_income (kỳ 1) = 760, materiality_rate = 5% | Materiality Threshold = 5% × NI | 38 | 0.05 × 760 = **38** | Không |
| Magnitude=470, Materiality=38 | Magnitude / Materiality | ~12.4 lần | 470/38 = **12.37 ≈ 12.4 lần** | Không |
| transactions_under_threshold=23, transactions_total=26 | Likelihood ratio | cao, nghiêng "reasonably possible" trở lên | 23/26 = **0.8846 (88.5%)** | Không |

**Kết luận test:** Magnitude vượt Materiality Threshold 12.4 lần + Likelihood ratio 88.5% → tra ma trận Likelihood × Magnitude cho kết luận **Material Weakness**, khớp đúng thiết kế game.

## Layer 3 — Fraud Triangle + Present Value

| Input | Expected process | Expected output | Actual | Issue |
| ----- | ----------------- | ---------------- | ------ | ----- |
| suspect_id = "Victor", correct_suspect_id = "Victor" | So khớp thủ phạm | Đúng → mở khóa câu hỏi PV | Khớp → **mở khóa** | Không |
| annual_overpayment = 470 (lấy từ Layer 2), r = 15%, n = 3 | PV = 470 × [1−(1.15)^-3]/0.15 | ≈ 1,073 tỷ | (1.15)^-3 = 0.657516; (1−0.657516)/0.15 = 2.28323; 470 × 2.28323 = **1,073.1 tỷ** | Không |
| suspect_id sai (ví dụ chọn Suspect_B) | So khớp thủ phạm | Sai → không mở khóa câu hỏi PV | Không mở khóa vì `suspect_id != correct_suspect_id` | Không |
| user_pv_answer = 1,150 (giả lập người chơi làm tròn) | So sai số với 1,073.1, cho phép ±10% | Chấp nhận (vì |1150−1073.1|/1073.1 ≈ 7.2% ≤ 10%) | **Chấp nhận** | Không |
| user_pv_answer = 1,300 (giả lập sai số lớn) | So sai số, cho phép ±10% | Từ chối (vì |1300−1073.1|/1073.1 ≈ 21.1% > 10%) | **Từ chối** | Không |

## Kết luận chung của early logic test

Toàn bộ input trong `sample-data.json` đủ để: (1) tính đúng 3 biến MVP và tái tạo đúng kết luận gating đã thiết kế; (2) tính đúng Magnitude, Materiality và tỷ lệ 12.4 lần đã nêu trong game design; (3) tính đúng PV ≈ 1.073 tỷ và mô phỏng đúng cơ chế "PV chỉ mở khóa khi chọn đúng thủ phạm" cùng ngưỡng sai số ±10%. Input đã sẵn sàng để logic owner (Hiền) chuyển thành code ở các tuần sau; không phát hiện field thiếu hoặc unit mismatch nào ở bước kiểm tra này.
