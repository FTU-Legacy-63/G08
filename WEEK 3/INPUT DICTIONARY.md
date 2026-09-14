# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — INPUT DICTIONARY

## 1. Mục đích

Week 2 xác định các nhóm input. Week 3 chuyển chúng thành field cụ thể để Unity/C# có thể load, validate và xử lý.

Tất cả giá trị tiền tệ dùng **triệu USD**. Kỳ hiện tại là `N`, kỳ trước là `N-1`.

---

## 2. Core Input Dictionary

| Input name | Meaning | Type | Unit | Example | Validation | Missing handling | Owner |
|---|---|---|---|---|---|---|---|
| `revenue` | Doanh thu | number | triệu USD | 150 | `>0` | Không tính DSRI/SGAI | Dũng |
| `receivables` | Khoản phải thu | number | triệu USD | 21 | `>=0` | Không tính DSRI | Dũng |
| `sga_total` | Tổng SG&A | number | triệu USD | 21 | `>=0` | Không tính SGAI/drill-down | Dũng |
| `income_from_continuing_operations` | Income dùng cho TATA prototype | number | triệu USD | 11 | Có thể âm | Không tính TATA | Dũng |
| `cfo` | Cash Flow from Operations | number | triệu USD | 8 | Có thể âm | Không tính TATA | Dũng |
| `total_assets` | Tổng tài sản | number | triệu USD | 110 | `>0` | Không tính TATA | Dũng |
| `materiality_threshold` | Reference về mức độ đáng chú ý | number | triệu USD | 1.1 | `>0` | Không chạy materiality check | Hiền |
| `transaction_id` | ID giao dịch | string | — | ADV-02A | unique | Required | Dũng |
| `vendor_id` | ID vendor | string | — | V-NORTHSTAR | non-empty | Required | Dũng |
| `amount` | Giá trị giao dịch | number | triệu USD | 0.9 | `>0` | Required | Dũng |
| `agreement_id` | ID thỏa thuận | string | — | AGR-NST-01 | non-empty cho related tranches | Không auto-aggregate | Ngọc |
| `economic_purpose_code` | Mã mục đích kinh tế | string | — | NORTHSTAR_ADVISORY_2026 | non-empty | Aggregation evidence yếu hơn | Ngọc |
| `initiated_by_person_id` | Người khởi tạo transaction | string | — | P-VICTOR | phải tồn tại trong personnel | unknown | Dũng/Ngọc |
| `approval_summary_status` | Trạng thái approval hiển thị bề mặt | enum/object | — | Completed | role steps hợp lệ | evidence incomplete | Ngọc |
| `approval_audit_event` | Event thực tế trong approval log | object | — | override_proxy | actor phải tồn tại | evidence incomplete | Ngọc |
| `finance_step_method` | Cách Finance step được hoàn tất | enum | — | management_override_proxy | direct / proxy / override | unknown | Ngọc |
| `actual_finance_approver_id` | Finance Manager thực sự approve | string/null | — | null | ID hợp lệ hoặc null | unknown | Ngọc |
| `override_actor_id` | Người dùng override route | string/null | — | P-VICTOR | ID hợp lệ | unknown | Ngọc |
| `override_justification_present` | Có justification bắt buộc hay không | boolean | — | false | true/false | unknown | Ngọc |
| `retrospective_finance_review_present` | Có retrospective Finance review hay không | boolean | — | false | true/false | unknown | Ngọc |
| `person_id` | ID cá nhân | string | — | P-VICTOR | unique | Required | Ngọc |
| `authority_level` | Cấp thẩm quyền | string | — | Department Head | role list | unknown | Ngọc |
| `conflict_of_interest` | Conflict evidence state | enum | — | true | true/false/unknown | unknown | Ngọc |
| `selected_focus_area` | Focus người chơi chọn | enum | — | SG&A | valid option | Chặn bước tiếp | User |
| `selected_subaccount` | Subaccount người chơi chọn | enum | — | Advisory Expense | valid option | Chặn bước tiếp | User |
| `selected_transaction_group` | Transaction group người chơi chọn | string | — | AGR-NST-01 | tồn tại | Chặn control layer | User |
| `override_assessment` | Kết luận Override | enum | — | Supported | Supported/Not Supported | Required | User |
| `responsible_individual` | Người chịu trách nhiệm chính | string | — | P-VICTOR | tồn tại | Required | User |
| `supporting_evidence_ids` | Evidence người chơi chọn | array | — | AUD-01, AGR-01, PUB-01 | đã unlock | Required | User |

