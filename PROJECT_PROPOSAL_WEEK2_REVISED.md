# The Last Heir — Project Proposal

> Học phần: **NHA408E**
> Nhóm: **G08**

# WEEK 2 — PRODUCT DIRECTION

## 1. Problem Direction

Dự án tiếp tục problem direction được lựa chọn trong Week 1, xoay quanh khái niệm **Information Integration**.

- Sinh viên có kiến thức tài chính cơ bản thường hiểu được từng loại thông tin riêng lẻ, nhưng gặp khó khăn khi phải kết nối dữ liệu từ nhiều nguồn khác nhau để giải thích một vấn đề doanh nghiệp cụ thể.
- Trong một tình huống mở, thông tin cần thiết có thể nằm phân tán ở: dữ liệu tài chính tổng hợp, dữ liệu giao dịch, hợp đồng, quy tắc kiểm soát nội bộ, và tài liệu nhân sự.
- Không một nguồn thông tin riêng lẻ nào có thể cung cấp toàn bộ câu trả lời một cách độc lập.

Sau Checkpoint 1, nhóm đã thu hẹp vấn đề quanh một chuỗi điều tra thống nhất:

```
Dấu hiệu tài chính ban đầu
        ↓
Truy vết đến giao dịch có liên quan
        ↓
Kiểm tra bằng chứng giao dịch + kiểm soát nội bộ
        ↓
Kết nối bằng chứng với trách nhiệm cá nhân
        ↓
Kết luận có căn cứ
```

## 2. Target User và User Task

**Target user:** Sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh, đã có kiến thức tài chính cơ bản.

**Nhiệm vụ trọng tâm — 5 bước liên tiếp:**

1. Xác định vấn đề tài chính cần ưu tiên điều tra.
2. Truy vết từ dữ liệu tài chính tổng hợp xuống một giao dịch cụ thể.
3. Đối chiếu giao dịch đó với hợp đồng, thông tin thanh toán và thông tin kiểm soát nội bộ.
4. Kết nối các bằng chứng thu thập được với những cá nhân có liên quan.
5. Lựa chọn người chịu trách nhiệm chính và giải thích kết luận dựa trên chuỗi bằng chứng đã xây dựng.

> Nhiệm vụ này không đặt trọng tâm vào việc thực hiện càng nhiều phép tính càng tốt. Mọi phép tính chỉ được sử dụng khi nó giúp người chơi phát hiện một tín hiệu bất thường, kiểm tra một giả thuyết, hoặc củng cố một mối liên kết bằng chứng cụ thể.

## 3. Desired User Outcome

Sau khi hoàn thành sản phẩm, người dùng được kỳ vọng đạt được 6 năng lực sau:

1. Xác định thông tin nào thực sự quan trọng trong một tình huống có nhiều dữ liệu đồng thời.
2. Đi từ dữ liệu tổng hợp xuống đến bằng chứng ở cấp độ giao dịch và tài liệu.
3. Kết nối nhiều nguồn thông tin cùng đề cập đến một vấn đề.
4. Phân biệt giữa một tín hiệu cảnh báo ban đầu và một bằng chứng đủ mạnh để kết luận.
5. Điều chỉnh giả thuyết của mình khi xuất hiện thông tin mới.
6. Đưa ra kết luận không vượt quá phạm vi bằng chứng hiện có.

**Desired outcome (tóm gọn):** cải thiện khả năng tổng hợp và lập luận từ thông tin tài chính phân mảnh để đưa ra một kết luận có căn cứ.

## 4. Product Statement

The Last Heir là một trò chơi học tập dạng điều tra tài chính theo kịch bản (**Scenario-Based Financial Investigation Learning Game**), trong đó người chơi vào vai người thừa kế của Aster Holdings và phải điều tra một vấn đề tài chính đang diễn ra trong doanh nghiệp.

Người chơi bắt đầu từ dữ liệu tài chính tổng hợp, truy vết giao dịch Northstar, kiểm tra bằng chứng về giao dịch và kiểm soát, so sánh trách nhiệm của các cá nhân liên quan, và cuối cùng chọn đích danh một cá nhân chịu trách nhiệm chính kèm giải thích dựa trên chuỗi bằng chứng đã thu thập.

Sản phẩm sử dụng một vụ việc thống nhất để biến việc đọc và phân tích thông tin tài chính thành một quá trình điều tra có mục tiêu rõ ràng. Mỗi thông tin mới xuất hiện đều phải đóng góp vào việc xây dựng, kiểm tra hoặc điều chỉnh lập luận của người chơi.

Tín hiệu khởi đầu của quá trình điều tra dựa trên logic **earnings quality và cash conversion**: lợi nhuận tăng nhưng dòng tiền hoạt động không tăng tương ứng chỉ là một chỉ báo sàng lọc, không phải bằng chứng kết luận hay cutoff phổ quát. Người chơi buộc phải tiếp tục truy vết để xác định nguyên nhân thực sự.

