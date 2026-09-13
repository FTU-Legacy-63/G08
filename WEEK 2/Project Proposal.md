# The Last Heir — Project Proposal

> Học phần: **NHA408E**
> Nhóm: **G08**

# WEEK 2 — PRODUCT DIRECTION

## 1. Problem Direction

Dự án tiếp tục problem direction được lựa chọn trong Week 1: **Information Integration**.

Sinh viên có kiến thức tài chính cơ bản có thể hiểu từng loại thông tin riêng biệt nhưng gặp khó khăn khi phải kết nối dữ liệu từ nhiều nguồn để giải thích một vấn đề doanh nghiệp. Trong một tình huống mở, thông tin cần thiết có thể nằm ở dữ liệu tài chính tổng hợp, dữ liệu giao dịch, hợp đồng, quy tắc kiểm soát và các tài liệu nội bộ. Không một nguồn riêng lẻ nào cung cấp toàn bộ câu trả lời.

Sau Checkpoint 1, nhóm thu hẹp vấn đề quanh một investigation chain thống nhất:

```
Vấn đề tài chính ban đầu
        ↓
Truy vết giao dịch liên quan (Northstar)
        ↓
Sử dụng các nguồn thông tin khác để xây dựng kết luận
```

Thay vì sử dụng nhiều bất thường tài chính độc lập, người dùng sẽ bắt đầu từ một vấn đề tài chính ban đầu, truy vết đến giao dịch liên quan và tiếp tục sử dụng các nguồn thông tin khác để xây dựng một kết luận.

---

## 2. Target User and User Task

Người dùng mục tiêu là **sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh đã có kiến thức tài chính cơ bản**.

Trong sản phẩm, người dùng phải phân tích một tình huống doanh nghiệp, xác định vấn đề tài chính cần được ưu tiên điều tra, truy vết các giao dịch liên quan, đánh giá các bằng chứng tài chính và kiểm soát, sau đó tổng hợp chúng thành một kết luận có căn cứ.

> Nhiệm vụ trọng tâm không phải là thực hiện càng nhiều phép tính càng tốt. Các phép tính và chỉ số tài chính chỉ được sử dụng khi chúng hỗ trợ việc xác định vấn đề, đánh giá một giả thuyết hoặc kết nối các bằng chứng trong investigation chain.

---

## 3. Desired User Outcome

Sau khi hoàn thành sản phẩm, người dùng được kỳ vọng có khả năng xác định thông tin tài chính nào cần được ưu tiên trong một tình huống có nhiều dữ liệu, đi từ dữ liệu tổng hợp xuống giao dịch và tài liệu chi tiết, đồng thời kết nối các nguồn thông tin đề cập đến cùng một vấn đề.

Người dùng cũng cần biết sử dụng các phép phân tích tài chính như công cụ hỗ trợ lập luận, phân biệt **red flag** với bằng chứng đủ mạnh, điều chỉnh giả thuyết khi xuất hiện thông tin mới và đưa ra kết luận không vượt quá bằng chứng hiện có.

**Desired outcome (tóm gọn):** cải thiện khả năng tổng hợp và lập luận từ thông tin tài chính phân mảnh, thay vì chỉ kiểm tra khả năng ghi nhớ kiến thức hoặc tính toán các chỉ số độc lập.

---

## 4. Product Statement

> **The Last Heir** là một Scenario-Based Financial Investigation Learning Game, trong đó người chơi vào vai người thừa kế của Aster Holdings và phải điều tra một vấn đề tài chính đang diễn ra trong doanh nghiệp. Người chơi bắt đầu từ dữ liệu tài chính tổng hợp, truy vết một giao dịch đáng chú ý liên quan đến Northstar, tiếp tục phân tích các bằng chứng tài chính và kiểm soát, so sánh trách nhiệm của những cá nhân liên quan và cuối cùng đưa ra một kết luận có căn cứ về người chịu trách nhiệm chính.

