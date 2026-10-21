# WEEK 4 — GAMEPLAY MECHANICS AND RULES

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 4

## 1. Purpose and Interaction Model

Tài liệu mô tả cơ chế tương tác của năm chương trong cùng một tình huống Aster Foods. Logic tài chính được trình bày tại [PROJECT_LOGIC_CHAIN_FINAL.md](PROJECT_LOGIC_CHAIN_FINAL.md); điểm và hỗ trợ ở [SCORING_AND_SAMPLE_TEST_FINAL.md](SCORING_AND_SAMPLE_TEST_FINAL.md).

Một bước thường gồm đọc hồ sơ liên quan, tính hoặc đối chiếu, chọn nhận định, gửi để kiểm tra, nhận phản hồi và cập nhật hồ sơ điều tra. Điều kiện đọc, chọn và xác nhận phụ thuộc từng bước; không suy ra rằng mọi câu đều có cùng giao diện hoặc cùng yêu cầu tài liệu.

Phần dưới có chứa kết quả đối chiếu nội bộ để phục vụ nộp và kiểm tra. Trò chơi mở hồ sơ và kết luận theo tiến trình của người học.

## 2. Chapter I — Financial Review

Người học xử lý ba nhóm hồ sơ về doanh thu, biên lợi nhuận và dòng tiền, rồi chọn khoản chênh lệch chuyển tiếp. Chương có chín điểm kiểm tra.

| Mã | Thao tác và kết quả cần đạt |
|---|---|
| `t1.gstart` | Đọc báo cáo và thư giải trình; lựa chọn đối chiếu nguyên nhân tăng trưởng với phải thu |
| `t1.gbridge` | Đối chiếu ảnh hưởng sản lượng 20,4 và giá, cơ cấu 9,6 |
| `t1.gquality` | Kết luận tăng trưởng được hỗ trợ ở cấp tổng hợp, chưa xác minh từng giao dịch |
| `t1.scope` | Chọn đúng bốn nhóm làm bất lợi biên lợi nhuận hoạt động |
| `t1.evals` | Đọc kế hoạch, sổ và chứng từ; phân biệt giá vốn, nghiên cứu và phát triển, chi phí khác đã có giải thích với tiếp thị và quản lý còn mở |
| `t1.cstart` | Đọc biến động vốn lưu động và truy các nguồn đầu tư, tài trợ |
| `t1.cbridge` | Đối chiếu dòng tiền đầu tư −11,0 và tài trợ −2,0 |
| `t1.cfinal` | Kết luận dòng tiền có nguồn, chưa xác lập mọi quyết định kinh tế đều tối ưu |
| `t1.handoff` | Chuyển khoản tiếp thị và quản lý vượt kế hoạch 3,0 sang Chương II |

Phân tích tỷ trọng không đồng nhất với biến động giá trị tuyệt đối. Phần tăng nghiên cứu và phát triển 1,6 và chi phí khác 2,5 là biến động giữa hai năm, khác mức vượt kế hoạch 0,1 và 0,2.

## 3. Chapter II — Cost Breakdown

Chương có sáu điểm kiểm tra: một ví dụ nhân sự, bốn tài khoản tự xử lý và một kết luận. Sau mỗi lần gán hoặc bỏ chứng từ, hệ thống đánh giá lại chuỗi; không có bước phê duyệt thủ công thứ hai để thay kết quả này.

| Bước | Cơ chế |
|---|---|
| Ví dụ nhân sự | Gán cơ sở, số thực tế, giải trình định lượng và bối cảnh; ví dụ khóa khi đủ vai trò hợp lệ |
| Bốn tài khoản | Chọn tài liệu qua danh sách vai trò; đọc nguồn và kiểm tra tính liên quan |
| Ô không yêu cầu | Giải trình của tư vấn và bối cảnh của tài khoản khác bị vô hiệu hóa; không yêu cầu đính kèm |
| Tài khoản thông thường | Cần cơ sở, số thực tế và nguồn định lượng phù hợp để đóng |
| Tư vấn | Cơ sở 1,6 và thực tế 4,2 được xác lập; phần 2,6 còn mở để truy vết |
| Kết luận | Dự báo 4,0 không tự thay ngân sách; 2,6 chưa chứng minh sai phạm; tiếp tục kiểm tra giao dịch |

Nhân sự chấp nhận `WAGE_BENCH` hoặc `NEW_MARKETS` ở vai trò bối cảnh. Việc kiểm tra dựa trên `ANSWERS`; danh mục tài liệu không phải danh sách phải chọn hết.

## 4. Chapter III — Transaction Trace

Chương có hai điểm kiểm tra. Người học tự xây giả thuyết từ chín bút toán, đọc hợp đồng và bàn giao của từng khoản được chọn, rồi kiểm tra hai câu về hợp đồng và mục đích.

