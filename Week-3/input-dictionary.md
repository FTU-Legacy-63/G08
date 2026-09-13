# Input Dictionary

Quy ước: đơn vị tiền tệ là **tỷ VND**, hai kỳ dữ liệu ký hiệu **kỳ 0** (năm trước) và **kỳ 1** (năm điều tra, năm có giao dịch Northstar).

## 1. Layer 1 — Financial Diagnosis (Beneish M-Score)

### 1.1 MVP — 3 biến (DSRI, SGAI, TATA)

| Input name          | Ý nghĩa tài chính                             | Type   | Unit  | Example (kỳ 1) | Valid range | Source/owner |
| -------------------- | ---------------------------------------------- | ------ | ----- | --------------- | ----------- | ------------ |
| revenue              | Doanh thu thuần                                | number | tỷ VND | 4,400          | > 0         | Input owner (Dũng) |
| net_income           | Lợi nhuận sau thuế                             | number | tỷ VND | 760            | có thể âm nếu lỗ, nhưng case này > 0 | Input owner |
| operating_cash_flow  | Dòng tiền thuần từ hoạt động kinh doanh        | number | tỷ VND | 550            | có thể âm    | Input owner |
| accounts_receivable  | Phải thu khách hàng cuối kỳ                    | number | tỷ VND | 460            | ≥ 0         | Input owner |
| sga_expense          | Chi phí bán hàng & quản lý DN, **gồm** External Advisory Fee | number | tỷ VND | 610 | ≥ 0 | Input owner |
| total_assets         | Tổng tài sản cuối kỳ                           | number | tỷ VND | 9,000          | > 0         | Input owner |

Mỗi field trên cần nhập đủ **cho cả kỳ 0 và kỳ 1** để tính được tỷ số theo công thức DSRI/SGAI/TATA.

Benchmark ngành (hằng số cấu hình sẵn, không phải input người chơi nhập):

| Benchmark name    | Ý nghĩa                          | Range         |
| ------------------ | --------------------------------- | ------------- |
| dsri_benchmark_low  | Ngưỡng dưới DSRI bình thường      | 1.0           |
| dsri_benchmark_high | Ngưỡng trên DSRI bình thường      | 1.2           |
| sgai_benchmark_low  | Ngưỡng dưới SGAI bình thường      | 1.0           |
| sgai_benchmark_high | Ngưỡng trên SGAI bình thường      | 1.1           |
| tata_benchmark_low  | Ngưỡng dưới TATA bình thường      | -0.05         |
| tata_benchmark_high | Ngưỡng trên TATA bình thường      | 0.05          |

### 1.2 Final — mở rộng đủ 8 biến Beneish

Bổ sung so với MVP (chỉ cần cho Final, không bắt buộc ở MVP):

| Input name           | Ý nghĩa tài chính                         | Type   | Unit  | Example (kỳ 1) | Valid range | Source/owner |
| --------------------- | -------------------------------------------- | ------ | ----- | --------------- | ----------- | ------------ |
| intangible_assets     | Tài sản vô hình                              | number | tỷ VND | 300            | ≥ 0         | Input owner |
| ppe                    | Nguyên giá TSCĐ hữu hình                     | number | tỷ VND | 3,600          | ≥ 0         | Input owner |
| depreciation_expense   | Chi phí khấu hao trong kỳ                    | number | tỷ VND | 320            | ≥ 0         | Input owner |
| total_debt             | Tổng nợ phải trả (vay + trái phiếu)          | number | tỷ VND | 3,200          | ≥ 0         | Input owner |
| current_assets         | Tài sản ngắn hạn                             | number | tỷ VND | 4,100          | ≥ 0         | Input owner |

Các biến GMI, SGI dùng lại `revenue` (đã có ở MVP) và cần thêm `gross_profit` (kỳ 0, kỳ 1) để tính Gross Margin — coi là input bổ sung cùng nhóm Final.

Hằng số cấu hình thêm cho Final: `m_score_threshold = -1.78` (ngưỡng đối chiếu M-Score).

