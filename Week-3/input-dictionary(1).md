# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — INPUT DICTIONARY

## 1. Mục đích và liên kết với Week 2

Week 2 đã xác định các nhóm input ở cấp độ product:

- financial data;
- transaction information;
- control and authorization evidence;
- role/authority information;
- conflict information;
- materiality reference.

Week 3 chuyển các nhóm input này thành field cụ thể, thống nhất meaning, type, unit, validation, missing handling và owner.

Product Direction, user task và investigation chain của Week 2 không thay đổi.

---

## 2. Quy ước chung

- Tất cả giá trị tiền tệ trong case sử dụng **triệu USD (USD million)**.
- Kỳ hiện tại ký hiệu `N`; kỳ trước ký hiệu `N-1`.
- Tất cả ID phải là unique string.
- Case data là simulated data.
- User-entered input là lựa chọn/đánh giá của người chơi trong game.
- `materiality_threshold` và `approval_threshold` là hai khái niệm khác nhau.

---

## 3. Input Dictionary

| Input name | Meaning | Type | Unit | Example | Validation / valid range | Missing handling | Source / Owner |
|---|---|---|---|---|---|---|---|
| `period` | Kỳ báo cáo | enum | — | `N` | `{N-1, N}` | Required | Case / Dũng |
| `revenue` | Doanh thu | number | triệu USD | `150` | `> 0` | Missing → không tính DSRI/SGAI | Case / Dũng |
| `receivables` | Khoản phải thu | number | triệu USD | `21` | `>= 0` | Missing → không tính DSRI | Case / Dũng |
| `sga_total` | Tổng SG&A | number | triệu USD | `21` | `>= 0` | Missing → không tính SGAI hoặc drill-down | Case / Dũng |
| `income_from_continuing_operations` | Lợi nhuận từ hoạt động liên tục dùng cho TATA cash-flow implementation | number | triệu USD | `11` | Có thể âm | Missing → không tính TATA | Case / Dũng |
| `cfo` | Cash Flow from Operations | number | triệu USD | `8` | Có thể âm | Missing → không tính TATA | Case / Dũng |
| `total_assets` | Tổng tài sản | number | triệu USD | `110` | `> 0` | Missing/0 → không tính TATA | Case / Dũng |
| `materiality_threshold` | Điểm tham chiếu về trọng yếu của case | number | triệu USD | `1.1` | `> 0` | Missing → cảnh báo cấu hình; không thực hiện materiality check | Rule / Hiền |
| `screening_rule_dsri` | Case-specific review range cho DSRI | object | ratio | `0.90–1.15` | lower < upper | Missing → DSRI chỉ hiển thị, không classify | Rule / Hiền |
| `screening_rule_sgai` | Case-specific review rule cho SGAI | object | ratio | `review_above = 1.10` | `> 0` | Missing → SGAI chỉ hiển thị, không classify | Rule / Hiền |
| `screening_rule_tata` | Case-specific review rule cho TATA | object | ratio | `abs_review_above = 0.05` | `>= 0` | Missing → TATA chỉ hiển thị, không classify | Rule / Hiền |
| `sga_subaccount` | Tên khoản mục con của SG&A | enum/string | — | `Advisory Expense` | Thuộc list cấu hình | Missing → không thể drill-down hoàn chỉnh | Case / Dũng |
| `sga_subaccount_amount` | Giá trị khoản mục SG&A theo kỳ | number | triệu USD | `4.2` | `>= 0`; tổng subaccounts = `sga_total` | Missing → fail reconciliation | Case / Dũng |
| `transaction_id` | ID giao dịch | string | — | `ADV-02A` | Unique | Required | Case / Dũng |
| `vendor_id` | ID vendor | string | — | `V-NORTHSTAR` | Phải tồn tại trong ledger | Required | Case / Dũng |
| `vendor_name` | Tên vendor | string | — | `Northstar Trading Ltd.` | Non-empty | Required | Case / Dũng |
| `amount` | Giá trị giao dịch | number | triệu USD | `0.9` | `> 0` | Required | Case / Dũng |
| `agreement_id` | ID thỏa thuận kinh tế liên quan | string | — | `AGR-NST-01` | Có thể dùng để group tranches | Missing → không tự động aggregate theo agreement | Case / Ngọc |
| `economic_purpose_code` | Mã mục đích kinh tế | string | — | `NORTHSTAR_ADVISORY_2026` | Non-empty cho related tranches | Missing → aggregate evidence yếu hơn | Case / Ngọc |
| `tranche_sequence` | Thứ tự tranche | integer | — | `1` | `>= 1` | Optional | Case / Dũng |
| `approval_policy` | Rule phê duyệt theo aggregate economic transaction value | rule set | triệu USD | Xem `rules.json` | Các range không overlap | Missing → không đánh giá control compliance | Rule / Hiền |
| `approval_record` | Record người thực tế phê duyệt giao dịch | object | — | Victor + Lucas | Approver phải tồn tại trong personnel | Missing → `evidence_incomplete`, không mặc định violation | Evidence / Ngọc |
| `person_id` | ID cá nhân | string | — | `P-VICTOR` | Unique | Required | Evidence / Ngọc |
| `role` | Vai trò cá nhân | string | — | `Business Development Director` | Non-empty | Required | Evidence / Ngọc |
| `authority_level` | Cấp thẩm quyền | enum/string | — | `Department Head` | Thuộc role list | Missing → không dùng để attribution | Evidence / Ngọc |
| `direct_involvement` | Facts về mức độ tham gia | array/string | — | ký agreement | Chỉ ghi facts | Missing → trạng thái unknown | Evidence / Ngọc |
| `conflict_of_interest` | Có evidence về xung đột lợi ích hay không | enum | — | `true` | `{true,false,unknown}` | Missing → `unknown`, không mặc định false | Evidence / Ngọc |
| `conflict_evidence_ids` | Evidence IDs hỗ trợ conflict fact | array[string] | — | `["PUB-01"]` | ID phải tồn tại | Missing → conflict chưa được corroborate | Evidence / Ngọc |
| `selected_focus_area` | Khu vực người chơi ưu tiên | enum | — | `SG&A` | Thuộc options đã mở khóa | Chưa chọn → không sang drill-down | User |
| `selected_subaccount` | Khoản mục người chơi chọn | enum | — | `Advisory Expense` | Thuộc focus area | Chưa chọn → không mở transaction layer | User |
| `selected_transaction_group` | Vendor/agreement group người chơi chọn | string | — | `AGR-NST-01` | Tồn tại trong transaction data | Chưa chọn → không mở control layer | User |
| `override_assessment` | Kết luận của người chơi | enum | — | `Supported` | `{Supported, Not Supported}` | Required ở final Layer 2 | User |
| `responsible_individual` | Cá nhân người chơi quy trách nhiệm chính | string | — | `P-VICTOR` | Phải tồn tại trong personnel | Required ở Layer 3 | User |
| `supporting_evidence_ids` | Evidence người chơi dùng để lập luận | array[string] | — | `["POL-01","AGR-01","PUB-01"]` | Chỉ evidence đã mở khóa | Required tối thiểu theo game rule | User |

