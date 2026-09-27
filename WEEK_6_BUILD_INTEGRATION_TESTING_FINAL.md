# The Last Heir — Financial Investigation Game

**Học phần:** NHA408E  
**Nhóm:** G08  

# WEEK 6 — XÂY DỰNG, TÍCH HỢP VÀ KIỂM THỬ

> **Implementation note:** Week 6 không thay đổi Product Direction của Week 2, data/evidence design của Week 3, logic/scoring của Week 4 hoặc user flow của Week 5. Week 6 dùng các correction/clarification đã chốt sau midterm làm implementation reference khi có naming hoặc rule chưa nhất quán giữa các tài liệu cũ.

---

## 1. Mục tiêu của Week 6

Week 6 chuyển The Last Heir từ một tập hợp specification và component thành một **connected working product** có thể chạy end-to-end.

Không tạo flow khái niệm mới.

Core flow được bảo vệ:

```text
Financial Screening
→ Account Drill-down
→ Transaction Tracing
→ Surface Approval Observation
→ Control Evidence Workspace
→ Factual Finding
→ Control Interpretation
→ Proxy Route Compliance
→ Aggregate Approval
→ Direct Management Connection
→ Management Override Assessment
→ Responsibility Attribution
→ Final Evidence Integration
```

Câu hỏi trung tâm:

> **Các component đã thiết kế có được load, nối, xử lý, hiển thị và kiểm thử đúng như approved logic hay chưa?**

Week 6 tập trung vào:

- build;
- integration;
- validation;
- end-to-end testing;
- financial consistency testing;
- evidence-state testing;
- assisted-path testing;
- no-answer-leak testing;
- bug fixing;
- deployment/fallback;
- README;
- contribution evidence;
- scope freeze.

### Kết quả cần có cuối Week 6

- một core flow chạy từ Tab 1 đến Tab 6;
- local JSON load được;
- C# logic đọc đúng field;
- Evidence State và Performance Score tách biệt;
- normal path chạy được;
- assisted path chạy được;
- sample input và expected output rõ;
- test table có Expected / Actual / Status;
- bug log có reproduction steps và verification;
- critical logic được fix hoặc ghi blocker;
- Windows build hoặc Unity Editor fallback chạy được;
- README có run instructions;
- scope được freeze;
- contribution evidence rõ.

---

## 2. Prototype khác Working Product

Prototype chỉ cần chứng minh một phần ý tưởng.

Working product của The Last Heir phải cho phép user thực hiện core task:

```text
Input / Evidence
→ Validation
→ Financial / Transaction Logic
→ Evidence State Logic
→ Player Decision
→ Performance Score
→ Feedback / Trace Map
→ Final Evidence-Based Conclusion
```

Một working product tối thiểu phải:

1. load case data;
2. validate dữ liệu;
3. nhận user calculation / judgment / evidence selection;
4. xử lý rule đúng;
5. cập nhật Evidence State;
6. cập nhật Performance Score riêng;
7. mở đúng downstream content;
8. hiển thị explanation;
9. xử lý wrong path cơ bản;
10. không lộ `answer_key.json` ra player-facing UI.

---

## 3. Technical End-to-End Flow

### 3.1 Technical architecture

```text
Local JSON
├─ case_data.json
├─ rules.json
├─ evidence.json
└─ answer_key.json  [internal only]
        ↓
JSON Loader
        ↓
C# Serializable Objects
        ↓
Validation
        ↓
Financial / Transaction Logic
        ↓
Evidence Review + Decision Logic
        ↓
Evidence State Engine
        ↓
Performance Score Engine
        ↓
Unlock / Assisted Continuation
        ↓
UI + Feedback + Trace Map
        ↓
Final Review
```

### 3.2 Canonical Evidence States

```text
Unreviewed
Reviewed
Confirmed
Unresolved
Assisted
Contradicted
```

Không sử dụng `PartiallyConfirmed`.

Partial performance chỉ được thể hiện bằng score.

### 3.3 Canonical decision confirmation gate

Một major decision node chỉ trở thành `Confirmed` khi:

