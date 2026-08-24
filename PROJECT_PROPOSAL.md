# The Last Heir — Project Proposal (Tuần 2)

> Học phần: **NHA408E** · Nhóm: **G08**

## 1. Problem Direction

Nhóm tiếp tục theo **Đề xuất 1 — Tích hợp thông tin**, đã được duyệt ở Checkpoint Tuần 1: sinh viên khối ngành Tài chính, Kế toán, Ngân hàng, Kinh doanh gặp khó khi đánh giá một tình huống tài chính doanh nghiệp phức tạp, vì thông tin nằm rải rác ở nhiều nơi — báo cáo tài chính, hồ sơ giao dịch, tài liệu nội bộ.

> Sinh viên có kiến thức tài chính cơ bản gặp khó khi tìm ra nguyên nhân thật của một bất thường tài chính doanh nghiệp. Bằng chứng thật nằm trong số liệu (báo cáo, chỉ số tài chính), nhưng người học dễ bị thông tin không phải số liệu (hồ sơ nhân sự, ghi chú, tin đồn) làm phân tâm — khiến việc tách bạch bằng chứng thật với thông tin chỉ mang tính dẫn dắt trở nên khó khăn.

**Thay đổi so với Tuần 1:** Ban đầu nhóm định cho người chơi đánh giá độ tin cậy của nguồn tin (email, hồ sơ, tin đồn). Sau khi bàn lại, nhóm nhận ra hướng này dễ biến sản phẩm thành một trò trinh thám thuần túy — đoán qua lời kể — không đo đúng năng lực tài chính. Nhóm thu hẹp lại: cái khó thật sự không phải là phân biệt tin thật/giả, mà là **tự đọc số liệu thô, tự tính chỉ số, và tự phát hiện bất thường kế toán và xác minh các nguồn thông tin** từ chính con số và các tài liệu.

## 2. Target User and User Task

**Target user:** Sinh viên đại học khối ngành Tài chính, Kế toán, Ngân hàng, Kinh doanh — đã biết đọc báo cáo tài chính và các chỉ số cơ bản, nhưng chưa quen áp dụng vào tình huống mở, nơi bất thường không được chỉ sẵn mà phải tự tính mới thấy.

**User task:** Tự tính các chỉ số tài chính từ số liệu thô, so với chuẩn ngành (benchmark), chọn đúng loại cờ đỏ kế toán tương ứng, và xác định ai có thẩm quyền liên quan từ đó đưa ra kết luận về con số và tính liên quan và chính xác của các tài liệu để làm căn cứ.

**Luồng nhiệm vụ:**

```
Đọc số liệu thô → Tự tính chỉ số → So với chuẩn ngành
    → Chọn đúng cờ đỏ kế toán → Đối chiếu ai có thẩm quyền (kiểm tra tài liệu)
    → Đưa ra kết luận có căn cứ
```

Không ai đưa sẵn kết luận hay số liệu đã xử lý cho người chơi. Mọi bất thường chỉ hiện ra sau khi người chơi tự tính — đúng trải nghiệm của một người phân tích tài chính thật, không phải một người đọc truyện rồi đoán.

**Difficulty:** Số liệu thô không tự nói lên điều gì sai. Người chơi phải biết chọn đúng công thức, đúng chuẩn so sánh, và phân biệt được biến động đáng chú ý với dao động bình thường. 

## 3. Desired User Outcome

Sau một lượt chơi, người chơi có thể: tự đọc một bộ số liệu tài chính thô và tính ra các chỉ số cơ bản (tỷ lệ dòng tiền/lợi nhuận, số ngày thu tiền, mức tập trung chi phí vào một nhà cung cấp, cấu trúc thanh toán); tự so với chuẩn ngành để tìm bất thường; phân biệt được biến động đáng chú ý với biến động bình thường; và phân biệt đúng đâu là dòng tiền vào (doanh thu từ khách hàng) với đâu là dòng tiền ra (chi phí trả nhà cung cấp) — thay vì chỉ đọc một câu chuyện rồi đoán theo cảm tính.

## 4. Product Statement

