# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 5 — FEATURE SCOPE

## 1. Mục tiêu và liên kết với Weeks 1–4

Week 5 không xác định lại problem, user task, input hoặc financial/investigation logic.

Chuỗi đã được chốt:

**Week 1 — Problem Direction:** Information Integration  
↓  
**Week 2 — Product Direction:** Financial Learning Game với một investigation chain end-to-end  
↓  
**Week 3 — Input Readiness:** financial data, transaction data, approval summary, audit trail, personnel/conflict evidence và local JSON  
↓  
**Week 4 — Formalized Logic:** screening → drill-down → transaction tracing → control investigation → Management Override → Responsibility Attribution → Final Review  
↓  
**Week 5 — User Experience:** biến logic trên thành feature và interface để người dùng biết phải xem gì, làm gì, hiểu output thế nào và đi tiếp ra sao

Câu hỏi trung tâm:

> **Người dùng sẽ tương tác với investigation logic đã có như thế nào để đi từ dữ liệu tài chính đến một Evidence-Based Management Override and Responsibility Conclusion?**

Week 5 không bổ sung full Beneish M-Score, SOX severity, Fraud Triangle scoring, Present Value loss hoặc một fraud branch mới.

---

## 2. User Goal kế thừa từ Week 1–2

User goal không được viết lại thành một goal mới.

Người chơi phải:

1. nhận diện khu vực tài chính cần điều tra;
2. drill-down tới khoản mục đáng chú ý;
3. truy vết xuống Northstar;
4. phân biệt approval status bề mặt với actual approval audit trail;
5. đánh giá evidence có hỗ trợ Management Override hay không;
6. xác định cá nhân chịu trách nhiệm chính bằng comparative evidence;
7. tổng hợp toàn bộ evidence thành kết luận cuối có thể giải thích.

Hai decision cuối vẫn là:

> **Does the available evidence support Management Override?**

và

> **Who bears primary responsibility, and which evidence supports that attribution?**

---

## 3. Main Feature

### Main Feature: Evidence-Based Investigation Flow

Main feature là **chuỗi điều tra 6 bước liên tục**, trong đó output của bước trước mở input/evidence cần thiết cho bước sau:

```text
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
```

Feature này trực tiếp tạo main output của sản phẩm:

> **Kết luận về Management Override và trách nhiệm dựa trên bằng chứng**

Nếu bỏ Evidence-Based Investigation Flow, sản phẩm chỉ còn các bảng dữ liệu/tài liệu rời rạc và không còn hỗ trợ core user task.

---

## 4. Supporting Features

### 4.1. Progressive Evidence Viewer — Core Supporting Feature

Hiển thị evidence theo đúng investigation state:

- Financial Overview;
- SG&A Breakdown;
- Advisory Expense Ledger;
- Surface Approval Summary;
- Approval Audit Trail;
- Override-route conditions;
- Approval Policy;
- Personnel / conflict evidence.

Evidence chưa được unlock không được hiển thị đầy đủ.

Mục tiêu:

> người chơi phải **kết nối evidence**, không được xem toàn bộ đáp án ngay từ đầu.

### 4.2. Calculation & Judgment Panel — Core Supporting Feature

Mỗi bước có:

- calculation field nếu cần;
- judgment option;
- supporting-evidence selection nếu cần;
- Submit;
- short feedback.

Calculation hỗ trợ reasoning nhưng **judgment là gate chính** cho evidence progression, đúng logic Week 4.

### 4.3. Financial Trace Map — Core Supporting Feature

Trace Map ghi lại:

- financial signal;
- selected focus area;
- selected subaccount;
- selected transaction group;
- surface control impression;
- audit-trail finding;
- Management Override judgment;
- responsibility judgment;
- final evidence set.

Trace Map không tự đưa ra đáp án trước khi user reasoning.

### 4.4. Explainability Feedback — Core Supporting Feature

Sau mỗi decision quan trọng, interface phải trả lời ngắn gọn:

- kết quả là gì;
- vì sao;
- evidence/rule nào ảnh hưởng;
- limitation;
- next action.

### 4.5. Progress / Investigation-State Tracker — Core Supporting Feature

Hiển thị:

```text
Step 1/6 Financial Screening
Step 2/6 Account Drill-down
Step 3/6 Transaction Tracing
Step 4/6 Control Investigation
Step 5/6 Responsibility Attribution
Step 6/6 Final Review
```

Tracker hiển thị **logical progress**, không chỉ số màn hình đã mở.

### 4.6. Rule & Assumption Reference — Core Content, Optional Dedicated Panel

Các rule cần cho decision phải nhìn thấy tại chỗ:

- case-specific DSRI/SGAI/TATA screening rules;
- materiality reference 1.1 triệu USD;
- approval policy;
- override-route requirements.

Một panel riêng là optional; **nội dung rule itself là core**.

---

## 5. Core vs Optional

| Feature | Nếu bỏ đi | Classification |
|---|---|---|
| 6-step Evidence-Based Investigation Flow | Không tạo được main output | **Core** |
| Prepared Case Data View | User không có input để reasoning | **Core** |
| Progressive Evidence Viewer | User không thể cross-reference evidence | **Core** |
| Calculation & Judgment Panel | Không thu được user reasoning | **Core** |
| Management Override evidence selection | Không đánh giá được core decision 1 | **Core** |
| Responsibility evidence selection | Không đánh giá được core decision 2 | **Core** |
| Explainability Feedback | Sản phẩm mất learning value chính | **Core** |
| Financial Trace Map | Main reasoning path không quan sát được | **Core supporting** |
| Progress Tracker | Flow khó hiểu nhưng task vẫn có thể hoàn thành | **Supporting; nên giữ** |
| Dedicated Benchmark/Rule Panel | Rule có thể đặt ngay trong từng screen | **Optional UI form** |
| Hint Economy | Task vẫn hoàn thành được | **Optional** |
| Animation / cutscene | Không ảnh hưởng core task | **Optional** |
| Drag-and-drop evidence board | Checkbox/card selection đã đủ | **Optional** |
| Export PDF/image | Không ảnh hưởng core task | **Optional** |
| Leaderboard | Không ảnh hưởng learning goal | **Optional** |
| Theme / cosmetic customization | Không ảnh hưởng learning goal | **Optional** |

Nguyên tắc:

> **Freeze optional features nếu bất kỳ phần nào của 6-step core flow chưa chạy ổn định.**

---

## 6. Feature Mapping theo từng Tab

| Tab | Core user action | Evidence / information | Feature output |
|---|---|---|---|
| **1 — Financial Screening** | Tính DSRI/SGAI/TATA và chọn focus area | Financial Overview + screening rules | SG&A được ưu tiên |
| **2 — Account Drill-down** | Tính/đọc biến động và chọn subaccount | SG&A Breakdown + materiality reference | Advisory Expense |
| **3 — Transaction Tracing** | Tính Northstar total/share và chọn transaction group | Advisory Ledger | Northstar / AGR-NST-01 |
| **4 — Control Investigation** | So surface approval với audit trail; aggregate tranches; đánh giá Override | Surface Approval, Audit Trail, Override Route, Approval Policy | Management Override Assessment |
| **5 — Responsibility Attribution** | So comparative evidence giữa Victor/Lucas/David/Sophia | Personnel + involvement + conflict evidence | Primary responsible individual |
| **6 — Final Review** | Chọn evidence set hỗ trợ cả hai final decisions | Evidence đã unlock + Trace Map | Final evidence-based conclusion |

---

## 7. Visible Contribution & Ownership

Feature ownership phải phản ánh đúng loại contribution, không đồng nghĩa một người làm toàn bộ feature.