```text
correct_judgment == true
AND required_evidence_coverage == 1.00
AND evidence_relevance >= 0.75
AND contradictory_evidence_count == 0
AND prerequisite_states_satisfied == true
```

Nếu judgment đúng nhưng support chưa đủ:

```text
Evidence State = Unresolved
Performance Score = Partial
```

Nếu system phải cung cấp correct-path information:

```text
Evidence State = Assisted
```

Score không được đổi một node thành `Confirmed`.

---

## 4. Completed Parts khác Connected Product

Week 6 không đánh giá một component chỉ vì nó tồn tại.

Ví dụ:

```text
CalculateSGAI() chạy
```

chưa đủ nếu UI không truyền đúng input hoặc output không cập nhật.

Connected product phải chứng minh các connection sau:

```text
JSON field
→ C# field
→ validation
→ rule function
→ user decision
→ evidence state
→ score
→ UI feedback
→ unlock
→ final review
```

Các connection ưu tiên bảo vệ:

1. Financial data → calculation;
2. calculation → Tab 1 routing;
3. SG&A → Advisory Expense;
4. Advisory ledger → Northstar;
5. Northstar → Tab 4 evidence workspace;
6. evidence review → factual finding;
7. judgment + evidence → confirmation gate;
8. confirmed Layer 2 nodes → Management Override;
9. responsibility evidence → Victor attribution;
10. state history → Final Review / Trace Map.

---

## 5. Integration Audit

> **Actual/Status chỉ được đổi thành Pass sau khi có execution evidence.**

| ID | Connection | Expected | Actual | Status | Owner |
|---|---|---|---|---|---|
| INT-01 | `case_data.json` → C# | Financial, SG&A và transaction data deserialize đúng | Pending run | Not verified | Khuê |
| INT-02 | `rules.json` → C# | Screening, approval, proxy, aggregation rules load đúng | Pending run | Not verified | Hiền / Khuê |
| INT-03 | `evidence.json` → UI | Surface, Personnel, Raw Audit và evidence cards hiển thị đúng stage | Pending run | Not verified | Ngọc / Khuê |
| INT-04 | `answer_key.json` → rule engine | Có thể validate nội bộ nhưng không bind player UI | Pending run | Not verified | Hiền / Khuê |
| INT-05 | UI input → financial logic | User input số được parse/validate đúng | Pending run | Not verified | Dũng / Khuê |
| INT-06 | Financial logic → state | Correct calculation/judgment cập nhật đúng node | Pending run | Not verified | Hiền |
| INT-07 | Evidence selection → rule engine | Coverage, Relevance, contradiction được tính đúng | Pending run | Not verified | Hiền |
| INT-08 | State engine → unlock | Correct/assisted state mở đúng stage tiếp theo | Pending run | Not verified | Hiền / Khuê |
| INT-09 | Evidence State → Override | Override đọc prerequisite states, không đọc total score | Pending run | Not verified | Hiền |
| INT-10 | Player history → Trace Map | Confirmed/Assisted/Unresolved hiển thị đúng | Pending run | Not verified | Khuê |
| INT-11 | Score → Ending | Score chỉ tạo gameplay ending | Pending run | Not verified | Hiền / Khuê |
| INT-12 | Build → data files | Standalone build tìm thấy local JSON | Pending run | Not verified | Khuê |

### Integration blockers cần kiểm tra đầu tiên

- canonical state name không khớp JSON/C#;
- `cash_flow_from_operations` bị nhầm với CFO role;
- evidence ID không resolve;
- file path khác giữa Editor và Build;
- UI giữ cached output sau khi resubmit;
- Evidence State bị score ghi đè;
- assisted node tự thành Confirmed;
- `answer_key.json` xuất hiện trên UI;
- evidence unlock sai stage.

---

## 6. Deployment / Working Build Check

### Primary target

```text
Unity Windows Standalone Build
```

### Fallback

```text
Unity Editor demo
```

Nếu môn học yêu cầu public access, nhóm có thể cung cấp repository/release/download link; tuy nhiên core technical assumption hiện tại không yêu cầu backend/API.

