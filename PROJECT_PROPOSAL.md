# The Last Heir — Project Proposal (Tuần 2)

> Học phần: **NHA408E** · Nhóm: **G08**

## 1. Problem Direction

Nhóm tiếp tục theo **Đề xuất 1 — Tích hợp thông tin**, đã được thầy duyệt ở Checkpoint Tuần 1: sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh gặp khó khăn khi đánh giá các tình huống tài chính doanh nghiệp phức tạp, vì thông tin liên quan bị phân mảnh giữa báo cáo tài chính, hồ sơ giao dịch, tài liệu nội bộ và thông tin công khai.

> Sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản gặp khó khăn khi xác định cách giải thích đáng tin cậy nhất cho một bất thường tài chính doanh nghiệp, vì bằng chứng thật sự nằm trong số liệu định lượng (báo cáo tài chính, chỉ số tài chính) nhưng dễ bị lấn át bởi thông tin định tính (hồ sơ nhân sự, tin đồn), khiến việc tách bạch bằng chứng có giá trị phân tích với thông tin chỉ mang tính dẫn dắt trở nên khó khăn.

**Thay đổi so với Tuần 1:** ở vòng brainstorm sau checkpoint, nhóm nhận ra hướng ban đầu (đánh giá độ tin cậy nguồn tin như email, hồ sơ nhân sự, tin đồn) dễ khiến sản phẩm lệch thành một trò chơi trinh thám thuần túy, không đo đúng năng lực tài chính. Vấn đề được thu hẹp lại: khó khăn cốt lõi không phải "phân biệt nguồn tin thật/giả", mà là **tự đọc số liệu tài chính thô, tự tính chỉ số, và nhận diện bất thường** phù hợp với năng lực phân tích tài chính, không phải suy luận hình sự.

## 2. Target User and User Task

**Target user:** Sinh viên đại học ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức cơ bản về báo cáo tài chính và tài chính doanh nghiệp — đã nắm khái niệm nền tảng (đọc báo cáo tài chính, các chỉ số cơ bản) nhưng còn ít kinh nghiệm áp dụng vào tình huống mở, nơi bất thường phải tự phát hiện qua tính toán, không được kể sẵn.

**User task:** Tự tính toán các chỉ số tài chính từ dữ liệu thô, so sánh với benchmark ngành, phân loại đúng loại cờ đỏ kế toán (accounting red flag) tương ứng, và xác định đơn vị/cá nhân có thẩm quyền liên quan đến bất thường từ đó hình thành kết luận có căn cứ định lượng.

**Luồng nhiệm vụ:**

```
Đọc dữ liệu tài chính thô → Tự tính chỉ số → So với benchmark
    → Phân loại cờ đỏ kế toán → Đối chiếu thẩm quyền phê duyệt
    → Hình thành kết luận có căn cứ định lượng
```

Người dùng không được cho sẵn kết luận hay con số đã qua xử lý — mọi bất thường chỉ lộ ra sau khi người dùng tự thực hiện phép tính, đúng tinh thần "chuyên gia phân tích tài chính" hơn là "thám tử đọc lời khai".

**Difficulty:** Dữ liệu thô (doanh thu, lợi nhuận, dòng tiền, khoản phải thu, cơ cấu khách hàng) không tự nói lên bất thường — người dùng phải biết chọn đúng công thức, đúng benchmark để so sánh, và phân biệt được bất thường có ý nghĩa (vượt ngưỡng trọng yếu) với biến động bình thường.

## 3. Desired User Outcome

Sau một phiên trải nghiệm sản phẩm, người dùng có thể tự đọc một bộ dữ liệu tài chính thô, tự tính được các chỉ số phân tích cơ bản (OCF/NI, DSO, mức độ tập trung khách hàng), tự so sánh với benchmark ngành để nhận diện bất thường, và phân biệt được bất thường có ý nghĩa (vượt ngưỡng trọng yếu) với biến động không đáng kể — thay vì chỉ đọc một câu chuyện và đoán theo cảm tính.

## 4. Product Statement

Một sản phẩm giúp sinh viên Tài chính, Kế toán, Ngân hàng và Kinh doanh luyện tập kỹ năng phân tích tài chính thực chiến, bằng cách đặt họ vào vai trò người điều tra một bất thường tài chính doanh nghiệp — nhưng buộc mọi kết luận phải xuất phát từ việc tự tính toán chỉ số trên dữ liệu thô, không phải từ việc đọc và suy luận thuần túy trên các tài liệu tường thuật.

## 5. Main Output

Nhóm rà lại các kết quả có thể nhìn thấy để loại bỏ container/giao diện chưa phải kết quả cuối. Bảng chẩn đoán tài chính (Financial Diagnosis Sheet) là giao diện thao tác, không phải kết quả cuối. Đồng hồ 48 giờ và danh sách nhân vật là công cụ điều hướng, không phải kết quả người dùng nhận được.

