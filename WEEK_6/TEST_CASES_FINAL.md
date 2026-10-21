# WEEK 6 — TEST CASES AND EXECUTION RECORD

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 6

## 1. Execution Basis and Status

Kỳ vọng được đặt trong mã kiểm tra trước khi đối chiếu. Bản hiện tại có 40 tình huống logic và 18 phép kiểm tra dữ liệu khớp; ngày chạy 21/10/2026, Node.js v24.19.0. Kết quả chi tiết được ghi theo từng mã, không dùng nhãn đã chơi thủ công khi chưa có biên bản.

| Nhóm | Phương pháp | Phạm vi và giới hạn |
|---|---|---|
| Logic điều phối | Chạy mã chung từ HTML trong `vm` | Kiểm tra sự kiện, điểm và kết thúc, không chạy giao diện |
| Ranh giới giao dịch | Gọi `testBoundary()` gốc với `TX` gốc | Phần hiển thị được thay bằng đối tượng tối thiểu |
| Bằng chứng Chương V | Gọi bản `presentEvidence()` cuối trong mã | Kiểm tra chấp nhận tập và đánh giá; không kiểm tra thao tác chọn trên màn hình |
| Bộ ghi lỗi | Chạy bộ `TLH` gốc với đồng hồ kiểm soát | Kiểm tra lỗi mới, tạm dừng và gợi ý; không chờ đồng hồ thật |
| Dữ liệu | Tính mẫu và so với đối tượng, bảng báo cáo trong HTML | Phân biệt tính tay bằng dữ liệu với chạy logic giao diện |
| Giao diện | Bộ UI01–UI12 ở mục 5 | Chưa chạy trong đợt rà soát |

Mã chạy lại là [verify_game.cjs](SCRIPTS/verify_game.cjs); kết quả là [logic_checks.json](EVIDENCE/logic_checks.json), [financial_checks.json](EVIDENCE/financial_checks.json) và [build_inventory.json](EVIDENCE/build_inventory.json).

## 2. Test Types and Responsibility

| Loại kiểm tra | Các trường hợp đại diện | Đầu mối theo phân công |
|---|---|---|
| Điển hình | L03, L18, L22, L32, L38 | Hiền, Khuê |
| Biên | L05–L06, L12–L14, L19, L23, L30–L31, L37, L40 | Hiền |
| Không hợp lệ | L01, L15–L16, L21, L28, L33–L36, L39 | Hiền, Ngọc |
| Nhất quán tài chính và dữ liệu | F01–F18 | Dũng, Ngọc |

Các bảng ghi kết quả của đợt rà soát tự động, không tự gán tác giả hoặc người chơi thử cho thành viên. Người xác nhận sau sửa và bằng chứng đóng góp cá nhân cần được điền theo lần thực hiện thực tế.

## 3. Executed Logic Cases

Với bảng điểm, mảng kết quả theo thứ tự điều tra, kỷ luật, quản trị, tự thực hiện, tổng và mã kết thúc. Các giá trị `true`, `false`, `null` và tên trường là dữ liệu kiểm tra trong mã. Các trường hợp điểm giả định phần còn lại tự giải và ba lựa chọn cân bằng, trừ điều kiện được nêu.

