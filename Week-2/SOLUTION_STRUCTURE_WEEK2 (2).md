# The Last Heir — Solution Structure

> Học phần: **NHA408E**  
> Nhóm: **G08**

# WEEK 2 — SOLUTION STRUCTURE

## 1. User → Input → Process → Output → User Action

### User

Sinh viên đại học thuộc các ngành Tài chính, Kế toán, Ngân hàng và Kinh doanh đã có kiến thức tài chính cơ bản.

### Input

Người dùng tiếp cận một tập dữ liệu và tài liệu được chuẩn bị trước, bao gồm:

1. **Financial Overview Information** — giúp phát hiện vấn đề ban đầu;
2. **Transaction Information** — giúp truy vết đến Northstar;
3. **Contract and Control Information** — giúp đánh giá transaction và control compliance;
4. **Responsibility Evidence** — giúp liên kết hành động hoặc quyết định với các cá nhân trong case.

Week 2 chỉ xác định nhóm input cần thiết. Field cụ thể, source, validation và sample data sẽ được chuẩn hóa trong Week 3.

### Process

Core process là **Financial Investigation and Evidence Integration**.

Người chơi:

```text
Screen Information
        ↓
Identify Signal
        ↓
Drill Down to Transaction
        ↓
Check Contract / Payment Evidence
        ↓
Check Control Evidence
        ↓
Connect Responsibility Evidence
        ↓
Compare Hypotheses
        ↓
Conclude
```

### Output

Target Product tạo ra:

> **Financial Trace Map + Evidence-Based Responsibility Conclusion**

MVP tạo ra phiên bản đơn giản hơn của cùng output:

> **Simplified Financial Trace Map + Simplified Evidence-Based Responsibility Conclusion**

Evidence-Based Responsibility Conclusion là output quyết định: người chơi chọn đích danh một cá nhân chịu trách nhiệm chính và nhận phản hồi đúng/sai. Financial Trace Map là bằng chứng dẫn tới kết luận đó.

### User Action

Người dùng xem lại evidence chain, nhận biết evidence nào hỗ trợ hoặc làm yếu giả thuyết, sau đó hiểu vì sao một responsibility conclusion được hình thành từ nhiều nguồn thông tin khác nhau.

### Conceptual Flow

```text
USER
  ↓
Financial + Transaction + Control + Responsibility Information
  ↓
Financial Investigation and Evidence Integration
  ↓
Financial Trace Map
  ↓
Responsibility Conclusion
  ↓
Review and Reflect on the Reasoning Process
```

---

## 2. Main Output → Logic → Input → Component

Week 2 suy ngược từ main output để xác định những gì sản phẩm cần có.

| Main output | Logic cần có | Input cần có | Component cần có |
|---|---|---|---|
| Financial Trace Map | Xác định signal, drill down, reconcile và connect evidence | Financial overview, vendor/transaction, contract/payment, control evidence | Financial overview screen, transaction view, evidence cards, trace map |
| Responsibility Conclusion | So sánh evidence liên quan đến các cá nhân, chọn đích danh một suspect và nhận phản hồi đúng/sai | Role information, authorization/amendment evidence, control responsibility | Suspect cards, evidence linking, conclusion/verdict screen |

Điều này giúp nhóm tránh chọn feature hoặc giao diện trước khi xác định output và logic cần thiết.

---

## 3. Initial Required Information

### 3.1. Financial Overview Information

Dùng để giúp người chơi xác định một financial signal cần điều tra.

Ví dụ ở mức Week 2:

- revenue / profit / operating cash flow trend;
- **Cash Conversion (OCF/Net Income)** — signal chính của MVP: lợi nhuận tăng nhưng dòng tiền hoạt động không tăng tương ứng là dấu hiệu cần điều tra, chưa phải kết luận;
- advisory expense hoặc budget variance.

> Target Product bổ sung **DSRI** để loại trừ giả thuyết "vấn đề nằm ở doanh thu/khách hàng", không thuộc MVP.

### 3.2. Transaction Information

Dùng để đi từ financial signal đến một transaction cụ thể.

Ví dụ:

