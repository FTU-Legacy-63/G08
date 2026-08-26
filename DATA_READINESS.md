# The Last Heir — Checkpoint Tuần 3

> Học phần: **NHA408E**
> Nhóm: **G08**

> **Câu hỏi trung tâm:** Sản phẩm cần thông tin gì để hoạt động, thông tin đó đến từ đâu, và có đủ khả thi để sử dụng hay không?

Tuần 3 không phải một tuần data engineering. Mục tiêu là đảm bảo input, source và sample data đủ rõ để **nhánh Financial Trace** (MVP đã chốt ở Week 2) có thể được xây dựng và kiểm tra logic, trước khi Week 4 biến các input này thành financial logic hoàn chỉnh.

Tài liệu này cụ thể hóa ba trong bốn nhóm thông tin đã được xác định ở `SOLUTION_STRUCTURE.md` (Week 2) — **Financial Overview Information**, **Transaction Information**, **Contract and Control Information** — thành input dictionary, source và data flow thật. Nhóm thứ tư, **Responsibility Evidence** (bằng chứng liên kết trách nhiệm của Victor, Lucas, David, Sophia), thuộc Target Product và cố tình chưa được cụ thể hóa ở Tuần 3, đúng với Target/Fallback/Out of Scope đã chốt ở Week 2.

---

## 1. Operational Data và Problem Evidence

Nhóm phân biệt rõ hai loại thông tin, đúng như nguyên tắc đã đặt ra ở tài liệu hướng dẫn Tuần 3:

**Operational data — dữ liệu để sản phẩm chạy** (100% do nhóm tự tạo, mô phỏng Aster Holdings, không liên quan doanh nghiệp thật):

- `revenue`, `net_income`, `ocf` theo quý: Chạy phép tính Earnings Quality (OCF/NI).
- `vendor_cost_ratio`, `vendor_name`:Chạy bước Drill Down xác định Northstar Advisory.
- `contract_*` (6 field): Thuộc **Contract and Control Information** (Solution Structure Week 2), chạy Financial Trace ở lớp hợp đồng.

**Problem evidence — bằng chứng chứng minh vấn đề có căn cứ thật** (không dùng để tính toán, chỉ dùng để biện minh cho thiết kế):

- Satyam Computer Services (The Guardian):Xác nhận hiện tượng "BCTC khỏe nhưng economic reality yếu hơn" là có thật.
- Pareteum (U.S. DOJ): Xác nhận logic Revenue Recognition Red Flag.
- GAO-03-678G / GAO-04-87G: Xác nhận Payment Structuring là hành vi có thật và bị cấm rõ ràng, đồng thời cung cấp nguyên tắc "signal cần context, chưa phải bằng chứng buộc tội".
- Damodaran Online, CSIMarket: Xác nhận benchmark OCF/NI, DSO có căn cứ học thuật, dù ngưỡng cụ thể trong game là do nhóm tự đặt.

---

## 2. Input Dictionary

