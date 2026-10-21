# WEEK 3 — INPUT AND EVIDENCE OVERVIEW

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 3

## 1. Purpose and Document Map

Hồ sơ Tuần 3 được tách thành sáu tệp Markdown và thư mục dữ liệu. Nội dung kế thừa hồ sơ Tuần 1 và [cấu trúc giải pháp Tuần 2](../WEEK_2/SOLUTION-STRUCTURE.md).

| Tệp | Nội dung chính |
|---|---|
| [OVERVIEW_FINAL.md](OVERVIEW_FINAL.md) | Tổng quan, chiến lược dữ liệu, cấu trúc, phân công và đối chiếu yêu cầu |
| [INPUT_DICTIONARY_FINAL.md](INPUT_DICTIONARY_FINAL.md) | Ý nghĩa trường, kiểu, đơn vị, ví dụ, kiểm tra và xử lý thiếu |
| [SOURCES_FINAL.md](SOURCES_FINAL.md) | Nguồn chuyên môn, nguồn vận hành, mục đích, giới hạn và người phụ trách |
| [ASSUMPTIONS_FINAL.md](ASSUMPTIONS_FINAL.md) | Giả định, quy tắc giả lập, giới hạn kết luận và phần cần kiểm tra tiếp |
| [DATA_FLOW_FINAL.md](DATA_FLOW_FINAL.md) | Luồng dữ liệu, kiểm tra, mẫu đầy đủ và kết quả kiểm tra logic sớm |
| [HTML_DATA_BINDING_FINAL.md](HTML_DATA_BINDING_FINAL.md) | Liên kết mã, trạng thái, chuyển bằng chứng, điểm, thời gian và kết thúc |
| [DATA/case_data.json](DATA/case_data.json) | Dữ liệu tài chính chuẩn hóa, 5 tài khoản, 9 bút toán, 7 hợp đồng và 9 bàn giao |
| [DATA/rules.json](DATA/rules.json) | Quy tắc giả lập, 45 điểm kiểm tra, điểm số, thời gian và kết thúc |
| [DATA/evidence.json](DATA/evidence.json) | Hồ sơ thực tế trích từ mã, đủ 10 dòng giám sát và 5 lời khai |
| [DATA/answer_key.json](DATA/answer_key.json) | Dữ liệu đối chiếu nội bộ phục vụ kiểm tra; có chứa lời giải |

Nguồn đối chiếu là `THE_LAST_HEIR_FULL_GAME_FINAL(3).html`, dung lượng 120.507.192 byte. Năm chương đã được giải nén để đọc dữ liệu và mã. Hai nhóm kiểm tra đã thực hiện là đối chiếu dữ liệu và chạy một số hàm logic gốc; chưa phải kiểm thử giao diện toàn bộ hoặc đo lường hiệu quả học tập.

## 2. Continuity and Data Strategy

Vấn đề trung tâm vẫn là khó khăn tổng hợp thông tin. Sản phẩm sử dụng một tình huống giả lập có kiểm soát để người học nối báo cáo tài chính, giao dịch, chính sách và lời khai thành kết luận kiểm soát, trách nhiệm.

### 2.1 Operational Data and Problem Evidence

| Nhóm | Nội dung | Vai trò |
|---|---|---|
| Dữ liệu vận hành | Báo cáo, ngân sách, sổ tư vấn, hợp đồng, chính sách, nhật ký, ngoại lệ, lời khai và quy tắc trò chơi | Tạo tình huống, xử lý lựa chọn và xác định đầu ra |
| Bằng chứng về vấn đề người dùng | Quan sát, phản hồi, giải thích của người học và kết quả thử nghiệm | Kiểm tra nhu cầu, khó khăn và giá trị học tập |

README cung cấp giả định ban đầu và ghi nhận điều chỉnh hướng dự án. Hồ sơ chưa có bộ kết quả khảo sát hoặc thử nghiệm người học định lượng; không dùng tình huống được thiết kế sẵn để thay bằng chứng về người dùng thực tế.

### 2.2 Simulated Data Choice

Dữ liệu Aster Foods được mô phỏng vì mục tiêu là luyện lập luận, không phải cung cấp công cụ quyết định tài chính theo thời gian thực. Dữ liệu cố định giúp kiểm tra bằng tay, kiểm soát thời điểm mở hồ sơ và xác định rõ giới hạn kết luận.

