# User Flow — The Last Heir (Week 5 — Revised)

> **Design decision:** Giữ **5 khu vực UI thực tế** của prototype — `DESK / BOARD / FILES / SYSTEM / REVIEW` — nhưng giữ nguyên **6 logical investigation steps** đã chốt ở Week 4.
>
> Mục tiêu của revision này là **tăng độ khó và tính interactive mà không thay đổi logic điều tra cốt lõi**. UI là một không gian điều tra liền mạch; logical steps vẫn tuần tự; **BOARD trở thành lớp visual progression** cho thấy vụ việc dần được chứng minh thay vì trở thành một puzzle/tab thứ 7.

---

## 1. User Goal

Người chơi đóng vai người điều tra và phải đi từ dữ liệu tài chính phân mảnh đến một **Responsibility Conclusion có căn cứ**.

Người chơi cần:

1. Nhận ra financial anomaly.
2. Xác định transaction đáng điều tra.
3. Đối chiếu transaction với contract/payment.
4. Đánh giá control issue mà không vội kết luận fraud.
5. Cross-reference evidence để xác định cá nhân có bằng chứng mạnh nhất về primary management responsibility.
6. Tổng hợp toàn bộ evidence ở Final Board Review.

Đây là mở rộng của user task Week 1:

> **Identify the anomaly → Evaluate information → Verify evidence → Connect evidence → Form a conclusion.**

Trọng tâm vẫn là **Information Integration**: user phải biết thông tin nào liên quan, thông tin nào chỉ là tín hiệu, và bằng chứng nào đủ mạnh để hỗ trợ kết luận.

---

## 2. Nguyên tắc kiến trúc: 5 UI Areas + 6 Logical Steps

### 2.1. UI không phải là logic

Game có 5 khu vực người chơi nhìn thấy:

```text
DESK → BOARD → FILES → SYSTEM → REVIEW
```

Nhưng investigation engine vẫn có 6 logical steps:

```text
1. Financial Diagnosis
        ↓
2. Transaction Investigation
        ↓
3. Reconciliation
        ↓
4. Control Investigation
        ↓
5. Responsibility Investigation
        ↓
6. Final Board Review
```

**Không được hiểu việc gộp UI là gộp logic.**

Một khu vực có thể chứa nhiều logical steps, nhưng nội dung của step sau chỉ xuất hiện khi điều kiện unlock của step trước được thỏa mãn.

---

## 3. BOARD — cơ chế progression chính

### 3.1. Vai trò

**BOARD không phải một puzzle độc lập và không phải bước thứ 7.**

BOARD là nơi người chơi nhìn thấy **investigation chain đang được xây dựng**.

Sau mỗi logical step:

- Nếu người chơi trả lời đúng/gating đúng → evidence tương ứng được **confirmed** và xuất hiện trên BOARD.
- Nếu trả lời sai → game vẫn cho phép đi tiếp theo engine Week 4, nhưng evidence tương ứng **không được confirmed**; BOARD có thể giữ một node mờ/placeholder hoặc unresolved state.
- BOARD không tự nói đáp án.
- Người chơi vẫn phải quay lại documents và cross-reference để hiểu ý nghĩa của evidence.

Như vậy, BOARD trở thành một **reward cho reasoning đúng**, đồng thời là một visual record của investigation.

### 3.2. BOARD progression

```text
START
  ↓
[BOARD trống / chỉ có case context]
  ↓
Tab 1 đúng
  ↓
[Financial Signal → External Advisory]
  ↓
Tab 2 đúng
  ↓
[External Advisory → Northstar]
  ↓
Tab 3 đúng
  ↓
[Northstar → Reconciled Transaction]
  ↓
Tab 4 đúng
  ↓
[Northstar → Control Red Flag]
  ↓
Tab 5 đúng
  ↓
[Control Red Flag → EMP-0231]
  ↓
Tab 6 đúng
  ↓
[EMP-0231 → Victor → Responsibility Conclusion]
```

### 3.3. Board không được làm giảm độ khó

BOARD chỉ cho biết **evidence nào đã được xác nhận**, không giải thích toàn bộ kết luận.

Ví dụ:

**Không nên:**

> `EMP-0231 = Victor → Victor is responsible`

**Nên:**

