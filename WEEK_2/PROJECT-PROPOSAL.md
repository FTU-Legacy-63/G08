# WEEK 2 — PROJECT PROPOSAL

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 2

## 1. Purpose and Document Map

Tài liệu xác định vấn đề, người dùng, kết quả học tập, giá trị sản phẩm, đầu ra, phạm vi, hướng kỹ thuật và phân công. Nội dung kế thừa hồ sơ Tuần 1 và được đối chiếu với `THE_LAST_HEIR_FULL_GAME_FINAL(3).html`.

Hồ sơ Tuần 2 gồm hai tệp độc lập nhưng liên kết với nhau:

| Tệp | Nội dung |
|---|---|
| [PROJECT-PROPOSAL.md](PROJECT-PROPOSAL.md) | Đề xuất, đầu ra, phạm vi tối thiểu, hướng kỹ thuật và phân công |
| [SOLUTION-STRUCTURE.md](SOLUTION-STRUCTURE.md) | Sơ đồ tổng thể, suy ngược từ đầu ra, năm chương, trạng thái và quy tắc đánh giá |

Các mục của hai tệp bao phủ nội dung cần trình bày trong hướng dẫn Tuần 2. Tính năng mở rộng của bản hoàn chỉnh được tách rõ với phạm vi tối thiểu ban đầu.

## 2. Problem-to-Product Continuity

Vấn đề kế thừa là sinh viên khó tổng hợp thông tin từ báo cáo tài chính, giao dịch, quy định và hồ sơ xử lý để đưa ra kết luận kiểm soát có căn cứ. Người dùng mục tiêu vẫn là sinh viên đã có kiến thức tài chính và kiểm soát nội bộ cơ bản.

Hai quyết định cuối của nhiệm vụ được giữ nguyên: bằng chứng có xác lập hành vi chủ động vô hiệu hóa kiểm soát hay không, và cá nhân nào chịu trách nhiệm chính. Công nghệ, điểm số và cốt truyện được lựa chọn để hỗ trợ hai quyết định này.

> The Last Heir giúp người học kết nối nhiều nguồn tài chính và kiểm soát trong một tình huống doanh nghiệp, từ khoanh vùng khoản chênh lệch đến kiểm tra giao dịch, đánh giá hành vi và quy trách nhiệm đúng giới hạn bằng chứng.

## 3. Desired Learning Outcomes

Kết quả mong muốn là người học giải thích được cách đi từ dấu hiệu ban đầu đến kết luận cuối. Việc nhận diện đúng một nhân vật hoặc hoàn thành trò chơi chưa đủ để khẳng định toàn bộ kết quả học tập.

- Phân biệt dấu hiệu tài chính với bằng chứng hỗ trợ kết luận.
- Sử dụng biến động hai năm, cơ cấu theo doanh thu và đối chiếu ngân sách để xác định phần cần điều tra.
- Phân loại nguồn thành cơ sở được phê duyệt, số ghi nhận, giải trình định lượng và thông tin bối cảnh.
- Xác định giao dịch theo hợp đồng và mục đích kinh tế, kiểm tra cả tính đầy đủ và tính liên quan.
- Đối chiếu yêu cầu phê duyệt với nhật ký, ngoại lệ và hành động thực tế.
- Tách thiếu sót hệ thống, thiếu sót kiểm soát và hành vi chủ động của con người.
- Quy trách nhiệm dựa trên bằng chứng và phân biệt xung đột lợi ích với gian lận được chứng minh.

Hiệu quả học tập là mục tiêu cần kiểm chứng bằng quan sát hoặc chơi thử có ghi nhận. Các kiểm tra mã được thực hiện ở Tuần 3 xác nhận một phần logic sản phẩm, không thay thế đánh giá người học.

## 4. Product Value, Form and Pattern

Giá trị chính là tạo môi trường thực hành tổng hợp bằng chứng. Người học cần biết nên mở nguồn nào, nguồn đó chứng minh điều gì và liệu kết luận đang đề xuất đã vượt quá hồ sơ hay chưa.

| Thành phần | Lựa chọn của dự án |
|---|---|
| Giá trị | Luyện kết nối thông tin thành chuỗi lập luận tài chính và kiểm soát |
| Hình thức | Trò chơi điều tra theo tình huống chạy trên trình duyệt |
| Mẫu sản phẩm chính | Trò chơi học tài chính |
| Bối cảnh | Người thừa kế xem lại hồ sơ Aster Foods trước quyết định kế nhiệm |
| Phạm vi nội dung | Một vụ việc cố định, năm chương nối tiếp |
| Phương pháp phản hồi | Đối chiếu lựa chọn, ghi kết quả và cho phép xem lại bằng chứng |

