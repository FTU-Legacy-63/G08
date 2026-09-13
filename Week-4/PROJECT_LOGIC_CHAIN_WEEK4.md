# The Last Heir — Project Logic Chain (Week 4)

> Học phần: **NHA408E**
> Nhóm: **G08**
> File 1/4 của bộ tài liệu Week 4 — tương ứng mục 3 và mục 4 của Week 4 Guide (`docs/weeks/week-4.md`)
> Nội dung: hoàn thiện Project Logic Chain + chính thức hóa Input–Financial Logic–Output Mapping, tích hợp 3 layer chuyên môn (Beneish M-Score, COSO/SOX Severity, Fraud Triangle → Financial Consequence) vào engine 6-tab đã chốt.

---

## 1. Project Logic Chain

Chuỗi logic dự án được hình thành dần từ Weeks 1–3, Week 4 không xây lại từ đầu mà làm cho chuỗi đủ cụ thể để triển khai và kiểm thử:

> **Problem → Target user → User task → Difficulty → Technology support → Input → Financial logic → Output → User action**

Diễn giải cho "The Last Heir":

Người chơi (User — sinh viên đóng vai điều tra) nhận **Input** từ 4 nhóm dữ liệu (Financial Overview, Transaction, Contract/Control, Responsibility Evidence), nay được làm giàu bằng 3 layer chuyên môn:

- **Layer 1 (Beneish M-Score)** tại Tab 1 — Financial Diagnosis
- **Layer 2 (COSO + SOX Severity)** tại Tab 4 — Control Investigation
- **Layer 3 (Fraud Triangle → Financial Consequence)** tại Tab 6 — Final Board Review

Ở mỗi giai đoạn, người chơi tự tính (ô nhập tự do, một số có chấm điểm theo tolerance) rồi đưa ra lựa chọn gating phản ánh kết luận của họ. **Financial logic** so khớp lựa chọn với đáp án đúng, quyết định **Output** ở 2 tầng: tức thời (tài liệu tiếp theo có unlock hay không) và tích lũy (điểm cộng vào tổng, ghi vào Financial Trace Log).

Sau 6 tab, tổng điểm quyết định 1 trong 4 ending; điểm bonus từ Layer 3 Bước 2 phản ánh riêng mức độ người chơi lượng hóa được hậu quả tài chính của hành vi thủ phạm đã xác định đúng — đây là **User action**: người chơi xem lại kết luận, đối chiếu bằng chứng đã dùng đúng/sai.

### 1.1 Map Core Process vào Storyline

| Core Process | Tab | Layer tích hợp | Hành động chính của người chơi | Output |
|---|---|---|---|---|
| Screen + Analyse | Tab 1 — Financial Diagnosis | Layer 1 (MVP: 3 biến; Final: 8 biến) | Tính DSRI/SGAI/TATA, chọn biến lệch nhiều nhất, dùng DSRI loại trừ hypothesis | Xác định External Advisory là driver chính |
| Drill Down | Tab 2 — Transaction Investigation | — | Chọn vendor trọng tâm | Northstar là vendor chiếm 80.6% |
| Reconcile | Tab 3 — Reconciliation | — | Đối chiếu Contract vs Payment | Khớp 100%, không phải "tiền biến mất" |
| Drill Down + Analyse | Tab 4 — Control Investigation | Layer 2 (COSO + SOX Severity) | Tính Magnitude/Likelihood, xác định COSO component, tra Severity | Material Weakness |
| Connect Evidence | Tab 5 — Responsibility Investigation | — | Đối chiếu EMP-0231 với Employee Directory | EMP-0231 = Victor |
| Conclude | Tab 6 — Final Board Review | Layer 3 (Fraud Triangle → Financial Consequence) | Bước 1: chọn thủ phạm + phân loại hành vi; Bước 2: tính PV thiệt hại | Ending + bonus score |

### 1.2 Tự kiểm tra chuỗi logic (theo mục 3 Week 4 Guide)

