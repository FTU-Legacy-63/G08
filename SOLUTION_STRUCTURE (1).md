# The Last Heir — Solution Structure

> Học phần: **NHA408E**  
> Nhóm: **G08**

# WEEK 2 — SOLUTION STRUCTURE

## 1. User → Input → Process → Output → User Action

### User

Sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh đã có kiến thức tài chính cơ bản.

### Input

Người dùng tiếp cận dữ liệu tài chính tổng hợp của Aster Holdings, thông tin giao dịch chi tiết, hợp đồng, dữ liệu thanh toán, quy tắc kiểm soát và các tài liệu liên quan đến trách nhiệm của những cá nhân trong case.

### Process

Người dùng sàng lọc thông tin, xác định vấn đề đáng điều tra, truy vết xuống giao dịch liên quan, đối chiếu các nguồn, thực hiện các phân tích cần thiết, kết nối bằng chứng, đánh giá các giả thuyết và đưa ra kết luận.

### Output

Sản phẩm hoàn chỉnh tạo ra:

> **Financial Trace Map + Evidence-Based Responsibility Conclusion**

### User Action

Người dùng xem lại investigation chain, nhận diện những bằng chứng mạnh hoặc yếu và hiểu cách một kết luận tài chính được xây dựng từ nhiều nguồn thông tin khác nhau.

Luồng tổng quát:

```text
USER
        ↓
Financial and Control Information
        ↓
Financial Investigation and Evidence Integration
        ↓
Financial Trace Map
        ↓
Responsibility Conclusion
        ↓
Review and Reflect on the Reasoning Process
```

---

## 2. Initial Required Information

Thông tin cần thiết cho sản phẩm được chia thành bốn nhóm chính.

### Financial Overview Information

Nhóm thông tin này cung cấp bức tranh ban đầu về tình hình tài chính của Aster Holdings và giúp người dùng xác định vấn đề nào cần được ưu tiên điều tra.

Các thông tin có thể bao gồm các chỉ tiêu tài chính tổng hợp, biến động qua thời gian và những dấu hiệu cần xem xét thêm.

### Transaction Information

Sau khi xác định một vấn đề đáng chú ý, người dùng cần tiếp cận dữ liệu chi tiết hơn để xác định giao dịch, khoản thanh toán hoặc đối tượng cụ thể tạo ra vấn đề.

Trong case hiện tại, investigation chain chính dẫn đến giao dịch Northstar.

### Contract and Control Information

Nhóm thông tin này cung cấp cơ sở để đối chiếu giao dịch với hợp đồng, yêu cầu phê duyệt, trách nhiệm chức năng và các quy tắc kiểm soát liên quan.

Mục đích là giúp người dùng đánh giá liệu giao dịch có phù hợp với quy trình và các điều kiện kiểm soát hay không.

### Responsibility Evidence

Trong phần sau của Target Product, người dùng cần các bằng chứng có khả năng liên kết hành động, quyết định hoặc thay đổi đối với những cá nhân cụ thể trong case.

Nhóm thông tin này là cơ sở để chuyển từ câu hỏi:

> “Giao dịch nào cần được điều tra?”

sang:

> “Ai chịu trách nhiệm chính dựa trên bằng chứng?”

Ở Week 2, nhóm chỉ xác định các nhóm thông tin cần thiết cho core flow. Ý nghĩa chính xác, nguồn và cách sử dụng từng dữ liệu sẽ được tiếp tục xác định trong Week 3.

---

## 3. Core Process Type

Core process của sản phẩm là **Financial Investigation and Evidence Integration**.

Quá trình bắt đầu bằng việc người chơi sàng lọc thông tin tài chính để xác định một vấn đề đáng chú ý. Sau đó, người chơi đi từ dữ liệu tổng hợp xuống dữ liệu giao dịch, đối chiếu các nguồn liên quan và thực hiện những phân tích cần thiết để hiểu rõ hơn bản chất của vấn đề.

