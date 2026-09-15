# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — INPUT DICTIONARY

## 1. Mục đích

Week 2 xác định các input groups và reasoning requirements.

Week 3 chuyển chúng thành field cụ thể để Unity/C# có thể load, validate và xử lý mà không để raw data tự tiết lộ conclusion.

Tất cả giá trị tiền tệ dùng **triệu USD**. Kỳ hiện tại là `N`, kỳ trước là `N-1`.

---

## 2. Core Input Dictionary

| Input name | Meaning | Type | Unit | Example | Validation | Missing handling | Owner |
|---|---|---|---|---|---|---|---|
| `revenue` | Doanh thu | number | triệu USD | 150 | `>0` | ratio unavailable | Dũng |
| `receivables` | Khoản phải thu | number | triệu USD | 21 | `>=0` | DSRI unavailable | Dũng |
| `sga_total` | Tổng SG&A | number | triệu USD | 21 | `>=0` | SGAI/drill-down unavailable | Dũng |
| `income_from_continuing_operations` | Income cho TATA prototype | number | triệu USD | 11 | có thể âm | TATA unavailable | Dũng |
| `cfo` | Cash Flow from Operations | number | triệu USD | 8 | có thể âm | TATA unavailable | Dũng |
| `total_assets` | Tổng tài sản | number | triệu USD | 110 | `>0` | TATA unavailable | Dũng |
| `materiality_reference` | Reference về mức độ đáng chú ý | number | triệu USD | 1.1 | `>0` | significance check unavailable | Hiền |
| `transaction_id` | Transaction ID | string | — | ADV-02A | unique | Required | Dũng |
| `vendor_id` | Vendor ID | string | — | V-NORTHSTAR | non-empty | Required | Dũng |
| `amount` | Giá trị giao dịch | number | triệu USD | 0.9 | `>0` | Required | Dũng |
| `agreement_id` | Agreement ID | string | — | AGR-NST-01 | valid ID | do not auto-aggregate | Ngọc |
| `economic_purpose_code` | Economic-purpose code | string | — | NORTHSTAR_ADVISORY_2026 | non-empty | linkage weaker | Ngọc |
| `initiated_by_person_id` | Transaction initiator | string | — | P-VICTOR | valid personnel ID | unknown | Dũng/Ngọc |
| `approval_summary_status` | Surface status | enum/object | — | Completed | valid status | evidence incomplete | Ngọc |
| `required_approval_role` | Role required by policy/step | enum/string | — | Finance Manager | valid role | evidence incomplete | Hiền |
| `recorded_actor_id` | Actor recorded for a step | string/null | — | P-VICTOR | valid ID/null | unknown | Ngọc |
| `completion_type` | How step was completed | enum | — | Proxy Route | allowed enum | unknown | Ngọc |
| `recorded_finance_approver_id` | Recorded Finance approver | string/null | — | null | valid ID/null | unknown | Ngọc |
| `route_initiated_by_person_id` | Person initiating special route | string/null | — | P-VICTOR | valid ID/null | unknown | Ngọc |
| `valid_reason_code_present` | Valid reason code exists | boolean | — | false | true/false | unknown | Ngọc |
| `documented_justification_present` | Required justification exists | boolean | — | false | true/false | unknown | Ngọc |
| `retrospective_finance_review_present` | Retrospective Finance review exists | boolean | — | false | true/false | unknown | Ngọc |
| `person_id` | Person ID | string | — | P-VICTOR | unique | Required | Ngọc |
| `role` | Job role | string | — | Finance Manager | valid role | unknown | Ngọc |
| `approval_role` | Approval relevance | string | — | Finance Manager | valid role | unknown | Ngọc |
| `authority_level` | Authority | string | — | Department Head | role list | unknown | Ngọc |
| `conflict_evidence_state` | Conflict evidence | enum | — | confirmed | unknown/confirmed/not-supported | unknown | Ngọc |
| `selected_focus_area` | User focus selection | enum | — | SG&A | valid option | no submission | User |
| `selected_subaccount` | User subaccount selection | enum | — | Advisory Expense | valid option | no submission | User |
| `selected_transaction_group` | User transaction group | string | — | AGR-NST-01 | existing group | assisted continuation if wrong | User |
| `factual_finding` | User's fact-level conclusion | enum/string ID | — | FINANCE_NO_RECORDED_APPROVER | allowed finding | Required for control interpretation | User |
| `control_interpretation` | User's control-level interpretation | enum | — | Possible Finance Approval Bypass | allowed option | Required | User |
| `override_assessment` | Final Layer 2 assessment | enum | — | Supported | Supported/Not Supported | Required | User |
| `responsible_individual` | Primary responsible person | string | — | P-VICTOR | valid person | Required | User |
| `supporting_evidence_ids` | Evidence selected by user | array | — | POL-01, AUD-01 | unlocked IDs | Required at major decisions | User |
| `evidence_state` | State of a reasoning/evidence node | enum | — | confirmed | allowed states | unreviewed | System |
| `assistance_state` | Whether node was assisted | enum | — | assisted | none/assisted | none | System |

---

## 3. Evidence State

Allowed Evidence State values:

```text
unreviewed
reviewed
confirmed
unresolved
assisted
contradicted
```

Interpretation:

| State | Meaning |
|---|---|
| `unreviewed` | User chưa xem/đánh giá |
| `reviewed` | Source đã được xem nhưng chưa có confirmed conclusion |
| `confirmed` | User reasoning/evidence đủ để xác nhận node |
| `unresolved` | User chưa xác định đúng node |
| `assisted` | Correct-path info được system cung cấp để downstream flow tiếp tục |
| `contradicted` | User conclusion xung đột evidence đã confirm |

