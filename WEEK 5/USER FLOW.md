# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 5 — USER FLOW

## 1. User Goal

Người chơi phải hoàn thành một chuỗi điều tra có thể giải thích được:

> **Từ financial signal → tìm Northstar → kiểm tra approval/control evidence → đánh giá Management Override → xác định primary responsible individual → đưa ra final evidence-based conclusion.**

User flow không được bắt đầu từ “menu feature”. Nó bắt đầu từ user goal và kết thúc khi hai final decisions được đưa ra.

---

## 2. Flow Overview

```text
START
  ↓
Tab 1 — Financial Screening
  ↓
Tab 2 — Account Drill-down
  ↓
Tab 3 — Transaction Tracing
  ↓
Tab 4 — Control Investigation & Management Override
  ↓
Tab 5 — Responsibility Attribution
  ↓
Tab 6 — Final Evidence Integration
  ↓
RESULT + FINANCIAL TRACE MAP + SCORE/ENDING
```

Người chơi được phép xem lại evidence đã unlock nhưng không được bỏ qua logical step.

---

# 3. Happy Path

| Step | User Action | System Response | Evidence / Output | Next Action |
|---|---|---|---|---|
| **Start** | Mở case Aster Holdings | Load local case data và hiển thị investigation goal | Case context | Bắt đầu Tab 1 |
| **Tab 1** | Xem Financial Overview, nhập DSRI/SGAI/TATA, chọn khu vực cần ưu tiên | Kiểm tra calculation theo tolerance và judgment | `SG&A` confirmed nếu chọn đúng | Mở SG&A Breakdown |
| **Tab 2** | Xem breakdown, tính Advisory change, chọn khoản mục cần drill-down | Kiểm tra calculation/judgment | `Advisory Expense` confirmed | Mở Advisory Ledger |
| **Tab 3** | Tính Northstar total/share, chọn Northstar related transaction group | Kiểm tra calculation/judgment | Northstar / `AGR-NST-01` confirmed | Mở Surface Approval Summary |
| **Tab 4 — Stage 1** | Đọc approval summary và đánh giá initial impression | Ghi nhận rằng hồ sơ bề mặt appears complete | Surface status stored separately from final control finding | Mở Approval Audit Trail |
| **Tab 4 — Stage 2** | Đọc audit trail | User nhận ra Lucas không có approval event; Victor dùng override/proxy route; required conditions thiếu | Finance approval bypass confirmed | Tiếp tục aggregate analysis |
| **Tab 4 — Stage 3** | Aggregate 0.9 + 0.9 + 0.8 và so policy | Check `2.6 > 1.0` | CFO + Board escalation requirement | Đánh giá Override |
| **Tab 4 — Stage 4** | Chọn `Override Supported/Not Supported` + supporting evidence | Đối chiếu evidence state | Management Override assessment | Mở Personnel Evidence |
| **Tab 5** | So Victor/Lucas/David/Sophia; chọn primary responsible + evidence | Comparative responsibility check | Victor confirmed nếu reasoning phù hợp | Mở Final Review |
| **Tab 6** | Chọn final evidence set hỗ trợ cả Override và Responsibility | Kiểm tra evidence đã unlock và consistency | Final evidence-based conclusion | Result screen |
| **Result** | Xem feedback | Hiển thị conclusion, trace, score/ending, missed evidence | Learning summary | Kết thúc / replay |

---

## 4. Happy Path chi tiết theo từng Tab

### Tab 1 — Financial Screening

User nhìn thấy **read-only case data**, không nhập lại:

- Revenue;
- Receivables;
- SG&A;
- Income from Continuing Operations;
- CFO;
- Total Assets.

User nhập:

- DSRI;
- SGAI;
- TATA;
- focus-area judgment.

Expected:

```text
DSRI = 0.9333
SGAI = 1.12
TATA = 0.0273
Focus area = SG&A
```

System:

- calculation đúng → cộng calculation points;
- judgment SG&A đúng → unlock full SG&A Breakdown;
- feedback nhắc “screening ≠ fraud conclusion”.

### Tab 2 — Account Drill-down

User thấy SG&A Breakdown.

User nhập/chọn:

```text
Advisory % change = 250%
Subaccount = Advisory Expense
```

System cross-check:

```text
absolute increase = 3.0
3.0 > materiality reference 1.1
```