Khái niệm và kỹ thuật dựa trên nguồn chuyên môn. Số tiền, ngưỡng, nhân vật, hành vi và mã FIN-* thuộc thiết kế giả lập; chúng không phải quy định do nguồn chuyên môn bên ngoài ban hành.

## 3. Data Architecture and Source Inventory

Dữ liệu khi chạy được nhúng trong JavaScript hoặc nội dung HTML của từng chương. Các JSON trong thư mục `DATA` là bản dữ liệu đối chiếu được bàn giao cùng tài liệu; bản chạy hiện tại không nạp các tệp này từ bên ngoài.

| Thành phần | Dữ liệu xác nhận trong HTML |
|---|---|
| Chương I | 21 tài liệu trong `docs`, gồm báo cáo, kế hoạch, sổ và chứng từ hỗ trợ |
| Chương II | 5 tài khoản trong `ACCOUNTS`, 20 chứng từ trong `DOCS` và ánh xạ vai trò |
| Chương III | 9 bút toán `TX`, 7 hợp đồng `CONTRACTS`, 9 hồ sơ bàn giao `WORK` |
| Chương IV | 24 nhóm tài liệu nền, sự kiện, ngoại lệ và giám sát; báo cáo `MONROWS` đủ 10 dòng |
| Chương V | 5 lời khai `CLAIMS`, 4 cấu hình trách nhiệm `RESP`, hồ sơ bổ sung và hồ sơ Northstar |
| Lớp điều phối | 45 mã điểm kiểm tra, trạng thái chung, điểm và điều kiện kết thúc |

Trước đây, `case_data.json` chỉ trích bốn hợp đồng và `evidence(1).json` chỉ trích ba dòng NST-01. HTML có đủ bảy hợp đồng và mười dòng; thiếu hụt đó thuộc bản trích xuất. Các bản dữ liệu mới và bảng trong [DATA_FLOW_FINAL.md](DATA_FLOW_FINAL.md) sử dụng đầy đủ dữ liệu từ HTML, không tự tạo hợp đồng hoặc ngoại lệ mới.

### 3.1 Data Layers

- **Hồ sơ người học đọc:** sự kiện, số liệu, ngày, vai trò và nội dung chứng từ.
- **Dữ liệu đối chiếu nội bộ:** vai trò đúng, tập hồ sơ cần thiết, mã kết luận và đáp án.
- **Trạng thái thao tác:** đã xem, đang dùng, đã xác lập, số lỗi, gợi ý, lời giải và hết giờ.
- **Đầu ra:** kết quả từng chương, hồ sơ trách nhiệm, biên bản cuối và điểm.

Các lớp có thể nằm cùng mã nguồn nhưng không được đồng nhất khi mô tả. Tiêu chí không hiển thị sẵn đáp án trên giao diện khác với việc bảo mật mã JavaScript khỏi người kiểm tra nguồn.

## 4. Data Package and Readiness

Các tệp JSON được tạo để kiểm tra và bàn giao dữ liệu cùng tài liệu. Số liệu tài chính dùng trường chuẩn hóa; hồ sơ trích từ trò chơi giữ nguyên định danh và nội dung nguồn. Cách đổi tên trường và ngày được ghi trong [từ điển đầu vào](INPUT_DICTIONARY_FINAL.md).

- `case_data.json` bổ sung đủ bảy hợp đồng, chín hồ sơ bàn giao và toàn bộ chín bút toán.
- `evidence.json` giữ 21 tài liệu Chương I, 20 chứng từ Chương II, 24 nhóm tài liệu Chương IV, mười dòng giám sát, 13 hồ sơ Chương V và năm lời khai.
- `rules.json` ghi đúng điều kiện tạm dừng 15 giây, cách đếm lỗi, làm tròn, gợi ý, cửa sổ nhân chứng và thứ tự kết thúc.
- `answer_key.json` tách cấu hình đối chiếu khỏi hồ sơ người học. Bản chụp trạng thái xem lời giải là mẫu nội bộ, không khẳng định đây là tập lựa chọn hợp lệ duy nhất.