| Câu hỏi tự kiểm tra | Trả lời |
|---|---|
| Input có thực sự liên quan đến task? | Có — 4 nhóm dữ liệu tài chính/giao dịch/kiểm soát/nhân sự phục vụ trực tiếp nhiệm vụ điều tra gian lận |
| Logic có sử dụng input? | Có — DSRI/SGAI/TATA, Magnitude/Likelihood, PV đều tính trực tiếp từ input người chơi nhập |
| Output có phản ánh logic? | Có — unlock tài liệu và điểm số phản ánh đúng/sai của cả gating lẫn phép tính, không có output "ảo" |
| User có thể hành động sau output? | Có — xem Financial Trace Log, đối chiếu danh sách tài liệu đã/chưa unlock, hiểu vì sao ra ending đó |
| Công nghệ có vai trò rõ? | Có — engine 6-tab với gating + tolerance-based scoring là core mechanic, không thể thay bằng slide tĩnh |

---

## 2. Input – Financial Logic – Output Mapping

Bảng chính thức hóa theo đúng mẫu Week 4 Guide (mục 4), dùng trực tiếp input dictionary và sample data từ Week 3, chỉ mở rộng khi logic tài chính của 3 layer mới yêu cầu:

| Input | Financial meaning | Rule / calculation / process | Output |
|---|---|---|---|
| Doanh thu, phải thu, tài sản, SG&A (giả định Week 3) | Dấu hiệu thao túng báo cáo tài chính | Beneish M-Score component: tính DSRI, SGAI, TATA, so với benchmark ngành | Biến lệch benchmark lớn nhất = SGAI → External Advisory là driver chính |
| DSRI ở mức bình thường | Căn cứ loại trừ hypothesis gian lận không phù hợp | So khớp DSRI với ngưỡng bình thường | Loại Hypothesis C (Aggressive Revenue Recognition) |
| Danh sách vendor và khoản chi External Advisory | Mức độ tập trung chi phí vào một nhà cung cấp | Tính tỷ trọng chi phí theo từng vendor | Northstar chiếm 80.6% khoản chi → vendor trọng tâm điều tra |
| Northstar Contract vs Payment Ledger | Đối chiếu cam kết hợp đồng với thực chi | Reconciliation: khớp số tiền, ngày, điều khoản | Khớp 100% — không phải "tiền biến mất", cần xem tiếp phần control |
| Northstar price actual, market price benchmark | Chênh lệch giá thực tế so với thị trường | Magnitude = \|giá thực tế − benchmark\|; Magnitude / Materiality | Magnitude = 470; Magnitude/Materiality = 12.4× |
| Số payment dưới ngưỡng phê duyệt / tổng số payment | Mức độ né tránh kiểm soát phê duyệt nội bộ | Likelihood = payments_below_threshold_count / payment_count | Likelihood = 88.5% |
| Magnitude, Likelihood, COSO component bị vi phạm | Mức độ nghiêm trọng của khiếm khuyết kiểm soát | Tra bảng Severity theo chuẩn SOX 404 | Material Weakness |
| Mã nhân viên trên payment (EMP-0231) | Truy vết trách nhiệm cá nhân trong tổ chức | Đối chiếu EMP-0231 với Employee Directory | EMP-0231 = Victor |
| Kết luận thủ phạm + phân loại hành vi | Xác lập trách nhiệm quản lý và bản chất hành vi (Fraud/Misconduct/Poor Decision) | So khớp với Final Case Logic dựa trên Fraud Triangle | Thủ phạm = Victor; Hành vi = Fraud |
| Overpayment magnitude (470), discount rate r (15%), projection years (3) | Lượng hóa hậu quả tài chính lũy kế của hành vi gian lận | PV = 470 × [1 − (1.15)⁻³] / 0.15 | PV ≈ 1,073 tỷ (thiệt hại lũy kế 3 năm) |

---

*Xem tiếp File 2/4 — `GAMEPLAY_MECHANICS_WEEK4.md`: chi tiết formula/rule/classification theo từng tab.*
