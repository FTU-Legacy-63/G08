**ASSUMPTIONS**

- Toàn bộ số liệu tài chính (Aster Holdings, Aurora Group) là dữ liệu team tự tạo, không phải
  công ty thật — ghi rõ ở màn hình mở đầu.
- Benchmark OCF/NI ≥ 1 và DSO 28–32 ngày là ngưỡng team tự đặt dựa trên nguyên lý chung, không
  trích trực tiếp từ 1 nguồn — ghi chú "benchmark tham khảo" trong UI.
- Pattern Payment Structuring (26 khoản, 23/26 < 20 tỷ) mượn logic split-purchase của GAO nhưng
  khác bối cảnh (mua sắm công vụ Mỹ vs hợp đồng tư vấn doanh nghiệp VN) — chỉ mượn nguyên lý
  threshold avoidance, không mượn bối cảnh hay số liệu cụ thể.
- Hợp đồng Northstar cố tình viết mô tả dịch vụ mơ hồ ở Lớp 1 — thiết kế có chủ đích, không
  công khai cho người chơi trong game.
- MVP chỉ kết luận "bằng chứng mạnh nhất về primary management responsibility", không kết luận
  "Victor có tội" — theo đúng nguyên tắc GAO (signal cần context trước khi buộc tội).
- Employee Directory chứa nhân sự không liên quan (noise) ngoài 4 nhân vật chính, để việc tra
  cứu EMP-0231 không trở nên tầm thường.

**Đã sửa trong Week 3:** một bản nháp cũ có 2 thang doanh thu không khớp nhau (120–165 cho
OCF/NI vs 30–40 riêng cho ví dụ DSO). Đã thống nhất lại 1 thang doanh thu duy nhất (120–165) và
tính lại `accounts_receivable` để DSO vẫn giữ đúng xu hướng đã chốt (24 → 43 ngày).

---

**INPUT VALIDATION**

- required: mọi field trong `INPUT-DICTIONARY.md` phải có giá trị, thiếu → "dữ liệu chưa đầy đủ"
- `net_income ≠ 0`, `revenue > 0`
- `0 ≤ vendor_cost_ratio ≤ 100`
- `contract_signed_date` không ở tương lai; `amendment_date ≥ contract_signed_date`
- `contract_value_total > 0`
- mã nhân viên/amendment đúng định dạng `EMP-XXXX`; `contract_id` đúng định dạng `HD-YYYY-XXXX`
- Σ vendor\_payment (5 vendor) = external\_advisory hiện tại; Σ payment\_amount (26 dòng) =
  total\_payment (kiểm tra toàn vẹn khi build data)

---

**EARLY LOGIC TEST**

| Input | Expected process | Expected output | Actual | Issue |
| :---- | :---- | :---- | :---- | :---- |
| Q4: revenue=165, NI=25, ocf=-3 | ocf/NI | -0.12, dưới benchmark ≥1 | -0.12 | — |
| Q4: revenue=165, AR=78.0 | AR/revenue×91 | ≈43 ngày, vượt 28–32 | ≈43.0 | Đã sửa: bản nháp trước dùng thang doanh thu khác gây lệch |
| advisory current=620, previous=125 | current/previous | 4.96× | 4.96× | — |
| advisory current=620, budget=150 | (current-budget)/budget | 313.3% vượt ngân sách | 313.3% | — |
| vendor Northstar=500, advisory=620 | 500/620 | 80.6% concentration | 80.6% | — |
| contract=500, total\_payment=500 | so khớp | 100% reconciled | 100% | — |
| 26 payment, threshold=20 | đếm <20 | 23/26 = 88.5% | 88.5% | Cần Development xác nhận: `=20` có tính là dưới ngưỡng không? Quy ước hiện tại: chỉ đếm `<20` |
| exception: paid=38, limit=40; paid\_after=462, total=500 | so sánh + tỷ lệ | 38≤40 ✓; 92.4% ngoài exception | 92.4% | — |
| amendment\_authorized\_by="EMP-0231" | tra Employee Directory | Victor, COO | Victor | — |

---

**OWNERSHIP**

| Hạng mục | Người phụ trách |
| :---- | :---- |
| Source added (operational + problem evidence) | Dũng |
| Source verified (đối chiếu trực tiếp trên gao.gov) | Dũng |
| Data cleaned / reconciled | Dũng |
| Structure designed (JSON/CSV, folder layout) | Phương |
| Contract / Control / Amendment / Employee data | Ngọc |
| Validation tested (Early Logic Test) | Hiền |
| Logic integration (nối input vào gating logic) | Hiền |

**Limitation:** dữ liệu là simulated, benchmark tự đặt (không phải chuẩn ngành chính thức);
Payment Ledger và Employee Directory trong `DATA/The Last Heir/` là bản dựng cụ thể hóa từ các
con số tổng đã chốt, sẵn sàng để Development đọc trực tiếp.
