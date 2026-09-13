# Feature Scope — The Last Heir (Week 5)

> Dựa trên: Product Direction & Solution Structure (Week 2, đã revise theo 3-layer framework), Input Dictionary + Data Flow (Week 3), Financial Logic Layer 1/2/3 (Week 4 — Beneish M-Score, COSO/SOX Severity, Fraud Triangle + PV). Week 5 không định nghĩa lại logic tài chính, chỉ xác định feature nào cần có để user *dùng* được logic đó.

## 1. Main Feature

**Main feature: Đường dây điều tra 3-Layer (Layer Engine)** — chuỗi 3 Tab bắt buộc (Tab 1 → Tab 4 → Tab 6), trong đó output của Tab trước là input bắt buộc của Tab sau, kết thúc bằng **Responsibility Conclusion + Financial Consequence**.

Đây là main feature vì nó trực tiếp tạo ra main output đã chốt ở Week 2: nếu bỏ feature này, game không còn cách nào tạo ra kết luận có căn cứ — chỉ còn xem tài liệu mà không có kết quả.

| Tab | Layer | Nhiệm vụ user | Output |
| --- | --- | --- | --- |
| Tab 1 — Financial Diagnosis | Layer 1 (Beneish) | Tính/đọc DSRI, SGAI, TATA; trả lời 2 câu hỏi gating | Biến lệch mạnh nhất + hypothesis bị loại |
| Tab 4 — Control Investigation | Layer 2 (COSO/SOX) | Xác định Component COSO vi phạm; tính Magnitude & Likelihood | Kết luận Material Weakness |
| Tab 6 — Final Board Review | Layer 3 (Fraud Triangle + PV) | Chọn thủ phạm + phân loại hành vi; nếu đúng, tính PV thiệt hại 3 năm | Responsibility Conclusion + con số thiệt hại (bonus) |

## 2. Supporting Features

Các feature này không tự tạo ra main output, nhưng thiếu chúng thì user không biết dùng Layer Engine thế nào:

| Supporting feature | Vai trò | Gắn với Tab |
| --- | --- | --- |
| Document Viewer | Hiển thị báo cáo tài chính, sao kê, hợp đồng — nguồn số liệu cho Layer 1/2 | Tab 2 |
| Evidence & Assumption Board (Lớp 1 — chọn/đánh dấu) | Cho user chọn bằng chứng liên quan và đánh dấu đáng tin/không đáng tin trước khi vào Tab 4 | Tab 3 |
| Suspect Profiles | Hồ sơ động cơ, quan hệ của từng nghi phạm — input bắt buộc để Tab 6 có danh sách `suspect_list` | Tab 5 |
| Benchmark & Threshold Reference Panel | Hiển thị ngưỡng benchmark ngành (DSRI/SGAI/TATA), Materiality Threshold, ngưỡng M-Score −1.78 ngay tại chỗ tính, để user không phải nhớ | Tab 1, Tab 4 |
| Hint Economy | Gợi ý có trả phí bằng thời gian ảo, dùng khi user bí ở một Tab | Tab 1, 3, 4, 6 |
| Progress / Game-State Tracker | Hiển thị Tab nào đã mở khóa, Tab nào còn khóa | Toàn game |

## 3. Optional Features

Không được làm chậm việc hoàn thiện main feature; có thể đóng băng nếu core flow (Tab 1→4→6) chưa chạy hết:

- Hiệu ứng đổi màu real-time trên Assumption Board khi đánh dấu bằng chứng (Lớp 1 kéo-thả).
- Assumption Board Lớp 2 (hint economy nâng cao, gợi ý phân tầng).
- Cutscene mở đầu / narrative transition giữa các Tab.
- Export kết quả điều tra ra file (PDF/ảnh) sau khi hoàn thành Tab 6.
- Bảng xếp hạng hoặc so sánh điểm giữa các lượt chơi.

## 4. Core vs Optional — kiểm tra "bỏ feature này, task còn hoàn thành không?"

| Feature | Bỏ đi thì sao? | Kết luận |
| --- | --- | --- |
| Tab 1/4/6 (Layer Engine) | Không còn main output | **Core** |
| Document Viewer | User không có input để tính Layer 1/2 | **Core** |
| Evidence & Assumption Board (chọn/đánh dấu cơ bản) | Tab 6 (Fraud Triangle) mất căn cứ phân biệt bằng chứng/suy đoán | **Core** (bản checkbox tối thiểu, theo Fallback Scope Week 2) |
| Suspect Profiles | Tab 6 không có `suspect_list` để chọn | **Core** |
| Benchmark Reference Panel | User vẫn tính được nếu benchmark ghi sẵn trong đề bài, chỉ kém tiện | **Optional nhưng nên giữ** |
| Hint Economy | Task vẫn hoàn thành được, chỉ khó hơn | **Optional** |
| Real-time confidence % / Assumption Board Lớp 2 / cutscene / export / leaderboard | Task vẫn hoàn thành đầy đủ | **Optional — đóng băng nếu cần** |

## 5. Ownership

| Feature nhóm | Design owner | Logic/implementation | Explanation copy | Error-path test |
| --- | --- | --- | --- | --- |
| Layer Engine (Tab 1/4/6) | Nguyễn Minh Hiền | Nguyễn Minh Hiền | Phạm Triệu Tiến Dũng | Nguyễn Minh Hiền + Phạm Quỳnh Phương |
| Document Viewer | Đinh Thị Minh Khuê | Đinh Thị Minh Khuê | Tôn Khánh Ngọc | Đinh Thị Minh Khuê |
| Evidence & Assumption Board | Đinh Thị Minh Khuê | Nguyễn Minh Hiền | Tôn Khánh Ngọc | Nguyễn Minh Hiền |
| Suspect Profiles | Tôn Khánh Ngọc | Phạm Triệu Tiến Dũng (Final Case Logic) | Tôn Khánh Ngọc | Phạm Quỳnh Phương |
| Benchmark Reference Panel / Hint Economy | Nguyễn Minh Hiền | Nguyễn Minh Hiền | Phạm Triệu Tiến Dũng | Phạm Quỳnh Phương |
| Integration toàn bộ Tab 1→4→6 | Phạm Quỳnh Phương | Phạm Quỳnh Phương | — | Phạm Quỳnh Phương |