Bên trong "Báo cáo điều tra cuối" có nhiều thành phần khác nhau, cần tách theo đúng vai trò: các chỉ số người dùng tự tính (OCF/NI, DSO, % tập trung khách hàng) và kết luận người dùng chọn là **quyết định của người dùng** — đưa vào hệ thống, không phải thứ hệ thống trả về. Phần trăm điểm số và nhãn cờ đỏ được chọn là input cho quá trình so khớp, không phải bản thân output.

**Main output được chốt:**

> Kết quả đối chiếu giữa các chỉ số/kết luận người dùng tự tính và tự chọn với đáp án đúng — gồm: từng chỉ số tính đúng hay sai, cờ đỏ phân loại đúng hay sai, đơn vị/người có thẩm quyền liên quan đúng hay sai, kèm giải thích vì sao.

Đồng hồ 48 giờ, danh sách nhân vật (Follow the Money), Bảng phân quyền tài chính là supporting output và công cụ điều hướng, liệt kê chi tiết ở `docs/SOLUTION_STRUCTURE.md`, không đứng ngang hàng với main output.

Sau khi dùng sản phẩm, người dùng nhận được một bản đối chiếu cho biết mình đã tính đúng/sai ở đâu, phân loại cờ đỏ đúng/sai ra sao, và kết luận về đơn vị/người có thẩm quyền liên quan có đúng hay không — kèm giải thích. Output này giúp người dùng tự kiểm tra xem kỹ năng đọc và tính toán tài chính của mình có đủ chắc để phát hiện bất thường thật hay chưa. Hành động tiếp theo của người dùng là xem lại đúng chỉ số nào tính sai hoặc cờ đỏ nào phân loại nhầm, để hiệu chỉnh cách đọc dữ liệu cho lần phân tích sau.

## 6. Product Pattern

Pattern được chọn là **Financial Learning Game** — mô hình quyết định và hệ quả (decision-consequence loop): người dùng tự tính toán và đưa ra kết luận dựa trên dữ liệu thô, sau đó sản phẩm phản hồi lại đúng hay sai và vì sao.

Trong "The Last Heir", vòng lặp này thể hiện cụ thể: người dùng tự tính chỉ số và chọn kết luận (quyết định) → sản phẩm so khớp với đáp án đúng và trả lời đúng/sai kèm lý do (hệ quả).

**Vì sao không chọn hai pattern còn lại:**

- **Không phải Comparison Tool** (công cụ so sánh). Comparison Tool chỉ đặt các phương án có sẵn cạnh nhau để người dùng nhìn và tự so sánh. Sản phẩm của nhóm không dừng ở việc "đặt cạnh nhau để xem" mà người dùng phải tự tính ra chỉ số trước, sản phẩm mới chấm đúng/sai.
- **Không phải Calculator** (công cụ tính toán). Calculator nhận input rồi trả ra một con số duy nhất theo công thức cố định. Sản phẩm của nhóm không chỉ tính ra 1 chỉ số mà nó đánh giá cả một chuỗi lựa chọn (chỉ số nào được tính, cờ đỏ nào được chọn, kết luận nào được đưa ra) rồi giải thích lý do đúng/sai.

Việc chọn pattern này được suy ra sau khi đã xác định main output (mục 5) và loại quy trình cần có — tính toán chỉ số, so benchmark, phân loại cờ đỏ, đối chiếu thẩm quyền (chi tiết ở `docs/SOLUTION_STRUCTURE.md` mục 4) — không phải chọn trước rồi mới đi tìm output cho khớp.

## 7. Feasibility and Open Questions

Sản phẩm khả thi trong khuôn khổ môn học nếu giới hạn ở một công ty (Aster Holdings, công ty con của Aurora Group), ba bất thường tài chính độc lập kèm một bất thường nhiễu (bẫy ngưỡng trọng yếu), và năm nhân vật đóng vai trò vùng dữ liệu điều hướng — không cần hệ thống tài khoản hay lưu tiến trình.

**Open questions còn lại:**

1. Mức độ phức tạp của công thức tài chính (OCF/NI, DSO, % tập trung khách hàng) đã phù hợp với target user hay cần đơn giản hóa thêm.
2. Quy đổi thời gian thật cho đồng hồ 48 giờ ảo (đề xuất 12–15 phút) đã tạo đủ áp lực mà không gây bực bội hay chưa — cần thử nghiệm với người dùng thật.
3. Danh sách nhãn cờ đỏ nhiễu (2 nhãn không áp dụng case này) có đủ khó để tránh đoán mò theo kiểu loại trừ cơ học hay không.
4. Cơ chế "Ghi chú ẩn của David" (thưởng có điều kiện theo thứ tự hành động) có được người chơi nhận ra và tạo đúng hiệu ứng "aha" như kỳ vọng hay không — cần kiểm chứng ở Tuần 3.
