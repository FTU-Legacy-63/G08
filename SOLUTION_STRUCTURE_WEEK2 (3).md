# The Last Heir — Solution Structure

> Học phần: **NHA408E**
> Nhóm: **G08**

# WEEK 2 — SOLUTION STRUCTURE

## 1. User, Input, Process, Output và User Action

### User

Sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh, đã có kiến thức tài chính cơ bản.

### Input

Người dùng tiếp cận một tập dữ liệu và tài liệu được chuẩn bị trước, chia thành 4 nhóm thông tin:

1. **Financial Overview Information** — giúp phát hiện vấn đề tài chính ban đầu.
2. **Transaction Information** — giúp truy vết đến giao dịch Northstar.
3. **Contract and Control Information** — giúp đánh giá bản chất giao dịch và mức độ tuân thủ kiểm soát nội bộ.
4. **Responsibility Evidence** — giúp liên kết hành động hoặc quyết định với những cá nhân cụ thể trong vụ việc.

> Week 2 chỉ có nhiệm vụ xác định các nhóm input cần thiết ở mức khái niệm. Trường dữ liệu cụ thể, nguồn gốc, quy tắc kiểm tra và dữ liệu mẫu sẽ được chuẩn hóa chi tiết trong Week 3.

### Process

**Core process:** Financial Investigation and Evidence Integration.

Người chơi lần lượt: sàng lọc thông tin để nhận diện tín hiệu bất thường → truy vết xuống giao dịch cụ thể → kiểm tra bằng chứng hợp đồng và thanh toán → kiểm tra bằng chứng kiểm soát nội bộ → kết nối bằng chứng trách nhiệm với các cá nhân liên quan → so sánh các giả thuyết khả dĩ → đưa ra kết luận.

### Output

Target Product tạo ra một output kết hợp giữa **Financial Trace Map** và **Evidence-Based Responsibility Conclusion**. MVP tạo ra phiên bản đơn giản hơn của cùng loại output này: **Simplified Financial Trace Map** và **Simplified Evidence-Based Responsibility Conclusion**.

Evidence-Based Responsibility Conclusion là output quyết định của sản phẩm: người chơi chọn đích danh một cá nhân chịu trách nhiệm chính, và hệ thống trả về kết luận theo 1 trong 4 mức, được xác định bằng một bảng quyết định kết hợp giữa tính chính xác của lựa chọn nghi phạm và điểm số tích lũy qua 5 chặng điều tra đầu tiên.

| Chọn đúng nghi phạm? | Điểm 5 chặng | Mức kết luận |
|---|---|---|
| Đúng | ≥ 80 | Mức 1 — Kết luận chính xác |
| Đúng | ≤ 60 | Mức 2 — Kết luận đúng nhưng thiếu vững chắc |
| Sai | ≥ 80 | Mức 3 — Gần đúng, chọn nhầm nhân vật chịu trách nhiệm |
| Sai | ≤ 60 | Mức 4 — Kết luận sai |

Điểm số 5 chặng điều tra — Financial Diagnosis, Transaction Investigation, Reconciliation, Control Investigation và Responsibility Investigation — mỗi chặng đóng góp **20 điểm** nếu người chơi thực hiện đúng bước gating chính của chặng đó.

Việc chọn nghi phạm ở chặng thứ 6, Final Board Review, **không** được cộng vào điểm số này, mà đóng vai trò trục thứ hai của bảng quyết định 4 mức nêu trên. Cách tách bạch này giúp điểm số phản ánh đúng chất lượng của quá trình đọc bằng chứng, độc lập với việc lựa chọn cuối cùng có chính xác hay không, đồng thời giữ cho engine chấm điểm vẫn thuần túy rule-based, không cần một công thức trọng số phức tạp.

**Financial Trace Map** là bằng chứng dẫn tới kết luận nêu trên, thể hiện toàn bộ chuỗi thông tin mà người chơi đã sử dụng để đi đến quyết định cuối cùng.

### User Action

Sau khi nhận kết luận, người dùng xem lại chuỗi bằng chứng, nhận biết bằng chứng nào đã hỗ trợ hoặc làm suy yếu giả thuyết của mình, và từ đó hiểu được vì sao một kết luận trách nhiệm được hình thành từ nhiều nguồn thông tin khác nhau — bao gồm cả những trường hợp kết luận đúng người nhưng lập luận chưa vững, hoặc lập luận tốt nhưng lựa chọn cuối cùng chưa chính xác.

