# Technical Readiness — The Last Heir (Aster Holdings Case)

## 1. Mục đích

Theo yêu cầu Week 4 (mục 8, `week-4.md`), tài liệu này chốt route kỹ thuật khả thi cho MVP, kèm ưu điểm, hạn chế, chi phí, khả năng deploy và khả năng nhóm tự sửa.

> **Lưu ý:** phần lựa chọn công cụ dưới đây là đề xuất dựa trên đặc điểm của MVP đã mô tả trong logic chain và engine (game 6-tab tuần tự, chấm điểm gating, không có yêu cầu multiplayer/backend phức tạp ở bản hiện tại). Đây chưa phải quyết định đã chốt với thầy — nhóm cần rà soát lại theo kỹ năng thực tế của thành viên và cập nhật tài liệu này trước khi Development bắt đầu implement.

## 2. Đặc điểm kỹ thuật của MVP cần đáp ứng

Rút ra từ logic chain và engine đã thiết kế:

- 6 tab tuần tự, mỗi tab có: một hoặc nhiều ô input tự do (chỉ lưu, không chấm) + 1 câu hỏi gating dạng dropdown (so khớp chuỗi với đáp án đúng) + nút Submit.
- Sau submit: ghi log (đúng/sai), unlock tài liệu tương ứng nếu đúng, luôn tự động chuyển tab kế tiếp bất kể đúng/sai.
- Cần giữ trạng thái trong một phiên chơi: điểm tích lũy, tài liệu đã unlock, Financial Trace Log (bao gồm cả lần sai), hypothesis state của 4 nhân vật (Victor/Lucas/David/Sophia).
- Không có yêu cầu tài khoản người dùng, không cần lưu tiến trình qua nhiều phiên chơi, không cần multiplayer ở bản MVP.

## 3. Technical route đề xuất

| Hạng mục | Lựa chọn đề xuất | Ưu điểm | Hạn chế | Chi phí | Khả năng deploy | Khả năng nhóm tự sửa |
|---|---|---|---|---|---|---|
| Coding environment | React + Vite | Component hóa 6 tab dễ dàng vì cùng chung schema (tên tab, câu hỏi, đáp án, tài liệu unlock) | Cần thành viên có nền tảng JS/React cơ bản | Miễn phí (open-source) | Build ra static bundle, deploy dễ | Trung bình — cần quen React state (useState/useReducer) |
| Framework/styling | Tailwind CSS hoặc CSS thuần | Nhanh, không cần thiết kế hệ thống style riêng | Có thể trông "mặc định" nếu không tinh chỉnh | Miễn phí | Không ảnh hưởng deploy | Dễ, syntax đơn giản |
| Data storage | File JSON tĩnh trong repo (câu hỏi, đáp án, nội dung tài liệu) | Không cần backend/database cho MVP; dễ chỉnh sửa nội dung không cần đụng code logic | Không phù hợp nếu sau này cần multiplayer/leaderboard | Miễn phí | Bundle cùng frontend | Rất dễ — chỉ sửa file JSON |
| Trạng thái phiên chơi | State nội bộ ứng dụng (React state), không persist qua reload | Đơn giản, đúng tinh thần "mỗi tab submit 1 lần, không sửa lại" | Mất tiến trình nếu người chơi refresh trang | Miễn phí | Không ảnh hưởng | Dễ |
| Deployment platform | Vercel (hoặc Netlify) | Deploy trực tiếp từ GitHub, free tier đủ dùng cho demo lớp học | Giới hạn băng thông ở free tier, không phù hợp traffic lớn | Miễn phí ở quy mô môn học | Rất dễ — tự động deploy khi push | Dễ |
| AI-assisted coding tool | Claude Code / GitHub Copilot | Cấu trúc 6 tab lặp lại theo schema, phù hợp để AI generate component từ 1 config chung | Vẫn cần review logic gating thủ công để tránh sai đáp án | Có thể có giới hạn quota tùy gói | Không ảnh hưởng deploy | Tăng tốc độ code, giảm effort thủ công |

## 4. Data storage — chi tiết

- MVP không cần database quan hệ: toàn bộ câu hỏi gating, đáp án đúng, danh sách tài liệu unlock theo tab, và nội dung tài liệu (Vendor Breakdown, Northstar Contract, Payment Ledger, Control Policy, Amendment History, Employee Directory) có thể lưu dưới dạng file JSON tĩnh trong repo, tách biệt với code logic.
- Nếu về sau nhóm muốn làm phần Objective Individual Contribution (chấm điểm chi tiết các ô nhập tự do) hoặc leaderboard nhiều người chơi, cần bổ sung backend nhẹ (ví dụ Google Sheets API hoặc Firebase Firestore) — việc này nằm ngoài phạm vi MVP hiện tại và không nên làm ở Week 4.

## 5. Fallback

- Nếu Vercel gặp vấn đề (build fail, vượt giới hạn free tier): fallback sang **GitHub Pages**, chỉ cần bundle frontend thành static HTML/JS/CSS vì MVP không có yêu cầu server-side rendering.
- Nếu React/Vite vượt quá năng lực/thời gian còn lại của nhóm: fallback viết bằng **HTML + Vanilla JS + CSS**, dùng một file JS config duy nhất chứa toàn bộ dữ liệu 6 tab, render tab bằng thao tác DOM trực tiếp thay vì component.
- Nếu AI coding tool đang dùng hết quota hoặc không khả dụng: fallback sang công cụ AI coding khác mà nhóm đã quen thao tác.

## 6. Rủi ro kỹ thuật cần theo dõi khi implement

- Logic so khớp chuỗi (string match) cho câu hỏi gating cần chuẩn hóa (tránh lệch do khoảng trắng, hoa/thường) để không vô tình chấm sai đáp án đúng.
- Biên điểm ending (`>=` hay `>` tại 85/60/35) cần thống nhất trước khi viết hàm chấm điểm — xem thêm `assumptions-and-limitations.md` mục 6.
- Vì mỗi tab chỉ cho submit một lần, cần chặn re-render dropdown cho phép đổi lựa chọn *sau* khi đã bấm Submit (chỉ cho đổi *trước* khi bấm, theo đúng thiết kế đã chốt).
