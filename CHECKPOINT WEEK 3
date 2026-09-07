# The Last Heir — Checkpoint Tuần 3

> Học phần: **NHA408E**  
> Nhóm: **G08**

# WEEK 3 — INPUT, INFORMATION AND EVIDENCE READINESS

## 1. Mục tiêu của Week 3

Câu hỏi trung tâm của Week 3 là:

> **The Last Heir cần những thông tin nào để tạo ra Financial Trace Map và Evidence-Based Responsibility Conclusion, các thông tin đó được tổ chức như thế nào, và chúng có đủ khả thi để chuyển sang xây dựng logic ở Week 4 hay không?**

Week 1 đã xác định **Information Integration** là problem direction. Week 2 đã xác định sản phẩm là một **Scenario-Based Financial Investigation Learning Game**, với main output là **Financial Trace Map + Evidence-Based Responsibility Conclusion**. Vì vậy, Week 3 không thu thập dữ liệu một cách rộng hoặc độc lập, mà chỉ xác định những input thực sự cần cho investigation chain đã chốt.

Week 3 cụ thể hóa bốn nhóm thông tin từ `SOLUTION_STRUCTURE.md`:

1. **Financial Overview Information**: giúp người chơi phát hiện vấn đề tài chính.
2. **Transaction Information**: giúp người chơi truy từ vấn đề tài chính đến Northstar.
3. **Contract and Control Information**: giúp người chơi đánh giá transaction về bản chất, timing và control.
4. **Responsibility Evidence**: giúp người chơi liên kết transaction structure với các cá nhân có liên quan.

Ba nhóm đầu cần sẵn sàng để xây và kiểm tra **MVP Financial Trace**. Nhóm thứ tư được xác định ở mức input và document structure ngay trong Week 3 để bảo đảm Target Product khả thi, dù chưa cần tích hợp đầy đủ vào MVP.

---

## 2. Data Scope và Data Type

### Operational Data

Operational data là dữ liệu trực tiếp được game sử dụng để tạo ra Financial Trace và Responsibility Conclusion. Toàn bộ operational data của Aster Holdings là **simulated data do nhóm tự xây dựng**, vì sản phẩm là educational prototype và cần một investigation chain có thể kiểm soát, kiểm tra và giải thích được.

Operational data bao gồm:

- dữ liệu tài chính tổng hợp của Aster Holdings;
- dữ liệu vendor và transaction;
- hợp đồng Northstar;
- payment ledger và payment schedule;
- approval policy và temporary exception;
- hồ sơ vai trò của các executive;
- amendment history;
- employee directory và authorization record.

### Problem Evidence

Problem evidence không dùng để tính toán trong game. Nó dùng để chứng minh problem direction của Week 1: sinh viên có thể hiểu từng nguồn thông tin tài chính riêng lẻ nhưng gặp khó khăn khi phải kết nối nhiều nguồn để đưa ra một kết luận có căn cứ.

Problem evidence của nhóm cần được lưu riêng với operational data. Evidence phù hợp có thể gồm:

- quan sát hoặc user test từ Week 1;
- phản hồi của người dùng mục tiêu khi xử lý một case nhiều tài liệu;
- nguồn học thuật hoặc nguồn đào tạo hỗ trợ nhu cầu về evidence integration và financial reasoning.

Các real-world cases hoặc methodological references chỉ được xem là **design references** nếu chúng giúp nhóm xây pattern tài chính hợp lý. Chúng không thay thế evidence về user difficulty.

---

## 3. Input Dictionary

### 3.1. Financial Overview Information

