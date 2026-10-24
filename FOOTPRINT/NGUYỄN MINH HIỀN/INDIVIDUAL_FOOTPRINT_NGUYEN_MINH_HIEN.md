# INDIVIDUAL FOOTPRINT

**Họ và tên:** **Nguyễn Minh Hiền**

**Mã sinh viên:** **2412380018**

**Vai trò:** **Gameplay & Logic** - logic điều tra, quy tắc kiểm soát và cơ chế chơi (giai đoạn nền tảng)

**Dự án:** The Last Heir - NHA408E - Nhóm G08

## 1. Vai trò trong dự án

### 1.1 Phạm vi phụ trách

Trong The Last Heir, em phụ trách Gameplay & Logic ở giai đoạn nền tảng, từ Week 1 đến giữa kỳ và trong Bản cũ sau giữa kỳ. Em xây dựng khung logic dẫn người chơi từ tín hiệu tài chính đến kết luận: nhiệm vụ ở từng bước, quy tắc kiểm soát, tiêu chuẩn bằng chứng và cách ngăn việc đoán mò.

### 1.2 Vị trí trong tiến trình dự án

| **Giai đoạn**        | **Nội dung chính**                                                                                                                        | **Phần em thực hiện**                                                                                                                          |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Week 1 – giữa kỳ     | Thiết kế 6 tab; sàng lọc tài chính và điều tra kiểm soát                                                                                  | User Task Flow; logic điều tra; trạng thái bằng chứng; quy tắc phê duyệt, tuyến thay thế và cộng dồn; tiếp tục có hỗ trợ; công thức điểm 6 tab |
| Bản cũ sau giữa kỳ   | Nhóm chia hai cụm để dựng nguyên mẫu HTML                                                                                                 | Cùng bạn Ngọc làm Tab 4–5: kiểm soát và phiên chất vấn                                                                                         |
| Xây lại và bản final | Bạn Phương xây lại nội dung, trạng thái bằng chứng và cách tính điểm qua bản nháp 1, 2 và Bản chốt; bạn Khuê phát triển bản game hiện tại | Em không trực tiếp thực hiện giai đoạn này                                                                                                     |

Các cơ chế của bản game hiện tại (45 mã câu, bốn nhóm điểm 35/30/25/10, tạm dừng và gợi ý) do bạn Phương phát triển tiếp. Đóng góp của em là các nguyên tắc logic làm nền cho những cơ chế đó.

## 2. Dấu ấn cá nhân

Em đề xuất hai nguyên tắc từ giai đoạn đầu và cả hai được giữ trong bản final:

1.  **Nguyên tắc chống đoán.** Đáp án đúng nhưng bằng chứng yếu hoặc không liên quan không được trọn điểm; chọn tất cả bằng chứng cũng không tự động được công nhận. Ở thiết kế giữa kỳ, em phân loại bằng chứng thành bắt buộc, bổ sung, không liên quan và mâu thuẫn, đồng thời dùng công thức coverage × relevance.

2.  **Nguyên tắc cộng dồn theo giao dịch kinh tế.** Các khoản cùng hợp đồng và mục đích phải được xét theo tổng giá trị để xác định cấp phê duyệt. Mỗi khoản có thể dưới ngưỡng, nhưng tổng giá trị vẫn có thể vượt cấp.

Hai nguyên tắc nhấn mạnh rằng internal control có thể thất bại khi không xét tổng giá trị, và kết luận chỉ có giá trị khi có bằng chứng phù hợp. Dù bạn Phương xây lại bản final bằng cơ chế khác, hai nguyên tắc vẫn được giữ: chỉ khóa nhận định khi chọn đúng bộ bằng chứng và xét tổng giá trị theo hợp đồng.

## 3. Những việc em đã thực sự làm

