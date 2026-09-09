# Week 4 — Project Logic Chain & Input–Logic–Output Mapping

> Owner: **Nguyễn Minh Hiền — Gameplay & Logic Owner**
> Phạm vi: chỉ phần Financial/Investigation Logic. Input gốc (nguồn dữ liệu, ý nghĩa tài chính) thuộc trách nhiệm của Phạm Triệu Tiến Dũng (Financial Content & Input); nội dung case/dossier thuộc Tôn Khánh Ngọc (Storyline & Output). File này không định nghĩa lại input hay nội dung case, chỉ mô tả logic biến input thành output.

---

## 1. Project Logic Chain

Bám theo chain tổng của cả nhóm (week-4.md, mục 3):

> Problem → Target user → User task → Difficulty → Technology support → Input → Financial logic → Output → User action

Đoạn thuộc phạm vi Gameplay & Logic (Input → Financial logic → Output → User action):

> Người chơi nhận **Input** từ 4 nhóm dữ liệu đã chốt ở Week 3 (Financial Overview, Transaction, Contract/Control, Responsibility Evidence — do Dũng định nghĩa, số liệu canonical lấy từ `Game.pdf`). Ở mỗi giai đoạn điều tra, **Financial/Investigation Logic** yêu cầu người chơi tự tính toán (ghi vào ô nhập tự do, không chấm đúng/sai) rồi đưa ra một lựa chọn gating duy nhất phản ánh kết luận của họ ở giai đoạn đó. Logic so sánh lựa chọn này với đáp án đúng đã định trước, quyết định **Output** ở hai tầng: tầng tức thời (tài liệu tiếp theo có unlock hay không) và tầng tích lũy (điểm cộng vào tổng, ghi vào Financial Trace Log kèm cờ đúng/sai). Sau sáu giai đoạn, tổng điểm quyết định một trong bốn **Output** cuối cùng (ending), mỗi ending đi kèm một đoạn giải thích (xem file `sample-calculation-and-explainability.md`). **User Action** cuối cùng là người chơi đọc lại toàn bộ Financial Trace Log (kể cả những chỗ chọn sai) và đoạn giải thích ending, từ đó hiểu được chuỗi suy luận nào đã dẫn đến kết quả — đúng desired outcome của Week 2: *"cải thiện khả năng tổng hợp và lập luận từ thông tin tài chính phân mảnh"*, không chỉ đơn thuần biết đúng/sai.

### Tự kiểm tra (theo mục 3, week-4.md)

| Câu hỏi | Trả lời |
|---|---|
| Input có thực sự liên quan đến task? | Có — mỗi ô nhập tự do bám trực tiếp một phép tính trong storyline (OCF/NI, DSO, Gross Margin, 2 tỷ lệ Control) |
| Logic có sử dụng input? | Có dùng phần lựa chọn gating để quyết định tiến trình; các ô số hiện **chưa** được logic dùng để tính điểm — đây là giới hạn đã ghi rõ trong Assumptions, không phải thiếu sót |
| Output có phản ánh logic? | Có — ending và Trace Log phản ánh trực tiếp chuỗi lựa chọn gating |
| User có thể hành động sau output? | Có — đọc lại Trace Log + giải thích ending để hiểu sai ở đâu |
| Công nghệ có vai trò rõ? | Có — xem `technical-readiness.md` |

---

## 2. Core Process → Storyline Mapping

| Core Process | Phần storyline | Hành động chính của người chơi | Output — đồng đội cần hiểu kết quả là gì |
|---|---|---|---|
| Screen | Financial Diagnosis | Quét Financial Overview, không có gì highlight sẵn | Nhận diện: doanh thu/lợi nhuận vẫn tăng nhưng dòng tiền hoạt động suy yếu |
| Analyse | Financial Diagnosis | Tự tính OCF/NI 2 kỳ, kiểm tra DSO/Gross Margin, chọn focus item, submit | Xác định đúng driver chính là External Advisory |
| Drill Down | Transaction Investigation | Chọn vendor trọng tâm, submit | Xác định Northstar là vendor chiếm 80.65% khoản chi bất thường |
| Reconcile | Reconciliation | Chọn kết luận đối chiếu Contract vs Payment, submit | Nhận ra hợp đồng và thanh toán khớp 100% — không thể kết luận "tiền biến mất" |
| Drill Down + Analyse | Control Investigation | Tính 2 tỷ lệ, chọn nhận định về pattern, submit | Xác định 92.40% ngoài exception, 88.46% dưới ngưỡng duyệt là red flag cần giải thích thêm, chưa phải proof |
| Connect Evidence | Responsibility Investigation | Chọn người khớp với EMP-0231, submit | Nối được Amendment No. 3 với Victor |
| Conclude | Final Board Review | Chọn kết luận cuối cùng, submit | Nhận ending tương ứng với tổng điểm |

---

## 3. Input–Financial Logic–Output Mapping (chính thức hóa)

Bảng dưới đây map trực tiếp input (nguồn: `Game.pdf`, do Dũng chuẩn bị) sang logic và output của tầng Gameplay & Logic. Số liệu canonical lấy từ `Game.pdf` — có 2 điểm số liệu được làm tròn khác ở các bản nháp trước, nay thống nhất theo Game.pdf: **Northstar concentration = 80.65%** (không phải 80.6%), **payments below threshold = 88.46%** (không phải 88.5%).

