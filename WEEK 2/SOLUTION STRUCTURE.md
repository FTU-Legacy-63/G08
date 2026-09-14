# The Last Heir — Solution Structure Tuần 2
> Học phần: **NHA408E** · Nhóm: **08**

## 1. Main Output

Main output đã chốt ở `PROJECT_PROPOSAL.md`:
> Kết quả đối chiếu giữa kết luận người dùng chọn với logic vụ án đúng bao gồm: kết luận đó đúng hay sai, bằng chứng nào người dùng đã dùng đúng, và bằng chứng nào bị bỏ sót hoặc bị tin đồn/suy đoán đánh lừa.

Kết luận và tập bằng chứng mà người dùng tự chọn (mục "Input" ở sơ đồ dưới) là quyết định của người dùng, đưa vào Process — không phải bản thân main output. Main output là kết quả Process trả về sau khi xử lý quyết định đó.

## 2. User to Input to Process to Output to User Action

```
                                                                  User: sinh viên (target user)
                                                                              |
                                                                              v
Input: mở tài liệu vụ án (báo cáo tài chính, sao kê, hợp đồng, tin đồn, tài liệu nội bộ), chọn bằng chứng liên quan, đánh dấu bằng chứng là đáng tin hay không đáng tin, chọn một cách giải thích làm kết luận
                                                                              |
                                                                              v
Process: phân loại độ tin cậy từng bằng chứng, so sánh các cách giải thích khả dĩ dựa trên bằng chứng đã chọn, giải thích kết quả so khớp với logic vụ án đúng
                                                                              |
                                                                              v
Output (main output): kết quả đối chiếu — kết luận người dùng chọn đúng hay sai, bằng chứng nào đã dùng đúng, bằng chứng nào bị bỏ sót hoặc bị tin đồn đánh lừa
                                                                              |
                                                                              v
User action: xem lại đúng những bằng chứng bị bỏ sót hoặc dùng sai, hiệu chỉnh cách đọc bằng chứng cho lần kết luận sau
```

> **Cụ thể hóa theo 3-layer đã chốt (không đổi sơ đồ trên, chỉ nêu rõ "bằng chứng" và "cách giải thích" cụ thể là gì):** ở Tab 1, "bằng chứng" là các biến Beneish (DSRI, SGAI, TATA — MVP; đủ 8 biến — Final) và "cách giải thích" là các hypothesis về loại gian lận. Ở Tab 4, "bằng chứng" là Magnitude/Likelihood theo SOX 404 và "cách giải thích" là kết luận Severity. Ở Tab 6, "kết luận" là thủ phạm + phân loại hành vi, và bước tính Present Value là điểm thưởng chỉ mở khóa khi kết luận đó đúng.

## 3. Initial Required Information

Thông tin tối thiểu cần có gồm một tình huống bất thường tài chính doanh nghiệp cụ thể liên quan đến nghi vấn gian lận của 1 nhân viên trong trò chơi, hai đến ba cách giải thích khả dĩ cho bất thường đó, và năm đến tám mục bằng chứng.

Mỗi mục bằng chứng cần gắn ba nhãn: nguồn của nó (báo cáo tài chính, hồ sơ giao dịch, tài liệu nội bộ, thông tin công khai, hoặc tin đồn chưa kiểm chứng), mức độ tin cậy thật theo thiết kế của nhóm, và cách giải thích mà nó ủng hộ.

Ngoài ra cần một số bằng chứng gây nhiễu, tức các thông tin có vẻ liên quan nhưng không ủng hộ cách giải thích đúng, cùng với logic vụ án đúng xác định chuỗi bằng chứng nào dẫn tới kết luận chính xác.

Đây là input ở mức khởi tạo, chưa cần đầy đủ số liệu tài chính thật. Ý nghĩa, nguồn gốc và giả định chi tiết của từng thông tin sẽ được xử lý ở Tuần 3.

> **Cụ thể hóa theo 3-layer đã chốt:** "năm đến tám mục bằng chứng" nay được phân bổ theo layer — Layer 1 dùng Revenue/Net Income/OCF/AR/SG&A/Total Assets 2 kỳ (MVP) hoặc thêm Intangible/PP&E/Depreciation/Debt/Current Assets (Final); Layer 2 dùng giá Northstar thực trả, giá thị trường hợp lý, Materiality Threshold, tỷ lệ giao dịch dưới ngưỡng phê duyệt; Layer 3 dùng hồ sơ Fraud Triangle của nghi phạm. Chi tiết đầy đủ (kiểu dữ liệu, đơn vị, ví dụ) nằm ở `week3/input-dictionary.md`.

## 4. Core Process Type

Quy trình gồm ba loại cụ thể.

