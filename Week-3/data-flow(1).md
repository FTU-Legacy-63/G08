# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — DATA STRUCTURE, DATA FLOW, VALIDATION & EARLY LOGIC TEST

## 1. Data Structure

Theo technical route Week 2, The Last Heir sử dụng Unity + C#, prepared local data và rule-based logic.

Week 3 lựa chọn JSON để lưu dữ liệu cục bộ:

```text
data/
  case_data.json
  rules.json
  evidence.json
  answer_key.json
```

Phân tách này phản ánh logic sản phẩm:

```text
Case Facts
+ Processing Rules
+ Investigation Evidence
+ Internal Expected Result
```

`answer_key.json` không phải evidence và không được expose cho người chơi.

---

## 2. JSON → C# Logic

```text
case_data.json
rules.json
evidence.json
        ↓
JSON Load / Deserialize
        ↓
C# Data Objects
        ↓
Validation
        ↓
Financial + Investigation Rules
        ↓
Game State / Evidence State
        ↓
Player Decision
        ↓
Feedback + Financial Trace Map
```

---

## 3. End-to-End Data Flow

```text
Prepared Scenario Data
        ↓
Validation
        ↓
Financial Screening
DSRI / SGAI / TATA
        ↓
User selects focus area
        ↓
Materiality Cross-Check
        ↓
SG&A Breakdown
        ↓
User selects subaccount
        ↓
Advisory Expense Ledger
        ↓
Transaction Tracing
        ↓
User selects Northstar group
        ↓
Aggregate Related Tranches
agreement_id + economic purpose
        ↓
Control Investigation
approval policy + approval records
        ↓
User submits Override Assessment
+ evidence IDs
        ↓
Responsibility Attribution
personnel + direct involvement + conflict evidence
        ↓
User selects responsible individual
+ evidence IDs
        ↓
Final Output
Management Override Conclusion
+ Responsible Individual
+ Supporting Evidence
+ Financial Trace Map
```

---

## 4. Diễn giải theo case

### Step 1 — Financial Screening

Sample result:

```text
DSRI = 0.9333
SGAI = 1.12
TATA = 0.0273
```

Case-specific rules:

- DSRI trong review range → không ưu tiên revenue/receivables;
- SGAI > 1.10 → SG&A cần review;
- |TATA| < 0.05 → không tạo hướng chính.

Output:

```text
selected_focus_area = SG&A
```

### Step 2 — Materiality Cross-Check

SG&A:

```text
N-1 = 15
N = 21
Change = +6
```

`6 > materiality_threshold 1.1`

→ việc drill-down SG&A là đáng kể trong case.

### Step 3 — SG&A Drill-Down

Advisory Expense:

```text
1.2 → 4.2
Change = +3.0
```

`3.0 > materiality_threshold 1.1`

→ Advisory Expense được ưu tiên truy vết.

### Step 4 — Transaction Tracing

Northstar:

```text
ADV-02A = 0.9
ADV-02B = 0.9
ADV-02C = 0.8
Total = 2.6
```

Các record cùng:

```text
vendor_id = V-NORTHSTAR
agreement_id = AGR-NST-01
economic_purpose_code = NORTHSTAR_ADVISORY_2026
```

Do đó hệ thống có đủ field để aggregate chúng thành một related transaction group.

### Step 5 — Control Investigation

Từng tranche có:

```text
Department Head = Victor
Finance Manager = Lucas
```

Từng tranche **appears compliant when viewed separately**.

Nhưng aggregate economic transaction:

```text
2.6 > 1.0 approval threshold
```

Theo simulated policy, aggregate transaction này yêu cầu:

```text
CFO + Board
```

Output của bước này không phải “fraud = true”, mà là một control-circumvention pattern cần được kết hợp với evidence khác.

### Step 6 — Management Override Assessment

Người chơi xem:

- transaction splitting pattern;
- agreement linkage;
- authority;
- direct participation;
- conflict evidence.

Người chơi phải chọn `override_assessment` và `supporting_evidence_ids`.

### Step 7 — Responsibility Attribution

Hệ thống cung cấp personnel facts của Victor, Lucas, David và Sophia.

Người chơi so sánh:

- authority;
- direct involvement;
- control connection;
- conflict evidence;
- corroboration.