Sản phẩm sử dụng một case thống nhất để biến việc đọc và phân tích dữ liệu tài chính thành một quá trình điều tra có mục tiêu, trong đó mỗi thông tin mới phải đóng góp vào quá trình xây dựng hoặc điều chỉnh lập luận của người chơi.

**Cụ thể hóa cơ chế** *(không đổi Product Statement, chỉ làm rõ cách vận hành):*

| Nội dung trong Product Statement | Được thực hiện qua |
|---|---|
| Phân tích các bằng chứng tài chính và kiểm soát | **Beneish M-Score** (Layer 1) và **COSO/SOX 404 Severity Assessment** (Layer 2) |
| So sánh trách nhiệm của những cá nhân liên quan và kết luận có căn cứ về người chịu trách nhiệm chính | **Fraud Triangle** và tính tác động tài chính (Layer 3) |

---

## 5. Product Value, Product Form và Product Logic

| Thành phần | Nội dung |
|---|---|
| **Product Value** | Giúp người học kết nối bằng chứng tài chính, bằng chứng kiểm soát và bằng chứng trách nhiệm cá nhân thành một chuỗi lập luận có căn cứ, thay vì chỉ tính từng chỉ số (Beneish, COSO/SOX, Fraud Triangle) một cách độc lập. |
| **Product Form** | Một trò chơi học tập điều tra tài chính theo kịch bản, tổ chức thành ba tab nối tiếp tương ứng ba layer phân tích: Tab 1 — Financial Diagnosis, Tab 4 — Control Investigation, Tab 6 — Final Board Review. |
| **Product Logic** | Quan sát dữ liệu tài chính tổng hợp → sàng lọc bằng Beneish M-Score và loại trừ hypothesis (Layer 1) → đối chiếu bằng chứng kiểm soát theo COSO và đánh giá mức độ nghiêm trọng theo SOX 404 (Layer 2) → áp dụng Fraud Triangle để xác định thủ phạm và tính tác động tài chính (Layer 3) → đưa ra Evidence-Based Responsibility Conclusion. |

> Product form có thể được đơn giản hóa về mặt giao diện hoặc số lượng biến trong quá trình phát triển, nhưng **product value** và **product logic** — đi từ sàng lọc đến kiểm soát đến trách nhiệm — phải được giữ nguyên xuyên suốt.

---

## 6. Main Output

Main output của sản phẩm hoàn chỉnh là:

> **Financial Trace Map kết hợp với Evidence-Based Responsibility Conclusion.**

**Financial Trace Map** thể hiện cách người dùng đi từ vấn đề tài chính ban đầu đến giao dịch cần điều tra và các bằng chứng liên quan. Nó cho thấy những thông tin nào đã được sử dụng và cách chúng liên kết với nhau trong quá trình điều tra.

**Evidence-Based Responsibility Conclusion** là kết luận cuối cùng về cá nhân chịu trách nhiệm chính, được xây dựng dựa trên chuỗi bằng chứng mà người dùng đã thu thập, đánh giá và kết nối.

Main output này phù hợp với problem direction vì nó làm cho quá trình Information Integration trở nên quan sát được. Người dùng không chỉ đưa ra một đáp án cuối cùng mà còn phải thể hiện được cách kết luận đó được hình thành.

Các thành phần như điểm số, timer, evidence cards, hint hoặc narrative ending chỉ đóng vai trò hỗ trợ và không thay thế main output.

### Cách hai khối output được tính ra

Không dùng một công thức trọng số duy nhất; mỗi layer có tiêu chí đúng/sai riêng và đóng góp vào một trong hai khối output:

| Khối output | Được dựng từ |
|---|---|
| Financial Trace Map | Kết quả **Layer 1** (biến sàng lọc nào lệch chuẩn, hypothesis nào bị loại trừ) và **Layer 2** (Component COSO vi phạm, mức Severity theo SOX 404) |
| Evidence-Based Responsibility Conclusion | Kết quả **Layer 3** (thủ phạm được chọn, phân loại hành vi theo Fraud Triangle, và — nếu đủ điều kiện — tác động tài chính Present Value 3 năm) |

