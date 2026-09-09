**SOURCE REGISTER**

**A. Operational data (team-created)**

| Source | Information used | Purpose | Access date | Limitation | Owner |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Báo cáo tài chính hợp nhất Aster | revenue, net\_income, ocf, AR, gross\_margin | Financial Diagnosis | 26/08/2026 | Số liệu giả định | Dũng |
| External Advisory Outflow | current, previous, budget | Tín hiệu drill-down ở Financial Diagnosis | 26/08/2026 | Số liệu giả định | Dũng |
| Vendor Breakdown | vendor\_name, vendor\_payment, vendor\_cost\_ratio | Transaction Investigation | 26/08/2026 | Số liệu giả định | Dũng |
| Hồ sơ hợp đồng Northstar | contract\_\* (6 field) | Reconciliation + Financial Trace | 26/08/2026 | Mô tả dịch vụ cố ý mơ hồ ở Lớp 1 (chủ đích) | Ngọc |
| Payment Ledger Northstar | payment\_id, payment\_amount, payment\_date (26 dòng) | Control Investigation | 26/08/2026 | Thiết kế để tạo pattern gần ngưỡng duyệt | Dũng |
| Control Policy + Exception Memo | approval\_threshold, exception\_\* | Control Investigation | 26/08/2026 | Ngưỡng do team tự đặt | Ngọc |
| Amendment History | amendment\_id, amendment\_date, authorized\_by | Responsibility Investigation | 26/08/2026 | Số liệu giả định | Ngọc |
| Employee Directory | employee\_id, employee\_name, employee\_role, responsibility\_scope | Cross-reference EMP-0231 = Victor | 26/08/2026 | Có nhân sự nhiễu chủ đích | Ngọc |

**B. Problem evidence (real-world)**

| Source | Information used | Purpose | Access date | Limitation | Owner |
| :---- | :---- | :---- | :---- | :---- | :---- |
| The Guardian — vụ Satyam Computer Services | BCTC khỏe nhưng cash yếu hơn nhiều | Chứng minh Financial Signal ban đầu có thật | 26/08/2026 | Chỉ mượn tinh thần chung, không mượn cơ chế cụ thể | Dũng |
| U.S. DOJ — Pareteum | Ghi doanh thu sớm → AR tăng → DSO tăng | Chứng minh revenue-quality red flag có thật | 26/08/2026 | Chỉ mượn logic, không mượn số liệu | Dũng |
| GAO — Audit Guide: Purchase Card Programs | Case chia nhỏ giao dịch để né ngưỡng duyệt | Chứng minh payment structuring có thật | 26/08/2026 | Bối cảnh mua sắm công vụ Mỹ, không phải hợp đồng tư vấn VN — chỉ mượn logic threshold avoidance | Dũng |
| GAO — nguyên tắc audit methodology | Pattern đáng ngờ chỉ là signal, cần context | Xác nhận MVP dừng ở "cần điều tra thêm" | 26/08/2026 | Là nguyên tắc phương pháp, không phải số liệu | Dũng |
| Damodaran Online / CSIMarket | Benchmark ngành OCF/NI, DSO | Xác nhận benchmark có căn cứ học thuật | 26/08/2026 | Benchmark cụ thể (≥1, 28–32 ngày) do team tự đặt | Dũng |

**Đã loại bỏ:** STK, VGG, TCM, TNG — đo doanh thu từ khách hàng (customer concentration), sai
chiều dòng tiền so với thiết kế hiện tại (vendor/cost concentration).
