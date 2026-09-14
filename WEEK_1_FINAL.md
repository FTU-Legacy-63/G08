# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

## Team Members

| Họ tên | MSSV | Vai trò chính |
|---|---|---|
| Phạm Quỳnh Phương | 2411380865 | Team Lead và Project Integration Owner |
| Phạm Triệu Tiến Dũng | 2412380014 | Financial Content và Input Owner |
| Nguyễn Minh Hiền | 2412380018 | Gameplay và Logic Owner |
| Tôn Khánh Ngọc | 2412380035 | Storyline và Output Owner |
| Đinh Thị Minh Khuê | 2412380022 | UI/UX và Code Integration Owner |

# WEEK 1 — PROBLEM DIRECTION

## 1. Three Problem Candidates

### Problem Candidate 1 — Information Integration

Sinh viên có thể hiểu từng bảng số liệu, báo cáo hoặc khái niệm tài chính riêng lẻ nhưng gặp khó khăn khi phải kết nối thông tin nằm ở nhiều nguồn khác nhau để hiểu đầy đủ một vấn đề doanh nghiệp. Trong một tình huống thực tế, dấu hiệu ban đầu có thể xuất hiện ở dữ liệu tài chính tổng hợp, trong khi nguyên nhân, bằng chứng liên quan và trách nhiệm của các cá nhân lại nằm ở dữ liệu giao dịch, hồ sơ phê duyệt hoặc tài liệu kiểm soát.

### Problem Candidate 2 — Evidence Verification

Sinh viên gặp khó khăn trong việc phân biệt giữa một tín hiệu đáng chú ý và một bằng chứng đủ mạnh để hỗ trợ kết luận. Một tỷ lệ bất thường, một giao dịch lớn hoặc một ngoại lệ kiểm soát có thể tạo ra nghi vấn nhưng chưa chắc đã chứng minh được Management Override hoặc trách nhiệm của một cá nhân.

### Problem Candidate 3 — Evidence-Based Reasoning

Sinh viên có thể nhận diện được nhiều dấu hiệu riêng lẻ nhưng gặp khó khăn khi xây dựng một chuỗi lập luận trong đó các bằng chứng được kết nối, so sánh và sử dụng để hỗ trợ hoặc bác bỏ một giả thuyết, sau đó quy trách nhiệm cho cá nhân phù hợp với mức độ bằng chứng hiện có.

### Selected Problem Direction

Nhóm lựa chọn **Information Integration** làm định hướng vấn đề chính. Evidence Verification và Evidence-Based Reasoning vẫn có liên quan đến sản phẩm, nhưng được xem là các kỹ năng hỗ trợ trong quá trình giải quyết vấn đề tổng hợp thông tin.

Việc lựa chọn Information Integration phù hợp với bản chất của tình huống mà nhóm muốn xây dựng. Người học không thiếu hoàn toàn kiến thức về từng công thức hoặc khung lý thuyết riêng lẻ; khó khăn nằm ở việc xác định thông tin nào cần được xem tiếp, bằng chứng nào thực sự liên quan với nhau và mức độ bằng chứng nào đủ để hỗ trợ một kết luận.

---

## 2. Selected Target User

Người dùng mục tiêu là sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh, đã có kiến thức tài chính cơ bản và đã được tiếp cận các khung lý thuyết về Kiểm soát nội bộ như COSO và Fraud Triangle, nhưng chưa nhất thiết có nhiều kinh nghiệm áp dụng các khung này vào một tình huống doanh nghiệp có dữ liệu và bằng chứng phân tán ở nhiều nguồn.

Nhóm không hướng tới người dùng hoàn toàn mới với tài chính hoặc kiểm soát nội bộ. Giá trị của dự án nằm ở việc giúp người học vận dụng kiến thức đã biết vào một tình huống yêu cầu tổng hợp và đánh giá bằng chứng.

---

## 3. User Task or Decision

Người dùng cần xác định một vấn đề tài chính đáng chú ý từ dữ liệu doanh nghiệp, tìm các thông tin liên quan ở nhiều nguồn khác nhau và kết nối chúng thành một kết luận có căn cứ.

Sau khi phạm vi được thu hẹp, nhiệm vụ của người dùng được xác định rõ hơn theo chuỗi sau:

**Quan sát thông tin tài chính → Xác định tín hiệu đáng chú ý → Khoanh vùng và truy vết xuống giao dịch liên quan → Kiểm tra bằng chứng kiểm soát và phê duyệt → Đánh giá Management Override → Quy trách nhiệm chính → Đưa ra kết luận dựa trên bằng chứng**

User task kết thúc bằng hai quyết định có liên hệ trực tiếp với nhau:

1. Các bằng chứng hiện có có hỗ trợ kết luận rằng Management Override đã xảy ra hay không?
2. Cá nhân nào chịu trách nhiệm chính, và bằng chứng nào hỗ trợ việc quy trách nhiệm đó?