## 5. Product Value, Product Form và Product Logic

| Thành phần | Nội dung |
|---|---|
| **Product Value** | Giúp người học kết nối nhiều nguồn thông tin tài chính thành một chuỗi lập luận dựa trên bằng chứng, thay vì chỉ đọc từng nguồn hoặc tính từng chỉ số một cách độc lập. |
| **Product Form** | Một trò chơi học tập điều tra tài chính theo kịch bản, thể hiện dưới dạng ứng dụng web. |
| **Product Logic** | Thông tin ban đầu → xác định tín hiệu bất thường → truy vết giao dịch liên quan → kiểm tra bằng chứng hợp đồng và kiểm soát nội bộ → kết nối bằng chứng trách nhiệm → so sánh các giả thuyết khả dĩ → đưa ra kết luận. |

> Product form có thể được đơn giản hóa về mặt giao diện hoặc công nghệ trong quá trình phát triển, nhưng **product value** và **product logic** phải được giữ nguyên xuyên suốt.

## 6. Main Visible Output

Main output của Target Product là sự kết hợp giữa **Financial Trace Map** và **Evidence-Based Responsibility Conclusion**.

- **Evidence-Based Responsibility Conclusion** là output quyết định của mọi lượt chơi. Ở bước cuối cùng, người chơi chọn đích danh một cá nhân trong số các nghi phạm — 4 nhân vật Victor, Lucas, David và Sophia ở Target Product, hoặc 2–3 nhân vật trong số đó ở MVP — và giải thích lựa chọn của mình bằng bằng chứng then chốt đã thu thập.
- **Financial Trace Map** là bằng chứng hỗ trợ, thể hiện cách người dùng đi từ vấn đề tài chính ban đầu đến giao dịch, bằng chứng kiểm soát và bằng chứng trách nhiệm, đóng vai trò làm căn cứ dẫn tới Responsibility Conclusion.

Main output này phù hợp với problem direction đã chọn vì nó làm cho khái niệm Information Integration trở nên quan sát được một cách trực tiếp. Người dùng không chỉ chọn một đáp án, mà phải thể hiện được toàn bộ chuỗi thông tin dẫn đến đáp án đó.

### Hệ thống kết luận 4 mức

Kết luận của mỗi lượt chơi được xác định bằng một **bảng quyết định cố định** (không phải một công thức trọng số phức tạp), kết hợp giữa việc người chơi có chọn đúng nghi phạm hay không và điểm bằng chứng tích lũy.

Điểm bằng chứng được tính từ **5 chặng điều tra đầu tiên** — Financial Diagnosis, Transaction Investigation, Reconciliation, Control Investigation, Responsibility Investigation — mỗi chặng đóng góp **20 điểm** nếu người chơi thực hiện đúng bước gating chính, tổng điểm tối đa là **100**.

Gating question được dùng để chấm điểm, **không dùng để chặn vĩnh viễn investigation chain**. Nếu trả lời sai, người chơi nhận 0 điểm ở chặng đó và được cung cấp guided feedback/remediation trước khi bộ bằng chứng tối thiểu cho bước tiếp theo được mở. Cơ chế này bảo đảm mọi lượt chơi vẫn có thể đi hết hành trình và tạo ra Responsibility Conclusion ở cuối game.

Việc chọn nhân vật chịu trách nhiệm chính ở chặng thứ 6 (Final Board Review) **không** được tính vào điểm số này, mà đóng vai trò trục thứ hai của bảng quyết định. Nhờ tách bạch như vậy, điểm số phản ánh đúng chất lượng của quá trình đọc bằng chứng, độc lập với việc lựa chọn cuối cùng có chính xác hay không.

| Chọn đúng nghi phạm? | Điểm 5 chặng | Mức kết luận |
|---|---|---|
| Đúng | ≥ 80 | Mức 1 — Kết luận chính xác |
| Đúng | ≤ 60 | Mức 2 — Kết luận đúng nhưng thiếu vững chắc |
| Sai | ≥ 80 | Mức 3 — Gần đúng, chọn nhầm nhân vật chịu trách nhiệm |
| Sai | ≤ 60 | Mức 4 — Kết luận sai |

## 7. Product Pattern

Tương tác cốt lõi của sản phẩm được tổ chức theo một vòng lặp điều tra gồm 6 bước liên tiếp: **quan sát → điều tra → phân tích → kết nối → đánh giá lại → kết luận**.

