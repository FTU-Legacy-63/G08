# The Last Heir — Financial Investigation Game

**Học phần:** NHA408E  
**Nhóm:** G08  

# WEEK 7 — FINAL QA VÀ MỨC ĐỘ SẴN SÀNG CHO ĐÁNH GIÁ CUỐI KỲ

> **Audit note:** Week 7 không tạo artifact mới và không thay đổi Product Direction, data, logic, user flow hay build của Weeks 1–6. File này chỉ ghi lại kết quả **audit — rà soát** toàn bộ evidence hiện có so với `NHA408E/docs/weeks/week-7.md` và `NHA408E/docs/assessment/final-repo-readiness.md`. Chỗ nào cần sửa thì sửa trực tiếp vào file gốc (*Update, do not recreate*).

---

## 1. Mục tiêu của Week 7

Câu hỏi trung tâm:

> **Evidence đã có từ Weeks 1–6 có đầy đủ, nhất quán và sẵn sàng cho đánh giá hay chưa?**

Sản phẩm được đánh giá là bản build hoàn chỉnh `THE_LAST_HEIR_FULL_GAME_FINAL.html` (Aster Foods). Core chain được bảo vệ:

```text
Financial Review (+3.0)
→ Cost Breakdown (Advisory 2.6)
→ Transaction Trace (NST-01 = 2.6)
→ Control System (19/07 · 1.8 · system used 0.9 · grounds to investigate)
→ Board Inquiry (active override by Victor Hale · fraud = risk, not proven)
→ Succession Decisions → Ending + Score
```

### Kết quả cần có

| Kết quả | Trạng thái | Evidence |
|---|---|---|
| Final product hoặc working fallback | ✅ | `THE_LAST_HEIR_FULL_GAME_FINAL.html` (Google Drive) |
| Final README | ✅ | `README.md` |
| Core flow ổn định | ✅ | `WEEK_6_BUILD_INTEGRATION_TESTING_FINAL.md` §5, §8 |
| Financial logic explainable | ✅ | `WEEK 4/PROJECT_LOGIC_CHAIN_FINAL.md` |
| Testing evidence | ✅ | `WEEK_6_BUILD_INTEGRATION_TESTING_FINAL.md` §8–9; `WEEK 6 EVIDENCE/` |
| Bug status | ✅ | `WEEK_6_BUILD_INTEGRATION_TESTING_FINAL.md` §10 |
| Limitations | ✅ | `WEEK 3/ASSUMPTIONS_FINAL.md` §18; `WEEK 4/ASSUMPTIONS_AND_TECHNICAL_READINESS_FINAL.md` §9 |
| Group Footprint | ✅ | §3 bên dưới |
| Objective Individual Contribution | ✅ | `MEMBER CONTRIBUTION.md` |
| Individual Footprint | ⚠ | Chưa có file `contribution/individual/` theo mẫu của thầy — xem §7 |
| Final release / tag | ⚠ | Chưa tạo — xem §6 |

---

## 2. Final Assessment Structure

| Thành phần | Tỷ trọng | Evidence chính |
|---|---:|---|
| Group Footprint | 60% | `README.md`, `WEEK 2/` → `WEEK 6`, `REVISION LOG.md`, file game |
| Objective Individual Contribution | 25% | `MEMBER CONTRIBUTION.md`, `MIDTERM VERIFICATION.md` §B, commit history |
| Individual Footprint | 15% | `contribution/individual/*.md` (cần bổ sung) |
| Mentorship bonus | tối đa +1.0 | Chưa có evidence — xem §12 |
| FTU usefulness bonus | tối đa +1.0 | Có cơ sở đề xuất — xem §13 |

---

## 3. Final Group Footprint

Bảng dưới đối chiếu 11 mục mà `week-7.md` yêu cầu repo phải giúp người đọc tìm nhanh.