### Deployment checklist

- [ ] Windows build mở được trên máy khác.
- [ ] Build không phụ thuộc absolute local path.
- [ ] `case_data.json` được include.
- [ ] `rules.json` được include.
- [ ] `evidence.json` được include.
- [ ] `answer_key.json` chỉ được dùng nội bộ.
- [ ] Không có secret/API key trong repo.
- [ ] README có Unity version.
- [ ] README có cách chạy Editor.
- [ ] README có cách chạy build.
- [ ] Backup demo bằng Unity Editor sẵn sàng.
- [ ] Build được test từ clean clone hoặc máy khác.

### Deployment status

```text
Current status: PENDING VERIFICATION
```

Không ghi `Deployment Pass` cho đến khi build được chạy trên environment khác.

---

## 7. Sample Input và Approved Expected Output

### 7.1 Financial sample

| Field | N-1 | N |
|---|---:|---:|
| Revenue | 120 | 150 |
| Receivables | 18 | 21 |
| SG&A | 15 | 21 |
| Income from Continuing Operations | 9 | 11 |
| Cash Flow from Operations | 10.5 | 8 |
| Total Assets | 95 | 110 |

```text
Materiality reference = 1.1 million USD
```

Expected:

```text
DSRI = 0.9333
SGAI = 1.12
TATA = 0.0273
Focus Area = SG&A
```

### 7.2 SG&A sample

```text
Advisory Expense:
1.2 → 4.2

Absolute increase = 3.0
Percentage change = 250%
```

Expected:

```text
Subaccount = Advisory Expense
```

### 7.3 Northstar sample

```text
0.9 + 0.9 + 0.8 = 2.6
2.6 / 4.2 = 61.9%
```

Linkage:

```text
same vendor
same agreement
same economic purpose
```

Expected:

```text
Transaction Group = AGR-NST-01
```

### 7.4 Control sample

Surface:

```text
Department Head = Completed
Finance = Completed
Overall = Approved
```

Raw evidence:

```text
Required Finance role = Finance Manager
Finance step = Completed
Recorded Finance approver = none
Completion type = Proxy Route
Route initiated by = Victor
Reason code = missing
Documented justification = missing
Retrospective Finance review = missing
```

Expected factual finding:

```text
Finance step is recorded as Completed,
but no Finance Manager approver is recorded;
the Proxy Route was initiated by Victor.
```

Expected interpretation:

```text
Possible Finance approval bypass
```

Expected Proxy result:

```text
Non-Compliant
```

Expected aggregate approval:

```text
2.6 > 1.0
→ CFO + Board required
```

Expected Management Override result:

```text
Available evidence supports Management Override
within the simulated Aster case.
```

Expected responsibility:

```text
Primary Responsible Individual = Victor
```

---

## 8. Test Cases

### 8.1 Test execution rule

Mỗi test phải có:

```text
Input
Expected
Actual
Status
Fix / Note
Author
Fix Owner
Verifier
```

`Expected` phải viết trước khi chạy.

### 8.2 Master Test Table