Khi có thêm thông tin, người chơi phải xác định bằng chứng nào có liên quan đến cùng một investigation chain, đánh giá thông tin mới củng cố hay làm yếu giả thuyết hiện tại và cập nhật Financial Trace.

Trong Target Product, quá trình tiếp tục sang việc đánh giá trách nhiệm của các nghi phạm và kết thúc bằng một Evidence-Based Responsibility Conclusion.

Core process có thể khái quát như sau:

```text
Screen
   ↓
Drill Down
   ↓
Reconcile
   ↓
Analyse
   ↓
Connect Evidence
   ↓
Reassess Hypothesis
   ↓
Conclude
```

Calculation không phải một core process độc lập. Các phép tính chỉ được sử dụng khi chúng giúp người chơi phát hiện vấn đề, so sánh dữ liệu, kiểm tra một giả thuyết hoặc hỗ trợ một evidence link.

Giá trị của sản phẩm nằm ở quá trình:

```text
Information
    ↓
Interpretation
    ↓
Evidence
    ↓
Conclusion
```

---

## 4. MVP Flow

Problem Direction của nhóm là Information Integration. Vì vậy, MVP cần kiểm chứng xem người dùng có thể đi từ một dấu hiệu tài chính ban đầu đến một giao dịch cụ thể và kết nối nhiều nguồn thông tin để xây dựng một Financial Trace hay không.

MVP tập trung vào nhánh:

```text
Financial Overview
        ↓
Identify a Financial Signal
        ↓
Drill Down
        ↓
Identify Northstar
        ↓
Reconcile Relevant Information
        ↓
Analyse the Transaction
        ↓
Build Financial Trace
        ↓
Explain Why Further Investigation Is Required
```

Main output của MVP là:

> **Northstar Financial Trace**

Người dùng phải thể hiện được cách họ đi từ dữ liệu tổng hợp của Aster Holdings đến giao dịch Northstar và giải thích vì sao giao dịch này cần được điều tra sâu hơn.

MVP kết thúc tại đây và chưa yêu cầu người dùng xác định thủ phạm.

Việc thu hẹp này cho phép nhóm kiểm chứng trực tiếp core value của sản phẩm trước khi mở rộng sang control investigation, suspect comparison và accusation.

---

## 5. Target / Fallback / Out of Scope

### Target Scope

Target Product là phiên bản đầy đủ mà nhóm hướng đến hoàn thành vào cuối dự án.

Sau khi xây dựng Financial Trace của Northstar, người chơi tiếp tục phân tích các bằng chứng liên quan đến quy trình kiểm soát và trách nhiệm của bốn nhân vật chính:

- Victor;
- Lucas;
- David;
- Sophia.

Người chơi phải so sánh các giả thuyết, đánh giá bằng chứng hỗ trợ và phản biện, điều chỉnh kết luận khi có thông tin mới và cuối cùng đưa ra một Evidence-Based Responsibility Conclusion.

Target flow:

```text
Financial Screening
        ↓
Northstar Financial Trace
        ↓
Control Investigation
        ↓
Suspect Comparison
        ↓
Evidence Integration
        ↓
Hypothesis Revision
        ↓
Responsibility Conclusion
```

Các yếu tố gameplay như timer, evidence unlocking hoặc interaction nâng cao chỉ được bổ sung nếu chúng hỗ trợ trực tiếp investigation flow và phù hợp với thời gian phát triển.

### Fallback Scope

Nếu xuất hiện rủi ro về kỹ thuật hoặc thời gian, nhóm vẫn giữ Financial Trace làm core flow nhưng giảm số lượng tài liệu, bước tương tác và cơ chế gameplay.

Fallback vẫn phải cho phép người dùng:

```text
Financial Signal
        ↓
Suspicious Transaction
        ↓
Relevant Evidence
        ↓
Financial Trace
        ↓
Evidence-Based Interpretation
```

