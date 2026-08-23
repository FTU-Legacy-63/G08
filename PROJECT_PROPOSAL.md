# The Last Heir: Project Proposal (Tuần 2)

> Học phần: **NHA408E** | Nhóm: **G08**

## 1. Problem Direction

Nhóm tiếp tục phát triển theo **Đề xuất 1: Tích hợp thông tin**, đã được phê duyệt tại Checkpoint Tuần 1. Vấn đề thực tế là sinh viên khối ngành Kinh tế (Tài chính, Kế toán, Ngân hàng, Quản trị Kinh doanh) thường gặp khó khăn khi đánh giá các tình huống tài chính doanh nghiệp phức tạp do dữ liệu bị phân mảnh giữa báo cáo tài chính, hồ sơ giao dịch, tài liệu nội bộ và thông tin công khai.

> Sinh viên khối ngành Kinh tế đã có kiến thức nền tảng thường gặp trở ngại khi xác định nguyên nhân cốt lõi của một bất thường tài chính. Bản chất bằng chứng nằm ở dữ liệu định lượng (báo cáo và chỉ số tài chính) nhưng lại dễ bị chi phối bởi thông tin định tính (hồ sơ nhân sự, tin đồn nội bộ), dẫn đến khó khăn trong việc tách bạch bằng chứng có giá trị phân tích với thông tin mang tính dẫn dắt.

**Điều chỉnh so với Tuần 1:** Sau vòng thảo luận nội bộ, nhóm nhận thấy định hướng ban đầu (đánh giá độ tin cậy của nguồn tin như email, tin đồn) dễ khiến sản phẩm biến thành trò chơi trinh thám thuần túy, không đo lường chính xác năng lực tài chính. Vấn đề trọng tâm được thu hẹp: Thách thức cốt lõi không nằm ở việc nhận định nguồn tin thật hay giả, mà là **năng lực đọc hiểu dữ liệu thô, tự tính toán chỉ số và phát hiện bất thường kế toán**.

## 2. Target User and User Task

**Đối tượng mục tiêu (Target User):** Sinh viên đại học khối ngành Kinh tế đã nắm vững các khái niệm căn bản (đọc báo cáo tài chính, hiểu các chỉ số cơ bản) nhưng thiếu kinh nghiệm thực hành với dữ liệu mở, nơi bất thường không được chỉ ra sẵn mà đòi hỏi người học tự phát hiện qua tính toán.

**Nhiệm vụ của người dùng (User Task):** Tự tính toán các chỉ số tài chính từ dữ liệu thô, đối chiếu với chuẩn mực (benchmark) ngành, phân loại chính xác cờ đỏ kế toán (accounting red flag) và xác định cá nhân hoặc bộ phận có thẩm quyền phê duyệt liên quan để đưa ra kết luận có cơ sở định lượng.

**Luồng nhiệm vụ chuẩn:**

1. Đọc dữ liệu tài chính thô.
2. Tự tính toán các chỉ số chuyên môn.
3. Đối chiếu với benchmark ngành.
4. Phân loại cờ đỏ kế toán tương ứng.
5. Đối chiếu thẩm quyền phê duyệt nội bộ.
6. Đưa ra kết luận có căn cứ định lượng.

Người dùng không nhận kết luận hoặc số liệu xử lý sẵn. Mọi bất thường chỉ xuất hiện sau khi người dùng thực hiện các phép tính độc lập, đảm bảo trải nghiệm của một chuyên viên phân tích tài chính thực thụ.

**Độ phức tạp (Difficulty):** Dữ liệu thô không tự bộc lộ sai phạm. Người dùng cần chọn đúng công thức, áp dụng đúng chuẩn so sánh và phân biệt được biến động trọng yếu với các dao động vận hành thông thường.

## 3. Desired User Outcome

Sau một phiên trải nghiệm hoàn chỉnh, người dùng có khả năng:

* Tự trích xuất và tính toán các chỉ số tài chính cơ bản (OCF/NI, DSO, mức độ tập trung khách hàng) từ dữ liệu thô.
* So sánh kết quả với benchmark ngành để xác định bất thường.
* Nhận diện và phân loại biến động có tính trọng yếu thay vì dựa vào suy đoán cảm tính.