Một sản phẩm giúp sinh viên khối ngành Tài chính, Kế toán, Ngân hàng, Kinh doanh luyện kỹ năng phân tích tài chính thật, bằng cách đặt họ vào vai người điều tra một bất thường tài chính doanh nghiệp. Mọi kết luận đưa ra đều phải bắt nguồn từ số liệu và phép tính cụ thể — không được suy đoán từ việc chỉ đọc tài liệu kể chuyện.

## 5. Main Output

Nhóm rà lại các kết quả người chơi nhìn thấy, để tách rõ cái nào là công cụ thao tác và cái nào mới là kết quả thật:

- **Không phải Main Output:** Bảng chẩn đoán tài chính (chỉ là giao diện nhập liệu), Đồng hồ 48 giờ và Danh sách nhân vật (chỉ là công cụ điều hướng), các chỉ số người chơi tự nhập (đây là dữ liệu người chơi đưa vào, không phải kết quả nhận lại).

**Main output được chốt:**

> Bản đối chiếu giữa các chỉ số và kết luận người chơi tự đưa ra với đáp án đúng — gồm: từng chỉ số tính đúng hay sai, cờ đỏ chọn đúng hay sai, người có thẩm quyền liên quan đúng hay sai, kèm giải thích vì sao.

Sau khi nộp báo cáo, người chơi nhận lại đúng bản đối chiếu này. Nó giúp người chơi biết mình đã tính sai ở đâu hoặc hiểu nhầm chỉ số nào — kể cả việc nhầm chiều dòng tiền (coi khoản chi cho nhà cung cấp là doanh thu) — để lần phân tích sau làm tốt hơn.

## 6. Product Pattern

Pattern được chọn: **Financial Learning Game** — mô hình quyết định và hệ quả. Người chơi tự tính và tự đưa ra kết luận (quyết định), hệ thống đối chiếu với đáp án đúng và giải thích vì sao (hệ quả).

**Vì sao không chọn 2 pattern còn lại:**

- **Không phải Comparison Tool.** Comparison Tool chỉ đặt các lựa chọn có sẵn cạnh nhau để người chơi tự nhìn và so sánh. Sản phẩm của nhóm khác ở chỗ: người chơi phải tự tính ra số liệu trước, hệ thống mới chấm đúng/sai.
- **Không phải Calculator.** Calculator chỉ nhận số vào và trả ra 1 kết quả duy nhất theo công thức có sẵn. Sản phẩm của nhóm đánh giá cả một chuỗi việc người chơi làm — tính đúng chỉ số nào, chọn đúng cờ đỏ nào, kết luận đúng ai — rồi giải thích vì sao đúng hoặc sai.

## 7. Feasibility and Open Questions

Sản phẩm khả thi trong khuôn khổ môn học nếu giới hạn ở một công ty duy nhất (Aster Holdings, công ty con của Aurora Group), 6 dấu hiệu bất thường tài chính (đã rút từ 7 xuống 6 sau khi nhóm loại bỏ 1 chỉ số dựng trên nhầm lẫn bản chất giao dịch — xem chi tiết ở `SOLUTION_STRUCTURE.md`), 1 bẫy thông tin không đáng chú ý, và 5 nhân vật — mỗi người giữ 1 phần số liệu, không cần tài khoản hay lưu tiến trình nhiều phiên.

**Open questions còn lại:**

1. 6 dấu hiệu bất thường có phải quá nhiều với thời lượng chơi 1 lượt hay không — cần thử nghiệm để biết thời gian chơi thật sự mất bao lâu.
2. Đồng hồ 48 giờ ảo quy đổi 12–15 phút thật đã đủ áp lực mà không gây bực bội chưa — cần người chơi thử mới biết.
3. Danh sách cờ đỏ có 2 lựa chọn gây nhiễu — đã đủ khó để tránh việc đoán mò theo kiểu loại trừ máy móc chưa.
4. Việc chia đều số liệu cho cả 5 nhân vật có khiến người chơi mất phương hướng, không biết nên mở ai trước hay không — cần kiểm tra bằng cách cho vài người chơi thử.
5. Bẫy nhầm lẫn chiều dòng tiền (chi phí trả Northstar bị hiểu nhầm thành doanh thu) có thực sự tạo được giá trị học thuật, hay chỉ gây rối cho người chơi — cần quan sát phản ứng người chơi thử để biết rõ.

