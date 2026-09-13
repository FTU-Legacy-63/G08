# Data Flow

Mỗi layer là một nhánh `Source/User → Input → Validation → Process → Output` riêng, nối tiếp nhau theo thứ tự Tab 1 → Tab 4 → Tab 6.

## Layer 1 — Tab 1 (Financial Diagnosis)

```
sample-data.json (financial_statements, 2 kỳ)
        → Input: Revenue, Net Income, OCF, AR, SG&A, Total Assets (kỳ 0 & kỳ 1)
        → Validation: đủ 6 field × 2 kỳ, tất cả > 0 (riêng OCF được phép âm),
                       đơn vị thống nhất là tỷ VND
        → Process: tính DSRI = (AR1/Rev1)/(AR0/Rev0)
                    tính SGAI = (SGA1/Rev1)/(SGA0/Rev0)
                    tính TATA = (NI1-OCF1)/TotalAssets1
                    so từng biến với benchmark → xác định biến lệch nhiều nhất
                    dùng DSRI để loại trừ/giữ hypothesis
        → Output: bảng 3 biến + kết luận Gating Q1 (SGAI lệch nhiều nhất)
                   + kết luận Gating Q2 (DSRI bình thường → loại Aggressive
                     Revenue Recognition → thu hẹp về Advisory)
```

Final (mở rộng): cùng flow trên, Input thêm Intangible/PP&E/Depreciation/Debt/Current Assets → Process tính đủ 8 biến và tổng hợp M-Score → Output thêm kết luận đối chiếu ngưỡng −1.78.

## Layer 2 — Tab 4 (Control Investigation)

```
sample-data.json (northstar_transaction, control_review)
        → Input: giá Northstar thực trả, giá thị trường hợp lý, materiality_rate,
                  net_income (kỳ 1, lấy từ Layer 1), transactions_total,
                  transactions_under_threshold, coso_component_violated
        → Validation: giá > 0; 0 ≤ transactions_under_threshold ≤ transactions_total;
                       materiality_rate trong khoảng 0–100%
        → Process: Magnitude = |620 - 150| = 470
                    Materiality Threshold = 5% × 760 = 38
                    Magnitude / Materiality = 12.4 lần
                    Likelihood ratio = 23/26 → "reasonably possible" trở lên
                    Tra ma trận Likelihood × Magnitude
        → Output: kết luận Component COSO vi phạm + kết luận Severity
                   (Material Weakness)
```

## Layer 3 — Tab 6 (Final Board Review)

```
sample-data.json (suspects, correct_suspect_id)
        → Input: suspect_id người chơi chọn, behaviour_classification
        → Validation: suspect_id nằm trong danh sách nghi phạm hợp lệ
        → Process bước 1: so suspect_id với correct_suspect_id
                    → nếu đúng: mở khóa câu hỏi tính PV, dùng
                      annual_overpayment = Magnitude (470, lấy từ Layer 2)
                    → nếu sai: không mở khóa, không tính PV
        → Input bước 2 (chỉ khi mở khóa): user_pv_answer
        → Process bước 2: PV_đúng = 470 × [1-(1.15)^-3]/0.15 ≈ 1,073.1
                    so |user_pv_answer - PV_đúng| / PV_đúng ≤ 10%?
        → Output: kết luận thủ phạm đúng/sai + phân loại hành vi + (nếu đủ điều
                   kiện) điểm thưởng PV
```

## Tổng hợp cuối — Investigation Verdict Report

```
Output Layer 1 + Output Layer 2 + Output Layer 3
        → Process: tổng hợp thành báo cáo 3 phần
        → Output (main output): Investigation Verdict Report hiển thị cho user
        → User action: xem lại layer nào sai/thiếu, đối chiếu cách đọc
                        benchmark/ma trận cho lần điều tra sau
```

## Điểm cần lưu ý khi build (phát hiện sớm ở Tuần 3)

- `net_income` ở Layer 2 phải **lấy lại** từ dữ liệu Layer 1 (kỳ 1), không nhập lại lần hai — tránh hai nguồn sự thật (single source of truth) cho cùng một số liệu.
- `annual_overpayment` ở Layer 3 phải **bằng đúng** Magnitude đã tính ở Layer 2, không phải một input mới — nếu tách rời sẽ phá vỡ nguyên tắc "PV chỉ tính được sau khi có đúng thủ phạm và đúng chênh lệch giá do sai phạm của X" đã nêu trong thiết kế.
- Đơn vị tất cả các trường tiền tệ đã thống nhất là **tỷ VND** trong toàn bộ 3 layer để tránh lỗi mismatch unit.
