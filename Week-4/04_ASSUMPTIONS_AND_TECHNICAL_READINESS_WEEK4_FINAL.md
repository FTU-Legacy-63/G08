# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 4 — ASSUMPTIONS, TECHNICAL READINESS & MIDTERM READINESS

## 1. Nguyên tắc

Week 4 không tạo lại assumptions và input của Week 3. Tài liệu này chỉ:

- xác nhận assumption nào được Week 4 logic sử dụng;
- ghi limitation;
- chốt technical route;
- xác định deployment/fallback;
- kiểm tra readiness cho giữa kỳ;
- làm rõ visible contribution.

---

## 2. Assumptions kế thừa từ Week 3

### Financial

- Đơn vị tiền tệ: **triệu USD**.
- DSRI, SGAI và TATA chỉ phục vụ financial screening.
- Không tạo reduced Beneish M-Score.
- Case-specific screening rules là pedagogical rules, không phải official Beneish cutoffs.
- TATA prototype dùng:

```text
(Income from Continuing Operations - CFO) / Total Assets
```

### Materiality

```text
materiality_threshold = 1.1 triệu USD
```

Materiality:

- là reference cho mức độ đáng chú ý;
- được dùng xuyên suốt để cross-check;
- không thay approval threshold;
- không phải formal audit materiality calculation.

### Approval

```text
<= 0.5
→ Department Head

> 0.5 and <= 1.0
→ Department Head + Finance Manager

> 1.0
→ CFO + Board
```

Northstar:

```text
0.9 + 0.9 + 0.8 = 2.6 triệu USD
```

Từng tranche có:

```text
Victor + Lucas
```

Do đó mỗi tranche **appears formally approved at tranche level**.

Control concern chỉ xuất hiện khi người chơi kết nối:

- same vendor;
- same agreement ID;
- same economic purpose;
- aggregate economic value 2.6.

### Responsibility

- Victor là expected primary responsible individual trong internal answer key.
- Evidence player-visible không ghi sẵn đáp án này.
- Lucas có approval involvement; không được mô tả là “không tham gia Northstar”.
- David và Sophia có contextual/process relevance nhưng chưa có evidence mạnh bằng Victor cho primary responsibility.
- Fraud Triangle không dùng làm culprit score.

---

## 3. Week 4 Logic-Specific Assumptions

### Six-tab structure

Sáu tab là UI grouping của chain đã có. Không tạo thêm layer kiến thức.

### Scoring

Scoring `10–10–10–30–25–15` là game-design choice nhằm ưu tiên governance, responsibility và evidence integration.

Ending thresholds `95/75/50` cũng là gameplay assumption.

### Unlock

Judgment là điều kiện chính để mở full evidence. Calculation chủ yếu ảnh hưởng score.

Điều này nhằm tránh việc một lỗi arithmetic nhỏ phá toàn bộ Information Integration journey.

---

## 4. Data Structure chính thức

Week 3 đã chốt local JSON:

```text
data/
  case_data.json
  rules.json
  evidence.json
  answer_key.json
```

### `case_data.json`

- financials;
- SG&A breakdown;
- Advisory transactions.

### `rules.json`

- materiality reference;
- screening rules;
- approval policy;
- transaction aggregation rule.

### `evidence.json`

- approval records;
- agreement facts;
- personnel facts;
- conflict evidence;
- control evidence.

### `answer_key.json`

- internal expected result;
- không player-visible;
- không phải evidence.

Week 4 không quay lại cấu trúc 6 JSON cũ.

---

## 5. Technical Route

| Hạng mục | Route |
|---|---|
| Game engine | Unity |
| Programming language | C# |
| Local data | JSON |
| Data loading | JSON deserialize → C# objects |
| Logic | Rule-based |
| State | Local game/evidence state |
| Database | Không cần cho MVP |
| Backend | Không cần cho MVP |
| External API | Không cần |
| Runtime dependency on AI | Không có |

Flow:

```text
Local JSON
↓
C# Data Objects
↓
Validation
↓
Financial / Investigation Logic
↓
Game State
↓
UI + Financial Trace Map
↓
Final Feedback
```

### AI-assisted coding

Nếu nhóm sử dụng ChatGPT, GitHub Copilot hoặc công cụ tương tự, chúng chỉ hỗ trợ:

- code drafting;
- debugging;
- test-case generation;
- documentation.

