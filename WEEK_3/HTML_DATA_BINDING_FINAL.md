# WEEK 3 — HTML AND JAVASCRIPT DATA BINDING

**Dự án:** The Last Heir  
**Học phần:** NHA408E · **Nhóm:** G08 · **Tuần:** 3

## 1. Purpose and Technical Scope

Tài liệu nối cấu trúc dữ liệu với giao diện, trạng thái, sự kiện và quy tắc đánh giá của `THE_LAST_HEIR_FULL_GAME_FINAL(3).html`. Các mô tả phản ánh mã hiện tại sau khi đọc đủ các lớp nhúng.

[Từ điển đầu vào](INPUT_DICTIONARY_FINAL.md) giải thích trường và đơn vị; [tệp luồng dữ liệu](DATA_FLOW_FINAL.md) trình bày dữ liệu mẫu và kết quả kiểm tra. Đinh Thị Minh Khuê phụ trách tích hợp, Nguyễn Minh Hiền phụ trách đối chiếu quy tắc và điểm.

## 2. Evidence States and Chapter IV–V Transfer

### 2.1 State Meaning

| Trạng thái | Ý nghĩa | Có tự chuyển sang Chương V? |
|---|---|---|
| Đã xem | Tài liệu được mở | Không |
| Đang sử dụng | Dữ kiện được chọn cho một nhận định chưa khóa | Không |
| Đã xác lập | Dữ kiện hỗ trợ nhận định được xác nhận | Có, theo bản ghi chuyển tiếp |

Hai bước dựng và áp dụng bảng kiểm Chương IV không yêu cầu ghim thủ công. Khi nhận định phân luồng được khóa, các dòng nhật ký trong `SYSTEM_FACTS` trở thành dữ kiện đã xác lập. Các phần ngoại lệ, cụm giám sát và đánh giá người dùng tập dữ kiện đã chọn cùng nhận định được xác nhận.

### 2.2 Transfer Record

Mỗi mục chuyển tiếp có `id`, `docId`, `source`, `text`, `usedIn`; bản gửi cuối bổ sung thời gian và giới hạn sử dụng khi có. `usedIn` ghi nhận định đã sử dụng dữ kiện, không phải danh sách mọi kết luận mà dữ kiện có thể chứng minh.

```json
{
  "id": "route::7",
  "docId": "route",
  "source": "Routing Log of 19/07",
  "text": "Value used to choose the approval route 900,000 USD",
  "usedIn": ["Technical finding on the system (Step 2)"]
}
```

Đây là ví dụ giữ nguyên định danh và nội dung nguồn trong mã. Ý nghĩa tiếng Việt: hệ thống dùng 900.000 USD để chọn luồng; dữ kiện mới xác lập cho nhận định kỹ thuật, chưa chứng minh Victor biết hoặc chủ động vượt kiểm soát.

### 2.3 Transfer and Retrieval Rules

`establishedMap()` và `establishedItems()` tổng hợp dữ kiện từ những kết quả đã khóa. Lớp điều phối chỉ nhận mục có mã, nguồn, nội dung và `usedIn` không rỗng; dữ liệu được lưu vào `establishedEvidenceTab4` trước khi Chương IV hoàn thành.

Chương V dùng `INHERIT_RULES` để ánh xạ dữ kiện sang hồ sơ nền. Hồ sơ chưa được kế thừa có thể được yêu cầu lại bằng chức năng yêu cầu hồ sơ. Khi đó nguồn được mô tả là truy xuất lại theo yêu cầu, không được ghi nhận sai là đã xác lập ở Chương IV.

Nhờ cơ chế này, không phải mọi tài liệu đã xem đều tự chuyển tiếp và thiếu dữ kiện kế thừa không tự làm người học mất khả năng tiếp tục. Các hồ sơ mới về biết tổng và thao tác trực tiếp vẫn được cung cấp ở Chương V.

## 3. HTML and JavaScript Data Binding

### 3.1 Packaging and Loading

Lớp điều phối chứa các khối `chapter-data-1` đến `chapter-data-5` dạng `application/x-tlh-gzip`. Hàm `unpack()` giải base64, dùng `DecompressionStream('gzip')`, nhận HTML và đưa vào `iframe.srcdoc`.