| **Thời điểm** | **Công việc**                                                                                                                                                             | **Đầu ra**                                           |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Week 1        | Xây dựng User Task Flow từ tín hiệu tài chính đến kết luận cuối                                                                                                           | Phần User Task trong README                          |
| Week 2        | Thiết kế logic điều tra xuyên suốt và các điểm quyết định chính                                                                                                           | Solution Structure                                   |
| Week 3        | Xây quy tắc sàng lọc, phê duyệt, tuyến thay thế, cộng dồn và kiểm tra                                                                                                     | Data Flow, Sources                                   |
| Week 3–4      | Thiết kế phân loại bằng chứng, công thức điểm 6 tab, nguyên tắc chống đoán và tách kết luận Management Override khỏi điểm chơi                                            | Data Flow, Gameplay Mechanics                        |
| Week 4        | Thiết kế phân loại bằng chứng, công thức chấm thời 6 tab, nguyên tắc chống đoán và quy tắc tách kết luận Management Override khỏi điểm chơi                               | Gameplay Mechanics, Scoring and Sample Test          |
| Week 5        | Viết tình huống kiểm thử: ngưỡng phê duyệt, đoán mò, chọn tất cả và chọn bằng chứng mâu thuẫn                                                                             | Feature Scope, User Flow                             |
| Week 4-5      | Cùng bạn Ngọc làm Tab 4–5; em phụ trách luồng phê duyệt kỳ vọng/thực tế, tuyến thay thế, cộng dồn và chẩn đoán thất bại kiểm soát                                         | Scoring and Sample Test, bảng kiểm thử Week 6 bản cũ |
| Bản cũ        | Cùng bạn Ngọc làm Tab 4-5. Trong phần làm chung, em phụ trách chính luồng phê duyệt kỳ vọng và thực tế, kiểm tra tuyến thay thế, cộng dồn và chẩn đoán thất bại kiểm soát | Nguyên mẫu 02_OLD_TABS_4_5.html                      |

## 4. Phần đóng góp trong game và repo

### 4.1 Logic điều tra và trạng thái bằng chứng

Em xây chuỗi điều tra theo các bước: sàng lọc tài chính → khoanh vùng khoản mục → truy vết giao dịch → điều tra kiểm soát → quy trách nhiệm. Bằng chứng ở mỗi bước có trạng thái riêng:

| **Trạng thái** | **Ý nghĩa**                                                 |
|----------------|-------------------------------------------------------------|
| unreviewed     | Người chơi chưa mở hồ sơ                                    |
| reviewed       | Đã đọc nhưng chưa dùng cho nhận định nào                    |
| confirmed      | Đã được dùng đúng để xác lập một nhận định                  |
| unresolved     | Nhận định chưa được xác lập                                 |
| assisted       | Người chơi được hỗ trợ để đi tiếp, không tính là tự xác lập |
| contradicted   | Bằng chứng mâu thuẫn với nhận định đang chọn                |

Thay vì kết thúc game khi người chơi trả lời sai, em thiết kế cơ chế tiếp tục có hỗ trợ. Người chơi nhận bộ dữ liệu tối thiểu để đi tiếp; nút này được đánh dấu “được hỗ trợ”, không phải “đã xác lập”. Nhờ đó, mạch điều tra được giữ nguyên và kết quả vẫn phản ánh phần người chơi tự làm.

### 4.2 Quy tắc kiểm soát

Em xây dựng ba nhóm quy tắc kiểm soát:

| **Quy tắc**                      | **Nội dung**                                                                                                                                 |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Chính sách phê duyệt theo ngưỡng | Đến 0,5 triệu USD: Trưởng bộ phận; trên 0,5 đến 1,0 triệu: Trưởng bộ phận + Quản lý Tài chính; trên 1,0 triệu: Giám đốc Tài chính + Hội đồng |
| Tuyến phê duyệt thay thế         | Chỉ hợp lệ khi có mã lý do hợp lệ, giải trình bằng văn bản và rà soát lại của Quản lý Tài chính                                              |
| Cộng dồn theo giao dịch kinh tế  | Các khoản cùng hợp đồng và cùng mục đích được xét theo tổng giá trị khi xác định cấp phê duyệt                                               |

Với giao dịch Northstar, các khoản 0,9 / 0,9 / 0,8 triệu đều thuộc cấp giữa nếu xét riêng, nhưng tổng 2,6 triệu cần Giám đốc Tài chính và Hội đồng phê duyệt. Đây là điểm kiểm soát nội bộ người chơi cần tự phát hiện.

### 4.3 Công thức điểm và nguyên tắc chống đoán (thời 6 tab)

Trong thiết kế Week 4, điểm được chia cho sáu tab (10 / 10 / 10 / 30 / 25 / 15). Với bước chọn bằng chứng, em dùng công thức:

- **Coverage** = số nhóm bằng chứng bắt buộc đã đáp ứng / tổng số nhóm bắt buộc.