| Input name | Meaning | Type | Unit | Example | Validation | Source / Owner |
|---|---|---|---|---:|---|---|
| revenue_previous | Doanh thu kỳ trước | number | Tỷ VND | 8,200 | > 0 | Simulated / Dũng |
| revenue_current | Doanh thu kỳ hiện tại | number | Tỷ VND | 8,650 | > 0 | Simulated / Dũng |
| net_income_previous | Lợi nhuận ròng kỳ trước | number | Tỷ VND | 720 | khác 0 khi tính OCF/NI | Simulated / Dũng |
| net_income_current | Lợi nhuận ròng kỳ hiện tại | number | Tỷ VND | 760 | khác 0 khi tính OCF/NI | Simulated / Dũng |
| ocf_previous | Operating Cash Flow kỳ trước | number | Tỷ VND | 655 | có thể âm hoặc dương | Simulated / Dũng |
| ocf_current | Operating Cash Flow kỳ hiện tại | number | Tỷ VND | 570 | có thể âm hoặc dương | Simulated / Dũng |
| dso_previous | Days Sales Outstanding kỳ trước | number | ngày | 43 | ≥ 0 | Simulated / Dũng |
| dso_current | Days Sales Outstanding kỳ hiện tại | number | ngày | 47 | ≥ 0 | Simulated / Dũng |
| gross_margin_previous | Gross Margin kỳ trước | number | % | 32 | 0–100 | Simulated / Dũng |
| gross_margin_current | Gross Margin kỳ hiện tại | number | % | 31 | 0–100 | Simulated / Dũng |
| external_advisory_previous | External Advisory cash outflow kỳ trước | number | Tỷ VND | 125 | ≥ 0 | Simulated / Dũng |
| external_advisory_current | External Advisory cash outflow kỳ hiện tại | number | Tỷ VND | 620 | ≥ 0 | Simulated / Dũng |
| external_advisory_budget | Ngân sách External Advisory kỳ hiện tại | number | Tỷ VND | 150 | > 0 | Simulated / Dũng |

Nhóm không sử dụng một universal cut-off như `OCF/NI ≥ 1` để tự động kết luận doanh nghiệp tốt hay xấu. OCF/NI được sử dụng chủ yếu để so sánh giữa hai kỳ và tạo ra một financial signal cần được giải thích.

### 3.2. Transaction Information

| Input name | Meaning | Type | Unit | Example | Validation | Source / Owner |
|---|---|---|---|---:|---|---|
| external_advisory_total | Tổng External Advisory cash outflow kỳ hiện tại | number | Tỷ VND | 620 | phải bằng tổng vendor payments | Simulated / Dũng |
| vendor_name | Tên vendor | text | — | Northstar Advisory | không rỗng | Simulated / Dũng |
| vendor_payment | Số tiền thanh toán cho vendor | number | Tỷ VND | 500 | ≥ 0 | Simulated / Dũng |
| contract_id | Mã hợp đồng Northstar | text | — | HD-2026-0847 | đúng format đã định nghĩa | Simulated / Ngọc |
| contract_value | Tổng giá trị hợp đồng | number | Tỷ VND | 500 | > 0 | Simulated / Dũng |
| total_payment | Tổng tiền đã thanh toán theo Payment Ledger | number | Tỷ VND | 500 | bằng tổng payment rows | Simulated / Dũng |
| payment_count | Số lượng payment | integer | khoản | 26 | số nguyên dương | Simulated / Dũng |
| service_description | Mô tả dịch vụ theo contract | text | — | Strategic Financial Advisory | không rỗng | Simulated / Ngọc |
| transaction_classification | Phân loại transaction | category | — | Strategic Advisory | thuộc danh sách định nghĩa | Simulated / Ngọc |

Vendor breakdown của case:

| Vendor | Payment (Tỷ VND) |
|---|---:|
| Northstar Advisory | 500 |
| Apex Consulting | 46 |
| Orion Legal | 32 |
| Delta Strategy | 24 |
| Other Vendors | 18 |
| **Total** | **620** |

### 3.3. Contract and Control Information

