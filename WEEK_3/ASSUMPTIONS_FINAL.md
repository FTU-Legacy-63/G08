# WEEK 3 — ASSUMPTIONS AND LIMITATIONS

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 3

## 1. Purpose and Use

Tài liệu công khai các giả định, quy tắc giả lập và giới hạn ảnh hưởng đến cách đọc kết quả. Mục tiêu là bảo đảm phép xử lý và kết luận không vượt quá hồ sơ đã có.

Tình huống phục vụ học tập, sử dụng số liệu cố định. Tài liệu được đọc cùng [SOURCES_FINAL.md](SOURCES_FINAL.md), [DATA_FLOW_FINAL.md](DATA_FLOW_FINAL.md) và [HTML_DATA_BINDING_FINAL.md](HTML_DATA_BINDING_FINAL.md).

## 2. Assumptions and Conclusion Limits

| Nội dung | Giả định hoặc quy tắc áp dụng | Giới hạn |
|---|---|---|
| Bản chất tình huống | Doanh nghiệp, người và số liệu được mô phỏng | Không quy kết chủ thể thật |
| Chênh lệch | 3,0 và 2,6 định hướng điều tra | Chưa tự chứng minh không hợp lệ, chủ ý hoặc gian lận |
| Ngân sách | Kế hoạch được duyệt là cơ sở đối chiếu | Dự báo nháp không tự thay phê duyệt |
| Ranh giới | Cùng hợp đồng và cùng mục đích | Cùng nhà cung cấp hoặc đúng tổng chưa đủ |
| Thẩm quyền | Áp dụng tổng giá trị liên quan theo FIN-AUTH-05 | Quy tắc giả lập; không phải ngưỡng của chuẩn mực nghề nghiệp |
| Thời điểm cộng dồn | Mã Chương IV xét tổng đã phát sinh 0,9 → 1,8 → 2,6 | 19/07 là mốc vượt ngưỡng trong mô hình này |
| Trần cam kết | NST-01 ghi trần 2,8 | Chưa xác lập rõ thời điểm nghĩa vụ toàn bộ có hiệu lực; không suy ra phê duyệt ban đầu chỉ phát sinh 19/07 |
| Cách xử lý thay thế | Thay cách lấy quyết định, giữ nguyên cấp | Sự cố không thay thế quyết định của người có thẩm quyền |
| Ủy quyền | Maya trong phạm vi quản lý tài chính tới 1,0 | Không đứng thay giám đốc tài chính |
| Phân luồng | Hệ thống dùng yêu cầu hiện tại | Việc ghi nhật ký không đồng nghĩa tự phát hiện và chuyển cấp |
| Quy trách nhiệm | Thẩm quyền, hiểu biết cụ thể và hành động phải cùng gắn một người | Bộ tiêu chí lập luận của tình huống, không phải phép kiểm định chuẩn hóa |
| Chương IV | Dừng ở cơ sở điều tra khả năng vô hiệu hóa kiểm soát | Chưa quy hành vi chủ động cho cá nhân |
| Chương V | Bổ sung hồ sơ về hiểu biết và hành động | Không quy lỗi chỉ từ chức danh |
| Xung đột lợi ích | Tăng quan ngại về động cơ và rủi ro | Không tự chứng minh hành vi hoặc gian lận |
| Kết luận gian lận | Rủi ro cần điều tra độc lập | Chưa có đủ hồ sơ để kết luận gian lận đã được chứng minh |
| Điểm và kết thúc | Đánh giá quá trình, hỗ trợ và lựa chọn quản trị | Không thay đổi sự thật của tình huống |

FIN-PROC-11 còn yêu cầu phê duyệt trước khi cam kết có hiệu lực. Vì vậy, cách hiểu trần hợp đồng và thời điểm cam kết là giới hạn thiết kế cần được ghi rõ nếu phát triển tiếp. Không tự giải quyết khoảng trống bằng cách giả định trần 2,8 chắc chắn là hạn mức khung hoặc chắc chắn là cam kết toàn bộ.