| Thành viên | Trách nhiệm Week 5 | Visible Contribution | Evidence Location | Dependency | Next Build Priority |
|---|---|---|---|---|---|
| **Phạm Quỳnh Phương** | Integration, consistency Weeks 1–5, user-flow QA và revision control | Feature-scope integration, alternative/error-path review, cross-week consistency checklist, revision log | `feature-scope.md`, `user-flow.md`, README/review notes | Output của tất cả workstream | Test end-to-end flow và loại mọi artifact dùng old logic |
| **Phạm Triệu Tiến Dũng** | Financial input/output wording và calculation verification | Label/unit/example cho Tab 1–3; verify DSRI/SGAI/TATA, Advisory +250%, Northstar 2.6/61.9%; financial explanation copy | `output-explanation.md`, calculation test notes | Week 3 case data + Week 4 formulas | Đối chiếu UI numbers với C# output |
| **Nguyễn Minh Hiền** | Interaction logic, unlock/fallback, scoring-to-UI mapping | Decision states, calculation tolerance hooks, judgment gating, evidence unlock/fallback, progress state rules | `feature-scope.md`, `user-flow.md`, C# logic scripts | Week 4 rule engine | Nối rule state với Unity UI và test alternative paths |
| **Tôn Khánh Ngọc** | Evidence presentation, responsibility comparison và explainability copy | Surface Approval wording, Audit Trail cards, Victor/Lucas/David/Sophia comparison, Tab 4–6 reason statements | `output-explanation.md`, evidence/feedback notes | Week 3 evidence + Week 4 responsibility logic | Finalize evidence cards mà không lộ đáp án sớm |
| **Đinh Thị Minh Khuê** | Unity interface implementation và technical integration | 6-tab navigation, JSON binding, evidence panels, input fields, progress tracker, Trace Map, score/ending screen | Unity project/build/screenshots/test log | Stable feature + flow specification | Tạo working interface draft và nối ít nhất một full path với C# state |

### Integration Evidence

Để contribution có thể kiểm chứng, mỗi thành viên cần có ít nhất một trong các evidence sau:

- section/file authored hoặc reviewed;
- JSON/evidence content có owner;
- C# script/Unity scene/component;
- calculation/output verification note;
- error-path test;
- commit/version history;
- screenshot/video của working feature nếu phù hợp.

---

## 8. Revision Log

| Revision | Nội dung cũ | Nội dung mới | Lý do |
|---|---|---|---|
| Main feature | 3-tab Layer Engine Tab 1→4→6 | 6-step Evidence-Based Investigation Flow | Đồng bộ Week 4 |
| Layer 1 | Beneish/full M-Score direction | DSRI/SGAI/TATA screening only | Đồng bộ Week 2–4 |
| Control logic | COSO/SOX severity, Material Weakness | Surface Approval → Audit Trail → Override/Proxy Bypass → Aggregate Approval | Đồng bộ Week 3–4 |
| Responsibility | Fraud classification | Comparative Responsibility Attribution | Đồng bộ user task |
| Lucas | Suspect/co-approver assumptions | Finance Manager bị bypass; no actual approval event | Đồng bộ latest case |
| Financial consequence | PV bonus / 3-year loss | Loại khỏi MVP | Không nằm trong Week 4 scope |
| Raw financial input | User nhập lại company financial data | Case data read-only; user nhập calculation/judgment | Đồng bộ Week 3 prepared data |
| UI architecture | New 5-area investigation room | 6 tabs/steps formalized in Week 4 | Tránh thay đổi structure sau formalization |

---

## 9. Feature-Scope Checklist

- [x] Main feature trực tiếp tạo main output.
- [x] Supporting features hỗ trợ core task.
- [x] Core vs Optional được tách rõ.
- [x] Optional features không làm chậm core flow.
- [x] Không thêm financial theory mới.
- [x] Không dùng old Beneish/SOX/PV logic.
- [x] Ownership có visible output.
- [ ] Working Unity interface evidence cần được cập nhật theo actual build.