| # | Mục | Vị trí trong repo | Trạng thái |
|---|---|---|---|
| 1 | Product link | Google Drive: `THE_LAST_HEIR_FULL_GAME_FINAL.html` | ⚠ Link chưa được ghi trong `README.md` |
| 2 | Final README | `README.md` → *Final Product at a Glance* | ✅ |
| 3 | Source code | File game HTML (toàn bộ code nằm trong file; ~120 MB > giới hạn 100 MB của GitHub) | ⚠ Chỉ có trên Drive; repo có `WEEK 6 EVIDENCE/tlh_game_scoring.js` (phần chấm điểm trích ra) |
| 4 | Logic evidence | `WEEK 4/PROJECT_LOGIC_CHAIN_FINAL.md`, `GAMEPLAY_MECHANICS_FINAL.md`, `SCORING_AND_SAMPLE_TEST_FINAL.md` | ✅ |
| 5 | Input / data / source evidence | `WEEK 3/INPUT_DICTIONARY_FINAL.md`, `SOURCES_FINAL.md`, `ASSUMPTIONS_FINAL.md`, `WEEK 3/DATA/*.json` | ✅ |
| 6 | Testing | `WEEK_6_BUILD_INTEGRATION_TESTING_FINAL.md` §8–9; `WEEK 6 EVIDENCE/` | ✅ |
| 7 | Bug status | `WEEK_6_BUILD_INTEGRATION_TESTING_FINAL.md` §10 | ✅ |
| 8 | Limitations | `WEEK 3/ASSUMPTIONS_FINAL.md` §18; `WEEK 4/ASSUMPTIONS_AND_TECHNICAL_READINESS_FINAL.md` §9 | ✅ |
| 9 | Revision history | `REVISION LOG.md`; `README.md` → After Checkpoint 1, 2, After Final Build | ✅ |
| 10 | Contribution map | `MEMBER CONTRIBUTION.md` §3 | ✅ |
| 11 | Final version / tag | — | ⚠ Chưa tạo |

> Group Footprint không phải report mới. Các mục ✅ đã nằm sẵn trong repo; 3 mục ⚠ chỉ cần bổ sung link hoặc tag.

---

## 4. Final Readiness Gate

| Điều kiện | Trạng thái | Căn cứ |
|---|---|---|
| Core flow hoạt động | ✅ | Ch.I → Ch.V → Succession → Ending chạy end-to-end (`WEEK_6` §8 N-03, N-04) |
| Financial logic giải thích được | ✅ | +3.0 → 2.6 → NST-01; mọi phép tính có trong `WEEK 4/PROJECT_LOGIC_CHAIN_FINAL.md` §5 |
| Product deployed hoặc runnable | ✅ | Mở file HTML offline trên Chrome / Edge, load ~4 s |
| Testing evidence tồn tại | ✅ | 21 test case + financial consistency check |
| Ownership rõ | ✅ | `MEMBER CONTRIBUTION.md`, `MIDTERM VERIFICATION.md` §B |
| Scope đã freeze | ✅ | `WEEK_6` §11 — 5 chương, 45 checkpoint, không thêm tính năng |
| Critical bugs xử lý hoặc ghi rõ | ✅ | Không có critical bug; 1 major (hosting) + 3 minor đã ghi |

**Kết luận:** nhóm **đạt Readiness Gate**. Các việc còn lại (§3, §6, §7) là bổ sung evidence, không phải sửa sản phẩm.

---

## 5. Final Audit theo tiến trình môn học

| Area | Evidence location | Status | Final issue | Owner | Final action |
|---|---|---|---|---|---|
| Week 1 — Problem, user, task | `README.md` §1–8 | ✅ Nhất quán | Không còn tham chiếu Beneish / Aster Holdings | Phương | Không cần sửa |
| Week 2 — Product, output, MVP | `WEEK 2/PROJECT PROPOSAL.md`, `SOLUTION STRUCTURE.md` | ✅ Khớp bản final | Main output = Board Minutes NST-01 | Phương | Không cần sửa |
| Week 3 — Input, source, assumption, data | `WEEK 3/*.md`, `WEEK 3/DATA/*.json` | ✅ Đầy đủ | Nguồn giáo trình chỉ ghi chung, chưa có tên sách cụ thể | Dũng | Điền tên giáo trình vào `SOURCES_FINAL.md` §3 |
| Week 4 — Logic, formula, sample calculation | `WEEK 4/*.md` | ✅ Khớp code | Bảng test §10 chạy trực tiếp từ hàm `calculate()` của game | Hiền | Không cần sửa |
| Week 5 — User flow, input/output, error behavior | `WEEK 5/*.md` | ✅ Rõ | Một số nhãn nút ghi theo code, chưa đối chiếu giao diện | Khuê | Mở game, đối chiếu nhãn nút trong `USER_FLOW_FINAL.md` |
| Week 6 — Core flow, test, deploy, bug, freeze | `WEEK_6_BUILD_INTEGRATION_TESTING_FINAL.md`, `WEEK 6 EVIDENCE/` | ✅ Ổn định | Các test **[Manual]** cần thành viên xác nhận lại; link phân phối chưa ghi | Phương, Khuê | Chạy lại happy path, ghi người test; thêm link vào README |
| Revision | `REVISION LOG.md`, `WEEK 2-5 CORRECTION ADDENDUM.md` | ⚠ Trùng lặp | Addendum và Revision Log cùng ghi lại thay đổi | Phương | Giữ Revision Log; xóa Addendum và sửa các link đang trỏ tới nó |
| Individual Footprint | — | ⚠ Thiếu | Chưa có file cá nhân theo mẫu `final-repo-readiness.md` §4 | Cả nhóm | Mỗi người tạo 1 file trong `contribution/individual/` |

