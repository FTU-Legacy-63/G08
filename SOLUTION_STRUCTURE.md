# The Last Heir: Solution Structure (Tuần 2, Bản v2)

> Học phần: **NHA408E** | Nhóm: **G08**
> Cập nhật Bản v2: Loại bỏ khái niệm "Gói dữ liệu", chuẩn hóa luồng MVP Flow.

## 1. Main Output

Xác định theo định hướng tại `PROJECT_PROPOSAL.md`:

> Bản đối chiếu chi tiết giữa chỉ số, phân loại và kết luận do người dùng tự xử lý với đáp án chuẩn. Kết quả hiển thị tính chính xác của từng chỉ số, nhãn cờ đỏ, thẩm quyền phê duyệt liên quan, kèm giải thích chuyên môn.

Dữ liệu do người dùng tính và chọn đóng vai trò đầu vào (Input) của hệ thống xử lý (Process). Output chính thức là kết quả đánh giá và phản hồi được trả về.

## 2. Luồng Xử Lý Tổng Thể (System Flow)

```
[User: Sinh viên khối ngành Kinh tế]
                     │
                     ▼
[Input: Dữ liệu thô trích xuất, chỉ số tự tính toán (OCF/NI, DSO, % tập trung khách hàng), nhãn cờ đỏ kế toán được chọn, kết luận về nhân sự/bộ phận thẩm quyền]
                     │
                     ▼
[Process: Thuật toán so khớp chỉ số với biên độ sai số cho phép, đối chiếu nhãn cờ đỏ, kiểm tra thẩm quyền phê duyệt và tổng hợp phản hồi giải thích]
                     │
                     ▼
[Output: Bảng đánh giá chi tiết đúng/sai cho từng hạng mục kèm giải thích căn cứ tài chính]
                     │
                     ▼
[User Action: Rà soát sai sót chuyên môn, điều chỉnh tư duy đọc báo cáo và phân tích dữ liệu cho các phiên tiếp theo]
```

## 3. Initial Required Information

Dữ liệu ban đầu bao gồm bối cảnh doanh nghiệp (Aster Holdings thuộc Aurora Group), ba bộ dữ liệu thô độc lập cho ba bất thường trọng yếu, một bộ số liệu nhiễu (bẫy trọng yếu), Bản đồ quyền hạn tài chính và năm nhân vật đại diện cho các phân vùng thông tin.

Bản v2 cấu trúc lại thông tin thành hai phần rõ ràng: **Hồ sơ vụ án** (dữ liệu công khai, hiển thị mặc định) và **Danh mục nhân vật** (dữ liệu nội bộ, cần thao tác mở).

### 3.1. Hồ sơ vụ án (Hiển thị mặc định, không cần điều kiện mở)

Bao gồm các dữ liệu công khai theo quy định công bố thông tin hoặc cơ cấu tổ chức chung của doanh nghiệp. Toàn bộ xuất hiện đồng thời tại màn hình ban đầu.

| Hạng mục | Chi tiết nội dung | Vai trò chuyên môn |
| --- | --- | --- |
| Bối cảnh tình huống | Tóm tắt sự việc, khởi động đồng hồ 48 giờ | Dẫn nhập bối cảnh |
| Giới thiệu doanh nghiệp | Cơ cấu tổ chức Aurora Group và Aster Holdings | Thông tin nền tảng |
| Báo cáo tài chính hợp nhất | Doanh thu, Lợi nhuận ròng (NI), Dòng tiền kinh doanh (OCF) trong 4 quý | Dữ liệu tính Bất thường 1 |
| Cơ cấu khách hàng | Tỷ trọng đóng góp doanh thu của khách hàng trong 4 quý | Dữ liệu tính Bất thường 3 |
| Bản đồ quyền hạn tài chính | Khung phân quyền phê duyệt theo chức danh nội bộ | Dữ liệu đối chiếu Bất thường 3 |
| Danh mục nhân vật | Danh sách 5 nhân sự chủ chốt (chỉ gồm tên và chức danh) | Menu điều hướng tới mục 3.2 |

### 3.2. Danh mục nhân vật (Vùng thông tin cần chủ động truy cập)

Người dùng lựa chọn điều tra từng nhân sự để tiếp cận tài liệu nội bộ tương ứng theo thứ tự linh hoạt.