Judgment đúng → unlock Advisory Ledger.

### Tab 3 — Transaction Tracing

User xem Advisory Ledger.

User nhập/chọn:

```text
Northstar total = 2.6
Northstar share = 61.9%
Transaction group = AGR-NST-01
```

System xác nhận related records có:

- same vendor;
- same agreement ID;
- same economic purpose.

Judgment đúng → unlock Surface Approval Summary.

### Tab 4 — Control Investigation

#### Stage 1 — Surface Approval

User thấy:

```text
Department Head Approval: Completed
Finance Approval: Completed
Overall Status: Approved
```

User được hỏi:

> **Ở lớp thông tin hiện tại, hồ sơ có vẻ đã hoàn tất required approval steps chưa?**

Expected:

> **Có — về mặt hiển thị bề mặt.**

System không cho rằng đây là final control conclusion.

#### Stage 2 — Approval Audit Trail

User mở Audit Trail:

```text
Department Head actor = Victor
Finance step method = management_override_proxy
Actual Finance Manager approval event = none
Override actor = Victor
Required justification = missing
Retrospective Finance review = missing
Lucas approval event = none
```

User chọn finding:

> **Finance approval control was bypassed; Lucas did not actually approve.**

#### Stage 3 — Aggregate Approval

User đối chiếu:

```text
0.9 + 0.9 + 0.8 = 2.6
```

với policy:

```text
> 1.0 → CFO + Board
```

Expected finding:

> **Northstar should be escalated to CFO + Board at aggregate economic transaction level.**

#### Stage 4 — Override Judgment

User chọn:

```text
Management Override = Supported
```

và evidence hỗ trợ.

System chỉ xác nhận khi evidence set phù hợp; không suy ra từ một field duy nhất.

### Tab 5 — Responsibility Attribution

User xem facts của bốn người.

Key distinction:

- Victor = initiator + agreement signatory + Department Head actor + override actor + conflict evidence;
- Lucas = Finance Manager required by policy but bypassed; no actual approval event;
- David/Sophia = contextual/process relevance, weaker direct evidence.

User chọn:

```text
Primary responsible individual = Victor
```

và evidence supporting attribution.

### Tab 6 — Final Evidence Integration

User phải chọn một set evidence hỗ trợ đồng thời:

1. Management Override;
2. Victor's primary responsibility.

System hiển thị final conclusion sau Submit.

---

# 5. Alternative Paths

Alternative path là **input hợp lệ nhưng reasoning/calculation chưa đúng**.

| Tình huống | System Behavior | Learning Effect |
|---|---|---|
| Calculation sai nhưng judgment đúng ở Tab 1–3 | Mất calculation points; full evidence vẫn unlock | Arithmetic không phá investigation chain |
| Calculation đúng nhưng judgment sai | Calculation points vẫn giữ; chỉ fallback evidence mở | Phân biệt calculation với investigative judgment |
| Tab 1 chọn sai focus area | Cho limited financial summary; vẫn cho progression | User thấy chain bắt đầu yếu |
| Tab 2 chọn sai subaccount | Limited Advisory summary; không full ledger | Evidence trail chưa được xác nhận |
| Tab 3 chọn sai transaction group | Control-policy fallback thay vì full Northstar evidence | User phải tiếp tục với evidence yếu hơn |
| Tab 4 Stage 1 hiểu sai surface approval | Short feedback; Audit Trail vẫn có thể được điều tra | Không chặn core learning point surface-vs-actual |
| Tab 4 bỏ sót Finance bypass | Personnel view dùng fallback | Override reasoning yếu hơn |
| Tab 4 nhận ra Finance bypass nhưng bỏ sót aggregate escalation | Override evidence set incomplete | Không đủ full-credit Management Override reasoning |
| Tab 5 chọn Lucas | Final Review vẫn mở nhưng responsibility node chưa confirmed | User thấy “required approver ≠ responsible actor” |
| Tab 6 evidence set thiếu | Final conclusion/feedback cho thấy evidence gap | Information Integration được phản hồi trực tiếp |

Nguyên tắc:

> **Không biến một lựa chọn sai thành game-over. Wrong reasoning ảnh hưởng score, evidence confidence và feedback; progression vẫn tiếp tục.**

---

# 6. Error Paths

Error path là **input không hợp lệ hoặc system/data state không thể xử lý**.

## 6.1. Calculation Input Error

