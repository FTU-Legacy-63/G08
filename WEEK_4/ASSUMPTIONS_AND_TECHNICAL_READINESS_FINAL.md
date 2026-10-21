# WEEK 4 — ASSUMPTIONS AND TECHNICAL READINESS

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 4

## 1. Purpose and Source Basis

Tài liệu xác định giả định, giới hạn, cấu trúc dữ liệu, hướng kỹ thuật, phương án phân phối và mức sẵn sàng giữa kỳ. Nguồn đối chiếu gồm hồ sơ giả định và sẵn sàng kỹ thuật của nhóm, hướng dẫn Tuần 4, hồ sơ Tuần 1–3 và `THE_LAST_HEIR_FULL_GAME_FINAL(3).html`.

Các tệp đồng hành gồm [chuỗi logic](PROJECT_LOGIC_CHAIN_FINAL.md), [cơ chế trò chơi](GAMEPLAY_MECHANICS_FINAL.md) và [điểm, kiểm tra mẫu](SCORING_AND_SAMPLE_TEST_FINAL.md). Tài liệu tập trung vào các điều kiện ảnh hưởng triển khai, không tạo lại toàn bộ từ điển dữ liệu Tuần 3.

## 2. Financial and Evidence Assumptions

| Nội dung | Quy tắc hoặc giả định | Giới hạn cần giữ |
|---|---|---|
| Tình huống | Doanh nghiệp, nhân vật và số liệu giả lập | Không quy kết chủ thể thật |
| Đơn vị | Phân tích dùng triệu USD | Bảng giao dịch có thể hiển thị USD; 2,6 triệu bằng 2.600.000 USD |
| So sánh | Tách biến động hai năm với chênh lệch kế hoạch | Không dùng 1,6 và 2,5 làm mức vượt kế hoạch của nghiên cứu và chi khác |
| Phải thu | Dùng số dư cuối kỳ / doanh thu năm × 365 | Chỉ là phép ước tính giản lược |
| Ngân sách | Cơ sở đã được duyệt là mốc so sánh | Dự báo nháp không thay phê duyệt |
| Ranh giới | Cùng hợp đồng và cùng mục đích, đủ khoản | Cùng nhà cung cấp hoặc đúng tổng chưa đủ |
| Thẩm quyền | Ngưỡng 0,5 và 1,0 theo FIN-AUTH-05 | Quy tắc riêng của tình huống, không phải ngưỡng của chuẩn mực bên ngoài |
| Mốc cộng dồn | Chương IV xét 0,9 → 1,8 → 2,6 | 19/07 là mốc vượt ngưỡng trong mô hình đã phát sinh |
| Trần hợp đồng | NST-01 ghi 2,8 | Chưa rõ thời điểm toàn bộ cam kết có hiệu lực |
| Thủ tục thay thế | Đổi cách lấy quyết định, giữ cấp | Sự cố không thay quyết định đúng thẩm quyền |
| Trách nhiệm | Thẩm quyền, hiểu biết cụ thể và hành động cùng gắn một người | Không kết luận từ chức danh hoặc tên xuất hiện trong nhật ký |
| Gian lận | Kết luận cuối là rủi ro cần điều tra | Xung đột lợi ích và hành vi kiểm soát chưa đủ chứng minh gian lận |
| Tam giác gian lận | Chỉ là kiến thức nền | Không dùng như thang điểm hoặc căn cứ tự động quy trách nhiệm |
| Điểm | Đánh giá tiến trình, hỗ trợ và lựa chọn | Chưa phải thang đo năng lực đã được kiểm định |

FIN-PROC-11 yêu cầu phê duyệt trước khi cam kết có hiệu lực. Không tự giả định trần 2,8 chắc chắn là hạn mức khung hoặc chắc chắn là cam kết toàn bộ để giải quyết khoảng trống về thời điểm.

## 3. Data Architecture and State Separation

Dữ liệu tình huống được nhúng trong JavaScript hoặc HTML của từng chương. Bản JSON đi kèm tài liệu hỗ trợ kiểm tra, không thay nguồn vận hành trong bản chạy hiện tại.