Khó khăn chính không nằm ở từng phép tính riêng lẻ. Người dùng phải biết nên xem thông tin nào tiếp theo, thông tin nào thực sự liên quan, khi nào một dấu hiệu chỉ nên được xem là nghi vấn và khi nào tập bằng chứng đã đủ mạnh để hỗ trợ một kết luận.

---

## 4. Draft Problem Statement

Sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản gặp khó khăn khi xử lý các tình huống doanh nghiệp có nhiều nguồn thông tin, vì dữ liệu cần thiết để hiểu và giải thích vấn đề thường được phân tán giữa báo cáo tài chính, dữ liệu giao dịch, hồ sơ phê duyệt và tài liệu kiểm soát.

Việc hiểu từng nguồn riêng lẻ chưa đủ. Người học cần có khả năng kết nối các nguồn này thành một chuỗi lập luận tài chính và kiểm soát nhất quán. Đặc biệt, người học cần nhận ra rằng một giao dịch có thể đầy đủ và hợp lệ về hình thức nhưng vẫn tồn tại rủi ro Management Override nếu người có thẩm quyền đã vượt qua hoặc vô hiệu hóa cơ chế kiểm soát.

Vấn đề cần giải quyết vì vậy không chỉ là nhận diện khả năng Management Override mà còn là xác định cá nhân chịu trách nhiệm chính bằng bằng chứng phù hợp.

---

## 5. Initial Source or Observation

Giả định ban đầu của nhóm là sinh viên có thể xử lý từng bảng số liệu hoặc tài liệu tài chính riêng biệt nhưng gặp nhiều khó khăn hơn khi phải xác định mối liên hệ giữa chúng trong cùng một tình huống.

Một biểu hiện cụ thể là người học có thể dùng sự hiện diện của phê duyệt như một tín hiệu an toàn mà chưa kiểm tra xem người phê duyệt có độc lập, có thẩm quyền phù hợp hoặc có lợi ích liên quan đến giao dịch hay không. Ngay cả khi nhận ra vấn đề kiểm soát, người học vẫn có thể gặp khó khăn khi phân biệt giữa người chỉ xuất hiện trong hồ sơ và người thực sự có mức độ tham gia hoặc quyền lực đủ mạnh để bị quy trách nhiệm chính.

Để kiểm tra giả định này, nhóm có thể sử dụng một tình huống ngắn gồm dữ liệu tài chính tổng hợp, dữ liệu giao dịch và một số tài liệu kiểm soát, sau đó quan sát xem người dùng có thể:

- xác định đúng thông tin cần ưu tiên;
- lựa chọn đúng nguồn cần xem tiếp;
- liên kết các thông tin nói về cùng một vấn đề;
- phân biệt tín hiệu với bằng chứng;
- đánh giá khả năng Management Override;
- xác định cá nhân chịu trách nhiệm chính dựa trên bằng chứng thay vì phỏng đoán.

---

## 6. Why This Is a Finance or Banking Problem

Vấn đề liên quan trực tiếp đến các kỹ năng tài chính như phân tích biến động, truy vết giao dịch, đối chiếu dữ liệu, đánh giá bằng chứng và xem xét vai trò của kiểm soát tài chính trong doanh nghiệp.

Cụ thể hơn, vấn đề nằm ở giao điểm giữa Phân tích tài chính, Kiểm toán, Kiểm soát nội bộ và Quản trị công ty. Khái niệm Management Override of Controls mô tả rủi ro khi người có thẩm quyền có khả năng vượt qua hoặc vô hiệu hóa các kiểm soát vốn được thiết kế để bảo đảm tính hợp lệ của giao dịch.

Việc đánh giá Management Override và việc quy trách nhiệm là hai bước có liên hệ nhưng không đồng nhất. Đánh giá Management Override trả lời câu hỏi liệu cơ chế kiểm soát đã bị vượt qua hay chưa, trong khi quy trách nhiệm yêu cầu xác định ai có thẩm quyền, mức độ tham gia và mối liên hệ trực tiếp với hành vi đó.

Fraud Triangle có thể được sử dụng để hỗ trợ giải thích các yếu tố rủi ro gian lận như áp lực hoặc động cơ, cơ hội và sự hợp lý hóa, nhưng không được sử dụng như công cụ độc lập để xác định cá nhân chịu trách nhiệm.

Giá trị chính của dự án vì vậy nằm ở lập luận tài chính kết hợp với lập luận về kiểm soát và quy trách nhiệm dựa trên bằng chứng. Công nghệ chỉ đóng vai trò hỗ trợ người dùng tiếp cận và kết nối thông tin theo một cấu trúc rõ ràng hơn.

---

## 7. Visible Contribution

