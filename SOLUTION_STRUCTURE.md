# The Last Heir — Solution Structure (Tuần 2)

> Học phần: **NHA408E** · Nhóm: **G08**

## 1. Main Output

Main output đã chốt ở `docs/PROJECT_PROPOSAL.md`:

> Kết quả đối chiếu giữa các chỉ số/kết luận người dùng tự tính và tự chọn với đáp án đúng — gồm: từng chỉ số tính đúng hay sai, cờ đỏ phân loại đúng hay sai, đơn vị/người có thẩm quyền liên quan đúng hay sai, kèm giải thích vì sao.

Các chỉ số và kết luận người dùng tự tính/tự chọn (mục "Input" ở sơ đồ dưới) là quyết định của người dùng, đưa vào Process — không phải bản thân main output. Main output là kết quả Process trả về sau khi đối chiếu quyết định đó với đáp án đúng.

## 2. User → Input → Process → Output → User Action

```
User: sinh viên (target user)
   |
   v
Input: đọc dữ liệu tài chính thô (báo cáo hợp nhất, cơ cấu khách
        hàng, khoản phải thu chi tiết), tự tính chỉ số (OCF/NI,
        DSO, % tập trung khách hàng), chọn nhãn cờ đỏ tương ứng,
        đối chiếu mã nhân viên với Bảng phân quyền, chọn kết luận
        về đơn vị và người có thẩm quyền liên quan
   |
   v
Process: so khớp từng chỉ số đã tính với đáp án đúng (cho phép
        sai số nhỏ), so khớp nhãn cờ đỏ đã chọn với đáp án đúng,
        so khớp kết luận về đơn vị/người có thẩm quyền với đáp
        án đúng, tổng hợp giải thích
   |
   v
Output (main output): kết quả đối chiếu — từng chỉ số đúng/sai,
        cờ đỏ phân loại đúng/sai, kết luận đơn vị/người có thẩm
        quyền đúng/sai, kèm giải thích
   |
   v
User action: xem lại đúng chỉ số nào tính sai hoặc cờ đỏ nào
        phân loại nhầm, hiệu chỉnh cách đọc dữ liệu tài chính
        cho lần phân tích sau
```

## 3. Initial Required Information

Thông tin tối thiểu cần có gồm bối cảnh một công ty con (Aster Holdings, thuộc Aurora Group), ba bộ dữ liệu tài chính thô độc lập tương ứng ba bất thường chính, một bộ dữ liệu nhiễu (bẫy ngưỡng trọng yếu), một bảng phân quyền tài chính nội bộ, và năm nhân vật đóng vai trò vùng dữ liệu điều hướng.

### 3.1. Thông tin sơ bộ — công khai ngay từ đầu

Nguyên tắc phân loại: thông tin công khai từ đầu là loại dữ liệu một công ty đại chúng có nghĩa vụ công bố định kỳ hoặc là cấu trúc tổ chức không mang tính bí mật — không gán thành "bí mật riêng" của một nhân vật cụ thể.

| Gói | Nội dung | Vai trò |
|---|---|---|
| Gói 1 | Bối cảnh khủng hoảng (đoạn mở đầu), khởi động đồng hồ 48 giờ | Kể chuyện |
| Gói 2 | Giới thiệu Aurora Group / Aster Holdings, cơ cấu điều hành | Bối cảnh nền |
| Gói 3 | Báo cáo tài chính hợp nhất — Doanh thu, Lợi nhuận ròng (NI), Dòng tiền hoạt động (OCF), 4 quý | Dữ liệu thô cho Bất thường 1 |
| Gói 4 | Cơ cấu khách hàng theo % doanh thu, 4 quý | Dữ liệu thô cho Bất thường 3 |
| Gói 5 | Bản đồ quyền hạn tài chính (bảng phân quyền theo chức danh) | Công cụ đối chiếu cho Bất thường 3 |
| Gói 6 | Danh sách 5 nhân vật (tên + chức danh, chưa có hồ sơ chi tiết) | Menu điều hướng điều tra tiếp theo |