| Lớp | Vị trí hoặc định danh | Vai trò |
|---|---|---|
| Dữ liệu và quy tắc tình huống | `docs`, `ACCOUNTS`, `DOCS`, `ANSWERS`, `TX`, `CONTRACTS`, `WORK`, `CLAIMS`, `RESP` | Tạo hồ sơ, điều kiện đối chiếu và kết luận chuẩn |
| Dữ liệu tham chiếu | Các tệp JSON trong hồ sơ Tuần 3 | Đọc, tính mẫu và đối chiếu nguồn; không được trò chơi tự nạp |
| Trạng thái nội dung chương | `S` hoặc `P` cùng bản lưu của từng chương | Màn hình hiện tại, nguồn đã mở, lựa chọn và nhận định |
| Bản ghi chung | `window.TLH_GAME` và `localStorage` | Lỗi, hoàn thành, hỗ trợ, dữ kiện chuyển tiếp, quyết định và kết quả |

Sự thật của tình huống cố định theo dữ liệu và quy tắc; bản ghi quá trình thay đổi theo từng lượt. `metrics()` tính chỉ tiêu chương, còn `calculate()` tổng hợp điểm và xét kết thúc. Giao diện hiển thị trạng thái và gọi các hàm kiểm tra; không tách nó khỏi những hàm xử lý được gắn vào thao tác.

- Dữ kiện có các trạng thái đã xem, đang dùng và đã xác lập.
- Điểm kiểm tra phân biệt số lỗi, tự giải, xem lời giải và hết giờ.
- Hoàn thành chương điều khiển mở chương và xem lại; không thay trạng thái của từng dữ kiện.
- Bản ghi chung chỉ nhận dữ kiện chuyển tiếp có mã, mã nguồn, nội dung và nhận định sử dụng không rỗng.

Chương báo kết quả qua bộ nhận dùng chung hoặc sự kiện chuyển tiếp giữa các khung. Bản tích hợp bảo toàn kết quả chương đã khóa, có ngoại lệ nhận sự kiện thành công cuối còn thiếu khi thông báo hoàn thành đến trước. Bắt đầu lại được liên kết về xác nhận xóa toàn bộ lượt chơi.

## 4. Required JavaScript Logic

| Thành phần | Cấu hình hoặc hàm trong mã | Đầu ra và điểm cần kiểm tra |
|---|---|---|
| Chương I | `T1_OK`, `T1_SCOPE`, `MEVAL_KEY`, `checkMarginEvals()` | Nhận định doanh thu, phạm vi biên lợi nhuận, đánh giá nguồn, dòng tiền và khoản 3,0 |
| Chương II | `ANSWERS`, `selectRecordForRole()`, `assess()` | Đánh giá lại vai trò sau thay đổi; tài khoản được giải trình hoặc tư vấn còn mở |
| Chương III | `TX`, `CONTRACTS`, `WORK`, `testBoundary()` | Đúng hai nhận định, đủ khoản; tổng khớp 2,6 trong sai số 0,001 triệu USD |
| Chương IV | `checkControlSheet()`, `checkEventEval()`, `checkSystem()`, `checkN51()`, `checkN73()`, `checkN101()`, `checkMonitorCluster()`, `checkMonitor()` | Bảng kiểm, ba ngày, phân luồng, ngoại lệ, cụm và giám sát; sau đó tổng hợp người, mức kết luận và biên bản |
| Chương V | `presentEvidence()`, `lockResponsibility()`, `pickMotive()`, `lockFinal()`, `witnessSecondsFor()` | Tập hồ sơ chính xác, trách nhiệm, xung đột lợi ích, hai kết luận riêng và cửa sổ nhân chứng |
| Điều phối | `receive()`, `metrics()`, `calculate()`, `setDecision()`, `topReveal()`, `go()`, `reset()` trong `TLH_GAME` | Tiến trình, điểm, hỗ trợ, mở chương, quyết định và bắt đầu lại |

Trong mã có hàm được bổ sung hoặc gán lại sau định nghĩa đầu. Khi đối chiếu phải đọc phiên bản được dùng cuối cùng; ví dụ kiểm tra tập bằng chứng và đồng hồ Chương V không chỉ nằm ở phần khai báo đầu chương.

Phân luồng theo khoản hiện tại, sự cố sau lúc tạo luồng và giám sát sau giao dịch là dữ kiện của tình huống giả lập. Người học dùng bảng kiểm để phát hiện sai lệch; không mô tả đây là chức năng cảnh báo tự động của một cổng phê duyệt thật hoặc tự ghi thành lỗi phần mềm cần sửa.

## 5. Data Limitations

Ngày nghiệm thu NS-051 là 05/05 trong `WORK` Chương III và 07/05 trong hồ sơ Chương IV. Bản dữ liệu giữ từng giá trị theo nguồn; cần nhóm quyết định cách thống nhất nếu sửa trò chơi.