| Input name | Meaning | Type | Unit | Example | Validation | Source / Owner |
|---|---|---|---|---:|---|---|
| strategic_review_required | Transaction có cần strategic review không | boolean | — | true | true/false | Simulated / Dũng |
| approval_threshold | Ngưỡng payment cần approval bổ sung | number | Tỷ VND | 20 | > 0 | Simulated / Dũng |
| exception_duration | Thời gian Temporary Exception | integer | ngày | 30 | > 0 | Simulated / Ngọc |
| exception_limit | Giá trị tối đa được xử lý trong exception | number | Tỷ VND | 40 | ≥ 0 | Simulated / Dũng |
| paid_during_exception | Tổng payment trong exception | number | Tỷ VND | 38 | ≥ 0 | Simulated / Dũng |
| paid_after_exception | Tổng payment sau exception | number | Tỷ VND | 462 | ≥ 0 | Simulated / Dũng |
| payments_below_threshold | Số payment dưới approval threshold | integer | khoản | 23 | 0–payment_count | Simulated / Dũng |
| payment_date | Ngày của từng payment | date | dd/mm/yyyy | — | nằm trong timeline case | Simulated / Dũng |
| payment_amount | Giá trị từng payment | number | Tỷ VND | 18.98 | > 0 | Simulated / Dũng |
| approval_status | Trạng thái approval của payment | category | — | Approved | thuộc danh sách định nghĩa | Simulated / Dũng |

Payment-level data phải đủ để kiểm tra đồng thời:

- tổng 26 payments bằng 500 tỷ VND;
- 23/26 payments dưới 20 tỷ VND;
- 3 payments trên threshold có approval record phù hợp;
- tổng payment trong và sau exception bằng 500 tỷ VND.

### 3.4. Responsibility Evidence

| Input name | Meaning | Type | Example | Validation | Source / Owner |
|---|---|---|---|---|---|
| employee_id | Mã nhân viên | text | EMP-0231 | unique, đúng format EMP-XXXX | Simulated / Ngọc |
| employee_name | Tên executive | text | Victor | không rỗng | Simulated / Ngọc |
| employee_role | Chức danh | category | COO | thuộc role list | Simulated / Ngọc |
| responsibility_scope | Phạm vi trách nhiệm | text | Executive sponsor | không rỗng | Simulated / Ngọc |
| amendment_id | Mã amendment | text | AMD-03 | unique | Simulated / Ngọc |
| amendment_effect | Nội dung thay đổi chính | text | Revised payment schedule | không rỗng | Simulated / Ngọc |
| authorized_by | Employee ID phê duyệt amendment | text | EMP-0231 | phải resolve tới đúng một employee | Simulated / Ngọc |

Bốn executive trong Target Product:

| Executive | Role | Responsibility information shown in dossier |
|---|---|---|
| Victor | COO | Executive sponsorship và authority liên quan đến initiative |
| Lucas | Investment Director | Strategic review responsibility |
| David | CFO | Cash management và payment execution responsibility |
| Sophia | Head of Internal Control | Monitoring và control compliance responsibility |

Các dossier chỉ cung cấp raw information về role và responsibility. Game không gắn sẵn nhãn “suspect” hoặc nói trước ai chịu trách nhiệm. Người chơi phải đối chiếu các dossier với transaction evidence.

---

## 4. Source Register

### 4.1. Operational Sources

| Source | Information used | Purpose | Limitation | Owner |
|---|---|---|---|---|
| Simulated Financial Overview | Revenue, Net Income, OCF, DSO, Gross Margin, cash outflows | Financial Diagnosis | Dữ liệu giả lập, không đại diện doanh nghiệp thật | Dũng |
| Simulated Budget Data | External Advisory budget | Variance và materiality analysis | Budget được xây cho case | Dũng |
| Simulated Vendor Ledger | Vendor names và payments | Drill Down tới Northstar | Dữ liệu giả lập | Dũng |
| Simulated Northstar Contract | Contract value, service description, classification | Transaction investigation | Tài liệu được thiết kế cho learning flow | Ngọc |
| Simulated Payment Ledger | 26 payments, amount, date, approval status | Reconciliation, timing và payment-pattern analysis | Không đại diện transaction thật | Dũng |
| Simulated Control Policy | Approval threshold và review requirement | Control assessment | Policy giả lập | Dũng |
| Simulated Exception Memo | Duration, limit và applicable conditions | Timing assessment | Policy event giả lập | Ngọc |
| Simulated Executive Dossiers | Role và responsibility scope | Responsibility investigation | Hồ sơ nhân vật giả lập | Ngọc |
| Simulated Amendment History | Payment Schedule Amendment No. 3 | Linking evidence | Thiết kế phục vụ Target Product | Ngọc |
| Simulated Employee Directory | Employee ID mapping | Resolve authorization record | Dữ liệu nhân vật giả lập | Ngọc |