Không có player-visible field tiết lộ đáp án.

### Step 8 — Final Output

Output gồm:

- Management Override conclusion;
- primary responsible individual;
- supporting evidence;
- Financial Trace Map;
- feedback giải thích evidence chain.

---

## 5. Input Validation

| Validation rule | Data | Invalid example | System response |
|---|---|---|---|
| Phải có N-1 và N cho DSRI/SGAI | Financial data | thiếu revenue N-1 | Không tính ratio; flag `missing_required_input` |
| Denominator phải khác 0 | Revenue, Total Assets | revenue N = 0 | Không tính ratio |
| Tổng SG&A subaccounts phải reconcile với `sga_total` | SG&A data | sum = 20.5 nhưng total = 21 | `reconciliation_error` |
| Advisory transactions phải reconcile với Advisory Expense N | Transaction data | sum = 4.0 nhưng Advisory = 4.2 | `reconciliation_error` |
| Transaction ID unique | Transaction data | duplicate `ADV-02A` | reject dataset |
| Approver ID phải tồn tại trong personnel | Approval evidence | `P-UNKNOWN` | `invalid_reference` |
| Evidence ID unique và resolvable | Evidence data | missing `PUB-01` | `invalid_reference` |
| Related tranche aggregation cần agreement/economic linkage | Transaction group | chỉ cùng vendor nhưng khác agreement | không auto-aggregate |
| Materiality threshold > 0 | Rules | -1.1 | reject rule |
| Approval ranges không overlap/gap ngoài thiết kế | Rules | duplicated threshold ranges | reject rule |
| Player evidence phải đã mở khóa | User input | evidence hidden | reject selection |
| Responsible individual phải tồn tại | User input | unknown person ID | reject selection |

---

## 6. Missing Value Handling

- Missing required financial field → không thực hiện ratio tương ứng.
- Missing SG&A subaccount amount → không cho reconciliation pass.
- Missing `agreement_id` → transaction vẫn hiển thị nhưng không auto-aggregate theo agreement.
- Missing approval record → đánh dấu `evidence_incomplete`; không mặc định control violation.
- Missing conflict evidence → trạng thái `unknown`; không mặc định `false`.
- User chưa chọn required input → không mở khóa bước tiếp theo.
- Missing answer-key field chỉ ảnh hưởng automated testing/feedback, không thay đổi raw evidence.

---

## 7. Early Logic Test

| Input | Expected process | Expected output | Actual / manual check | Issue / Week 4 action |
|---|---|---|---|---|
| Financial sample | Tính DSRI, SGAI, TATA | 0.9333; 1.12; 0.0273 | Khớp tính tay | Viết C# calculation functions |
| Screening rules | Apply riêng từng rule | SG&A được ưu tiên | Khớp | Không so raw deviation giữa ratios |
| SG&A data | Reconcile + compare absolute change | Advisory +3.0, vượt materiality 1.1 | Khớp | Viết drill-down logic |
| Advisory ledger | Reconcile total | 4.2 = Advisory N | Khớp | Viết reconciliation check |
| Northstar tranches | Group theo agreement + economic purpose | 2.6 | Khớp | Không group chỉ vì cùng vendor |
| Individual approvals | Check per-tranche form | Victor + Lucas đủ cho 0.8–0.9 | Khớp | Không flag “missing Finance Manager” |
| Aggregate approval | Compare 2.6 với policy | CFO + Board required | Khớp | Viết aggregate approval rule |
| Override evidence set | Kết nối splitting + involvement + conflict | Evidence set có thể support Override | Chạy logic thủ công được | Formalize evidence state |
| Responsibility comparison | So facts giữa các cá nhân | Có thể đi đến expected responsible individual bằng evidence | Chạy thủ công được | Formalize scoring/state transition mà không dùng Fraud Triangle làm culprit score |

---

## 8. Early Logic Test Conclusion

Bộ input hiện tại đủ để chạy thủ công một lượt end-to-end:

**Financial Screening → SG&A → Advisory Expense → Northstar → Aggregate Approval Check → Management Override Assessment → Responsibility Attribution**

Week 4 không cần tìm thêm một lượng lớn data mới. Trọng tâm là biến logic đã kiểm thử thủ công thành các C# functions, rule checks và state transitions.
