# INPUT DICTIONARY

Tài liệu này tổng hợp toàn bộ input phục vụ sáu chặng điều tra của The Last Heir, chia theo bốn nhóm dữ liệu. Ba trong bốn nhóm ánh xạ tới một chặng điều tra duy nhất, riêng Nhóm 2 ánh xạ tới hai chặng liên tiếp là Transaction Investigation và Reconciliation. Toàn bộ số liệu trong tài liệu này là dữ liệu do nhóm tự tạo, và hai doanh nghiệp Aster Holdings cùng Aurora Group hoàn toàn là hư cấu.

## Nhóm 1 — Financial Overview (chặng Financial Diagnosis)

| Input name | Meaning | Type | Unit | Example | Valid range | Source/owner |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| quarter | Kỳ báo cáo | text | — | Q4 | Q1 đến Q4 | Dũng |
| revenue | Doanh thu hợp nhất Aster theo quý | number | Tỷ đồng | 165 | lớn hơn 0 | Dũng |
| net\_income | Lợi nhuận ròng sau thuế cùng kỳ | number | Tỷ đồng | 25 | khác 0 | Dũng |
| ocf | Dòng tiền từ hoạt động kinh doanh | number | Tỷ đồng | -3 | có thể âm | Dũng |
| accounts\_receivable | Phải thu khách hàng cuối kỳ | number | Tỷ đồng | 78.0 | lớn hơn hoặc bằng 0 | Dũng |
| gross\_margin | Biên lợi nhuận gộp | number | % | 32 | 0 đến 100 | Dũng |
| external\_advisory\_outflow | Dòng tiền ra cho advisory kỳ hiện tại | number | Tỷ đồng | 620 | lớn hơn 0 | Dũng |
| external\_advisory\_previous | External advisory outflow kỳ trước | number | Tỷ đồng | 125 | lớn hơn 0 | Dũng |
| external\_advisory\_budget | Ngân sách nội bộ cho advisory | number | Tỷ đồng | 150 | lớn hơn 0 | Dũng |

Bốn giá trị được tính toán chứ không nhập tay, gồm tỷ lệ OCF trên NI, DSO tính bằng AR chia revenue nhân chín mươi mốt, advisory multiple, và tỷ lệ phần trăm advisory so với ngân sách.

## Nhóm 2 — Vendor / Contract (chặng Transaction Investigation và Reconciliation)

| Input name | Meaning | Type | Unit | Example | Valid range | Source/owner |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| vendor\_name | Tên vendor nhận thanh toán advisory | text | — | Northstar Advisory | không rỗng | Dũng |
| vendor\_payment | Số tiền vendor nhận trong kỳ | number | Tỷ đồng | 500 | lớn hơn 0 | Dũng |
| vendor\_cost\_ratio | Phần trăm chi phí trả cho một vendor trên tổng advisory outflow | number | % | 80.6 | 0 đến 100 | Dũng |
| contract\_id | Mã hợp đồng | text | — | HD-2024-0847 | định dạng HD-YYYY-XXXX | Ngọc |
| contract\_service\_description | Mô tả dịch vụ ở hợp đồng gốc, Lớp 1 | text | — | tư vấn chiến lược | không rỗng | Ngọc |
| contract\_classification | Nhãn phân loại nội bộ | text | — | Cấp 2, dịch vụ vận hành | thuộc danh sách đã định nghĩa | Ngọc |
| approver\_code | Mã nhân viên phê duyệt hợp đồng | text | — | EMP-0231 | định dạng EMP-XXXX | Ngọc |
| contract\_value\_total | Tổng giá trị hợp đồng | number | Tỷ đồng | 500 | lớn hơn 0 | Dũng |
| contract\_signed\_date | Ngày ký hợp đồng | date | dd/mm/yyyy | 01/08/2026 | không ở tương lai | Dũng |
| total\_payment | Tổng đã thanh toán theo Payment Ledger | number | Tỷ đồng | 500 | lớn hơn 0 | Dũng |

## Nhóm 3 — Control & Payment Ledger (chặng Control Investigation)

| Input name | Meaning | Type | Unit | Example | Valid range | Source/owner |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| payment\_id | Mã dòng thanh toán | text | — | PMT-014 | không rỗng | Dũng |
| payment\_amount | Giá trị một khoản thanh toán | number | Tỷ đồng | 18.5 | lớn hơn 0 | Dũng |
| payment\_date | Ngày thanh toán | date | dd/mm/yyyy | 05/09/2026 | không ở tương lai | Dũng |
| approval\_threshold | Ngưỡng bắt buộc phê duyệt cấp cao hơn | number | Tỷ đồng | 20 | lớn hơn 0, là hằng số | Ngọc |
| exception\_start\_date và exception\_end\_date | Khoảng thời gian của Temporary Operational Exception | date | dd/mm/yyyy | 01/08/2026 đến 30/08/2026 | ngày bắt đầu không muộn hơn ngày kết thúc | Ngọc |
| exception\_limit | Giá trị tối đa được phép trong thời gian ngoại lệ | number | Tỷ đồng | 40 | lớn hơn 0 | Ngọc |

## Nhóm 4 — Responsibility Evidence (chặng Responsibility Investigation)

| Input name | Meaning | Type | Unit | Example | Valid range | Source/owner |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| amendment\_id | Mã amendment thay đổi payment schedule | text | — | AMD-003 | không rỗng | Ngọc |
| amendment\_date | Ngày amendment có hiệu lực | date | dd/mm/yyyy | 20/08/2026 | lớn hơn hoặc bằng contract\_signed\_date | Ngọc |
| amendment\_authorized\_by | Mã nhân viên phê duyệt amendment | text | — | EMP-0231 | định dạng EMP-XXXX | Ngọc |
| employee\_id | Mã nhân viên | text | — | EMP-0231 | định dạng EMP-XXXX, duy nhất | Ngọc |
| employee\_name | Tên nhân viên | text | — | Victor | không rỗng | Ngọc |
| employee\_role | Chức danh | text | — | COO | thuộc danh sách hợp lệ | Ngọc |
| responsibility\_scope | Phạm vi phê duyệt gắn với chức danh | text | — | Hợp đồng vận hành nhỏ hơn hoặc bằng hai mươi tỷ | không rỗng | Ngọc |

Đối với việc xử lý giá trị thiếu, nếu một trường dữ liệu bị thiếu trong quá trình dựng dữ liệu, hệ thống sẽ không thực hiện phép tính liên quan mà hiển thị thông báo dữ liệu chưa đầy đủ, thay vì chạy ra một kết quả sai lệch.

Bốn nhóm dữ liệu trên là operational data, được nạp trực tiếp vào game logic. Ngược lại, problem evidence như các trường hợp Satyam, Pareteum hay tài liệu của GAO không được nạp vào logic tính toán, và được trình bày riêng trong tài liệu Source Register.