> **Update, do not recreate:** mọi final action ở trên là sửa hoặc bổ sung vào file đã có.

---

## 6. Repository Audit

| Kiểm tra | Kết quả | Ghi chú |
|---|---|---|
| README dẫn đúng tới product và evidence | ⚠ | Dẫn đúng tới evidence; **thiếu link tải game** |
| Final source code là version hiện tại | ✅ | File game trên Drive cập nhật 19/10/2026, trùng với bản đã test |
| Links hoạt động | ⚠ | Link nội bộ giữa các file đúng tên mới; cần sửa link trỏ tới Addendum nếu xóa file này |
| Logic, data, tests, limitations dễ tìm | ✅ | Theo thư mục Week 3 / 4 / 6 |
| Contribution map và Individual Footprint đã cập nhật | ⚠ | Contribution map ✅; Individual Footprint chưa có |
| Final release / tag trùng với version được sử dụng | ⚠ | Chưa có tag |

**Đề xuất tag:** tạo tag `v1.0-final` trên commit cuối cùng của `main`, kèm GitHub Release đính link Drive của file game (file 120 MB vượt giới hạn 100 MB của GitHub nên không đưa trực tiếp vào repo).

---

## 7. Assessment Evidence Audit

### Group Footprint

Sản phẩm nhất quán từ problem tới output: cùng một case (Aster Foods), cùng một chuỗi số (+3.0 → 2.6 → NST-01 → 1.8), cùng hai final decisions từ Week 1 tới Board Minutes. Không còn tài liệu nào mô tả thiết kế cũ (Beneish, Proxy Route, Unity) như thiết kế hiện hành.

### Objective Individual Contribution

| Thành viên | Output | Integration | Testing | Revision | Documentation |
|---|---|---|---|---|---|
| Phương | Chain 5 chương, handover | Nối output các workstream | QA end-to-end, bug log | Revision Log, đồng bộ repo | README, Week 2, Week 6 |
| Dũng | Số liệu Ch.I–III | Số liệu khớp code game | Financial consistency check | Beneish → plan vs actual | Week 3 Input Dictionary, Logic Chain §5 |
| Hiền | 45 checkpoint, scoring, endings | Checkpoint ID khớp shared record | 8 kịch bản `calculate()` | Coverage formula → gate | Week 4 Mechanics, Scoring |
| Ngọc | Records Ch.IV–V, lời khai, Board Minutes | Facts Ch.IV → Ch.V | No-leak review | Proxy Route → Checklist + exceptions | Week 3 Evidence, Week 5 Output |
| Khuê | Game HTML/JS, packaging | Shell + 5 chương + shared state | Load / navigation test | Unity → HTML | Week 3 Binding, Week 4 Technical |

### Individual Footprint

`final-repo-readiness.md` §4 yêu cầu mỗi thành viên có **một file ngắn** trong `contribution/individual/` gồm 6 mục: *My main responsibility · My concrete outputs · Evidence links · How my work is used · Integration, testing and revision · Remaining limitation*. Repo hiện chưa có các file này. Nội dung có thể lấy từ `MEMBER CONTRIBUTION.md` và `MIDTERM VERIFICATION.md` §B, nhưng mỗi người cần tự viết phần *Remaining limitation*.

---

## 8. Deployment and Backup Audit

| Kiểm tra | Kết quả | Ghi chú |
|---|---|---|
| Public URL mở được | ⚠ | File trên Drive: `https://drive.google.com/file/d/1KDKliVQyG1EKgIMGXBgqih4Z1ycjR2U4/view` — cần đặt quyền *Anyone with the link* và thử mở bằng tài khoản ngoài nhóm |
| Core flow chạy trên thiết bị khác | ✅ | Chromium (máy test tự động) + máy thành viên [Manual] |
| Local instructions đúng | ✅ | `README.md` → *Cách chạy game* |
| Backup sẵn sàng | ⚠ | Cần bản sao file game trên USB / máy chiếu + video demo quay sẵn |
| Last verified version được ghi | ✅ | Bản 19/10/2026, kiểm thử 21/10/2026 (`WEEK_6` §8) |
| Không có critical secret hoặc access problem | ✅ | Không có API key, không cần đăng nhập |