- Sản phẩm **không phải** một Question Bank, vì các lựa chọn trong game không tồn tại độc lập mà cùng thuộc về một vụ việc duy nhất và cùng đóng góp vào một chuỗi điều tra thống nhất.
- Sản phẩm cũng **không phải** một Calculator hay Dashboard thuần túy, vì mọi phép tính và mọi màn hình hiển thị dữ liệu chỉ đóng vai trò công cụ hỗ trợ cho quá trình lập luận, chứ không phải giá trị cốt lõi của sản phẩm.

## 8. MVP — Simplified End-to-End Game Journey

**Nguyên tắc:** không cắt bỏ nửa sau của trò chơi, mà xây dựng phiên bản nhỏ nhất vẫn cho người dùng trải nghiệm trọn vẹn hành trình cốt lõi — từ khi phát hiện vấn đề cho đến khi đưa ra kết luận trách nhiệm. MVP giữ nguyên toàn bộ hành trình điều tra nhưng giảm đáng kể độ phức tạp của dữ liệu, bằng chứng và logic xử lý.

**Hành trình người dùng của MVP:**

1. Bắt đầu từ Financial Overview, xác định một tín hiệu tài chính duy nhất.
2. Lựa chọn và truy vết một giao dịch đáng ngờ.
3. Kiểm tra một bằng chứng hợp đồng hoặc thanh toán.
4. Kiểm tra một bằng chứng kiểm soát nội bộ.
5. Xem xét thông tin đơn giản hóa của các nghi phạm.
6. Kết nối các bằng chứng then chốt.
7. Chọn đích danh người chịu trách nhiệm chính trong số 2–3 nghi phạm.

Kết thúc hành trình, người chơi nhận được kết luận theo một trong 4 mức đã trình bày ở mục 6, cùng với bảng điểm 5 chặng điều tra và phần tóm lược Financial Trace Map.

**Core output của MVP:** Simplified Evidence-Based Responsibility Conclusion, bao gồm việc chọn đích danh một nghi phạm, kết luận 4 mức tương ứng, điểm số 5 chặng điều tra, và Simplified Financial Trace Map làm bằng chứng đi kèm.

### MVP so với Target Product

| Khía cạnh | MVP | Target Product |
|---|---|---|
| Tín hiệu tài chính | Một tín hiệu chính: Cash Conversion = OCF / Net Income | Bổ sung DSRI và các chỉ báo hỗ trợ khác |
| Giao dịch đáng ngờ | Một chuỗi giao dịch dẫn đến Northstar | Nhiều chi tiết giao dịch và thanh toán để truy sâu hơn |
| Bằng chứng hợp đồng | Một đến hai trường dữ liệu then chốt | Chi tiết hợp đồng đầy đủ hơn |
| Bằng chứng kiểm soát | Một quy tắc kiểm soát + một dấu hiệu substance over form (chia nhỏ thanh toán dưới ngưỡng phê duyệt) | Nhiều điều kiện kiểm soát và mẫu hình thanh toán khác nhau |
| Nghi phạm | 2–3 trong số 4 nhân vật: Victor, David, Lucas, Sophia | Đầy đủ 4 hồ sơ điều hành |
| Liên kết bằng chứng | Một số liên kết bằng chứng bắt buộc | Nhiều bằng chứng ủng hộ và bằng chứng mâu thuẫn |
| Logic giả thuyết | Rule-based, ít nhánh | Nhiều nhánh đánh giá lại và so sánh giả thuyết |
| Kết luận cuối cùng | Chọn đích danh 1 người trong 2–3 nghi phạm, kèm lý do ngắn, trả về 1 trong 4 mức | Kết luận trách nhiệm có chiều sâu lập luận cao hơn, dựa trên đủ 4 hồ sơ |
| Điểm số và phản hồi | Điểm cố định 5 chặng (tối đa 100), kết hợp lựa chọn nghi phạm để xác định 1 trong 4 mức | Trọng số điểm theo chất lượng bằng chứng, số mức kết luận có thể mở rộng hơn |
| Gameplay | Tuyến tính có guided remediation khi trả lời sai; sai không làm đứt evidence chain | Cơ chế mở khóa bằng chứng và phân nhánh phong phú hơn |

MVP vẫn đáp ứng đầy đủ các tiêu chí của một Minimum Viable Product: một target user rõ ràng, một core task là hoàn thành một cuộc điều tra tài chính, một nhóm input thiết yếu, một logic path chính, một output có ý nghĩa, và một user flow hoàn chỉnh từ đầu đến cuối.

## 9. In Scope và Out of Scope

### Trong phạm vi MVP