| Trường hợp | Phản hồi và hành động |
|---|---|
| Chưa chọn bút toán | Chưa được tiếp tục |
| Chưa đọc đủ hai loại hồ sơ mỗi khoản | Quay lại đọc nguồn |
| Nhận định hợp đồng hoặc mục đích không khớp tập chọn | Ghi lỗi mới theo cơ chế câu hỏi |
| Cùng ranh giới nhưng thiếu khoản | Nhóm chưa đầy đủ; không tự nêu mã khoản còn thiếu |
| Nhóm đầy đủ nhưng khác mục tiêu 2,6 | Có thể đóng giả thuyết ngoài mục tiêu rồi chọn lại |
| NS-051, NS-073, NS-101 | Cùng NST-01 / ROP-25, đầy đủ và tổng 2,6 |
| Thêm NS-119 | Có thêm NST-02 / TAX-25; không còn cùng một ranh giới |

`t3.boundary` ghi nhận khi đúng ranh giới, đủ khoản và khớp 2,6 trong sai số 0,001 triệu USD. `t3.final` chấp nhận kết luận xác lập giao dịch; chưa xác lập chủ ý chia nhỏ, hành vi vô hiệu hóa kiểm soát hoặc gian lận.

## 5. Chapter IV — Control Investigation

### 5.1 Build and Apply the Checklist

| Mã | Yêu cầu |
|---|---|
| `t4.controlSheet` | Đọc bàn giao, FIN-AUTH-05, FIN-PROC-11 và vai trò; hoàn thành bốn bước kiểm tra cùng bốn vai trò |
| `t4.ev0805` | Xác lập tổng 0,9 và thẩm quyền trưởng bộ phận, quản lý tài chính |
| `t4.ev1907` | Xác lập tổng 1,8 và cấp giám đốc tài chính, Hội đồng quản trị |
| `t4.ev1410` | Xác lập tổng 2,6 và cùng cấp cao hơn |
| `t4.firstShift` | Chọn mốc 19/07 trong mô hình tổng đã phát sinh |
| `t4.system` | So cơ sở phân luồng hiện tại 0,9 với tổng cần dùng 1,8 |

Hai bước đầu không yêu cầu ghim dữ kiện thủ công. Khóa nhận định phân luồng tự xác lập các dữ kiện trong `SYSTEM_FACTS`. Người học tiếp tục đọc hồ sơ sự cố và cách xử lý thay thế trước phần ngoại lệ.

### 5.2 Exceptions and Monitoring

Từ phần ngoại lệ, người học chọn trực tiếp dòng, ô hoặc đoạn trong tài liệu để hỗ trợ nhận định. Dữ kiện đang chọn chưa được xem là đã xác lập.

| Mã | Nội dung đối chiếu |
|---|---|
| `t4.n51` | Maya có ủy quyền hợp lệ, quyết định gắn với PR-117 và tổng được kiểm tra |
| `t4.n73` | Sự cố có tài liệu; chưa tìm thấy quyết định cho giao dịch 1,8 và đánh giá lại tổng, cấp |
| `t4.n101` | Lý do thời hạn pháp lý mâu thuẫn tài liệu; thiếu quyết định và đánh giá lại tổng |
| `t4.cluster` | Chọn đúng ba dòng NST-01 trong báo cáo mười dòng |
| `t4.mon` | Xác lập Sophia mở hồ sơ rà soát sau khi ngoại lệ đã xảy ra |

Giới hạn `SCOPE_MAX` là 4 cho từng ngoại lệ và giám sát, 10 cho phạm vi cụm, 5 cho từng cá nhân. Giới hạn số lượng không thay điều kiện về nội dung và nguồn. Phiếu chưa đủ câu trả lời hoặc chưa có dữ kiện cần thiết không được chấm như câu hoàn chỉnh.

### 5.3 Reasoning and Handover

| Mã | Nội dung |
|---|---|
| `t4.p4class` | Phân loại nhận định hệ thống, phần cần giải thích về con người và giám sát |
| `t4.p4bridge` | Xác định lỗi hệ thống không giải thích toàn bộ chuỗi |
| `t4.roles` | Đánh giá thẩm quyền, hiểu biết và hành động của từng người theo hồ sơ hiện có |
| `t4.rolesummary` | Tổng hợp giới hạn quy trách nhiệm; chưa chỉ ra cá nhân chủ động vô hiệu hóa kiểm soát |
| `t4.level` | Chọn mức 3: có cơ sở điều tra khả năng vô hiệu hóa kiểm soát |
| `t4.final` | Hoàn thành bốn dòng biên bản; ghi chú tự do không dùng chấm đúng, sai |

Chỉ dữ kiện gắn với kết quả đã xác nhận được gửi qua `establishedEvidenceTab4`. Đã mở tài liệu không đồng nghĩa tự chuyển mọi nội dung sang Chương V.

## 6. Chapter V — Board Inquiry

