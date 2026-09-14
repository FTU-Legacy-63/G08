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

Sinh viên có thể hiểu từng bảng số liệu, báo cáo hoặc khái niệm tài chính riêng lẻ nhưng gặp khó khăn khi phải kết nối thông tin nằm ở nhiều nguồn khác nhau để hiểu đầy đủ một vấn đề doanh nghiệp. Trong một tình huống thực tế, dấu hiệu ban đầu có thể xuất hiện ở dữ liệu tài chính tổng hợp, trong khi nguyên nhân và bằng chứng liên quan lại nằm ở dữ liệu giao dịch, hợp đồng hoặc tài liệu kiểm soát.

**Problem Candidate 2 — Evidence Verification**

Sinh viên gặp khó khăn trong việc phân biệt giữa một dấu hiệu đáng chú ý và một bằng chứng đủ mạnh để hỗ trợ kết luận. Một tỷ lệ bất thường, một giao dịch lớn hoặc một ngoại lệ kiểm soát có thể tạo ra nghi vấn nhưng chưa chắc đã chứng minh được nguyên nhân hoặc trách nhiệm của một cá nhân.

**Problem Candidate 3 — Evidence Based Reasoning**

Sinh viên có thể nhận diện được nhiều dấu hiệu riêng lẻ nhưng gặp khó khăn khi xây dựng một chuỗi lập luận trong đó các bằng chứng được kết nối, so sánh và sử dụng để hỗ trợ hoặc bác bỏ một giả thuyết.

**Selected Problem Direction**

Nhóm lựa chọn Information Integration làm problem direction chính. Evidence Verification và Evidence Based Reasoning vẫn có liên quan đến sản phẩm, nhưng được xem là các kỹ năng hỗ trợ trong quá trình giải quyết vấn đề tổng hợp thông tin.

### 2. Selected Target User

Người dùng mục tiêu là sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh đã có kiến thức tài chính cơ bản, cụ thể là đã được học qua các khung lý thuyết Kiểm soát nội bộ COSO và Fraud Triangle nhưng chưa nhất thiết có nhiều kinh nghiệm áp dụng chúng vào một tình huống doanh nghiệp mở, trong đó thông tin cần thiết được phân tán giữa nhiều nguồn và không có sẵn một câu trả lời trực tiếp.

### 3. User Task or Decision

Người dùng cần xác định một vấn đề tài chính đáng chú ý từ dữ liệu doanh nghiệp, tìm các thông tin liên quan ở những nguồn khác nhau và tổng hợp chúng thành một kết luận có căn cứ.

Nhiệm vụ cốt lõi có thể khái quát theo trình tự sau. Bắt đầu bằng việc quan sát dữ liệu doanh nghiệp. Tiếp theo là xác định vấn đề đáng điều tra. Sau đó là tìm thông tin chi tiết liên quan. Kế đến là đối chiếu nhiều nguồn với nhau. Tiếp tục kết nối các bằng chứng đã tìm được. Cuối cùng là đưa ra một kết luận có căn cứ.

Khó khăn chính không nằm ở từng phép tính riêng lẻ mà nằm ở việc người dùng phải biết nên xem thông tin nào tiếp theo, thông tin nào thực sự liên quan đến nhau, và quan trọng nhất là đánh giá đúng ý nghĩa của thông tin đã tìm được. Cụ thể là nhận ra khi nào một hồ sơ đầy đủ và hợp lệ về hình thức không đồng nghĩa với việc nó an toàn về bản chất.

### 4. Draft Problem Statement

Sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh có kiến thức tài chính cơ bản gặp khó khăn khi xử lý các tình huống doanh nghiệp có nhiều nguồn thông tin, vì dữ liệu cần thiết để hiểu và giải thích vấn đề thường được phân tán giữa báo cáo tài chính, dữ liệu giao dịch và tài liệu kiểm soát.

Việc hiểu từng nguồn riêng lẻ chưa đủ. Người học cần có khả năng kết nối các nguồn này thành một chuỗi lập luận tài chính nhất quán và có căn cứ. Quan trọng hơn, người học cần nhận ra rằng một số nguồn thông tin, chẳng hạn như hồ sơ phê duyệt, có thể trông đầy đủ và hợp lệ trong khi vẫn che giấu rủi ro quản trị, nếu người phê duyệt cũng chính là bên có lợi ích trong giao dịch đó.

### 5. Initial Source or Observation

Giả định ban đầu của nhóm là sinh viên có thể xử lý từng bảng số liệu hoặc tài liệu tài chính riêng biệt nhưng gặp nhiều khó khăn hơn khi phải xác định mối liên hệ giữa chúng trong cùng một tình huống.