AI tool không phải runtime component và không được thay thế khả năng nhóm tự đọc, chạy và sửa code.

---

## 6. C# Logic cần sẵn sàng

### Financial

- `CalculateDSRI()`
- `CalculateSGAI()`
- `CalculateTATA()`
- `CalculatePercentChange()`
- `CalculateTransactionShare()`
- numeric tolerance checking

### Validation

- required field validation;
- denominator check;
- reconciliation check;
- ID/reference validation;
- rule-range validation.

### Transaction Tracing

- group by agreement/economic linkage;
- không group chỉ bằng vendor name;
- calculate aggregate amount.

### Control

- lookup approval requirement từ aggregate value;
- compare aggregate requirement với evidence;
- distinguish tranche-level form from aggregate-level requirement.

### Responsibility

- retrieve evidence by person;
- compare authority/involvement/conflict/bypass connection;
- evaluate player-selected evidence against internal expected logic.

### Game

- scoring;
- unlock/fallback;
- one-submit-per-tab;
- evidence-state logging;
- Financial Trace Map;
- ending calculation.

---

## 7. Deployment Route và Fallback

### Primary deployment route

**Unity Windows Standalone Build** dùng cho internal test và checkpoint/midterm demonstration.

Lý do:

- ít dependency;
- phù hợp desktop prototype;
- có thể chạy local JSON;
- dễ chứng minh working flow mà không cần hosting.

### Optional later route

Sau khi standalone build ổn định, nhóm có thể cân nhắc Unity WebGL nếu cần chạy trên browser. Đây không phải requirement của MVP Week 4.

### Fallback

Nếu build standalone gặp lỗi sát checkpoint:

1. chạy prototype trực tiếp trong Unity Editor;
2. giữ local JSON và C# rule engine;
3. giảm animation/visual effect;
4. không cắt core flow;
5. không đổi sang database/API;
6. ưu tiên chứng minh end-to-end reasoning và technical logic.

---

## 8. Technical Validation Checklist

- [ ] `case_data.json` load thành C# object.
- [ ] `rules.json` load đúng thresholds.
- [ ] `evidence.json` resolve đúng evidence/person IDs.
- [ ] `answer_key.json` không xuất hiện trong player-facing UI.
- [ ] DSRI = 0.9333.
- [ ] SGAI = 1.12.
- [ ] TATA = 0.0273.
- [ ] SG&A breakdown reconcile = 21.
- [ ] Advisory ledger reconcile = 4.2.
- [ ] Northstar aggregate = 2.6.
- [ ] Northstar share ≈ 61.9%.
- [ ] Victor + Lucas tồn tại trong từng Northstar approval record.
- [ ] Related transaction rule dùng agreement + economic purpose.
- [ ] Aggregate 2.6 map sang CFO + Board.
- [ ] Missing approval không tự động trở thành violation.
- [ ] Missing conflict evidence map sang `unknown`.
- [ ] Scoring constants đúng `10–10–10–30–25–15`.
- [ ] Ending thresholds đúng `95/75/50`.
- [ ] Judgment unlock và fallback chạy đúng.
- [ ] Financial Trace Map lưu decision/evidence state.

---

## 9. Limitations

MVP không phải:

- full audit simulation;
- fraud-detection system cho doanh nghiệp thật;
- full Beneish implementation;
- SOX 404 assessment;
- legal determination về fraud;
- automated real-world responsibility engine.

Kết luận Management Override trong game chỉ có nghĩa:

> **Tập evidence mô phỏng của Aster Holdings hỗ trợ kết luận rằng approval/control process đã bị circumvention theo simulated internal policy của case.**

Kết luận Victor là primary responsible individual cũng chỉ áp dụng trong case mô phỏng.

---

## 10. Midterm Repo Readiness

Repo cần giúp người đọc đi theo thứ tự:

```text
Week 1
Problem + User + User Task
↓
Week 2
Product Direction + MVP + Technical Route
↓
Week 3
Input + Sources + Assumptions + Sample Data + Validation
↓
Week 4
Formalized Logic + Gameplay Rules + Scoring + Technical Readiness
```

Các evidence cần dễ tìm:

