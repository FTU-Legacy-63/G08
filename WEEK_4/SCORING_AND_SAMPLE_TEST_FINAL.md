# WEEK 4 — SCORING AND SAMPLE LOGIC TESTS

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 4

## 1. Purpose and Scoring Principles

Điểm đánh giá quá trình người học đi đến kết luận và cách sử dụng hỗ trợ. Điểm không quyết định sự thật của tình huống, không đo trực tiếp hiệu quả học tập và không phải thang đo năng lực đã được kiểm định.

| Nhóm điểm | Tối đa | Nội dung phản ánh |
|---|---:|---|
| Chất lượng điều tra | 35 | Mức làm chủ các điểm kiểm tra đã tự giải |
| Kỷ luật lập luận | 30 | Lỗi lặp sau lần đầu và tỷ lệ tự giải |
| Quản trị | 25 | Hồ sơ trách nhiệm tự giải và ba quyết định cuối |
| Mức tự thực hiện | 10 | Số gợi ý, lời giải chương và lời giải từ nội dung con |
| **Tổng** | **100** | |

Năm chương lần lượt có 9, 6, 2, 17 và 11 điểm kiểm tra, tổng 45. Mỗi chương có cùng mức tối đa 7 điểm điều tra và 6 điểm kỷ luật, dù số câu khác nhau.

## 2. Checkpoint Outcomes

| Trạng thái | Điều kiện và ảnh hưởng |
|---|---|
| Tự giải sau 0–1 lỗi | Mức làm chủ đầy đủ |
| Tự giải sau 2 lỗi | Một nửa mức làm chủ |
| Tự giải sau từ 3 lỗi | Vẫn ghi tự giải, không còn điểm làm chủ |
| Đã xem lời giải | Không ghi là tự giải; không có đóng góp làm chủ |
| Lời khai hết giờ | Không có điểm cho phần chưa hoàn thành; phần đã chấp nhận giữ kết quả |
| Chương chưa hoàn thành | Chưa nhận điểm điều tra và kỷ luật của chương |

`wrong` là số lỗi mới đã ghi theo cơ chế mã chữ ký. Gửi lại một lỗi đã nhận diện không tự làm tăng số sai; khi không có mã chữ ký, mỗi lần gửi sai có thể được tính mới. Mẫu chưa đủ đầu vào không được chấm như đáp án hoàn chỉnh.

## 3. Exact Scoring Definitions

### 3.1 Investigation and Discipline

Với một chương có `N` điểm kiểm tra, `F` điểm tự giải đầy đủ, `H` điểm tự giải một nửa và `A` điểm tự giải thành công, kể cả sau nhiều lỗi:

```text
R = sum(max(0, wrong - 1))
I = 7 * (F + H / 2) / N
D = max(0, 6 - 1.5 * R) * A / N
```

Hai công thức chỉ được tính khi chương hoàn thành và không xem lời giải toàn chương; trường hợp khác nhận 0 cho hai nhóm của chương đó. Tổng điều tra và tổng kỷ luật được làm tròn một chữ số thập phân sau khi cộng các chương.

Một câu có hai lỗi làm tăng `R` thêm 1. Mức giảm kỷ luật còn phụ thuộc tỷ lệ tự giải và mức sàn 0 của chương, nên không mô tả mọi lỗi lặp đều làm tổng điểm hiển thị giảm đúng 1,5.

### 3.2 Governance and Independence

```text
G = round1(7 * responsibilityFilesSelfSolved / 4 + sum(decisionPoints))
decisionPoints = balanced: 6; hesitant: 2; aggressive: 0
S = max(0, 10 - Math.round(0.7 * hints + 2 * revealTabs + childReveal))
Total = round1(Investigation + Discipline + Governance + S)
```

Hồ sơ trách nhiệm được tính khi tự giải, chưa xem lời giải của câu hoặc cả Chương V và không bị tước điểm. Gợi ý có `hintKey` được ghi một lần cho cùng khóa; sự kiện không có khóa vẫn được cộng theo lần nhận.

Mức trừ tự thực hiện được làm tròn sau khi cộng. Một gợi ý không đồng nghĩa điểm hiển thị luôn giảm đúng 0,7; hai gợi ý có mức trừ 1,4 được làm tròn thành 1. Các hướng dẫn thao tác không gửi sự kiện gợi ý không làm giảm điểm.