> `EMP-0231`
>
> `Authorized Amendment No. 3`

Sau đó người chơi phải tự sang **SYSTEM → Employee Directory** để xác định EMP-0231 là Victor.

Điều này giữ đúng tinh thần Information Integration và cross-reference.

---

# 4. Happy Path

| Logical Step | UI Area | User action | System response | Board response | Unlock |
|---|---|---|---|---|---|
| **1. Financial Diagnosis** | **DESK** | Đọc Financial Overview, tính/đọc DSRI, SGAI, TATA và trả lời gating questions | Kiểm tra calculation + gating theo tolerance đã chốt | Nếu đúng: hiện financial red-flag node liên quan đến **External Advisory** | Transaction evidence |
| **2. Transaction Investigation** | **FILES** | Mở Vendor Breakdown, xác định vendor trọng tâm | Kiểm tra vendor choice | Nếu đúng: thêm **Northstar** vào chain | Contract + Payment Ledger |
| **3. Reconciliation** | **FILES** | Đối chiếu Northstar Contract và Payment Ledger | Kiểm tra kết luận reconciliation | Nếu đúng: thêm node **Transaction Reconciled**; không kết luận "money disappeared" | Control evidence |
| **4. Control Investigation** | **REVIEW** | Đọc Control Policy, Exception Memo, Payment Schedule; tính Magnitude/Likelihood và xác định COSO/Severity | Kiểm tra gating + tolerance của Magnitude/Likelihood | Nếu đúng: thêm **Control Red Flag / Material Weakness** | Responsibility evidence |
| **5. Responsibility Investigation** | **SYSTEM** | Tìm Amendment History → EMP-0231 → Employee Directory | Kiểm tra `EMP-0231 = Victor` | Nếu đúng: thêm **EMP-0231 → Victor** | Final Board Review |
| **6. Final Board Review** | **REVIEW** | Tổng hợp evidence, chọn suspect + classification; nếu đúng mới mở PV bonus | Chấm điểm final conclusion và mở/khóa PV | Hoàn thiện investigation chain | Ending |

### Core flow

```text
DESK
  │
  │ Step 1
  ▼
BOARD UPDATE #1
  │
  ▼
FILES
  │ Step 2
  │ Step 3
  ▼
BOARD UPDATE #2 + #3
  │
  ▼
REVIEW
  │ Step 4
  ▼
BOARD UPDATE #4
  │
  ▼
SYSTEM
  │ Step 5
  ▼
BOARD UPDATE #5
  │
  ▼
REVIEW
  │ Step 6
  ▼
FINAL BOARD / ENDING
```

---

# 5. Progressive Disclosure trong FILES

FILES là khu vực chứa nhiều logical steps nhất. Vì vậy **không được hiện toàn bộ tài liệu ngay từ đầu**.

### Khi mới mở FILES

Chỉ hiển thị:

- những tài liệu đã được unlock;
- tài liệu thuộc logical step hiện tại;
- tài liệu đã mở từ các bước trước.

Ví dụ:

```text
FILES — initial

[Vendor Breakdown]
[External Advisory data]

LOCKED
[Northstar Contract]
[Payment Ledger]
[Control Policy]
[Temporary Exception Memo]
[Executive Dossiers]
```

Sau khi Tab 2 đúng:

```text
FILES

[Vendor Breakdown] ✓
[Northstar Contract] NEW
[Payment Ledger] NEW

LOCKED
[Control Policy]
[Temporary Exception Memo]
[Executive Dossiers]
```

Sau khi Tab 3 đúng:

```text
FILES

[Vendor Breakdown] ✓
[Northstar Contract] ✓
[Payment Ledger] ✓

[Control Policy] NEW
[Temporary Exception Memo] NEW
[Payment Schedule] NEW
[Executive Dossiers] NEW
```

Như vậy người chơi **không bị đưa đáp án trước**, nhưng vẫn cảm thấy hồ sơ đang được mở rộng.

---

# 6. Difficulty Design — tăng khó nhưng không phá flow

Mục tiêu của revision là **khó hơn về reasoning**, không phải khó hơn vì UI rối.

### 6.1. Không highlight đáp án

Financial Overview không đánh dấu sẵn:

> "LOOK AT EXTERNAL ADVISORY"