### 4.2. Problem Evidence Status

Problem evidence được lưu riêng vì nó không phải input tính toán của game.

| Evidence | Purpose | Status | Owner |
|---|---|---|---|
| Week 1 initial observation | Hỗ trợ assumption rằng người học khó kết nối nhiều nguồn tài chính | Có | Phương |
| User observation / short test với target users | Kiểm tra trực tiếp Information Integration difficulty | Cần bổ sung hoặc dẫn link nếu nhóm đã thực hiện | Phương |
| Verified academic/training reference về evidence integration / financial reasoning | Hỗ trợ problem framing và design rationale | Bổ sung khi cần | Dũng |

Real-world corporate cases có thể được dùng làm design reference nhưng không được trình bày như bằng chứng trực tiếp rằng target users gặp Information Integration difficulty.

---

## 5. Data Structure

Nhóm chọn **static JSON + CSV** vì phù hợp với Route Hypothesis `Code-Based Web Application using React/JavaScript and static data` của Week 2. Không cần database hoặc real-time API.

Cấu trúc đề xuất:

```text
data/
  financial-overview.json
  vendors.json
  northstar-contract.json
  payments.csv
  controls.json
  people.json
  evidence.json
```

Vai trò của từng file:

- `financial-overview.json`: dữ liệu để Financial Diagnosis;
- `vendors.json`: dữ liệu để Drill Down tới Northstar;
- `northstar-contract.json`: contract value, service description và transaction classification;
- `payments.csv`: 26 payment records;
- `controls.json`: approval threshold, review requirement và temporary exception;
- `people.json`: hồ sơ Victor, Lucas, David và Sophia;
- `evidence.json`: amendment history và các linking evidence.

Cấu trúc này giữ dữ liệu dễ đọc, dễ kiểm tra thủ công và có thể được React đọc trực tiếp.

---

## 6. Data Flow

### MVP Data Flow

```text
Simulated Financial Overview
        ↓
Validation
        ↓
Financial Diagnosis
        ↓
Identify a Financial Signal
        ↓
Vendor Data
        ↓
Identify Northstar
        ↓
Northstar Contract + Payment Summary
        ↓
Reconciliation and Transaction Analysis
        ↓
Northstar Financial Trace
        ↓
Explain Why Further Investigation Is Required
```

MVP sử dụng chủ yếu **Financial Overview Information**, **Transaction Information** và phần contract tối thiểu cần thiết.

### Target Product Extension

```text
Northstar Financial Trace
        ↓
Control Policy + Temporary Exception
        ↓
Payment Timing + Payment Pattern
        ↓
Executive Dossiers
        ↓
Amendment History
        ↓
Employee Directory
        ↓
Evidence Integration
        ↓
Financial Trace Map
        +
Evidence-Based Responsibility Conclusion
```

Như vậy Week 3 chuẩn bị input cho cả MVP và Target Product, nhưng vẫn giữ rõ mức độ ưu tiên: input cho MVP phải sẵn sàng trước, input cho Responsibility Investigation chỉ cần đủ rõ để chứng minh Target Product khả thi.

---

## 7. Input Validation