Một dạng cụ thể của khó khăn này là việc sinh viên có xu hướng dùng sự hiện diện của phê duyệt như một tín hiệu an toàn, mà chưa kiểm tra xem người phê duyệt có độc lập với lợi ích của giao dịch hay không. Đây là khoảng trống giữa lý thuyết Kiểm soát nội bộ đã học, cụ thể là COSO và Fraud Triangle, với khả năng vận dụng chúng vào một hồ sơ thật.

Để kiểm tra giả định này, nhóm có thể sử dụng một case ngắn gồm dữ liệu tài chính tổng hợp, dữ liệu giao dịch và một số tài liệu liên quan, sau đó quan sát xem người dùng có thể xác định đúng thông tin cần ưu tiên, lựa chọn đúng nguồn cần xem tiếp, liên kết các thông tin nói về cùng một vấn đề, phân biệt dấu hiệu với bằng chứng, và đưa ra kết luận phù hợp với thông tin hiện có.

### 6. Why This Is a Finance or Banking Problem

Vấn đề liên quan trực tiếp đến các kỹ năng tài chính như phân tích biến động, truy vết giao dịch, đối chiếu dữ liệu, đánh giá bằng chứng và xem xét vai trò của kiểm soát tài chính trong doanh nghiệp.

Cụ thể hơn, đây thuộc lĩnh vực Kiểm toán và Quản trị công ty, gọi tắt là Corporate Governance và Internal Audit. Khái niệm Management Override of Controls, được quy định trong PCAOB AS 2401 và ISA 240, mô tả đúng loại rủi ro mà sản phẩm hướng tới. Đó là rủi ro khi người có quyền thiết kế ra kiểm soát cũng chính là người có khả năng vượt qua kiểm soát đó.

Giá trị chính của dự án vì vậy nằm ở financial reasoning kết hợp với governance reasoning. Công nghệ chỉ đóng vai trò hỗ trợ người dùng tiếp cận, xử lý và kết nối các thông tin tài chính một cách có cấu trúc hơn.

### 7. Visible Contribution

| Thành viên | Trách nhiệm trong Week 1 | Visible Output |
|---|---|---|
| Phạm Quỳnh Phương | Tổng hợp Three Problem Candidates thành bản thống nhất, đối chiếu nội dung giữa các phần đóng góp của từng thành viên để đảm bảo problem direction, target user, và case context không mâu thuẫn nhau, đồng thời ghi lại toàn bộ quyết định và thay đổi của nhóm | Bản tổng hợp Three Problem Candidates, quyết định chọn Information Integration làm hướng chính, cấu trúc README.md, decision log, và bản ghi thay đổi sau Checkpoint 1 |
| Phạm Triệu Tiến Dũng | Làm rõ bản chất tài chính của vấn đề và cách thông tin bị phân mảnh giữa các nguồn | Initial Financial Information Structure gồm dữ liệu tài chính tổng hợp, dữ liệu giao dịch, và tài liệu kiểm soát, kèm mô tả mối liên hệ giữa các lớp thông tin này |
| Nguyễn Minh Hiền | Xác định nhiệm vụ thực tế mà người dùng phải thực hiện trong quá trình điều tra | User Task Flow đi từ quan sát dữ liệu, xác định vấn đề, tìm thông tin liên quan, đối chiếu nguồn, kết nối bằng chứng, đến kết luận |
| Tôn Khánh Ngọc | Xây dựng bối cảnh doanh nghiệp ban đầu để kiểm tra tính khả thi của problem direction | Initial Case Context của Aster Holdings, trong đó thông tin tài chính được thiết kế để không xuất hiện đầy đủ trong một tài liệu duy nhất |
| Đinh Thị Minh Khuê | Xác định cách trình bày thông tin, chuyển investigation flow thành giao diện tương tác, và trực tiếp triển khai phần chạy thật bao gồm cả việc nối các bước điều tra lại với nhau trong code | Initial User Observation Layout, phát triển thành working UI prototype có logic tính toán thật chạy đúng trong từng bước, cùng với phần chuyển bước đã được nối trong code |

Các đầu ra trên phục vụ trực tiếp cho Week 1 và chưa giả định trước hình thức sản phẩm cuối cùng hoặc technical route.

### 8. Open Questions

Ở cuối Week 1, nhóm chưa quyết định sản phẩm cụ thể sẽ có hình thức gì, main output người dùng nhận được là gì, core process biến input thành output như thế nào, MVP nên kiểm chứng phần nào của problem direction, phạm vi nào khả thi trong thời gian của học phần, và technical route nào phù hợp với sản phẩm. Những câu hỏi này được giữ lại để giải quyết trong Week 2.