| ID | Type | Case | Input / Action | Expected | Actual | Status | Author | Fix owner | Verifier |
|---|---|---|---|---|---|---|---|---|---|
| T-N01 | Normal | Full financial screening | Sample financial data | DSRI 0.9333; SGAI 1.12; TATA 0.0273; SG&A route | Pending run | Not run | Dũng | Dũng/Hiền | Phương |
| T-N02 | Normal | SG&A drill-down | Advisory 1.2 → 4.2 | +3.0; +250%; Advisory selected | Pending run | Not run | Dũng | Dũng/Hiền | Phương |
| T-N03 | Normal | Northstar tracing | 0.9 + 0.9 + 0.8 | 2.6; 61.9%; AGR-NST-01 | Pending run | Not run | Dũng | Dũng/Hiền | Phương |
| T-N04 | Normal | Surface Approval | Open summary | State = Reviewed; score unchanged | Pending run | Not run | Ngọc | Hiền/Khuê | Phương |
| T-N05 | Normal | Factual finding | Review Policy + Personnel + Raw Audit; submit expected fact | `factual_finding_state = Confirmed` | Pending run | Not run | Ngọc | Hiền | Phương |
| T-N06 | Normal | Control interpretation | Correct judgment + required evidence | `control_interpretation_state = Confirmed` | Pending run | Not run | Hiền | Hiền | Phương |
| T-N07 | Normal | Proxy compliance | Three required supports missing | Non-Compliant; node Confirmed | Pending run | Not run | Hiền | Hiền | Phương |
| T-N08 | Normal | Aggregate approval | Related tranches total 2.6 | CFO + Board; node Confirmed | Pending run | Not run | Dũng/Hiền | Hiền | Phương |
| T-N09 | Normal | Management connection | Victor transaction + route + authority evidence | `direct_management_connection_state = Confirmed` | Pending run | Not run | Hiền/Ngọc | Hiền | Phương |
| T-N10 | Normal | Override synthesis | Four prerequisites Confirmed + correct evidence | Override assessment Confirmed | Pending run | Not run | Hiền | Hiền | Phương |
| T-N11 | Normal | Responsibility | Select Victor + direct evidence | `responsibility_state = Confirmed` | Pending run | Not run | Ngọc | Hiền | Phương |
| T-B01 | Boundary | SGAI cutoff | SGAI = 1.10 | No SG&A review flag because rule is `> 1.10` | Pending run | Not run | Dũng | Hiền | Phương |
| T-B02 | Boundary | TATA cutoff | `|TATA| = 0.05` | No additional accrual review because rule is `> 0.05` | Pending run | Not run | Dũng | Hiền | Phương |
| T-B03 | Boundary | Approval = 0.5 | Aggregate value 0.5 | Department Head | Pending run | Not run | Hiền | Hiền | Phương |
| T-B04 | Boundary | Approval = 1.0 | Aggregate value 1.0 | Department Head + Finance Manager | Pending run | Not run | Hiền | Hiền | Phương |
| T-B05 | Boundary | Approval just above 1.0 | Aggregate value 1.01 | CFO + Board | Pending run | Not run | Hiền | Hiền | Phương |
| T-I01 | Invalid | Zero denominator | Revenue N-1 = 0 | Calculation error / ratio unavailable; no crash | Pending run | Not run | Dũng | Dũng/Hiền | Phương |
| T-I02 | Invalid | Total Assets = 0 | TATA denominator = 0 | Validation error; TATA unavailable | Pending run | Not run | Dũng | Dũng/Hiền | Phương |
| T-I03 | Invalid | Duplicate transaction ID | Duplicate ADV-02A | Dataset rejected / validation fail | Pending run | Not run | Dũng | Khuê/Hiền | Phương |
| T-I04 | Invalid | Missing agreement ID | Related transaction missing agreement | Do not auto-aggregate | Pending run | Not run | Ngọc | Hiền | Phương |
| T-I05 | Invalid | Raw Audit missing | Control evidence incomplete | No actor/bypass/Override conclusion | Pending run | Not run | Ngọc | Hiền | Phương |
| T-A01 | Assisted | Wrong focus area | Wrong Tab 1 judgment | `focus_area_state = Assisted`; REF-SGA-01 unlock; downstream continues | Pending run | Not run | Hiền | Hiền/Khuê | Phương |
| T-A02 | Assisted | Wrong subaccount | Wrong Tab 2 judgment | `subaccount_state = Assisted`; REF-ADVISORY-01 unlock | Pending run | Not run | Hiền | Hiền/Khuê | Phương |
| T-A03 | Assisted | Wrong transaction | Wrong group | `transaction_group_state = Assisted`; REF-NORTHSTAR-01 unlock | Pending run | Not run | Hiền | Hiền/Khuê | Phương |
| T-E01 | Evidence | Guess-only | Correct Override single-select, insufficient evidence | Partial score; node not Confirmed | Pending run | Not run | Hiền | Hiền | Phương |
| T-E02 | Evidence | Select all | Select all evidence cards | Relevance falls; no automatic Confirmed/full score | Pending run | Not run | Hiền | Hiền | Phương |
| T-E03 | Evidence | Contradictory evidence | Select contradictory item | Penalty applied; confirmation gate fails | Pending run | Not run | Hiền | Hiền | Phương |
| T-S01 | Security/UX | Answer key leak | Inspect player-facing UI | No internal answer key / final truth shown early | Pending run | Not run | Ngọc | Khuê | Phương |