Người chơi phải tự nhận ra cash-flow anomaly và khoản External Advisory tăng bất thường.

### 6.2. Không resolve evidence hộ player

Ví dụ:

```text
Payment Schedule Amendment No. 3
Authorized by: EMP-0231
```

Không ghi:

```text
Authorized by: Victor
```

Người chơi phải tự cross-reference với Employee Directory.

### 6.3. Hypothesis không bị loại ngay

Các executive profiles phải khiến nhiều người **có vẻ liên quan**:

- Victor — executive sponsor
- Lucas — investment review
- David — finance/payment execution
- Sophia — internal control

Người chơi phải phân biệt:

> involvement ≠ primary responsibility.

### 6.4. Control evidence không được biến thành "proof of fraud"

Payment pattern:

```text
23 / 26 payments below threshold
```

là **red flag**, không phải tự động:

> "Victor committed fraud."

Người chơi vẫn phải tiếp tục tìm amendment + authorization evidence.

### 6.5. Board chỉ xác nhận evidence, không xác nhận kết luận

Board giúp user thấy:

```text
Financial Signal
      ↓
Northstar
      ↓
Control Red Flag
      ↓
EMP-0231
```

nhưng **không nối thẳng đến Victor** cho đến khi player tự resolve EMP-0231.

---

# 7. Unlock Logic — giữ nguyên Week 4

Gộp UI **không được thay đổi điều kiện logic**.

### Tab 1 — Financial Diagnosis

Phải giữ:

- gating answers;
- calculation/tolerance;
- đúng cả phần lựa chọn và phần tính toán mới được unlock evidence tương ứng.

### Tab 2 — Transaction Investigation

- kiểm tra vendor gating;
- đúng → unlock transaction documents.

### Tab 3 — Reconciliation

- kiểm tra reconciliation gating;
- đúng → unlock Control Policy + supporting documents.

### Tab 4 — Control Investigation

Phải giữ **dual condition**:

1. gating đúng;
2. Magnitude/Likelihood nằm trong tolerance.

Chỉ khi cả hai điều kiện đạt thì Control evidence được xác nhận/unlock theo logic đã chốt.

### Tab 5 — Responsibility Investigation

- đúng `EMP-0231 = Victor` → xác nhận responsibility evidence.

### Tab 6 — Final Board Review

- chọn đúng suspect;
- classification được chấm riêng;
- chỉ khi suspect đúng mới mở PV bonus.

> **Important:** Submit vẫn đưa người chơi tới logical step tiếp theo theo engine Week 4. Đúng/sai quyết định điểm và evidence/document unlock; không biến sai một bước thành game-over.

---

# 8. Interactive Behavior

Game nên tạo cảm giác **"tôi đang điều tra"**, không phải "tôi đang điền form".

### Người chơi được phép

- mở/đóng documents đã unlock;
- quay lại BOARD để xem evidence chain;
- quay lại FILES để đối chiếu tài liệu đã mở;
- vào SYSTEM khi Responsibility Investigation đã được unlock;
- xem lại evidence trước Final Board Review.

### Nhưng không được

- xem tài liệu của logical step chưa unlock;
- thấy đáp án được resolve sẵn;
- bypass logical step bằng cách vào khu vực khác;
- xác định Victor chỉ bằng việc nhìn profile;
- mở PV trước khi xác định đúng suspect.

---

# 9. Alternative Path

| Tình huống | Behavior |
|---|---|
| Tab 1 sai | Vẫn sang bước tiếp theo nhưng không confirm financial evidence tương ứng; điểm = 0 cho step |
| Tab 2 sai | Vẫn tiếp tục nhưng Northstar evidence không được confirmed/unlock theo điều kiện |
| Tab 3 sai | Vẫn tiếp tục; Control evidence không được unlock theo điều kiện |
| Tab 4 sai hoặc calculation ngoài tolerance | Vẫn tiếp tục nhưng Control evidence không được confirmed |
| Tab 5 sai | Vẫn sang Final Board Review nhưng không có responsibility confirmation |
| Tab 6 sai suspect | Không mở PV bonus; ending vẫn được tính theo score |
| Dùng Hint | Hint hỗ trợ reasoning nhưng không trực tiếp tiết lộ đáp án; áp dụng Hint Economy đã chốt |