## AFTER CHECKPOINT 1

### Feedback Received

Nhóm cần thu hẹp phạm vi vấn đề và tránh xây dựng một case dựa trên quá nhiều bất thường tài chính hoặc nhiều hướng điều tra độc lập. Nếu mỗi chỉ số hoặc dấu hiệu mở ra một nhánh riêng, sản phẩm có nguy cơ chuyển từ việc rèn luyện Information Integration sang xử lý một danh sách lớn các vấn đề tài chính không liên kết.

### Decision

KEEP cộng với SIMPLIFY

Nhóm giữ nguyên Information Integration làm problem direction nhưng đơn giản hóa case quanh một investigation chain chính.

### Revision Made

Nhóm chuyển từ ý tưởng xử lý nhiều bất thường tài chính độc lập sang một cấu trúc trong đó người dùng bắt đầu từ dữ liệu doanh nghiệp tổng hợp, xác định một dòng tiền đáng chú ý, truy vết xuống giao dịch Northstar và tiếp tục sử dụng các tài liệu liên quan để hiểu vấn đề.

Cấu trúc sau revision đi theo trình tự sau. Bắt đầu từ Financial Information. Tiếp đến là Suspicious Financial Signal. Sau đó là Transaction Level Information. Kế tiếp là Related Evidence. Cuối cùng là Evidence Based Conclusion.

Việc thu hẹp này giúp các nguồn thông tin phục vụ cùng một investigation chain thay vì tạo ra nhiều tuyến phân tích không liên kết.

### Open Question Before Week 2

Sản phẩm nào có thể biến quá trình tổng hợp thông tin tài chính này thành một nhiệm vụ tương tác rõ ràng, có main output quan sát được và có phạm vi khả thi trong thời gian của học phần?

## AFTER CHECKPOINT 2

### Feedback Received

Nhóm nhận thấy phạm vi kiến thức đang được triển khai ở các tuần sau, cụ thể là Financial Statement Analysis kết hợp với Governance và Internal Control, có xu hướng dàn trải trên nhiều khung lý thuyết cùng lúc. Điều này khiến sản phẩm nghiêng về khối lượng bài tập tài chính hơn là rèn luyện một kỹ năng cụ thể. Pain point Information Integration ở dạng tổng quát ban đầu chưa đủ sắc để định hướng thiết kế case theo chiều sâu.

### Decision

KEEP cộng với SIMPLIFY, tiếp nối từ Checkpoint 1 thay vì Restart

Nhóm giữ nguyên Problem Direction Information Integration và chuỗi investigation đã có từ Checkpoint 1, đồng thời thu hẹp thêm một bậc bằng cách xác định rõ loại kết luận cụ thể mà chuỗi này cần dẫn tới.

### Revision Made

Kết luận cuối chuỗi không còn là việc xác định ai chịu trách nhiệm một cách chung chung, mà là việc đánh giá xem một giao dịch đã có phê duyệt đầy đủ có phải đang che giấu hành vi Management Override hay không.

Financial Statement Analysis, cụ thể là Beneish M Score rút gọn, đóng vai trò công cụ giúp khoanh vùng giao dịch cần soi kỹ. Governance và Internal Control, cụ thể là khung COSO và khái niệm Management Override, trở thành trục kiến thức trung tâm mà sản phẩm hướng tới rèn luyện.

Cấu trúc sau revision đi theo trình tự sau. Bắt đầu từ Financial Information, đóng vai trò công cụ khoanh vùng ban đầu. Tiếp đến là Suspicious Financial Signal. Sau đó là Transaction Level Information. Kế tiếp là Control and Authorization Evidence, đóng vai trò trục chính của sản phẩm. Tiếp theo là Management Override Assessment. Cuối cùng là Evidence Based Responsibility Conclusion.

Đồng thời, sau khi Đinh Thị Minh Khuê hoàn thành phần chạy thật của UI bao gồm cả việc nối các Tab trong code, nhóm xác định lại vai trò Integration của Phạm Quỳnh Phương chuyển sang tầng đối chiếu nội dung, giữ nhất quán tài liệu, kiểm thử toàn bộ luồng chơi, và kiểm soát phạm vi dự án, để tránh chồng chéo với phần code Khuê đã đảm nhiệm.

### Open Question Before Week 6

Câu hỏi gating nào ở mỗi bước có thể kiểm tra đúng việc người chơi nhận ra rằng đã phê duyệt không đồng nghĩa với an toàn, thay vì chỉ kiểm tra khả năng đọc đúng con số tài chính?