| Input name | Meaning | Type | Unit | Example | Valid range | Source/owner |
|---|---|---|---|---|---|---|
| revenue | Doanh thu hợp nhất Aster Holdings theo quý | number | Tỷ đồng | 165 | > 0 | Team-created / Dũng |
| net_income | Lợi nhuận ròng sau thuế, cùng kỳ với revenue | number | Tỷ đồng | 25 | ≠ 0 | Team-created / Dũng |
| ocf | Dòng tiền từ hoạt động kinh doanh (không gồm đầu tư/tài chính) | number | Tỷ đồng | -3 | có thể âm hoặc dương | Team-created / Dũng |
| vendor_cost_ratio | % chi phí dịch vụ mua ngoài trả cho 1 nhà cung cấp trên tổng chi phí dịch vụ mua ngoài | number | % | 34 | 0–100 | Team-created / Dũng |
| vendor_name | Tên nhà cung cấp chiếm tỷ trọng bất thường | text | — | "Northstar Advisory" | không rỗng | Team-created / Dũng |
| contract_id | Mã hợp đồng | text | — | "HD-2024-0847" | định dạng HD-YYYY-XXXX | Team-created / Dũng |
| contract_service_description | Mô tả dịch vụ ghi trong hợp đồng gốc (Lớp 1) | text | — | "tư vấn chiến lược" | không rỗng | Team-created / Ngọc |
| contract_classification | Nhãn phân loại nội bộ gán cho hợp đồng | text | — | "Cấp 2 — dịch vụ vận hành" | thuộc danh sách phân loại đã định nghĩa | Team-created / Ngọc |
| approver_code | Mã nhân viên phê duyệt hợp đồng | text | — | "EMP-0231" | định dạng EMP-XXXX | Team-created / Ngọc |
| contract_value_total | Tổng giá trị hợp đồng | number | Tỷ đồng | 500 | > 0 | Team-created / Dũng |
| contract_signed_date | Ngày ký hợp đồng | date | dd/mm/yyyy | 01/08/2026 | không ở tương lai so với thời điểm hiện tại trong game | Team-created / Dũng |

**Missing value handling:** nếu bất kỳ field nào bị thiếu, hệ thống không thực hiện phép tính và hiển thị "dữ liệu chưa đầy đủ" thay vì chạy phép tính sai.

*(revenue, net_income, ocf, vendor_* thuộc operational data phục vụ tính toán; các nguồn Satyam, Pareteum, GAO, Damodaran thuộc problem evidence — không xuất hiện trong input dictionary vì không được dùng để tính toán trực tiếp, mà nằm ở Source Register bên dưới.)*


---

## 3. Source Register

| Source | Information used | Purpose | Access date | Limitation | Owner |
|---|---|---|---|---|---|
| Báo cáo tài chính hợp nhất (team-created) | revenue, net_income, ocf theo quý | Operational — tính OCF/NI | Tạo mới | Số liệu giả định, không phải công ty thật | Dũng |
| Bảng % chi phí theo nhà cung cấp (team-created) | vendor_cost_ratio, vendor_name | Operational — bước Drill Down | Tạo mới | Số liệu giả định | Dũng |
| Hồ sơ hợp đồng Northstar (team-created) | contract_* (6 field) | Operational — bước Financial Trace | Tạo mới | Mô tả dịch vụ cố ý mơ hồ ở Lớp 1 (chủ đích, không phải thiếu sót) | Ngọc |
| Satyam Computer Services (The Guardian) | Pattern "BCTC khỏe nhưng economic reality yếu hơn nhiều" | Problem evidence — xác nhận Financial Signal ban đầu là hiện tượng có thật | 26/08/2026 | Chỉ mượn tinh thần chung; Satyam bịa cả doanh thu lẫn số dư tiền mặt, game chỉ dùng lệch giữa lợi nhuận kế toán và dòng tiền thật — hai cơ chế khác nhau | Dũng |
| Pareteum (U.S. DOJ) | Logic "ghi nhận doanh thu sớm từ đơn hàng chưa ràng buộc → AR tăng → DSO tăng" | Problem evidence — xác nhận Revenue Recognition Red Flag có thật | 26/08/2026 | Chỉ mượn logic, không mượn số liệu cụ thể | Dũng |
| GAO-03-678G / GAO-04-87G (verify trực tiếp trên gao.gov) | Case thật: chia $17,000 thành 8 giao dịch/ngày; $30,000 thành 14 giao dịch; $36,984 thành 3 khoản để né ngưỡng $25,000 | Problem evidence — xác nhận Payment Structuring Red Flag là hành vi có thật, bị chính phủ Mỹ cấm rõ ràng | 26/08/2026 | Case thật là mua sắm bằng thẻ công vụ chính phủ, không phải hợp đồng tư vấn doanh nghiệp — chỉ mượn logic threshold avoidance, không mượn bối cảnh ngành | Dũng |
| GAO audit methodology | Nguyên tắc "signal cần context, chưa phải bằng chứng buộc tội" | Problem evidence — xác nhận đúng lý do MVP dừng ở "cần điều tra thêm", khớp Target Scope đã nộp Week 2 | 26/08/2026 | Là nguyên tắc phương pháp, không phải số liệu để tính toán | Dũng |
| Damodaran Online, CSIMarket | Benchmark ngành OCF/NI, DSO | Problem evidence — xác nhận nguyên lý benchmark có căn cứ học thuật | 26/08/2026 | Benchmark cụ thể trong game (≥1, 28–32 ngày) là ngưỡng team tự đặt, không trích trực tiếp một số liệu | Dũng |