---

## 4. Sample Financial Data

**Đơn vị: triệu USD**

| Chỉ tiêu | N-1 | N |
|---|---:|---:|
| Revenue | 120 | 150 |
| Receivables | 18 | 21 |
| SG&A | 15 | 21 |
| Income from continuing operations | 9 | 11 |
| CFO | 10.5 | 8 |
| Total assets | 95 | 110 |

`materiality_threshold = 1.1` triệu USD.

---

## 5. Financial Screening Inputs

### DSRI

```text
DSRI = (Receivables_N / Revenue_N)
       /
       (Receivables_N-1 / Revenue_N-1)
```

Sample:

```text
(21 / 150) / (18 / 120) = 0.9333
```

### SGAI

```text
SGAI = (SG&A_N / Revenue_N)
       /
       (SG&A_N-1 / Revenue_N-1)
```

Sample:

```text
(21 / 150) / (15 / 120) = 1.12
```

### TATA — cash-flow implementation used in this prototype

```text
TATA =
(Income from Continuing Operations_N - CFO_N)
/
Total Assets_N
```

Sample:

```text
(11 - 8) / 110 = 0.0273
```

### Case-specific screening rules

| Indicator | Case-specific rule | Vai trò trong case |
|---|---|---|
| DSRI | 0.90–1.15 → no priority flag | Không ưu tiên revenue/receivables |
| SGAI | > 1.10 → review SG&A | Ưu tiên SG&A để drill-down |
| TATA | \|TATA\| > 0.05 → additional accrual review | Trong sample không tạo hướng chính |