### Conceptual Flow

```
Người dùng tiếp nhận thông tin
(tài chính, giao dịch, kiểm soát, trách nhiệm)
        ↓
Financial Investigation and Evidence Integration
        ↓
Financial Trace Map
        ↓
Responsibility Conclusion (4 mức)
        ↓
Người dùng xem lại và phản tư về quá trình lập luận
```

## 2. Main Output, Logic, Input và Component

Week 2 sử dụng phương pháp suy ngược từ main output để xác định những gì sản phẩm cần có.

| Main output | Logic cần có | Input cần có | Component cần có |
|---|---|---|---|
| Financial Trace Map | Xác định tín hiệu, truy vết giao dịch, đối chiếu số liệu và kết nối bằng chứng | Financial overview; thông tin giao dịch và vendor; thông tin hợp đồng và thanh toán; bằng chứng kiểm soát | Màn hình Financial Overview; màn hình giao dịch; thẻ bằng chứng; sơ đồ trace map |
| Responsibility Conclusion (4 mức) | So sánh bằng chứng liên quan đến các cá nhân, chọn đích danh một nghi phạm, kết hợp với điểm số 5 chặng để xác định 1 trong 4 mức kết luận | Thông tin vai trò của từng nhân vật; bằng chứng ủy quyền và điều chỉnh hợp đồng; bằng chứng trách nhiệm kiểm soát; điểm số tích lũy của 5 chặng trước | Thẻ nghi phạm; giao diện liên kết bằng chứng; màn hình kết luận hiển thị đồng thời lựa chọn nghi phạm, điểm số và mức kết luận |

Cách tiếp cận này giúp nhóm tránh việc lựa chọn tính năng hoặc giao diện trước khi xác định rõ output và logic cần thiết.

## 3. Initial Required Information

### 3.1. Financial Overview Information

Nhóm thông tin này giúp người chơi xác định một tín hiệu tài chính cần điều tra.

- Ở mức Week 2, thông tin bao gồm: xu hướng doanh thu, lợi nhuận và dòng tiền hoạt động, cùng với tín hiệu **Cash Conversion** = dòng tiền hoạt động / lợi nhuận ròng. Đây là tín hiệu chính của MVP, dựa trên nguyên lý Sloan trong earnings quality: lợi nhuận báo cáo tăng nhưng dòng tiền hoạt động không tăng tương ứng là một dấu hiệu cần điều tra thêm, chưa phải là một kết luận.
- Nhóm thông tin này còn bao gồm chi phí advisory hoặc chênh lệch so với ngân sách nội bộ.
- Ở Target Product, bổ sung một tín hiệu thứ hai gọi là **DSRI** (Days Sales in Receivables Index), dùng để loại trừ giả thuyết cho rằng vấn đề nằm ở phía doanh thu hoặc khách hàng, từ đó giúp thu hẹp hướng điều tra về phía giao dịch. Tín hiệu này không thuộc phạm vi MVP.

### 3.2. Transaction Information

Nhóm thông tin này giúp người chơi đi từ tín hiệu tài chính đến một giao dịch cụ thể, bao gồm: tên vendor, số tiền vendor nhận được, giá trị hợp đồng và tổng số tiền đã thanh toán. Chuỗi điều tra chính của sản phẩm dẫn đến một vendor cụ thể có tên **Northstar Advisory**.

### 3.3. Contract and Control Information

Nhóm thông tin này giúp đánh giá bản chất của giao dịch, thời điểm thanh toán và các điều kiện kiểm soát nội bộ, bao gồm: mục đích hợp đồng, ngưỡng phê duyệt, ngoại lệ tạm thời, thời điểm thanh toán và tình trạng phê duyệt.

> **Substance over form:** một khoản thanh toán riêng lẻ có thể nằm dưới ngưỡng phê duyệt về mặt hình thức, nhưng nếu nhiều khoản thanh toán như vậy cùng thuộc một hợp đồng duy nhất, người chơi cần đánh giá xem việc chia nhỏ thanh toán có làm vô hiệu mục đích của cơ chế kiểm soát hay không.