Chương có năm lời khai của bốn nhân chứng và bốn hồ sơ trách nhiệm. Chọn đúng tập hồ sơ và đúng đánh giá mới khóa lời khai; chọn thêm hồ sơ ngoài tập cần thiết vẫn có thể bị từ chối.

| Mã | Nguồn chính và kết quả |
|---|---|
| `t5.vknow` | Thông báo 11:09 và nhật ký mở thư 11:12 bác bỏ việc Victor không biết tổng 1,8 |
| `t5.vact` | Biểu mẫu 11:23 và lịch sử xử lý bác bỏ việc Victor chỉ hỏi thủ tục |
| `t5.lucas` | Thông báo, phiếu tài chính và thư điều kiện hỗ trợ một phần lời khai; còn thiếu sót kiểm soát |
| `t5.david` | Hàng đợi hỗ trợ nhận định không có nhiệm vụ hệ thống; suy luận có giới hạn |
| `t5.sophia` | Báo cáo ngoại lệ và IC-25-104 hỗ trợ việc giám sát sau giao dịch |
| `t5.resp.Victor` | Hành vi chủ động vô hiệu hóa kiểm soát |
| `t5.resp.Lucas` | Thiếu sót kiểm soát, chưa đủ bằng chứng hành vi chủ động tương tự |
| `t5.resp.David` | Chưa đủ bằng chứng quy lỗi cá nhân |
| `t5.resp.Sophia` | Có thực hiện giám sát sau giao dịch |
| `t5.motive` | Hồ sơ Northstar xác lập xung đột lợi ích chưa khai báo |
| `t5.final` | Khóa riêng kiểm soát `identified` và gian lận `risk` |

Hồ sơ nền chưa được kế thừa có thể yêu cầu truy xuất lại. Hồ sơ mới về hiểu biết, thao tác được mở đúng giai đoạn; không gọi nguồn truy xuất lại là dữ kiện đã kế thừa.

Mỗi nhân chứng có cửa sổ 90 giây; Victor dùng chung cho hai lời khai. Hết giờ chỉ làm mất điểm phần chưa được chấp nhận, giữ kết quả trước đó và cho tiếp tục đánh giá trách nhiệm. Sau tải lại, người học xác nhận tiếp tục từ thời gian đã lưu. Điều kiện tạm dừng gồm lời thoại, hướng dẫn và một số lớp hồ sơ; phản hồi phản bác sai không dừng hoặc đặt lại đồng hồ.

## 7. Succession Decisions and Support

Sau kết luận Hội đồng, người học quyết định cách xử lý Victor, Northstar và hệ thống kiểm soát. Mỗi vấn đề có ba phương án với mức cân bằng, vội vàng hoặc do dự. Ba lựa chọn tham gia điểm quản trị và thứ tự xét bốn kết thúc; không tạo thêm điểm kiểm tra ngoài 45 mã.

| Cơ chế | Hành vi theo mã hiện tại |
|---|---|
| Mở chương | Giao diện chỉ cho chuyển khi các chương trước hoàn thành |
| Bàn giao | Đọc kết quả đã khóa rồi chọn tiếp tục |
| Lỗi mới thứ hai | Tạm dừng câu đến khi mở lại hồ sơ hoặc hết 15 giây |
| Lỗi mới thứ ba | Mở gợi ý; câu không còn điểm làm chủ |
| Gợi ý | Ghi sự kiện sử dụng; chỉ khử trùng khi có khóa `hintKey` |
| Xem lời giải | Có cơ chế ghi nhận hỗ trợ; không đồng nhất với tự giải |
| Xem lại | Chương đã hoàn thành được giữ để đọc; kết quả đã khóa được bảo toàn |
| Bắt đầu lại | Trong bản tích hợp, các lối bắt đầu lại của chương được chuyển về xác nhận xóa toàn bộ lượt chơi |

Không khẳng định mọi chương đều có nút xem lời giải từng câu. Giao diện và cơ chế trợ giúp cụ thể phải được kiểm tra theo bản tích hợp, thay vì suy từ một hàm có tên tương tự trong nội dung con.

## 8. Review Tools and Verification Scope

Sổ hồ sơ Chương I, bảng truy vết Chương II, bảng giả thuyết Chương III, sổ điều tra Chương IV và danh mục nhân chứng Chương V giúp xem lại kết quả theo từng nhiệm vụ. Bảng điểm chung ghi chất lượng điều tra, kỷ luật, quản trị và mức tự thực hiện.

Cơ chế được đọc từ mã và kiểm tra một phần bằng hàm gốc. Kết quả và danh sách hành vi giao diện còn cần chạy nằm trong [TEST_CASES_FINAL.md](../WEEK_6/TEST_CASES_FINAL.md). Mục tiêu hạn chế đoán và gợi đáp án không được ghi thành bảo đảm rằng người học không thể đoán đúng hoặc mọi hồ sơ đều không chứa gợi ý.
