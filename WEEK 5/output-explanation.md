# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 5 — INPUT DESIGN, OUTPUT EXPLANATION & INTERFACE CLARITY

## 1. Nguyên tắc

Week 3 đã xác định input meaning/type/unit/validation.  
Week 4 đã xác định formula/rule/output logic.  
Week 5 chỉ quyết định:

- user nhìn thấy input thế nào;
- user phải nhập/chọn gì;
- output được trình bày theo hierarchy nào;
- explanation ngắn gọn ra sao;
- limitation và next action hiển thị ở đâu.

Một nguyên tắc quan trọng:

> **Prepared case data không phải user-entered input.**

Người chơi không nhập lại Revenue, Receivables, SG&A, CFO hoặc Total Assets. Những dữ liệu này được đọc từ local JSON và hiển thị dạng read-only.

---

# 2. Input Design

## 2.1. Read-only Case Data

| Data | Label hiển thị | Unit | User action |
|---|---|---|---|
| Revenue | Doanh thu | triệu USD | Đọc |
| Receivables | Khoản phải thu | triệu USD | Đọc |
| SG&A | Chi phí SG&A | triệu USD | Đọc |
| Income from Continuing Operations | Lợi nhuận từ hoạt động liên tục | triệu USD | Đọc |
| CFO | Dòng tiền từ hoạt động kinh doanh | triệu USD | Đọc |
| Total Assets | Tổng tài sản | triệu USD | Đọc |
| Materiality reference | Mức tham chiếu trọng yếu của case | triệu USD | Đọc |
| Approval policy | Chính sách phê duyệt nội bộ | triệu USD / role | Đọc |

Không hiển thị tên technical field như `income_from_continuing_operations` cho user.

---

## 2.2. User-Entered Calculation / Judgment Inputs

| Tab | Input trên UI | Type | Example | Required | Validation / Error |
|---|---|---|---|---|---|
| 1 | `Kết quả DSRI` | number | 0.9333 | Yes | Blank/non-number → không Submit |
| 1 | `Kết quả SGAI` | number | 1.12 | Yes | Blank/non-number |
| 1 | `Kết quả TATA` | number | 0.0273 | Yes | TATA có thể âm |
| 1 | `Khu vực cần ưu tiên điều tra` | single select | SG&A | Yes | Phải chọn 1 |
| 2 | `Mức tăng Advisory Expense (%)` | number | 250 | Yes | Number only |
| 2 | `Khoản mục cần drill-down` | single select | Advisory Expense | Yes | Phải chọn 1 |
| 3 | `Tổng Northstar` | number | 2.6 | Yes | Number only; unit triệu USD |
| 3 | `Tỷ trọng Northstar trong Advisory Expense (%)` | number | 61.9 | Yes | 0–100 |
| 3 | `Transaction group cần điều tra` | single select | AGR-NST-01 | Yes | Phải chọn 1 |
| 4 | `Initial approval impression` | single select | Appears complete | Yes | Phải chọn 1 |
| 4 | `Audit-trail finding` | single select / checklist | Lucas did not approve; Victor used override/proxy | Yes | Phải có control finding |
| 4 | `Aggregate approval requirement` | single select | CFO + Board | Yes | Phải chọn 1 |
| 4 | `Management Override assessment` | single select | Supported | Yes | Supported / Not Supported |
| 4 | `Evidence hỗ trợ Override` | multi-select | Audit Trail + Policy + Agreement link | Yes | Chỉ evidence đã unlock |
| 5 | `Cá nhân chịu trách nhiệm chính` | person cards / radio | Victor | Yes | Không cho text tự do |
| 5 | `Evidence hỗ trợ responsibility` | multi-select | agreement + override actor + conflict | Yes | Chỉ evidence đã unlock |
| 6 | `Final evidence set` | multi-select | evidence chain | Yes | Chỉ evidence đã unlock |

---

# 3. Output Design theo từng Tab

Mỗi output phải có 7 phần:

1. main result;
2. key number/unit;
3. interpretation;
4. comparison/context;
5. explanation;
6. limitation;
7. next action.

---

## 3.1. Tab 1 — Financial Screening

### Main result

> **Khu vực ưu tiên: SG&A**

### Supporting metrics

```text
DSRI = 0.9333
SGAI = 1.12
TATA = 0.0273
```

### Context

- DSRI nằm trong case-specific review range;
- SGAI > 1.10 → review SG&A;
- |TATA| < 0.05 → không tạo hướng chính.

