# The Last Heir — Financial Investigation Game

> Học phần: **NHA408E**  
> Nhóm: **G08**

## Team Members

| Họ tên | MSSV | Vai trò chính |
|---|---|---|
| Phạm Quỳnh Phương | 2411380865 | Team Lead & Integration Owner |
| Phạm Triệu Tiến Dũng | 2412380014 | Financial Content & Input Owner |
| Nguyễn Minh Hiền | 2412380018 | Gameplay & Logic Owner |
| Tôn Khánh Ngọc | 2412380035 | Storyline & Output Owner |
| Đinh Thị Minh Khuê | 2412380022 | UI/UX Owner |

---

# WEEK 1 — PROBLEM DIRECTION

## 1. Three Problem Candidates

### Problem Candidate 1 — Information Integration

Sinh viên có thể hiểu từng bảng số liệu, báo cáo hoặc khái niệm tài chính riêng lẻ nhưng gặp khó khăn khi phải kết nối thông tin nằm ở nhiều nguồn khác nhau để hiểu đầy đủ một vấn đề doanh nghiệp.

Trong một tình huống thực tế, dấu hiệu ban đầu có thể xuất hiện ở dữ liệu tài chính tổng hợp, trong khi nguyên nhân và bằng chứng liên quan lại nằm ở dữ liệu giao dịch, hợp đồng hoặc tài liệu kiểm soát. Vì vậy, người học cần biết thông tin nào có liên quan với nhau và nên tiếp tục điều tra theo hướng nào.

### Problem Candidate 2 — Evidence Verification

Sinh viên gặp khó khăn trong việc phân biệt giữa một dấu hiệu đáng chú ý và một bằng chứng đủ mạnh để hỗ trợ kết luận.

Một tỷ lệ bất thường, một giao dịch lớn hoặc một ngoại lệ kiểm soát có thể tạo ra nghi vấn nhưng chưa chắc đã chứng minh được nguyên nhân hoặc trách nhiệm của một cá nhân.

### Problem Candidate 3 — Evidence-Based Reasoning

Sinh viên có thể nhận diện được nhiều dấu hiệu riêng lẻ nhưng gặp khó khăn khi xây dựng một chuỗi lập luận trong đó các bằng chứng được kết nối, so sánh và sử dụng để hỗ trợ hoặc bác bỏ một giả thuyết.

### Selected Problem Direction

Nhóm lựa chọn **Information Integration** làm problem direction chính.

Evidence Verification và Evidence-Based Reasoning vẫn có liên quan đến sản phẩm, nhưng được xem là các kỹ năng hỗ trợ trong quá trình giải quyết vấn đề tổng hợp thông tin.

---

## 2. Selected Target User

Người dùng mục tiêu là **sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh đã có kiến thức tài chính cơ bản**.

Nhóm người dùng này đã có khả năng đọc các thông tin tài chính cơ bản và thực hiện những phép tính đơn giản, nhưng chưa nhất thiết có nhiều kinh nghiệm xử lý các tình huống doanh nghiệp mở, trong đó thông tin cần thiết được phân tán giữa nhiều nguồn và không có sẵn một câu trả lời trực tiếp.

---

## 3. User Task or Decision

Người dùng cần xác định một vấn đề tài chính đáng chú ý từ dữ liệu doanh nghiệp, tìm các thông tin liên quan ở những nguồn khác nhau và tổng hợp chúng thành một kết luận có căn cứ.

Nhiệm vụ cốt lõi có thể khái quát như sau:

```text
Quan sát dữ liệu doanh nghiệp
        ↓
Xác định vấn đề đáng điều tra
        ↓
Tìm thông tin chi tiết liên quan
        ↓
Đối chiếu nhiều nguồn
        ↓
Kết nối bằng chứng
        ↓
Đưa ra kết luận có căn cứ
```

Khó khăn chính không nằm ở từng phép tính riêng lẻ mà nằm ở việc người dùng phải biết nên xem thông tin nào tiếp theo, thông tin nào thực sự liên quan đến nhau và mức độ kết luận nào phù hợp với bằng chứng đang có.

---

## 4. Draft Problem Statement

> Sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản gặp khó khăn khi xử lý các tình huống doanh nghiệp có nhiều nguồn thông tin, vì dữ liệu cần thiết để hiểu và giải thích vấn đề thường được phân tán giữa báo cáo tài chính, dữ liệu giao dịch và tài liệu kiểm soát. Việc hiểu từng nguồn riêng lẻ chưa đủ; người học cần có khả năng kết nối các nguồn này thành một chuỗi lập luận tài chính nhất quán và có căn cứ.

---

## 5. Initial Source or Observation

Giả định ban đầu của nhóm là sinh viên có thể xử lý từng bảng số liệu hoặc tài liệu tài chính riêng biệt nhưng gặp nhiều khó khăn hơn khi phải xác định mối liên hệ giữa chúng trong cùng một tình huống.

