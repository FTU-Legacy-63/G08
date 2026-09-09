# Week 4 — Sample Calculation, Logic Test & Explainability

> Owner: **Nguyễn Minh Hiền — Gameplay & Logic Owner**
> File này đáp ứng mục 6 và 7 của week-4.md. Cơ chế tab-input đầy đủ (cấu trúc từng tab, quy trình submit) nằm trong `logic-chain-and-mapping.md` — file này chỉ tập trung vào việc kiểm thử logic và giải thích được output.

---

## 1. Sample Calculation / Logic Test

Mục đích: kiểm tra engine (submit luôn tiến tới tab kế tiếp; đúng/sai chỉ ảnh hưởng unlock tài liệu + điểm) hoạt động đúng như thiết kế, trước khi giao Development implement. Số liệu canonical lấy từ `Game.pdf`.

### 1.1. Kịch bản test — người chơi trả lời hỗn hợp

| Tab | Lựa chọn người chơi click (UI) | Internal value | Đáp án đúng | Kết quả | Điểm cộng |
|---|---|---|---|---|---|
| Financial Diagnosis | "External Advisory" | `external_advisory` | `external_advisory` | Đúng | +15 |
| Transaction Investigation | "Northstar" | `northstar` | `northstar` | Đúng | +15 |
| Reconciliation | "Tiền đã biến mất" | `tien_bien_mat` | `khop_100_can_xem_control` | Sai | +0 |
| Control Investigation | "Đây là red flag cần giải thích thêm" | `day_la_red_flag_can_giai_thich_them` | `day_la_red_flag_can_giai_thich_them` | Đúng | +20 |
| Responsibility Investigation | "Lucas" | `lucas` | `victor` | Sai | +0 |
| Final Board Review | "Victor" | `victor` | `victor` | Đúng | +20 |

### 1.2. Kết quả kỳ vọng vs kiểm tra thủ công

| Chỉ tiêu | Cách tính | Kỳ vọng | Trạng thái |
|---|---|---|---|
| Tổng điểm | 15+15+0+20+0+20 | 70/100 | Sẵn sàng test |
| Ending | 70 nằm trong khoảng 60–84 | Conditional Succession | Sẵn sàng test |
| Tài liệu unlock | Đúng ở Diagnosis, Transaction, Control (Final không unlock gì) | Vendor Breakdown, Northstar Contract, Payment Ledger, Amendment History mở; Control Policy + 4 dossier KHÔNG mở (sai ở Reconciliation) | Sẵn sàng test |
| Số tab đi qua | Bất kể đúng/sai, luôn đủ 6 tab | 6/6 tab hiển thị, không bị chặn | Sẵn sàng test |
| Financial Trace Log | Ghi đủ 6 mốc, kèm cờ đúng/sai | 6 mốc; mốc #3 (Reconciliation) và #5 (Responsibility) đánh dấu "sai" | Sẵn sàng test |
| Hypothesis state (Victor) | Submit đúng ở Responsibility? Không (chọn Lucas) → không tự chuyển Strong ở bước đó | **Cần xác nhận:** hypothesis Victor có tự chuyển Strong nhờ Final Board Review đúng, hay chỉ dựa vào Responsibility Investigation? Xem mục 3 |

### 1.3. Kịch bản biên (edge case)

| Kịch bản | Mục đích test | Kết quả kỳ vọng |
|---|---|---|
| Trả lời đúng cả 6 tab | Kiểm tra điểm tối đa | 100/100 → Succession Confirmed |
| Trả lời sai cả 6 tab | Kiểm tra điểm tối thiểu | 0/100 → Succession Denied, vẫn đi hết 6 tab, vẫn thấy Final Board Review |
| Đúng 5 tab đầu, sai riêng Final Board Review | Kiểm tra trọng số 20đ của tab cuối ảnh hưởng ending thế nào | 80/100 → Conditional Succession dù toàn bộ investigation đúng |
| Điểm rơi đúng ranh giới (85, 60, 35) | Kiểm tra khoảng ending không có lỗ hổng | 85→Confirmed; 84→Conditional; 60→Conditional; 59→Delayed; 35→Delayed; 34→Denied |

**Cần Development xác nhận trước khi build:** biên khoảng điểm dùng `>=` hay `>`, để tránh lệch 1 điểm rơi sai ending.

---

## 2. Explainability

Theo yêu cầu week-4.md (mục 6): kết quả là gì, vì sao xuất hiện, input nào ảnh hưởng, assumption nào được dùng, output không khẳng định điều gì.

### 2.1. Mẫu giải thích cho từng ending