*Đã loại khỏi bảng: STK, VGG, TCM, TNG — đo sai chiều dòng tiền so với nhu cầu của game (doanh thu từ khách hàng thay vì chi phí trả nhà cung cấp).*

---

## 4. Real, Sample và Simulated Data — lựa chọn của nhóm

Đối chiếu với bộ câu hỏi ở tài liệu hướng dẫn ("Output có thay đổi đáng kể nếu dùng sample data không?", "Sản phẩm có claim là decision tool thực tế hay chỉ là educational prototype?"), nhóm xác định:

- **The Last Heir** là một educational prototype dựa trên case giả định (Aster Holdings, Victor, Northstar Advisory), không claim là công cụ ra quyết định thực tế — vì vậy **toàn bộ operational data là dữ liệu team tự tạo (simulated)**, không cần real data hay real-time API.
- **Sample data** (`data/sample-data.csv`) được dùng để dựng prototype, kiểm tra flow đọc dữ liệu và chạy early logic test trước khi tích hợp vào gameplay thật.
- **Real data** chỉ xuất hiện gián tiếp, dưới dạng **problem evidence** (Satyam, Pareteum, GAO, Damodaran) để chứng minh rằng các pattern được thiết kế trong game (Earnings Quality gap, Revenue Recognition Red Flag, Payment Structuring) không phải bịa đặt tùy tiện mà phản ánh hiện tượng tài chính có thật.

Lựa chọn này giảm rủi ro kỹ thuật (không phụ thuộc API bên ngoài, đúng với Route Hypothesis "Code-based Web" đã chốt ở Week 2) mà không làm giảm giá trị học tập, vì learning outcome nằm ở khả năng lập luận trên bằng chứng, không nằm ở việc dữ liệu có "thật" hay không.

---

## 5. Data Structure

Dữ liệu lưu dạng **JSON tĩnh**, khớp với Route Hypothesis đã chốt ở Week 2 (Code-based Web, không cần database):

```json
{
  "financial_overview": [
    { "quarter": "Q1", "revenue": 120, "net_income": 15, "ocf": 18 },
    { "quarter": "Q4", "revenue": 165, "net_income": 25, "ocf": -3 }
  ],
  "vendor_data": {
    "quarter": "Q4",
    "vendor_name": "Northstar Advisory",
    "vendor_cost_ratio": 34
  },
  "contract": {
    "contract_id": "HD-2024-0847",
    "service_description": "tư vấn chiến lược",
    "classification": "Cấp 2 — dịch vụ vận hành",
    "approver_code": "EMP-0231",
    "value_total": 500,
    "signed_date": "01/08/2026"
  }
}
```

---

## 6. Data Flow

