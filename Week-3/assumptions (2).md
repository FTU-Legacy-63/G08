# Assumptions

Ghi rõ để không ẩn trong code, tách theo layer.

## Layer 1 — Beneish M-Score

1. Dữ liệu tài chính chỉ có **2 kỳ** (kỳ 0, kỳ 1); game không mô phỏng chuỗi thời gian dài hơn.
2. Benchmark ngành (DSRI 1.0–1.2, SGAI 1.0–1.1, TATA −0.05 đến 0.05) là hằng số cố định do nhóm chọn để phù hợp với case, **không** phải benchmark ngành thật cập nhật theo thời gian.
3. Ngưỡng M-Score −1.78 dùng nguyên bản từ mô hình Beneish gốc, không điều chỉnh theo ngành của Aster Holdings.
4. Ở MVP, chỉ 3/8 biến (DSRI, SGAI, TATA) được dùng; giả định rằng 3 biến này đủ để "khoanh vùng đúng" mà không cần GMI/AQI/SGI/DEPI/LVGI — giả định này sẽ được kiểm tra khi Final hoàn thiện đủ 8 biến.

## Layer 2 — COSO + SOX 404

5. Materiality Threshold cố định bằng **5% Net Income** của kỳ 1 (760 tỷ × 5% = 38 tỷ), không mô phỏng cách kiểm toán viên thật chọn tỷ lệ Materiality (có thể là % doanh thu, % tổng tài sản, v.v.).
6. COSO Component bị vi phạm (Control Environment) là giá trị được thiết kế sẵn cho case, không phải kết quả suy luận tự động từ dữ liệu — người chơi xác định qua tình tiết câu chuyện (do Ngọc thiết kế), không qua công thức.
7. Likelihood được ước lượng gián tiếp từ tỷ lệ giao dịch dưới ngưỡng phê duyệt (23/26), quy ước rằng tỷ lệ này càng cao thì Likelihood càng nghiêng về "reasonably possible" trở lên; đây là quy ước đơn giản hóa cho mục đích học tập, không phải công thức Likelihood chính thức trong chuẩn kiểm toán.

## Layer 3 — Fraud Triangle + Present Value

8. Present Value chỉ tính khi người chơi **chọn đúng thủ phạm** ở bước trước — giả định thiết kế này nhằm buộc Layer 3 phụ thuộc kết quả điều tra thay vì tính độc lập.
9. Công thức PV dùng dạng annuity đơn giản: `PV = Magnitude × [1 − (1+r)^-n] / r`, với r = 15%/năm (giả định Ke đã điều chỉnh rủi ro, không tính lại Ke từ CAPM trong game) và n = 3 năm (giả định tần suất giao dịch tương tự lặp lại hàng năm nếu không bị phát hiện).
10. Sai số cho phép ±10% giữa đáp án người chơi và giá trị đúng (≈1.073 tỷ), nhằm khoan dung cho làm tròn khi tính tay.
11. Điểm thưởng ở Layer 3 (+10 điểm hoặc gộp vào 20 điểm trọng số Tab 6) **không bắt buộc** để hoàn thành game — giả định rằng phần lớn người chơi mục tiêu (sinh viên năm 2–4 Tài chính/Kế toán) có thể tính tay công thức annuity cơ bản nhưng không nên bị chặn tiến trình nếu chưa quen.

## Assumption chung toàn sản phẩm

12. Toàn bộ dữ liệu là JSON tĩnh, không có API bên ngoài; không có giá trị nào thay đổi theo thời gian thực trong lúc chơi.
13. Người chơi nhập số liệu chính xác theo dữ liệu đã cho (không có yêu cầu người chơi tự tra cứu số liệu công ty thật).
14. Một phiên chơi tương ứng một lượt điều tra hoàn chỉnh; không có yêu cầu lưu tiến trình giữa các phiên ở Target Scope.
