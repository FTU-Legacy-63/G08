# WEEK 3 — SOURCE REGISTER

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 3

## 1. Purpose and Source Policy

Tài liệu ghi nguồn được dùng, thông tin khai thác, mục đích, giới hạn và người phụ trách. Dữ liệu vận hành mô phỏng của Aster Foods được phân biệt với nguồn kiến thức chuyên môn và bằng chứng về khó khăn của người học.

Nguồn triển khai trực tiếp là `THE_LAST_HEIR_FULL_GAME_FINAL(3).html`. Các bản JSON trong [thư mục DATA](DATA/case_data.json) giúp đối chiếu nội dung; không phải nguồn độc lập xác nhận tính đúng của tình huống.

## 2. Source Register

### 2.1 Knowledge and Technical Sources

Các nguồn công khai được kiểm tra trong ngày 21/10/2026. Đây là ngày rà soát nguồn, không phải ngày truy cập ban đầu của nhóm. Tên tài liệu và định danh nguồn được giữ nguyên để truy xuất.

| Mã | Nguồn | Thông tin sử dụng | Giới hạn | Phụ trách |
|---|---|---|---|---|
| K01 | OpenStax — [phân tích báo cáo tài chính](https://openstax.org/books/principles-financial-accounting/pages/a-financial-statement-analysis) | Phân tích biến động, cơ cấu và tỷ số | Kỹ thuật chung; không xác minh số liệu Aster | Dũng |
| K02 | OpenStax — [đánh giá mục tiêu bằng ngân sách](https://openstax.org/books/principles-managerial-accounting/pages/7-5-explain-how-budgets-are-used-to-evaluate-goals) | Đối chiếu thực tế và kế hoạch, giới hạn chênh lệch | Không coi vượt ngân sách là bằng chứng sai phạm | Dũng |
| K03 | IFRS Foundation — [IAS 7](https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/) | Ba nhóm dòng tiền | Sử dụng phần giới thiệu chính thức; không xác nhận tuân thủ đầy đủ chuẩn mực | Dũng |
| K04 | PCAOB — [AS 2401](https://pcaobus.org/oversight/standards/auditing-standards/details/AS2401), đoạn .05, .08, .57 | Rủi ro nhà quản lý vượt kiểm soát và giới hạn kết luận gian lận | Không quy định ma trận FIN-* hoặc thang điểm trò chơi | Hiền, Ngọc |
| K05 | COSO (2013) — [bản tóm tắt khung kiểm soát nội bộ](https://www.coso.org/_files/ugd/3059fc_1df7d5dd38074006bce8fdf621a942cf.pdf) | Hoạt động kiểm soát, giám sát và giới hạn của kiểm soát | Không thực hiện đánh giá toàn bộ khung | Ngọc |
| K06 | ACFE — [giới thiệu gian lận và tam giác gian lận](https://www.acfe.com/fraud-resources/fraud-101-what-is-fraud) | Bối cảnh rủi ro | Không dùng để tự động chọn người chịu trách nhiệm | Ngọc |
| T01 | MDN — [`DecompressionStream`](https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream) | Giải nén chương trong trình duyệt | Phải kiểm tra môi trường phân phối thực tế | Khuê |
| T02 | MDN — [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) | Lưu dữ liệu theo nguồn trang và giới hạn tệp cục bộ | Không bảo đảm mọi trình duyệt luôn lưu giống nhau | Khuê |

Các giáo trình môn học và VAS 24 được tài liệu trước nhắc chung nhưng chưa có phiên bản, trang hoặc bản gốc cụ thể. Nếu dùng khi nộp, nhóm cần dẫn đúng tài liệu đã sử dụng; không tự tạo chi tiết thư mục.

### 2.2 Operational Source Register

| Nhóm nguồn giả lập | Thông tin và định danh | Mục đích | Giới hạn |
|---|---|---|---|
| Báo cáo và bối cảnh | `pnl`, `common`, `bs`, `management`, `markets` | Phân tích tổng hợp và kiểm tra giải thích của ban điều hành | Lời giải thích quản lý không thay bằng chứng tài chính |
| Doanh thu và phải thu | `salesvol`, `pricemix`, `arnote`, `creditq` | Cầu nối tăng trưởng và chất lượng thu tiền | Không xác minh riêng mọi giao dịch |
| Kế hoạch và chi phí | `opplan`, `grossbridge`, `grossdocs`, `mkt`, `mktdocs`, `rnd`, `rnddocs`, `restructure`, `restructureExtra` | Phân biệt kế hoạch, ghi nhận và nguyên nhân biến động | Tách cơ sở so sánh hai năm với kế hoạch |
| Dòng tiền | `cf`, `investpack`, `financepack` | Đối chiếu dòng tiền và nguồn | Không tự đánh giá hiệu quả đầu tư |
| Năm tài khoản | 20 chứng từ Chương II, ngân sách, sổ và đối chiếu | Phân loại bốn vai trò và khoanh vùng 2,6 | Dự báo nháp không thay phê duyệt |
| Giao dịch | `TX`, `CONTRACTS`, `WORK` | Ranh giới, mục đích và mức đầy đủ | Trần hợp đồng khác tổng phát sinh |
| Kiểm soát | FIN-AUTH-05, FIN-PROC-11, FIN-ALT-02, FIN-DEL-18, FIN-RVW-07 | Tiêu chuẩn giả lập và kiểm tra thực tế | Không trình bày như chính sách chung bên ngoài |
| Hệ thống và ngoại lệ | PR-204, INC-4472, EX-117, EX-204, EX-331 | Phân luồng, sự cố, phê duyệt và nhật ký | Hàng đợi chung không định danh đủ con người |
| Giám sát | Báo cáo mười dòng, IC-25-104 | Nhận diện cụm và hành động sau giao dịch | Không chứng minh toàn bộ giám sát hiệu quả |
| Lời khai và hồ sơ bổ sung | Năm lời khai, thông báo 11:09, nhật ký mở thư, biểu mẫu 11:23, lịch sử xử lý | Kiểm tra hiểu biết và hành động | Mỗi nguồn có giới hạn riêng |
| Northstar | Hồ sơ sở hữu, quan hệ gia đình và khai báo | Xung đột lợi ích | Không thay bằng chứng hành vi hoặc kết luận gian lận |
| Trò chơi | Điểm kiểm tra, điểm số, thời gian và kết thúc | Đánh giá quá trình học | Thiết kế sư phạm, chưa phải thang đo chuẩn hóa |

### 2.3 Problem and Media Evidence

README của nhóm là nguồn ghi giả định vấn đề, lựa chọn và phản hồi được nhóm lưu lại. Kết quả khảo sát, biên bản chơi thử, lịch sử GitHub và danh mục tài sản hình ảnh, âm thanh chưa có hồ sơ gốc đầy đủ trong bộ đính kèm. Những bằng chứng này cần ghi nhận từ hoạt động thực tế, không suy ra từ việc trò chơi có thể chạy.

## 3. Traceability to Delivered Files

| Nguồn | Tệp sử dụng | Cách truy vết |
|---|---|---|
| Báo cáo và kế hoạch Chương I | `DATA/case_data.json`, `DATA/evidence.json` | Chỉ tiêu chuẩn hóa đối chiếu mã tài liệu trong từ điển |
| `ACCOUNTS`, `DOCS`, `ANSWERS` Chương II | Ba tệp dữ liệu và đối chiếu nội bộ | Giữ mã tài khoản và chứng từ; tách nội dung khỏi bảng chấp nhận |
| `TX`, `CONTRACTS`, `WORK` Chương III | `DATA/case_data.json` | Giữ mã bút toán, hợp đồng, chương trình và sản phẩm bàn giao |
| `DOCS`, `MONROWS` Chương IV | `DATA/evidence.json` | Giữ 24 mã tài liệu và đủ mười dòng giám sát |
| `E`, `CLAIMS`, `RESP` Chương V | `DATA/evidence.json`, `DATA/answer_key.json` | Tách lời khai và hồ sơ đọc được khỏi đánh giá, tập bằng chứng và đáp án |
| Mã điều phối và chương | `DATA/rules.json`, tài liệu liên kết HTML | Ghi mã điểm kiểm tra, công thức, sự kiện và điều kiện |
| Hồ sơ nhóm và hướng dẫn tuần | Tệp tổng quan, giả định và cấu trúc giải pháp | Dùng cho nhiệm vụ, phân công và yêu cầu bàn giao |

Phạm Triệu Tiến Dũng kiểm tra nguồn số liệu; Nguyễn Minh Hiền kiểm tra quy tắc; Tôn Khánh Ngọc kiểm tra hồ sơ và nguồn chuyên môn; Đinh Thị Minh Khuê đối chiếu mã; Phạm Quỳnh Phương kiểm tra tính nhất quán giữa các tuần. Nguồn tài sản trình bày và bằng chứng người học còn thiếu phải được ghi nhận từ tài liệu gốc khi bổ sung.
