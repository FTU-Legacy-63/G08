# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — UNITY DATA BINDING NOTE

**Primary Owner:** Đinh Thị Minh Khuê  
**Logic Reviewer:** Nguyễn Minh Hiền  
**Integration Reviewer:** Phạm Quỳnh Phương

## 1. Mục đích

Tài liệu này chứng minh data structure Week 3 có thể ánh xạ sang Unity/C# mà không cần database hoặc backend.

---

## 2. Local Data Load

```text
StreamingAssets / Local Data
        ↓
JSON Loader
        ↓
C# Serializable Classes
        ↓
Game State
        ↓
UI
```

Các file:

- `case_data.json`
- `rules.json`
- `evidence.json`
- `answer_key.json` — internal only

---

## 3. C# Object Groups cần có

```text
CaseData
FinancialPeriodData
SgaSubaccount
TransactionRecord

RuleData
ScreeningRules
ApprovalPolicyRule

EvidenceData
ApprovalRecord
AgreementEvidence
PersonnelRecord
EvidenceItem

AnswerKey
```

Tên class cuối cùng có thể thay đổi khi implement; requirement quan trọng là field meaning phải khớp Input Dictionary.

---

## 4. UI Binding theo Layer

| Layer / Screen | Data cần load | User state cần lưu |
|---|---|---|
| Financial Screening | financials + screening rules + materiality | selected focus area |
| SG&A Drill-Down | sga breakdown | selected subaccount |
| Transaction Tracing | Advisory transactions | selected transaction group |
| Control Investigation | approval policy + approval records + agreement facts | override assessment + evidence IDs |
| Responsibility Attribution | personnel + conflict/involvement evidence | responsible individual + evidence IDs |
| Final Review | toàn bộ state + internal evaluation | Financial Trace Map + feedback |

---

## 5. Technical Validation Checklist

- [ ] JSON load được từ local storage.
- [ ] Không có duplicate ID.
- [ ] Field name khớp C# model.
- [ ] Numeric value được parse đúng kiểu.
- [ ] Enum/string option khớp UI options.
- [ ] `answer_key.json` không được bind vào player-facing evidence view.
- [ ] Evidence locked/unlocked được kiểm soát bằng game state.
- [ ] Missing required data tạo error state thay vì silently default.
- [ ] Financial calculations nằm trong C#, không lưu executable formula string trong JSON.

---

## 6. Visible Contribution

Output của workstream này là:

1. xác nhận JSON structure có thể ánh xạ sang C# object;
2. xác định data nào cần bind vào từng screen;
3. xác định user state nào phải được giữ giữa các layer;
4. kiểm soát việc answer key không bị expose;
5. chuẩn bị handoff để Week 4 implement loader và rule functions.