---

## 9. Financial Consistency Check

Một technical pass không đủ nếu financial output sai.

| ID | Calculation / Rule | Expected | Actual | Status |
|---|---|---:|---|---|
| FIN-01 | `(21/150)/(18/120)` | 0.9333 | Pending run | Not verified |
| FIN-02 | `(21/150)/(15/120)` | 1.12 | Pending run | Not verified |
| FIN-03 | `(11-8)/110` | 0.0273 | Pending run | Not verified |
| FIN-04 | `(4.2-1.2)/1.2` | 250% | Pending run | Not verified |
| FIN-05 | `4.2-1.2` | 3.0 | Pending run | Not verified |
| FIN-06 | `0.9+0.9+0.8` | 2.6 | Pending run | Not verified |
| FIN-07 | `2.6/4.2` | 61.9% | Pending run | Not verified |
| FIN-08 | `2.6 > 1.0` | CFO + Board | Pending run | Not verified |
| FIN-09 | Proxy required supports all missing | Non-Compliant | Pending run | Not verified |
| FIN-10 | Override prerequisite synthesis | Supported only from confirmed states | Pending run | Not verified |

### Pass criteria

- calculation tolerance phải được định nghĩa trong code;
- rounding chỉ nên dùng ở display stage;
- internal comparison không nên dựa trên rounded display string;
- approval threshold phải xử lý đúng dấu `<=`, `>`.

---

## 10. Bug Log và Critical Fixes

### 10.1 Pre-build / integration issues đã xác định từ documentation review

Các mục dưới đây là **spec/integration issues đã được nhận diện trước runtime test**, không được ghi là runtime bug đã reproduced nếu chưa chạy build.

| ID | Issue | Severity | Required Fix | Current status | Owner | Verification |
|---|---|---|---|---|---|---|
| PRE-01 | Nhiều tên state cho cùng node | Critical | Dùng canonical state names | Spec fixed; implementation pending | Hiền/Khuê | Pending |
| PRE-02 | `PartiallyConfirmed` không thuộc enum | Major | Không dùng state này | Spec fixed; implementation pending | Hiền | Pending |
| PRE-03 | `assistance_state` trùng Evidence State | Major | Dùng `EvidenceState = Assisted` + metadata | Spec fixed; implementation pending | Hiền | Pending |
| PRE-04 | `CFO` có hai nghĩa | Major | Financial field = `cash_flow_from_operations`; role = CFO | Spec fixed; implementation pending | Dũng/Khuê | Pending |
| PRE-05 | `direct_management_connection` thiếu node rõ | Critical | Tạo canonical state + evidence groups | Spec fixed; implementation pending | Hiền/Ngọc | Pending |
| PRE-06 | Select-all vẫn có thể có EvidenceQuality cao | Critical | Confirmation gate yêu cầu Relevance ≥ 0.75 và zero contradiction | Spec fixed; implementation pending | Hiền | Pending |
| PRE-07 | Fact/Proxy/Aggregate có nguy cơ guess-only | Major | Enforce source/condition/linkage checks | Spec fixed; UI pending | Hiền/Khuê | Pending |
| PRE-08 | Finance Manager vs CFO+Board dễ gây nhầm | Major | Phân biệt tranche-level workflow và aggregate-level requirement | Spec fixed; UI pending | Ngọc/Khuê | Pending |

### 10.2 Runtime Bug Report Template

```text
Bug ID:
Title:

Where:
Build / Scene / Tab:

Steps to reproduce:
1.
2.
3.

Expected:

Actual:

Severity:
Critical / Major / Minor

Reported by:
Owner:
Fix:
Verification:
Status:
Open / Fixed / Verified / Deferred
```

### 10.3 Critical fix order