Chương I–IV còn có khung trình bày và nội dung gốc trong `tlh-original-payload`; Chương I có thêm nội dung phân tích `EMBED`. Khi đọc mã cần theo các lớp nhúng này, không kết luận thiếu dữ liệu chỉ vì chưa thấy ở lớp ngoài cùng.

### 3.2 Data-to-Interface Mapping

| Giao diện | Nguồn | Trạng thái chính |
|---|---|---|
| Phân tích Chương I | `docs`, cấu hình lựa chọn | `S.growth`, `S.margin`, `S.cash`, `S.seen`, `S.done` |
| Tủ chứng từ Chương II | `ACCOUNTS`, `DOCS`, `ACCOUNT_DOCS` | Trạng thái tài khoản và vai trò được chọn |
| Bảng truy vết Chương III | `TX`, `WORK`, `CONTRACTS` | `S.selected`, `S.seen`, phiếu ranh giới, tổng |
| Bốn bước Chương IV | Chính sách, sự kiện, `MONROWS` | Bảng kiểm, `S.eventEval`, dữ kiện, nhận định |
| Sổ điều tra Chương IV | Dữ kiện gốc và ánh xạ đã xác lập | Đã xem / đang dùng / đã xác lập |
| Lời khai Chương V | `CLAIMS`, `E`, dữ kiện chuyển tiếp | Tập chọn, đánh giá, yêu cầu hồ sơ và thời gian |
| Hồ sơ cá nhân | `RESP` | Phương án trách nhiệm và trạng thái khóa |
| Northstar và biên bản | Hồ sơ sở hữu, quan hệ, khai báo | `S.motive`, `S.control`, `S.fraud` |
| Kế nhiệm và điểm | `SUCCESSION_CHOICES`, bản ghi chung | `decisions`, `result` |

### 3.3 Shared Methods and Events

| Thành phần | Chức năng |
|---|---|
| `TLH_GAME.receive()` | Nhận và chuẩn hóa sự kiện tiến trình |
| `metrics(n)` | Tính các chỉ tiêu của một chương |
| `calculate()` | Tính điểm và kết thúc khi có đủ ba quyết định hợp lệ |
| `setDecision()` | Ghi lựa chọn quản trị trước khi khóa kết quả |
| `topReveal()` | Ghi việc xem lời giải toàn chương |
| `go()` | Chuyển chương khi đủ điều kiện trước đó |
| `reset()` | Tạo lượt mới và xóa bản ghi chung |
| `tlh-attempt` | Kết quả hoặc lỗi tại điểm kiểm tra |
| `tlh-status` | Hoàn thành chương |
| `tlh-hint-used`, `tlh-reveal-used` | Sử dụng hỗ trợ |
| `tlh-forfeit` | Lời khai Chương V hết giờ chưa hoàn thành |
| `tlh-tab4-evidence` | Dữ kiện đã xác lập của Chương IV |

Hàm `calculate()` trực tiếp kiểm tra ba quyết định, không tự kiểm tra đủ năm chương như một điều kiện bổ sung. Trong luồng thông thường, giao diện đưa người học đến quyết định kế nhiệm sau các chương; cần phân biệt điều kiện giao diện với điều kiện bên trong hàm.

### 3.4 Checkpoint Identifiers

```text
I — 9
t1.gstart, t1.gbridge, t1.gquality, t1.scope, t1.evals,
t1.cstart, t1.cbridge, t1.cfinal, t1.handoff

II — 6
t2.sample, t2.acc.TRADE_MKT, t2.acc.REG_LEGAL,
t2.acc.ADVISORY, t2.acc.OTHER, t2.conclusion

III — 2
t3.boundary, t3.final

IV — 17
t4.controlSheet, t4.ev0805, t4.ev1907, t4.ev1410,
t4.firstShift, t4.system, t4.n51, t4.n73, t4.n101,
t4.cluster, t4.mon, t4.p4class, t4.p4bridge, t4.roles,
t4.rolesummary, t4.level, t4.final

V — 11
t5.vknow, t5.vact, t5.lucas, t5.david, t5.sophia,
t5.resp.Victor, t5.resp.Lucas, t5.resp.David,
t5.resp.Sophia, t5.motive, t5.final
```