---

# 10. Error Path

### Financial Diagnosis

- Input thiếu/không hợp lệ → không cho submit.
- Calculation sai tolerance → submit được nhưng không unlock evidence.
- Gating sai → submit được nhưng không confirm evidence.

### Control Investigation

Phải phân biệt:

- **input error** → không submit được;
- **calculation ngoài tolerance** → submit được nhưng không unlock;
- **interpretation/gating sai** → submit được nhưng không confirm control evidence.

### Responsibility

Nếu user thấy:

```text
EMP-0231
```

nhưng chọn sai person:

- không được tự động sửa;
- không mở PV;
- cho phép quay lại SYSTEM/FILES để cross-reference.

---

# 11. Final Investigation State

Khi hoàn thành, BOARD có thể hiển thị:

```text
┌─────────────────────────────────────┐
│        INVESTIGATION TRACE          │
│                                     │
│ Financial Signal                    │
│        ↓                            │
│ External Advisory                   │
│        ↓                            │
│ Northstar Advisory                  │
│        ↓                            │
│ Transaction Reconciled              │
│        ↓                            │
│ Control Red Flag                    │
│        ↓                            │
│ Amendment No. 3                     │
│        ↓                            │
│ EMP-0231                            │
│        ↓                            │
│ Victor                              │
│        ↓                            │
│ Responsibility Conclusion           │
└─────────────────────────────────────┘
```

Những node chưa được chứng minh có thể hiển thị ở trạng thái:

```text
[ UNRESOLVED ]
```

thay vì biến mất hoàn toàn.

Điều này giúp người chơi hiểu **mình đã bỏ sót ở đâu**, đồng thời hỗ trợ Explainability ở màn hình cuối.

---

# 12. Mapping giữa UI và Logical Steps

| UI Area | Logical Step | Nội dung | Progressive disclosure |
|---|---|---|---|
| **DESK** | Tab 1 | Financial Diagnosis | Step 1 phải hoàn thành trước khi transaction evidence mở |
| **BOARD** | Visual layer | Evidence progression | Không phải logical step; cập nhật theo evidence đã xác nhận |
| **FILES** | Tab 2 + Tab 3 | Transaction + Reconciliation | Tab 3 documents chỉ xuất hiện sau khi Tab 2 đúng |
| **REVIEW** | Tab 4 | Control Investigation | Control documents/controls chỉ được sử dụng sau Tab 3 unlock |
| **SYSTEM** | Tab 5 | Responsibility Investigation | Chỉ mở sau Tab 4; phải cross-reference EMP-0231 |
| **REVIEW** | Tab 6 | Final Board Review | Chỉ mở sau Responsibility Investigation |
| **ENDING** | Output | Score + Ending + Trace | Hiển thị evidence đúng/sai/bỏ sót |

---

# 13. Core Design Principle

> **UI có thể được gộp; investigation logic không được gộp.**

> **Board có thể cho thấy tiến trình; Board không được cho đáp án.**

> **Độ khó đến từ việc kết nối evidence và loại bỏ hypothesis, không đến từ việc làm UI khó hiểu.**

> **Người chơi luôn biết mình có thể làm gì tiếp theo, nhưng không được biết trước câu trả lời.**

Đây là điểm cân bằng giữa hai mục tiêu của revision:

**Giữ trải nghiệm Investigation Room liền mạch**  
`DESK → BOARD → FILES → SYSTEM → REVIEW`

đồng thời

**giữ độ sâu của engine 6-step**  
`Financial → Transaction → Reconciliation → Control → Responsibility → Conclusion`.

---

## 14. Reference to Existing Week 4/5 Logic

Revision này **không thay đổi**:

- 6 logical investigation steps;
- 3-layer engine: Beneish → COSO/SOX → Fraud Triangle/PV;
- scoring 100 + PV bonus;
- tolerance-based calculation ở Tab 1 và Tab 4;
- document unlock theo kết quả;
- Final Board Review;
- Responsibility Conclusion;
- Financial Trace Log.

Nó chỉ thay đổi **cách các logical steps được trình bày và tương tác trong prototype**.

Week 4 xác định rõ 6 bước từ Financial Diagnosis → Transaction → Reconciliation → Control → Responsibility → Final Board Review. fileciteturn15file0