| Midterm need | Evidence location |
|---|---|
| Problem / target user / user task | Week 1 |
| Product direction / MVP | Week 2 |
| Input dictionary / sources | Week 3 |
| Simulated data | `data/` Week 3 |
| Financial / control logic | `01_PROJECT_LOGIC_CHAIN_WEEK4_FINAL.md` |
| Gameplay / unlock | `02_GAMEPLAY_MECHANICS_WEEK4_FINAL.md` |
| Sample calculation / logic test | `03_SCORING_AND_SAMPLE_TEST_WEEK4_FINAL.md` |
| Technical route / limitations | file này |
| Contribution evidence | Responsibility Map bên dưới + artifact history |
| Current progress | README / repo commit history / Unity prototype |
| Next steps | Week 4 handoff |

**Lưu ý:** file chính thức `../assessment/midterm-checklist.md` không nằm trong bộ file được cung cấp ở lần rà soát này. Vì vậy nhóm chưa nên đánh dấu rằng checklist chính thức đã được kiểm tra cho đến khi mở đúng file đó trong repo.

---

## 11. Visible Contribution — Week 4

| Owner | Responsibility | Visible Contribution | Evidence Location | Dependency | Next Action |
|---|---|---|---|---|---|
| **Phạm Quỳnh Phương** | Integration, consistency và midterm repo readiness | Project Logic Chain tổng hợp; kiểm tra terminology, scope, mapping Weeks 1–4; midterm evidence map | `01_PROJECT_LOGIC_CHAIN_WEEK4_FINAL.md`, file Technical Readiness, README | Output của tất cả workstream | Chốt repo structure và đối chiếu official midterm checklist |
| **Phạm Triệu Tiến Dũng** | Financial logic và manual verification | Kiểm tra DSRI/SGAI/TATA, SG&A/Advisory calculations, Northstar total/share và reconciliation | Project Logic Chain + Sample Logic Test | Week 3 case data | Đối chiếu calculation với C# output |
| **Nguyễn Minh Hiền** | Formalize rule engine, validation, scoring | Transaction aggregation rule, approval lookup, unlock/fallback, scoring constants, test cases | Gameplay Mechanics + Scoring/Sample Test | Week 3 rules/evidence | Implement C# functions và unit-style tests |
| **Tôn Khánh Ngọc** | Responsibility evidence, narrative và explainability | Personnel comparison logic; Victor/Lucas/David/Sophia evidence wording; feedback cho Tab 4–6 | Gameplay Mechanics + feedback/evidence notes | Week 3 evidence data | Hoàn thiện player-facing evidence/feedback |
| **Đinh Thị Minh Khuê** | Technical integration trong Unity | JSON loading, C# object binding, game/evidence state, 6-tab UI, Trace Map và build | Unity project + Week 3 binding note | Logic và JSON đã chốt | Nối rule engine với UI và tạo working standalone build |

### Objective Contribution Evidence

Để contribution không chỉ là role title, mỗi thành viên cần có ít nhất một artifact hoặc commit có thể chỉ ra:

- file hoặc section đã viết;
- data/rule đã kiểm tra;
- code/scene/script đã implement;
- test result hoặc review note;
- commit / version history nếu repo có.

---

## 12. Week 4 Completion Checklist

- [x] Project logic chain đầy đủ.
- [x] Input–logic–output mapping rõ.
- [x] Formula/rule/classification được formalize.
- [x] Assumptions và limitations rõ.
- [x] Có sample calculation và logic test.
- [x] Technical route phù hợp Week 2–3.
- [x] Có primary deployment route và fallback.
- [x] MVP vẫn giữ một investigation chain chính.
- [x] Group Footprint có artifact rõ.
- [x] Objective contribution có owner và evidence location.
- [x] Individual Footprint có thể truy theo artifact/code/test.
- [ ] `../assessment/midterm-checklist.md` cần được mở và đối chiếu trực tiếp trước khi đánh dấu hoàn tất.

---

## 13. Handoff sau giữa kỳ

Sau Week 4, nhóm không cần mở rộng thêm financial theory nếu không có evidence cần thiết.

Trọng tâm tiếp theo:

1. implement C# financial functions;
2. implement validation;
3. implement related-transaction aggregation;
4. implement approval comparison;
5. implement responsibility evidence state;
6. connect unlock/fallback;
7. connect scoring;
8. generate Financial Trace Map;
9. produce working standalone build;
10. internal playtest và sửa explainability/usability.

Core investigation chain chỉ thay đổi nếu playtest hoặc feedback cung cấp evidence đủ mạnh cho việc revision.