Fallback không được trở thành tập hợp các màn hình hoặc câu hỏi độc lập không tạo thành một nhiệm vụ hoàn chỉnh.

### Out of Scope

Các nội dung không phục vụ investigation chain hiện tại được loại khỏi phạm vi dự án, bao gồm:

- nhiều case doanh nghiệp độc lập;
- dữ liệu thị trường thời gian thực;
- AI-generated cases;
- multiplayer;
- leaderboard;
- virtual economy;
- shop hoặc inventory;
- hệ thống gamification phức tạp không trực tiếp hỗ trợ learning outcome.

---

## 6. Initial Route Hypothesis

Lộ trình kỹ thuật ban đầu là **Code-Based Web Application sử dụng React/JavaScript và dữ liệu tĩnh**.

Lựa chọn này phù hợp vì sản phẩm có một interaction flow hữu hạn, dữ liệu case có thể được chuẩn bị trước và người dùng cần tương tác trực tiếp với thông tin, bằng chứng và Financial Trace.

MVP không yêu cầu backend phức tạp hoặc dữ liệu thời gian thực. Ưu tiên của technical route là chứng minh được core flow và main output trước khi bổ sung các chức năng hỗ trợ.

Nếu việc triển khai đầy đủ gặp rủi ro, fallback technical route là một interactive prototype kết hợp với logic được tài liệu hóa rõ ràng.

Dù sử dụng route nào, sản phẩm vẫn phải cho phép người dùng hoàn thành cùng một core task và nhận được cùng một main output.

---

## 7. Responsibility by Output

| Responsibility | Owner | Visible Output | Consumer / Dependency |
|---|---|---|---|
| Integration | Phạm Quỳnh Phương | Repository structure, integrated product flow, dependency map, decision log và phiên bản tổng hợp cuối của các tài liệu | Toàn nhóm, checkpoint và final demo |
| Financial Content & Input | Phạm Triệu Tiến Dũng | Financial Overview Structure, Northstar transaction structure, contract/control information structure và danh sách financial evidence cần cho investigation chain | Gameplay Logic, UI/UX và testing |
| Gameplay & Logic | Nguyễn Minh Hiền | Investigation Flow Specification, quy tắc chuyển trạng thái, cách evidence được mở và cập nhật Financial Trace | Development, UI/UX và feedback design |
| Storyline & Output | Tôn Khánh Ngọc | Aster Holdings case context, suspect structure, nội dung evidence và cấu trúc Evidence-Based Responsibility Conclusion | UI/UX, demo và final report |
| UI/UX | Đinh Thị Minh Khuê | Screen flow từ Financial Overview đến Financial Trace, bố cục evidence và prototype interaction sử dụng dữ liệu thực của case | Development, user testing và final demo |

Các trách nhiệm trên không phải những module độc lập. Mỗi output phải được một phần khác của sản phẩm sử dụng.

```text
Financial Content & Input
        ↓
provides financial information and evidence
        ↓
Gameplay & Logic
        ↓
defines how users investigate and connect evidence
        ↓
UI/UX
        ↓
turns the process into an interactive flow
        ↓
Storyline & Output
        ↓
forms the final explanation and conclusion
        ↓
Integration
        ↓
connects all outputs into one working product
```

---

## Conceptual Solution Chain

```text
User Task
    ↓
Main Output
    ↓
Core Process
    ↓
MVP Flow
    ↓
Target Scope
```

Áp dụng cho The Last Heir:

```text
Investigate a Financial Problem
        ↓
Financial Trace Map
        ↓
Financial Investigation and Evidence Integration
        ↓
Complete One Northstar Financial Trace
        ↓
Extend to Control Investigation and Responsibility Conclusion
```

Cấu trúc này đảm bảo sản phẩm của Week 2 tiếp tục trực tiếp từ problem direction của Week 1 và tạo nền tảng rõ ràng cho việc xác định input, logic và technical implementation ở các tuần tiếp theo.