- Một vụ việc doanh nghiệp duy nhất: Aster Holdings, xoay quanh chuỗi điều tra chính liên quan đến Northstar.
- Một tín hiệu tài chính chính, một chuỗi giao dịch.
- Một bộ bằng chứng hợp đồng và thanh toán được tối giản, một bộ bằng chứng kiểm soát được tối giản.
- 2–3 hồ sơ nghi phạm đơn giản hóa.
- Cơ chế liên kết bằng chứng theo rule-based.
- Một Simplified Financial Trace Map.
- Bước lựa chọn trách nhiệm chính bằng cách chọn đích danh một nghi phạm.
- Điểm số 5 chặng điều tra (tối đa 100 điểm) và kết luận theo 1 trong 4 mức.
- Toàn bộ trải nghiệm tạo thành một user flow hoàn chỉnh từ màn hình mở đầu đến kết luận.

### Ngoài phạm vi MVP

- Nhiều vụ việc doanh nghiệp, nhiều nhánh điều tra phức tạp.
- Cơ chế phân nhánh cốt truyện dựa theo điểm số — 4 mức kết luận nêu trên chỉ là nhãn phản hồi cho một lượt chơi, không dẫn đến những đoạn nội dung cốt truyện khác nhau.
- Khám phá thế giới mở, dữ liệu thị trường theo thời gian thực, phụ thuộc external API, backend phức tạp.
- Case hoặc phán quyết được sinh tự động bằng AI.
- Chế độ nhiều người chơi, bảng xếp hạng so sánh điểm số giữa những người chơi khác nhau (khác với 4 mức kết luận nêu trên).
- Nền kinh tế ảo, hệ thống cửa hàng/kho đồ, đăng nhập tài khoản (giai đoạn MVP).

## 10. Technical Route và Fallback

**Tuyến kỹ thuật chính:** xây dựng ứng dụng web theo hướng code-based, sử dụng React và JavaScript, kết hợp với dữ liệu tĩnh dạng JSON và CSV. Lựa chọn này phù hợp vì vụ việc có luồng tương tác hữu hạn, dữ liệu có thể được chuẩn bị trước, logic có thể được triển khai theo dạng rule-based, sản phẩm không cần real-time API hay database ở giai đoạn MVP.

**Fallback** (nếu tuyến chính gặp rủi ro về kỹ thuật hoặc thời gian):

1. Giữ nguyên toàn bộ hành trình điều tra từ đầu đến cuối.
2. Giảm số lượng màn hình và số lượng thẻ bằng chứng.
3. Sử dụng dữ liệu JSON cục bộ thay cho cơ sở dữ liệu, luồng tuyến tính thay cho luồng phân nhánh.
4. Nếu cần thiết, chuyển sang một interactive prototype đơn giản hơn.

> Phương án dự phòng được phép giảm độ phức tạp nhưng **không được phép cắt bỏ hành trình cốt lõi**. Bước chọn đích danh người chịu trách nhiệm chính và bước trả về kết luận theo 4 mức luôn phải hiện diện ở cuối luồng chơi.

## 11. Feasibility và Open Questions

Dự án sử dụng một vụ việc doanh nghiệp duy nhất, một chuỗi điều tra chính, và dữ liệu mô phỏng có giới hạn — nên có thể xây dựng MVP bằng dữ liệu tĩnh và logic được xác định trước, không cần một backend phức tạp.

**Câu hỏi cần tiếp tục kiểm chứng trong Week 3:**

1. Tín hiệu tài chính nào đủ rõ ràng để khởi động cuộc điều tra mà không tiết lộ sẵn đáp án?
2. Bộ input tối thiểu nào đủ để người chơi hoàn thành trọn vẹn hành trình MVP?
3. Cần bao nhiêu bằng chứng để người chơi thực sự phải thực hiện quá trình tích hợp thông tin?
4. Bằng chứng nào là bắt buộc để kết luận trách nhiệm có căn cứ vững chắc?
5. Simplified Financial Trace Map nên hiển thị những liên kết bằng chứng nào?
6. Ngưỡng điểm 80/100 dùng để phân định mức bằng chứng cao và thấp trong bảng quyết định 4 mức có thực sự phù hợp với độ khó của 5 chặng điều tra, hay cần điều chỉnh sau khi thử nghiệm?

## 12. Week 2 Completion Criteria

Week 2 được xem là hoàn chỉnh khi repository của nhóm thể hiện rõ ràng các nội dung sau: problem direction, target user, core user task, desired outcome, main visible output bao gồm hệ thống kết luận 4 mức, một product pattern chính, product value cùng product form và product logic, một phiên bản MVP end-to-end được đơn giản hóa, phạm vi trong và ngoài MVP, tuyến kỹ thuật cùng phương án dự phòng, và danh sách các open question được chuyển tiếp sang Week 3.

Week 3 sẽ có nhiệm vụ xác định và kiểm chứng liệu các input, nguồn dữ liệu và bằng chứng cần thiết cho hành trình MVP end-to-end đã đủ rõ ràng, nhất quán và khả thi để chuyển sang giai đoạn xây dựng logic hay chưa.
