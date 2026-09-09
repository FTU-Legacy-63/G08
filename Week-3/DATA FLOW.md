**DATA FLOW**

Data Structure: JSON tĩnh cho dữ liệu nhỏ/cố định (financial overview, contract, control
policy, amendment); CSV cho bảng lớn (payment ledger 26 dòng, employee directory). Không dùng
database — khớp Route Hypothesis Code-based Web đã chốt Week 2.

- Financial Overview + External Advisory (JSON) → đọc revenue/net\_income/ocf/AR/gross\_margin
  theo quý → validate (net\_income ≠ 0, revenue > 0) → tính OCF/NI, DSO, advisory multiple,
  advisory vs budget → so benchmark → Financial Overview screen (không highlight sẵn) → người
  chơi chọn field cần điều tra (Financial Diagnosis)

- Vendor Breakdown (JSON) → đọc vendor\_cost\_ratio từng vendor → validate (Σ vendor\_payment =
  external\_advisory hiện tại) → unlock nếu submit đúng "External Advisory" → người chơi chọn
  vendor trọng tâm (Transaction Investigation)

- Contract Northstar (JSON) → đọc contract\_value\_total, total\_payment → validate (đúng định
  dạng contract\_id/approver\_code) → so contract\_value\_total với total\_payment → 100% reconciled
  → người chơi chọn kết luận reconciliation (Reconciliation)

- Payment Ledger (CSV, 26 dòng) + Control Policy (JSON) → đọc payment\_amount/payment\_date →
  validate (Σ payment\_amount = total\_payment) → tính % dưới ngưỡng, % ngoài exception → unlock
  Control Policy + 4 dossier nếu submit đúng ở Reconciliation → người chơi nhập 2 tỷ lệ + chọn
  interpretation (Control Investigation)

- Amendment History (JSON) + Employee Directory (CSV) → đọc amendment\_authorized\_by =
  "EMP-0231" → validate (định dạng EMP-XXXX, amendment\_date ≥ contract\_signed\_date) → unlock
  Amendment History nếu submit đúng ở Control Investigation → người chơi tự tra Employee
  Directory → chọn nhân vật khớp (Responsibility Investigation)

- Financial Trace Log (6 mốc, kèm cờ đúng/sai) → người chơi chọn kết luận cuối → cộng điểm 6 tab
  (tối đa 100) → tra bảng ending → hiển thị tổng kết (Final Board Review)

**Vấn đề data flow đã giúp phát hiện sớm:**

- Field thiếu: bản nháp cũ không có `accounts_receivable` → không tính được DSO → đã bổ sung.
- Unit không thống nhất: một bản nháp cũ dùng 2 thang doanh thu khác nhau (30–40 và 120–165) →
  đã gộp về 1 thang duy nhất (xem `ASSUMPTIONS.md`).
- Input không nối được với logic: `amendment_date` cần validate ≥ `contract_signed_date`, nếu
  không câu chuyện "amendment sau khi ký hợp đồng" sẽ vô lý.
- Output cần dữ liệu chưa có: Reassess Hypothesis ban đầu định dùng "niềm tin thị trường theo
  thời gian thực" — không khả thi trong 7 tuần, đã đổi sang sự kiện tin đồn tĩnh (Week 4).