| Validation Rule | Expected Result |
|---|---|
| `net_income_previous` và `net_income_current` khác 0 khi tính OCF/NI | Không chia cho 0 |
| Các financial amount không được thiếu | Dừng calculation nếu thiếu field |
| `external_advisory_total` = tổng vendor payments | 620 = 500 + 46 + 32 + 24 + 18 |
| `contract_value` > 0 | Contract hợp lệ về format dữ liệu |
| `total_payment` = tổng 26 payment rows | Tổng bằng 500 |
| `contract_value` = `total_payment` trong case hiện tại | 500 = 500 |
| `paid_during_exception + paid_after_exception = total_payment` | 38 + 462 = 500 |
| `payments_below_threshold ≤ payment_count` | 23 ≤ 26 |
| Payment count trong file = `payment_count` | Có đúng 26 rows |
| Employee ID phải unique | Một ID không trỏ tới hai người |
| `authorized_by` phải resolve tới một employee | EMP-0231 → Victor |
| Payment và document dates phải phù hợp với timeline của case | Không xuất hiện record ngoài timeline |

Nếu validation thất bại, hệ thống không tạo kết luận từ dữ liệu đó và phải hiển thị trạng thái `Incomplete or Invalid Data`.

---

## 8. Assumptions and Limitations

| Assumption / Limitation | Rationale |
|---|---|
| Aster Holdings, Northstar Advisory và toàn bộ executive là fictional | Sản phẩm là educational prototype |
| Operational data là simulated data | Cho phép kiểm soát một coherent investigation chain |
| Đơn vị tiền tệ thống nhất là Tỷ VND | Tránh unit mismatch |
| Hai kỳ tài chính được coi là đủ tương đồng để thực hiện comparison ban đầu | Đơn giản hóa Financial Diagnosis |
| External Advisory budget là internal approved budget của kỳ hiện tại | Cần cho variance analysis |
| Approval threshold 20 tỷ và Temporary Exception là simulated internal rules | Cần cho control analysis |
| OCF/NI được dùng như comparative signal, không phải universal pass/fail benchmark | Tránh diễn giải quá mức một ratio |
| 23/26 payments dưới threshold là red flag, không tự nó chứng minh intentional structuring | Phân biệt signal với proof |
| EMP-0231 → Victor là linking evidence về authorization | Hỗ trợ Responsibility Conclusion |
| Conclusion cuối game là primary management responsibility, không phải criminal liability | Evidence của case không chứng minh hành vi hình sự |
| Thứ tự evidence được mở là một phần của gameplay design | Không đại diện cách doanh nghiệp thật lưu trữ tài liệu |

---

## 9. Early Logic Test

Week 3 thực hiện kiểm tra sớm để xác nhận rằng input hiện tại đủ tạo ra những intermediate outputs cần cho investigation chain.

| Input | Expected Process | Expected Output | Status |
|---|---|---|---|
| OCF 655, NI 720; OCF 570, NI 760 | Tính OCF/NI hai kỳ | 0.91 → 0.75, cash conversion suy yếu | Ready |
| External Advisory 125 → 620 | `620 / 125` | 4.96× mức kỳ trước | Ready |
| Actual 620, Budget 150 | `(620 - 150) / 150` | +313.3% so với budget | Ready |
| Northstar 500, External Advisory 620 | `500 / 620` | 80.6% concentration | Ready |
| Contract 500, Payment 500 | Reconciliation | 100% matched | Ready |
| Paid after exception 462, Total 500 | `462 / 500` | 92.4% sau exception | Target-ready |
| 23 payments dưới threshold, total 26 | `23 / 26` | 88.5% dưới threshold | Target-ready |
| Amendment authorized by EMP-0231 | Resolve employee ID | EMP-0231 → Victor | Target-ready |

Điểm cần kiểm tra ở Week 3 không phải người chơi có chọn đúng Victor hay không, mà là **input có đủ và nhất quán để Week 4 viết logic mà không phải thay đổi lại data model hay không**.

---

## 10. Ownership của Data và Evidence

