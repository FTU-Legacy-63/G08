# The Last Heir — Project Proposal

> Học phần: **NHA408E**  
> Nhóm: **G08**

# WEEK 2 — PRODUCT DIRECTION

## 1. Problem Direction

Dự án tiếp tục problem direction được lựa chọn trong Week 1: **Information Integration**.

Sinh viên có kiến thức tài chính cơ bản có thể hiểu từng loại thông tin riêng biệt nhưng gặp khó khăn khi phải kết nối dữ liệu từ nhiều nguồn để giải thích một vấn đề doanh nghiệp. Trong một tình huống mở, thông tin cần thiết có thể nằm ở dữ liệu tài chính tổng hợp, dữ liệu giao dịch, hợp đồng, quy tắc kiểm soát và các tài liệu nội bộ. Không một nguồn riêng lẻ nào cung cấp toàn bộ câu trả lời.

Sau Checkpoint 1, nhóm thu hẹp vấn đề quanh một investigation chain thống nhất. Thay vì sử dụng nhiều bất thường tài chính độc lập, người dùng sẽ bắt đầu từ một vấn đề tài chính ban đầu, truy vết đến giao dịch liên quan và tiếp tục sử dụng các nguồn thông tin khác để xây dựng một kết luận.

---

## 2. Target User and User Task

Người dùng mục tiêu là **sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh đã có kiến thức tài chính cơ bản**.

Trong sản phẩm, người dùng phải phân tích một tình huống doanh nghiệp, xác định vấn đề tài chính cần được ưu tiên điều tra, truy vết các giao dịch liên quan, đánh giá các bằng chứng tài chính và kiểm soát, sau đó tổng hợp chúng thành một kết luận có căn cứ.

Nhiệm vụ trọng tâm không phải là thực hiện càng nhiều phép tính càng tốt. Các phép tính và chỉ số tài chính chỉ được sử dụng khi chúng hỗ trợ việc xác định vấn đề, đánh giá một giả thuyết hoặc kết nối các bằng chứng trong investigation chain.

---

## 3. Desired User Outcome

Sau khi hoàn thành sản phẩm, người dùng được kỳ vọng có khả năng xác định thông tin tài chính nào cần được ưu tiên trong một tình huống có nhiều dữ liệu, đi từ dữ liệu tổng hợp xuống giao dịch và tài liệu chi tiết, đồng thời kết nối các nguồn thông tin đề cập đến cùng một vấn đề.

Người dùng cũng cần biết sử dụng các phép phân tích tài chính như công cụ hỗ trợ lập luận, phân biệt **red flag** với bằng chứng đủ mạnh, điều chỉnh giả thuyết khi xuất hiện thông tin mới và đưa ra kết luận không vượt quá bằng chứng hiện có.

Desired outcome của sản phẩm là **cải thiện khả năng tổng hợp và lập luận từ thông tin tài chính phân mảnh**, thay vì chỉ kiểm tra khả năng ghi nhớ kiến thức hoặc tính toán các chỉ số độc lập.

---

## 4. Product Statement

> **The Last Heir** là một Scenario-Based Financial Investigation Learning Game, trong đó người chơi vào vai người thừa kế của Aster Holdings và phải điều tra một vấn đề tài chính đang diễn ra trong doanh nghiệp. Người chơi bắt đầu từ dữ liệu tài chính tổng hợp, truy vết một giao dịch đáng chú ý liên quan đến Northstar, tiếp tục phân tích các bằng chứng tài chính và kiểm soát, so sánh trách nhiệm của những cá nhân liên quan và cuối cùng đưa ra một kết luận có căn cứ về người chịu trách nhiệm chính.

Sản phẩm sử dụng một case thống nhất để biến việc đọc và phân tích dữ liệu tài chính thành một quá trình điều tra có mục tiêu, trong đó mỗi thông tin mới phải đóng góp vào quá trình xây dựng hoặc điều chỉnh lập luận của người chơi.

---

## 5. Main Output

Main output của sản phẩm hoàn chỉnh là:

> **Financial Trace Map kết hợp với Evidence-Based Responsibility Conclusion.**

**Financial Trace Map** thể hiện cách người dùng đi từ vấn đề tài chính ban đầu đến giao dịch cần điều tra và các bằng chứng liên quan. Nó cho thấy những thông tin nào đã được sử dụng và cách chúng liên kết với nhau trong quá trình điều tra.

**Evidence-Based Responsibility Conclusion** là kết luận cuối cùng về cá nhân chịu trách nhiệm chính, được xây dựng dựa trên chuỗi bằng chứng mà người dùng đã thu thập, đánh giá và kết nối.

Main output này phù hợp với problem direction vì nó làm cho quá trình Information Integration trở nên quan sát được. Người dùng không chỉ đưa ra một đáp án cuối cùng mà còn phải thể hiện được cách kết luận đó được hình thành.

Các thành phần như điểm số, timer, evidence cards, hint hoặc narrative ending chỉ đóng vai trò hỗ trợ và không thay thế main output.

---

## 6. Product Pattern

Sản phẩm sử dụng mô hình **Scenario-Based Financial Investigation Learning Game**.

Core interaction được tổ chức quanh một investigation loop:

```text
Observe
   ↓
Investigate
   ↓
Analyse
   ↓
Connect
   ↓
Reassess
   ↓
Conclude
```

Người chơi quan sát thông tin ban đầu, xác định hướng cần điều tra, tiếp cận thêm dữ liệu, thực hiện các phân tích cần thiết, kết nối bằng chứng và điều chỉnh giả thuyết trước khi đưa ra kết luận.

Cấu trúc này khác với Question Bank vì các quyết định không tồn tại độc lập mà cùng thuộc một case và ảnh hưởng đến quá trình điều tra tiếp theo.

Sản phẩm cũng không phải Calculator hoặc Dashboard thuần túy vì calculation và data display chỉ là công cụ hỗ trợ một nhiệm vụ điều tra lớn hơn.

---

## 7. Feasibility and Open Questions

Dự án được xây dựng quanh một case doanh nghiệp, một investigation chain chính và một số lượng hữu hạn dữ liệu, bằng chứng và lựa chọn. Vì vậy sản phẩm có thể sử dụng dữ liệu được chuẩn bị trước và logic xác định rõ mà không cần phụ thuộc vào dữ liệu thị trường thời gian thực, external API hoặc backend phức tạp.

Để kiểm soát phạm vi, MVP sẽ tập trung vào **nhánh Financial Trace**, trong đó người dùng bắt đầu từ một vấn đề tài chính, truy vết xuống giao dịch Northstar và xây dựng một chuỗi thông tin giải thích vì sao giao dịch này cần được điều tra tiếp. Phần phân tích trách nhiệm của các nghi phạm và kết luận thủ phạm thuộc Target Product.

Các câu hỏi cần tiếp tục được giải quyết gồm:

1. Mức độ phức tạp nào của dữ liệu tài chính là phù hợp với người dùng mục tiêu?
2. Cần bao nhiêu nguồn thông tin để người dùng thực sự phải thực hiện Information Integration?
3. Financial Trace Map nên được trình bày như thế nào để phản ánh rõ reasoning process?
4. Những yếu tố gameplay nào hỗ trợ quá trình điều tra mà không làm lu mờ learning outcome?
5. Mức bằng chứng nào là đủ để Target Product cho phép người dùng đưa ra Responsibility Conclusion một cách thuyết phục?