- **Relevance** = số bằng chứng liên quan đã chọn / tổng số bằng chứng đã chọn.

- **Evidence quality** = 0,7 x coverage + 0,3 x relevance, mỗi bằng chứng mâu thuẫn bị trừ 25% điểm tối đa của phần đó.

Công thức khiến người chơi mất nhiều điểm khi thiếu bằng chứng bắt buộc, giảm điểm liên quan nếu chọn tất cả và bị phạt nặng khi chọn bằng chứng mâu thuẫn. Đáp án đúng nhưng thiếu bằng chứng phù hợp vẫn có thể được điểm nhận định, song điểm bằng chứng thấp và bước điều tra có thể chưa được xác lập.

### 4.4 Tab 4–5 trong Bản cũ (cùng bạn Ngọc)

Sau giữa kỳ, em và bạn Ngọc xây lại Tab 4–5 thành nguyên mẫu HTML. Em phụ trách chính Phần 4:

| **Bước**                     | **Người chơi làm gì**                                                                                                    |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Tái dựng hệ thống kiểm soát  | Đọc chính sách, danh bạ nhân sự và nhật ký; dựng luồng phê duyệt kỳ vọng rồi đối chiếu với luồng thực tế                 |
| Luồng thực tế khác ở đâu     | Xác định bước nào bị thay thế hoặc thiếu người duyệt độc lập                                                             |
| Kiểm tra ngoại lệ            | Đánh giá tuyến phê duyệt thay thế có đáp ứng quy định không                                                              |
| Đối chiếu cộng dồn           | Chọn các khoản thuộc cùng giao dịch, loại một khoản gây nhiễu thuộc hợp đồng khác, xác định tổng và cấp phê duyệt cần có |
| Đề xuất sửa hệ thống         | Chọn cách Hội đồng nên sửa quy trình                                                                                     |
| Chẩn đoán thất bại kiểm soát | Chọn mô hình giải thích phù hợp nhất với toàn bộ chuỗi đã xác lập                                                        |

Phần 5 (phiên chất vấn và phân định trách nhiệm) dựa trên hồ sơ, nhân vật do bạn Ngọc xây dựng. Sau đó, bạn Phương nhận thấy hai cụm của Bản cũ chưa kết nối tốt với Tab 1–3 nên xây lại nội dung cả năm tab.

### 4.5 Phần được kế thừa trong bản final

| **Yếu tố em xây**                               | **Trong bản final**                                 | **Người phát triển tiếp** |
|-------------------------------------------------|-----------------------------------------------------|---------------------------|
| Nguyên tắc chống đoán                           | Giữ: nhận định chỉ khóa khi chọn đúng bộ bằng chứng | Bạn Phương                |
| Quy tắc cộng dồn theo hợp đồng                  | Giữ: chính sách thẩm quyền yêu cầu xét tổng giá trị | Bạn Phương                |
| Ngưỡng phê duyệt ba cấp                         | Giữ cấu trúc ba cấp                                 | Bạn Phương                |
| Mô hình trạng thái bằng chứng                   | Phát triển thành đã xem / đang dùng / đã xác lập    | Bạn Phương                |
| Công thức độ bao phủ × độ liên quan, điểm 6 tab | Không giữ; thay bằng bốn nhóm điểm và 45 mã câu     | Bạn Phương                |
| Cơ chế tiếp tục có hỗ trợ                       | Không giữ nguyên; thay bằng tạm dừng và gợi ý       | Bạn Phương                |

## 5. Bằng chứng đóng góp

### 5.1 Bản cũ Tab 4 - luồng phê duyệt kỳ vọng và thực tế

<img src="media/INDIVIDUAL_FOOTPRINT_NGUYEN_MINH_HIEN/media/image1.png" title="BẢN CŨ: luồng kỳ vọng và thực tế" style="width:4.16667in;height:2.60417in" alt="BẢN CŨ: luồng kỳ vọng và thực tế" />

*Hình: Bản cũ: luồng kỳ vọng và thực tế*

### 5.2 Bản cũ Tab 4 — cộng dồn giao dịch

<img src="media/INDIVIDUAL_FOOTPRINT_NGUYEN_MINH_HIEN/media/image2.png" title="BẢN CŨ: cộng dồn" style="width:4.16667in;height:2.60417in" alt="BẢN CŨ: cộng dồn" />

