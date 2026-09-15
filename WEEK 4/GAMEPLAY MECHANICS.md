# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 4 — GAMEPLAY MECHANICS & RULES

## 1. Cơ chế chung

6 tab chỉ là UI grouping của core investigation chain. Mỗi tab:

1. xem input/evidence;
2. calculation nếu cần;
3. judgment;
4. chọn supporting evidence khi phù hợp;
5. Submit;
6. feedback + score + trace logging;
7. tiếp tục.

Judgment là gate chính để unlock evidence; arithmetic chủ yếu ảnh hưởng score.

---

## 2. Tab 1 — Financial Screening — 10

- DSRI/SGAI/TATA: 3 điểm.
- Chọn SG&A: 7 điểm.
- Judgment đúng → mở SG&A breakdown.

---

## 3. Tab 2 — Account Drill-down — 10

- Advisory +250%: 3 điểm.
- Chọn Advisory Expense: 7 điểm.
- Judgment đúng → mở Advisory ledger.

---

## 4. Tab 3 — Transaction Tracing — 10

- Northstar 2.6 / 61.9%: 3 điểm.
- Chọn Northstar/AGR-NST-01: 7 điểm.
- Judgment đúng → mở **Surface Approval Summary** trước.

Surface summary chỉ cho thấy:

```text
Department Head Approval = Completed
Finance Approval = Completed
Overall = Approved
```

Không hiển thị actual Finance actor.

---

## 5. Tab 4 — Control Investigation & Management Override — 30

### Stage 1 — Initial Control Impression

Người chơi được hỏi:

> Hồ sơ bề mặt có cho thấy giao dịch đã hoàn thành required approval steps không?

Đáp án: **Có, về mặt hiển thị ban đầu.**

Sau đó game unlock **Approval Audit Trail**.

### Stage 2 — Audit Trail Investigation

Audit trail cho thấy:

```text
Department Head actor = Victor
Finance step status = Completed
Finance step method = management_override_proxy
Actual Finance Manager approver = none
Override actor = Victor
Justification = missing
Retrospective Finance review = missing
Lucas approval event = none
```

Người chơi phải nhận ra:

> **Finance approval control was bypassed. Lucas did not actually approve.**

### Stage 3 — Aggregate Transaction Investigation

3 tranches:

```text
0.9 + 0.9 + 0.8 = 2.6
```

Same vendor + same agreement + same economic purpose + same initiator.

Approval policy:

```text
2.6 > 1.0
→ CFO + Board
```

Người chơi phải nhận ra transaction splitting / escalation bypass.

### Stage 4 — Management Override Judgment

Người chơi chọn:

- Override Supported / Not Supported;
- evidence IDs.

Expected conclusion: **Supported**.

Không dùng fake signature evidence.

---

## 6. Tab 5 — Responsibility Attribution — 25

### Victor

- Department Head;
- transaction initiator;
- agreement signatory;
- Department Head approval actor;
- override/proxy actor;
- conflict evidence.

### Lucas

- Finance Manager;
- required approver under policy;
- audit trail contains no Lucas approval event;
- bypassed rather than co-approving;
- no conflict evidence.

### David

Contextual governance relevance only.

### Sophia

Control-monitoring role; possible control failure but no direct override evidence.

Expected primary responsible individual: **Victor**.

---

## 7. Tab 6 — Final Review — 15

Correct evidence chain:

```text
SGAI signal
→ SG&A
→ Advisory Expense
→ Northstar 3 tranches
→ Surface approvals appear complete
→ Audit trail reveals Victor proxy/override, Lucas did not approve
→ Override route requirements not met
→ Same agreement/economic purpose aggregate to 2.6
→ CFO + Board escalation bypassed
→ Victor direct involvement + conflict
→ Management Override Supported
→ Victor primary responsible
```

---

## 8. Unlock / Fallback

| Full evidence | Unlock | Fallback |
|---|---|---|
| SG&A Breakdown | correct SG&A judgment | financial summary |
| Advisory Ledger | correct Advisory judgment | limited Advisory summary |
| Surface Approval Summary | correct Northstar judgment | control-policy summary |
| Approval Audit Trail | player reviews surface approval and continues investigation | limited control note |
| Personnel Dossiers | identify Finance bypass + aggregate escalation issue | org/control summary |
| Final Evidence View | complete Tab 5 | evidence already unlocked |

---

## 9. Financial Trace Map

Correct chain:

**SGAI 1.12 → SG&A → Advisory +250% → Northstar 61.9% → Approval Appears Complete → Audit Trail: Victor Override / Lucas Bypassed → Aggregate 2.6 Requires CFO+Board → Management Override → Victor → Final Evidence Set**