Ở phạm vi MVP, chỉ Layer 1 rút gọn được hiện thực (xem mục 8), nên MVP mới chỉ tạo ra một phần của Financial Trace Map, chưa tạo ra Evidence-Based Responsibility Conclusion.

---

## 7. Product Pattern

Sản phẩm sử dụng mô hình **Scenario-Based Financial Investigation Learning Game**. Core interaction được tổ chức quanh một investigation loop:

```
Observe
   ↓
Investigate
   ↓
Analyse
   ↓
Connect
   ↓
Reassess
   ↓
Conclude
```

Người chơi quan sát thông tin ban đầu, xác định hướng cần điều tra, tiếp cận thêm dữ liệu, thực hiện các phân tích cần thiết, kết nối bằng chứng và điều chỉnh giả thuyết trước khi đưa ra kết luận.

- Cấu trúc này **khác với Question Bank** vì các quyết định không tồn tại độc lập mà cùng thuộc một case và ảnh hưởng đến quá trình điều tra tiếp theo.
- Sản phẩm cũng **không phải Calculator hoặc Dashboard** thuần túy vì calculation và data display chỉ là công cụ hỗ trợ một nhiệm vụ điều tra lớn hơn.

Vòng lặp trên hiện được hiện thực qua ba tab nối tiếp:

| Tab | Giai đoạn trong loop | Công cụ sử dụng |
|---|---|---|
| **Tab 1** — Financial Diagnosis | Observe → Investigate → Analyse | Beneish M-Score |
| **Tab 4** — Control Investigation | Connect | COSO / SOX 404 |
| **Tab 6** — Final Board Review | Reassess → Conclude | Fraud Triangle + tác động tài chính |

---

## 8. MVP — Simplified Financial Trace Journey

**Nguyên tắc:** không xây cả ba layer cùng lúc, mà chọn ra một nhánh nhỏ nhất — Financial Trace — vẫn cho người dùng trải nghiệm trọn vẹn một chu trình sàng lọc và loại trừ giả thuyết bằng bằng chứng, từ khi quan sát dữ liệu hai kỳ đến khi thu hẹp investigation chain còn lại một hướng. Phần phân tích kiểm soát (Layer 2) và phần xác định trách nhiệm cá nhân (Layer 3) thuộc Target Product, chưa nằm trong MVP.

**Hành trình người dùng của MVP (Tab 1 — Financial Diagnosis):**

1. Quan sát bảng dữ liệu tài chính hai kỳ liên tiếp: Revenue, Net Income, Operating Cash Flow, Accounts Receivable, SG&A Expense (gồm External Advisory), Total Assets.
2. Tính ba biến sàng lọc Beneish rút gọn: DSRI = (AR₁/Rev₁)/(AR₀/Rev₀); SGAI = (SGA₁/Rev₁)/(SGA₀/Rev₀); TATA = (NI₁−OCF₁)/Total Assets₁.
3. So từng biến với benchmark ngành (DSRI ~1.0–1.2, SGAI ~1.0–1.1, TATA ~-0.05 đến 0.05) để trả lời Gating Q1: biến nào lệch chuẩn nhiều nhất.
4. Dùng kết quả DSRI để trả lời Gating Q2: giữ lại hay loại trừ hypothesis "Aggressive Revenue Recognition".
5. Nhận phản hồi giải thích sau mỗi gating question.
6. Nhận điểm số 15 điểm gốc: 5 điểm tính đúng 3 biến, 5 điểm chọn đúng biến lệch nhiều nhất, 5 điểm dùng đúng DSRI để loại trừ hypothesis.

Kết thúc hành trình, nếu trả lời đúng cả hai gating question, người chơi xác định được SGAI là biến lệch chuẩn nhiều nhất và loại được hypothesis "Aggressive Revenue Recognition", từ đó thu hẹp investigation chain về hướng "Separate Cash-Outflow/Advisory" — hướng sẽ được Target Product tiếp tục truy vết xuống giao dịch Northstar.