- vendor name;
- vendor payment amount;
- contract value;
- payment summary.

Investigation chain chính dẫn đến **Northstar Advisory**.

### 3.3. Contract and Control Information

Dùng để đánh giá bản chất transaction, payment timing và control conditions.

Ví dụ:

- contract purpose;
- approval threshold;
- temporary exception;
- payment timing;
- approval status.

**Substance-over-form:** từng khoản thanh toán có thể nằm dưới threshold, nhưng nếu cùng thuộc một hợp đồng, người chơi cần xét liệu việc chia nhỏ có làm vô hiệu mục đích control hay không.

### 3.4. Responsibility Evidence

Dùng để chuyển từ câu hỏi:

> “Transaction nào cần điều tra?”

sang:

> “Ai chịu trách nhiệm chính dựa trên evidence chain?”

Ví dụ:

- executive role;
- responsibility scope;
- authorization record;
- amendment history.

4 executive của case: Victor (COO), Lucas (Investment Director), David (CFO), Sophia (Head of Internal Control) — MVP dùng 2–3 người, mỗi evidence chỉ ra hoặc loại trừ một người. Fraud Triangle (Pressure–Opportunity–Rationalization) dùng để soạn nội dung evidence/feedback, không phải trục chấm điểm riêng.

---

## 4. Core Process Type

Core process của sản phẩm là:

> **Financial Investigation and Evidence Integration**

Quá trình không nhằm tạo càng nhiều calculation càng tốt. Calculation chỉ xuất hiện khi nó phục vụ một bước reasoning cụ thể.

Core process có thể khái quát:

```text
Information
    ↓
Interpretation
    ↓
Evidence
    ↓
Hypothesis
    ↓
Reassessment
    ↓
Conclusion
```

Investigation loop:

```text
Observe
   ↓
Investigate
   ↓
Analyse
   ↓
Connect
   ↓
Reassess
   ↓
Conclude
```

Công cụ gắn với bước Investigate/Analyse: Cash Conversion (MVP), DSRI (Target), Substance-over-form (MVP), Fraud Triangle (định tính, dùng cho nội dung feedback).

---

## 5. Corrected MVP Flow — Full Journey, Reduced Complexity

### 5.1. MVP Definition

MVP của The Last Heir là **phiên bản nhỏ nhất vẫn giữ toàn bộ user journey của sản phẩm**, từ khi người chơi nhìn thấy financial problem cho đến khi đưa ra responsibility conclusion.

MVP **không dừng ở Financial Trace**. Thay vào đó, nó giữ đủ các stage của Target Product nhưng đơn giản hóa số lượng data, evidence, suspects và branching logic.

### 5.2. MVP End-to-End Flow

```text
Start Case
   ↓
Financial Overview
   ↓
Identify One Financial Signal
   ↓
Trace to Northstar Transaction
   ↓
Review One Key Contract / Payment Evidence
   ↓
Review One Key Control Evidence
   ↓
Review Simplified Suspect Profiles
   ↓
Connect Key Evidence
   ↓
Choose Primary Responsible Person (chọn đích danh 1 trong 2–3 suspect)
   ↓
System Verdict: Đúng / Sai + giải thích ngắn
   ↓
Simplified Financial Trace Map (recap evidence chain)
   ↓
Feedback / Reflection
```

### 5.3. MVP Table

| Câu hỏi | Câu trả lời |
|---|---|
| Core user need | Kết nối nhiều nguồn thông tin để điều tra một vấn đề tài chính và đưa ra kết luận có căn cứ |
| Core input | 1 financial overview set, 1 Northstar transaction, 1–2 contract/payment clues, 1 control clue, 2–3 suspect profiles, một số responsibility evidence |
| Core logic | Signal → transaction → contract/control check → evidence linking → suspect comparison → conclusion |
| Core output | Simplified Evidence-Based Responsibility Conclusion (chọn đích danh 1 suspect + verdict đúng/sai) + Simplified Financial Trace Map |
| Must include | Một end-to-end investigation journey hoàn chỉnh, evidence linking, và bước kết luận chọn đích danh người chịu trách nhiệm chính + phản hồi đúng/sai |
| Not included yet | Nhiều nhánh điều tra, nhiều conflicting evidence, 4 dossier đầy đủ, complex scoring, advanced evidence unlocking |