---

## 2. Layer 2 — Control Investigation (COSO + SOX 404)

| Input name                  | Ý nghĩa tài chính                                                   | Type   | Unit  | Example | Valid range | Source/owner |
| ---------------------------- | -------------------------------------------------------------------- | ------ | ----- | ------- | ----------- | ------------ |
| northstar_price_paid         | Giá Northstar Aster Holdings thực trả                                | number | tỷ VND | 620    | > 0         | Input owner |
| northstar_fair_value         | Giá thị trường hợp lý ước tính cho giao dịch tương đương              | number | tỷ VND | 150    | > 0         | Input owner |
| materiality_rate             | Tỷ lệ dùng để tính Materiality Threshold (theo Net Income)            | number | %     | 5      | 0–100      | Input owner (cấu hình sẵn) |
| transactions_total           | Tổng số giao dịch liên quan được rà soát trong kỳ                     | integer| giao dịch | 26 | ≥ 1        | Input owner |
| transactions_under_threshold | Số giao dịch có giá trị dưới ngưỡng cần phê duyệt cấp cao             | integer| giao dịch | 23 | 0 ≤ x ≤ transactions_total | Input owner |
| coso_component_violated      | Component COSO bị vi phạm (giá trị cố định cho case này)              | string | —     | "Control Environment" | một trong 5 component COSO | Input owner |

Giá trị dẫn xuất (Process tự tính, không phải input người chơi nhập trực tiếp):
`magnitude = |northstar_price_paid − northstar_fair_value|`,
`materiality_threshold = materiality_rate% × net_income (kỳ 1)`,
`likelihood_ratio = transactions_under_threshold / transactions_total`.

---

## 3. Layer 3 — Final Board Review (Fraud Triangle + Impact)

| Input name           | Ý nghĩa tài chính                                                    | Type    | Unit  | Example  | Valid range | Source/owner |
| ---------------------- | ----------------------------------------------------------------------- | ------- | ----- | -------- | ----------- | ------------ |
| suspect_id             | Nghi phạm được người chơi chọn                                          | string  | —     | "Victor" | một trong danh sách nghi phạm | Input owner |
| behaviour_classification | Phân loại hành vi người chơi chọn                                       | enum    | —     | "Fraud"  | Fraud / Misconduct / Poor Decision | Input owner |
| correct_suspect_id     | Đáp án đúng (dữ liệu ẩn, dùng để so khớp)                                | string  | —     | "Victor" | cố định     | Logic owner |
| annual_overpayment     | Chênh lệch giá dùng làm cơ sở tính PV (= Magnitude ở Layer 2)            | number  | tỷ VND | 470     | > 0, chỉ dùng được nếu suspect_id = correct_suspect_id | dẫn xuất từ Layer 2 |
| discount_rate_r        | Ke đã điều chỉnh, dùng làm r trong công thức PV                         | number  | %/năm | 15      | 0–100      | Input owner (cấu hình sẵn) |
| horizon_years          | Số năm giả định lặp lại hành vi                                         | integer | năm   | 3       | ≥ 1        | Input owner (cấu hình sẵn) |
| user_pv_answer         | Con số PV người chơi tự tính và nhập vào                                | number  | tỷ VND | 1,073   | sai số cho phép ±10% so với giá trị đúng | user-entered |

## 4. Missing value handling (áp dụng chung)

- Nếu thiếu bất kỳ field tài chính nào ở Layer 1 (MVP), Tab 1 không cho tính biến và hiển thị cảnh báo thiếu dữ liệu thay vì tính với giá trị mặc định 0 (tránh làm sai lệch tỷ số).
- Nếu `suspect_id` chưa được chọn, câu hỏi tính PV ở Layer 3 không hiển thị (không phải hiển thị rồi disable).
- `behaviour_classification` sai không chặn việc xem Investigation Verdict Report, nhưng được ghi nhận là điểm trừ riêng với việc chọn sai `suspect_id`.