| Input (từ Dũng) | Financial meaning | Rule / Process (Logic) | Output |
|---|---|---|---|
| revenue_previous, revenue_current, net_income_previous, net_income_current | Doanh thu, lợi nhuận ròng 2 kỳ | Người chơi tự tính % tăng trưởng (ghi vào ô nhập tự do, không chấm) | Ghi nhận "reported performance vẫn ổn" — không phải trường gating |
| ocf_previous, ocf_current, net_income 2 kỳ | Khả năng tạo tiền so với lợi nhuận | Người chơi tự tính OCF/NI 2 kỳ (ô nhập tự do); rule tham chiếu: giảm > 10% giữa 2 kỳ được coi là material (0.91→0.75, giảm 17.6%) | Không tự động chấm; chỉ dùng làm căn cứ để người chơi chọn đúng ở câu hỏi gating "mục nào cần điều tra tiếp" |
| dso_previous/current, gross_margin_previous/current | DSO, Gross Margin 2 kỳ | Ô nhập tự do — không chấm điểm | Đóng vai trò "distractor hợp lệ" trong câu hỏi gating, không phải driver chính |
| external_advisory_previous, external_advisory_current, dropdown lựa chọn focus item | Biến động External Advisory | So sánh lựa chọn gating với đáp án đúng `external_advisory` | Đúng → unlock Vendor Breakdown, +15 điểm. Sai → không unlock, +0 điểm, vẫn sang tab kế |
| vendor_payment (5 vendor), external_advisory_total, lựa chọn vendor trọng tâm | Mức độ tập trung chi tiêu theo vendor | So sánh lựa chọn gating với đáp án đúng `northstar` (500/620 = 80.65%) | Đúng → unlock Northstar Contract + Payment Ledger, +15 điểm |
| contract_value, total_payment, lựa chọn kết luận đối chiếu | Đối chiếu hợp đồng vs thanh toán | So sánh lựa chọn gating với đáp án đúng `khop_100_can_xem_control` (500=500, reconcile 100%) | Đúng → unlock Control Policy + 4 dossier, +15 điểm |
| payment_amount (26 dòng), approval_threshold, exception_duration/limit, lựa chọn nhận định pattern | Payment pattern vs control rule | Ô nhập tự do cho 2 tỷ lệ (462/500=92.40%, 23/26=88.46%); so sánh lựa chọn gating với đáp án đúng `day_la_red_flag_can_giai_thich_them` | Đúng → unlock Amendment History, +20 điểm |
| Employee Directory (danh sách nhiều dòng, có decoy), amendment authorized_by, lựa chọn nhân vật | Resolve EMP-0231 → Victor | Người chơi tự dò danh sách Employee Directory (không resolve tự động); so sánh lựa chọn gating với đáp án đúng `victor` | Đúng → +15 điểm; không unlock thêm tài liệu |
| Lựa chọn kết luận cuối cùng ở Final Board Review | Primary management responsibility | So sánh lựa chọn gating với đáp án đúng `victor` | Đúng → +20 điểm; luôn kết thúc game, tra bảng ending theo tổng điểm |

---

## 4. Formula / Rule / Scoring / Classification đang dùng

Theo phân loại của week-4.md (mục 5), engine Gameplay & Logic dùng đủ 4 loại:

### Formula
Áp dụng ở tầng ô nhập tự do (không chấm điểm, chỉ tham chiếu — người chơi tự tính, xem chi tiết công thức trong `Game.pdf`):
- Revenue/NI growth = (current − previous) / previous × 100%
- OCF/NI = OCF / NI, tính riêng từng kỳ
- Vendor concentration = vendor_payment / total × 100%
- Payment reconciliation = total_payment / contract_value × 100%
- Exception ratio = paid_after_exception / total_payment × 100%
- Threshold ratio = payments_below_threshold / payment_count × 100%

### Rule (threshold tham chiếu, không phải gating)
- OCF/NI giảm > 10% giữa 2 kỳ → coi là "material" (0.91→0.75 = −17.6%, vượt ngưỡng)
- Approval threshold = VND 20 tỷ/payment (theo Control Policy)
- Temporary exception: 30 ngày, tối đa VND 40 tỷ

### Classification
Mỗi tab kết thúc bằng 1 câu hỏi phân loại rời rạc (gating field) — người chơi chọn 1 trong N lựa chọn, hệ thống so `===` với đáp án đúng đã định trước. Đây là cơ chế chính, chi tiết đầy đủ 6 tab xem `sample-calculation-and-explainability.md` mục Sample Calculation.

### Scoring
Điểm tổng 100, chia 6 tab: 15/15/15/20/15/20 (Financial Diagnosis / Transaction Investigation / Reconciliation / Control Investigation / Responsibility Investigation / Final Board Review). Chấm kiểu tất-cả-hoặc-không-gì trên field gating của mỗi tab — không có điểm từng phần. Quy đổi điểm sang ending là bước classification thứ hai (xem file `sample-calculation-and-explainability.md`, mục Ending).

---

## 5. Điểm mở — cần Dũng xác nhận trước khi khóa mapping

1. **Employee Directory** không phải 1 dòng đơn — theo input mapping của Dũng, đây là danh sách nhiều nhân viên (có decoy), người chơi tự dò tìm EMP-0231. Việc này không đổi engine (vẫn chỉ 1 tài liệu unlock), chỉ cần UI/Content đảm bảo danh sách đủ dài để giữ độ khó.
2. **Lớp validate ẩn thứ hai** — ghi chú của Dũng ở Nhóm 4 Input mapping đề cập một validation "so khớp tên người chơi tự điền với employee_id đúng, chạy sau khi submit, không hiển thị cho người chơi". Cần xác nhận đây có phải là field **trùng lặp** với `employeeMatch` (dropdown ở Responsibility Investigation) hay là 1 field **độc lập thêm** — nếu độc lập, cấu trúc điểm 6 tab hiện tại cần điều chỉnh.