---

## 9. Testing and Bug Audit

| Kiểm tra | Kết quả | Ghi chú |
|---|---|---|
| Test table hoàn chỉnh | ✅ | 21 case: normal, boundary, invalid, no-leak |
| Expected và actual result rõ | ✅ | Có cột Expected / Actual / Status |
| Financial consistency đã xác nhận | ✅ | 10 phép đối chiếu, tất cả khớp |
| Critical bugs đã xử lý | ✅ | Không có critical bug |
| Limitation còn lại được ghi | ✅ | BUG-01 hosting, BUG-02 iframe permission, BUG-03 autoplay, BUG-04 Safari cũ |
| Regression test sau final fixes | ✅ | File game không đổi từ 19/10; các sửa sau đó chỉ ở tài liệu. Kiểm thử tự động chạy lại ngày 21/10 cho cùng kết quả |

---

## 10. Nếu Product chưa sẵn sàng

Không áp dụng. Product đã chạy end-to-end. Scope đã freeze từ Week 6; không có phần nào cần cắt.

Nếu máy chiếu không mở được file game ngày đánh giá, fallback là video demo và ảnh chụp màn hình (`WEEK 6 EVIDENCE/`).

---

## 11. Common Final Mistakes

| Lỗi thường gặp | Nhóm G08 | Ghi chú |
|---|---|---|
| Chỉ có slides | ✅ Không mắc | Có game chạy được + repo đầy đủ |
| Product link hỏng | ⚠ Cần kiểm tra | Link Drive chưa ghi trong README, chưa thử từ tài khoản ngoài |
| Output không giải thích | ✅ Không mắc | Mỗi finding kèm giới hạn (`WEEK 5/OUTPUT_EXPLANATION_FINAL.md`) |
| Không có test record | ✅ Không mắc | `WEEK_6` §8 |
| Role không có output | ✅ Không mắc | Mỗi người có output cụ thể (`MEMBER CONTRIBUTION.md`) |
| Contribution claim không có link | ⚠ Một phần | Có tên file; Individual Footprint chưa có link trực tiếp |
| Source hoặc assumption ẩn | ✅ Không mắc | `WEEK 3/SOURCES_FINAL.md`, `ASSUMPTIONS_FINAL.md` |
| Thêm feature sát cuối kỳ | ✅ Không mắc | Scope freeze từ Week 6 |
| Không có fallback | ✅ Không mắc | Bản tách chương, video, ảnh chụp |
| Repo khó đọc | ⚠ Một phần | Addendum trùng với Revision Log |
| Limitation không được ghi | ✅ Không mắc | Có ở Week 3, Week 4, Week 6 |

---

## 12. Mentorship Bonus

Nhóm **chưa có evidence** về việc hỗ trợ nhóm khác (issue, pull request review, debugging note hoặc xác nhận từ nhóm được hỗ trợ). Nếu có, ghi vào bảng:

| Date | Nhóm được hỗ trợ | Vấn đề | Hình thức hỗ trợ | Evidence |
|---|---|---|---|---|
|  |  |  |  |  |

---

## 13. FTU Usefulness Bonus

The Last Heir có cơ sở đề xuất FTU usefulness bonus:

| Tiêu chí | Đánh giá |
|---|---|
| Beneficiary rõ | Sinh viên FTU ngành Tài chính, Kế toán, Ngân hàng, Kinh doanh đã học COSO / Fraud Triangle; giảng viên Kiểm toán, Kiểm soát nội bộ |
| Giá trị thực tế / tái sử dụng | Dùng làm bài tình huống trên lớp hoặc bài tự học; một file, chạy offline, không cần cài đặt |
| Documentation | Repo đầy đủ Weeks 1–6, hướng dẫn chạy trong README |
| Evidence of use / credible potential | Đã playtest với một nhóm nhỏ; chưa có số liệu sử dụng ngoài nhóm |
| Limitation trung thực | Một case cố định; nội dung game bằng tiếng Anh; file ~120 MB |

---

# Final Week 7 Rule

> **Một final project mạnh không phải sản phẩm lớn nhất. Đó là sản phẩm nhỏ, coherent, working, explainable và có ownership rõ.**