### Explanation copy

> **SG&A được ưu tiên vì SGAI = 1.12 vượt case-specific review rule 1.10. DSRI và TATA không tạo hướng chính trong sample.**

### Limitation

> Đây là screening result. Nó không chứng minh fraud hoặc Management Override.

### Next Action

> **Mở SG&A Breakdown để xác định khoản mục nào tạo biến động.**

---

## 3.2. Tab 2 — Account Drill-down

### Main result

> **Advisory Expense là khoản mục cần truy vết.**

### Supporting metrics

```text
1.2 → 4.2 triệu USD
Absolute increase = 3.0 triệu USD
Percentage change = +250%
Materiality reference = 1.1 triệu USD
```

### Explanation

> Advisory Expense tăng 3.0 triệu USD, lớn hơn materiality reference của case và là một contributor đáng chú ý trong biến động SG&A.

### Limitation

> Biến động lớn chỉ tạo lý do để truy vết; chưa xác định transaction nào có vấn đề.

### Next Action

> **Mở Advisory Expense Ledger.**

---

## 3.3. Tab 3 — Transaction Tracing

### Main result

> **Northstar là transaction group cần kiểm tra.**

### Supporting metrics

```text
Northstar total = 2.6 triệu USD
Northstar share = 61.9% Advisory Expense
```

### Evidence context

Ba tranche cùng:

- vendor;
- agreement ID;
- economic purpose.

### Explanation

> Northstar chiếm phần lớn Advisory Expense và các tranche có đủ linkage để được xem như một related transaction group cho bước kiểm tra tiếp theo.

### Limitation

> Tỷ trọng lớn không tự chứng minh control violation.

### Next Action

> **Kiểm tra Surface Approval Summary.**

---

## 3.4. Tab 4 — Stage 1: Surface Approval

### Main result

> **Initial impression: Approval appears complete.**

### Display

```text
Department Head Approval: Completed
Finance Approval: Completed
Overall Status: Approved
```

### Explanation

> Ở lớp summary, required approval steps đều được hiển thị Completed.

### Warning

> **Status = Completed không cho biết actual actor hoặc method. Audit trail vẫn cần được kiểm tra.**

### Next Action

> **Open Approval Audit Trail.**

---

## 3.5. Tab 4 — Stage 2: Audit Trail

### Main result

> **Finance approval control was bypassed.**

### Key evidence

```text
Department Head actor = Victor
Finance step method = management_override_proxy
Actual Finance Manager approval event = none
Override actor = Victor
Required justification = missing
Retrospective Finance review = missing
Lucas approval event = none
```

### Explanation

> Surface summary cho thấy Finance Approval = Completed, nhưng audit trail cho thấy Lucas không thực hiện approval. Finance step được hoàn tất bằng override/proxy route do Victor kích hoạt và các điều kiện bắt buộc của route không được đáp ứng.

### Limitation

> Finding này cho thấy control bypass; final Management Override assessment vẫn phải đọc cùng transaction-splitting/escalation evidence và responsibility evidence.

### Next Action

> **Kiểm tra aggregate transaction value và approval requirement.**

---

## 3.6. Tab 4 — Stage 3: Aggregate Approval

### Main result

> **Northstar phải được escalated lên CFO + Board.**

### Calculation

```text
0.9 + 0.9 + 0.8 = 2.6 triệu USD
2.6 > 1.0 triệu USD
```

### Explanation

> Ba tranche có cùng agreement và economic purpose, nên aggregate economic value là 2.6 triệu USD. Theo simulated approval policy, mức này yêu cầu CFO + Board.

### Limitation

> Approval policy là policy mô phỏng của case, không phải external professional standard.

### Next Action

> **Đưa ra Management Override Assessment.**

---

## 3.7. Tab 4 — Final Control Output

### Main result

> **Management Override Assessment: Supported**

### Why

Interface hiển thị một evidence summary:

```text
✓ Surface approval appeared complete
✓ Audit trail: Lucas did not approve
✓ Victor used non-compliant override/proxy route
✓ Required justification/review missing
✓ Related tranches aggregate to 2.6
✓ CFO + Board escalation bypassed
```

### Limitation

> Kết luận chỉ áp dụng cho simulated evidence của Aster Holdings. Đây không phải legal determination hoặc full audit opinion.

### Next Action

> **Compare responsibility evidence.**

---

## 3.8. Tab 5 — Responsibility Attribution