| Dữ liệu nội bộ | Điều kiện mở | Cơ sở phân loại tài liệu nội bộ |
| --- | --- | --- |
| Chi tiết khoản phải thu (AR) theo quý | Hồ sơ Victor | Dữ liệu quản trị vận hành thuộc phạm vi phụ trách của COO |
| Hồ sơ hợp đồng Northstar | Hồ sơ Victor | Hồ sơ pháp lý và hợp đồng kinh tế nội bộ |
| Chi tiết chi phí văn phòng phẩm (bẫy trọng yếu) | Hồ sơ David | Báo cáo chi phí chi tiết thuộc thẩm quyền CFO |
| Ghi chú cá nhân (tài liệu giải trình mở rộng) | Hồ sơ David | Tài liệu cá nhân, yêu cầu tính đúng chỉ số trước khi mở |
| Chi tiết gói đãi ngộ cá nhân | Hồ sơ Ethan | Hồ sơ nhân sự bảo mật |
| Báo cáo phạm vi kiểm toán | Hồ sơ Sophia | Biên bản làm việc của đơn vị kiểm toán |
| Danh mục đầu tư cá nhân | Hồ sơ Lucas | Tài liệu tài chính cá nhân |
| Báo cáo xác minh tin đồn | Tự động sau khi truy cập hồ sơ David | Dữ liệu kiểm chứng sự kiện nội bộ |

## 4. Core Process Type

Hệ thống xử lý qua 4 bước logic:

1. **Tính toán (Calculation):** Người dùng nhập giá trị các chỉ số (OCF/NI, DSO, % tập trung khách hàng) tính được từ dữ liệu thô. Hệ thống kiểm tra kết quả theo khoảng sai số cho phép.
2. **Phân loại (Classification):** Người dùng chọn nhãn cờ đỏ kế toán tương ứng từ 5 lựa chọn (3 nhãn chính xác, 2 nhãn nhiễu). Hệ thống đối chiếu với phân loại chuẩn.
3. **Đối chiếu thẩm quyền (Authority Cross-Checking):** Người dùng đối chiếu mã phê duyệt trên hợp đồng với Bản đồ quyền hạn tài chính để phát hiện sai lệch về phân quyền nội bộ.
4. **Tổng hợp phản hồi (Explanation):** Khi người dùng nộp báo cáo, hệ thống tự động xuất kết quả đánh giá chi tiết kèm căn cứ phân tích cho từng hạng mục.

## 5. MVP Flow

Mỗi giai đoạn được phân định rõ theo ba yếu tố: Xử lý của hệ thống, Thao tác của người dùng và Điều kiện kích hoạt.

* **Bước 1: Khởi tạo tình huống (Tự động)**
  * Hệ thống: Hiển thị tóm tắt tình huống và bắt đầu đếm ngược thời gian.
  * Người dùng: Tiếp nhận thông tin bối cảnh.
  * Điều kiện: Truy cập phiên làm việc mới.

* **Bước 2: Phân tích Hồ sơ vụ án (Mặc định)**
  * Hệ thống: Hiển thị toàn bộ dữ liệu tại mục 3.1.
  * Người dùng: Đọc số liệu và có thể tính toán trước chỉ số OCF/NI và tỷ trọng tập trung khách hàng.
  * Điều kiện: Hoàn thành Bước 1.

* **Bước 3: Lựa chọn nhân vật điều tra (Thao tác chính)**
  * Người dùng: Tùy chọn mở hồ sơ của một trong 5 nhân sự (David, Victor, Ethan, Sophia, Lucas) theo thứ tự bất kỳ.
  * Điều kiện: Thực hiện trên giao diện danh mục nhân sự.

* **Bước 4: Khai thác dữ liệu nội bộ (Phân nhánh)**
  * Nhánh Victor: Hệ thống xuất chi tiết AR (để tính DSO) và hợp đồng Northstar. Người dùng đối chiếu mã phê duyệt với Bản đồ quyền hạn.
  * Nhánh David: Hệ thống xuất chi tiết chi phí văn phòng phẩm. Người dùng tính toán tỷ trọng trên doanh thu để đánh giá tính trọng yếu.
  * Nhánh Ethan/Sophia/Lucas: Hệ thống xuất các hồ sơ liên quan để người dùng xác nhận không có bất thường trọng yếu.

* **Bước 5: Kích hoạt thông tin mở rộng (Tự động theo logic)**
  * Hệ thống: Kiểm tra nếu người dùng đã tính đúng OCF/NI trước khi xem hồ sơ David, tài liệu giải trình bổ sung sẽ hiển thị ở trạng thái đặc biệt.
  * Người dùng: Tiếp nhận thông tin bổ sung nếu thỏa mãn điều kiện.

* **Bước 6: Xử lý sự kiện tin đồn (Lựa chọn)**
  * Điều kiện: Người dùng mở hồ sơ David lần đầu.
  * Người dùng: Chọn "Xác minh thông tin trước khi ghi nhận" hoặc "Ghi nhận trực tiếp vào báo cáo".