Để kiểm tra giả định này, nhóm có thể sử dụng một case ngắn gồm dữ liệu tài chính tổng hợp, dữ liệu giao dịch và một số tài liệu liên quan, sau đó quan sát xem người dùng có thể:

1. xác định đúng thông tin cần ưu tiên;
2. lựa chọn đúng nguồn cần xem tiếp;
3. liên kết các thông tin nói về cùng một vấn đề;
4. phân biệt dấu hiệu với bằng chứng;
5. đưa ra kết luận phù hợp với thông tin hiện có.

---

## 6. Why This Is a Finance/Banking Problem

Vấn đề liên quan trực tiếp đến các kỹ năng tài chính như phân tích biến động, truy vết giao dịch, đối chiếu dữ liệu, đánh giá bằng chứng và xem xét vai trò của kiểm soát tài chính trong doanh nghiệp.

Giá trị chính của dự án vì vậy nằm ở **financial reasoning**. Công nghệ chỉ đóng vai trò hỗ trợ người dùng tiếp cận, xử lý và kết nối các thông tin tài chính một cách có cấu trúc hơn.

---

## 7. Visible Contribution

| Thành viên | Trách nhiệm trong Week 1 | Visible Output |
|---|---|---|
| Phạm Quỳnh Phương | Tổng hợp problem direction và tích hợp các phần của nhóm | Bản tổng hợp **Three Problem Candidates**, quyết định chọn **Information Integration**, cấu trúc `README.md` và bản ghi thay đổi sau Checkpoint 1 |
| Phạm Triệu Tiến Dũng | Làm rõ bản chất tài chính của vấn đề và cách thông tin bị phân mảnh | **Initial Financial Information Structure** gồm dữ liệu tài chính tổng hợp, dữ liệu giao dịch và tài liệu kiểm soát; kèm mô tả mối liên hệ giữa các lớp thông tin |
| Nguyễn Minh Hiền | Xác định nhiệm vụ thực tế mà người dùng phải thực hiện | **User Task Flow** từ quan sát dữ liệu đến xác định vấn đề, tìm thông tin liên quan, đối chiếu, kết nối bằng chứng và kết luận |
| Tôn Khánh Ngọc | Xây dựng bối cảnh ban đầu để kiểm tra problem direction | **Initial Case Context** của Aster Holdings, xác định một tình huống doanh nghiệp trong đó thông tin tài chính không xuất hiện đầy đủ trong một tài liệu duy nhất |
| Đinh Thị Minh Khuê | Xác định cách trình bày thông tin phục vụ quan sát người dùng | **Initial User Observation Layout** thể hiện cách bố trí dữ liệu tổng hợp và tài liệu chi tiết để kiểm tra khả năng xác định hướng điều tra và kết nối thông tin |

Các đầu ra trên phục vụ trực tiếp cho Week 1 và chưa giả định trước hình thức sản phẩm cuối cùng hoặc technical route.

---

## 8. Open Questions

Ở cuối Week 1, nhóm chưa quyết định:

- sản phẩm cụ thể sẽ có hình thức gì;
- main output người dùng nhận được là gì;
- core process biến input thành output như thế nào;
- MVP nên kiểm chứng phần nào của problem direction;
- phạm vi nào khả thi trong thời gian của học phần;
- technical route nào phù hợp với sản phẩm.

Những câu hỏi này được giữ lại để giải quyết trong Week 2.

---

# AFTER CHECKPOINT 1

## Feedback Received

Nhóm cần thu hẹp phạm vi vấn đề và tránh xây dựng một case dựa trên quá nhiều bất thường tài chính hoặc nhiều hướng điều tra độc lập.

Nếu mỗi chỉ số hoặc dấu hiệu mở ra một nhánh riêng, sản phẩm có nguy cơ chuyển từ việc rèn luyện Information Integration sang xử lý một danh sách lớn các vấn đề tài chính không liên kết.

## Decision

**KEEP + SIMPLIFY**

Nhóm giữ nguyên **Information Integration** làm problem direction nhưng đơn giản hóa case quanh một investigation chain chính.

## Revision Made

Nhóm chuyển từ ý tưởng xử lý nhiều bất thường tài chính độc lập sang một cấu trúc trong đó người dùng bắt đầu từ dữ liệu doanh nghiệp tổng hợp, xác định một dòng tiền đáng chú ý, truy vết xuống giao dịch Northstar và tiếp tục sử dụng các tài liệu liên quan để hiểu vấn đề.

Cấu trúc sau revision:

```text
Financial Information
        ↓
Suspicious Financial Signal
        ↓
Transaction-Level Information
        ↓
Related Evidence
        ↓
Evidence-Based Conclusion
```

Việc thu hẹp này giúp các nguồn thông tin phục vụ cùng một investigation chain thay vì tạo ra nhiều tuyến phân tích không liên kết.

## Open Question Before Week 2

> Sản phẩm nào có thể biến quá trình tổng hợp thông tin tài chính này thành một nhiệm vụ tương tác rõ ràng, có main output quan sát được và có phạm vi khả thi trong thời gian của học phần?

