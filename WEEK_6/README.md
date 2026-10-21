# THE LAST HEIR — BUILD AND VERIFICATION GUIDE

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 6

## 1. Project and Current Status

The Last Heir là trò chơi điều tra tài chính giả lập của nhóm G08, học phần NHA408E. Người học kết nối báo cáo, giao dịch, kiểm soát và lời khai để tạo biên bản về NST-01 và chọn hành động quản trị.

Bản đối chiếu là `THE_LAST_HEIR_FULL_GAME_FINAL(3).html`, 120.507.192 byte. Bộ kiểm tra ngày 21/10/2026 giải nén đủ năm chương, chạy 40 tình huống logic và 18 phép dữ liệu, đều khớp kỳ vọng. Chưa xác nhận chơi toàn bộ giao diện hoặc nhiều trình duyệt trong đợt rà soát này.

Bản đã dùng cho các phép kiểm tra được lưu tên `THE_LAST_HEIR_FULL_GAME_FINAL(3).html`. Theo kết quả đối chiếu trong tệp phản hồi `THE_LAST_HEIR_Documentation_Revision_Plan(2).docx`, bản `THE_LAST_HEIR_FULL_GAME_FINAL(8).html` có cùng dung lượng 120.507.192 byte và cùng SHA-256 `aa2e501a80c7abea6948f2a5c1a7de73f0853e0d188bf4598c53dac24a431f42`. Tệp (3) sẵn có đã được băm lại và khớp giá trị này; thông tin đồng nhất với tệp (8) được dẫn theo biên bản phản hồi. Vì vậy, giữ tên (3) trong hồ sơ kiểm tra để truy vết, đồng thời ghi nhận tên (8) của bản được dùng trong phản hồi.

## 2. File Map

| Tệp hoặc thư mục | Nội dung |
|---|---|
| [WEEK_6_BUILD_INTEGRATION_TESTING_FINAL.md](WEEK_6_BUILD_INTEGRATION_TESTING_FINAL.md) | Bản chạy, kiến trúc, tích hợp và mức sẵn sàng |
| [TEST_CASES_FINAL.md](TEST_CASES_FINAL.md) | Kết quả đã chạy và kế hoạch giao diện |
| [BUG_LOG_FINAL.md](BUG_LOG_FINAL.md) | Vấn đề, ưu tiên và điều kiện đóng |
| [SCOPE_FREEZE_FINAL.md](SCOPE_FREEZE_FINAL.md) | Phạm vi chốt và điều kiện hoàn tất |
| [CONTRIBUTION_EVIDENCE_FINAL.md](CONTRIBUTION_EVIDENCE_FINAL.md) | Đầu mối và bằng chứng đóng góp |
| [SAMPLE_DATA/case_data.json](SAMPLE_DATA/case_data.json) | Dữ liệu mô phỏng dùng đối chiếu |
| [SCRIPTS/verify_game.cjs](SCRIPTS/verify_game.cjs) | Mã kiểm tra dùng các mô-đun chuẩn của Node.js |
| [EVIDENCE/build_inventory.json](EVIDENCE/build_inventory.json) | Mã băm và danh mục bản chạy |
| [EVIDENCE/logic_checks.json](EVIDENCE/logic_checks.json) | Kết quả 40 tình huống logic |
| [EVIDENCE/financial_checks.json](EVIDENCE/financial_checks.json) | Kết quả 18 phép đối chiếu dữ liệu |
| [EVIDENCE/browser_checks.json](EVIDENCE/browser_checks.json) | Phạm vi giao diện chưa chạy |

Tệp trò chơi chứa đa phương tiện không được sao chép vào gói tài liệu. Dùng đúng tệp HTML đã được cung cấp; kiểm tra mã băm nếu cần xác định bản.

## 3. Run the Game

1. Tải đầy đủ tệp HTML, mở trên trình duyệt có hỗ trợ `DecompressionStream`.
2. Xem hoặc bỏ qua giới thiệu; bắt đầu Chương I và thực hiện các bước theo nguồn.
3. Khi hoàn thành chương, đọc bàn giao rồi tiếp tục.
4. Sau biên bản Hội đồng, hoàn thành ba quyết định để xem kết quả.
5. Khi bắt đầu lại, đọc xác nhận xóa toàn bộ lượt chơi trước khi đồng ý.

Khả năng lưu và khôi phục phải được thử trên trình duyệt sử dụng. Nếu mở trực tiếp gặp hạn chế, thử phục vụ cùng tệp qua máy chủ tĩnh cục bộ và kiểm tra lại trước buổi trình diễn. Chưa có đường dẫn phân phối công khai hoặc gói dự phòng độc lập được xác nhận trong hồ sơ này.

## 4. Rerun the Logic Checks

Mã kiểm tra sử dụng Node.js, không cần cài gói phụ thuộc. Lần chạy đã ghi nhận dùng Node.js v24.19.0. Trong thư mục `WEEK_6`, thay đường dẫn ví dụ bằng vị trí HTML thực tế rồi chạy:

```bash
node SCRIPTS/verify_game.cjs "/duong-dan/THE_LAST_HEIR_FULL_GAME_FINAL(3).html" SAMPLE_DATA/case_data.json EVIDENCE
```

Lệnh đọc HTML, giải nén chương, chạy hàm gốc trong môi trường cô lập và ghi lại ba tệp kết quả dữ liệu, logic, danh mục. Mã không sửa tệp trò chơi. Việc chạy lại cập nhật kết quả trong thư mục đầu ra đã chọn.

Kỳ vọng của bản hiện tại là 40/40 tình huống logic và 18/18 phép dữ liệu khớp. Thay đổi nội dung HTML có thể tạo sai khác cần được giải thích, không thay kỳ vọng để tự tạo kết quả khớp. Có thể thay đường dẫn ví dụ bằng tệp (8) khi mã băm khớp; đổi tên tệp không tự đồng nghĩa đổi nội dung.

## 5. Key Outputs and Limitations

Chuỗi mẫu là chênh kế hoạch 3,0 → tư vấn 2,6 → NST-01 bằng 2,6 → điều tra kiểm soát → trách nhiệm Victor và rủi ro gian lận. Lượt tự giải hoàn toàn với ba quyết định cân bằng cho 100 điểm và chấp thuận kế nhiệm trong kiểm tra hàm.

Ngày nghiệm thu NS-051 khác nhau giữa nguồn; thời điểm cam kết toàn bộ NST-01 cần làm rõ. Kết quả kiểm tra hàm không chứng minh giao diện hoàn chỉnh, hiệu quả học tập hoặc mọi môi trường đều lưu được. Hành vi chưa xác nhận được ghi tại bảng kiểm thử, không ghi đã hoàn thành.
