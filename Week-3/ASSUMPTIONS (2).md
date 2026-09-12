# ASSUMPTIONS

Toàn bộ số liệu tài chính của Aster Holdings và Aurora Group là dữ liệu do nhóm tự tạo, không thuộc về bất kỳ doanh nghiệp có thật nào, và điều này được ghi rõ ở màn hình mở đầu của sản phẩm.

Benchmark OCF trên NI lớn hơn hoặc bằng một, cùng benchmark DSO trong khoảng hai mươi tám đến ba mươi hai ngày, là những ngưỡng do nhóm tự đặt dựa trên nguyên lý chung của lĩnh vực tài chính, không trích dẫn trực tiếp từ một nguồn cụ thể duy nhất, và được ghi chú là benchmark tham khảo trên giao diện người dùng.

Mẫu hình Payment Structuring, cụ thể là hai mươi sáu khoản thanh toán trong đó hai mươi ba trên hai mươi sáu khoản nhỏ hơn hai mươi tỷ đồng, mượn logic split-purchase từ tài liệu của GAO nhưng khác biệt về bối cảnh, vì GAO mô tả hoạt động mua sắm công vụ tại Mỹ trong khi sản phẩm mô tả một hợp đồng tư vấn doanh nghiệp tại Việt Nam. Nhóm chỉ mượn nguyên lý threshold avoidance, không mượn bối cảnh hay số liệu cụ thể.

Hợp đồng Northstar được thiết kế với mô tả dịch vụ cố ý mơ hồ ở Lớp 1. Đây là một thiết kế có chủ đích và không được công khai cho người chơi ngay từ đầu.

MVP chỉ đưa ra kết luận về bằng chứng mạnh nhất liên quan đến trách nhiệm quản lý chính, chứ không tuyên bố trực tiếp rằng một cá nhân cụ thể có tội, theo đúng nguyên tắc của GAO rằng một tín hiệu bất thường cần được đặt trong bối cảnh đầy đủ trước khi quy kết trách nhiệm. Nguyên tắc này vẫn được giữ nguyên dù sản phẩm đã bổ sung điểm số và kết luận theo bốn mức, vì bốn mức kết luận phản ánh mức độ vững chắc của bằng chứng và độ chính xác của lựa chọn, chứ không phải một phán quyết mang tính buộc tội.

Employee Directory chứa những nhân sự không liên quan trực tiếp đến vụ việc, đóng vai trò nhiễu, bên cạnh bốn nhân vật chính, nhằm khiến việc tra cứu mã nhân viên EMP-0231 không trở nên quá đơn giản.

MVP chỉ mở khóa hai đến ba hồ sơ nghi phạm ở chặng Control Investigation, không mở khóa toàn bộ bốn hồ sơ, nhằm khớp với phạm vi Target Scope đã được chốt ở Week 2.

Điểm số của năm chặng điều tra sử dụng trọng số bằng nhau, nghĩa là mỗi chặng đóng góp cùng một mức điểm nếu người chơi thực hiện đúng, với tổng điểm tối đa là một trăm. Việc áp dụng trọng số khác nhau theo chất lượng bằng chứng là một phần mở rộng thuộc Target Product, chưa được áp dụng ở giai đoạn MVP.

Trong Week 3, nhóm đã sửa một vấn đề tồn tại từ bản nháp trước đó, khi hai thang doanh thu không khớp nhau, cụ thể là một thang từ một trăm hai mươi đến một trăm sáu mươi lăm dùng cho OCF trên NI và một thang riêng từ ba mươi đến bốn mươi dùng cho ví dụ về DSO. Nhóm đã thống nhất lại thành một thang doanh thu duy nhất, trong khoảng một trăm hai mươi đến một trăm sáu mươi lăm, và tính lại accounts receivable để DSO vẫn giữ đúng xu hướng đã chốt, tăng từ hai mươi bốn lên bốn mươi ba ngày.

## Input Validation

