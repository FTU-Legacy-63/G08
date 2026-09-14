# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — ASSUMPTIONS, OWNERSHIP & LIMITATIONS

## 1. Mục đích

Assumptions được ghi công khai để:

- tránh assumption bị ẩn trong C# code;
- giúp tất cả workstream sử dụng cùng một logic;
- phân biệt external knowledge với case-specific design;
- giúp Week 4 biết rule nào có thể triển khai trực tiếp và rule nào cần tiếp tục kiểm tra.

---

## 2. Financial Assumptions

- Tất cả giá trị tiền tệ sử dụng **triệu USD**.
- Aster Holdings là doanh nghiệp phi tài chính giả lập phù hợp với bối cảnh sử dụng selected Beneish indicators.
- Dữ liệu tài chính hai kỳ là simulated data.
- DSRI và SGAI được sử dụng như selected Beneish indicators phục vụ screening.
- TATA trong prototype sử dụng cash-flow-based implementation:

```text
(Income from Continuing Operations - CFO) / Total Assets
```

- Ba chỉ số không được kết hợp thành một “reduced M-Score”.
- Ba chỉ số không được so sánh raw deviation với nhau để chọn “chỉ số lệch nhiều nhất”.
- Case-specific screening rules do nhóm thiết kế chỉ dùng để điều hướng gameplay; không phải official Beneish cutoff.

---

## 3. Materiality Assumptions

`materiality_threshold = 1.1` triệu USD.

Ngưỡng này:

- là điểm tham chiếu được thiết kế cho case;
- được giới thiệu từ đầu;
- được dùng xuyên suốt để cross-check mức độ đáng chú ý;
- không được dùng để tính DSRI, SGAI hoặc TATA;
- không phải kết quả của một formal audit materiality formula.

Materiality và approval threshold phải được hiển thị như hai khái niệm khác nhau.

---

## 4. Approval Policy Assumptions

Case approval policy:

| Aggregate economic transaction value | Required approval |
|---|---|
| `<= 0.5` | Department Head |
| `> 0.5 and <= 1.0` | Department Head + Finance Manager |
| `> 1.0` | CFO + Board |

Policy này là simulated internal policy của Aster Holdings.

Ba Northstar tranches:

```text
0.9 + 0.9 + 0.8 = 2.6 triệu USD
```

Mỗi tranche khi nhìn riêng:

- nằm trong range `>0.5 and <=1.0`;
- có Victor (Department Head) + Lucas (Finance Manager);
- vì vậy **appears formally approved at tranche level**.

Tuy nhiên, ba khoản có:

- cùng vendor;
- cùng `agreement_id`;
- cùng economic purpose;
- cùng advisory arrangement.

Do đó product logic phải cho phép người chơi xem xét **aggregate economic substance = 2.6 triệu USD**.

Nếu được coi là một giao dịch kinh tế thống nhất, 2.6 triệu USD vượt ngưỡng 1.0 và yêu cầu CFO + Board.

Việc splitting là **evidence pattern cần điều tra**, không phải một điều kiện duy nhất đủ để tự động kết luận Management Override.

---

## 5. Management Override Assumptions

Management Override Assessment phải kết hợp nhiều nhóm evidence, ví dụ:

- approval policy;
- tranche structure;
- agreement connection;
- authority;
- direct participation;
- conflict-of-interest evidence.

Không dùng rule:

```text
aggregate amount > approval threshold
=> automatically Management Override
```

Thay vào đó:

```text
control circumvention pattern
+ authority / participation evidence
+ related supporting evidence
=> evidence set supports or does not support Management Override
```

---

## 6. Responsibility Attribution Assumptions

Responsibility Attribution dựa trên:

- authority;
- direct involvement;
- transaction connection;
- conflict of interest;
- control-bypass connection;
- corroborating evidence.

Fraud Triangle chỉ hỗ trợ giải thích bối cảnh pressure/opportunity/rationalization.

Không có field player-visible nào ghi sẵn:

```text
culprit = true
```

hoặc:

```text
primary_responsible_person = Victor
```

Expected answer chỉ tồn tại trong `answer_key.json`, tách biệt khỏi evidence.

---

## 7. Gameplay Assumptions

- MVP chỉ có một investigation chain chính.
- Người chơi có thể xem evidence đã mở khóa trong mỗi layer.
- Không bắt buộc thứ tự đọc evidence trong cùng một layer.
- Người chơi phải chọn evidence hỗ trợ khi đưa ra Management Override Assessment và Responsibility Attribution.
- Hệ thống có thể dùng answer key để kiểm thử/feedback nhưng không được hiển thị đáp án trước khi người chơi kết luận.
- Không cần database, user account, backend hoặc external API trong MVP.

---

## 8. Technical Assumptions

Technical route chính thức:

```text
Prepared Local JSON Data
        ↓
Unity
        ↓
C# Data Objects
        ↓
Rule-Based Logic
        ↓
Game / Evidence State
        ↓
Output
```

JSON được dùng như local storage format.

C# chịu trách nhiệm:

- parse data;
- calculate DSRI/SGAI/TATA;
- validate input;
- apply rules;
- group related transaction tranches;
- manage evidence state;
- evaluate player selections;
- generate final feedback state.

---

## 9. Limitations

- Case-specific screening rules không có ý nghĩa như empirical industry benchmark.
- Materiality 1.1 triệu USD là assumption của case.
- Approval policy là simulated internal policy.
- Aster Holdings, Northstar và các nhân vật đều hư cấu.
- Early logic test chỉ chứng minh bộ input có thể support core flow; chưa chứng minh full product usability.
- Game không mô phỏng đầy đủ quy trình kiểm toán ISA/PCAOB.