**Succession Confirmed (≥ 85):**
> "Bạn nhận Succession Confirmed vì đạt {điểm}/100 — trả lời đúng ở hầu hết các bước điều tra chính, bao gồm cả kết luận cuối cùng về Victor tại Final Board Review. Điểm số được cộng từ 6 bước, mỗi bước phản ánh một quyết định gating riêng, không phải từ độ chi tiết của các phép tính bạn tự nhập. Ending này không khẳng định bạn đã đọc đúng 100% tài liệu — chỉ phản ánh các lựa chọn gating đúng."

**Conditional Succession (60–84):**
> "Bạn nhận Conditional Succession vì đạt {điểm}/100 — một số bước điều tra bị bỏ lỡ hoặc kết luận sai, khiến một số tài liệu quan trọng không được mở. Ending này không khẳng định bạn sai hoàn toàn ở investigation chain — chỉ phản ánh rằng chuỗi bằng chứng bạn trình bày còn thiếu một số mắt xích."

**Delayed Succession (35–59):**
> "Bạn nhận Delayed Succession vì đạt {điểm}/100 — phần lớn các bước gating bị trả lời sai, khiến chuỗi bằng chứng không đủ mạnh để Board chấp nhận ngay. Ending này không khẳng định bạn không đủ năng lực — chỉ phản ánh rằng bằng chứng trình bày tại thời điểm 48 giờ chưa đủ thuyết phục."

**Succession Denied (< 35):**
> "Bạn nhận Succession Denied vì đạt {điểm}/100 — hầu hết các bước gating bị trả lời sai. Ending này không khẳng định một kết luận đạo đức về nhân vật người chơi đóng vai — chỉ phản ánh việc chuỗi Financial Trace và Responsibility Conclusion không đủ căn cứ theo tiêu chí đánh giá của Board."

### 2.2. Input nào ảnh hưởng đến ending

Chỉ 6 lựa chọn gating (mỗi tab 1 lựa chọn) ảnh hưởng trực tiếp đến điểm và ending. Các ô nhập tự do (OCF/NI, DSO, Gross Margin, 2 tỷ lệ Control) **không** ảnh hưởng đến điểm hay ending ở phiên bản hiện tại — chỉ lưu để phục vụ chấm điểm chi tiết riêng (Objective Individual Contribution, nếu nhóm làm sau này). Cần nói rõ với Ngọc/Khuê khi thiết kế UI, để không tạo kỳ vọng sai rằng nhập đúng số cũng được cộng điểm.

---

## 3. Assumptions và Limitations của tầng Logic

Tách riêng khỏi assumptions về dữ liệu (Week 3, do Dũng phụ trách).

| Assumption / Limitation | Rationale |
|---|---|
| Mỗi tab chỉ submit được 1 lần, không sửa lại sau khi đã chuyển tab kế tiếp | Giữ engine đơn giản, không cần lưu lịch sử nhiều lần thử của cùng 1 tab |
| Chấm điểm tất-cả-hoặc-không-gì trên field gating, không có điểm từng phần | Tránh logic chấm điểm phức tạp trên ô nhập tự do |
| Ending chỉ dựa vào tổng điểm cuối cùng, không xét thứ tự đúng/sai | Tránh phải thiết kế thêm state machine theo dõi pattern trả lời |
| Ô nhập tự do không ảnh hưởng điểm/unlock ở bản hiện tại | Tránh xử lý parse số, tolerance, rounding ở tầng gameplay logic |
| Hệ thống chỉ đánh giá lựa chọn cuối cùng, không đánh giá lý do/quá trình suy luận | Giới hạn cố hữu của cơ chế select-based gating — trade-off chấp nhận để giữ code nhẹ |
| Document unlock vĩnh viễn trong 1 ván — bỏ lỡ 1 tab thì không mở lại được tài liệu đó | Giữ đúng tinh thần chuỗi tab tuần tự, tránh state phức tạp cho unlock lại |
| Khoảng điểm ending dùng biên đóng ở cận dưới (85 tính vào Confirmed) | Cần Development xác nhận trước khi implement; tổng điểm luôn là số nguyên (15/15/15/20/15/20) nên rủi ro sai lệch thấp |
| Reassess Hypothesis chỉ là thông tin phái sinh để hiển thị, không ảnh hưởng điểm/ending | Tránh 2 nguồn sự thật (dual source of truth) giữa hypothesis state và điểm số |
| **Chưa xác nhận:** Employee Directory có decoy (nhiều dòng), và có thể có 1 lớp validate ẩn thứ hai (so khớp tên tự điền) chưa được tích hợp vào 6-tab engine | Cần Dũng xác nhận trước khi khóa — xem `logic-chain-and-mapping.md` mục 5 |
| Số liệu canonical dùng theo `Game.pdf` (80.65%, 88.46%), khác với số làm tròn ở một số bản nháp trước (80.6%, 88.5%) | Tránh Content và Logic ghi lệch số trong tài liệu cuối |