Các bảng tính, sổ điều tra và điểm số là thành phần hỗ trợ. Sản phẩm không được định nghĩa đồng thời như một công cụ tính toán, bảng điều khiển và hệ thống gợi ý độc lập.

## 5. Main Visible Output and User Action

Đầu ra chính là **biên bản kết luận của Hội đồng quản trị về NST-01**. Biên bản thể hiện kết luận kiểm soát, trách nhiệm cá nhân, xung đột lợi ích và mức rủi ro gian lận. Hồ sơ đã xác nhận của từng người được đưa vào kết luận cuối.

| Đầu ra | Mục đích |
|---|---|
| Biên bản kết luận | Tách kết luận kiểm soát với kết luận về gian lận |
| Hồ sơ trách nhiệm cá nhân | Nêu nhận định đối với Victor, Lucas, David và Sophia |
| Biên bản chuyển chương | Giữ kết quả đã xác lập và câu hỏi còn mở |
| Sổ điều tra và bản đồ truy vết | Cho phép xem lại tài khoản, giao dịch và dữ kiện đã sử dụng |
| Kết quả học tập | Phản ánh chất lượng điều tra, kỷ luật, quản trị và mức tự thực hiện |
| Kết quả kế nhiệm | Thể hiện hệ quả của ba quyết định quản trị và điều kiện điểm |

Sau khi xem đầu ra, người học cần trình bày được lý do kết luận và đề xuất cách xử lý tương xứng. Kết quả học tập không được dùng để thay đổi sự thật của tình huống.

## 6. Minimum Viable Product and Scope

Phiên bản khả dụng tối thiểu cần tạo một hành trình hoàn chỉnh từ dấu hiệu đến kết luận có bằng chứng. Năm chương là năm bước lập luận, nhưng số lượng hồ sơ và lớp trình bày có thể rút gọn.

| Nhóm phạm vi | Nội dung |
|---|---|
| Bắt buộc | Một tình huống; khoanh vùng chênh lệch; phân loại chứng từ; ranh giới giao dịch; kiểm tra kiểm soát; kiểm tra lời khai; kết luận có căn cứ |
| Bắt buộc | Lưu kết quả đã xác nhận, xem lại nguồn và hỗ trợ tiếp tục khi gặp khó khăn |
| Mở rộng của bản hoàn chỉnh | Phim mở đầu, hình ảnh, âm thanh, chuyển cảnh, bộ đếm thời gian, ba quyết định kế nhiệm và bốn phim kết thúc |
| Ngoài phạm vi | Dữ liệu doanh nghiệp thật, nhiều vụ việc ngẫu nhiên, mô hình trí tuệ nhân tạo, tài khoản và máy chủ dữ liệu |
| Ngoài phạm vi học thuật | Đánh giá toàn bộ COSO hoặc SOX, mô hình Beneish, chấm tam giác gian lận, phán quyết pháp lý về gian lận |

Phương án dự phòng là giảm số tài liệu gây nhiễu và nội dung đa phương tiện, dùng giao diện đơn giản và trạng thái trong phiên. Các bước lập luận cốt lõi vẫn được giữ.

## 7. Technical Route and Feasibility

Bản hoàn chỉnh dùng HTML, CSS và JavaScript, đóng gói trong một HTML. Năm chương được nén và nhúng; trình duyệt giải nén rồi mở trong khung nội dung. Dữ liệu vận hành được khai báo trong mã từng chương, còn trạng thái chung được quản lý bởi `window.TLH_GAME`.

| Thành phần | Triển khai |
|---|---|
| Giao diện | HTML và CSS |
| Xử lý | JavaScript theo quy tắc cố định |
| Nguồn dữ liệu khi chạy | Đối tượng và mảng nhúng trong mã |
| Đóng gói chương | gzip, base64 và `DecompressionStream` |
| Trạng thái | Bản ghi dùng chung và lưu trình duyệt khi khả dụng |
| Phân phối | Một tệp; không cần máy chủ ứng dụng hoặc đăng nhập |
| Rủi ro thực tế | Dung lượng khoảng 120,5 MB; khả năng lưu tệp cục bộ và tốc độ tùy trình duyệt, thiết bị |

