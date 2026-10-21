# WEEK 3 — INPUT DICTIONARY

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 3

## 1. Purpose and Coverage

Tài liệu thống nhất ý nghĩa, kiểu, đơn vị, định dạng, ví dụ và điều kiện kiểm tra của đầu vào. Các tên biến thực thi được phân biệt với tên chuẩn hóa trong dữ liệu đính kèm.

Danh mục đầy đủ nằm trong [OVERVIEW_FINAL.md](OVERVIEW_FINAL.md). Nguồn được ghi tại [SOURCES_FINAL.md](SOURCES_FINAL.md); luồng và kết quả kiểm tra ở [DATA_FLOW_FINAL.md](DATA_FLOW_FINAL.md).

## 2. Input Dictionary

### 2.1 Units, Formats and Ownership

| Quy ước | Cách áp dụng |
|---|---|
| Tiền tệ | Dùng triệu USD trong phân tích; 0.9 tương ứng 900.000 USD ở bảng hiển thị Chương III |
| Tỷ lệ | Giữ riêng số thập phân, phần trăm và điểm phần trăm |
| Làm tròn | Tính trên số gốc; làm tròn khi trình bày hoặc theo hàm chấm điểm |
| Ngày | Bút toán `TX` dùng ngày/tháng trong niên độ 2025; bản JSON bàn giao chuẩn hóa thành `YYYY-MM-DD` |
| Ngày trên hồ sơ | Giữ đúng trường và độ chính xác của từng tài liệu, không tự thay ngày giữa các nguồn |
| Trường trống | `-` trên chứng từ là nội dung chưa điền; không tự đổi thành 0 |
| Số học | So tổng bằng sai số phù hợp; hàm ranh giới trò chơi dùng ngưỡng sai số 0.001 triệu USD |

Phạm Triệu Tiến Dũng phụ trách số liệu tài chính và giao dịch; Tôn Khánh Ngọc phụ trách chứng từ; Nguyễn Minh Hiền phụ trách quy tắc và chấm điểm; Đinh Thị Minh Khuê phụ trách liên kết kỹ thuật; Phạm Quỳnh Phương phụ trách tính thống nhất.

### 2.2 Financial Inputs

Các trường bên dưới là ý nghĩa dữ liệu tài chính. Trong bản chạy, phần lớn số liệu nằm trong HTML của tài liệu `docs`, không phải các trường số độc lập mang cùng tên. JSON bàn giao dùng tên chuẩn hóa để thuận tiện đối chiếu. Các chỉ tiêu tiền tệ, số ngày và tỷ lệ đều có kiểu số; tỷ lệ chất lượng phải thu lưu dưới dạng số thập phân, chẳng hạn 0.027 tương ứng 2,7%. Giá trị phải hữu hạn; không dùng chuỗi định dạng hoặc ô trống làm số.

