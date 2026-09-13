# User Flow — The Last Heir (Week 5)

## 1. User Goal (kế thừa từ Week 1–2, không viết lại)

Sinh viên (target user) đi từ dữ liệu tài chính tổng hợp đến một **Responsibility Conclusion có căn cứ** về Victor, thể hiện được: (1) tín hiệu tài chính nào đáng ngờ, (2) kiểm soát nào bị vi phạm, (3) ai chịu trách nhiệm và thiệt hại tài chính cụ thể là bao nhiêu.

Câu hỏi kiểm tra (mục 5 template Week 5):
- User có biết bắt đầu ở đâu không? → Có, Progress Tracker luôn hiển thị Tab đang mở.
- Mỗi bước có phục vụ goal không? → Có, mỗi Tab là điều kiện mở khóa Tab kế tiếp (xem Solution Structure revision).
- Có bước nào không cần thiết không? → Optional feature (cutscene, export) không nằm trên đường găng, xem `feature-scope.md`.
- Output có dẫn tới next action rõ không? → Có, mỗi Tab kết thúc bằng nút "Tiếp tục điều tra" dẫn sang Tab tiếp theo.

## 2. Happy Path

| Step | User action | System response | Evidence |
| --- | --- | --- | --- |
| 1 | Mở Tab 2 (Document Viewer), đọc báo cáo tài chính 2 kỳ | Hiển thị đầy đủ tài liệu; đánh dấu tài liệu nào là "operational data" cho Layer 1 | `input-dictionary.md` — Layer 1 |
| 2 | Chuyển sang Tab 3 (Evidence & Assumption Board), chọn các dòng liên quan (AR, SG&A/Advisory, OCF...) và đánh dấu đáng tin | Board cập nhật danh sách bằng chứng đã chọn; unlock nút vào Tab 1 | Data flow — bước Validation |
| 3 | Vào Tab 1, nhập/xem 3 biến DSRI, SGAI, TATA; so với Benchmark Reference Panel | Hệ thống tính đúng 3 biến; hỏi gating 1 (biến lệch mạnh nhất) | Sample data 2 kỳ |
| 4 | Trả lời đúng: SGAI lệch mạnh nhất | Hỏi gating 2: DSRI dùng để loại hypothesis nào | — |
| 5 | Trả lời đúng: loại Aggressive Revenue Recognition → thu hẹp về Separate Cash-Outflow | Unlock Tab 5 (Suspect Profiles) và Tab 4 | 15 điểm Tab 1 |
| 6 | Xem Tab 5, đọc hồ sơ nghi phạm (bao gồm Victor) | Hiển thị động cơ/quan hệ từng nghi phạm | — |
| 7 | Vào Tab 4, xác định Component COSO bị vi phạm (Control Environment) | Hệ thống xác nhận đúng | — |
| 8 | Nhập/xem Magnitude (620 − 150 = 470 triệu USD) so Materiality (38 triệu USD); nhập Likelihood (23/26) | Tra ma trận Severity → Material Weakness | Input dictionary — Layer 2 |
| 9 | Vào Tab 6, chọn Victor + phân loại hành vi "Fraud" | Đúng → unlock câu hỏi PV bonus | — |
| 10 | Nhập công thức PV = 470 × [1−(1.15)⁻³]/0.15 ≈ 1,073 triệu USD (sai số ±10%) | Hệ thống chấm đúng, cộng bonus | Đáp án đúng trong `input-dictionary.md` |
| 11 | Xem màn hình kết quả cuối: Responsibility Conclusion + Financial Consequence | Hiển thị tổng kết 3 layer, breakdown điểm | Main output cuối |

## 3. Alternative Path

| Tình huống | User action | System response |
| --- | --- | --- |
| Chọn nhầm biến lệch mạnh nhất ở Tab 1 (VD chọn DSRI thay vì SGAI) | Chọn lại | Hệ thống không cộng 5 điểm phần đó nhưng vẫn cho thử lại, không khóa toàn bộ Tab |
| Dùng Hint Economy ở Tab 1/4/6 khi bí | Bấm nút Hint | Hệ thống trừ thời gian ảo, hiển thị gợi ý một phần (không lộ đáp án) |
| Bỏ qua Tab 5 (Suspect Profiles) rồi vào thẳng Tab 6 | Chọn thủ phạm mà chưa đọc hồ sơ | Vẫn cho phép chọn (không ép buộc đọc), nhưng nếu chọn sai, hệ thống gợi ý quay lại Tab 5 |
| Chọn đúng Victor nhưng phân loại hành vi sai (VD "Poor Decision" thay vì "Fraud") | Hệ thống báo hành vi chưa khớp | Vẫn unlock câu hỏi PV (vì thủ phạm đúng), nhưng ghi nhận điểm phân loại hành vi thấp hơn |

## 4. Error Path

| Tình huống lỗi | Nguyên nhân | System response |
| --- | --- | --- |
| Nhập giá trị âm cho Revenue/Total Assets | Vi phạm valid range trong Input Dictionary (`> 0`) | Hiển thị lỗi: "Giá trị phải lớn hơn 0", không cho tính tiếp |
| Bỏ trống trường bắt buộc (VD `net_income`) ở Tab 1 | Thiếu input | Chặn nút "Tính toán", highlight trường thiếu |
| Chọn thủ phạm sai ở Tab 6 | User chưa dùng đủ bằng chứng từ Tab 3/4 | Câu hỏi PV **không mở khóa** (theo thiết kế đã chốt: "không có chênh lệch giá do sai phạm của X để tính"); hệ thống hiển thị lý do và gợi ý xem lại Evidence Board |
| Nhập công thức PV sai định dạng (chữ thay vì số) | Input không đúng type | Hiển thị lỗi format, giữ nguyên giá trị đã nhập trước đó để sửa |
| Vào thẳng Tab 4 hoặc Tab 6 khi Tab trước chưa hoàn thành | Vi phạm điều kiện mở khóa tuần tự | Tab bị khóa (icon ổ khóa), tooltip: "Hoàn thành Tab 1 trước khi tiếp tục" |
| Kết quả M-Score (Target Product) không vượt ngưỡng −1.78 dù SGAI đã cảnh báo | Giới hạn của mô hình Beneish gốc (thiết kế cho earnings inflation, không phải cash-outflow) | Không phải lỗi hệ thống — hiển thị ghi chú limitation, không chặn tiến trình; xem `assumptions.md` |

## 5. Bắt đầu và kết thúc

- **Điểm bắt đầu:** màn hình Tab 2 (Document Viewer) ngay sau intro — không bắt đầu từ menu.
- **Điểm kết thúc:** màn hình tổng kết sau Tab 6, hiển thị Responsibility Conclusion, breakdown 3 layer, và Financial Consequence (nếu mở khóa được bonus).