README ghi nhận thay đổi từ Unity/C# sang công nghệ web để giảm độ phức tạp phân phối. Việc chuyển công nghệ giữ nhiệm vụ và chuỗi lập luận; không coi tính năng công nghệ là phát biểu vấn đề của Tuần 1.

## 8. Responsibility and Dependency Map

| Thành viên | Sản phẩm phụ trách | Vị trí bằng chứng | Phụ thuộc và bước tiếp theo |
|---|---|---|---|
| Phạm Quỳnh Phương | Đề xuất, phạm vi và tính thống nhất | Tệp đề xuất; phần cấu trúc tổng thể trong tệp giải pháp | Đối chiếu đầu ra Tuần 3 với mục tiêu |
| Phạm Triệu Tiến Dũng | Chuỗi số liệu và giao dịch | Chương I–III trong tệp giải pháp; dữ liệu Tuần 3 | Kiểm tra số liệu, đơn vị và nguồn |
| Nguyễn Minh Hiền | Kiểm tra, trạng thái và điểm | Chương IV–V và quy tắc điểm trong tệp giải pháp | Đối chiếu các điều kiện kiểm tra Tuần 3 |
| Tôn Khánh Ngọc | Chứng từ, lời khai và kết luận | Chương IV–V; danh mục nguồn và giả định Tuần 3 | Giữ đúng phạm vi chứng minh của hồ sơ |
| Đinh Thị Minh Khuê | Tích hợp và phân phối | Hướng kỹ thuật; tài liệu liên kết HTML Tuần 3 | Kiểm tra chuyển chương, lưu, xem lại và bắt đầu lại |

Phân công kế thừa hồ sơ nhóm. Khi nộp trên kho mã nguồn, bằng chứng đóng góp cần là thay đổi hoặc sản phẩm thực tế của từng người.

## 9. Revision Record and Handoff

Theo README, nhóm giữ vấn đề tổng hợp thông tin và thu hẹp về hai quyết định kiểm soát, trách nhiệm. Bản hoàn chỉnh thay lớp sàng lọc Beneish bằng phân tích báo cáo và chênh lệch có thể truy vết; bổ sung phân loại vai trò chứng từ; xác lập giao dịch theo hợp đồng và mục đích; sử dụng hồ sơ phân luồng, ngoại lệ và lời khai.

Tuần 3 chuyển cấu trúc này thành đầu vào cụ thể: trường dữ liệu, nguồn, giả định, dữ liệu mẫu, kiểm tra, trạng thái bằng chứng và liên kết với HTML. Các nguyên tắc cần giữ là kết luận đúng mức, phân biệt sự thật với điểm số và ghi nhận trung thực mức hỗ trợ.

## 10. Week 2 Completion Record

| Yêu cầu trong hướng dẫn | Tài liệu đáp ứng |
|---|---|
| Vấn đề, người dùng và nhiệm vụ | Tệp đề xuất, mục 2 |
| Kết quả mong muốn, giá trị và mẫu sản phẩm | Tệp đề xuất, mục 3–4 |
| Đầu ra chính và hành động của người dùng | Tệp đề xuất, mục 5 |
| Phạm vi tối thiểu, phần mở rộng, ngoài phạm vi và dự phòng | Tệp đề xuất, mục 6 |
| Hướng kỹ thuật và tính khả thi | Tệp đề xuất, mục 7 |
| Người phụ trách, đầu ra, phụ thuộc và bước tiếp theo | Tệp đề xuất, mục 8 |
| Điều chỉnh và chuyển tiếp | Tệp đề xuất, mục 9 |
| Sơ đồ người dùng–đầu vào–xử lý–đầu ra–hành động | [Tệp cấu trúc giải pháp](SOLUTION-STRUCTURE.md), mục 2 |
| Suy ngược từ đầu ra và chuỗi xử lý | Tệp cấu trúc giải pháp, mục 3–8 |
| Trạng thái, hỗ trợ, điểm và kết thúc | Tệp cấu trúc giải pháp, mục 7–10 |

Đầu vào cần kiểm tra tiếp được chuyển sang [hồ sơ Tuần 3](../WEEK_3/OVERVIEW_FINAL.md). Bảng này xác nhận vị trí nội dung trong bộ tài liệu, không thay thế xác nhận nộp bài của giảng viên.
