# SOURCE REGISTER

Nguồn dữ liệu của sản phẩm được chia thành hai nhóm có bản chất khác nhau. Nhóm A là operational data, tức dữ liệu vận hành do nhóm tự tạo, được nạp trực tiếp vào game logic để tính toán và hiển thị. Nhóm B là problem evidence, tức bằng chứng thực tế được dùng để chứng minh rằng vấn đề tài chính mà sản phẩm mô phỏng có căn cứ trong thực tiễn, nhưng không được nạp vào logic tính toán của game.

## A. Operational data (team-created)

| Source | Information used | Purpose | Access date | Limitation | Owner |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Báo cáo tài chính hợp nhất Aster | revenue, net\_income, ocf, AR, gross\_margin | Financial Diagnosis | 26/08/2026 | Số liệu giả định | Dũng |
| External Advisory Outflow | current, previous, budget | Tín hiệu drill-down ở Financial Diagnosis | 26/08/2026 | Số liệu giả định | Dũng |
| Vendor Breakdown | vendor\_name, vendor\_payment, vendor\_cost\_ratio | Transaction Investigation | 26/08/2026 | Số liệu giả định | Dũng |
| Hồ sơ hợp đồng Northstar | contract\_\* (6 field) | Reconciliation và Financial Trace | 26/08/2026 | Mô tả dịch vụ cố ý mơ hồ ở Lớp 1, thiết kế có chủ đích | Ngọc |
| Payment Ledger Northstar | payment\_id, payment\_amount, payment\_date (26 dòng) | Control Investigation | 26/08/2026 | Thiết kế để tạo mẫu hình gần ngưỡng phê duyệt | Dũng |
| Control Policy và Exception Memo | approval\_threshold, exception\_\* | Control Investigation | 26/08/2026 | Ngưỡng do nhóm tự đặt | Ngọc |
| Amendment History | amendment\_id, amendment\_date, authorized\_by | Responsibility Investigation | 26/08/2026 | Số liệu giả định | Ngọc |
| Employee Directory | employee\_id, employee\_name, employee\_role, responsibility\_scope | Cross reference EMP-0231 với Victor | 26/08/2026 | Có nhân sự nhiễu chủ đích | Ngọc |

Toàn bộ nguồn thuộc nhóm A là simulated data. Đây là dữ liệu do nhóm tự tạo nhằm phục vụ việc kiểm tra logic, không đại diện cho bất kỳ doanh nghiệp có thật nào.

## B. Problem evidence (real-world)

| Source | Information used | Purpose | Access date | Limitation | Owner |
| :---- | :---- | :---- | :---- | :---- | :---- |
| The Guardian, vụ Satyam Computer Services | Báo cáo tài chính khỏe nhưng dòng tiền yếu hơn nhiều | Chứng minh Financial Signal ban đầu có thật | 26/08/2026 | Chỉ mượn tinh thần chung, không mượn cơ chế cụ thể | Dũng |
| U.S. DOJ, vụ Pareteum | Ghi nhận doanh thu sớm dẫn đến AR tăng và DSO tăng | Chứng minh revenue-quality red flag có thật | 26/08/2026 | Chỉ mượn logic, không mượn số liệu | Dũng |
| GAO, Audit Guide về Purchase Card Programs | Trường hợp chia nhỏ giao dịch để né ngưỡng phê duyệt | Chứng minh payment structuring có thật | 26/08/2026 | Bối cảnh mua sắm công vụ Mỹ, không phải hợp đồng tư vấn Việt Nam, chỉ mượn logic threshold avoidance | Dũng |
| GAO, nguyên tắc audit methodology | Một mẫu hình đáng ngờ chỉ là tín hiệu, cần đặt trong bối cảnh trước khi kết luận | Xác nhận MVP dừng ở mức cần điều tra thêm | 26/08/2026 | Là nguyên tắc phương pháp, không phải số liệu | Dũng |
| Damodaran Online và CSIMarket | Benchmark ngành cho OCF trên NI và DSO | Xác nhận benchmark có căn cứ học thuật | 26/08/2026 | Benchmark cụ thể, cụ thể là ngưỡng lớn hơn hoặc bằng một và khoảng hai mươi tám đến ba mươi hai ngày, do nhóm tự đặt | Dũng |

Nhóm đã cân nhắc và loại bỏ bốn doanh nghiệp niêm yết là STK, VGG, TCM và TNG khỏi bộ nguồn, vì các trường hợp này đo lường bất thường từ phía khách hàng, tức customer concentration, trong khi thiết kế hiện tại của sản phẩm xoay quanh bất thường từ phía vendor và chi phí, tức vendor and cost concentration, nên chiều dòng tiền không phù hợp để tham chiếu.