### 5.4. MVP Simplification Rules

MVP đơn giản hóa bằng cách:

- chỉ dùng **một financial signal chính**;
- chỉ có **một transaction path chính** dẫn tới Northstar;
- chỉ giữ **những contract/control evidence thiết yếu**;
- dùng **2–3 suspect profiles** thay vì dossier đầy đủ;
- dùng **rule-based logic** thay vì scoring phức tạp;
- evidence unlocking có thể tuyến tính;
- Financial Trace Map chỉ cần hiển thị các evidence link cốt lõi, đóng vai trò bằng chứng đi kèm;
- final conclusion yêu cầu người chơi chọn đích danh một người chịu trách nhiệm chính trong 2–3 suspect, giải thích bằng key evidence, và nhận phản hồi đúng/sai;
- DSRI và Fraud Triangle không phải input người chơi tự tính trong MVP — chỉ dùng cho nội dung feedback.

### 5.5. Why this MVP is correct

MVP này đáp ứng yêu cầu của một Minimum Viable Product vì nó có:

- một target user;
- một core task;
- input thiết yếu;
- một logic path chính;
- một meaningful output;
- một **complete user flow**.

Phần bị giảm là **độ phức tạp**, không phải **hành trình cốt lõi**.

---

## 6. Target Product Extension

Target Product giữ nguyên end-to-end journey của MVP nhưng mở rộng chiều sâu investigation.

```text
Financial Screening
        ↓
Multiple Supporting Signals
        ↓
Detailed Northstar Transaction Trace
        ↓
Contract + Payment Pattern Analysis
        ↓
Control Investigation
        ↓
Four Executive Dossiers
        ↓
Supporting + Conflicting Evidence
        ↓
Hypothesis Revision
        ↓
Financial Trace Map
        +
Evidence-Based Responsibility Conclusion
```

### Target Product adds

- nhiều financial indicators hơn;
- payment-level data chi tiết;
- control timing và threshold pattern;
- 4 executive dossiers đầy đủ;
- supporting và conflicting evidence;
- nhiều bước reassessment;
- evidence unlock order phong phú hơn;
- feedback chi tiết hơn về reasoning quality.

Target Product mở rộng **depth**, không thay đổi core product logic.

---

## 7. In Scope / Out of Scope

### MVP In Scope

- một case Aster Holdings;
- một complete investigation journey;
- một main financial signal;
- một Northstar transaction path;
- essential contract/payment evidence;
- essential control evidence;
- 2–3 simplified suspect profiles;
- evidence connection;
- primary responsibility choice: chọn đích danh 1 suspect;
- system verdict đúng/sai kèm giải thích ngắn;
- simplified Financial Trace Map;
- final feedback.

### Target Scope

- full Northstar transaction analysis;
- payment pattern analysis;
- detailed control investigation;
- 4 executive dossiers;
- hypothesis revision;
- richer Financial Trace Map;
- full Evidence-Based Responsibility Conclusion.

### Out of Scope

- nhiều case doanh nghiệp độc lập;
- market data thời gian thực;
- external API phụ thuộc sản phẩm;
- AI-generated cases;
- AI-generated final judgement;
- multiplayer;
- leaderboard;
- virtual economy;
- shop / inventory;
- complex gamification không phục vụ learning outcome;
- authentication trong MVP.

---

## 8. Initial Route Hypothesis and Fallback

### Main Technical Route

**Code-Based Web Application sử dụng React/JavaScript + static JSON/CSV data.**

```text
Static Case Data
      ↓
React Components
      ↓
Rule-Based Investigation Logic
      ↓
Evidence State
      ↓
Financial Trace + Conclusion Screen
```

Route này phù hợp vì:

- case hữu hạn;
- data được chuẩn bị trước;
- logic có thể rule-based;
- không cần real-time API;
- không cần backend phức tạp cho MVP.

### Fallback

Nếu technical route gặp rủi ro:

```text
Reduce Screens
      ↓
Reduce Evidence Count
      ↓
Linearize Investigation Flow
      ↓
Use Local Static Data
      ↓
Keep Same End-to-End Journey
```

Fallback có thể là interactive prototype nếu cần, nhưng vẫn phải cho user hoàn thành:

```text
Financial Signal
      ↓
Transaction
      ↓
Evidence
      ↓
Responsibility Comparison
      ↓
Conclusion (chọn đích danh 1 suspect + verdict đúng/sai)
```

---

## 9. Responsibility by Output

| Responsibility | Owner | Expected Output | Evidence Location | Consumer / Dependency |
|---|---|---|---|---|
| Integration | Phạm Quỳnh Phương | Repository structure, dependency map, integrated Week 2 documents, decision log | Week-2 repository | Whole team, checkpoint |
| Financial Content & Input | Phạm Triệu Tiến Dũng | Financial overview, Northstar transaction structure, contract/control information requirements | Week-2 docs → Week-3 input dictionary | Gameplay Logic, testing |
| Gameplay & Logic | Nguyễn Minh Hiền | MVP investigation flow, rule-based state transitions, evidence-linking logic | Week-2 solution structure → Week-4 logic | Development, UI/UX |
| Storyline & Output | Tôn Khánh Ngọc | Case context, suspect structure, responsibility evidence requirements, conclusion format | Week-2 / Week-3 docs | UI/UX, final output |
| UI/UX | Đinh Thị Minh Khuê | Screen flow covering complete MVP journey and output display | Prototype / design files | Development, testing |

Dependencies:

```text
Financial Content & Input
        ↓
Gameplay & Logic
        ↓
UI/UX
        ↓
Storyline & Output
        ↓
Integration
```

Mỗi workstream phải tạo ra một output được phần khác của sản phẩm sử dụng.

---

## 10. Conceptual Solution Chain

```text
Problem Direction
      ↓
User Task
      ↓
Desired Outcome
      ↓
Main Output
      ↓
Core Process
      ↓
MVP End-to-End Flow
      ↓
Target Product Expansion
```

Áp dụng cho The Last Heir:

```text
Information Integration Difficulty
        ↓
Investigate a Financial Problem
        ↓
Build Evidence-Based Reasoning
        ↓
Financial Trace Map + Responsibility Conclusion
        ↓
Financial Investigation and Evidence Integration
        ↓
Complete a Simplified End-to-End Investigation
        ↓
Expand Data, Evidence and Branching in Target Product
```

---

## 11. Week 2 → Week 3 Handoff

Week 3 không cần phát minh lại product direction. Week 3 phải kiểm tra liệu những input cần cho **toàn bộ MVP journey** có đủ khả thi hay không.

Week 3 cần cụ thể hóa tối thiểu:

1. financial overview input;
2. Northstar transaction input;
3. essential contract/payment evidence;
4. essential control evidence;
5. simplified suspect information;
6. responsibility linking evidence;
7. validation rules;
8. sample data đủ để chạy end-to-end MVP.

### Main Week 3 question

> **Những input, source và evidence nào là tối thiểu nhưng đủ để người chơi đi từ Financial Signal đến Responsibility Conclusion trong MVP?**

---

## 12. End-of-Week Checklist

- [x] Problem direction tiếp tục từ Week 1.
- [x] Target user cụ thể.
- [x] Core user task rõ.
- [x] Desired outcome rõ.
- [x] Main visible output được xác định.
- [x] Một product pattern chính được chọn.
- [x] Có User–Input–Process–Output–User structure.
- [x] Main output được suy ngược thành logic, input và component.
- [x] MVP là một phiên bản end-to-end thu nhỏ của toàn game.
- [x] MVP có complete user flow.
- [x] In scope / out of scope rõ.
- [x] Technical route và fallback có căn cứ.
- [x] Responsibility gắn với expected output.
- [ ] Feedback và revision sẽ cập nhật sau Checkpoint 2.

> **Week 3 sẽ kiểm tra input readiness cho toàn bộ MVP journey trước khi Week 4 xây chi tiết financial logic, investigation rules và state transitions.**
