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

## WEEK 1 — PROBLEM DIRECTION

### 1. Three Problem Candidates

**Problem Candidate 1 — Information Integration**

Sinh viên có thể hiểu từng bảng số liệu, báo cáo hoặc khái niệm tài chính riêng lẻ nhưng gặp khó khăn khi phải kết nối thông tin nằm ở nhiều nguồn khác nhau để hiểu đầy đủ một vấn đề doanh nghiệp. Trong một tình huống thực tế, dấu hiệu ban đầu có thể xuất hiện ở dữ liệu tài chính tổng hợp, trong khi nguyên nhân, bằng chứng liên quan và trách nhiệm của các cá nhân lại nằm ở dữ liệu giao dịch, hồ sơ phê duyệt hoặc tài liệu kiểm soát.

**Problem Candidate 2 — Evidence Verification**

Sinh viên gặp khó khăn trong việc phân biệt giữa một tín hiệu đáng chú ý và một bằng chứng đủ mạnh để hỗ trợ kết luận. Một tỷ lệ bất thường, một giao dịch lớn hoặc một ngoại lệ kiểm soát có thể tạo ra nghi vấn nhưng chưa chắc đã chứng minh được Management Override hoặc trách nhiệm của một cá nhân.

**Problem Candidate 3 — Evidence-Based Reasoning**

Sinh viên có thể nhận diện được nhiều dấu hiệu riêng lẻ nhưng gặp khó khăn khi xây dựng một chuỗi lập luận trong đó các bằng chứng được kết nối, so sánh và sử dụng để hỗ trợ hoặc bác bỏ một giả thuyết, sau đó quy trách nhiệm cho cá nhân phù hợp với mức độ bằng chứng hiện có.

**Selected Problem Direction**

Nhóm lựa chọn **Information Integration** làm định hướng vấn đề chính. Evidence Verification và Evidence-Based Reasoning vẫn có liên quan đến sản phẩm, nhưng được xem là các kỹ năng hỗ trợ trong quá trình giải quyết vấn đề tổng hợp thông tin.

### 2. Selected Target User

Người dùng mục tiêu là sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh, đã có kiến thức tài chính cơ bản, cụ thể là đã được học qua các khung lý thuyết Kiểm soát nội bộ COSO và Fraud Triangle, nhưng chưa nhất thiết có nhiều kinh nghiệm áp dụng chúng vào một tình huống doanh nghiệp mở, trong đó thông tin cần thiết được phân tán giữa nhiều nguồn và không có sẵn câu trả lời trực tiếp.

### 3. User Task or Decision

Người dùng cần xác định một vấn đề tài chính đáng chú ý từ dữ liệu doanh nghiệp, tìm các thông tin liên quan ở nhiều nguồn khác nhau và tổng hợp chúng thành một kết luận có căn cứ.

Sau khi định hướng vấn đề được thu hẹp, nhiệm vụ của người dùng không chỉ dừng ở việc nhận diện một vấn đề chung. Người dùng phải đi đến **hai quyết định cuối cùng có liên hệ trực tiếp với nhau**:

1. liệu các bằng chứng có hỗ trợ kết luận rằng giao dịch đang được điều tra có liên quan đến Management Override hay không;
2. cá nhân nào chịu trách nhiệm chính cho hành vi đó dựa trên thẩm quyền, mức độ tham gia, xung đột lợi ích, dấu hiệu vượt qua kiểm soát và các bằng chứng liên quan.

Nhiệm vụ cốt lõi có thể khái quát theo trình tự sau:

**Quan sát thông tin tài chính → Xác định tín hiệu đáng ngờ → Truy vết xuống giao dịch → Kiểm tra bằng chứng kiểm soát và phê duyệt → Đánh giá Management Override → Quy trách nhiệm chính → Đưa ra kết luận dựa trên bằng chứng**

Khó khăn chính không nằm ở từng phép tính riêng lẻ mà ở việc người dùng phải biết nên xem thông tin nào tiếp theo, thông tin nào thực sự liên quan đến nhau, khi nào bằng chứng đã đủ mạnh để hỗ trợ một kết luận về Management Override, và bằng chứng nào cho phép quy trách nhiệm cho một cá nhân mà không vượt quá dữ liệu hiện có.

### 4. Draft Problem Statement

Sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản gặp khó khăn khi xử lý các tình huống doanh nghiệp có nhiều nguồn thông tin, vì dữ liệu cần thiết để hiểu và giải thích vấn đề thường được phân tán giữa báo cáo tài chính, dữ liệu giao dịch, hồ sơ phê duyệt và tài liệu kiểm soát.

Việc hiểu từng nguồn riêng lẻ chưa đủ. Người học cần có khả năng kết nối các nguồn này thành một chuỗi lập luận tài chính và kiểm soát nhất quán. Đặc biệt, người học cần nhận ra rằng một giao dịch có thể đầy đủ và hợp lệ về hình thức nhưng vẫn tồn tại rủi ro Management Override nếu người có quyền phê duyệt đồng thời có lợi ích liên quan hoặc đã vượt qua cơ chế kiểm soát được thiết kế để hạn chế hành vi đó.

Vấn đề cần giải quyết vì vậy không chỉ là phát hiện Management Override mà còn là **xác định cá nhân chịu trách nhiệm chính bằng bằng chứng phù hợp**.

### 5. Initial Source or Observation

Giả định ban đầu của nhóm là sinh viên có thể xử lý từng bảng số liệu hoặc tài liệu tài chính riêng biệt nhưng gặp nhiều khó khăn hơn khi phải xác định mối liên hệ giữa chúng trong cùng một tình huống.

Một dạng cụ thể của khó khăn này là việc sinh viên có xu hướng dùng sự hiện diện của phê duyệt như một tín hiệu an toàn mà chưa kiểm tra xem người phê duyệt có độc lập với lợi ích của giao dịch hay không. Ngay cả khi người học nhận ra vấn đề kiểm soát, họ vẫn có thể gặp khó khăn khi phân biệt giữa người chỉ xuất hiện trong hồ sơ và người thực sự có thẩm quyền, mức độ tham gia hoặc xung đột lợi ích đủ mạnh để bị quy trách nhiệm chính.

Để kiểm tra giả định này, nhóm có thể sử dụng một tình huống ngắn gồm dữ liệu tài chính tổng hợp, dữ liệu giao dịch và một số tài liệu liên quan, sau đó quan sát xem người dùng có thể:

- xác định đúng thông tin cần ưu tiên;
- lựa chọn đúng nguồn cần xem tiếp;
- liên kết các thông tin nói về cùng một vấn đề;
- phân biệt tín hiệu với bằng chứng;
- đánh giá đúng khả năng Management Override;
- và xác định cá nhân chịu trách nhiệm chính dựa trên bằng chứng thay vì phỏng đoán.

### 6. Why This Is a Finance or Banking Problem

Vấn đề liên quan trực tiếp đến các kỹ năng tài chính như phân tích biến động, truy vết giao dịch, đối chiếu dữ liệu, đánh giá bằng chứng và xem xét vai trò của kiểm soát tài chính trong doanh nghiệp.

Cụ thể hơn, đây thuộc lĩnh vực Kiểm toán và Quản trị công ty, đặc biệt liên quan đến Kiểm soát nội bộ, rủi ro gian lận và Management Override of Controls. Khái niệm Management Override mô tả rủi ro khi người có thẩm quyền có khả năng vượt qua hoặc vô hiệu hóa các kiểm soát vốn được thiết kế để bảo đảm tính hợp lệ của giao dịch.

Tuy nhiên, việc kết luận có Management Override và việc xác định cá nhân chịu trách nhiệm là hai bước khác nhau. Đánh giá Management Override trả lời câu hỏi **“điều gì đã xảy ra ở cấp độ kiểm soát?”**, trong khi quy trách nhiệm trả lời câu hỏi **“ai chịu trách nhiệm chính dựa trên thẩm quyền, mức độ tham gia và bằng chứng?”**.

Fraud Triangle có thể hỗ trợ việc giải thích các yếu tố rủi ro gian lận như áp lực hoặc động cơ, cơ hội và sự hợp lý hóa, nhưng không được sử dụng như một công cụ độc lập để xác định thủ phạm.

Giá trị chính của dự án vì vậy nằm ở lập luận tài chính kết hợp với lập luận về quản trị và quy trách nhiệm dựa trên bằng chứng. Công nghệ chỉ đóng vai trò hỗ trợ người dùng tiếp cận, xử lý và kết nối thông tin một cách có cấu trúc hơn.