### 3.5 Storage, Review and Restart

Bản ghi chung dùng khóa `tlh_demo_original_aligned_20261015`; các phần có khóa riêng và cơ chế lưu theo lượt như `tlh_run_state_v2_n`. Lớp điều phối bảo toàn kết quả đã hoàn thành, chấp nhận sự kiện cuối còn thiếu trong trường hợp hoàn thành xảy ra ngay trước sự kiện điểm, rồi giữ chương để xem lại.

Bắt đầu lại tạo mã lượt mới và xóa tiến trình liên quan. Dữ liệu trình duyệt bị xóa hoặc không lưu được có thể làm mất khả năng tiếp tục. Với tệp cục bộ, hành vi lưu cần được kiểm tra trên trình duyệt sử dụng thực tế.

## 4. Scoring, Assistance and Timing Rules

### 4.1 Mastery and Repeated Errors

Với mỗi điểm kiểm tra, `wrong` là số lỗi mới được ghi. Cơ chế có mã chữ ký nhận diện những đáp án hoặc thành phần sai đã được ghi; gửi lại lỗi cũ không mặc nhiên tăng số lần sai. Biểu chưa đủ không được chấm như đáp án hoàn chỉnh.

| Số lỗi | Mức làm chủ khi sau đó tự giải đúng | Hỗ trợ |
|---|---|---|
| 0–1 | Đầy đủ | Phản hồi thông thường |
| 2 | Một nửa | Tạm dừng, mở lại hồ sơ hoặc chờ 15 giây |
| Từ 3 | Không có điểm làm chủ | Mở gợi ý ở lần thứ ba; vẫn có cơ chế tạm dừng |

### 4.2 Exact Scoring Definitions

Với chương có `N` điểm kiểm tra, `F` điểm tự giải ở mức đầy đủ, `H` ở mức một nửa và `A` điểm tự giải thành công, kể cả sau nhiều lỗi:

- Điểm điều tra chương = `7 × (F + H/2) / N`.
- Lỗi lặp chương `R = Σ max(0, wrong − 1)`.
- Điểm kỷ luật chương = `max(0, 6 − 1.5 × R) × A / N`.
- Hai nhóm điểm trên chỉ được tính khi chương hoàn thành và không xem lời giải toàn chương.

Tổng điều tra và kỷ luật được làm tròn một chữ số thập phân. Điểm quản trị bằng `7 × số hồ sơ trách nhiệm tự giải / 4` cộng điểm ba quyết định: cân bằng 6, do dự 2, vội vàng 0 cho mỗi quyết định; sau đó làm tròn một chữ số.

Điểm tự thực hiện bằng `max(0, 10 − Math.round(0.7 × số gợi ý + 2 × số chương xem lời giải + số sự kiện lời giải con))`. Do làm tròn tổng mức trừ, không mô tả mỗi gợi ý chắc chắn làm điểm hiển thị giảm đúng 0,7. Nếu sự kiện có `hintKey`, cùng khóa chỉ được ghi một lần; không mở rộng quy tắc này sang mọi sự kiện không có khóa.

Tổng bốn nhóm được làm tròn một chữ số. Điều tra tối đa 35, kỷ luật 30, quản trị 25, tự thực hiện 10. Câu xem lời giải và câu hết giờ được giữ trạng thái riêng; không đổi thành tự giải.

### 4.3 Ending Order and Conclusion Codes

Điều kiện được xét theo thứ tự, nên kết thúc vội vàng được ưu tiên nếu đồng thời thỏa điều kiện do dự.

| Thứ tự | Điều kiện | Mã kết thúc |
|---|---|---|
| 1 | Ít nhất 2 vội vàng, hoặc ít nhất 1 vội vàng và kỷ luật ≤20 | `reckless` |
| 2 | Ít nhất 2 do dự | `hesitant` |
| 3 | 3 cân bằng; kỷ luật ≥24; tự thực hiện ≥5; tổng ≥80 | `successor` |
| 4 | Còn lại | `conditional` |