### 3.4. Responsibility Evidence

Nhóm thông tin này giúp chuyển câu hỏi từ việc xác định giao dịch nào cần điều tra sang việc xác định ai chịu trách nhiệm chính dựa trên chuỗi bằng chứng, bao gồm: vai trò điều hành, phạm vi trách nhiệm, hồ sơ ủy quyền và lịch sử điều chỉnh hợp đồng.

Vụ việc có 4 nhân vật điều hành:

| Nhân vật | Chức danh |
|---|---|
| Victor | COO |
| Lucas | Investment Director |
| David | CFO |
| Sophia | Head of Internal Control |

MVP chỉ sử dụng 2–3 người trong số này, được thiết kế sao cho mỗi bằng chứng có thể xác nhận hoặc loại trừ một nhân vật cụ thể, thay vì chỉ đơn thuần chỉ ra một người duy nhất ngay từ đầu.

> Khung **Fraud Triangle** (Pressure, Opportunity, Rationalization) được sử dụng như một công cụ tư duy định tính khi xây dựng nội dung bằng chứng và phản hồi cho từng nhân vật. Khung này **không** phải là một trục chấm điểm riêng biệt, và không ảnh hưởng đến bảng quyết định 4 mức đã mô tả ở mục 1.

## 4. Core Process Type

**Core process:** Financial Investigation and Evidence Integration. Quá trình này không nhằm tạo ra càng nhiều phép tính càng tốt, mà chỉ sử dụng phép tính khi nó phục vụ trực tiếp cho một bước lập luận cụ thể.

- Ở mức khái quát, core process đi theo trình tự: thông tin → diễn giải → bằng chứng → giả thuyết → đánh giá lại → kết luận.
- Ở mức vận hành, vòng lặp điều tra gồm 6 bước: quan sát, điều tra, phân tích, kết nối, đánh giá lại và kết luận.

**Bộ công cụ tài chính gắn với bước điều tra và phân tích:**

| # | Công cụ | Phạm vi | Vai trò |
|---|---|---|---|
| 1 | Cash Conversion | MVP | Phát hiện tín hiệu ban đầu |
| 2 | DSRI | Target Product | Loại trừ giả thuyết liên quan đến doanh thu |
| 3 | Substance over form | MVP | Đánh giá hiện tượng chia nhỏ thanh toán so với ngưỡng phê duyệt |
| 4 | Fraud Triangle | Định tính, cả hai | Nội dung phản hồi và bằng chứng trách nhiệm, không phải một bước tính điểm riêng |

## 5. Corrected MVP Flow — Full Journey, Reduced Complexity

### 5.1. MVP Definition

MVP được định nghĩa là phiên bản nhỏ nhất vẫn giữ trọn vẹn toàn bộ user journey của sản phẩm, từ khi người chơi nhìn thấy vấn đề tài chính ban đầu cho đến khi đưa ra kết luận trách nhiệm. MVP không dừng lại ở bước Financial Trace, mà giữ đủ tất cả các chặng của Target Product, chỉ đơn giản hóa số lượng dữ liệu, bằng chứng, nghi phạm và logic phân nhánh.

### 5.2. MVP End-to-End Flow

1. Người chơi bắt đầu vụ việc, xem Financial Overview.
2. Xác định một tín hiệu tài chính duy nhất.
3. Truy vết đến giao dịch Northstar.
4. Xem xét một bằng chứng hợp đồng hoặc thanh toán then chốt.
5. Xem xét một bằng chứng kiểm soát then chốt.
6. Xem hồ sơ nghi phạm đã được đơn giản hóa.
7. Kết nối các bằng chứng then chốt.
8. Chọn đích danh người chịu trách nhiệm chính trong số 2–3 nghi phạm.

Sau bước này, hệ thống tính điểm tích lũy của 5 chặng điều tra trên thang 100 điểm, kết hợp với tính chính xác của lựa chọn nghi phạm để trả về 1 trong 4 mức kết luận. Người chơi nhận được Simplified Financial Trace Map, tóm lược lại toàn bộ chuỗi bằng chứng đã sử dụng, cùng phần phản hồi và phản tư về quá trình điều tra của mình.