| Thành viên | Trách nhiệm trong Week 1 | Visible Output |
|---|---|---|
| Phạm Quỳnh Phương | Tổng hợp Three Problem Candidates, đối chiếu tính nhất quán giữa problem direction, target user và user task, đồng thời ghi lại các quyết định và thay đổi của nhóm | Bản tổng hợp Three Problem Candidates, quyết định chọn Information Integration, cấu trúc README.md và decision log |
| Phạm Triệu Tiến Dũng | Làm rõ bản chất tài chính của vấn đề và cách thông tin bị phân tán giữa các nguồn | Initial Financial Information Structure gồm dữ liệu tài chính tổng hợp, dữ liệu giao dịch và tài liệu kiểm soát |
| Nguyễn Minh Hiền | Xác định nhiệm vụ thực tế mà người dùng phải thực hiện | User Task Flow từ quan sát dữ liệu đến Management Override Assessment, quy trách nhiệm và kết luận |
| Tôn Khánh Ngọc | Xây dựng bối cảnh doanh nghiệp ban đầu để kiểm tra tính khả thi của problem direction | Initial Case Context của Aster Holdings |
| Đinh Thị Minh Khuê | Xác định cách trình bày thông tin và chuyển investigation flow thành giao diện tương tác | Initial User Observation Layout và prototype giao diện ban đầu |

Các đầu ra trên phục vụ trực tiếp cho Week 1 và chưa giả định trước toàn bộ product form hoặc technical route.

---

## 8. Open Questions

Ở cuối Week 1, nhóm chưa quyết định:

- sản phẩm cụ thể sẽ có hình thức gì;
- đầu ra nhìn thấy được chính là gì;
- quy trình nào biến đầu vào thành đầu ra;
- MVP nên giữ những thành phần nào;
- phạm vi nào khả thi trong thời gian học phần;
- technical route nào phù hợp;
- sản phẩm sẽ thể hiện chuỗi bằng chứng và việc quy trách nhiệm như thế nào để người học không chỉ chọn đáp án cuối.

Những câu hỏi này được chuyển sang Week 2.

---

# AFTER CHECKPOINT 1

## Feedback Received

Nhóm cần thu hẹp phạm vi vấn đề và tránh xây dựng một tình huống dựa trên quá nhiều bất thường tài chính hoặc nhiều hướng điều tra độc lập. Nếu mỗi chỉ số hoặc dấu hiệu mở ra một nhánh riêng, sản phẩm có nguy cơ chuyển từ việc rèn luyện Information Integration sang xử lý một danh sách lớn các vấn đề tài chính không liên kết.

## Decision

**KEEP + SIMPLIFY**

Nhóm giữ nguyên Information Integration làm định hướng vấn đề nhưng đơn giản hóa tình huống quanh một chuỗi điều tra chính.

## Revision Made

Nhóm chuyển từ ý tưởng xử lý nhiều bất thường tài chính độc lập sang một cấu trúc trong đó người dùng bắt đầu từ dữ liệu doanh nghiệp tổng hợp, xác định một tín hiệu đáng chú ý, khoanh vùng và truy vết xuống một giao dịch liên quan, sau đó tiếp tục sử dụng các tài liệu khác để hiểu vấn đề.

Cấu trúc sau điều chỉnh đi theo trình tự:

**Thông tin tài chính → Tín hiệu đáng chú ý → Giao dịch liên quan → Bằng chứng liên quan → Kết luận dựa trên bằng chứng**

Việc thu hẹp này giúp các nguồn thông tin phục vụ cùng một chuỗi điều tra thay vì tạo ra nhiều tuyến phân tích không liên kết.

---

# AFTER CHECKPOINT 2

## Feedback Received

Nhóm nhận thấy phạm vi kiến thức đang có xu hướng dàn trải trên quá nhiều khung lý thuyết và nhiều dạng bài tập tài chính. Điều này có thể khiến sản phẩm nghiêng về khối lượng phép tính thay vì rèn luyện một kỹ năng cụ thể.

Problem Direction Information Integration ở dạng ban đầu cũng chưa đủ sắc để quyết định người chơi cần đi tới loại kết luận nào.

## Decision

**KEEP + SIMPLIFY**, tiếp nối từ Checkpoint 1 thay vì Restart.

Nhóm giữ nguyên Information Integration và chuỗi điều tra đã có, đồng thời thu hẹp thêm bằng cách xác định rõ hai quyết định cuối cùng.

## Revision Made

Người chơi phải trả lời:

1. **Các bằng chứng hiện có có hỗ trợ kết luận rằng Management Override đã xảy ra hay không?**
2. **Cá nhân nào chịu trách nhiệm chính, và bằng chứng nào hỗ trợ việc quy trách nhiệm đó?**

Phân tích tài chính chỉ đóng vai trò sàng lọc và khoanh vùng nơi cần điều tra. Quản trị và Kiểm soát nội bộ trở thành trọng tâm khi đánh giá Management Override. Việc quy trách nhiệm dựa trên thẩm quyền, mức độ tham gia, xung đột lợi ích, mức độ liên hệ với giao dịch và bằng chứng về việc vượt qua kiểm soát.

Cấu trúc sau điều chỉnh được xác định như sau:

**Thông tin tài chính → Tín hiệu đáng chú ý → Khoanh vùng và truy vết xuống giao dịch → Bằng chứng kiểm soát và phê duyệt → Đánh giá Management Override → Quy trách nhiệm chính → Kết luận dựa trên bằng chứng**

Cấu trúc này là đầu vào trực tiếp cho Week 2, nơi nhóm chuyển Problem Direction thành Product Direction.