| Output / Evidence | Owner | Consumer / Dependency |
|---|---|---|
| Financial Overview Input Dictionary | Phạm Triệu Tiến Dũng | Gameplay Logic, UI/UX |
| Vendor và Northstar Transaction Data | Phạm Triệu Tiến Dũng | Gameplay Logic, Financial Trace |
| Contract và Control Data Structure | Phạm Triệu Tiến Dũng + Tôn Khánh Ngọc | Gameplay Logic, Storyline |
| Executive Dossiers và Responsibility Evidence | Tôn Khánh Ngọc | Responsibility Investigation, UI/UX |
| Validation Rules và Early Logic Test | Nguyễn Minh Hiền | Development, Testing |
| Data display requirements | Đinh Thị Minh Khuê | UI implementation |
| Data Flow, integration và repository consistency | Phạm Quỳnh Phương | Whole team, checkpoint |

Mỗi output phải được một phần khác của sản phẩm sử dụng. Data contribution không được mô tả chung là “tìm dữ liệu”.

---

## 11. Repo Evidence cuối Week 3

Cấu trúc repository đề xuất:

```text
docs/
  input-dictionary.md
  sources.md
  data-flow.md
  assumptions.md

data/
  financial-overview.json
  vendors.json
  northstar-contract.json
  payments.csv
  controls.json
  people.json
  evidence.json
```

Evidence tối thiểu để trình bày tại Checkpoint 3:

1. Input Dictionary cho bốn nhóm information.
2. Source Register phân biệt operational source và problem evidence.
3. Simulated sample data.
4. Assumptions và limitations.
5. Data Structure.
6. MVP và Target Data Flow.
7. Validation Rules.
8. Early Logic Test.
9. Ownership và current status.
10. Feedback và revision sau checkpoint.

---

## 12. Open Questions trước Week 4

Các câu hỏi cần chốt trước khi chuyển sang financial logic:

1. Payment-level dataset 26 rows đã thỏa đồng thời `sum = 500`, `23/26 dưới threshold` và timing của exception hay chưa?
2. Các document fields nào được hiển thị trực tiếp, fields nào chỉ dùng trong logic?
3. Responsibility Dossiers cần cung cấp mức thông tin nào để người chơi tự suy luận mà không bị game chỉ sẵn người đáng nghi?
4. Evidence unlock order có làm Financial Trace quá dễ hoặc quá khó không?
5. Problem evidence về Information Integration đã đủ mạnh hay cần bổ sung một short user observation/test?
6. Các calculation ở Early Logic Test có được Hiền xác nhận độc lập trước Week 4 hay chưa?

---

## 13. Feedback và Revision

### Feedback from Checkpoint 3

*Chưa cập nhật — bổ sung sau checkpoint.*

### Revision after Checkpoint 3

*Chưa cập nhật — ghi rõ Keep / Change / Simplify / Restart và thay đổi tương ứng trong repository.*

---

## 14. End-of-Week Checklist

- [x] Phân biệt Operational Data và Problem Evidence.
- [x] Input Dictionary bám trực tiếp vào main output của Week 2.
- [x] Cả bốn nhóm information đã được xác định.
- [x] MVP inputs và Target Product inputs được phân biệt rõ.
- [x] Operational data được xác định là simulated.
- [x] Data Structure phù hợp với React/JavaScript + static data.
- [x] Data Flow nối trực tiếp từ input đến Financial Trace và Responsibility Conclusion.
- [x] Validation rules được xác định.
- [x] Early Logic Test đã có expected outputs cụ thể.
- [x] Assumptions và limitations được công khai.
- [x] Mỗi evidence chính có owner.
- [ ] Payment-level sample data cần được kiểm tra hoàn chỉnh trước Week 4.
- [ ] Problem evidence cần bổ sung nếu nhóm chưa có user observation/test.
- [ ] Feedback và revision sẽ cập nhật sau Checkpoint 3.

> **Week 4 sẽ sử dụng chính các input đã xác định ở đây để xây financial logic, investigation rules và state transitions.**