| Mã | Tình huống hoặc đầu vào | Kỳ vọng | Thực tế | Trạng thái |
|---|---|---|---|---|
| L01 | Chưa đủ ba quyết định chưa tính kết quả | `null` | `null` | Khớp |
| L02 | Đủ 45 điểm kiểm tra | `45` | `45` | Khớp |
| L03 | Tự giải hoàn toàn và ba quyết định cân bằng | `[35,30,25,10,100,"successor"]` | `[35,30,25,10,100,"successor"]` | Khớp |
| L04 | Một lần sai không giảm mức làm chủ | `[35,30,25,10,100,"successor"]` | `[35,30,25,10,100,"successor"]` | Khớp |
| L05 | Hai lần sai ở câu đầu Chương I | `[34.6,28.5,25,10,98.1,"successor"]` | `[34.6,28.5,25,10,98.1,"successor"]` | Khớp |
| L06 | Ba lần sai ở câu đầu Chương I | `[34.2,27,25,10,96.2,"successor"]` | `[34.2,27,25,10,96.2,"successor"]` | Khớp |
| L07 | Mỗi khóa gợi ý chỉ ghi một lần | `[1,9]` | `[1,9]` | Khớp |
| L08 | Hai gợi ý độc lập được làm tròn sau khi cộng | `9` | `9` | Khớp |
| L09 | Xem lời giải cả Chương I | `[28,24,25,8,85,"successor"]` | `[28,24,25,8,85,"successor"]` | Khớp |
| L10 | Hai quyết định vội vàng | `[35,30,13,10,88,"reckless"]` | `[35,30,13,10,88,"reckless"]` | Khớp |
| L11 | Hai quyết định do dự | `[35,30,17,10,92,"hesitant"]` | `[35,30,17,10,92,"hesitant"]` | Khớp |
| L12 | Ưu tiên kết thúc vội vàng khi điều kiện chồng lấn | `[21,18,11,6,56,"reckless"]` | `[21,18,11,6,56,"reckless"]` | Khớp |
| L13 | Hết giờ một lời khai vẫn chấm các phần còn lại | `[34.4,29.5,25,10,98.9,"successor"]` | `[34.4,29.5,25,10,98.9,"successor"]` | Khớp |
| L14 | Không tước kết quả lời khai đã được chấp nhận | `false` | `false` | Khớp |
| L15 | Dữ kiện chuyển tiếp phải có nguồn và nhận định sử dụng | `["valid"]` | `["valid"]` | Khớp |
| L16 | Giữ nguyên dữ kiện sau khi Chương IV hoàn thành | `1` | `1` | Khớp |
| L17 | Bắt đầu lại xóa tiến trình và dữ kiện | `[0,0,null]` | `[0,0,null]` | Khớp |
| L18 | Ba khoản NST-01 đầy đủ | `{"pass":true,"complete":true,"total":2.6,"awarded":true}` | `{"pass":true,"complete":true,"total":2.6,"awarded":true}` | Khớp |
| L19 | Thiếu một khoản NST-01 | `{"pass":true,"complete":false,"total":null,"awarded":false}` | `{"pass":true,"complete":false,"total":null,"awarded":false}` | Khớp |
| L20 | Thêm NS-119 và nhận diện đúng hai ranh giới | `{"pass":false,"complete":false,"total":null,"awarded":false}` | `{"pass":false,"complete":false,"total":null,"awarded":false}` | Khớp |
| L21 | Nhận sai cùng hợp đồng khi có NS-119 | `{"pass":false,"complete":false,"total":null,"awarded":false}` | `{"pass":false,"complete":false,"total":null,"awarded":false}` | Khớp |
| L22 | Một gợi ý và hai lỗi ở t4.n73 | `[34.8,28.5,25,9,97.3,"successor"]` | `[34.8,28.5,25,9,97.3,"successor"]` | Khớp |
| L23 | Bốn câu Chương IV sai ba lần, ba gợi ý | `[33.4,24,25,8,90.4,"successor"]` | `[33.4,24,25,8,90.4,"successor"]` | Khớp |
| L24 | Xem lời giải cả Chương III | `[28,24,25,8,85,"successor"]` | `[28,24,25,8,85,"successor"]` | Khớp |
| L25 | Một quyết định vội vàng dù điểm cao | `[35,30,19,10,94,"conditional"]` | `[35,30,19,10,94,"conditional"]` | Khớp |
| L26 | Một quyết định do dự dù điểm cao | `[35,30,21,10,96,"conditional"]` | `[35,30,21,10,96,"conditional"]` | Khớp |
| L27 | Hai sự kiện gợi ý không có khóa vẫn ghi hai lần | `[2,9]` | `[2,9]` | Khớp |
| L28 | Câu đã giải trong chương hoàn thành không nhận thêm lỗi | `0` | `0` | Khớp |
| L29 | calculate chỉ chặn quyết định, không tự chặn năm chương | `[0,0,18,10,28,"conditional"]` | `[0,0,18,10,28,"conditional"]` | Khớp |
| L30 | Mức tự thực hiện đúng ngưỡng 5 | `[5,"successor"]` | `[5,"successor"]` | Khớp |
| L31 | Mức tự thực hiện dưới ngưỡng, còn 4 | `[4,"conditional"]` | `[4,"conditional"]` | Khớp |
| L32 | Chương V: đúng tập và đúng đánh giá | `[true,true]` | `[true,true]` | Khớp |
| L33 | Chương V: tập dư không được chấp nhận | `[false,false]` | `[false,false]` | Khớp |
| L34 | Chương V: mã hồ sơ trùng không được chấp nhận | `[false,false]` | `[false,false]` | Khớp |
| L35 | Chương V: tập đúng nhưng đánh giá sai | `[false,false]` | `[false,false]` | Khớp |
| L36 | Chương V: chưa chọn hồ sơ không chấm | `[null,false]` | `[null,false]` | Khớp |
| L37 | Tạm dừng từ lỗi mới thứ hai và tự hết sau 15 giây | `[false,true,false]` | `[false,true,false]` | Khớp |
| L38 | Mở lại hồ sơ giải phóng tạm dừng | `false` | `false` | Khớp |
| L39 | Lặp lại cùng mã lỗi không tăng số sai | `1` | `1` | Khớp |
| L40 | Lỗi mới thứ ba gửi sự kiện gợi ý | `[3,3,1]` | `[3,3,1]` | Khớp |