### 3.2. Thông tin ẩn — chỉ lộ khi điều tra đúng người/vùng

| Thông tin ẩn | Mở khi điều tra | Vì sao hợp lý là tài liệu nội bộ |
|---|---|---|
| Khoản phải thu (AR) chi tiết theo quý | Victor | Dữ liệu vận hành sâu hơn báo cáo hợp nhất, thuộc phạm vi COO |
| Hồ sơ hợp đồng Northstar (mã phê duyệt, mô tả dịch vụ) | Victor | Tài liệu hợp đồng cụ thể, cần quyền truy cập nội bộ |
| Chi phí văn phòng phẩm bất thường (bẫy ngưỡng trọng yếu) | David | Chi tiết chi phí nội bộ do CFO quản lý |
| Ghi chú ẩn (twist giải oan, có điều kiện) | David | Tài liệu cá nhân, chỉ lộ đúng điều kiện đã tính đúng trước |
| Gói đãi ngộ cá nhân | Ethan | Thông tin nhân sự riêng tư |
| Phạm vi kiểm toán đã thực hiện | Sophia | Hồ sơ công việc nội bộ của đơn vị kiểm toán |
| Danh mục đầu tư cá nhân | Lucas | Thông tin tài chính cá nhân |
| Sự kiện tin đồn + tài liệu đối chiếu | Kích hoạt sau khi mở hồ sơ David lần đầu | Sự kiện cốt truyện có điều kiện |

## 4. Core Process Type

Quy trình gồm bốn loại cụ thể.

**Loại thứ nhất là tính toán.** Với mỗi bất thường, người dùng tự tính chỉ số từ dữ liệu thô (OCF/NI, DSO, % tập trung khách hàng). Hệ thống so kết quả người dùng nhập với đáp án đúng, cho phép sai số nhỏ.

**Loại thứ hai là phân loại.** Người dùng chọn nhãn cờ đỏ kế toán tương ứng cho từng bất thường, từ danh sách 5 nhãn (3 nhãn đúng, 2 nhãn nhiễu không áp dụng case này). Hệ thống so với nhãn đúng.

**Loại thứ ba là đối chiếu thẩm quyền.** Với Bất thường 3, người dùng tự đối chiếu mã nhân viên trên hồ sơ hợp đồng với Bảng phân quyền tài chính, nhận ra sự lệch pha giữa nội dung hợp đồng và cách nó được phân loại nội bộ.

**Loại thứ tư là giải thích.** Khi người dùng nộp Báo cáo điều tra cuối, hệ thống trả về lý do khớp hoặc lệch với đáp án đúng cho từng phần: chỉ số, cờ đỏ, đơn vị/người có thẩm quyền, đối chiếu tin đồn, đánh giá trọng yếu.

## 5. MVP Flow

Luồng hoàn chỉnh và nhỏ nhất có thể chạy từ đầu đến cuối, gồm chín bước:

**Bước 1 — Mở đầu.** Người dùng nhận bối cảnh khủng hoảng (Gói 1–2). Đồng hồ 48 giờ ảo bắt đầu chạy, hiển thị cố định trên màn hình.

**Bước 2 — Nhận thông tin sơ bộ.** Người dùng có sẵn báo cáo tài chính hợp nhất (Gói 3), cơ cấu khách hàng (Gói 4), Bản đồ quyền hạn (Gói 5), danh sách 5 nhân vật (Gói 6) — không cần chọn điều tra ai mới thấy được các gói này.

**Bước 3 — Chọn nhân vật để điều tra.** Người dùng tự quyết định mở ai trước trong 5 nhân vật (David, Victor, Ethan, Sophia, Lucas).

