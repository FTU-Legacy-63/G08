# Output Explanation & Interface Design — The Last Heir (Week 5)

> Financial meaning, formula, interpretation và limitation của từng output đã được xác định ở Week 3–4 (`input-dictionary.md`, PDF layer document). Tài liệu này chỉ tập trung **cách trình bày** trên interface để user hiểu và hành động đúng — không định nghĩa lại logic.

## 1. Input Design trên Interface

| Input (từ Input Dictionary) | Label hiển thị (KHÔNG dùng tên biến kỹ thuật) | Unit | Example | Required/Optional | Valid range hiển thị | Error message |
| --- | --- | --- | --- | --- | --- | --- |
| `revenue`, `net_income`, `operating_cash_flow` | "Doanh thu thuần", "Lợi nhuận sau thuế", "Dòng tiền HĐKD" | triệu USD | 11,000 | Required | > 0 (riêng NI/OCF có thể âm) | "Giá trị phải lớn hơn 0" (Revenue) |
| `accounts_receivable`, `sga_expense_total` | "Phải thu khách hàng", "Chi phí SG&A (bao gồm Advisory)" | triệu USD | 1,320 | Required | ≥ 0 | "Không được để trống" |
| `northstar_price_paid`, `northstar_fair_market_price` | "Giá Northstar thực trả", "Giá thị trường hợp lý" | triệu USD | 620 / 150 | Required (Tab 4) | > 0 | "Giá trị phải lớn hơn 0" |
| `approved_below_threshold_count` / `total_transactions` | "Số giao dịch dưới ngưỡng duyệt / Tổng giao dịch" | giao dịch | 23 / 26 | Required (Tab 4) | 0 ≤ x ≤ total | "Số giao dịch dưới ngưỡng không thể lớn hơn tổng" |
| `correct_suspect` (lựa chọn) | "Chọn cá nhân chịu trách nhiệm chính" | — | Victor | Required (Tab 6) | 1 trong danh sách nghi phạm | — (dùng dropdown/thẻ chọn, không cho nhập tự do) |
| `discount_rate_r`, `pv_period_years` | "Lãi suất chiết khấu giả định (Ke đã điều chỉnh)", "Số năm lũy kế" | % / năm | 15% / 3 | Đã cho sẵn (không cho user sửa ở MVP) | — | — |

Nguyên tắc áp dụng đúng mục 8 template Week 5: mỗi input có **label tiếng Việt dễ hiểu + đơn vị + ví dụ**, không hiển thị tên biến kỹ thuật (`sga_expense_total`) trực tiếp cho user.

## 2. Output Design trên Interface

### Tab 1 — Financial Diagnosis

> **Kết quả: SGAI = 1.87 — Vượt xa benchmark ngành (1.0–1.1)**
> Đây là biến lệch mạnh nhất trong 3 biến đã tính.
> *Diễn giải: chi phí SG&A (bao gồm Advisory) tăng nhanh hơn nhiều so với doanh thu — dấu hiệu dòng tiền chảy ra qua chi phí, không phải qua doanh thu ảo.*
> *Giới hạn: DSRI = 1.0 (bình thường) → loại trừ giả thuyết Aggressive Revenue Recognition, không loại trừ các giả thuyết khác.*
> → Tiếp tục điều tra ở Tab 4 (Control Investigation).

### Tab 4 — Control Investigation

> **Kết luận: Material Weakness**
> Magnitude = 470 triệu USD (12.4× Materiality Threshold 38 triệu USD) · Likelihood = "Reasonably possible" trở lên (23/26 giao dịch dưới ngưỡng duyệt)
> *Diễn giải: mức chênh lệch giá vượt xa ngưỡng trọng yếu, kết hợp tần suất tự phê duyệt cao → vi phạm Control Environment.*
> *Giới hạn: kết luận dựa trên ngưỡng tự đặt (xem `assumptions.md`), không phải chuẩn kiểm toán chính thức.*
> → Tiếp tục điều tra ở Tab 6 (Final Board Review).

### Tab 6 — Final Board Review (main output cuối)

