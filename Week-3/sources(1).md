# The Last Heir — Financial Investigation Game

Học phần: NHA408E  
Nhóm: G08

# WEEK 3 — SOURCE REGISTER

## 1. Mục đích

Source Register phân biệt ba nhóm:

1. **Problem Evidence** — hỗ trợ Problem Direction từ Week 1;
2. **Knowledge / Rule Sources** — cơ sở học thuật hoặc chuyên môn cho formula/framework;
3. **Operational Case Data** — simulated data dùng trực tiếp để game chạy.

Một source phải được ghi rõ information used, purpose, access/creation point, limitation và owner.

---

## 2. Problem Evidence

| Source | Information used | Purpose | Status / access | Limitation | Owner |
|---|---|---|---|---|---|
| Week 1 initial observation và checkpoint revision | Người học gặp khó khăn khi kết nối financial, transaction, control và responsibility information | Hỗ trợ Problem Direction `Information Integration` | Internal project evidence, Week 1 | Chưa phải empirical study diện rộng | Phương |
| User observation / short test với target users | Khả năng xác định signal, tìm source tiếp theo và nối evidence | Kiểm tra trực tiếp user difficulty | Bổ sung nếu nhóm đã thực hiện | Sample nhỏ; phụ thuộc cách test | Phương |

Problem Evidence không được dùng làm data input của game.

---

## 3. Knowledge / Rule Sources

| Source | Information used | Purpose | Access date | Limitation | Owner |
|---|---|---|---|---|---|
| Beneish, M. D. (1999), *The Detection of Earnings Manipulation*, Financial Analysts Journal 55(5), 24–36. DOI: https://doi.org/10.2469/faj.v55.n5.2296 | Cơ sở của Beneish screening model; DSRI, SGAI và vai trò screening | Foundation cho Layer 1 | 2026-09-14 | Game chỉ dùng selected indicators; không tính full M-Score | Hiền |
| Beneish, M. D., Lee, C. M. C., & Nichols, D. C. (2013), *Earnings Manipulation and Expected Returns*, Financial Analysts Journal 69(2), 57–82. DOI: https://doi.org/10.2469/faj.v69.n2.1 | Cash-flow-based accrual implementation dùng cho TATA trong prototype | Chuẩn hóa cách tính TATA từ income from continuing operations và CFO | 2026-09-14 | Prototype không tái tạo full research model | Hiền |
| PCAOB AS 2401 — Consideration of Fraud in a Financial Statement Audit: https://pcaobus.org/oversight/standards/auditing-standards/details/AS2401 | Management override risk; control may appear effective; need evidence-focused procedures | Foundation cho Layer 2 và Management Override framing | 2026-09-14 | Game là educational investigation, không phải full PCAOB audit simulation | Ngọc / Hiền |
| COSO Internal Control — Integrated Framework: https://www.coso.org/internal-control | Mục tiêu và cấu trúc Internal Control | Hỗ trợ giải thích control evidence | 2026-09-14 | Không chuyển toàn bộ COSO thành scoring model | Ngọc |
| ACFE, Fraud 101 / Fraud Triangle: https://www.acfe.com/fraud-resources/fraud-101-what-is-fraud | Pressure, opportunity, rationalization | Hỗ trợ giải thích fraud-risk context | 2026-09-14 | Fraud Triangle không dùng để tự động xác định responsible individual | Ngọc |

---

## 4. Operational Case Sources

| Source | Information used | Purpose | Creation point | Limitation | Owner |
|---|---|---|---|---|---|
| Simulated Aster Holdings financial data | Revenue, Receivables, SG&A, Income from continuing operations, CFO, Total assets | Layer 1 screening | Week 3 | Dữ liệu mô phỏng | Dũng |
| Simulated SG&A breakdown | Salary, Marketing, Legal, Advisory Expense, Other | Account drill-down | Week 3 | Các số được thiết kế để tạo một investigation chain | Dũng |
| Simulated Advisory Expense Ledger | Vendor, amount, agreement ID, economic purpose | Transaction tracing | Week 3 | Không phản ánh vendor thật | Dũng |
| Simulated Northstar agreement facts | Same agreement, same vendor, same economic purpose, tranche structure | Liên kết các khoản thanh toán theo bản chất kinh tế | Week 3 | Facts được tạo cho learning flow | Ngọc |
| Simulated approval policy | Approval levels theo aggregate economic transaction value | Layer 2 control check | Week 3 | Không phải luật hoặc quy định bên ngoài | Hiền |
| Simulated approval records | Victor + Lucas approval ở từng tranche | Tạo tình huống “formally approved but still requires deeper control analysis” | Week 3 | Không phải hồ sơ doanh nghiệp thật | Ngọc |
| Simulated personnel/evidence records | Role, authority, involvement, conflict evidence | Layer 3 Responsibility Attribution | Week 3 | Nhân vật và tình tiết hư cấu | Ngọc |
| Case-specific screening rules | DSRI 0.90–1.15; SGAI >1.10 review; \\|TATA\\| >0.05 review | Pedagogical routing trong Layer 1 | Week 3 | Không phải empirical cutoff chính thức của Beneish | Hiền |
| Materiality reference 1.1 triệu USD | Cross-check mức độ đáng chú ý của financial movement/transaction | Dùng xuyên suốt investigation | Week 3 | Case assumption, không phải materiality calculation chính thức | Hiền |

---

## 5. Source Quality Assessment

Bộ source được đánh giá theo các tiêu chí:

- **Origin rõ:** phân biệt nguồn học thuật/chuyên môn với dữ liệu mô phỏng;
- **Purpose rõ:** mỗi nguồn gắn với một bước cụ thể;
- **Access/creation point rõ:** external source có access date, simulated source có creation point;
- **Limitation rõ:** không trình bày case-specific rule như chuẩn Beneish hoặc chuẩn kiểm toán;
- **Traceability rõ:** mỗi source có owner.

Điểm cần giữ nhất quán:

> **Beneish chỉ hỗ trợ financial screening; COSO hỗ trợ control interpretation; Fraud Triangle hỗ trợ fraud-risk context; Management Override và Responsibility Attribution phải dựa trên evidence chain của case.**