*Hình: Bản cũ: cộng dồn*

### 5.3 Bản cũ Tab 4 — chẩn đoán thất bại kiểm soát

<img src="media/INDIVIDUAL_FOOTPRINT_NGUYEN_MINH_HIEN/media/image3.png" title="BẢN CŨ: chẩn đoán kiểm soát" style="width:4.16667in;height:2.60417in" alt="BẢN CŨ: chẩn đoán kiểm soát" />

*Hình: Bản cũ: chẩn đoán kiểm soát*

### 5.4 Ghi nhận trong repo

Các tài liệu phiên bản 28/09 có trong lịch sử commit.

| **Nội dung**                                                                                             | **Link**                                                                                                                                                                                               |
|----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Phần việc giữa kỳ: trạng thái bằng chứng, tiếp tục có hỗ trợ, phân loại bằng chứng, cộng dồn, chống đoán | [MIDTERM VERIFICATION.md, dòng 122](https://github.com/FTU-Legacy-63/G08/blob/main/MIDTERM%20VERIFICATION.md?plain=1#L122)                                                                             |
| Đóng góp Week 1–5                                                                                        | [MEMBER CONTRIBUTION.md, bản 28/09, dòng 46–58](https://github.com/FTU-Legacy-63/G08/blob/7a9bbad74e0bb14c0a2349e560f13789cba42a9e/MEMBER%20CONTRIBUTION.md?plain=1#L46-L58)                           |
| Cơ chế chơi 6 tab, tuyến thay thế, cộng dồn                                                              | [GAMEPLAY_MECHANICS_FINAL.md, bản 28/09](https://github.com/FTU-Legacy-63/G08/blob/7a9bbad74e0bb14c0a2349e560f13789cba42a9e/WEEK%204/GAMEPLAY_MECHANICS_FINAL.md)                                      |
| Công thức điểm, độ bao phủ × độ liên quan, nguyên tắc chống đoán                                         | [SCORING_AND_SAMPLE_TEST_FINAL.md, bản 28/09, mục 4–5](https://github.com/FTU-Legacy-63/G08/blob/7a9bbad74e0bb14c0a2349e560f13789cba42a9e/WEEK%204/SCORING_AND_SAMPLE_TEST_FINAL.md?plain=1#L103-L209) |
| Quy tắc và giả định do em phụ trách                                                                      | [SOURCES_FINAL.md, bản 28/09, dòng 32–56](https://github.com/FTU-Legacy-63/G08/blob/7a9bbad74e0bb14c0a2349e560f13789cba42a9e/WEEK%203/SOURCES_FINAL.md?plain=1#L32-L56)                                |
| Phân công Week 2                                                                                         | [SOLUTION STRUCTURE.md, bản 28/09, dòng 545](https://github.com/FTU-Legacy-63/G08/blob/7a9bbad74e0bb14c0a2349e560f13789cba42a9e/WEEK%202/SOLUTION%20STRUCTURE.md?plain=1#L545)                         |
| Tổng hợp ý tưởng logic và gameplay của em ở bản game cũ | [Google Docs — THE LAST HEIR · LOGIC AND GAMEPLAY](https://docs.google.com/document/d/1Xpr57YuNSVKizzpJ-4NIGorpYtfk2UOI5ENcraVSlNc/edit?usp=sharing) |
| Nguyên mẫu Bản cũ Tab 4–5                                                                                | [PHUONG_MINH_CHUNG_TONG_HOP.html — Tab 4–5](https://github.com/FTU-Legacy-63/G08/blob/main/PHUONG_MINH_CHUNG_TONG_HOP.html#old45)                                                                      |

## 6. Kết nối với sản phẩm cuối

Phần em làm là đầu vào logic cho giai đoạn xây lại. Bạn Phương kết hợp nền tảng logic của em, dữ liệu của bạn Dũng và tình huống, hồ sơ của bạn Ngọc để xây lại năm tab; bạn Khuê sau đó phát triển thành bản game hiện tại.

Bản final dùng cơ chế của bạn Phương: trạng thái đã xem / đang dùng / đã xác lập thay mô hình của em, và bốn nhóm điểm cùng 45 mã câu thay công thức độ bao phủ × độ liên quan. Các nguyên tắc còn lại từ phần em làm là yêu cầu bằng chứng cho nhận định, cộng dồn giá trị theo hợp đồng và dùng ngưỡng phê duyệt ba cấp.

## 7. Tích hợp, kiểm tra và sửa đổi

- **Kết nối quy tắc với dữ liệu và hồ sơ (Week 3–4).** Em đối chiếu ngưỡng phê duyệt với các khoản Northstar của bạn Dũng, đồng thời so sánh vai trò bắt buộc với người thực hiện trong hồ sơ của bạn Ngọc để xác định cấp phê duyệt bị bỏ qua.

- **Xây tình huống kiểm thử.** Em viết các trường hợp biên và không hợp lệ: giá trị đúng 0,5 và 1,0 triệu, vừa vượt 1,0 triệu, đoán đúng nhưng thiếu bằng chứng, chọn tất cả bằng chứng và chọn bằng chứng mâu thuẫn.

- **Thay “game over” bằng cơ chế tiếp tục có hỗ trợ.** Người chơi trả lời sai vẫn đi tiếp, nhưng bước đó không được tính là đã xác lập.

- **Bản cũ.** Em và bạn Ngọc chuyển phần kiểm soát từ chọn đáp án sang dựng luồng, đối chiếu và chẩn đoán.

- **Sau Bản cũ.** Bạn Phương xây lại toàn tuyến vì hai cụm còn rời rạc; công thức coverage x relevance được thay bằng cơ chế mới.

## 8. Hạn chế còn lại

- **Hạn chế lớn nhất là cơ chế khó giải thích và triển khai**. Coverage × relevance hợp lý về ý tưởng nhưng khó giải thích vì sao người chơi mất điểm, nên bản final thay bằng cách tính đơn giản hơn.

- **Tab 4–5 của Bản cũ cũng chưa kết nối chặt với đầu ra Tab 1–3 nên cần xây lại.** Nguyên tắc chống đoán chưa được thử với người học thật. Nếu tiếp tục, em sẽ kiểm thử với người ngoài nhóm để xem họ có hiểu lý do bị chặn hay không.

## 9. Điều em học được

- **Luật game phải giải thích được**. Công thức dù hợp lý vẫn không hiệu quả nếu người chơi không hiểu vì sao được hoặc mất điểm. Vì vậy, khi thiết kế quy tắc, em cần xác định trước phản hồi dành cho người chơi.

- **Trọng số điểm thể hiện mục tiêu học tập.** Khi chia điểm, nhóm cần xác định muốn người chơi tiến bộ về tính toán hay phán đoán kiểm soát. Việc dành 30 điểm cho phần kiểm soát trong thiết kế sáu tab là một lựa chọn như vậy.

- **Luật phải gắn với nội dung và giao diện.** Cơ chế của em chỉ phát huy tác dụng khi bạn Phương xây lại cùng nội dung các tab và bạn Khuê triển khai thành thao tác cụ thể. Quy tắc đúng nhưng không gắn với hồ sơ và màn hình sẽ khó tạo tác động với người chơi.

## 10. Khó khăn và cách xử lý

- **Cần cân bằng giữa chống đoán và trải nghiệm người chơi.** Khóa quá chặt khiến người chơi mắc kẹt; quá lỏng thì dễ đoán. Em chọn cho phép đi tiếp có hỗ trợ khi trả lời sai nhưng không tính bước đó là đã xác lập, để người chơi hoàn thành câu chuyện mà kết quả vẫn phản ánh đúng năng lực.

- **Thiết kế thay đổi giữa chừng.** Khi nhóm bỏ hướng Beneish và chuyển từ sáu tab sang năm chương, nhiều quy tắc không còn được dùng nguyên văn. Em giữ lại các nguyên tắc cốt lõi: chống đoán, cộng dồn giao dịch và ngưỡng phê duyệt.

**11. Lời nhắn cho khóa sau**

Người chơi cảm nhận luật qua lúc bị chặn, được gợi ý hoặc thấy điểm, chứ không đọc toàn bộ bộ luật. Trước khi đặt công thức, hãy hỏi: “Mình muốn người chơi dừng lại và suy nghĩ điều gì?” Luật tốt không nhất thiết phức tạp; ngay cả người thua cũng cần thấy công bằng. Hãy thử chơi như người đoán mò: nếu có thể qua chương mà không đọc hồ sơ, luật cần chặt hơn.