| Trường chuẩn hóa | Ý nghĩa và đơn vị | Ví dụ 2025 | Nguồn trong Chương I | Kiểm tra và xử lý thiếu |
|---|---|---:|---|---|
| `net_revenue` | Doanh thu thuần, triệu USD | 150.0 | `pnl` | Phải dương khi làm mẫu số; thiếu thì không tính tỷ lệ |
| `cost_of_goods_sold` | Giá vốn, triệu USD | 85.0 | `pnl`, `grossbridge` | Không âm; khớp chi tiết |
| `gross_profit` | Lợi nhuận gộp, triệu USD | 65.0 | `pnl` | Bằng doanh thu trừ giá vốn |
| `distribution_expenses` | Chi phí phân phối, triệu USD | 12.0 | `pnl` | Giữ đúng dấu khi đối chiếu lợi nhuận |
| `marketing_and_administrative_expenses` | Tiếp thị và quản lý, triệu USD | 21.0 | `pnl`, `mkt`, `mktdocs` | Khớp số ghi nhận; không đồng nhất với số được duyệt |
| `research_and_development_expenses` | Nghiên cứu và phát triển, triệu USD | 6.1 | `rnd`, `rnddocs` | Tách tăng hai năm với vượt kế hoạch |
| `other_operating_income` | Thu nhập hoạt động khác, triệu USD | 1.5 | `pnl` | Cộng khi đối chiếu lợi nhuận |
| `other_operating_expenses` | Chi phí hoạt động khác, triệu USD | 6.9 | `restructure`, `restructureExtra` | Trừ khi đối chiếu lợi nhuận |
| `operating_profit` | Lợi nhuận hoạt động, triệu USD | 20.5 | `pnl` | Có thể âm; phải khớp thành phần |
| `profit_after_tax` | Lợi nhuận sau thuế, triệu USD | 12.8 | `pnl` | Không suy ra toàn bộ thuế, lãi vay khi chưa có chi tiết |
| `volume_effect`, `price_mix_effect` | Ảnh hưởng doanh thu, triệu USD | 20.4; 9.6 | `salesvol`, `pricemix` | Tổng bằng tăng doanh thu 30,0 |
| `trade_receivables` | Phải thu cuối kỳ, triệu USD | 21.0 | `bs`, `arnote` | Khớp tổng nhóm tuổi nợ |
| `dso_days` | Số ngày thu tiền ước tính | 51.1 | `creditq` | Mô hình giản lược: phải thu cuối kỳ / doanh thu × 365 |
| Các tỷ lệ chất lượng phải thu | Dự phòng, tuổi nợ, chi phí nợ xấu | 2,7%; 3,2%; 0,5% | `creditq`, `arnote` | So cùng cơ sở; không xem một tỷ lệ là kết luận độc lập |
| Các giá trị kế hoạch | Cơ sở được phê duyệt | 18.0 cho tiếp thị và quản lý | `opplan` | Chỉ là kế hoạch; chưa chứng minh phát sinh |
| Các dòng tiền | Kinh doanh, đầu tư, tài trợ, triệu USD có dấu | 11.0; -11.0; -2.0 | `cf`, `investpack`, `financepack` | Khớp chi tiết và tiền cuối kỳ |

### 2.3 Cost Accounts and Document Roles

| Trường thực thi | Ý nghĩa | Kiểu | Kiểm tra |
|---|---|---|---|
| `ACCOUNTS[].id` | Mã một trong năm tài khoản | Chuỗi | Duy nhất và thuộc tập được thiết kế |
| `ACCOUNTS[].budget` | Ngân sách tài khoản | Số, triệu USD | Tổng 18,0 |
| `ACCOUNTS[].actual` | Thực tế ghi nhận | Số, triệu USD | Tổng 21,0 |
| `ACCOUNTS[].variance` | Thực tế trừ ngân sách | Số có dấu | Tổng 3,0; khớp từng tài khoản |
| `DOCS[].id` | Mã chứng từ | Chuỗi | Duy nhất; có trong tập tài liệu của tài khoản |
| `DOCS[].src`, `date`, `owner` | Nguồn, ngày và đầu mối | Chuỗi | Giữ nguyên nội dung nguồn |
| `DOCS[].title`, `preview`, `detail` | Nội dung trình bày | Chuỗi | Phân biệt chứng từ với nhận định sau đối chiếu |
| `DOCS[].roles` | Siêu dữ liệu vai trò gắn với chứng từ | Đối tượng | Không thay bảng chấp nhận `ANSWERS` mà hàm chấm đọc |
| `ACCOUNT_DOCS`, `SAMPLE_DOCS` | Tài liệu được bố trí theo tài khoản và ví dụ | Ánh xạ và mảng | Mã tham chiếu phải tồn tại |
| `ANSWERS[account][role]` | Tập mã tài liệu được chấp nhận trong từng ô vai trò | Mảng chuỗi | Là cơ sở của hàm chấm; mảng rỗng nghĩa là ô không yêu cầu tài liệu |