### 5.3. MVP Table

| Câu hỏi | Câu trả lời |
|---|---|
| Core user need | Kết nối nhiều nguồn thông tin để điều tra một vấn đề tài chính và đưa ra kết luận có căn cứ |
| Core input | Một bộ Financial Overview, một giao dịch Northstar, 1–2 manh mối hợp đồng/thanh toán, một manh mối kiểm soát, 2–3 hồ sơ nghi phạm, cùng một số bằng chứng trách nhiệm |
| Core logic | Tín hiệu dẫn tới giao dịch, giao dịch dẫn tới kiểm tra hợp đồng và kiểm soát, bằng chứng được liên kết với nghi phạm, các giả thuyết được so sánh, điểm số kết hợp với lựa chọn nghi phạm để tạo thành kết luận 4 mức |
| Core output | Simplified Evidence-Based Responsibility Conclusion: chọn đích danh một nghi phạm, điểm số 5 chặng trên thang 100, kết luận 1 trong 4 mức, và Simplified Financial Trace Map |
| Must include | Một hành trình điều tra end-to-end hoàn chỉnh, cơ chế liên kết bằng chứng, bước chọn đích danh người chịu trách nhiệm chính, điểm số 5 chặng, kết luận 4 mức tương ứng |
| Not included yet | Nhiều nhánh điều tra dưới dạng phân nhánh cốt truyện, nhiều bằng chứng mâu thuẫn, đầy đủ 4 hồ sơ nghi phạm, trọng số điểm theo chất lượng bằng chứng, cơ chế mở khóa bằng chứng nâng cao |

### 5.4. MVP Simplification Rules

MVP được đơn giản hóa theo các nguyên tắc sau:

- Chỉ sử dụng một tín hiệu tài chính chính.
- Chỉ có một chuỗi giao dịch chính dẫn tới Northstar.
- Chỉ giữ lại những bằng chứng hợp đồng và kiểm soát thực sự thiết yếu.
- Sử dụng 2–3 hồ sơ nghi phạm thay vì bộ hồ sơ đầy đủ.
- Về mặt logic tính điểm: rule-based thuần túy — mỗi chặng điều tra cộng một điểm số cố định nếu người chơi thực hiện đúng bước gating chính, không có trọng số theo chất lượng bằng chứng, không có cơ chế tính điểm thích ứng.
- Việc mở khóa bằng chứng có thể diễn ra theo trình tự tuyến tính.
- Financial Trace Map chỉ cần hiển thị những liên kết bằng chứng cốt lõi.
- Kết luận cuối cùng yêu cầu chọn đích danh 1 người trong 2–3 nghi phạm, giải thích bằng bằng chứng then chốt, nhận về 1 trong 4 mức kết luận — các mức này chỉ là nhãn phản hồi cho một lượt chơi, không tạo ra những nhánh nội dung cốt truyện khác nhau.
- DSRI và Fraud Triangle không phải là input mà người chơi phải tự tính toán trong MVP, mà chỉ xuất hiện dưới dạng nội dung diễn giải trong phần phản hồi.

### 5.5. Why this MVP is correct

MVP này đáp ứng đầy đủ yêu cầu của một Minimum Viable Product vì có một target user rõ ràng, một core task cụ thể, những input thiết yếu, một logic path chính, một output có ý nghĩa, và một user flow hoàn chỉnh. Phần bị lược giản trong MVP là độ phức tạp của dữ liệu và logic, không phải bản chất của hành trình cốt lõi.

## 6. Target Product Extension

Target Product giữ nguyên hành trình end-to-end của MVP nhưng mở rộng chiều sâu điều tra, cụ thể bổ sung:

- Nhiều tín hiệu tài chính hỗ trợ hơn.
- Dữ liệu thanh toán chi tiết hơn.
- Thông tin về thời điểm và mẫu hình ngưỡng kiểm soát.
- Đầy đủ 4 hồ sơ điều hành.
- Bằng chứng ủng hộ lẫn bằng chứng mâu thuẫn.
- Nhiều bước đánh giá lại giả thuyết.
- Trình tự mở khóa bằng chứng phong phú hơn.
- Cơ chế tính điểm có trọng số theo chất lượng bằng chứng.
- Khả năng mở rộng số lượng mức kết luận vượt quá 4 mức hiện tại.
- Phần phản hồi chi tiết hơn về chất lượng lập luận của người chơi.