L29 cố ý gọi trực tiếp hàm nội bộ khi đã có ba quyết định nhưng chưa hoàn thành chương, để ghi đúng giới hạn của hàm. Kết quả 28 không chứng minh người chơi có thể đi đến kết quả đó qua giao diện thông thường; luồng giao diện còn phải được kiểm thử.

L32–L36 cung cấp danh sách nguồn khả dụng cho hàm gửi để cô lập điều kiện tập. Chúng không thay kiểm tra cách kế thừa, yêu cầu hoặc hiển thị hồ sơ. L37–L40 dùng đồng hồ kiểm soát, không phải thử 15 giây trên trình duyệt thật.

## 4. Executed Financial and Data Cases

F07 giữ thứ tự biến động hai năm rồi so kế hoạch cho từng nhóm: biên gộp, nghiên cứu và phát triển, chi phí hoạt động khác. F18 xác nhận cả hai ngày đang tồn tại theo nguồn, không xác nhận dữ liệu đã thống nhất.

| Mã | Tình huống hoặc đầu vào | Kỳ vọng | Thực tế | Trạng thái |
|---|---|---|---|---|
| F01 | Tăng doanh thu | `25` | `25` | Khớp |
| F02 | Cầu nối doanh thu | `150` | `150` | Khớp |
| F03 | Tăng phải thu | `16.7` | `16.7` | Khớp |
| F04 | Số ngày thu tiền ước tính | `[54.8,51.1]` | `[54.8,51.1]` | Khớp |
| F05 | Biên lợi nhuận hoạt động | `[18.6,13.7]` | `[18.6,13.7]` | Khớp |
| F06 | Lợi nhuận gộp và lợi nhuận hoạt động | `[[55,22.3],[65,20.5]]` | `[[55,22.3],[65,20.5]]` | Khớp |
| F07 | Tách biến động hai năm và chênh lệch kế hoạch | `[-2.5,-0.7,1.6,0.1,2.5,0.2]` | `[-2.5,-0.7,1.6,0.1,2.5,0.2]` | Khớp |
| F08 | Năm tài khoản: ngân sách, thực tế và chênh lệch | `[18,21,3]` | `[18,21,3]` | Khớp |
| F09 | Sổ tư vấn đầy đủ | `[9,4.2]` | `[9,4.2]` | Khớp |
| F10 | Đủ hợp đồng tham chiếu | `[7,0]` | `[7,0]` | Khớp |
| F11 | Đủ hồ sơ bàn giao | `[9,0]` | `[9,0]` | Khớp |
| F12 | NST-01 đúng ranh giới | `[3,2.6]` | `[3,2.6]` | Khớp |
| F13 | Báo cáo giám sát đủ dòng | `[10,3]` | `[10,3]` | Khớp |
| F14 | Dòng tiền và tiền cuối kỳ | `[11,-11,-2,6]` | `[11,-11,-2,6]` | Khớp |
| F15 | Các số báo cáo chuẩn hóa khớp HTML | `true` | `true` | Khớp |
| F16 | Bản dữ liệu giao dịch khớp mã nguồn | `true` | `true` | Khớp |
| F17 | Vai trò chứng từ mẫu và tài khoản khác | `[["WAGE_BENCH","NEW_MARKETS"],[]]` | `[["WAGE_BENCH","NEW_MARKETS"],[]]` | Khớp |
| F18 | Giữ ngày nghiệm thu theo nguồn | `["05/05",true]` | `["05/05",true]` | Khớp |