Ánh xạ `DOCS[].roles` trong mã Chương II khớp `ANSWERS`. Sai lệch trước đây thuộc bản JSON tham chiếu cũ về `NEW_MARKETS`; tài liệu và dữ liệu mới đã đối chiếu theo HTML.

- Nhật ký `FIN-OPS-Q2` không định danh người chọn ngoại lệ NS-101.
- Không có nhiệm vụ cấp giám đốc tài chính không chứng minh David không biết qua mọi kênh.
- Hồ sơ giám sát sau giao dịch không xác lập phê duyệt trước giao dịch.
- Bộ hồ sơ người học và nguồn đa phương tiện chưa có đầy đủ biên bản khảo sát, quyền sử dụng hoặc lịch sử đóng góp trong lần đính kèm này.

## 6. Technical Route

| Thành phần | Hướng hiện tại | Bằng chứng và giới hạn |
|---|---|---|
| Giao diện | HTML5 và CSS3 | Cấu trúc nội dung, trình bày, chuyển động và chuyển cảnh có trong tệp trò chơi |
| Xử lý | JavaScript theo quy tắc cố định | Không cần mô hình trí tuệ nhân tạo khi chạy |
| Dữ liệu | Đối tượng, mảng và nội dung HTML nhúng | JSON ngoài là bản đối chiếu, chưa phải dữ liệu được nạp |
| Chương | gzip và base64, giải nén bằng `DecompressionStream` | Cần trình duyệt hỗ trợ và đủ tài nguyên |
| Hiển thị | `iframe.srcdoc`, có nhiều lớp nhúng ở Chương I–IV | Cần kiểm tra đúng lớp khi sửa và kiểm thử |
| Điều phối | `window.TLH_GAME`, sự kiện tiến trình | Quản lý hoàn thành, điểm, chuyển bằng chứng và quyết định |
| Lưu tiến độ | `localStorage` và mã lượt | Khả năng lưu, khôi phục phụ thuộc môi trường |
| Kiểm tra logic | Node.js và các mô-đun chuẩn | Bản kiểm tra hiện tại chạy bằng Node.js v24.19.0 |
| Môi trường soạn mã | Visual Studio Code | Theo tài liệu nhóm; không suy ra đây là điều kiện bắt buộc để chạy trò chơi |
| Hỗ trợ lập trình bằng trí tuệ nhân tạo | Có sử dụng trong quá trình phát triển để tạo, hoàn thiện và gỡ lỗi mã | Theo thông tin nhóm bổ sung; chưa nêu tên công cụ cụ thể; không phải thành phần cần để chạy trò chơi |
| Chi phí | Tài liệu nhóm ghi 0 | Đây là số nhóm khai báo; chưa có bảng tổng hợp chi phí để đối chiếu |

Theo thông tin phát triển bổ sung của nhóm, hai nguyên mẫu ban đầu được xây dựng trong Visual Studio Code rồi dừng sử dụng sau các thay đổi về ý tưởng, cơ chế chơi và luồng chương. Bản cuối được xây dựng lại bằng HTML5, CSS3 và JavaScript, tích hợp năm chương vào một tệp HTML. Công cụ hỗ trợ lập trình bằng trí tuệ nhân tạo được dùng để tạo, hoàn thiện và gỡ lỗi mã; khi vận hành, trò chơi dùng các quy tắc JavaScript cố định, không cần dịch vụ trí tuệ nhân tạo trực tiếp. Visual Studio Code là môi trường soạn mã, không phải ngôn ngữ lập trình.