```text
JSON tĩnh (financial_overview)
    → đọc revenue/net_income/ocf theo quý
    → validate (net_income ≠ 0, không thiếu field)
    → tính ocf/net_income
    → so với benchmark ≥1
    → hiển thị tín hiệu bất thường (Identify a Financial Signal)

JSON tĩnh (vendor_data)
    → đọc vendor_cost_ratio
    → validate (0–100%)
    → so với thang benchmark (20-25% / 40% / 80%)
    → hiển thị mức độ tập trung (Drill Down → Identify Northstar)

JSON tĩnh (contract)
    → đọc contract_classification + approver_code
    → validate (đúng định dạng, không rỗng)
    → hiển thị Lớp 1 (mô tả + phân loại)
    → người chơi chủ động mở Lớp 2 (phụ lục) nếu muốn đào sâu
    → đối chiếu với vendor_data và financial_overview (Reconcile Relevant Information)
    → đánh giá giao dịch Northstar dựa trên 3 nguồn đã đối chiếu (Analyse the Transaction)
    → Build Financial Trace
```

Ba luồng trên khớp trực tiếp với **Core Process** đã chốt ở `SOLUTION_STRUCTURE.md` Week 2 (Screen → Drill Down → Reconcile → Analyse → Connect Evidence → Reassess Hypothesis → Conclude), giới hạn trong đúng đoạn MVP đã nộp Week 2:

```text
Financial Overview → Identify a Financial Signal → Drill Down → Identify Northstar
    → Reconcile Relevant Information → Analyse the Transaction
    → Build Financial Trace → Explain Why Further Investigation Is Required
```

MVP dừng lại ở "Explain Why Further Investigation Is Required" — chưa đi tiếp sang Connect Evidence/Reassess Hypothesis/Conclude, vì các bước này chỉ áp dụng khi mở rộng sang Control Investigation, Suspect Comparison và Responsibility Conclusion (Target Scope).

---

## 7. Input Validation

| Rule | Áp dụng cho field | Xử lý nếu vi phạm |
|---|---|---|
| net_income ≠ 0 | net_income | Không tính OCF/NI, báo lỗi "không thể tính tỷ lệ" |
| vendor_cost_ratio trong khoảng 0–100 | vendor_cost_ratio | Từ chối giá trị, yêu cầu nhập lại (chỉ áp dụng khi build data, không phải người chơi nhập) |
| contract_signed_date không ở tương lai | contract_signed_date | Đánh dấu dữ liệu không hợp lệ |
| contract_value_total > 0 | contract_value_total | Từ chối giá trị âm hoặc bằng 0 |
| approver_code đúng định dạng EMP-XXXX | approver_code | Đánh dấu lỗi định dạng |

---

## 8. Assumptions

| Giả định | Lý do đơn giản hóa | Rủi ro nếu không công khai | Cách công khai |
|---|---|---|---|
| Toàn bộ số liệu tài chính là dữ liệu team tự tạo, không phải công ty thật | Không thể lấy dữ liệu doanh nghiệp thật trong 7 tuần | Người chơi hiểu nhầm đây là case thật | Ghi rõ ở màn hình mở đầu |
| Benchmark OCF/NI ≥ 1 là ngưỡng team tự đặt dựa trên nguyên lý CFA chung | Không có thời gian khảo sát benchmark riêng | Người chơi coi đây là chuẩn mực tuyệt đối | Ghi chú nhỏ: "benchmark tham khảo" |
| Pattern Payment Structuring (chia 500 tỷ thành 28 khoản < 20 tỷ) mượn logic từ case split-purchase thật của GAO, nhưng bối cảnh khác hẳn | Không tìm được case split-purchase trong hợp đồng tư vấn doanh nghiệp cụ thể; nguyên lý threshold avoidance áp dụng chung cho mọi loại kiểm soát nội bộ có ngưỡng phê duyệt | Người đọc hiểu nhầm đây là case doanh nghiệp thật, hoặc nhầm bối cảnh chính phủ với doanh nghiệp tư nhân | Ghi rõ trong tài liệu nhóm: "mượn nguyên lý threshold avoidance từ GAO, không mượn bối cảnh hay số liệu cụ thể" |
| Hợp đồng Northstar cố tình viết mô tả dịch vụ mơ hồ ở Lớp 1 | Thiết kế có chủ đích | Người chơi nghĩ đây là lỗi thiết kế | Không công khai cho người chơi — chỉ ghi trong tài liệu nhóm |
| MVP chỉ kết luận "cần điều tra thêm", không kết luận "Victor có tội" | Theo đúng nguyên tắc GAO — một pattern đáng ngờ (dù giống split-purchase) vẫn chỉ là tín hiệu, cần xem context và tài liệu hỗ trợ trước khi kết luận buộc tội | Nếu bỏ qua nguyên tắc này, MVP dễ bị hiểu sai là "trò chơi buộc tội" thay vì "trò chơi luyện kỹ năng điều tra" | Đây chính là lý do MVP Flow (đã nộp Week 2) dừng ở Financial Trace, chưa có Responsibility Conclusion — nay có thêm căn cứ học thuật (GAO) để giải thích quyết định này không chỉ nhằm giảm tải khối lượng công việc |