> **Responsibility Conclusion: Victor — Fraud**
> **Financial Consequence (bonus): ≈ 1,073 triệu USD** — thiệt hại lũy kế 3 năm nếu hành vi không bị phát hiện.
> *Diễn giải: dựa trên PV của khoản chênh lệch giá 470 triệu USD/năm, chiết khấu ở r = 15% trong 3 năm.*
> *Giới hạn: đây là ước tính giả định tần suất giao dịch tương tự lặp lại hàng năm — không phải dự báo tài chính chính thức.*
> → Màn hình tổng kết: breakdown điểm 3 Tab + toàn bộ evidence đã dùng đúng/sai.

Mỗi output tuân thủ đủ 7 thành phần theo mục 9 template: **main result nổi bật, unit rõ, interpretation, comparison/context (so benchmark hoặc threshold), explanation, limitation, next action.**

## 3. Interface Explainability (mục 10 template)

| Cơ chế | Áp dụng ở đâu | Nội dung |
| --- | --- | --- |
| Assumption box (cố định, không phải popup) | Tab 1, Tab 4 | "Benchmark DSRI/SGAI/TATA và ngưỡng Materiality là giả định của nhóm, xem chi tiết tại mục Assumptions trong game" |
| Tooltip trên từng biến | Tab 1 | Hover vào "SGAI" → hiện công thức `(SGA₁/Rev₁)/(SGA₀/Rev₀)` và ý nghĩa |
| Reason statement sau mỗi câu hỏi gating | Tab 1, Tab 4 | "Vì sao DSRI bình thường loại trừ Aggressive Revenue Recognition?" — 1–2 câu giải thích, không phải toàn bộ lý thuyết Beneish |
| Warning khi kết quả trái trực giác | Tab 1 (Target Product — M-Score đầy đủ) | "M-Score tổng hợp không vượt ngưỡng dù SGAI đã cảnh báo — đây là giới hạn đã biết của mô hình, không phải lỗi tính toán" |
| Breakdown bằng chứng đã dùng/bỏ sót | Màn hình tổng kết sau Tab 6 | Liệt kê bằng chứng đúng, bằng chứng bị nhiễu, bằng chứng bị bỏ sót — đối chiếu Final Case Logic |

## 4. Working Interface Draft — trạng thái mong đợi cuối Week 5

Theo Fallback Scope đã chốt ở Week 2, bản draft tối thiểu cần **chạy thật** (không phải mock) cho:
- Tab 1: nhập/tính 3 biến MVP, 2 câu hỏi gating, chấm điểm.
- Tab 4: nhập Magnitude/Likelihood, tra ma trận Severity (có thể là bảng tra cứu tĩnh, không cần thuật toán phức tạp).
- Tab 6: chọn thủ phạm (dropdown/thẻ chọn), khóa/mở câu hỏi PV theo điều kiện, chấm điểm bonus.

Tab 2, 3, 5 (Document Viewer, Evidence Board, Suspect Profiles) **có thể là mockup tĩnh** ở Week 5 miễn là nội dung dữ liệu đã đúng (từ `input-dictionary.md` và hồ sơ nghi phạm), nhưng phải được thay bằng bản chạy thật trước Week 6 theo đúng nguyên tắc "mockup chỉ hỗ trợ flow, không thay thế progress build".

## 5. Revision Log

| Ngày/Checkpoint | Thay đổi | Lý do |
| --- | --- | --- |
| Sau khi chốt 3-layer framework (PDF) | Feature scope, user flow và output explanation được viết lại hoàn toàn quanh cấu trúc Tab 1/4/6 thay vì luồng 5 bước chung chung ở Week 2 gốc | Đảm bảo Week 5 phản ánh đúng logic tài chính đã chốt, tránh lệch giữa UI và financial logic |
| Cần xác nhận ở Checkpoint 5 | Cấu trúc Tab 2/3/5 (Document Viewer, Evidence Board, Suspect Profiles) là suy luận dựa trên các phần đã có ở Week 1/2, chưa có tên chính thức trong tài liệu trước đó | Cần Ngọc/Khuê xác nhận lại tên và ranh giới 3 Tab này trước khi commit |