Bốn mã vai trò là `baseline`, `actual`, `variance`, `context`, tương ứng cơ sở được phê duyệt, số ghi nhận, giải trình định lượng và bối cảnh. Chứng từ hệ thống 4,0 được vốn hóa không có vai trò trong nhóm chi phí tư vấn.

### 2.4 Transaction and Contract Inputs

| Trường thực thi | Ý nghĩa | Ví dụ | Kiểm tra |
|---|---|---|---|
| `TX[].id`, `ref` | Mã nội bộ và tham chiếu bút toán | `N2`, `NS-073` | Duy nhất |
| `TX[].date` | Ngày bút toán | `19/07` | Ngày hợp lệ trong 2025 |
| `TX[].vendor` | Nhà cung cấp | Northstar Advisory | Không dùng một mình để gộp giao dịch |
| `TX[].amt` | Giá trị, triệu USD | 0.90 | Dương; tổng sổ 4,2 |
| `TX[].desc`, `unit` | Nội dung và bộ phận yêu cầu | Nội dung hội thảo quản trị | Đọc cùng hợp đồng và bàn giao |
| `TX[].contract`, `program` | Hợp đồng và mục đích | `NST-01`, `ROP-25` | Khớp hồ sơ; kiểm tra cả nội dung kinh tế |
| `CONTRACTS[code].scope`, `objective` | Phạm vi và mục tiêu kinh tế | Thiết kế mô hình vận hành vùng | Không suy ra từ tên nhà cung cấp |
| `CONTRACTS[code].vendor`, `owner`, `program` | Chủ thể và mã chương trình | Northstar, bộ phận phát triển vùng | Có đủ bảy hợp đồng tham chiếu |
| `CONTRACTS[code].ceiling` | Trần cam kết, triệu USD | 2.80 | Khác tổng đã phát sinh và ngưỡng thẩm quyền |
| `CONTRACTS[code].pay` | Điều kiện thanh toán | Theo sản phẩm được nghiệm thu | Giữ theo từng hợp đồng |
| `WORK[ref].deliverable` | Mã sản phẩm bàn giao | `ROP-25-D2` | Có cho cả chín bút toán |
| `WORK[ref].done`, `accepted` | Ngày hoàn thành, nghiệm thu | `15/07`, `18/07` | Không tự thay bằng ngày của chứng từ khác |

Bản JSON bàn giao đổi `amt` thành `amount`, `desc` thành `description` và `pay` thành `payment`; ánh xạ được ghi rõ ở mục 3. Không mô tả các tên đã đổi như tên biến đang chạy trong HTML.

### 2.5 Control, Testimony and Player Inputs