**Bước 4 — Phân tích từng vùng dữ liệu.** Với dữ liệu công khai (Gói 3, 4): tự tính OCF/NI (Bất thường 1) và % tập trung khách hàng (Bất thường 3). Nếu điều tra Victor: mở thêm AR chi tiết để tự tính DSO (Bất thường 2), và đối chiếu hồ sơ hợp đồng Northstar với Bản đồ quyền hạn. Nếu điều tra David: xử lý bẫy ngưỡng trọng yếu (chi phí văn phòng phẩm). Nếu điều tra Ethan/Sophia/Lucas: đọc dữ liệu, tự kết luận không có bất thường.

**Bước 5 — Ghi chú ẩn (điều kiện).** Nếu người dùng đã tính đúng OCF/NI trước khi mở hồ sơ David → nhận thưởng ghi chú giải oan có hiệu ứng đặc biệt; nếu mở hồ sơ David trước, ghi chú vẫn xuất hiện nhưng không có hiệu ứng.

**Bước 6 — Sự kiện tin đồn.** Xuất hiện sau khi người dùng mở hồ sơ David lần đầu — chọn xác minh (xem tài liệu đối chiếu) hoặc ghi nhận thẳng vào báo cáo.

**Bước 7 — Bảng chẩn đoán tài chính.** Tổng hợp ba bất thường chính: nhập chỉ số đã tính, chọn nhãn cờ đỏ, đánh giá độ tin cậy nguồn.

**Bước 8 — Báo cáo điều tra cuối.** Điền năm phần: đơn vị có bất thường, bằng chứng định lượng (trích đúng chỉ số đã tính), người có thẩm quyền liên quan, đối chiếu tin đồn, đánh giá ngưỡng trọng yếu. Xảy ra khi người dùng tự nộp hoặc khi đồng hồ về 0 (tự động chuyển với dữ liệu hiện có).

**Bước 9 — Kết quả.** Hệ thống chấm điểm, hiển thị đáp án đúng kèm giải thích, cùng đoạn kết tùy độ chính xác (đối chất với CEO).

Người dùng có thể hoàn thành một lượt phân tích đầy đủ ở bước 1 đến 8; kết quả ở bước 9 giải thích được từng phần; lựa chọn làm thay đổi trạng thái vì việc mở hồ sơ nhân vật quyết định dữ liệu nào khả dụng cho Bảng chẩn đoán; bước sau phụ thuộc bước trước vì Báo cáo điều tra cuối chỉ chấp nhận chỉ số đã thực sự được tính ở bước 4 và 7.

## 6. Target, Fallback và Out of Scope

**Target Scope**, tức phiên bản khả thi dự kiến cho Tuần 6–7, gồm: một công ty (Aster Holdings) với ba bất thường tài chính chính (Earnings Quality, DSO, Customer Concentration) và một bất thường nhiễu (ngưỡng trọng yếu); năm nhân vật đóng vai trò vùng dữ liệu; Bảng phân quyền tài chính; đồng hồ 48 giờ đếm ngược thời gian thực; cơ chế Ghi chú ẩn có điều kiện; một sự kiện tin đồn tĩnh có điều kiện kích hoạt; Bảng chẩn đoán tài chính; Báo cáo điều tra cuối có validate chéo.

**Fallback Scope**, tức hướng đi nhỏ hơn nếu rủi ro về thời gian hoặc kỹ thuật xảy ra, gồm: bỏ cơ chế Ghi chú ẩn có điều kiện thứ tự (chỉ hiển thị ghi chú như tài liệu thường, không phân biệt trải nghiệm theo thứ tự mở); bỏ sự kiện tin đồn (chỉ giữ 3 bất thường chính và bẫy ngưỡng trọng yếu); rút danh sách nhãn cờ đỏ nhiễu từ 5 xuống 3 (chỉ giữ đúng 3 nhãn khớp 3 bất thường, chấp nhận giảm độ khó phân loại).