Bố cục có cơ chế co giãn theo cửa sổ; khả năng đọc và thao tác trên thiết bị đích vẫn cần được kiểm tra. Phần đóng góp phát triển đầy đủ nằm tại [Game Development and Technical Contribution](../WEEK_6/CONTRIBUTION_EVIDENCE_FINAL.md#4-game-development-and-technical-contribution).

## 7. Distribution and Fallback

Bản đối chiếu có dung lượng 120.507.192 byte, khoảng 120,5 MB theo hệ thập phân. Có thể dùng tệp HTML làm bản bàn giao để thử trên máy đích; chưa có đường dẫn triển khai công khai được xác nhận trong bộ tài liệu này.

| Trường hợp | Cách xử lý đề xuất | Trạng thái |
|---|---|---|
| Bàn giao chính | Phân phối đúng tệp HTML và hướng dẫn chạy, kiểm tra trên máy giảng viên | Tệp có sẵn; chưa xác nhận môi trường máy đích |
| Mở tệp cục bộ gặp hạn chế | Thử phục vụ cùng tệp qua máy chủ tĩnh cục bộ | Phương án cần kiểm tra trước khi dùng |
| Video không tự phát | Dùng cơ chế bỏ qua phần mở đầu hoặc thao tác phát lại được mã cung cấp | Cần xác nhận trên trình duyệt đích |
| Dung lượng gây khó phân phối | Chuẩn bị bản dự phòng ít đa phương tiện hơn | Chưa bàn giao bản giảm dung lượng |
| Giải nén không được hỗ trợ | Chọn môi trường hỗ trợ hoặc chuẩn bị bản đã giải nén, tích hợp lại | Chưa xác nhận gói tách chương độc lập |

Sự tồn tại của nhánh `go(n)` trỏ tới `tab n.html` không chứng minh bộ tệp dự phòng đó đã được đóng gói. Không ghi phương án dự kiến thành bản dự phòng đã chạy thành công.

## 8. Readiness Evidence

| Hạng mục | Bằng chứng hiện có | Trạng thái |
|---|---|---|
| Chuỗi vấn đề–đầu ra | Tài liệu logic và phạm vi các tuần trước | Đã mô tả |
| Nguồn đầu vào | Dữ liệu nhúng và JSON đối chiếu | Đã đọc và đối chiếu |
| Công thức, quy tắc, mẫu | Tệp điểm và kết quả Tuần 6 | 40 tình huống logic, 18 phép dữ liệu khớp |
| Giải nén và cấu trúc chương | [build_inventory.json](../WEEK_6/EVIDENCE/build_inventory.json) | Đã giải nén đủ năm chương bằng Node.js |
| Giao diện xuyên suốt | Tệp HTML có mã các thành phần | Chưa có lần chơi giao diện được xác nhận trong đợt rà soát |
| Trình duyệt, khôi phục và thiết bị khác | Kế hoạch kiểm thử Tuần 6 | Chưa chạy xác nhận |
| Phân phối công khai | Chưa có đường dẫn bản hiện hành | Cần bổ sung nếu sử dụng |
| Đóng góp cá nhân | Bảng đầu mối theo hồ sơ nhóm | Cần lịch sử và sản phẩm thực tế để xác nhận |

## 9. Midterm Assessment Readiness

Hướng dẫn Tuần 4 nêu trọng số giữa kỳ: hồ sơ nhóm 60%, đóng góp cá nhân có bằng chứng 25%, hồ sơ cá nhân 15%. Các tỷ lệ này lấy từ hướng dẫn học phần, tách với thang điểm 100 của trò chơi.

| Yêu cầu cần chỉ ra khi kiểm tra | Vị trí hoặc bước cần hoàn thiện |
|---|---|
| Vấn đề, người dùng, nhiệm vụ | Hồ sơ Tuần 1 và đề xuất Tuần 2 |
| Mẫu sản phẩm và phạm vi tối thiểu | Đề xuất, cấu trúc giải pháp Tuần 2 |
| Đầu vào, nguồn và giả định | Hồ sơ Tuần 3 và mục 2–5 của tệp này |
| Logic, ví dụ và kết quả | Ba tệp còn lại của Tuần 4 |
| Tiến độ kỹ thuật và giới hạn | Mục 5–8; hồ sơ tích hợp Tuần 6 |
| Đóng góp khách quan và hồ sơ cá nhân | [CONTRIBUTION_EVIDENCE_FINAL.md](../WEEK_6/CONTRIBUTION_EVIDENCE_FINAL.md); bổ sung lịch sử thực tế |
| Bảng kiểm giữa kỳ của môn học | `assessment/midterm-checklist.md` được hướng dẫn nhắc tới nhưng chưa có trong bộ đính kèm |

Không ghi đã áp dụng đầy đủ bảng kiểm giữa kỳ khi chưa đọc được tệp gốc đó. Mức sẵn sàng hiện tại là đủ để trình bày logic và các phép kiểm tra đã chạy; các bằng chứng giao diện, phân phối và đóng góp cần hoàn thiện theo trạng thái thực tế.

## 10. Ownership and Next Actions

Phương tổng hợp hồ sơ; Dũng làm rõ số liệu, ngày và cam kết; Hiền kiểm tra quy tắc; Ngọc kiểm tra nguồn và giới hạn; Khuê kiểm tra khả năng chạy, lưu và phân phối. Tuần 5 tập trung làm rõ tương tác, còn Tuần 6 ghi kết quả tích hợp và kiểm thử theo bằng chứng.
