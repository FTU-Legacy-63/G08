**INPUT DICTIONARY**

Toàn bộ input phục vụ 6 tab điều tra của *The Last Heir*, chia theo 4 nhóm dữ liệu tương ứng
với 4 màn hình chính. Toàn bộ số liệu là dữ liệu team tự tạo (team-created) — Aster Holdings /
Aurora Group là hư cấu.

**Nhóm 1 — Financial Overview** (tab Financial Diagnosis)

| Input name | Meaning | Type | Unit | Example | Valid range | Source/owner |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| quarter | Kỳ báo cáo | text | — | Q4 | Q1–Q4 | Dũng |
| revenue | Doanh thu hợp nhất Aster theo quý | number | Tỷ đồng | 165 | > 0 | Dũng |
| net\_income | Lợi nhuận ròng sau thuế, cùng kỳ | number | Tỷ đồng | 25 | ≠ 0 | Dũng |
| ocf | Dòng tiền từ hoạt động kinh doanh | number | Tỷ đồng | -3 | có thể âm | Dũng |
| accounts\_receivable | Phải thu khách hàng cuối kỳ | number | Tỷ đồng | 78.0 | ≥ 0 | Dũng |
| gross\_margin | Biên lợi nhuận gộp | number | % | 32 | 0–100 | Dũng |
| external\_advisory\_outflow | Dòng tiền ra cho advisory kỳ hiện tại | number | Tỷ đồng | 620 | > 0 | Dũng |
| external\_advisory\_previous | External advisory outflow kỳ trước | number | Tỷ đồng | 125 | > 0 | Dũng |
| external\_advisory\_budget | Ngân sách nội bộ cho advisory | number | Tỷ đồng | 150 | > 0 | Dũng |

Giá trị derive (tính, không nhập tay): `ocf_to_ni`, `dso` (= AR/revenue×91), `advisory_multiple`,
`advisory_vs_budget_pct`.

**Nhóm 2 — Vendor / Contract** (tab Transaction Investigation + Reconciliation)

| Input name | Meaning | Type | Unit | Example | Valid range | Source/owner |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| vendor\_name | Tên vendor nhận thanh toán advisory | text | — | Northstar Advisory | không rỗng | Dũng |
| vendor\_payment | Số tiền vendor nhận trong kỳ | number | Tỷ đồng | 500 | > 0 | Dũng |
| vendor\_cost\_ratio | % chi phí trả cho 1 vendor / tổng advisory outflow | number | % | 80.6 | 0–100 | Dũng |
| contract\_id | Mã hợp đồng | text | — | HD-2024-0847 | `HD-YYYY-XXXX` | Ngọc |
| contract\_service\_description | Mô tả dịch vụ ở hợp đồng gốc (Lớp 1) | text | — | tư vấn chiến lược | không rỗng | Ngọc |
| contract\_classification | Nhãn phân loại nội bộ | text | — | Cấp 2 — dịch vụ vận hành | thuộc danh sách đã định nghĩa | Ngọc |
| approver\_code | Mã nhân viên phê duyệt hợp đồng | text | — | EMP-0231 | `EMP-XXXX` | Ngọc |
| contract\_value\_total | Tổng giá trị hợp đồng | number | Tỷ đồng | 500 | > 0 | Dũng |
| contract\_signed\_date | Ngày ký hợp đồng | date | dd/mm/yyyy | 01/08/2026 | không ở tương lai | Dũng |
| total\_payment | Tổng đã thanh toán theo Payment Ledger | number | Tỷ đồng | 500 | > 0 | Dũng |

**Nhóm 3 — Control & Payment Ledger** (tab Control Investigation)

| Input name | Meaning | Type | Unit | Example | Valid range | Source/owner |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| payment\_id | Mã dòng thanh toán | text | — | PMT-014 | không rỗng | Dũng |
| payment\_amount | Giá trị 1 khoản thanh toán | number | Tỷ đồng | 18.5 | > 0 | Dũng |
| payment\_date | Ngày thanh toán | date | dd/mm/yyyy | 05/09/2026 | không ở tương lai | Dũng |
| approval\_threshold | Ngưỡng bắt buộc phê duyệt cấp cao hơn | number | Tỷ đồng | 20 | > 0 (hằng số) | Ngọc |
| exception\_start\_date / exception\_end\_date | Khoảng Temporary Operational Exception | date | dd/mm/yyyy | 01/08/2026–30/08/2026 | start ≤ end | Ngọc |
| exception\_limit | Giá trị tối đa được phép trong exception | number | Tỷ đồng | 40 | > 0 | Ngọc |

**Nhóm 4 — Responsibility Evidence** (tab Responsibility Investigation)

| Input name | Meaning | Type | Unit | Example | Valid range | Source/owner |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| amendment\_id | Mã amendment thay đổi payment schedule | text | — | AMD-003 | không rỗng | Ngọc |
| amendment\_date | Ngày amendment có hiệu lực | date | dd/mm/yyyy | 20/08/2026 | ≥ contract\_signed\_date | Ngọc |
| amendment\_authorized\_by | Mã nhân viên phê duyệt amendment | text | — | EMP-0231 | `EMP-XXXX` | Ngọc |
| employee\_id | Mã nhân viên | text | — | EMP-0231 | `EMP-XXXX`, duy nhất | Ngọc |
| employee\_name | Tên nhân viên | text | — | Victor | không rỗng | Ngọc |
| employee\_role | Chức danh | text | — | COO | danh sách hợp lệ | Ngọc |
| responsibility\_scope | Phạm vi phê duyệt gắn với chức danh | text | — | Hợp đồng vận hành ≤ 20 tỷ | không rỗng | Ngọc |

**Missing value handling:** nếu field bị thiếu khi build data → không chạy phép tính, hiển thị
"dữ liệu chưa đầy đủ" thay vì chạy sai.

**Operational data vs Problem evidence:** 4 nhóm trên là operational data (nạp trực tiếp vào
game logic). Problem evidence (Satyam, Pareteum, GAO...) không nạp vào logic — xem `SOURCES.md`.