```text
1. Data loading / broken core flow
2. Wrong financial result
3. Evidence State / score contamination
4. Management Override prerequisite error
5. answer-key / evidence leak
6. Assisted Continuation failure
7. Deployment/build failure
8. Major explanation/UI clarity issue
9. Minor visual issues
```

---

## 11. Scope Freeze

### 11.1 Frozen core scope

Sau khi integration testing bắt đầu, giữ:

- 6-tab investigation flow;
- financial screening;
- SG&A drill-down;
- Northstar tracing;
- Control Evidence Workspace;
- Fact Finding;
- Control Interpretation;
- Proxy Compliance;
- Aggregate Approval;
- Management Override;
- Responsibility Attribution;
- Final Review;
- Evidence State;
- Performance Score;
- Assisted Continuation;
- Trace Map;
- Retry / Review;
- local JSON;
- Unity Windows build / Editor fallback.

### 11.2 Postponed / không thêm trong Week 6

- new cases;
- randomized case generation;
- AI features;
- leaderboard;
- export;
- advanced animation/cutscene;
- drag/drop evidence board nếu checkbox/card UI đã đủ;
- backend/database/API;
- major visual redesign.

### 11.3 Sau scope freeze chỉ sửa

- critical bugs;
- test failures;
- wrong financial output;
- broken navigation/integration;
- major clarity issue;
- answer leakage;
- deployment;
- README;
- documentation mismatch ảnh hưởng build.

---

## 12. Contribution Evidence trong Build và Test

| Member | Build / Integration Responsibility | Test Responsibility | Evidence cần lưu |
|---|---|---|---|
| Phạm Quỳnh Phương | Cross-week integration, end-to-end consistency | Verify happy/assisted flow, checkpoint readiness | QA notes, verified test rows, final integration review |
| Phạm Triệu Tiến Dũng | Financial/data correctness | DSRI/SGAI/TATA, SG&A, Advisory, Northstar, boundary/invalid numeric tests | Calculation sheet/log, test author entries |
| Nguyễn Minh Hiền | Rule engine, state, scoring, assisted logic | Evidence gate, score/state, override synthesis, exploit tests | C# rule commits, test results, bug fixes |
| Tôn Khánh Ngọc | Evidence wording, narrative, responsibility content | No-answer-leak, evidence unlock, role distinction, explanation checks | Evidence cards, content review, leak-test notes |
| Đinh Thị Minh Khuê | JSON load, Unity binding, navigation, Trace Map, build | Integration, file path/build/deployment tests | Unity commits, screenshots/build, integration fixes |

### Ownership rule

Không chỉ ghi người merge.

Mỗi test/bug nên lưu:

```text
Test authored by
Bug reported by
Fixed by
Verified by
```

---

## 13. Repo nên có gì cuối Week 6?

Recommended structure:

```text
/
├─ README.md
├─ WEEK_6_BUILD_INTEGRATION_TESTING_FINAL.md
├─ data/
│  ├─ case_data.json
│  ├─ rules.json
│  ├─ evidence.json
│  └─ answer_key.json
├─ Unity project / source
├─ build/ or release reference
└─ evidence/
   ├─ screenshots/
   ├─ test-results/
   └─ bug-log/
```

Cuối Week 6 repository cần thể hiện được:

- working core flow;
- build/fallback;
- sample input;
- approved expected output;
- test table;
- actual results;
- bug log;
- critical fixes;
- known limitations;
- scope freeze;
- updated README;
- contribution map.

---

## 14. README Update

README tối thiểu nên có:

### Project

```text
The Last Heir — Financial Investigation Game
```

### Core purpose

Người chơi đi từ financial signal đến evidence-based Management Override và responsibility conclusion.

### Technical stack

```text
Unity
C#
Local JSON
Rule-based logic
No backend/database/API in MVP
```

### Run instructions

```text
Option A — Windows Build
1. Download/extract build.
2. Keep included data files in expected location.
3. Run executable.

Option B — Unity Editor
1. Open project with documented Unity version.
2. Open starting scene.
3. Press Play.
```