## 4. Error Handling and Evidence Quality

Từ lỗi mới thứ hai, câu tạm dừng đến khi mở lại hồ sơ hoặc chờ 15 giây. Lần thứ ba mở gợi ý. Đã xem hồ sơ, đang chọn dữ kiện và đã xác lập là các trạng thái khác nhau.

| Trường hợp | Cách xử lý |
|---|---|
| Đầu vào chưa đủ | Chưa chấm như câu hoàn chỉnh |
| Có lỗi vai trò hoặc nhận định mới | Ghi lỗi theo cơ chế câu hỏi |
| Cùng lỗi đã ghi | Không tự tăng nếu không có phần sai mới theo mã chữ ký |
| Chương III chọn đủ NST-01 | Xác lập ranh giới và tổng 2,6 |
| Chương V chọn tập dư | Không được chấp nhận chỉ vì chứa đủ hồ sơ đúng |
| Dữ kiện không dùng | Không tự bị coi là bằng chứng sai |

Bản hiện tại không tính điểm riêng bằng công thức độ bao phủ nhân mức liên quan. Chất lượng bằng chứng được thể hiện qua điều kiện chấp nhận của từng bước.

Cơ chế này hạn chế việc thử nhiều lựa chọn nhưng không chứng minh người học hoàn toàn không thể đoán đúng. Với câu có ba phương án và thử ngẫu nhiên không lặp, số lần sai trung bình trước khi đúng là 1; lần sai đầu chưa làm giảm mức làm chủ. Vì vậy không dùng điểm tối đa như bằng chứng duy nhất rằng người học đã suy luận đúng.

## 5. Endings and Trait Priority

Điều kiện kết thúc được xét theo đúng thứ tự dưới đây. Các mã `aggressive`, `hesitant` và `balanced` lần lượt đại diện lựa chọn vội vàng, do dự và cân bằng.

| Thứ tự | Điều kiện | Mã và kết quả |
|---|---|---|
| 1 | Ít nhất 2 vội vàng, hoặc ít nhất 1 vội vàng và kỷ luật ≤20 | `reckless`: hoãn kế nhiệm do xử lý vội vàng |
| 2 | Ít nhất 2 do dự, sau khi không thuộc điều kiện 1 | `hesitant`: hoãn kế nhiệm do thiếu quyết đoán |
| 3 | 3 cân bằng, kỷ luật ≥24, tự thực hiện ≥5, tổng ≥80 | `successor`: chấp thuận kế nhiệm |
| 4 | Các trường hợp còn lại | `conditional`: kế nhiệm có giám sát |

Danh hiệu cũng có thứ tự ưu tiên: kỷ luật từ 28; nếu chưa đạt, tự thực hiện từ 9; tiếp đến đã xem lời giải ít nhất hai chương; các trường hợp còn lại ghi nhận học từ sai sót. Danh hiệu và kết thúc không thay kết luận kiểm soát hoặc gian lận.

`calculate()` trực tiếp yêu cầu ba quyết định hợp lệ, không tự kiểm tra đủ năm chương như điều kiện bổ sung. Luồng giao diện thông thường kiểm soát tiến trình trước khi đưa người học tới quyết định cuối.

## 6. Explainable Outputs

| Chặng | Kết quả, nguồn và giới hạn cần giải thích |
|---|---|
| Doanh thu | Tăng 25,0%, có cầu nối 20,4 và 9,6; số tổng hợp chưa xác minh từng giao dịch |
| Tư vấn | Cơ sở 1,6, thực tế 4,2, còn 2,6; bối cảnh không thay giải trình định lượng |
| Giao dịch | Ba khoản cùng NST-01 / ROP-25 tạo 2,6; NS-119 ngoài ranh giới |
| Ngoại lệ | Sự cố thật không thay quyết định của đúng cấp hoặc việc kiểm tra tổng |
| Trách nhiệm | Kết nối thẩm quyền, hiểu biết cụ thể và thao tác; không suy từ chức danh |
| Northstar | Sở hữu và quan hệ xác lập xung đột lợi ích; gian lận còn cần điều tra độc lập |

Kết luận chuẩn của tình huống giữ nguyên khi dùng hỗ trợ. Tuy nhiên, danh sách bằng chứng người học đã dùng, trạng thái hoàn thành, điểm và kết quả kế nhiệm có thể khác; không khẳng định mọi biên bản của mọi lượt chơi giống hệt nhau.