> Target Product mở rộng chiều sâu của sản phẩm, nhưng không thay đổi bản chất của product logic đã được xác lập từ MVP.

## 7. In Scope và Out of Scope

### Trong phạm vi MVP

Một vụ việc doanh nghiệp duy nhất là Aster Holdings, một hành trình điều tra hoàn chỉnh, một tín hiệu tài chính chính, một chuỗi giao dịch Northstar, những bằng chứng hợp đồng và thanh toán thiết yếu, những bằng chứng kiểm soát thiết yếu, 2–3 hồ sơ nghi phạm đơn giản hóa, cơ chế kết nối bằng chứng, bước lựa chọn trách nhiệm chính bằng cách chọn đích danh một nghi phạm, điểm số 5 chặng điều tra trên thang 100, kết luận theo 4 mức đã mô tả ở mục 1, một Simplified Financial Trace Map, và phần phản hồi cuối cùng.

### Target Scope (ngoài MVP, vẫn trong định hướng phát triển)

Phân tích đầy đủ giao dịch Northstar, phân tích mẫu hình thanh toán, điều tra kiểm soát chi tiết hơn, đầy đủ 4 hồ sơ điều hành, cơ chế đánh giá lại giả thuyết, một Financial Trace Map phong phú hơn, kết luận trách nhiệm đầy đủ chiều sâu hơn, trọng số điểm theo chất lượng bằng chứng, và số lượng mức kết luận nhiều hơn 4 mức hiện tại.

### Ngoài toàn bộ sản phẩm

Nhiều vụ việc doanh nghiệp độc lập, dữ liệu thị trường theo thời gian thực, sự phụ thuộc vào external API, các vụ việc hoặc phán quyết được sinh tự động bằng AI, chế độ nhiều người chơi, bảng xếp hạng so sánh điểm số giữa nhiều người chơi khác nhau (khác biệt với 4 mức kết luận vốn chỉ áp dụng cho một lượt chơi), nền kinh tế ảo, hệ thống cửa hàng hoặc kho đồ, cơ chế phân nhánh cốt truyện dựa theo điểm số, và cơ chế đăng nhập tài khoản trong giai đoạn MVP.

## 8. Initial Route Hypothesis và Fallback

### Main Technical Route

Ứng dụng web theo hướng code-based, sử dụng React và JavaScript, kết hợp với dữ liệu tĩnh dạng JSON hoặc CSV. Luồng xử lý: dữ liệu vụ việc tĩnh → React component → logic điều tra rule-based → trạng thái bằng chứng → màn hình Financial Trace và màn hình kết luận.

Tuyến này phù hợp vì vụ việc có số lượng hữu hạn, dữ liệu được chuẩn bị trước, logic có thể triển khai theo hướng rule-based, sản phẩm không cần real-time API, và không cần một backend phức tạp cho giai đoạn MVP.

### Fallback

Nếu tuyến kỹ thuật chính gặp rủi ro: giảm số lượng màn hình, giảm số lượng bằng chứng, tuyến tính hóa luồng điều tra, sử dụng dữ liệu tĩnh cục bộ, nhưng vẫn giữ nguyên hành trình end-to-end. Phương án dự phòng có thể là một interactive prototype nếu cần thiết, nhưng vẫn phải cho phép người dùng hoàn thành trọn vẹn chuỗi bước từ tín hiệu tài chính, qua giao dịch và bằng chứng, đến so sánh trách nhiệm, và cuối cùng là kết luận theo 4 mức đã mô tả.

## 9. Responsibility by Output