---

## 9. Early Logic Test

| Input | Expected process | Expected output | Actual | Issue |
|---|---|---|---|---|
| Q4: revenue=165, net_income=25, ocf=-3 | Tính ocf / net_income | -3/25 = -0.12, dưới benchmark ≥1 → cảnh báo Earnings Quality | *(chưa chạy — cần Hiền thực hiện tính tay hoặc code mẫu)* | *(sẽ ghi nhận nếu kết quả lệch kỳ vọng)* |
| Q4: vendor_cost_ratio=34 | So với thang 20-25%/40%/80% | 34% nằm giữa mức "an toàn" và "cảnh báo", chưa vượt ngưỡng 40% | *(chưa chốt cách hiển thị mức "giữa hai ngưỡng")* | Cần quyết định: giữ 34% và diễn giải "đang tiến gần cảnh báo", hoặc tăng lên 41–42% để vượt hẳn ngưỡng — **chưa chốt, cần quyết định trước Week 4** |

Đây là early logic test đúng nghĩa: nó đã phát hiện một vấn đề thật (dòng 2) cần nhóm quyết định trước khi sang Week 4, chứ không chỉ là bài tập hoàn thiện cho có.

---

## 10. Ownership của Data và Evidence

| Hoạt động | Người phụ trách | Vai trò theo Responsibility by Output (Week 2) |
|---|---|---|
| Xây dựng và verify dữ liệu tài chính (revenue, net_income, ocf, vendor data) | Dũng | Financial Content & Input |
| Tìm, verify và ghi limitation cho toàn bộ 8 source trong Source Register | Dũng | Financial Content & Input |
| Thiết kế schema/cấu trúc chung của 6 field ở lớp hợp đồng | Dũng | Financial Content & Input |
| Quyết định nội dung mô tả dịch vụ và thứ tự hé lộ Lớp 1/Lớp 2 của hợp đồng | Ngọc | Storyline & Output |
| Thiết kế JSON structure và data flow | Dũng | Financial Content & Input |
| Chạy early logic test và xác nhận cách hiển thị vendor_cost_ratio | Hiền *(chưa hoàn thành — xem mục 9 và 13)* | Gameplay & Logic |
| Tích hợp input vào hệ thống chung của sản phẩm | Phương | Integration |

---

## 11. Repo cuối Week 3

```text
docs/
  input-dictionary.md
  sources.md
  data-flow.md
  assumptions.md
data/
  sample-data.csv
```

`data/sample-data.csv` chứa 4 quý dữ liệu tài chính (Q1–Q4), trong đó chỉ Q4 có đầy đủ vendor và contract data — đúng với thiết kế: người chơi chỉ cần đào sâu vào quý có tín hiệu bất thường.

---

## 12. Đóng góp của từng thành viên (Tuần 3)