## 7. Executed Sample Calculations

Các phép kiểm tra dưới đây được thực hiện ngày 21/10/2026 trên dữ liệu mẫu và đối chiếu mã gốc. Bảng chi tiết cùng kết quả máy đọc được nằm trong [TEST_CASES_FINAL.md](../WEEK_6/TEST_CASES_FINAL.md).

| Mã | Đầu vào và phép xử lý | Kết quả kỳ vọng | Kết quả thực tế |
|---|---|---|---|
| F02 | 120,0 + 20,4 + 9,6 | 150,0 | 150,0 |
| F04 | 18/120 × 365; 21/150 × 365 | 54,8 và 51,1 ngày | Khớp |
| F07 | Tách hai năm và kế hoạch | Biên gộp −2,5 / −0,7 điểm; nghiên cứu 1,6 / 0,1; chi khác 2,5 / 0,2 | Khớp |
| F08 | Cộng năm tài khoản | 18,0 / 21,0 / 3,0 | Khớp |
| F12 | Ba khoản NST-01 | 2,6 | 2,6 |
| F14 | Đối chiếu ba dòng tiền và tiền cuối kỳ | 11,0 / −11,0 / −2,0 / 6,0 | Khớp |

## 8. Executed Scoring Scenarios

Trừ điều kiện được nêu, các trường hợp tự giải đúng các câu còn lại, hoàn thành năm chương và chọn ba quyết định cân bằng. Số liệu thứ tự là điều tra / kỷ luật / quản trị / tự thực hiện.

| Mã | Tình huống | Bộ điểm thực tế | Tổng và kết thúc |
|---|---|---|---|
| L03 | Tự giải toàn bộ | 35 / 30 / 25 / 10 | 100; chấp thuận |
| L04 | Một lỗi ở câu đầu Chương I | 35 / 30 / 25 / 10 | 100; chấp thuận |
| L05 | Hai lỗi ở câu đầu Chương I | 34,6 / 28,5 / 25 / 10 | 98,1; chấp thuận |
| L22 | Một gợi ý, hai lỗi ở `t4.n73` | 34,8 / 28,5 / 25 / 9 | 97,3; chấp thuận |
| L23 | Bốn câu Chương IV sai ba lần, ba gợi ý | 33,4 / 24 / 25 / 8 | 90,4; chấp thuận |
| L24 | Xem lời giải toàn Chương III | 28 / 24 / 25 / 8 | 85; chấp thuận |
| L25 | Một quyết định vội vàng | 35 / 30 / 19 / 10 | 94; có giám sát |
| L26 | Một quyết định do dự | 35 / 30 / 21 / 10 | 96; có giám sát |
| L10 | Hai quyết định vội vàng | 35 / 30 / 13 / 10 | 88; hoãn do vội vàng |
| L11 | Hai quyết định do dự | 35 / 30 / 17 / 10 | 92; hoãn do do dự |
| L13 | Hết giờ một lời khai, các phần còn lại đúng | 34,4 / 29,5 / 25 / 10 | 98,9; chấp thuận |

Các kết quả còn được chấp thuận sau hỗ trợ hoặc hết giờ phản ánh ngưỡng hiện hành. Không diễn giải chúng thành đã tự giải toàn bộ. Kết quả L23 cũng cho thấy điểm kỷ luật của một chương có sàn 0, trong khi các chương khác vẫn được cộng.

## 9. Validation Scope and Ownership

Đã chạy 40 tình huống logic và 18 phép đối chiếu dữ liệu. Các kiểm tra logic chạy trực tiếp mã điều phối, hàm ranh giới, hàm gửi bằng chứng Chương V và bộ ghi lỗi; phần giao diện phụ thuộc được thay bằng đối tượng tối thiểu. Không dùng kết quả này để ghi đã chơi hết giao diện hoặc đã kiểm thử nhiều trình duyệt.

Nguyễn Minh Hiền là đầu mối quy tắc, Dũng đối chiếu số liệu, Ngọc kiểm tra diễn giải, Khuê kiểm tra tích hợp và Phương tổng hợp. Các kết quả tự động trong đợt rà soát này không được tự chuyển thành chứng nhận từng thành viên đã trực tiếp chơi thử.