**Out of Scope**, tức các phần loại hẳn khỏi giai đoạn này, gồm: nhiều vụ án hoặc cốt truyện rẽ nhánh; hệ thống tài khoản, đăng nhập, lưu tiến trình giữa các phiên; bảng xếp hạng và chế độ nhiều người chơi; mô phỏng giá cổ phiếu phản ứng động theo thời gian thực (đã cân nhắc và loại bỏ — xem mục 7); tự sinh case bằng AI hoặc dùng dữ liệu tài chính thật từ doanh nghiệp/ngân hàng.

## 7. Initial Route Hypothesis

Route chính là **Code based web** theo hướng interactive flow, vì main output đòi hỏi trạng thái thay đổi theo lựa chọn của người dùng (chỉ số đã tính, nhân vật đã mở, tin đồn đã xác minh), nên cần tương tác thực chứ không chỉ xem tĩnh, phù hợp với bốn loại process ở mục 4.

**Ghi chú kỹ thuật quan trọng:** thiết kế ban đầu từng cân nhắc một cơ chế "Đồng hồ niềm tin thị trường" — giá cổ phiếu phản ứng động theo nhiều tin đồn thời gian thực. Cơ chế này bị loại bỏ vì độ khó kỹ thuật cao nhất trong toàn bộ thiết kế (cần mô phỏng trạng thái động, nhiều sự kiện chồng lấn) trong khi không ảnh hưởng trực tiếp tới điểm số. Thay vào đó, nhóm giữ lại đúng phần tạo áp lực thời gian bằng một đồng hồ đếm ngược 48 giờ ảo đơn giản (một biến số giảm dần theo thời gian thực, dùng `setInterval`), không gắn chi phí theo từng hành động — toàn bộ nằm trong khả năng React/JS thuần, không bắt buộc backend.

Route dự phòng là **Prototype cộng logic file**, ví dụ một bản Figma có thể bấm được kèm một file quy tắc viết tay mô tả cách chấm điểm, dùng nếu phần code tương tác không kịp hoàn thành.

Dữ liệu tài chính, cờ đỏ, bảng phân quyền và đáp án đúng sẽ lưu dưới dạng file cấu trúc tĩnh như JSON, không cần database vì Target Scope chỉ có một công ty, một bộ case.

## 8. Responsibility by Output

| Responsibility | Owner | Visible output | Consumer / dependency |
|---|---|---|---|
| Input owner | Phạm Triệu Tiến Dũng | Bộ dữ liệu tài chính thô (báo cáo hợp nhất, AR chi tiết, cơ cấu khách hàng), đáp án đúng cho từng chỉ số, bộ dữ liệu nhiễu (ngưỡng trọng yếu) | Logic owner, Interface owner, README |
| Logic owner | Nguyễn Minh Hiền | Công thức tính từng chỉ số (OCF/NI, DSO, % tập trung), benchmark so sánh, danh sách nhãn cờ đỏ (đúng + nhiễu), logic đồng hồ 48 giờ | Output owner, Integration owner, kiểm thử |
| Output owner | Tôn Khánh Ngọc | Định nghĩa nội dung phản hồi ở Báo cáo điều tra cuối (đúng/sai từng phần kèm giải thích), nội dung Ghi chú ẩn và sự kiện tin đồn, đoạn kết theo độ chính xác | Interface owner, demo |
| Interface owner | Đinh Thị Minh Khuê | Màn hình dùng output thật: danh sách 5 nhân vật (Follow the Money), Bảng chẩn đoán tài chính, Bảng phân quyền, đồng hồ 48 giờ, form Báo cáo điều tra cuối | User review, demo |
| Integration owner | Phạm Quỳnh Phương | Run path nối input, logic, output và interface thành một luồng chạy được; theo dõi state (nhân vật đã mở, chỉ số đã tính, tin đồn đã xác minh) xuyên suốt game | Cả nhóm, checkpoint |