Loại thứ nhất là phân loại. Với mỗi bằng chứng người dùng chọn, hệ thống so với mức tin cậy thật để xác định người dùng phân loại đúng hay sai giữa đáng tin và suy đoán.

Loại thứ hai là so sánh. Hệ thống so sánh tập bằng chứng người dùng chọn với từng cách giải thích khả dĩ, xác định giải thích nào được ủng hộ mạnh nhất bởi đúng các bằng chứng đáng tin.

Loại thứ ba là giải thích. Khi người dùng nộp kết luận, hệ thống trả về lý do khớp hoặc lệch với logic vụ án đúng, chỉ rõ bằng chứng nào đã dùng đúng và bằng chứng nào bị bỏ sót hoặc bị tin đồn đánh lừa.

> **Cụ thể hóa theo 3-layer đã chốt:** loại thứ nhất (phân loại) ứng với việc so từng biến Beneish với benchmark ngành ở Layer 1 và tra ma trận Likelihood × Magnitude ở Layer 2; loại thứ hai (so sánh) ứng với việc dùng DSRI/SGAI để loại trừ hoặc giữ lại hypothesis ở Layer 1; loại thứ ba (giải thích) ứng với phản hồi gating question ở cả ba layer, và ở Layer 3 còn thêm điều kiện: bước giải thích/tính Present Value chỉ chạy được sau khi kết luận thủ phạm đúng.

## 5. MVP Flow

Luồng hoàn chỉnh và nhỏ nhất có thể chạy từ đầu đến cuối, gồm năm bước:

**Bước 1: Mở tài liệu vụ án.** Người dùng mở năm đến tám tài liệu của vụ án qua Document Viewer và News/Rumor Feed.

**Bước 2: Chọn và đánh giá bằng chứng.** Người dùng chọn các bằng chứng cho là liên quan, và đánh dấu từng bằng chứng là đáng tin hoặc không đáng tin.

**Bước 3: Chọn kết luận.** Người dùng chọn một trong hai đến ba cách giải thích làm kết luận.

**Bước 4: Hệ thống đối chiếu.** Hệ thống so khớp lựa chọn với logic vụ án đúng, trả về kết quả đúng hoặc sai, kèm bằng chứng nào đã dùng đúng và bằng chứng nào bị bỏ sót hoặc bị nhiễu.

**Bước 5: Xem lại và đối chiếu.** Người dùng xem lại kết luận đúng, tự đối chiếu với lựa chọn của mình.

Kiểm tra lại luồng theo bốn tiêu chí:

- Người dùng có thể hoàn thành một lần kết luận đầy đủ — có, ở bước 1 đến 4.
- Kết quả có thể giải thích được — có, ở bước 4.
- Lựa chọn có làm thay đổi trạng thái — có, vì việc đánh dấu bằng chứng ở bước 2 thay đổi tập bằng chứng dùng để so khớp.
- Bước sau có phụ thuộc bước trước — có, vì kết luận ở bước 4 phụ thuộc vào bằng chứng đã chọn ở bước 2.

> **Cụ thể hóa theo 3-layer đã chốt (MVP không đổi, vẫn là nhánh Financial Trace/Layer 1 rút gọn):** ở Tab 1, "tài liệu vụ án" (Bước 1) là bảng dữ liệu tài chính 2 kỳ; "chọn và đánh giá bằng chứng" (Bước 2) là tính DSRI/SGAI/TATA; "chọn kết luận" (Bước 3) là trả lời hai câu hỏi gating (biến lệch nhiều nhất; dùng DSRI để loại trừ hypothesis); "hệ thống đối chiếu" (Bước 4) là chấm 15 điểm gốc (5+5+5) kèm giải thích. Bước 5 giữ nguyên như mô tả.

## 6. Target, Fallback và Out of Scope

**Target Scope**: Phiên bản khả thi dự kiến cho Tuần 6 và Tuần 7, gồm một vụ án với đầy đủ năm đến tám bằng chứng và hai đến ba cách giải thích cùng logic vụ án đúng, Document Viewer và News/Rumor Feed hiển thị toàn bộ tài liệu, cơ chế chọn và đánh dấu bằng chứng không nhất thiết phải kéo thả, và cơ chế so khớp kết luận với logic vụ án đúng kèm phản hồi giải thích.

**Fallback Scope**: Hướng đi nhỏ hơn nếu rủi ro về thời gian hoặc kỹ thuật xảy ra, gồm việc bỏ giao diện kéo thả của Assumption Board Lớp 1 và thay bằng danh sách checkbox chọn bằng chứng, bỏ việc tính phần trăm độ tin cậy theo thời gian thực và chỉ tính một lần khi người dùng nộp kết luận, và bỏ giai đoạn mở khóa tài liệu theo Information Reveal Map để hiển thị toàn bộ tài liệu ngay từ đầu, giữ độ khó ở khâu chọn lọc và đánh giá thay vì khâu thời điểm.