Week 5 cũng xác định Layer Engine là core feature, trong khi Document Viewer, Evidence Board và Suspect Profiles hỗ trợ người chơi sử dụng Layer Engine. fileciteturn15file1

Vì vậy, bản UI mới được xem là **UI restructuring + interaction refinement**, không phải thay đổi financial/game logic.


---

# 3.4. Notification & Progress Rules

## 3.4.1. Evidence Notification Rule

BOARD notification chỉ có vai trò thông báo tiến trình điều tra, không thay thế quá trình phân tích của người chơi.

Khi một logical step được xác nhận thành công:

- Hệ thống tạo notification:
  > New evidence added to case board.

- Notification chỉ báo rằng có evidence mới được cập nhật.
- Người chơi phải tự mở BOARD để xem evidence node mới.
- Notification không được hiển thị:
  - tên suspect;
  - kết luận trách nhiệm;
  - mối liên hệ đã được resolve;
  - đáp án của investigation step.

Ví dụ:

Sai:

```
New evidence:
EMP-0231 belongs to Victor.
Victor is responsible.
```

Đúng:

```
New evidence added to case board.
```

Khi mở BOARD:

```
[EMP-0231]
Authorization record
Status: Confirmed
```

Người chơi vẫn phải cross-reference trong SYSTEM để tự xác định danh tính.

---

## 3.4.2. Logical Progress Rule

Progress indicator phải dựa trên 6 logical investigation steps, không dựa trên số khu vực UI đã truy cập.

Progress:

```
Step 1 / 6 — Financial Diagnosis
Step 2 / 6 — Transaction Investigation
Step 3 / 6 — Reconciliation
Step 4 / 6 — Control Investigation
Step 5 / 6 — Responsibility Investigation
Step 6 / 6 — Final Board Review
```

Không sử dụng:

```
DESK → BOARD → FILES → SYSTEM → REVIEW
```

làm progress measurement.

REVIEW xuất hiện hai lần trong flow:
- lần đầu cho Control Investigation;
- lần cuối cho Final Board Review.

Đây là hai logical states khác nhau, không phải một bước lặp.

---

## 3.4.3. Returning Area Rule

Một UI area có thể được mở lại nếu nó chứa logical step mới.

Ví dụ:

REVIEW lần 1:

```
REVIEW
↓
Control Investigation unlocked
```

Sau khi hoàn thành:

```
Control Investigation completed ✓
```

Người chơi di chuyển sang SYSTEM để hoàn thành logical step tiếp theo trước khi REVIEW lần 2 có thể mở:

```
SYSTEM
↓
Responsibility Investigation unlocked
↓
Responsibility Investigation completed ✓
```

Chỉ sau khi bước này hoàn thành, REVIEW lần 2 mới sẵn sàng:

REVIEW lần 2:

```
NEW SECTION AVAILABLE
Final Board Review
```

UI giữ nguyên khu vực REVIEW nhưng mở thêm section mới với badge:

```
NEW
Final Board Review
```

Mục tiêu là giúp người chơi hiểu đây là cùng một không gian điều tra với nhiệm vụ mới, không phải game quay lại màn cũ.

---

## 3.4.4. Board Final State Rule

BOARD có hai trạng thái:

### Investigation State

Trong quá trình chơi, BOARD chỉ hiển thị evidence đã được xác nhận:

```
Financial Signal
        ↓
Northstar
        ↓
Control Red Flag
        ↓
EMP-0231
```

Evidence chưa đủ điều kiện được hiển thị ở trạng thái:

```
[UNRESOLVED]
```

BOARD không tự nối:

```
EMP-0231 → Victor
```

---

### Final Review State

Chỉ sau khi người chơi hoàn thành Final Board Review và tự xác nhận responsibility conclusion:

```
EMP-0231
      ↓
Victor
      ↓
Responsibility Conclusion
```

Việc resolve này là kết quả của player reasoning, không phải tự động từ document unlock.

---

## 3.4.5. Core Principle Update

Bổ sung nguyên tắc:

> UI progression and evidence progression are separate systems.

UI areas quyết định nơi người chơi tương tác.

Logical steps quyết định điều người chơi đã chứng minh.

> Notifications guide attention. They never replace investigation.