**Core output của MVP:** một phần Financial Trace Map giới hạn ở Layer 1 rút gọn, gồm biến lệch chuẩn nhiều nhất, hypothesis bị loại trừ, và điểm số 15 điểm gốc. MVP **chưa** tạo ra Evidence-Based Responsibility Conclusion, vì phần đó phụ thuộc vào Layer 2 và Layer 3.

### MVP so với Target Product

| Khía cạnh | MVP | Target Product |
|---|---|---|
| Phạm vi Beneish | 3 biến rút gọn: DSRI, SGAI, TATA | Đủ 8 biến, tính M-Score và đối chiếu ngưỡng −1.78 |
| Bằng chứng kiểm soát | Chưa đưa vào | COSO rút gọn + SOX 404 Severity Assessment (Magnitude × Likelihood → Material Weakness) |
| Trách nhiệm cá nhân | Chưa đưa vào | Fraud Triangle → chọn thủ phạm → phân loại hành vi |
| Tác động tài chính | Chưa đưa vào | Present Value thiệt hại 3 năm (r = 15%, n = 3), sai số cho phép ±10% |
| Câu hỏi gating | 2 câu: biến lệch nhiều nhất; dùng DSRI loại hypothesis | Mở rộng gating question cho cả Layer 2 và Layer 3 |
| Điểm số | 15 điểm gốc, chỉ cho Layer 1 rút gọn | Điểm tích lũy qua cả ba layer, thang điểm mở rộng hơn 15 |
| Giao diện | Tab 1 — Financial Diagnosis | Đủ ba tab: Tab 1, Tab 4, Tab 6 |
| Output | Một phần Financial Trace Map (Layer 1) | Financial Trace Map đầy đủ + Evidence-Based Responsibility Conclusion |

MVP theo bảng trên vẫn đáp ứng đầy đủ các tiêu chí của một Minimum Viable Product theo tiêu chí ở `week-2.md`: một target user, một core task (sàng lọc và loại trừ giả thuyết bằng Beneish rút gọn), một nhóm input thiết yếu, một logic path chính, một output có ý nghĩa, và một user flow hoàn chỉnh từ đầu đến cuối.

---

## 9. In Scope và Out of Scope

### Trong phạm vi MVP

- Bảng dữ liệu tài chính 2 kỳ và benchmark ngành cho DSRI, SGAI, TATA.
- Công thức tính 3 biến sàng lọc Beneish rút gọn.
- 2 câu hỏi gating (biến lệch nhiều nhất; dùng DSRI loại trừ hypothesis) kèm phản hồi giải thích.
- Thang điểm 15 điểm gốc (5 + 5 + 5).
- Tab 1 — Financial Diagnosis như giao diện duy nhất của MVP.

### Ngoài phạm vi MVP

- Mở rộng đủ 8 biến Beneish và tính M-Score đối chiếu ngưỡng −1.78 (Layer 1 – Final).
- COSO rút gọn và SOX 404 Severity Assessment (Layer 2).
- Fraud Triangle, xác định thủ phạm và tính Present Value thiệt hại 3 năm (Layer 3).
- Financial Trace Map đầy đủ và Evidence-Based Responsibility Conclusion.
- Tab 4 — Control Investigation và Tab 6 — Final Board Review.
- Benchmark ngành mở rộng cho GMI/AQI/SGI/DEPI/LVGI (dự kiến dùng ở Layer 1 – Final).

---

## 10. Technical Route và Fallback

Vì case, investigation chain và số lượng dữ liệu/bằng chứng/lựa chọn đều hữu hạn, sản phẩm có thể sử dụng **dữ liệu được chuẩn bị trước (static data)** và **logic xác định rõ (rule-based)**, không cần phụ thuộc vào dữ liệu thị trường thời gian thực, external API hay backend phức tạp.

