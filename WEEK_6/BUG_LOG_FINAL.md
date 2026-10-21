# WEEK 6 — BUG AND ISSUE LOG

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 6

## 1. Purpose and Issue Classification

Nhật ký ghi vấn đề có thể truy vết, mức ảnh hưởng, cách tái hiện, người theo dõi và điều kiện đóng. Tách lỗi tài liệu đã sửa, sai lệch dữ liệu còn mở, điểm cần làm rõ thiết kế và hành vi chưa được kiểm thử.

| Mức | Tiêu chí |
|---|---|
| Nghiêm trọng | Chặn chuỗi cốt lõi, sai kết quả tài chính hoặc mất tiến trình đã xác nhận |
| Quan trọng | Sai lệch nguồn, diễn giải hoặc đường xử lý ảnh hưởng nhiệm vụ |
| Nhẹ | Lỗi chữ, bố cục hoặc âm thanh không chặn nhiệm vụ |

Chưa có căn cứ từ đợt rà soát để xác nhận không còn lỗi nghiêm trọng trên mọi giao diện. Không ghi lỗi tương thích, quyền phát phim hoặc thời gian tải như sự cố đã tái hiện nếu chưa chạy được môi trường liên quan.

## 2. Open Data and Design Issues

| Mã | Vấn đề và mức ảnh hưởng | Cách tái hiện, kỳ vọng và thực tế | Trạng thái, đầu mối |
|---|---|---|---|
| DATA-01 | Ngày nghiệm thu NS-051 khác nguồn; quan trọng | Mở `WORK` Chương III và hồ sơ NS-051 Chương IV. Kỳ vọng cùng ngày nếu mô tả cùng một sự kiện; thực tế 05/05 và 07/05 | Còn mở; Dũng phối hợp Ngọc xác định ngày và cập nhật đồng thời nếu sửa mã |
| DESIGN-01 | Thời điểm cam kết toàn bộ NST-01 chưa rõ; quan trọng | Đọc trần hợp đồng 2,8, FIN-PROC-11 và các tổng 0,9/1,8/2,6. Kỳ vọng xác định thời điểm áp dụng phê duyệt trước cam kết; mã hiện dùng mốc 19/07 theo tổng phát sinh | Cần làm rõ; Dũng, Hiền và Ngọc; chưa kết luận đây là lỗi chạy |
| VERIFY-01 | Chưa xác nhận luồng giao diện đầy đủ | Thực hiện bộ UI01–UI12 trong bảng kiểm thử. Kỳ vọng hoàn thành đúng, giữ dữ kiện, thời gian và điểm; chưa có kết quả đợt này | Chưa chạy; Khuê phối hợp nhóm |
| VERIFY-02 | Chưa xác nhận phân phối trên máy đích | Mở bản HTML đúng, kiểm tra nguồn, lưu, âm thanh và kết thúc trên môi trường sử dụng; chưa có biên bản | Chưa chạy; Khuê, Phương |

Hai vấn đề đầu không được khắc phục bằng cách tự thêm ngày, hợp đồng hoặc giả định trong tài liệu. Bộ hồ sơ hiện ghi rõ giới hạn; đó là xử lý tài liệu, không đồng nghĩa mã trò chơi đã được sửa.

Phản hồi bổ sung chưa quyết định ngày nghiệm thu đúng hoặc thời điểm nghĩa vụ toàn bộ NST-01 có hiệu lực. DATA-01 và DESIGN-01 tiếp tục ở trạng thái còn mở. Khi có quyết định, cần cập nhật đồng thời HTML, JSON, lời giải, cách chấm và các kiểm tra chịu ảnh hưởng; không đóng hai mục chỉ từ lần sửa tài liệu này.

## 3. Documentation Corrections