## 4. Product Statement

Sản phẩm hỗ trợ sinh viên khối ngành Kinh tế rèn luyện kỹ năng phân tích tài chính thực tế thông qua việc đóng vai người kiểm tra bất thường doanh nghiệp. Mọi kết luận đưa ra đều phải bắt nguồn từ dữ liệu và tính toán định lượng, không dựa vào suy luận cảm tính từ tài liệu tự sự.

## 5. Main Output

Nhóm tiến hành chuẩn hóa để phân biệt rõ giữa giao diện tương tác, dữ liệu đầu vào và kết quả đầu ra:

* **Không phải Output chính:** Bảng chẩn đoán tài chính (giao diện thao tác), Đồng hồ 48 giờ và Danh mục nhân vật (công cụ điều hướng), các chỉ số người dùng tự nhập (dữ liệu đầu vào).
* **Main Output chính thức:**

> Bản đối chiếu chi tiết giữa chỉ số, phân loại và kết luận do người dùng đưa ra với đáp án chuẩn. Nội dung bao gồm: Đánh giá đúng hoặc sai cho từng chỉ số tính toán, phân loại cờ đỏ, xác định thẩm quyền liên quan, kèm giải thích chuyên môn chi tiết.

Sau khi hoàn thành, bản đối chiếu cung cấp phản hồi giúp người dùng nhận diện chính xác lỗi sai trong tính toán hoặc phân loại, từ đó điều chỉnh phương pháp phân tích số liệu cho các tình huống thực tế tiếp theo.

## 6. Product Pattern

Mô hình áp dụng: **Financial Learning Game** dựa trên vòng lặp quyết định và hệ quả (decision - consequence loop). Người dùng tự tính toán và đưa ra kết luận (quyết định), sau đó hệ thống đối chiếu với đáp án chuẩn để phản hồi kết quả kèm lý do (hệ quả).

**Lý do không chọn các mô hình khác:**

* **Comparison Tool:** Mô hình này chỉ đặt các phương án có sẵn cạnh nhau để người dùng quan sát. Sản phẩm của nhóm yêu cầu người dùng phải tự tính toán số liệu trước khi hệ thống đánh giá.
* **Calculator:** Công cụ tính toán chỉ tiếp nhận dữ liệu và trả ra một con số duy nhất theo công thức cố định. Sản phẩm của nhóm đánh giá một chuỗi tư duy phân tích toàn diện (lựa chọn chỉ số, phân loại cờ đỏ, kết luận thẩm quyền) và phản hồi lý do đúng hoặc sai.

## 7. Feasibility and Open Questions

Sản phẩm đảm bảo tính khả thi trong phạm vi môn học khi tập trung vào một doanh nghiệp cụ thể (Aster Holdings, công ty con thuộc Aurora Group), ba bất thường tài chính độc lập kèm một bẫy thông tin không trọng yếu, cùng năm nhân vật đóng vai trò vùng dữ liệu điều hướng. Hệ thống không yêu cầu tạo tài khoản phức tạp hay lưu trữ tiến trình nhiều phiên.

**Các câu hỏi nghiên cứu mở (Open Questions):**

1. Mức độ phức tạp của các công thức tài chính (OCF/NI, DSO, tỷ trọng tập trung khách hàng) đã tối ưu cho sinh viên năm 2 và năm 3 hay cần tinh giản thêm.
2. Thời lượng quy đổi thực tế cho đồng hồ 48 giờ ảo (dự kiến 12 đến 15 phút) đã tạo đủ áp lực thời gian mà không gây ức chế hay chưa (cần kiểm thử thực tế).
3. Độ nhiễu của danh sách cờ đỏ kế toán (2 nhãn không thuộc tình huống) có đủ độ khó để hạn chế việc loại trừ cơ học hay không.
4. Cơ chế thông tin mở rộng (thưởng dựa trên thứ tự thao tác chính xác) có tạo được hiệu ứng nhận thức tích cực cho người học hay không.
5. Kiểm chứng tính trực quan của giao diện: Người dùng có dễ dàng nhận biết Hồ sơ vụ án là dữ liệu mở sẵn và Danh mục nhân vật là nơi cần chủ động thao tác hay không.