Evidence State phục vụ Trace Map và case synthesis.

Evidence State không phải Performance Score.

---

## 4. Evidence Relevance Classification

Trong `answer_key.json`, evidence cần được phân loại:

| Class | Meaning |
|---|---|
| `required_relevant` | Cần để support conclusion |
| `additional_relevant` | Hỗ trợ nhưng không bắt buộc |
| `irrelevant` | Không giúp support conclusion |
| `contradictory` | Mâu thuẫn conclusion/evidence chain |

Mục đích:

> Selecting all evidence must not guarantee full credit.

Week 4 sẽ formalize exact scoring.

---

## 5. Sample Financial Data

| Chỉ tiêu | N-1 | N |
|---|---:|---:|
| Revenue | 120 | 150 |
| Receivables | 18 | 21 |
| SG&A | 15 | 21 |
| Income from continuing operations | 9 | 11 |
| CFO | 10.5 | 8 |
| Total assets | 95 | 110 |

---

## 6. Financial Screening

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

Case-specific pedagogical rules:

DSRI `0.90–1.15` → no priority flag.  
SGAI `>1.10` → review SG&A.  
`|TATA| >0.05` → additional accrual review.

Các rule trên không phải official Beneish cutoffs.

---

## 7. SG&A Breakdown

| Subaccount | N-1 | N | Change |
|---|---:|---:|---:|
| Salary | 7.0 | 9.0 | +2.0 |
| Marketing | 3.5 | 4.5 | +1.0 |
| Legal | 1.3 | 1.8 | +0.5 |
| Advisory Expense | 1.2 | 4.2 | **+3.0** |
| Other | 2.0 | 1.5 | -0.5 |
| **Total** | **15.0** | **21.0** | **+6.0** |

Advisory increase +3.0 > materiality reference 1.1 → justify transaction tracing.

---

## 8. Advisory Expense Ledger

| ID | Vendor | Amount | Agreement | Purpose | Initiated by |
|---|---|---:|---|---|---|
| ADV-01 | Global Consulting | 0.8 | AGR-GCL-01 | ANNUAL_ADVISORY | other |
| ADV-02A | Northstar | 0.9 | AGR-NST-01 | NORTHSTAR_ADVISORY_2026 | Victor |
| ADV-02B | Northstar | 0.9 | AGR-NST-01 | NORTHSTAR_ADVISORY_2026 | Victor |
| ADV-02C | Northstar | 0.8 | AGR-NST-01 | NORTHSTAR_ADVISORY_2026 | Victor |
| ADV-03 | Bright Path | 0.5 | AGR-BPA-01 | SPECIAL_REVIEW | other |
| ADV-04 | Other | 0.3 | MIXED | OTHER | other |
| **Total** |  | **4.2** |  |  |  |

Northstar = 2.6 / 4.2 = 61.9%.

---

## 9. Approval Evidence Design

### 9.1. Surface Approval Summary

Player first sees each Northstar tranche as:

| Tranche | Department Head | Finance Approval | Display status |
|---|---|---|---|
| 0.9 | Completed | Completed | Approved |
| 0.9 | Completed | Completed | Approved |
| 0.8 | Completed | Completed | Approved |

Đây là read-only observation.

Không hiển thị actor.

Không score một câu hỏi “looks complete?” như mandatory gate.

### 9.2. Raw Audit Trail

Player-facing raw record chỉ hiển thị neutral facts:

```text
Department Head step
Required role: Department Head
Status: Completed
Recorded actor: Victor

Finance step
Required role: Finance Manager
Status: Completed
Completion type: Proxy Route
Recorded approver: —
Route initiated by: Victor

Supporting record
Reason code: —
Documented justification: —
Retrospective Finance review: —
```

Không dùng player-facing field:

`management_override_proxy`  
`override_actor`  
`Lucas_bypassed`  
`control_bypass = true`

### 9.3. Expected Factual Finding

> Finance step is recorded as Completed, but no Finance Manager approver is recorded; the Proxy Route was initiated by Victor.

### 9.4. Expected Control Interpretation

> Finance approval control may have been bypassed.

Control interpretation chỉ xuất hiện sau user reasoning/Submit.

---

## 10. Personnel Principle

### Baseline Personnel — Control Investigation

Chỉ chứa role/authority facts:

**Victor** — Business Development Director / Department Head.  
**Lucas** — Finance Manager.  
**David** — CFO.  
**Sophia** — Internal Control Manager.

Baseline Personnel không nói ai là culprit/primary responsible.

### Responsibility Evidence — Later Unlock

Detailed involvement/conflict evidence được mở ở Responsibility stage.

Victor:

initiates Northstar;  
signs agreement;  
Department Head actor;  
Proxy Route initiator;  
conflict evidence exists.

Lucas:

required Finance role;  
no recorded Northstar approval event;  
no Proxy Route initiation evidence;  
monitoring responsibility requires separate evidence.

David:

CFO role relevant to aggregate approval escalation;  
no direct Northstar action evidence.

Sophia:

monitoring/control context;  
no direct override-action evidence in current case.

---

## 11. Assisted Continuation Input

Nếu transaction-selection node = `unresolved`, system có thể load:

```text
assisted_referral_packet_id = REF-NORTHSTAR-01
assistance_state = assisted
```

Packet chỉ chứa minimum Northstar data cần cho control investigation.

Previous transaction-selection state vẫn là `assisted`, không đổi thành `confirmed`.