| Error | Message | Action |
|---|---|---|
| Blank calculation | `Vui lòng nhập kết quả tính toán.` | Không Submit |
| Non-numeric input | `Chỉ nhập giá trị số.` | Không Submit |
| Percentage nhập sai format | `Nhập phần trăm dưới dạng số, ví dụ 250.` | Không Submit |
| Required judgment chưa chọn | `Hãy chọn một kết luận trước khi tiếp tục.` | Không Submit |
| Required evidence chưa chọn | `Hãy chọn bằng chứng hỗ trợ kết luận.` | Không Submit |

## 6.2. Evidence-State Error

| Error | System Response |
|---|---|
| Evidence ID chưa unlock nhưng user cố chọn | Không cho chọn; card ở trạng thái locked |
| Evidence reference không tồn tại | Log technical error; không silently default |
| Audit trail thiếu | Hiển thị `Evidence incomplete`; không kết luận actual actor |
| Conflict evidence thiếu | Hiển thị `Unknown`; không mặc định `No conflict` |

## 6.3. Local Data Load Error

Nếu `case_data.json`, `rules.json` hoặc `evidence.json` không load được:

> **Case data could not be loaded. Please restart the case.**

Không hiển thị fabricated/default financial data.

---

# 7. Progress & Navigation

Progress tracker:

```text
Step 1 / 6 — Financial Screening
Step 2 / 6 — Account Drill-down
Step 3 / 6 — Transaction Tracing
Step 4 / 6 — Control Investigation
Step 5 / 6 — Responsibility Attribution
Step 6 / 6 — Final Review
```

Người chơi:

- được quay lại xem evidence đã unlock;
- được xem Trace Map;
- không được mở evidence thuộc step chưa unlock;
- không được chỉnh answer đã Submit trong MVP nếu one-submit-per-tab vẫn được giữ.

---

# 8. Financial Trace Map Behavior

Trace Map ghi cả:

- user choice;
- confirmed evidence;
- unresolved/missed step.

Ví dụ happy path:

```text
Financial Screening
SGAI 1.12
↓
SG&A
↓
Advisory Expense +250%
↓
Northstar 2.6 / 61.9%
↓
Surface Approval: Appears Complete
↓
Audit Trail: Victor Override / Lucas Bypassed
↓
Aggregate 2.6 Requires CFO + Board
↓
Management Override Supported
↓
Victor Primary Responsible
↓
Final Evidence Set
```

Nếu user sai một bước:

```text
[UNRESOLVED — Transaction Group]
```

hoặc trạng thái tương đương được hiển thị ở final review.

Trace Map không tự resolve evidence mà user chưa chứng minh.

---

# 9. Working Interface Draft — Week 5 Target

Week 5 cần có **working interface draft**, không chỉ mockup.

### Minimum functional evidence

- [ ] Unity mở được case bằng local JSON.
- [ ] Navigation giữa 6 steps hoạt động.
- [ ] Tab 1 có read-only financial data + calculation/judgment input.
- [ ] Tab 1 judgment có thể mở SG&A Breakdown.
- [ ] Tab 2 và Tab 3 đọc đúng case data.
- [ ] Tab 4 hiển thị Surface Approval trước Audit Trail.
- [ ] Audit Trail không expose Lucas as approver; Lucas phải hiện là `no approval event`.
- [ ] Victor phải hiện là override/proxy actor trong evidence đúng thời điểm.
- [ ] Tab 5 đọc personnel evidence.
- [ ] Tab 6 nhận evidence state và hiển thị Final Review.
- [ ] Progress tracker hoạt động.
- [ ] Trace Map lưu ít nhất một full happy-path run.
- [ ] Error message cho blank/non-numeric input hoạt động.

Nếu một tab chưa nối logic thật, phải ghi rõ là **partial/mock state**; không trình bày mockup như working feature.

---

# 10. Week 6 Handoff

Week 6 ưu tiên:

1. nối toàn bộ 6-step flow;
2. kiểm thử happy/alternative/error path;
3. kiểm tra evidence unlock;
4. kiểm tra no-answer-leak;
5. kiểm tra calculation vs judgment behavior;
6. kiểm tra Tab 4 surface-vs-audit sequence;
7. kiểm tra Lucas bypassed / Victor override wording;
8. kiểm tra Final Trace Map;
9. sửa usability issue từ playtest.