| Nhóm | Dữ liệu hoặc trường | Ý nghĩa và kiểm tra |
|---|---|---|
| Chính sách | `DOCS.auth`, `proc`, `alt`, `roles` ở Chương IV | Thẩm quyền, thời điểm, ngoại lệ và vai trò; dữ liệu riêng của chương |
| Sự kiện | `e0805`, `e1907`, `e1410`, `route`, `outage` | Hồ sơ từng ngày, giá trị và thời điểm phân luồng |
| Ngoại lệ | `n51*`, `n73*`, `n101*` | Mỗi khoản có giao dịch, ngoại lệ, tài chính và nhật ký |
| Giám sát | `MONROWS`, `monrep`, `monwork` | Mười dòng báo cáo và hồ sơ của Sophia |
| Bảng kiểm | `S.controlSheet`, `S.eventEval` | Lựa chọn logic, tổng và cấp theo ngày; thiếu ô thì chưa chấm |
| Dữ kiện | `S.rawPins`, `S.sel`, `S.personUse` | Mã, nguồn, nội dung và phạm vi đang dùng |
| Giới hạn ghim | `SCOPE_MAX` | Ngoại lệ và giám sát: 4; cụm: 10; mỗi cá nhân: 5 theo cấu hình phạm vi |
| Lời khai | `CLAIMS[].id`, `person`, `quote` | Năm lời khai, bốn người; giữ đúng phạm vi lời nói |
| Hồ sơ đối chiếu | `CLAIMS[].base`, `request`, `required` | Hồ sơ nền, có thể yêu cầu và tập cần đối chiếu |
| Đánh giá | `CLAIMS[].effect`, `S.assessment` | Mã đánh giá nội bộ và lựa chọn của người học |
| Trách nhiệm | `RESP`, `S.lockedChoices`, `S.locked` | Phương án, đáp án nội bộ và hồ sơ đã khóa |
| Thời gian | `S.witnessClock`, `S.expiredWitness`, `S.timedOut` | Cửa sổ mỗi nhân chứng và lời khai chưa hoàn thành |
| Kết luận | `S.motive`, `S.control`, `S.fraud` | Xung đột lợi ích, kiểm soát và gian lận tách riêng |
| Quản trị | `decisions.people`, `northstar`, `system` | Ba lựa chọn cuối với mã hợp lệ |

Các điều kiện tập hồ sơ, mã đánh giá và giới hạn phạm vi là dữ liệu đối chiếu nội bộ. Nội dung người học xem cần được trình bày theo nguồn, còn nhận định phải xuất hiện ở đúng bước sử dụng.

### 2.6 Shared Runtime State

| Trường | Nội dung |
|---|---|
| `version`, `runId` | Phiên bản và mã lượt chơi |
| `attempts[tab][cp]` | `wrong`, `solved`, `revealed`, `forfeited`, `flags` |
| `complete[tab]` | Trạng thái hoàn thành chương |
| `revealed[tab]` | Đã xem lời giải toàn chương |
| `hints`, `hintKeys` | Số gợi ý và khóa đã ghi nhận khi sự kiện có khóa |
| `childReveal` | Số sự kiện xem lời giải từ nội dung con |
| `establishedEvidenceTab4` | Dữ kiện đã xác lập để Chương V sử dụng |
| `decisions` | Ba quyết định quản trị |
| `result`, `endingPlayed` | Kết quả cuối và trạng thái phim kết thúc |

## 3. Delivered JSON Structure

| Tệp và nhóm trường | Kiểu dữ liệu | Ý nghĩa và nguồn |
|---|---|---|
| `case_data.json`: `income_statement`, `balance_sheet_extract` | Đối tượng theo chỉ tiêu và năm; giá trị số | Số liệu chuẩn hóa từ tài liệu Chương I |
| `case_data.json`: `cost_accounts_2025` | Mảng đối tượng; `budget`, `actual`, `variance` là số | Năm tài khoản từ `ACCOUNTS` |
| `case_data.json`: `advisory_ledger_2025` | Mảng đối tượng | Từ `TX`; `amt` đổi thành `amount`, `desc` thành `description` |
| `case_data.json`: `contracts` | Đối tượng theo mã hợp đồng | Từ `CONTRACTS`; `pay` đổi thành `payment`; giữ đủ `objective`, `scope`, `ceiling` |
| `case_data.json`: `deliverables` | Đối tượng theo tham chiếu bút toán | Từ `WORK`; `done`, `accepted` được đổi sang ngày chuẩn |
| `evidence.json`: `chapter_1_documents` | Đối tượng theo mã, có chuỗi HTML | 21 tài liệu gốc trong `docs` |
| `evidence.json`: `chapter_2_documents` | Mảng 20 đối tượng | Nội dung chứng từ; siêu dữ liệu vai trò được chuyển sang tệp đối chiếu nội bộ |
| `evidence.json`: `chapter_4_documents` | Mảng 24 đối tượng có `id`, `title`, `sub`, `html` | Nội dung tài liệu được kết xuất từ `DOCS[].body()` với tập chọn rỗng |
| `evidence.json`: `monitoring_report` | Mảng 10 đối tượng | Từ `MONROWS`; số tiền thành số, ngày thành `YYYY-MM-DD` |
| `evidence.json`: `chapter_5_documents`, `witness_claims` | Đối tượng hồ sơ và mảng lời khai | Từ `E` và phần nội dung của `CLAIMS`; không gắn sẵn đánh giá đúng vào lời khai |
| `rules.json` | Đối tượng, mảng mã và biểu thức dạng chuỗi | Bản mô tả quy tắc; không phải mã được trò chơi tự nạp để thực thi |
| `answer_key.json` | Đối tượng đối chiếu nội bộ | Cấu hình đáp án, vai trò, bản chụp lời giải Chương IV và tiêu chí Chương V |

