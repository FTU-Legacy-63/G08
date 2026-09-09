# Assumptions và Limitations — The Last Heir (Aster Holdings Case)

## 1. Mục đích

Tài liệu này gom các assumptions và limitations đã phát sinh trong quá trình thiết kế dữ liệu (Week 3) và logic gameplay/scoring (Week 4), phục vụ yêu cầu checkpoint Week 4 (mục 3 và mục 9, `week-4.md`). Tài liệu tách riêng theo ba lớp: dữ liệu, rule tài chính, và gameplay/scoring — để người đọc biết một assumption thuộc lớp nào và ai chịu trách nhiệm cập nhật nó.

## 2. Assumptions về dữ liệu (kế thừa từ Week 3)

- Toàn bộ số liệu tài chính của Aster Holdings (Revenue, Net Income, OCF, DSO, Gross Margin, External Advisory, vendor payments, contract value, payment ledger, control policy, amendment history, employee directory) là dữ liệu giả định, được thiết kế phục vụ mục tiêu học tập — không phản ánh một công ty có thật.
- Dữ liệu chỉ so sánh **2 kỳ báo cáo** (kỳ trước / kỳ hiện tại); không có chuỗi dữ liệu nhiều kỳ hơn để kiểm tra xu hướng dài hạn.
- Payment Ledger của Northstar gồm đúng 26 khoản thanh toán, tổng khớp 100% với Contract Value (VND 500 tỷ) — cố tình thiết kế để bác bỏ giả thuyết "tiền biến mất", chuyển trọng tâm điều tra sang control/payment pattern.
- External Advisory không bị đẩy lên mức tăng đột biến kiểu "+400%" ngay từ đầu, để người chơi phải thực sự so sánh nhiều chỉ số (OCF/NI, DSO, Gross Margin) trước khi xác định đúng hướng điều tra, thay vì chỉ click vào con số nổi bật nhất.

## 3. Assumptions về ngưỡng / rule tài chính

| Rule | Ngưỡng đang dùng | Ghi chú về căn cứ |
|---|---|---|
| OCF/NI giảm được coi là "material" | > 10% giữa hai kỳ | Rule tạm do nhóm tự đặt, chưa đối chiếu benchmark ngành |
| DSO tăng, Gross Margin giảm | Không đủ lớn để là driver chính (9.3% và 1pp) | So sánh tương đối với mức tăng của External Advisory (4.96×), chưa có ngưỡng số tuyệt đối |
| Approval threshold | VND 20 tỷ/payment | Cho sẵn trong Control Policy, dùng làm căn cứ phân loại below/above threshold |
| Temporary Exception | 30 ngày, tối đa VND 40 tỷ | Cho sẵn trong Control Policy |
| Vendor concentration | Không có % cố định gọi là "concentrated" | Northstar ở 80.65%/5 vendor được coi hiển nhiên là dominant trong ngữ cảnh bài toán, chưa có ngưỡng % chính thức |

## 4. Assumptions và Limitations về gameplay & scoring logic (Week 4)

| Assumption / Limitation | Lý do |
|---|---|
| Mỗi tab chỉ submit được 1 lần, không sửa lại sau khi chuyển tab | Giữ engine đơn giản, không cần lưu lịch sử nhiều lần thử của cùng 1 tab |
| Chấm điểm all-or-nothing trên field gating của mỗi tab, không có điểm từng phần | Tránh logic chấm điểm phức tạp trên ô nhập tự do; đơn giản hóa validation |
| Ending chỉ dựa vào tổng điểm cuối cùng, không xét thứ tự đúng/sai | Tránh phải thiết kế thêm state machine theo dõi pattern trả lời |
| Ô nhập tự do (OCF/NI, DSO, Gross Margin, 2 tỷ lệ Control) không ảnh hưởng điểm/unlock ở bản hiện tại | Tránh xử lý parse số, tolerance, rounding ở tầng gameplay logic |
| Hệ thống chỉ đánh giá lựa chọn cuối cùng ở mỗi tab, không đánh giá được lý do/quá trình suy luận | Giới hạn cố hữu của cơ chế select-based gating; trade-off đã chấp nhận để giữ code nhẹ |
| Document unlock là vĩnh viễn trong 1 ván chơi, không có cách mở lại nếu bỏ lỡ | Giữ tinh thần "chuỗi tab tuần tự", tránh thêm state phức tạp cho unlock lại |
| Reassess Hypothesis (4 nhân vật) chỉ là thông tin phái sinh để hiển thị, không ảnh hưởng điểm/ending | Tránh hai nguồn sự thật (dual source of truth) giữa hypothesis state và điểm số |

## 5. Limitations chung của toàn hệ thống

- Kết luận cuối game giới hạn ở **"primary management responsibility"**, không được diễn giải thành kết luận pháp lý hay cáo buộc hình sự đối với nhân vật Victor — đúng giới hạn đã đặt ra từ Week 3.
- Toàn bộ dữ liệu là giả định, chưa được kiểm định với dữ liệu tài chính thực tế hoặc chuyên gia trong ngành; các ngưỡng ở mục 3 mang tính minh họa cho mục đích học tập, không dùng để đánh giá công ty thật.
- Ở bản MVP hiện tại, output của các ô nhập tự do chỉ phục vụ lưu trữ quá trình làm bài (có thể dùng cho Objective Individual Contribution sau này), chưa có validation số liệu.

## 6. Điểm cần Development xác nhận thêm trước khi implement

- Cách xử lý biên điểm ending: dùng `>=` hay `>` tại các mốc 85 / 60 / 35 (hiện đang giả định biên đóng ở cận dưới, ví dụ 85 tính vào Confirmed).
- Reassess Hypothesis của Victor có tự động chuyển "Strong" nhờ chọn đúng ở Final Board Review, hay chỉ phụ thuộc riêng vào kết quả tab Responsibility Investigation — hiện chưa chốt, cần nhóm quyết định trước khi build phần hiển thị narrative.