**Out of Scope**: Các phần loại hẳn khỏi giai đoạn này, gồm nhiều vụ án hoặc cốt truyện rẽ nhánh, hệ thống tài khoản và đăng nhập cùng lưu tiến trình giữa các phiên, bảng xếp hạng và chế độ nhiều người chơi, Assumption Board Lớp 2 với hint economy nâng cao, và việc tự sinh vụ án bằng AI hoặc dùng dữ liệu tài chính thật từ doanh nghiệp hoặc ngân hàng.

> **Cụ thể hóa theo 3-layer đã chốt (Target/Fallback/Out of Scope không đổi, chỉ nêu rõ layer nào rơi vào mục nào):** trong Target Scope, "năm đến tám bằng chứng" của Layer 1 nay là đủ 8 biến Beneish + M-Score; Layer 2 (COSO + SOX 404 Severity) giữ nguyên như đã chốt; Layer 3 (Fraud Triangle + Present Value thiệt hại 3 năm) là điểm thưởng, không bắt buộc để hoàn thành game. Trong Fallback Scope, nếu rủi ro xảy ra, Layer 1 dừng ở MVP 3 biến (không mở đủ 8 biến), và Layer 3 bỏ bước tính Present Value nhiều kỳ, chỉ dùng trực tiếp Magnitude làm con số thiệt hại.

## 7. Initial Route Hypothesis

Route chính là **Code based web** theo hướng interactive flow, vì main output đòi hỏi trạng thái thay đổi theo lựa chọn của người dùng, tức việc chọn bằng chứng ảnh hưởng đến kết luận, nên cần tương tác thực chứ không chỉ xem tĩnh, phù hợp với ba loại process ở mục 4.

Route dự phòng là **Prototype cộng logic file**, ví dụ một bản Figma có thể bấm được kèm một file quy tắc viết tay mô tả cách chấm điểm, dùng nếu phần code tương tác không kịp hoàn thành.

Dữ liệu vụ án, gồm bằng chứng, cách giải thích và logic vụ án đúng, sẽ lưu dưới dạng file cấu trúc tĩnh như JSON hoặc bảng, không cần database vì Target Scope chỉ có một vụ án.

## 8. Responsibility by Output

| Responsibility    | Owner                | Visible output                                                                                                                                       | Consumer / dependency                     |
| ----------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Input owner       | Phạm Triệu Tiến Dũng | Danh sách bằng chứng vụ án gồm nguồn, độ tin cậy thật, cách giải thích nó ủng hộ, và bộ bằng chứng gây nhiễu                                         | Logic owner, Interface owner, README      |
| Logic owner       | Nguyễn Minh Hiền     | Bảng công thức mô tả cách phân loại từng bằng chứng, cách so sánh các cách giải thích, và logic vụ án đúng dùng để so khớp                           | Output owner, Integration owner, kiểm thử |
| Output owner      | Tôn Khánh Ngọc       | Định nghĩa cụ thể nội dung phản hồi ở bước giải thích, gồm thông điệp đúng hoặc sai, bằng chứng bị bỏ sót hoặc bị nhiễu, và trình tự hé lộ thông tin | Interface owner, demo                     |
| Interface owner   | Đinh Thị Minh Khuê   | UI được phát triển từ layout ban đầu thành interactive prototype bằng *Unity + C# (VS Code)*, gồm screen structure, page navigation và các interaction state cơ bản. Prototype này là lớp giao diện để tích hợp input, financial logic và output của game ở các tuần tiếp theo.                                       | User review, demo                         |
| Integration owner | Phạm Quỳnh Phương    | Run path nối input, logic, output và interface thành một luồng chạy được, cùng dependency map giữa bốn phần trên                                     | Cả nhóm, checkpoint                       |

> **Cụ thể hóa theo 3-layer đã chốt (bảng và owner không đổi, chỉ nêu rõ "bằng chứng"/"công thức"/"phản hồi" cụ thể gồm gì):** với Input owner, "danh sách bằng chứng" nay gồm dữ liệu tài chính 2 kỳ, dữ liệu giao dịch Northstar và hồ sơ Fraud Triangle. Với Logic owner, "bảng công thức" nay gồm công thức Beneish, ma trận Severity SOX 404, và công thức Present Value. Với Output owner, "nội dung phản hồi" nay gồm phản hồi cho từng gating question ở cả ba tab. Chi tiết đầy đủ nằm ở `week3/input-dictionary.md`, `week3/sources.md` và `week3/data-flow.md`.