## 3. Limitations and Follow-up Checks

Các giới hạn ảnh hưởng trực tiếp đến cách đọc kết quả gồm:

- Một tình huống cố định hỗ trợ xem lại và chơi lại; không tạo nhiều vụ việc điều tra độc lập.
- Bộ tiêu chí trách nhiệm, điểm và kết thúc là thiết kế học tập, chưa phải thang đo đã được kiểm định.
- Mốc cộng dồn phải giữ giới hạn về thời điểm cam kết; ngày nghiệm thu NS-051 giữa hai chương cần được làm rõ khi chuẩn hóa.
- Số liệu nguồn nằm một phần trong HTML. Các bản JSON bàn giao đã bổ sung đủ bảy hợp đồng và mười dòng giám sát; khi đổi mã trò chơi cần cập nhật lại bản dữ liệu tương ứng.
- Các diễn giải nội bộ và hướng dẫn có thể giúp người học; không khẳng định mọi tương tác đều hoàn toàn không gợi đáp án nếu chưa kiểm tra riêng giao diện.
- Chưa có phép đo hiệu quả học tập, biên bản kiểm thử đầy đủ trên nhiều trình duyệt hoặc danh mục nguồn tài sản trình bày.
- Dung lượng HTML lớn và lưu trên trình duyệt có thể ảnh hưởng phân phối, hiệu năng và khả năng tiếp tục.

Các bước kiểm tra tiếp theo là đi trọn luồng giao diện, thử chọn thiếu và thừa hồ sơ, xác nhận khóa theo chương, thử hết giờ và xem lời giải, thử khôi phục sau tải lại, kiểm tra mã bắt đầu lại và ghi nhận kết quả từ người học.

## 4. Source Discrepancies and Preservation

| Điểm cần giữ theo nguồn | Cách bàn giao | Bước cần làm rõ |
|---|---|---|
| NS-051 nghiệm thu 05/05 trong `WORK`, 07/05 trong hồ sơ Chương IV | Giữ cả hai giá trị theo nguồn; không tự sửa cho khớp | Xác định ngày đúng và cập nhật đồng thời các chương nếu chỉnh trò chơi |
| Trần NST-01 là 2,8; mô hình cộng dồn xét 0,9 → 1,8 → 2,6 | Tách trần cam kết với tổng phát sinh | Làm rõ thời điểm toàn bộ cam kết có hiệu lực |
| `DOCS[].roles` và `ANSWERS` không hoàn toàn trùng nhau | Lưu riêng siêu dữ liệu và bảng chấp nhận; dùng `ANSWERS` để mô tả cách chấm | Đồng bộ lại cấu hình nếu tiếp tục bảo trì |
| FIN-OPS-Q2 là hàng đợi dùng chung | Giữ đúng tên tài khoản và giới hạn nhận diện | Không gán người thao tác nếu chưa có nhật ký bổ sung |

Các khác biệt được ghi nhận để giữ trung thực với trò chơi hiện tại. Chúng không được giải quyết bằng cách tạo thêm chứng từ, ngày hoặc giả định chưa có trong nguồn.

## 5. Ownership and Review Status

Phạm Triệu Tiến Dũng theo dõi chênh lệch dữ liệu tài chính, ngày và cam kết; Tôn Khánh Ngọc theo dõi giới hạn hồ sơ; Nguyễn Minh Hiền theo dõi giả định chấm điểm; Đinh Thị Minh Khuê theo dõi lưu và chuyển trạng thái; Phạm Quỳnh Phương thống nhất nội dung.

Các phép đối chiếu dữ liệu và kiểm tra hàm đã có kết quả ở [DATA_FLOW_FINAL.md](DATA_FLOW_FINAL.md). Kiểm thử giao diện đầy đủ, nhiều trình duyệt và hiệu quả học tập vẫn là các bước tiếp theo.