### Main result

> **Primary responsible individual: Victor**

### Comparative explanation

**Victor**

- transaction initiator;
- agreement signatory;
- Department Head actor;
- override/proxy actor;
- direct control-bypass connection;
- conflict evidence.

**Lucas**

- Finance Manager required by policy;
- no actual approval event;
- bypassed rather than co-approving;
- no override activation evidence;
- no conflict evidence.

### Explanation copy

> Victor có evidence trực tiếp và đa chiều mạnh nhất nối với transaction structure và control bypass. Lucas là required Finance approver nhưng audit trail cho thấy anh không thực hiện approval và bị bypass.

### Limitation

> Responsibility Attribution trong game là educational case conclusion, không phải legal finding.

### Next Action

> **Review the full evidence chain.**

---

## 3.9. Tab 6 — Final Review

### Main result — highest hierarchy

> **Evidence-Based Management Override and Responsibility Conclusion**

### Display

```text
Management Override: Supported
Primary Responsible Individual: Victor
```

### Evidence chain

```text
SGAI signal
→ SG&A
→ Advisory Expense
→ Northstar
→ Surface Approval appears complete
→ Audit Trail reveals Victor override / Lucas bypassed
→ Aggregate 2.6 requires CFO + Board
→ Management Override Supported
→ Victor Primary Responsible
```

### Supporting gameplay result — lower hierarchy

```text
Score: xx / 100
Ending: Succession Confirmed / Conditional / Delayed / Denied
```

Score/ending không được đặt cao hơn main evidence conclusion.

### Feedback sections

- Correct evidence used;
- Evidence missed;
- Wrong assumptions/judgments;
- Trace Map;
- limitation;
- optional replay.

---

# 4. Interface Explainability Components

| Component | Screen | Purpose |
|---|---|---|
| Short formula note | Tab 1–3 | Cho user biết calculation structure |
| Case-rule box | Tab 1 / Tab 4 | Hiển thị screening/approval rules tại đúng nơi cần |
| `Why this result?` text | Sau Submit | Giải thích 1–3 câu |
| Evidence source tag | Tab 4–6 | Cho biết finding đến từ Summary, Audit Trail, Agreement, Personnel, Conflict evidence |
| Surface vs Actual comparison | Tab 4 | Tránh user nhầm `Completed = actually approved` |
| Person comparison cards | Tab 5 | Giúp phân biệt involvement và primary responsibility |
| Limitation box | Tab 1 / 4 / 5 / 6 | Ngăn overclaim |
| Next-action button | Mỗi tab | User biết phải làm gì tiếp |
| Final missed-evidence breakdown | Tab 6 | Hỗ trợ reflection |

---

# 5. UI Wording Rules

## Nên dùng

- `Khu vực cần ưu tiên điều tra`
- `Khoản mục cần drill-down`
- `Transaction group cần kiểm tra`
- `Initial approval impression`
- `Approval Audit Trail`
- `Finance approval control was bypassed`
- `Management Override: Supported`
- `Primary responsible individual`
- `Evidence supports...`

## Không nên dùng

- `Fraud detected`
- `Victor committed fraud`
- `Lucas approved`
- `M-Score proves manipulation`
- `Material Weakness`
- `SOX severity`
- `PV damage`
- `culprit=true`
- `Finance Approval Completed = Lucas approved`

---

# 6. Screen Hierarchy

Mỗi decision screen nên theo thứ tự:

```text
1. Step title + goal
2. Read-only case data / evidence
3. Relevant rule/reference
4. Calculation/judgment input
5. Submit
6. Result
7. Why
8. Limitation
9. Next Action
10. Trace Map update
```

Không đặt narrative/cutscene giữa input và decision nếu không có learning value.

---

# 7. Working Interface Review Checklist

- [ ] Labels không dùng technical JSON field names.
- [ ] Units hiển thị rõ.
- [ ] User không phải nhập lại prepared case data.
- [ ] Error message cụ thể.
- [ ] Screening output không overclaim fraud.
- [ ] Surface Approval không lộ actual actor.
- [ ] Audit Trail cho thấy Lucas `no approval event`.
- [ ] Victor chỉ được xác định là primary responsible sau Responsibility Attribution.
- [ ] Score/ending không lấn át final evidence conclusion.
- [ ] Mỗi output có explanation + limitation + next action.
- [ ] Old M-Score/SOX/PV wording đã bị loại khỏi UI.