> Nhóm chưa chốt cụ thể stack công nghệ trong tài liệu Week 2; đây là phần cần bổ sung ở bước tiếp theo. Nguyên tắc chung: ưu tiên phương án cho phép triển khai công thức Beneish/COSO/Fraud Triangle bằng logic rule-based trên dữ liệu tĩnh, tương thích với phạm vi MVP đã mô tả ở mục 8.

**Fallback** (nếu tuyến chính gặp rủi ro về kỹ thuật hoặc thời gian):

1. Giữ nguyên toàn bộ hành trình Financial Diagnosis của MVP từ đầu đến cuối.
2. Nếu cần, giảm số biến Beneish hiển thị đồng thời hoặc đơn giản hóa cách trình bày benchmark ngành.
3. Không cắt bỏ hai gating question — đây là bước tạo ra core output (biến lệch chuẩn nhiều nhất, hypothesis bị loại trừ) của MVP.

---

## 11. Feasibility and Open Questions

Dự án được xây dựng quanh một case doanh nghiệp, một investigation chain chính và một số lượng hữu hạn dữ liệu, bằng chứng và lựa chọn. Vì vậy sản phẩm có thể sử dụng dữ liệu được chuẩn bị trước và logic xác định rõ mà không cần phụ thuộc vào dữ liệu thị trường thời gian thực, external API hoặc backend phức tạp.

Để kiểm soát phạm vi, **MVP** sẽ tập trung vào nhánh **Financial Trace**, trong đó người dùng bắt đầu từ một vấn đề tài chính, truy vết xuống giao dịch Northstar và xây dựng một chuỗi thông tin giải thích vì sao giao dịch này cần được điều tra tiếp. Phần phân tích trách nhiệm của các nghi phạm và kết luận thủ phạm thuộc **Target Product**.

**Các câu hỏi cần tiếp tục được giải quyết:**

1. Mức độ phức tạp nào của dữ liệu tài chính là phù hợp với người dùng mục tiêu?
2. Cần bao nhiêu nguồn thông tin để người dùng thực sự phải thực hiện Information Integration?
3. Financial Trace Map nên được trình bày như thế nào để phản ánh rõ reasoning process?
4. Những yếu tố gameplay nào hỗ trợ quá trình điều tra mà không làm lu mờ learning outcome?
5. Mức bằng chứng nào là đủ để Target Product cho phép người dùng đưa ra Responsibility Conclusion một cách thuyết phục?
6. Ngưỡng benchmark ngành cho DSRI/SGAI/TATA (và sau này GMI/AQI/SGI/DEPI/LVGI) nên trình bày cho người chơi ở mức chi tiết nào để không lộ đáp án nhưng vẫn đủ để suy luận?
7. Công thức PV ở Layer 3 (r = 15%, n = 3 năm) và sai số cho phép ±10% có đủ khoan dung cho thao tác tính tay của sinh viên không?

---

## 12. Week 2 Completion Criteria

Week 2 được xem là hoàn chỉnh khi tài liệu của nhóm thể hiện rõ ràng: problem direction, target user và user task, desired outcome, product statement cùng cơ chế cụ thể hóa qua ba layer (Beneish, COSO/SOX, Fraud Triangle), product value/form/logic, main output (Financial Trace Map + Evidence-Based Responsibility Conclusion) và cách hai khối này được dựng từ ba layer, một product pattern chính (investigation loop qua 3 tab), một phiên bản MVP end-to-end giới hạn ở Layer 1 rút gọn, phạm vi trong và ngoài MVP, hướng tiếp cận kỹ thuật cùng phương án dự phòng, và danh sách open question chuyển tiếp sang bước tiếp theo.

Bước tiếp theo cần xác định: bộ dữ liệu và logic cụ thể cho Layer 2 (COSO/SOX) và Layer 3 (Fraud Triangle) đã đủ rõ ràng, nhất quán và khả thi để chuyển sang giai đoạn xây dựng hay chưa, cùng với việc chốt stack công nghệ cụ thể cho phần Technical Route.