| Responsibility | Owner | Expected Output | Evidence Location | Consumer / Dependency |
|---|---|---|---|---|
| Integration | Phạm Quỳnh Phương | Cấu trúc repository, sơ đồ phụ thuộc, các tài liệu Week 2 được tích hợp, nhật ký quyết định | Week 2 repository | Toàn nhóm, checkpoint |
| Financial Content và Input | Phạm Triệu Tiến Dũng | Financial overview, cấu trúc giao dịch Northstar, yêu cầu thông tin hợp đồng và kiểm soát | Tài liệu Week 2, chuyển tiếp thành input dictionary ở Week 3 | Gameplay Logic, testing |
| Gameplay và Logic | Nguyễn Minh Hiền | Luồng điều tra MVP, logic chuyển trạng thái rule-based, logic liên kết bằng chứng, bảng quyết định 4 mức và cách tính điểm 5 chặng | Solution structure Week 2, chuyển tiếp thành logic chi tiết ở Week 4 | Development, UI/UX |
| Storyline và Output | Tôn Khánh Ngọc | Bối cảnh vụ việc, cấu trúc nghi phạm, yêu cầu bằng chứng trách nhiệm, nội dung phản hồi cho 4 mức kết luận | Tài liệu Week 2 và Week 3 | UI/UX, final output |
| UI/UX | Đinh Thị Minh Khuê | Luồng màn hình bao trùm toàn bộ hành trình MVP và cách hiển thị điểm số cùng kết luận 4 mức | Prototype hoặc tệp thiết kế | Development, testing |

Các workstream có quan hệ phụ thuộc theo trình tự: Financial Content và Input → Gameplay và Logic → UI/UX → Storyline và Output → Integration. Mỗi workstream phải tạo ra một output được phần khác của sản phẩm sử dụng trực tiếp.

## 10. Conceptual Solution Chain

Chuỗi giải pháp khái niệm: problem direction → user task → desired outcome → main output → core process → MVP end-to-end flow → phần mở rộng của Target Product.

Áp dụng cho The Last Heir: khó khăn trong việc tích hợp thông tin → nhiệm vụ điều tra một vấn đề tài chính → xây dựng lập luận dựa trên bằng chứng → Financial Trace Map kết hợp với Responsibility Conclusion 4 mức → core process Financial Investigation and Evidence Integration → hoàn thành một hành trình điều tra end-to-end được đơn giản hóa → mở rộng dữ liệu, bằng chứng và phân nhánh ở Target Product.

## 11. Week 2 to Week 3 Handoff

Week 3 không cần phát minh lại product direction. Nhiệm vụ của Week 3 là kiểm tra liệu những input cần thiết cho toàn bộ hành trình MVP có đủ khả thi hay không.

Week 3 cần cụ thể hóa tối thiểu 8 nội dung sau: input của Financial Overview, input của giao dịch Northstar, bằng chứng hợp đồng và thanh toán thiết yếu, bằng chứng kiểm soát thiết yếu, thông tin nghi phạm đã đơn giản hóa, bằng chứng liên kết trách nhiệm, các quy tắc kiểm tra dữ liệu, và dữ liệu mẫu đủ để vận hành trọn vẹn MVP — bao gồm cả việc kiểm chứng ngưỡng điểm 80/100 dùng trong bảng quyết định 4 mức.

**Câu hỏi trung tâm của Week 3:** xác định những input, nguồn dữ liệu và bằng chứng nào là tối thiểu nhưng đủ để người chơi đi từ tín hiệu tài chính ban đầu đến kết luận trách nhiệm theo đúng 4 mức đã thiết kế trong MVP.

## 12. End-of-Week Checklist

Nhóm đã hoàn thành: kế thừa problem direction từ Week 1, xác định cụ thể target user, làm rõ core user task, xác định desired outcome, xác định main visible output bao gồm hệ thống kết luận 4 mức, lựa chọn một product pattern chính, xây dựng cấu trúc User–Input–Process–Output–User Action, suy ngược main output thành logic/input/component, xác nhận MVP là một phiên bản end-to-end thu nhỏ của toàn bộ sản phẩm với một user flow hoàn chỉnh, làm rõ phạm vi trong và ngoài scope, xác lập tuyến kỹ thuật cùng phương án dự phòng có căn cứ, và gắn trách nhiệm với expected output cho từng thành viên.

Phần feedback và revision sau Checkpoint 2 sẽ được cập nhật khi có kết quả.

Week 3 sẽ kiểm tra mức độ sẵn sàng của input cho toàn bộ hành trình MVP, trước khi Week 4 xây dựng chi tiết financial logic, quy tắc điều tra và các bước chuyển trạng thái.