### 7. Visible Contribution

| Thành viên | Trách nhiệm trong Week 1 | Visible Output |
|---|---|---|
| Phạm Quỳnh Phương | Tổng hợp Three Problem Candidates thành bản thống nhất, đối chiếu nội dung giữa các phần đóng góp để bảo đảm định hướng vấn đề, người dùng mục tiêu, nhiệm vụ người dùng và kết luận không mâu thuẫn nhau, đồng thời ghi lại các quyết định và thay đổi của nhóm | Bản tổng hợp Three Problem Candidates, quyết định chọn Information Integration làm hướng chính, cấu trúc README.md, decision log và bản ghi thay đổi sau checkpoint |
| Phạm Triệu Tiến Dũng | Làm rõ bản chất tài chính của vấn đề và cách thông tin bị phân mảnh giữa các nguồn | Initial Financial Information Structure gồm dữ liệu tài chính tổng hợp, dữ liệu giao dịch và tài liệu kiểm soát, kèm mô tả mối liên hệ giữa các lớp thông tin |
| Nguyễn Minh Hiền | Xác định nhiệm vụ thực tế mà người dùng phải thực hiện trong quá trình điều tra | User Task Flow từ quan sát dữ liệu đến đánh giá Management Override, quy trách nhiệm và kết luận dựa trên bằng chứng |
| Tôn Khánh Ngọc | Xây dựng bối cảnh doanh nghiệp ban đầu để kiểm tra tính khả thi của định hướng vấn đề | Initial Case Context của Aster Holdings, trong đó bằng chứng tài chính, bằng chứng giao dịch và bằng chứng trách nhiệm không xuất hiện đầy đủ trong một tài liệu duy nhất |
| Đinh Thị Minh Khuê | Xác định cách trình bày thông tin, chuyển luồng điều tra thành giao diện tương tác và trực tiếp triển khai phần chạy thật | Initial User Observation Layout, working UI prototype và phần chuyển bước trong code |

Các đầu ra trên phục vụ trực tiếp cho Week 1 và chưa giả định trước toàn bộ hình thức sản phẩm hoặc hướng kỹ thuật cuối cùng.

### 8. Open Questions

Ở cuối Week 1, nhóm chưa quyết định hình thức sản phẩm cụ thể, đầu ra chính mà người dùng nhìn thấy, quy trình cốt lõi biến đầu vào thành đầu ra, MVP nên kiểm chứng phần nào của định hướng vấn đề, phạm vi nào khả thi trong thời gian học phần và hướng kỹ thuật nào phù hợp.

Ngoài ra, sau khi kết luận được thu hẹp về Management Override và quy trách nhiệm, nhóm cần tiếp tục giải quyết hai câu hỏi quan trọng trong Week 2:

- sản phẩm sẽ làm thế nào để người dùng không chỉ kết luận có Management Override mà còn chỉ ra cá nhân chịu trách nhiệm chính bằng bằng chứng;
- đầu ra nào có thể thể hiện đồng thời **điều gì đã xảy ra**, **ai chịu trách nhiệm chính** và **vì sao bằng chứng hỗ trợ kết luận đó**.

## AFTER CHECKPOINT 1

### Feedback Received

Nhóm cần thu hẹp phạm vi vấn đề và tránh xây dựng một tình huống dựa trên quá nhiều bất thường tài chính hoặc nhiều hướng điều tra độc lập. Nếu mỗi chỉ số hoặc dấu hiệu mở ra một nhánh riêng, sản phẩm có nguy cơ chuyển từ việc rèn luyện Information Integration sang xử lý một danh sách lớn các vấn đề tài chính không liên kết.

### Decision

**KEEP + SIMPLIFY**

Nhóm giữ nguyên Information Integration làm định hướng vấn đề nhưng đơn giản hóa tình huống quanh một chuỗi điều tra chính.

### Revision Made

Nhóm chuyển từ ý tưởng xử lý nhiều bất thường tài chính độc lập sang một cấu trúc trong đó người dùng bắt đầu từ dữ liệu doanh nghiệp tổng hợp, xác định một dòng hoặc tín hiệu đáng chú ý, truy vết xuống giao dịch Northstar và tiếp tục sử dụng các tài liệu liên quan để hiểu vấn đề.