Đầu vào đủ để tái hiện tình huống và kiểm tra các phép xử lý đã mô tả. Các giới hạn về thời điểm cam kết, ngày nghiệm thu khác nhau giữa nguồn, trình duyệt và bằng chứng người học được ghi riêng trong [ASSUMPTIONS_FINAL.md](ASSUMPTIONS_FINAL.md).

## 5. Responsibility and Evidence Map

| Thành viên | Trách nhiệm Tuần 3 | Tệp hoặc sản phẩm | Hành động tiếp theo |
|---|---|---|---|
| Phạm Quỳnh Phương | Tổng hợp và thống nhất giữa các tuần | Tệp tổng quan; bảng đối chiếu yêu cầu | Đối chiếu hồ sơ nộp với lịch sử thực tế |
| Phạm Triệu Tiến Dũng | Dữ liệu tài chính và giao dịch | `INPUT_DICTIONARY_FINAL.md`, `DATA/case_data.json`, mẫu trong tệp luồng dữ liệu | Làm rõ ngày nghiệm thu và thời điểm cam kết |
| Nguyễn Minh Hiền | Quy tắc, kiểm tra và điểm | `DATA_FLOW_FINAL.md`, `DATA/rules.json`, `DATA/answer_key.json` | Kiểm tra thêm điều kiện biên và giao diện |
| Tôn Khánh Ngọc | Nguồn, chứng từ và lời khai | `SOURCES_FINAL.md`, `ASSUMPTIONS_FINAL.md`, `DATA/evidence.json` | Hoàn thiện nguồn tài sản và biên bản thử người học |
| Đinh Thị Minh Khuê | Liên kết và trạng thái | `HTML_DATA_BINDING_FINAL.md` | Kiểm tra trình duyệt, lưu, khôi phục và chuyển chương |

Bảng kế thừa phân công trong hồ sơ nhóm. Bằng chứng đóng góp cá nhân phải lấy từ đầu ra và lịch sử thực tế; không tự gán mã bản thay đổi hoặc kết quả thử nghiệm chưa có.

## 6. Week 3 Completion Record

| Yêu cầu trong hướng dẫn | Tệp và trạng thái |
|---|---|
| Phân biệt dữ liệu vận hành với bằng chứng vấn đề | Tệp tổng quan, mục 2; ghi rõ chưa có khảo sát định lượng |
| Từ điển đầu vào | [INPUT_DICTIONARY_FINAL.md](INPUT_DICTIONARY_FINAL.md); có kiểu, đơn vị, ví dụ, kiểm tra và xử lý thiếu |
| Danh mục nguồn | [SOURCES_FINAL.md](SOURCES_FINAL.md); có mục đích, giới hạn, đầu mối và ngày rà soát nguồn công khai |
| Dữ liệu mô phỏng và cấu trúc | Thư mục `DATA`; mẫu và tính tay trong [DATA_FLOW_FINAL.md](DATA_FLOW_FINAL.md) |
| Giả định và giới hạn | [ASSUMPTIONS_FINAL.md](ASSUMPTIONS_FINAL.md) |
| Luồng và kiểm tra đầu vào | Tệp luồng dữ liệu, mục 2–3 |
| Kiểm tra sớm có kết quả | Tệp luồng dữ liệu, mục 5; 12 nhóm dữ liệu và 21 tình huống logic |
| Liên kết mã và trạng thái | [HTML_DATA_BINDING_FINAL.md](HTML_DATA_BINDING_FINAL.md) |
| Người phụ trách và bước tiếp theo | Tệp tổng quan, mục 5 |

Hồ sơ bao phủ các nội dung cần trình bày cho Tuần 3, đồng thời phân biệt phần đã kiểm tra với phần cần kiểm tra tiếp. Đây không phải xác nhận của giảng viên về kết quả nộp bài.

## 7. Handoff to Week 4

Tuần tiếp theo có thể tiếp tục hoàn thiện phép xử lý và kiểm thử giao diện trên cơ sở đầu vào đã xác định. Ưu tiên làm rõ thời điểm cam kết của NST-01, xử lý nhất quán ngày nghiệm thu và ghi nhận kết quả thử với người học thực tế.

Khi điều chỉnh dữ liệu, cần cập nhật đồng thời từ điển, nguồn, giả định, kết quả đối chiếu và liên kết với mã. Không dùng điểm hoặc kết quả kế nhiệm để thay đổi sự thật của tình huống.