### Sample expected outputs

```text
DSRI = 0.9333
SGAI = 1.12
TATA = 0.0273
Advisory change = 250%
Northstar = 2.6 / 61.9%
Proxy Route = Non-Compliant
Aggregate approval = CFO + Board
```

### Limitations

- simulated Aster policy;
- fictional people/evidence;
- educational case;
- not a legal/audit determination;
- fixed-case MVP;
- no high replayability claim;
- no real-time compliance engine;
- Windows/Editor deployment scope.

### Test status

Không viết `All tests pass` nếu test table chưa có Actual + Verified status.

---

## 15. Chuẩn bị Checkpoint 6

Checkpoint nên demo theo thứ tự:

1. mở repo;
2. mở README;
3. chạy product;
4. load case;
5. Tab 1 financial screening;
6. Tab 2 Advisory drill-down;
7. Tab 3 Northstar tracing;
8. Tab 4 Surface → Evidence → Fact → Interpretation → Proxy → Aggregate → Override;
9. Tab 5 Responsibility;
10. Tab 6 Final Review;
11. cho xem một Assisted path;
12. mở test table;
13. mở một bug và fix evidence;
14. cho xem scope freeze;
15. cho xem build/fallback;
16. cho xem contribution map.

### Checkpoint decision

Chọn đúng một status sau review:

```text
DEMO-READY
FIX LOGIC
FIX INTEGRATION
FIX DEPLOYMENT
REDUCE SCOPE
```

Không dùng `DEMO-READY` khi còn Critical bug trong core flow.

---

## 16. End-of-Week Checklist

### Core flow

- [ ] Tab 1 hoạt động.
- [ ] Tab 2 hoạt động.
- [ ] Tab 3 hoạt động.
- [ ] Tab 4 full control investigation hoạt động.
- [ ] Tab 5 responsibility hoạt động.
- [ ] Tab 6 final review hoạt động.

### Integration

- [ ] `case_data.json` load đúng.
- [ ] `rules.json` load đúng.
- [ ] `evidence.json` load đúng.
- [ ] `answer_key.json` internal-only.
- [ ] Evidence IDs resolve.
- [ ] Canonical state names được dùng trong code.
- [ ] Evidence State tách khỏi Performance Score.
- [ ] Trace Map hiển thị state đúng.

### Testing

- [ ] Normal tests đã chạy.
- [ ] Boundary tests đã chạy.
- [ ] Invalid tests đã chạy.
- [ ] Financial consistency tests đã chạy.
- [ ] Assisted path đã chạy.
- [ ] Guess-only exploit đã test.
- [ ] Select-all exploit đã test.
- [ ] Contradictory evidence đã test.
- [ ] No-answer-leak đã test.

### Bug / QA

- [ ] Critical bugs đã fix hoặc có blocker rõ.
- [ ] Bug reproduction steps đầy đủ.
- [ ] Fix có verifier khác người fix khi có thể.
- [ ] Actual result được điền sau execution.
- [ ] Không đánh dấu Pass chỉ dựa trên documentation.

### Deployment

- [ ] Windows build chạy.
- [ ] Hoặc Unity Editor fallback chạy.
- [ ] Data files có trong build.
- [ ] Không phụ thuộc absolute local path.
- [ ] Clean-clone/máy khác đã thử.
- [ ] README run instructions đúng.

### Scope / Documentation

- [ ] Scope đã freeze.
- [ ] Optional features không chen vào critical fixes.
- [ ] README cập nhật.
- [ ] Known limitations ghi rõ.
- [ ] Contribution evidence rõ.
- [ ] Individual Footprint đã bắt đầu.

---

# Final Week 6 Rule

> **Week 6 không được xem là hoàn thành vì documentation đã đầy đủ. Week 6 chỉ được xem là hoàn thành khi core flow được chạy, actual results được ghi, critical integration/financial/state behavior được kiểm thử và working build hoặc fallback được chứng minh.**

> **Week 7 không phải tuần phát triển feature mới. Week 7 dùng để Final QA, fix remaining critical issues và chuẩn bị assessment evidence.**