Ngày `08/05` trong niên độ 2025 được chuẩn hóa thành `2025-05-08`. Ngày nằm trong chuỗi chứng từ hoặc HTML giữ nguyên; không sửa ngày nghiệm thu Chương III thành ngày ở Chương IV. Các định danh, lời khai và chứng từ tiếng Anh là nội dung nguồn của trò chơi; phần giải thích trong tài liệu dùng tiếng Việt.

`DOCS[].roles` có thể rộng hơn hoặc khác `ANSWERS`. Các hàm `selectRecordForRole`, `has` và `isWrong` sử dụng `ANSWERS`; vì vậy bảng chấp nhận mới là căn cứ kiểm tra thao tác. Ví dụ, nhân sự chấp nhận `NEW_MARKETS` ở ô bối cảnh, còn tài khoản khác không yêu cầu ô bối cảnh.

## 4. Validation and Missing Values

Các đầu vào bắt buộc phải đầy đủ trước khi chấm. Số liệu tiền tệ phải thống nhất triệu USD; tỷ lệ phải giữ rõ cơ sở. Giá trị `-` trong tài liệu là ô chưa điền, không phải 0.

| Nhóm | Kiểm tra chính | Khi thiếu hoặc không hợp lệ |
|---|---|---|
| Chỉ tiêu tài chính | Số hữu hạn; mẫu số dương khi cần | Không tính tỷ lệ hoặc tự bù số |
| Tài khoản | Mã duy nhất; thực tế trừ ngân sách khớp chênh lệch | Ghi lỗi đối chiếu |
| Giao dịch | Mã, hợp đồng, chương trình, giá trị và ngày đầy đủ | Không coi nhóm đã đủ bằng chứng |
| Hợp đồng và bàn giao | Đủ tham chiếu cho cả chín bút toán | Chỉ rõ hồ sơ còn thiếu |
| Bằng chứng | Mã nguồn tồn tại; tập được chọn đúng và không trùng | Không khóa nhận định chỉ vì chọn nhiều |
| Lựa chọn | Thuộc tập mã hợp lệ; hoàn thành biểu trả lời | Chưa chấm như câu hoàn chỉnh |

Cách xử lý chi tiết và các trường hợp ranh giới được trình bày trong [DATA_FLOW_FINAL.md](DATA_FLOW_FINAL.md).

## 5. Ownership and Update Rule

Phạm Triệu Tiến Dũng kiểm tra số liệu và đơn vị; Tôn Khánh Ngọc kiểm tra nội dung hồ sơ; Nguyễn Minh Hiền kiểm tra quy tắc và điều kiện chấm; Đinh Thị Minh Khuê kiểm tra tên biến và liên kết mã; Phạm Quỳnh Phương tổng hợp tính thống nhất.

Khi đổi tên trường hoặc cấu trúc, cần ghi ánh xạ rõ trong tệp này rồi cập nhật mẫu và tài liệu liên kết. Tệp đối chiếu nội bộ có chứa lời giải, chỉ phục vụ kiểm tra và bàn giao kỹ thuật.
