# The Last Heir — Project Proposal Tuần 2

> Học phần: **NHA408E** · Nhóm: **08**

## 1. Problem Direction

Nhóm tiếp tục theo **Đề xuất 1 — Tích hợp thông tin**: sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh gặp khó khăn khi đánh giá các tình huống tài chính doanh nghiệp phức tạp, vì thông tin liên quan có thể bị phân mảnh giữa báo cáo tài chính, hồ sơ giao dịch, tài liệu nội bộ, thông tin công khai và các thông tin chưa được kiểm chứng.

> Sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản gặp khó khăn khi xác định cách giải thích đáng tin cậy nhất cho một bất thường tài chính doanh nghiệp, vì thông tin liên quan bị phân mảnh giữa hồ sơ tài chính, tài liệu nội bộ, thông tin công khai và các thông tin chưa được kiểm chứng, khiến việc phân biệt bằng chứng đáng tin cậy với nhiễu và suy đoán trở nên khó khăn.

## 2. Target User and User Task

**Target user:** Sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức cơ bản về báo cáo tài chính và tài chính doanh nghiệp. Nhóm người dùng này đã nắm được các khái niệm tài chính nền tảng, nhưng còn ít kinh nghiệm áp dụng chúng vào các tình huống mở, nơi thông tin bị phân tán trên nhiều nguồn có độ tin cậy khác nhau.

**User task:** Đánh giá các thông tin tài chính và doanh nghiệp hiện có, từ đó xác định cách giải thích nào cho một bất thường tài chính doanh nghiệp được bằng chứng ủng hộ mạnh nhất.

**Luồng nhiệm vụ:**

```
Xác định bất thường → Đánh giá thông tin → Xác minh bằng chứng → Kết nối bằng chứng → Hình thành kết luận
```

Người dùng không đơn thuần được yêu cầu nhớ lại kiến thức tài chính, mà phải quyết định thông tin nào là liên quan và thông tin đó ủng hộ một cách giải thích cụ thể đến mức nào.

**Difficulty:** Thông tin liên quan phân mảnh trên nhiều nguồn có độ tin cậy khác nhau, gồm cả thông tin chưa kiểm chứng, khiến việc chọn căn cứ cho kết luận trở nên khó khăn.

## 3. Desired User Outcome

Sau một phiên trải nghiệm sản phẩm, người dùng có thể phân biệt được bằng chứng tài chính đáng tin với suy đoán và tin đồn, đồng thời tự đưa ra một kết luận tài chính có căn cứ rõ ràng từ một tập thông tin phân mảnh, thay vì đoán hoặc chọn theo cảm tính.

## 4. Product Statement

Một sản phẩm giúp sinh viên Tài chính, Kế toán, Ngân hàng và Kinh doanh luyện tập việc tích hợp thông tin tài chính phân mảnh, bằng cách đặt họ vào một tình huống bất thường tài chính doanh nghiệp có nhiều nguồn thông tin với độ tin cậy khác nhau, và yêu cầu họ đưa ra kết luận kèm bằng chứng cụ thể bảo vệ kết luận đó.

## 5. Main Output

Nhóm rà lại các kết quả có thể nhìn thấy để loại bỏ những thứ chỉ là container hoặc giao diện, chưa phải kết quả cuối.

Assumption Board là giao diện thao tác, không phải kết quả cuối. Investigation Dashboard là nơi hiển thị, không phải kết quả người dùng nhận được. Final Case Report, nếu chỉ được định nghĩa là một màn hình tổng hợp, cũng là container, cần bóc tách nội dung bên trong nó.

Bên trong "Final Case Report" có bốn thành phần khác nhau, nhưng chúng thuộc hai loại khác nhau chứ không ngang hàng.

Kết luận được chọn cho bất thường tài chính, và tập bằng chứng cụ thể người dùng dùng để bảo vệ kết luận đó, là quyết định của người dùng, Đây là thứ người dùng tạo ra và đưa vào sản phẩm, không phải thứ sản phẩm trả về.

Phần trăm độ tin cậy tích lũy chỉ là một chỉ số phụ hỗ trợ. Điểm số theo bốn tiêu chí là một đánh giá phụ dùng để phản hồi. Cả hai đều không phải kết quả chính người dùng cần để giải quyết nhiệm vụ.

**Main output chốt:**

> Kết quả đối chiếu giữa kết luận người dùng chọn với logic vụ án đúng — gồm: kết luận đó đúng hay sai, bằng chứng nào người dùng đã dùng đúng, và bằng chứng nào bị bỏ sót hoặc bị tin đồn/suy đoán đánh lừa.

Phần trăm độ tin cậy, điểm bốn tiêu chí, Assumption Board và Investigation Dashboard là supporting output và container, sẽ được liệt kê ở `SOLUTION_STRUCTURE.md`, không đứng ngang hàng với main output.

Sau khi dùng sản phẩm, người dùng sẽ nhận được kết quả đối chiếu giữa kết luận mình chọn với logic vụ án đúng, kèm chỉ rõ bằng chứng nào dùng đúng và bằng chứng nào bị bỏ sót hoặc bị đánh lừa. Output này giúp người dùng kiểm tra lại xem lập luận của mình có dựa trên bằng chứng đáng tin hay đã bị tin đồn và suy đoán đánh lừa. Hành động tiếp theo của người dùng là xem lại đúng những bằng chứng bị bỏ sót hoặc dùng sai, để hiệu chỉnh cách đọc bằng chứng cho lần kết luận sau.

## 6. Product Pattern
Pattern được chọn là **Financial Learning Game (decision-consequence loop)**: người dùng đưa ra một lựa chọn dựa trên thông tin có sẵn, sau đó sản phẩm phản hồi lại lựa chọn đó đúng hay sai và vì sao.

Trong "The Last Heir", vòng lặp này thể hiện cụ thể như sau: người dùng chọn bằng chứng và chọn một cách giải thích (quyết định) → sản phẩm so khớp với logic vụ án đúng và trả lời đúng/sai kèm lý do (hệ quả).

Giá trị nằm ở việc người dùng phải ra quyết định dựa trên bằng chứng và nhận phản hồi về hệ quả của quyết định đó. Điều này khác với Comparison Tool, vốn chỉ so sánh các phương án có sẵn, và khác với Calculator, vốn chỉ tính ra một chỉ số duy nhất.

## 7. Feasibility and Open Questions

Sản phẩm khả thi trong khuôn khổ môn học nếu giới hạn ở một vụ án duy nhất, tức vụ Victor, với một tập bằng chứng nhỏ khoảng năm đến tám mục, và không cần hệ thống tài khoản hay lưu tiến trình.

**Open questions còn lại:**

1. Mức độ phức tạp tài chính nào phù hợp với target user đã chọn.
2. Bao nhiêu bằng chứng là đủ để tạo khó khăn có ý nghĩa mà không gây rối cho người chơi.
3. Người dùng thật có thực sự nhầm lẫn bằng chứng đáng tin với tin đồn hay đây chỉ là giả định của nhóm, cần kiểm chứng ở Tuần 3.
4. Giữa phần trăm độ tin cậy và điểm bốn tiêu chí, phần nào cần ưu tiên làm đúng trước.