Mọi trường dữ liệu được liệt kê trong Input Dictionary đều là bắt buộc, và nếu thiếu giá trị, hệ thống sẽ hiển thị thông báo dữ liệu chưa đầy đủ thay vì thực hiện phép tính.

Các quy tắc kiểm tra cụ thể bao gồm điều kiện net income khác 0 và revenue lớn hơn 0, điều kiện vendor cost ratio nằm trong khoảng từ 0 đến 100, điều kiện contract signed date không ở tương lai và amendment date lớn hơn hoặc bằng contract signed date, điều kiện contract value total lớn hơn 0, điều kiện định dạng mã nhân viên và mã amendment theo mẫu EMP-XXXX cùng định dạng contract id theo mẫu HD-YYYY-XXXX, và cuối cùng là điều kiện toàn vẹn dữ liệu, theo đó tổng vendor payment của năm vendor phải bằng external advisory hiện tại, đồng thời tổng payment amount của hai mươi sáu dòng phải bằng total payment.

## Early Logic Test

| Input | Expected process | Expected output | Actual | Issue |
| :---- | :---- | :---- | :---- | :---- |
| Q4, revenue bằng 165, NI bằng 25, ocf bằng -3 | ocf chia NI | -0,12, dưới benchmark lớn hơn hoặc bằng 1 | -0,12 | Không có |
| Q4, revenue bằng 165, AR bằng 78,0 | AR chia revenue nhân 91 | Khoảng 43 ngày, vượt khoảng 28 đến 32 | Khoảng 43,0 | Đã sửa, vì bản nháp trước dùng thang doanh thu khác gây lệch |
| Advisory hiện tại 620, kỳ trước 125 | Hiện tại chia kỳ trước | 4,96 lần | 4,96 lần | Không có |
| Advisory hiện tại 620, ngân sách 150 | Hiệu số chia ngân sách | Vượt ngân sách 313,3% | 313,3% | Không có |
| Vendor Northstar 500, advisory 620 | 500 chia 620 | Mức độ tập trung 80,6% | 80,6% | Không có |
| Contract 500, total payment 500 | So khớp | Đối chiếu khớp 100% | 100% | Không có |
| 26 khoản thanh toán, threshold 20 | Đếm số khoản nhỏ hơn 20 | 23 trên 26, tương đương 88,5% | 88,5% | Cần Development xác nhận liệu khoản bằng đúng 20 có được tính là dưới ngưỡng hay không; quy ước hiện tại chỉ đếm các khoản nhỏ hơn 20 |
| Exception, đã trả 38, giới hạn 40, trả sau khi hết ngoại lệ 462, tổng 500 | So sánh và tính tỷ lệ | 38 nhỏ hơn hoặc bằng 40 hợp lệ, 92,4% nằm ngoài ngoại lệ | 92,4% | Không có |
| amendment authorized by bằng EMP-0231 | Tra Employee Directory | Victor, chức danh COO | Victor | Không có |

## Ownership

| Hạng mục | Người phụ trách |
| :---- | :---- |
| Source added, cả operational lẫn problem evidence | Dũng |
| Source verified, đối chiếu trực tiếp trên gao.gov | Dũng |
| Data cleaned và reconciled | Dũng |
| Structure designed, bao gồm JSON, CSV và folder layout | Phương |
| Dữ liệu hợp đồng, kiểm soát, amendment và nhân sự | Ngọc |
| Validation tested, thông qua Early Logic Test | Hiền |
| Logic integration, tức nối input vào gating logic | Hiền |

Về giới hạn chung, dữ liệu trong sản phẩm là dữ liệu mô phỏng, các benchmark là do nhóm tự đặt chứ không phải chuẩn ngành chính thức, và Payment Ledger cùng Employee Directory trong thư mục dữ liệu của dự án là bản dựng cụ thể hóa từ các con số tổng đã chốt, sẵn sàng để Development đọc trực tiếp.