* **Bước 7: Điền Bảng chẩn đoán tài chính (Bắt buộc)**
  * Người dùng: Điền các chỉ số đã tính, chọn nhãn cờ đỏ tương ứng và đánh giá độ tin cậy của thông tin.
  * Ràng buộc: Hệ thống chỉ ghi nhận các chỉ số phát sinh từ quá trình thao tác hợp lệ.

* **Bước 8: Nộp Báo cáo điều tra (Chủ động hoặc Tự động)**
  * Người dùng: Hoàn thiện 5 nội dung đánh giá (Đơn vị có bất thường, Bằng chứng định lượng, Người có thẩm quyền liên quan, Kết quả xác minh tin đồn, Đánh giá tính trọng yếu).
  * Kích hoạt: Người dùng chủ động gửi báo cáo hoặc hệ thống tự thu bài khi hết thời gian 48 giờ ảo.

* **Bước 9: Nhận kết quả và Đánh giá (Tự động)**
  * Hệ thống: Chấm điểm tự động, xuất bản đối chiếu đáp án chi tiết và hiển thị phân cảnh kết thúc tương ứng với mức độ chính xác của báo cáo.

## 6. Phạm Vi Dự Án (Scope Definition)

* **Target Scope (Mục tiêu Tuần 6 và 7):** Doanh nghiệp Aster Holdings với 3 bất thường chính (Earnings Quality, DSO, Customer Concentration) và 1 bẫy thông tin không trọng yếu; 5 nhân vật dữ liệu; Bản đồ phân quyền tài chính; Đồng hồ đếm ngược thời gian thực; 1 sự kiện tin đồn; Bảng chẩn đoán tài chính và Báo cáo điều tra có kiểm tra chéo dữ liệu.
* **Fallback Scope (Phương án dự phòng):** Chuyển tài liệu giải trình mở rộng thành văn bản thông thường; tinh giản sự kiện tin đồn; rút gọn danh sách nhãn cờ đỏ từ 5 xuống 3.
* **Out of Scope (Ngoài phạm vi phát triển):** Cốt truyện nhiều nhánh phức tạp; hệ thống tài khoản và lưu trữ cơ sở dữ liệu nhiều phiên; bảng xếp hạng người chơi; mô hình biến động giá cổ phiếu theo thời gian thực; tính năng tự động tạo case bằng AI.

## 7. Initial Route Hypothesis

* **Phương án triển khai chính:** Ứng dụng Web tương tác (Code based web) sử dụng React/JavaScript. Cấu trúc dữ liệu tĩnh (Báo cáo tài chính, Danh mục phân quyền, Đáp án chuẩn) được lưu trữ dưới định dạng JSON, không yêu cầu cơ sở dữ liệu phức tạp. Cơ chế thời gian được vận hành bằng bộ đếm giờ chuẩn (`setInterval`).
* **Phương án dự phòng:** Bản mẫu tương tác (Interactive Figma Prototype) kết hợp bảng quy tắc chấm điểm chi tiết nếu tiến độ kỹ thuật không đáp ứng thời hạn.

## 8. Phân Công Trách Nhiệm (Responsibility Matrix)

| Trách nhiệm | Thành viên phụ trách | Đầu ra cụ thể | Thành phần phụ thuộc / Phối hợp |
| --- | --- | --- | --- |
| **Input Owner** | Phạm Triệu Tiến Dũng | Bộ dữ liệu tài chính thô, đáp án chuẩn cho các chỉ số, bộ số liệu bẫy trọng yếu | Logic Owner, Interface Owner |
| **Logic Owner** | Nguyễn Minh Hiền | Công thức tính toán chỉ số, benchmark ngành, danh mục nhãn cờ đỏ, logic đếm giờ | Output Owner, Integration Owner, Kiểm thử |
| **Output Owner** | Tôn Khánh Ngọc | Nội dung phản hồi chi tiết tại Báo cáo cuối, kịch bản tài liệu mở rộng và sự kiện tin đồn, phân cảnh kết thúc | Interface Owner, Demo |
| **Interface Owner** | Đinh Thị Minh Khuê | Giao diện tương tác: Danh mục nhân sự, Bảng chẩn đoán, Bản đồ quyền hạn, Đồng hồ đếm giờ, Form Báo cáo | Kiểm thử người dùng, Demo |
| **Integration Owner** | Phạm Quỳnh Phương | Tích hợp luồng vận hành (Run path), quản lý và đồng bộ trạng thái dữ liệu (State management) toàn hệ thống | Toàn nhóm, Checkpoint |
