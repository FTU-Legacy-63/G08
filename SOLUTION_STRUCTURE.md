# The Last Heir: Solution Structure (Tuần 2)

> Học phần: **NHA408E** | Nhóm: **G08**

## 1. Main Output

Xác định theo định hướng tại `PROJECT_PROPOSAL.md`:

> Bản đối chiếu chi tiết giữa chỉ số, phân loại và kết luận do người dùng tự xử lý với đáp án chuẩn. Kết quả hiển thị tính chính xác của từng chỉ số, nhãn cờ đỏ, thẩm quyền phê duyệt liên quan, kèm giải thích chuyên môn.

Dữ liệu do người dùng tính và chọn đóng vai trò đầu vào (Input) của hệ thống xử lý (Process). Output chính thức là kết quả đánh giá và phản hồi được trả về.

## 2. Luồng Xử Lý Tổng Thể (System Flow)

```
[User: Sinh viên khối ngành Kinh tế]
                     │
                     ▼
[Input: Dữ liệu thô trích xuất, chỉ số tự tính toán (OCF/NI, DSO, % chi phí tập trung vào một nhà cung cấp), nhãn cờ đỏ kế toán được chọn, kết luận về nhân sự/bộ phận thẩm quyền]
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

Dữ liệu ban đầu bao gồm bối cảnh doanh nghiệp (Aster Holdings thuộc Aurora Group), sáu bộ dữ liệu thô độc lập cho sáu bất thường trọng yếu, một bộ số liệu nhiễu (bẫy trọng yếu), Bản đồ quyền hạn tài chính và năm nhân vật đại diện cho các phân vùng thông tin.

**Lưu ý quan trọng về bản chất dữ liệu:** Northstar Advisory là **nhà cung cấp dịch vụ tư vấn** cho Aster Holdings — công ty phải **chi tiền** cho Northstar, không phải nơi công ty **thu tiền** về. Mọi bảng dữ liệu liên quan tới Northstar bên dưới đều phản ánh dòng tiền chi ra (chi phí), tách biệt hoàn toàn với báo cáo doanh thu (dòng tiền vào từ khách hàng thật của công ty, không liên quan Northstar).

Trò chơi chia thành hai phần rõ ràng: **Hồ sơ vụ án** (dữ liệu công khai, hiển thị mặc định) và **Danh mục nhân vật** (dữ liệu nội bộ, cần thao tác mở).

### 3.1. Hồ sơ vụ án (Hiển thị mặc định, không cần điều kiện mở)

Bao gồm các dữ liệu công khai theo quy định công bố thông tin hoặc cơ cấu tổ chức chung của doanh nghiệp. Toàn bộ xuất hiện đồng thời tại màn hình ban đầu.

| Hạng mục | Chi tiết nội dung | Vai trò chuyên môn |
| --- | --- | --- |
| Bối cảnh tình huống | Tóm tắt sự việc, khởi động đồng hồ 48 giờ | Dẫn nhập bối cảnh |
| Giới thiệu doanh nghiệp | Cơ cấu tổ chức Aurora Group và Aster Holdings | Thông tin nền tảng |
| Báo cáo tài chính hợp nhất | Doanh thu, Lợi nhuận ròng (NI), Dòng tiền kinh doanh (OCF) trong 4 quý — dữ liệu từ khách hàng thật của công ty | Dữ liệu tính Bất thường 1 |
| Cơ cấu chi phí theo nhà cung cấp | Tỷ trọng chi phí mua dịch vụ ngoài theo từng nhà cung cấp trong 4 quý — không phải doanh thu | Dữ liệu tính Bất thường 3 |
| Bản đồ quyền hạn tài chính | Khung phân quyền phê duyệt theo chức danh nội bộ | Dữ liệu đối chiếu Bất thường 4 |
| Danh mục nhân vật | Danh sách 5 nhân sự chủ chốt (chỉ gồm tên và chức danh) | Menu điều hướng tới mục 3.2 |

### 3.2. Danh mục nhân vật (Vùng thông tin cần chủ động truy cập)

Người dùng lựa chọn điều tra từng nhân sự để tiếp cận tài liệu nội bộ tương ứng theo thứ tự linh hoạt.

| Dữ liệu nội bộ | Điều kiện mở | Cơ sở phân loại tài liệu nội bộ |
| --- | --- | --- |
| Chi tiết khoản phải thu (AR) theo quý — từ khách hàng thật | Hồ sơ Victor | Dữ liệu quản trị vận hành thuộc phạm vi phụ trách của COO |
| Hồ sơ hợp đồng chi phí với Northstar Advisory | Hồ sơ Victor | Hồ sơ pháp lý và hợp đồng kinh tế nội bộ — đây là hợp đồng mua dịch vụ, không phải hợp đồng bán hàng |
| Chi tiết chi phí văn phòng phẩm (bẫy trọng yếu) | Hồ sơ David | Báo cáo chi phí chi tiết thuộc thẩm quyền CFO |
| Nhật ký phê duyệt chi phí tư vấn cả năm (các khoản chi cho nhiều nhà cung cấp, gồm cả Northstar) | Hồ sơ David | Sổ chi phí thuộc thẩm quyền CFO |
| Tỷ trọng chi phí Northstar trên tổng chi phí tư vấn theo quý | Hồ sơ David | Dữ liệu chi phí tổng hợp |
| Lịch sử thanh toán cho Northstar Advisory (28 lần chi trong năm) | Hồ sơ Sophia | Dữ liệu theo dõi các khoản thanh toán đã chi ra, thuộc thẩm quyền Kiểm soát nội bộ |
| Danh sách hợp đồng tư vấn chiến lược Lucas từng duyệt trong năm | Hồ sơ Lucas | Hồ sơ phê duyệt nội bộ thuộc thẩm quyền Giám đốc Đầu tư |
| Lịch sử các nhà cung cấp Ethan từng thẩm định khi còn là ứng viên thừa kế | Hồ sơ Ethan | Hồ sơ thẩm định nội bộ đã lưu trữ |

## 4. Core Process Type

Hệ thống xử lý qua 4 bước logic:

1. **Tính toán (Calculation):** Người dùng nhập giá trị các chỉ số (OCF/NI, DSO, % chi phí tập trung vào Northstar) tính được từ dữ liệu thô. Hệ thống kiểm tra kết quả theo khoảng sai số cho phép.
2. **Phân loại (Classification):** Người dùng chọn nhãn cờ đỏ kế toán tương ứng từ 7 lựa chọn (5 nhãn chính xác, 2 nhãn nhiễu). Hệ thống đối chiếu với phân loại chuẩn.
3. **Đối chiếu thẩm quyền (Authority Cross-Checking):** Người dùng đối chiếu mã phê duyệt trên hợp đồng chi phí Northstar với Bản đồ quyền hạn tài chính để phát hiện sai lệch về phân quyền nội bộ.
4. **Tổng hợp phản hồi (Explanation):** Khi người dùng nộp báo cáo, hệ thống tự động xuất kết quả đánh giá chi tiết kèm căn cứ phân tích cho từng hạng mục.

## 5. MVP Flow

Mỗi giai đoạn được phân định rõ theo ba yếu tố: Xử lý của hệ thống, Thao tác của người dùng và Điều kiện kích hoạt.

* **Bước 1: Khởi tạo tình huống (Tự động)**
  * Hệ thống: Hiển thị tóm tắt tình huống và bắt đầu đếm ngược thời gian.
  * Người dùng: Tiếp nhận thông tin bối cảnh.
  * Điều kiện: Truy cập phiên làm việc mới.

* **Bước 2: Phân tích Hồ sơ vụ án (Mặc định)**
  * Hệ thống: Hiển thị toàn bộ dữ liệu tại mục 3.1.
  * Người dùng: Đọc số liệu và có thể tính toán trước chỉ số OCF/NI (từ doanh thu khách hàng thật) và tỷ trọng chi phí tập trung vào Northstar (từ bảng chi phí theo nhà cung cấp).
  * Điều kiện: Hoàn thành Bước 1.

* **Bước 3: Lựa chọn nhân vật điều tra (Thao tác chính)**
  * Người dùng: Tùy chọn mở hồ sơ của một trong 5 nhân sự (David, Victor, Ethan, Sophia, Lucas) theo thứ tự bất kỳ.
  * Điều kiện: Thực hiện trên giao diện danh mục nhân sự.

* **Bước 4: Khai thác dữ liệu nội bộ (Phân nhánh)**
  * Nhánh Victor: Hệ thống xuất chi tiết AR (để tính DSO) và hồ sơ hợp đồng chi phí Northstar. Người dùng đối chiếu mã phê duyệt với Bản đồ quyền hạn.
  * Nhánh David: Hệ thống xuất chi tiết chi phí văn phòng phẩm, nhật ký phê duyệt chi phí tư vấn cả năm, và tỷ trọng chi phí Northstar theo quý. Người dùng tính toán tỷ trọng trên doanh thu để đánh giá tính trọng yếu, và tự lọc ra khoản Northstar là khoản duy nhất không qua đúng quy trình.
  * Nhánh Sophia: Hệ thống xuất lịch sử 28 lần thanh toán cho Northstar. Người dùng đối chiếu từng lần với hạn mức của Victor, và tự tính khoảng cách trung bình giữa các lần thanh toán.
  * Nhánh Lucas: Hệ thống xuất danh sách hợp đồng ông từng duyệt trong năm. Người dùng tự cộng tổng và so sánh với giá trị hợp đồng Northstar.
  * Nhánh Ethan: Hệ thống xuất lịch sử các nhà cung cấp ông từng thẩm định. Người dùng tự tính khoảng cách thời gian và so sánh quy mô giá trị để loại Ethan khỏi diện nghi.

* **Bước 5: Xử lý sự kiện phát sinh (Nếu có)**
  * Điều kiện: Tùy theo tiến trình người dùng đã thực hiện ở Bước 4.
  * Hệ thống: Cập nhật các thông tin bổ sung liên quan (nếu người dùng đủ điều kiện truy cập) để phục vụ việc tổng hợp ở bước tiếp theo.

* **Bước 6: Điền Bảng chẩn đoán tài chính (Bắt buộc)**
  * Người dùng: Điền các chỉ số đã tính, chọn nhãn cờ đỏ tương ứng và đánh giá độ tin cậy của thông tin.
  * Ràng buộc: Hệ thống chỉ ghi nhận các chỉ số phát sinh từ quá trình thao tác hợp lệ.

* **Bước 7: Nộp Báo cáo điều tra (Chủ động hoặc Tự động)**
  * Người dùng: Hoàn thiện 6 nội dung đánh giá (Đơn vị có bất thường, Bằng chứng định lượng, Người có thẩm quyền liên quan, Cơ chế lách kiểm soát, Loại trừ nghi phạm phụ, Đánh giá tính trọng yếu).
  * Kích hoạt: Người dùng chủ động gửi báo cáo hoặc hệ thống tự thu bài khi hết thời gian 48 giờ ảo.

* **Bước 8: Nhận kết quả và Đánh giá (Tự động)**
  * Hệ thống: Chấm điểm tự động, xuất bản đối chiếu đáp án chi tiết và hiển thị phân cảnh kết thúc tương ứng với mức độ chính xác của báo cáo.

## 6. Phạm Vi Dự Án (Scope Definition)

* **Target Scope (Mục tiêu Tuần 6 và 7):** Doanh nghiệp Aster Holdings với 6 bất thường chính (Earnings Quality, DSO, Vendor Concentration, Approval Authority Bypass, Payment Structuring, Chi phí tư vấn dồn vào một nhà cung cấp theo thời gian) và 1 bẫy thông tin không trọng yếu; 5 nhân vật dữ liệu; Bản đồ phân quyền tài chính; Đồng hồ đếm ngược thời gian thực; Bảng chẩn đoán tài chính và Báo cáo điều tra có kiểm tra chéo dữ liệu.
* **Fallback Scope (Phương án dự phòng):** Rút số bất thường chính từ 6 xuống 5 (bỏ bớt 1 chỉ số phụ); rút gọn danh sách nhãn cờ đỏ từ 7 xuống 5.
* **Out of Scope (Ngoài phạm vi phát triển):** Cốt truyện nhiều nhánh phức tạp; hệ thống tài khoản và lưu trữ cơ sở dữ liệu nhiều phiên; bảng xếp hạng người chơi; mô hình biến động giá cổ phiếu theo thời gian thực; tính năng tự động tạo case bằng AI.

## 7. Initial Route Hypothesis

* **Phương án triển khai chính:** Ứng dụng Web tương tác (Code based web) sử dụng React/JavaScript. Cấu trúc dữ liệu tĩnh (Báo cáo tài chính, Danh mục phân quyền, Đáp án chuẩn) được lưu trữ dưới định dạng JSON, không yêu cầu cơ sở dữ liệu phức tạp. Trong cấu trúc JSON, trường dữ liệu doanh thu (từ khách hàng thật) và trường dữ liệu chi phí (trả cho Northstar) được tách biệt hoàn toàn, tránh lặp lại nhầm lẫn về chiều dòng tiền đã xảy ra ở bản thiết kế trước. Cơ chế thời gian được vận hành bằng bộ đếm giờ chuẩn (`setInterval`).
* **Phương án dự phòng:** Bản mẫu tương tác (Interactive Figma Prototype) kết hợp bảng quy tắc chấm điểm chi tiết nếu tiến độ kỹ thuật không đáp ứng thời hạn.

## 8. Phân Công Trách Nhiệm (Responsibility Matrix)

| Trách nhiệm | Thành viên phụ trách | Đầu ra cụ thể | Thành phần phụ thuộc / Phối hợp |
| --- | --- | --- | --- |
| **Input Owner** | Phạm Triệu Tiến Dũng | Bộ dữ liệu tài chính thô cho 6 bất thường (đã tách rõ dòng tiền doanh thu và dòng tiền chi phí Northstar), đáp án chuẩn cho các chỉ số, bộ số liệu bẫy trọng yếu | Logic Owner, Interface Owner |
| **Logic Owner** | Nguyễn Minh Hiền | Công thức tính toán chỉ số, benchmark ngành, danh mục nhãn cờ đỏ, logic đếm giờ | Output Owner, Integration Owner, Kiểm thử |
| **Output Owner** | Tôn Khánh Ngọc | Nội dung phản hồi chi tiết tại Báo cáo cuối, phân cảnh kết thúc | Interface Owner, Demo |
| **Interface Owner** | Đinh Thị Minh Khuê | Giao diện tương tác: Danh mục nhân sự, Bảng chẩn đoán, Bản đồ quyền hạn, Đồng hồ đếm giờ, Form Báo cáo | Kiểm thử người dùng, Demo |
| **Integration Owner** | Phạm Quỳnh Phương | Tích hợp luồng vận hành (Run path), quản lý và đồng bộ trạng thái dữ liệu (State management) toàn hệ thống | Toàn nhóm, Checkpoint |