| Họ tên | Vai trò (Responsibility by Output — Week 2) | Sản phẩm Tuần 3 |
|---|---|---|
| Phạm Triệu Tiến Dũng | Financial Content & Input | Input dictionary (8 field tài chính/vendor/schema hợp đồng), toàn bộ Source Register (8 nguồn, bao gồm verify GAO trực tiếp trên gao.gov), data structure JSON, data flow, sample data |
| Tôn Khánh Ngọc | Storyline & Output | Nội dung 3 field mô tả/phân loại/approver ở Lớp 1, thiết kế chủ đích sự mơ hồ trong mô tả dịch vụ để phục vụ Information Reveal Map |
| Nguyễn Minh Hiền | Gameplay & Logic | Early logic test *(đang thực hiện)*, quyết định cách hiển thị ngưỡng vendor_cost_ratio |
| Phạm Quỳnh Phương | Integration | Tổng hợp 5 tài liệu Week 3 thành evidence thống nhất, đối chiếu với Core Process, MVP Flow và Route Hypothesis đã chốt ở `SOLUTION_STRUCTURE.md` Week 2 |
| Đinh Thị Minh Khuê | UI/UX | Chuẩn bị cách hiển thị dữ liệu (financial_overview, vendor_data, contract) trên Document Viewer và Investigation Dashboard cho Week 4 |

---

## 13. Open Questions cho Week 4

1. Quyết định cách hiển thị `vendor_cost_ratio = 34%`: giữ nguyên và diễn giải "đang tiến gần cảnh báo", hay điều chỉnh lên 41–42% để vượt hẳn ngưỡng 40%? *(cần chốt trước khi build logic thật)*
2. Hiền cần hoàn thành early logic test bằng tay hoặc bằng code mẫu cho cả hai input trong mục 9.
3. Input nào trong `contract_*` thực sự cần thiết cho MVP (nhánh Financial Trace), input nào chỉ phục vụ Target Product — cụ thể là **Responsibility Evidence** cho 4 nghi phạm Victor, Lucas, David, Sophia (đã liệt kê ở `SOLUTION_STRUCTURE.md`, Target Scope)? Hiện `approver_code = EMP-0231` mới chỉ trỏ đến một cá nhân; Control Investigation cho 3 nghi phạm còn lại chưa có input tương ứng và cần được thiết kế ở Week 4/Target Scope, không phải Week 3.
4. Unit và format đã thống nhất (Tỷ đồng, %, dd/mm/yyyy) — cần Khuê xác nhận cách hiển thị các unit này trên giao diện.
5. Assumption nào trong mục 8 có khả năng làm output sai lệch nếu người chơi không đọc kỹ ghi chú công khai?

---

## 14. Feedback từ checkpoint

*Chưa cập nhật — sẽ bổ sung sau khi nhận feedback từ checkpoint Tuần 3.*

## 15. Revision sau checkpoint

*Chưa cập nhật — sẽ bổ sung sau khi nhận feedback từ checkpoint Tuần 3.*

---

## 16. End-of-Week Checklist

- [x] Phân biệt rõ operational data và problem evidence.
- [x] Input dictionary hoàn chỉnh ở mức cần thiết (11 field, đủ unit/type/range).
- [x] Source register có purpose và limitation cho cả 8 nguồn.
- [x] Có sample data (simulated) — `data/sample-data.csv`.
- [x] Assumptions được ghi (5 giả định, kèm cách công khai).
- [x] Data structure đơn giản và khả thi (JSON tĩnh).
- [x] Data flow rõ cho cả 3 nhánh (financial_overview, vendor_data, contract).
- [x] Validation cơ bản được xác định (5 rule).
- [ ] Early logic test — đã thiết kế bảng, **chưa chạy xong** (chờ Hiền).
- [x] Mỗi evidence chính có owner.
- [ ] Repo cập nhật feedback và revision — chờ checkpoint Tuần 3.

> **Week 4 sẽ biến input này thành financial logic hoàn chỉnh, ưu tiên chốt Open Question #1 và #2 trước tiên.**