Ba quyết định được chấm độc lập theo lựa chọn, sau đó cùng tham gia điều kiện kết thúc:

| Vấn đề | Cân bằng | Vội vàng | Do dự |
|---|---|---|---|
| Victor | Tạm loại khỏi quyết định liên quan Northstar, bảo toàn hồ sơ, điều tra độc lập | Loại vĩnh viễn ngay và coi gian lận đã được chứng minh | Giữ nguyên thẩm quyền chờ đủ bằng chứng gian lận |
| Northstar | Dừng cam kết mới, bảo toàn hồ sơ, xác minh dịch vụ và điều tra quan hệ, giá, dòng tiền | Chấm dứt ngay mọi quan hệ và giữ lại thanh toán còn lại | Tiếp tục điều kiện cũ, hoãn điều tra |
| Hệ thống | Sửa cộng gộp và thẩm quyền, giữ cấp ở cách xử lý thay thế, thêm rà soát độc lập | Giữ thiết kế, chỉ thay hoặc kỷ luật nhân sự | Chỉ sửa thuật toán, chưa sửa các điểm kiểm tra con người và ngoại lệ |

Danh hiệu quá trình được xét theo thứ tự ưu tiên riêng: kỷ luật từ 28 được ghi nhận về kỷ luật bằng chứng; nếu chưa đạt điều kiện đó, tự thực hiện từ 9 được ghi nhận về tính độc lập; tiếp theo, xem lời giải từ hai chương được ghi nhận là sử dụng hỗ trợ; các trường hợp còn lại ghi nhận việc học từ sai sót. Danh hiệu không thay thế kết luận kiểm soát hoặc kết quả kế nhiệm.

Thang nhận định Chương IV có năm mức và kết luận tình huống dừng ở mức 3. Kết luận cuối dùng mã `identified` cho kiểm soát và `risk` cho gian lận. Không đồng nhất số thứ tự hiển thị ở các thang khác nhau.

### 4.4 Witness Timing

Mỗi nhân chứng có một cửa sổ 90 giây; Victor chia sẻ thời gian giữa hai lời khai. Mã cuối lưu thời gian còn lại theo người. Sau tải lại, người học tiếp tục từ thời gian đã lưu, không nhận cửa sổ mới.

Đồng hồ tính khi phiên chất vấn đủ điều kiện hoạt động. Các bước hiển thị lời thoại, hướng dẫn hoặc mở hồ sơ thông thường có điều kiện tạm dừng theo mã; phản hồi phản bác sai và hiệu ứng phản bác không tạo cách dừng hoặc đặt lại thời gian. Khi hết giờ, lời khai chưa hoàn thành nhận 0, lời khai đã được chấp nhận giữ điểm và bằng chứng, rồi người học tiếp tục đánh giá trách nhiệm.

## 5. Delivered Data and Runtime Integration

| Tệp | Quan hệ với mã hiện tại |
|---|---|
| `DATA/case_data.json` | Chuẩn hóa số liệu và trích đủ đối tượng nguồn để đối chiếu |
| `DATA/evidence.json` | Bản trích nội dung tài liệu và lời khai, giữ định danh gốc |
| `DATA/rules.json` | Mô tả quy tắc trong mã, không phải bộ cấu hình tự được nạp |
| `DATA/answer_key.json` | Cấu hình và bản chụp lời giải phục vụ kiểm tra nội bộ |

Bản chạy dùng dữ liệu nhúng trong HTML/JavaScript. Việc có tệp JSON riêng trong bộ nộp không có nghĩa đã thay trò chơi sang cơ chế tải tệp ngoài. Khi phát triển cơ chế tải ngoài, cần viết bước đọc, ánh xạ và kiểm tra dữ liệu, rồi chạy lại các tình huống liên quan.

Các chuỗi tiếng Anh trong bản trích, mã kết luận và ví dụ chuyển bằng chứng được giữ nguyên để truy vết. Phần thuyết minh của bộ tài liệu dùng tiếng Việt; tiêu đề dùng tiếng Anh.