Cấu trúc sau điều chỉnh đi theo trình tự:

**Thông tin tài chính → Tín hiệu tài chính đáng ngờ → Thông tin cấp giao dịch → Bằng chứng liên quan → Kết luận dựa trên bằng chứng**

Việc thu hẹp này giúp các nguồn thông tin phục vụ cùng một chuỗi điều tra thay vì tạo ra nhiều tuyến phân tích không liên kết.

### Open Question Before Week 2

Sản phẩm nào có thể biến quá trình tổng hợp thông tin tài chính này thành một nhiệm vụ tương tác rõ ràng, có đầu ra chính quan sát được và có phạm vi khả thi trong thời gian của học phần?

## AFTER CHECKPOINT 2

### Feedback Received

Nhóm nhận thấy phạm vi kiến thức đang được triển khai ở các tuần sau, cụ thể là Phân tích Báo cáo Tài chính kết hợp với Quản trị và Kiểm soát nội bộ, có xu hướng dàn trải trên nhiều khung lý thuyết cùng lúc. Điều này khiến sản phẩm nghiêng về khối lượng bài tập tài chính hơn là rèn luyện một kỹ năng cụ thể. Pain point Information Integration ở dạng tổng quát ban đầu chưa đủ sắc để định hướng thiết kế tình huống theo chiều sâu.

### Decision

**KEEP + SIMPLIFY**, tiếp nối từ Checkpoint 1 thay vì Restart.

Nhóm giữ nguyên Problem Direction Information Integration và chuỗi điều tra đã có từ Checkpoint 1, đồng thời thu hẹp thêm bằng cách xác định rõ **hai quyết định cuối cùng** mà chuỗi phải dẫn tới.

### Revision Made

Kết luận cuối chuỗi không còn là việc xác định một vấn đề hoặc người chịu trách nhiệm theo nghĩa chung. Người chơi phải trả lời đồng thời hai câu hỏi:

1. **Các bằng chứng hiện có có hỗ trợ kết luận rằng Management Override đã xảy ra hay không?**
2. **Cá nhân nào chịu trách nhiệm chính cho hành vi đó, và bằng chứng nào hỗ trợ việc quy trách nhiệm?**

Phân tích Báo cáo Tài chính, bao gồm các chỉ số Beneish được lựa chọn phù hợp với tình huống, chỉ đóng vai trò sàng lọc để khoanh vùng nơi cần xem xét kỹ. Quản trị và Kiểm soát nội bộ trở thành trục kiến thức trung tâm cho việc đánh giá Management Override. Sau đó, bước quy trách nhiệm sử dụng thẩm quyền, mức độ tham gia, xung đột lợi ích, dấu hiệu vượt qua kiểm soát và bằng chứng giao dịch để xác định cá nhân chịu trách nhiệm chính.

Cấu trúc sau điều chỉnh được xác định như sau:

**Thông tin tài chính → Tín hiệu tài chính đáng ngờ → Thông tin cấp giao dịch → Bằng chứng kiểm soát và phê duyệt → Đánh giá Management Override → Quy trách nhiệm chính → Kết luận về Management Override và trách nhiệm dựa trên bằng chứng**

Cách cấu trúc này bảo đảm rằng sản phẩm không chỉ yêu cầu người chơi phát hiện vấn đề kiểm soát mà còn phải giải thích **ai chịu trách nhiệm chính và tại sao**.

Đồng thời, sau khi Đinh Thị Minh Khuê hoàn thành phần chạy thật của UI bao gồm cả việc nối các Tab trong code, vai trò Integration của Phạm Quỳnh Phương tập trung vào tầng đối chiếu nội dung, giữ tính nhất quán giữa các tài liệu, kiểm thử toàn bộ luồng chơi và kiểm soát phạm vi dự án để tránh chồng chéo với phần code.

### Open Question Before Week 2 Completion

Định hướng sản phẩm và đầu ra chính cần được thiết kế như thế nào để người chơi vừa chứng minh được **Management Override có xảy ra hay không**, vừa xác định được **cá nhân chịu trách nhiệm chính** mà không biến việc quy trách nhiệm thành một lựa chọn cảm tính hoặc chỉ dựa trên Fraud Triangle?