| Mã | Mô tả cũ cần sửa | Nội dung đã chuẩn hóa | Vị trí xác nhận |
|---|---|---|---|
| DOC-01 | Trộn biến động hai năm với vượt kế hoạch | Biên gộp −2,5 / −0,7 điểm; nghiên cứu 1,6 / 0,1; chi khác 2,5 / 0,2 | Tài liệu logic, đầu ra; kiểm tra F07 |
| DOC-02 | Chương V chỉ cần tập chứa đủ bằng chứng đúng | Tập đúng chính xác, không trùng, khả dụng và đánh giá đúng | Cơ chế, luồng; L32–L36 |
| DOC-03 | Tạm dừng từ lần sai thứ ba, chỉ mở lại hồ sơ mới tiếp tục | Từ lỗi mới thứ hai; mở lại hoặc hết 15 giây; lỗi thứ ba mở gợi ý | Tài liệu điểm; L37–L40 |
| DOC-04 | Mỗi gợi ý luôn trừ đúng 0,7 và chỉ ghi một lần mỗi câu | Làm tròn tổng mức trừ; chỉ khử trùng khi có khóa | Tài liệu điểm; L07–L08, L27 |
| DOC-05 | Bắt đầu lại riêng từng chương trong bản tích hợp | Các lối bắt đầu lại được chuyển về xác nhận xóa cả lượt | Tài liệu cơ chế, luồng; mã điều phối |
| DOC-06 | Quy người chọn ngoại lệ NS-101 là Victor | Chỉ xác nhận Victor tạo yêu cầu, đính kèm thư; hàng đợi chung chưa định danh người chọn loại | Logic, giải thích đầu ra |
| DOC-07 | Ghi đã chơi thử, đa trình duyệt, không có lỗi và tải khoảng 4 giây | Chỉ giữ kết quả có lần chạy hiện tại; phần giao diện chưa chạy được ghi riêng | Báo cáo tích hợp và bảng kiểm thử |
| DOC-08 | Khẳng định mọi chứng từ cùng mẫu và không chứa gợi ý | Mô tả đúng mẫu từng chương; việc gợi đáp án cần đánh giá theo thời điểm mở nguồn | Tài liệu đầu vào, đầu ra |
| DOC-09 | Coi bộ tệp tách chương hoặc đường dẫn phân phối đã có | Phân biệt nhánh mã, phương án dự phòng và bản bàn giao đã kiểm tra | Sẵn sàng kỹ thuật, README |
| DOC-LINK-01 | Week 1 dẫn tên tệp tổng hợp Week 2, Week 3 không còn trong cấu trúc bàn giao | Đã thay bằng liên kết tới đề xuất, cấu trúc giải pháp, tổng quan và nguồn đúng thư mục | `WEEK_1.md`, mục 1, 9 và 10; đã kiểm tra đường dẫn |
| DOC-VERSION-01 | Tài liệu dùng tên (3), phản hồi đối chiếu tên (8) | Đã thêm dung lượng, mã băm và nguồn xác nhận cùng nội dung; giữ tên bản kiểm tra lịch sử | `README.md` và báo cáo tích hợp; thông tin tệp (8) theo biên bản phản hồi |

Các sửa đổi trên được thực hiện trong bộ tài liệu. Xác nhận lại sau thay đổi trò chơi cần chạy các trường hợp chịu ảnh hưởng; không đóng lỗi phần mềm chỉ vì câu chữ đã đổi.

## 4. Reproduction and Verification Record

Mỗi lỗi mới cần ghi đủ các trường sau trong biên bản thực tế:

- Mã, chương, bước và mức ưu tiên.
- Bản HTML hoặc mã băm, môi trường chạy và trạng thái lượt chơi.
- Đầu vào, từng thao tác tái hiện, kết quả kỳ vọng và kết quả thực tế.
- Người báo, đầu mối sửa, thay đổi đã áp dụng và nguồn bằng chứng.
- Người xác nhận lại, trường hợp chạy lại và kết quả sau sửa.

Khi có lỗi mới, đặt kỳ vọng theo logic đã chốt rồi chạy tái hiện. Người phụ trách không được ghi đã sửa hoặc đã xác nhận nếu chưa có thay đổi và lần chạy tương ứng.

## 5. Fix Priority and Closure Criteria

Ưu tiên lỗi chặn hoàn thành và sai tài chính, sau đó đến chuyển dữ kiện, điểm, đồng hồ, lưu, hướng dẫn và trình bày. Nếu sửa dữ liệu hoặc quy tắc, chạy lại những kiểm tra liên quan trong [TEST_CASES_FINAL.md](TEST_CASES_FINAL.md) và đường giao diện chịu ảnh hưởng.

DATA-01 chỉ đóng khi xác định được ngày đúng và hai nguồn đã thống nhất hoặc có giải thích rõ rằng đó là hai sự kiện khác nhau. DESIGN-01 chỉ đóng khi tài liệu hợp đồng, chính sách và mô hình thời điểm đã nhất quán. VERIFY-01 và VERIFY-02 cần biên bản thực tế; không đóng bằng mô tả dự kiến.
