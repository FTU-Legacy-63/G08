# The Last Heir — Assumptions, Limitations & Technical Readiness (Week 4)

> Học phần: **NHA408E**
> Nhóm: **G08**
> File 4/4 của bộ tài liệu Week 4 — tương ứng mục 5 (Assumptions/Limitations), mục 8 (Technical Readiness) và mục 9 (Midterm Repo Readiness) của Week 4 Guide

---

## 1. Assumptions và Limitations của tầng Logic

| Assumption / Limitation | Rationale |
|---|---|
| Free input ở Tab 1, Tab 4 và Bước 2 Tab 6 được chấm điểm theo tolerance (±10%), khác với nguyên tắc "free input chỉ log, không chấm" ở các tab khác | Đây là ngoại lệ có chủ đích để phản ánh đúng Layer 1/2/3 mới — các layer này đặt trọng tâm vào việc tính đúng số, không chỉ chọn đúng gating |
| Severity Assessment (Tab 4 Gating 3) và behaviour classification (Tab 6 Bước 1) là gating dropdown độc lập, không phải suy ra tự động từ free input | Giữ engine đơn giản: mọi kết luận định tính vẫn đi qua dropdown so khớp đáp án, không cần logic suy diễn phức tạp |
| Bước 2 Tab 6 chỉ mở khi Bước 1 chọn đúng Victor | Buộc Layer 3 nối liền với việc tìm ra đúng thủ phạm, tránh tách rời khỏi mạch điều tra chính |
| Bonus 10 điểm nằm ngoài thang 100, không ảnh hưởng ranh giới ending | Tránh phải thiết kế lại 4 mức ending đã chốt ở Week 3; giữ ending ổn định qua các version |
| Với mọi tab có ô nhập tự do (hiện tại: Tab 1, Tab 4), unlock = Gating đúng VÀ tất cả ô nhập tự do của tab đó đúng trong tolerance — đây là quy tắc chuẩn của engine, không phải ngoại lệ riêng cho 2 tab này | Buộc người chơi phải tính đúng số để mở tài liệu, thay vì có thể đoán đúng gating mà bỏ qua phần tính toán |
| Mỗi tab vẫn chỉ submit được 1 lần, không sửa lại | Giữ nguyên từ thiết kế trước, không đổi vì thêm layer |
| Ending chỉ dựa vào tổng điểm thang 100, không xét thứ tự đúng/sai | Giữ nguyên từ thiết kế trước |
| market_price_benchmark, discount_rate_r, projection_years là giả định của team (xem docs/assumptions.md Week 3) | Không đổi so với Week 3 |
| Fallback document (khi tài liệu chính không unlock) là nội dung tĩnh, dựng sẵn 1 lần cho mỗi tab, không sinh động theo lựa chọn sai cụ thể của người chơi | Giữ engine đơn giản: chỉ cần 1 bản fallback cố định mỗi tab, không cần logic branching theo từng loại câu trả lời sai |

---

## 2. Technical Readiness

Theo mục 8 Week 4 Guide, nhóm không tạo mới technical route ở Week 4 mà kế thừa quyết định đã chốt ở Tuần 2 (`SOLUTION_STRUCTURE.md`, mục 7 — Initial Route Hypothesis), vì logic 3 layer bổ sung ở Week 4 không làm thay đổi route kỹ thuật, chỉ làm giàu financial logic chạy trên route đó.

| Hạng mục | Lựa chọn | Ghi chú |
|---|---|---|
| Coding environment / route chính | **Code based web**, hướng interactive flow | Vì main output đòi hỏi trạng thái thay đổi theo lựa chọn của người chơi (chọn bằng chứng, submit gating ảnh hưởng đến unlock/điểm), cần tương tác thực chứ không chỉ xem tĩnh |
| Route dự phòng (fallback kỹ thuật) | **Prototype (Figma bấm được) + file logic viết tay** | Dùng nếu phần code tương tác không kịp hoàn thành; file logic mô tả cách chấm điểm theo đúng bảng ở File 2/4 và File 3/4 |
| Data storage | File cấu trúc tĩnh dạng JSON hoặc bảng | Không cần database vì Target Scope chỉ có một vụ án (một bộ evidence, một logic vụ án đúng) |
| Framework / deployment platform | Kế thừa từ route Code based web đã chốt Tuần 2 | Chưa có thay đổi ở Week 4; sẽ xác nhận lại cụ thể ở Week 5–6 khi bước sang product refinement |
| AI-assisted coding tool | Theo Tool Guide chung của học phần (`docs/tools/ai-coding.md`) | Dùng để hỗ trợ implement engine 6-tab, không thay thế việc nhóm tự hiểu và kiểm thử logic |

### 2.1 Vì sao route này vẫn khả thi với logic Week 4

Ba layer mới (Beneish M-Score, COSO/SOX Severity, Fraud Triangle → Financial Consequence) đều là các phép tính số học đơn giản (hiệu số, tỷ lệ, so sánh ngưỡng, PV) và các bảng tra cứu tĩnh (COSO component, Severity level) — không đòi hỏi thay đổi kiến trúc, không cần thêm dịch vụ backend phức tạp. Toàn bộ có thể triển khai bằng logic phía client hoặc một hàm chấm điểm đơn giản, phù hợp với route "Code based web" đã chọn.

---

## 3. Deployment Route và Fallback

| Hạng mục | Nội dung |
|---|---|
| Deployment route chính | Triển khai như một web app tương tác (theo route Code based web), cho phép người chơi truy cập trực tiếp qua trình duyệt, không cần cài đặt |
| Deployment fallback | Nếu không kịp deploy bản chạy được, dùng bản prototype Figma bấm được kèm file logic chấm điểm viết tay (đã nêu ở mục 2) để demo luồng game và minh họa cách engine phản hồi |
| Điều kiện chuyển sang fallback | Khi rủi ro thời gian/kỹ thuật khiến phần code tương tác (đặc biệt là engine tolerance-based scoring ở Tab 1/Tab 4/Tab 6 Bước 2) không hoàn thiện kịp trước mốc đánh giá |

---

## 4. Midterm Repo Readiness (theo mục 9–10 Week 4 Guide)

Repo (gồm cả 4 file Week 4 này cùng các artifact Week 1–3 đã có: `PROJECT_PROPOSAL.md`, `SOLUTION_STRUCTURE.md`, input dictionary/sample data/assumptions Tuần 3) cần giúp người đọc tìm được:

- Problem và target user — đã có ở `PROJECT_PROPOSAL.md` (Tuần 1)
- Product direction và MVP — đã có ở `SOLUTION_STRUCTURE.md` (Tuần 2)
- Input và sources — đã có ở tài liệu Tuần 3
- Financial logic — `PROJECT_LOGIC_CHAIN_WEEK4.md` + `GAMEPLAY_MECHANICS_WEEK4.md` (File 1–2/4)
- Sample calculation — `SCORING_AND_SAMPLE_TEST_WEEK4.md` (File 3/4)
- Assumptions, limitations, technical route, deployment fallback — file này (File 4/4)
- Contribution evidence — cập nhật theo `docs/assessment/midterm-checklist.md`

Nhóm tự kiểm tra lại bằng `../assessment/midterm-checklist.md` trước khi nộp giữa kỳ, đúng theo yêu cầu mục 9 của Week 4 Guide. Giữa kỳ không yêu cầu final product hoàn chỉnh — chỉ cần chứng minh: direction rõ, input khả thi, financial logic explainable (đã thể hiện ở File 1–3/4), MVP realistic, progress evidence, và contribution cá nhân rõ.