Các ngưỡng này do nhóm thiết kế cho mục đích sư phạm. Chúng không phải cutoff chính thức của Beneish và không được dùng để kết luận fraud.

---

## 6. SG&A Breakdown

**Đơn vị: triệu USD**

| Subaccount | N-1 | N | Change |
|---|---:|---:|---:|
| Salary | 7.0 | 9.0 | +2.0 |
| Marketing | 3.5 | 4.5 | +1.0 |
| Legal | 1.3 | 1.8 | +0.5 |
| Advisory Expense | 1.2 | 4.2 | **+3.0** |
| Other | 2.0 | 1.5 | -0.5 |
| **Total SG&A** | **15.0** | **21.0** | **+6.0** |

Materiality cross-check:

- SG&A tăng 6.0 > materiality 1.1;
- Advisory Expense tăng 3.0 > materiality 1.1.

Vì vậy việc drill-down tiếp có ý nghĩa trong case.

---

## 7. Advisory Expense Transaction Ledger — N

**Đơn vị: triệu USD**

| Transaction ID | Vendor | Amount | Agreement ID | Economic Purpose | Note |
|---|---|---:|---|---|---|
| ADV-01 | Global Consulting Ltd. | 0.8 | AGR-GCL-01 | ANNUAL_ADVISORY | recurring |
| ADV-02A | Northstar Trading Ltd. | 0.9 | AGR-NST-01 | NORTHSTAR_ADVISORY_2026 | tranche 1/3 |
| ADV-02B | Northstar Trading Ltd. | 0.9 | AGR-NST-01 | NORTHSTAR_ADVISORY_2026 | tranche 2/3 |
| ADV-02C | Northstar Trading Ltd. | 0.8 | AGR-NST-01 | NORTHSTAR_ADVISORY_2026 | tranche 3/3 |
| ADV-03 | Bright Path Advisors | 0.5 | AGR-BPA-01 | SPECIAL_REVIEW | one-off |
| ADV-04 | Other advisory vendors | 0.3 | MIXED | OTHER | aggregated minor items |
| **Total** |  | **4.2** |  |  |  |

Northstar aggregate:

```text
0.9 + 0.9 + 0.8 = 2.6 triệu USD
```

Northstar chiếm:

```text
2.6 / 4.2 ≈ 61.9% Advisory Expense kỳ N
```

---

## 8. Approval Input

Case approval policy:

| Aggregate economic transaction value | Required approval |
|---|---|
| `<= 0.5` | Department Head |
| `> 0.5 and <= 1.0` | Department Head + Finance Manager |
| `> 1.0` | CFO + Board |

Mỗi Northstar tranche khi nhìn riêng có Victor + Lucas, vì vậy **có vẻ hợp lệ về hình thức**.

Tuy nhiên ba tranche:

- cùng `agreement_id = AGR-NST-01`;
- cùng vendor;
- cùng economic purpose;
- cùng một advisory arrangement;

nên phải được đánh giá thêm ở mức **aggregate economic transaction = 2.6 triệu USD**.

Nếu xét theo bản chất kinh tế tổng thể, mức 2.6 triệu USD vượt approval threshold 1.0 và yêu cầu CFO + Board.

Đây là evidence pattern mà Layer 2 yêu cầu người chơi kết nối; không phải một ratio tự động kết luận Management Override.

---

## 9. Personnel Input Principle

Personnel data chỉ chứa facts như:

- role;
- authority;
- involvement;
- agreement connection;
- conflict evidence;
- control responsibility.

Không được ghi:

```text
culprit = Victor
```

hoặc bất kỳ field nào tiết lộ final answer trong player-visible data.

Expected answer được tách sang `answer_key.json` dùng nội bộ.