## 5. Browser and Interface Test Plan

Các tình huống dưới đây chưa có kết quả thực tế trong đợt rà soát. Khuê là đầu mối chạy giao diện, Hiền kiểm tra hành vi và điểm, Dũng kiểm tra số, Ngọc kiểm tra hồ sơ, Phương tổng hợp biên bản. Khi chạy, ghi trình duyệt, thiết bị, bản HTML, người thực hiện và người xác nhận.

| Mã | Loại | Đầu vào hoặc thao tác | Kết quả kỳ vọng | Thực tế và trạng thái |
|---|---|---|---|---|
| UI01 | Điển hình | Mở HTML đúng, bỏ qua giới thiệu | Nạp Chương I, chương sau khóa, có thể bắt đầu | Chưa chạy |
| UI02 | Điển hình | Tự giải toàn bộ I–V, ba quyết định cân bằng | Biên bản đúng, 100 điểm và chấp thuận nếu không lỗi, hỗ trợ | Chưa chạy |
| UI03 | Không hợp lệ | Chọn chương sau sớm, hủy xác nhận bắt đầu lại | Chặn đi sớm, giữ tiến trình khi hủy | Chưa chạy |
| UI04 | Không hợp lệ | Nhân sự thiếu vai trò; tài khoản tư vấn hoặc khác có ô không áp dụng | Không chấm ví dụ thiếu; ô không yêu cầu được vô hiệu hóa | Chưa chạy |
| UI05 | Biên | Chọn thiếu NST-01, thêm NS-119, rồi sửa đủ | Nhóm thiếu chưa xác lập; nhóm thừa không cùng ranh giới; nhóm đúng được chấp nhận | Chưa chạy |
| UI06 | Điển hình | Xác lập dữ kiện IV, mở V; yêu cầu lại hồ sơ nền thiếu | Nguồn đúng được kế thừa; nguồn yêu cầu lại có xuất xứ phù hợp | Chưa chạy |
| UI07 | Biên | Sai mới hai lần, đọc lại hoặc chờ 15 giây; sai mới lần ba | Tạm dừng, giải phóng đúng điều kiện, gợi ý mở một lần theo sự kiện | Chưa chạy |
| UI08 | Biên | Chấp nhận lời khai Victor thứ nhất, để hết thời gian lời khai thứ hai | Giữ điểm và bằng chứng đã chấp nhận; phần chưa xong nhận 0; được tiếp tục trách nhiệm | Chưa chạy |
| UI09 | Thay thế | Mở hồ sơ, quy tắc, hướng dẫn; gây phản bác sai | Đồng hồ tạm dừng ở điều kiện được mã cho phép; phản hồi sai vẫn chạy | Chưa chạy |
| UI10 | Thay thế | Tải lại trong chất vấn, bấm tiếp tục | Giữ thời gian đã lưu và kết quả; không cấp lại 90 giây | Chưa chạy |
| UI11 | Điển hình | Xem chương đã xong, chọn bắt đầu lại từ nút chương rồi đồng ý | Kết quả xem lại không đổi; bắt đầu lại xóa toàn bộ lượt | Chưa chạy |
| UI12 | Phân phối | Mở trên máy đích; thử phim, âm thanh, lưu và khôi phục | Nội dung dùng được; lỗi có đường tiếp tục; môi trường và giới hạn được ghi | Chưa chạy |

Trạng thái môi trường nằm tại [browser_checks.json](EVIDENCE/browser_checks.json). Không có số thời gian nạp, kết quả nhiều trình duyệt hoặc kết luận không lỗi JavaScript mới để xác nhận trong đợt này.

## 6. Retest and Acceptance Rule

Khi thay đổi mã hoặc dữ liệu, chạy lại các trường hợp chịu ảnh hưởng cùng phép nhất quán liên quan; sau đó kiểm tra đường giao diện đã sửa. Không lặp toàn bộ kiểm tra nếu chỉ sửa câu chữ và không có rủi ro mới chưa giải quyết.

Kết quả không khớp phải tạo mục trong [BUG_LOG_FINAL.md](BUG_LOG_FINAL.md), ghi thực tế và thay đổi cụ thể. Mục chưa chạy chỉ chuyển thành khớp sau khi có lần chạy và người xác nhận; giữ nguyên giới hạn của từng phương pháp.