---

## 3. Sample Financial Data

| Chỉ tiêu | N-1 | N |
|---|---:|---:|
| Revenue | 120 | 150 |
| Receivables | 18 | 21 |
| SG&A | 15 | 21 |
| Income from continuing operations | 9 | 11 |
| CFO | 10.5 | 8 |
| Total assets | 95 | 110 |

---

## 4. Financial Screening

### DSRI

```text
(21/150)/(18/120) = 0.9333
```

### SGAI

```text
(21/150)/(15/120) = 1.12
```

### TATA

```text
(11-8)/110 = 0.0273
```

Case-specific rules:

- DSRI `0.90–1.15` → no priority flag;
- SGAI `>1.10` → review SG&A;
- `|TATA| >0.05` → additional accrual review.

Các rule trên là pedagogical rules của case, không phải official Beneish cutoffs.

---

## 5. SG&A Breakdown

| Subaccount | N-1 | N | Change |
|---|---:|---:|---:|
| Salary | 7.0 | 9.0 | +2.0 |
| Marketing | 3.5 | 4.5 | +1.0 |
| Legal | 1.3 | 1.8 | +0.5 |
| Advisory Expense | 1.2 | 4.2 | **+3.0** |
| Other | 2.0 | 1.5 | -0.5 |
| **Total** | **15.0** | **21.0** | **+6.0** |

Advisory tăng 3.0 > materiality 1.1 nên đáng để truy vết.

---

## 6. Advisory Expense Ledger

| ID | Vendor | Amount | Agreement | Purpose | Initiated by |
|---|---|---:|---|---|---|
| ADV-01 | Global Consulting | 0.8 | AGR-GCL-01 | ANNUAL_ADVISORY | other |
| ADV-02A | Northstar | 0.9 | AGR-NST-01 | NORTHSTAR_ADVISORY_2026 | Victor |
| ADV-02B | Northstar | 0.9 | AGR-NST-01 | NORTHSTAR_ADVISORY_2026 | Victor |
| ADV-02C | Northstar | 0.8 | AGR-NST-01 | NORTHSTAR_ADVISORY_2026 | Victor |
| ADV-03 | Bright Path | 0.5 | AGR-BPA-01 | SPECIAL_REVIEW | other |
| ADV-04 | Other | 0.3 | MIXED | OTHER | other |
| **Total** | | **4.2** | | | |

Northstar = 2.6 / 4.2 = 61.9% Advisory Expense.

---

## 7. Approval Evidence Design

### 7.1. Surface Approval Summary

Player first sees each Northstar tranche as:

| Tranche | Department Head | Finance Approval | Display status |
|---|---|---|---|
| 0.9 | Completed | Completed | Approved |
| 0.9 | Completed | Completed | Approved |
| 0.8 | Completed | Completed | Approved |

Không hiển thị ngay actual actor của Finance step.

### 7.2. Audit Trail Evidence

Khi audit trail được mở:

- Victor thực hiện Department Head approval;
- Finance step được hoàn tất bằng `management_override_proxy`;
- `actual_finance_approver_id = null`;
- `override_actor_id = P-VICTOR`;
- Lucas không có approval event;
- required justification = missing;
- retrospective Finance review = missing.

Đây là **control bypass evidence**, không phải fake signature evidence.

---

## 8. Personnel Principle

Player-visible personnel chỉ chứa facts. Không có field tiết lộ final answer.

### Victor

- Department Head / Business Development Director;
- initiates Northstar tranches;
- signs Northstar agreement;
- executes Department Head approvals;
- audit trail connects Victor to override/proxy route;
- conflict-of-interest evidence exists.

### Lucas

- Finance Manager;
- policy requires Finance approval for each 0.8–0.9 tranche;
- audit trail shows Lucas did **not** approve Northstar;
- Lucas is a bypassed control participant, not a co-approver.
