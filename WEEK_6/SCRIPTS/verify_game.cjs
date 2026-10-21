const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path'),zlib=require('zlib'),crypto=require('crypto');
const gamePath=path.resolve(process.argv[2]||path.join(__dirname,'../../../upload/THE_LAST_HEIR_FULL_GAME_FINAL(3).html'));
const samplePath=path.resolve(process.argv[3]||path.join(__dirname,'../SAMPLE_DATA/case_data.json'));
const outputPath=path.resolve(process.argv[4]||path.join(__dirname,'../EVIDENCE'));
fs.mkdirSync(outputPath,{recursive:true});
const html=fs.readFileSync(gamePath,'utf8');
const scripts=[...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(x=>x[1]);
const shared=scripts.find(x=>x.includes('Shared case record.'));
if(!shared)throw new Error('Missing shared engine');
function literal(source,name){
 const match=new RegExp('\\b(?:const|let|var)\\s+'+name+'\\s*=\\s*').exec(source);
 if(!match)throw new Error('Missing '+name);
 const start=match.index+match[0].length;
 for(let end=source.indexOf(';',start);end>=0;end=source.indexOf(';',end+1)){
  const candidate='('+source.slice(start,end)+')';
  try{new vm.Script(candidate);return candidate}catch(e){}
  if(end-start>800000)break;
 }
 throw new Error('Cannot isolate '+name);
}
function values(source,names){
 const context=vm.createContext({}),out={};
 for(const name of names){out[name]=vm.runInContext(literal(source,name),context,{timeout:1500});context[name]=out[name]}
 return out;
}
const chapters={};
for(let n=1;n<=5;n++){
 const match=new RegExp('<script[^>]*id="chapter-data-'+n+'"[^>]*>([\\s\\S]*?)<\\/script>').exec(html);
 if(!match)throw new Error('Missing chapter '+n);
 const decoded=zlib.gunzipSync(Buffer.from(match[1].trim(),'base64')).toString('utf8');
 const payload=/<script[^>]*id="tlh-original-payload"[^>]*>([\s\S]*?)<\/script>/.exec(decoded);
 chapters[n]={decoded,original:payload?JSON.parse(payload[1]):decoded};
}
const embed=vm.runInNewContext(literal(chapters[1].original,'EMBED'));
const ch1=values(Buffer.from(embed,'base64').toString('utf8'),['docs','MEVAL_KEY']);
const ch2=values(chapters[2].original,['ACCOUNTS','DOCS','ANSWERS']);
const ch3=values(chapters[3].original,['TX','CONTRACTS','WORK']);
const ch4=values(chapters[4].original,['MONROWS']);
const ch5=values(chapters[5].original,['E','CLAIMS','RESP']);
function engine(){
 const store=new Map(),w={addEventListener(){},dispatchEvent(){},location:{href:''}};
 const context=vm.createContext({window:w,parent:w,localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},Event:function(){},CustomEvent:function(){},setTimeout(){},document:{querySelectorAll(){return []}}});
 vm.runInContext(shared,context,{timeout:2000});return w.TLH_GAME;
}
const results=[];
function check(id,label,run,expect){const got=run();const passed=JSON.stringify(got)===JSON.stringify(expect);results.push({id,label,actual:got,expected:expect,passed});if(!passed)throw new Error(id+' '+JSON.stringify({got,expect}));}
function perfect(g){for(const [n,cps]of Object.entries(g.CPS)){for(const cp of cps)g.receive({type:'tlh-attempt',tab:+n,cp,ok:true});g.receive({type:'tlh-status',tab:+n,complete:true});}for(const key of ['people','northstar','system'])g.setDecision(key,'balanced');}
function summary(g){const r=g.calculate();return [r.investigation,r.discipline,r.governance,r.independence,r.total,r.ending]}
check('L01','Chưa đủ ba quyết định chưa tính kết quả',()=>engine().calculate(),null);
check('L02','Đủ 45 điểm kiểm tra',()=>Object.values(engine().CPS).reduce((n,a)=>n+a.length,0),45);
check('L03','Tự giải hoàn toàn và ba quyết định cân bằng',()=>{const g=engine();perfect(g);return summary(g)},[35,30,25,10,100,'successor']);
check('L04','Một lần sai không giảm mức làm chủ',()=>{const g=engine();g.receive({type:'tlh-attempt',tab:1,cp:'t1.gstart',ok:false,wrong:1});perfect(g);return summary(g)},[35,30,25,10,100,'successor']);
check('L05','Hai lần sai ở câu đầu Chương I',()=>{const g=engine();g.receive({type:'tlh-attempt',tab:1,cp:'t1.gstart',ok:false,wrong:2});perfect(g);return summary(g)},[34.6,28.5,25,10,98.1,'successor']);
check('L06','Ba lần sai ở câu đầu Chương I',()=>{const g=engine();g.receive({type:'tlh-attempt',tab:1,cp:'t1.gstart',ok:false,wrong:3});perfect(g);return summary(g)},[34.2,27,25,10,96.2,'successor']);
check('L07','Mỗi khóa gợi ý chỉ ghi một lần',()=>{const g=engine();for(let i=0;i<2;i++)g.receive({type:'tlh-hint-used',tab:1,hintKey:'test-hint'});perfect(g);return [g.get().hints[1],g.calculate().independence]},[1,9]);
check('L08','Hai gợi ý độc lập được làm tròn sau khi cộng',()=>{const g=engine();for(let i=0;i<2;i++)g.receive({type:'tlh-hint-used',tab:1,hintKey:'hint-'+i});perfect(g);return g.calculate().independence},9);
check('L09','Xem lời giải cả Chương I',()=>{const g=engine();g.topReveal(1);perfect(g);return summary(g)},[28,24,25,8,85,'successor']);
check('L10','Hai quyết định vội vàng',()=>{const g=engine();perfect(g);g.setDecision('people','aggressive');g.setDecision('northstar','aggressive');return summary(g)},[35,30,13,10,88,'reckless']);
check('L11','Hai quyết định do dự',()=>{const g=engine();perfect(g);g.setDecision('people','hesitant');g.setDecision('northstar','hesitant');return summary(g)},[35,30,17,10,92,'hesitant']);
check('L12','Ưu tiên kết thúc vội vàng khi điều kiện chồng lấn',()=>{const g=engine();g.topReveal(1);g.topReveal(2);perfect(g);g.setDecision('people','aggressive');g.setDecision('northstar','hesitant');g.setDecision('system','hesitant');return summary(g)},[21,18,11,6,56,'reckless']);
check('L13','Hết giờ một lời khai vẫn chấm các phần còn lại',()=>{const g=engine();g.receive({type:'tlh-forfeit',tab:5,cp:'t5.vknow'});perfect(g);return summary(g)},[34.4,29.5,25,10,98.9,'successor']);
check('L14','Không tước kết quả lời khai đã được chấp nhận',()=>{const g=engine();g.receive({type:'tlh-attempt',tab:5,cp:'t5.vknow',ok:true});g.receive({type:'tlh-forfeit',tab:5,cp:'t5.vknow'});return !!g.get().attempts[5]['t5.vknow'].forfeited},false);
check('L15','Dữ kiện chuyển tiếp phải có nguồn và nhận định sử dụng',()=>{const g=engine();g.receive({type:'tlh-tab4-evidence',tab:4,items:[{id:'valid',docId:'route',text:'x',usedIn:['system']},{id:'unused',docId:'route',text:'x',usedIn:[]},{id:'missing-source',text:'x',usedIn:['system']}]});return g.get().establishedEvidenceTab4.map(x=>x.id)},['valid']);
check('L16','Giữ nguyên dữ kiện sau khi Chương IV hoàn thành',()=>{const g=engine();g.receive({type:'tlh-tab4-evidence',tab:4,items:[{id:'a',docId:'route',text:'x',usedIn:['system']}]});g.receive({type:'tlh-status',tab:4,complete:true});g.receive({type:'tlh-tab4-evidence',tab:4,items:[]});return g.get().establishedEvidenceTab4.length},1);
check('L17','Bắt đầu lại xóa tiến trình và dữ kiện',()=>{const g=engine();perfect(g);g.reset();return [Object.keys(g.get().complete).length,g.get().establishedEvidenceTab4.length,g.get().result]},[0,0,null]);
// Execute the authored transaction-boundary function with the original ledger.
const src=chapters[3].original;
const line=src.split("\n").find(x=>x.startsWith("function testBoundary(){"));
const ledger=ch3.TX;
function boundary(ids,contractVote='yes',purposeVote='yes'){
 const S={selected:ids,contractVote,purposeVote},events=[];
 const ctx=vm.createContext({S,TX:ledger,selected:()=>ledger.filter(t=>ids.includes(t.id)),TLH:{guard:()=>false,result:(...x)=>events.push(x)},render(){},flash(){}});
 vm.runInContext(line+';testBoundary();',ctx,{timeout:1000});return {pass:!!S.boundaryPass,complete:!!S.complete,total:S.total??null,awarded:events.some(x=>x[1]===true)};
}
check('L18','Ba khoản NST-01 đầy đủ',()=>boundary(['N1','N2','N3']),{pass:true,complete:true,total:2.6,awarded:true});
check('L19','Thiếu một khoản NST-01',()=>boundary(['N1','N2']),{pass:true,complete:false,total:null,awarded:false});
check('L20','Thêm NS-119 và nhận diện đúng hai ranh giới',()=>boundary(['N1','N2','N3','N4'],'no','no'),{pass:false,complete:false,total:null,awarded:false});
check('L21','Nhận sai cùng hợp đồng khi có NS-119',()=>boundary(['N1','N2','N3','N4']),{pass:false,complete:false,total:null,awarded:false});
check('L22','Một gợi ý và hai lỗi ở t4.n73',()=>{const g=engine();g.receive({type:'tlh-attempt',tab:4,cp:'t4.n73',ok:false,wrong:2});g.receive({type:'tlh-hint-used',tab:4,hintKey:'n73'});perfect(g);return summary(g)},[34.8,28.5,25,9,97.3,'successor']);
check('L23','Bốn câu Chương IV sai ba lần, ba gợi ý',()=>{const g=engine();for(const cp of g.CPS[4].slice(0,4))g.receive({type:'tlh-attempt',tab:4,cp,ok:false,wrong:3});for(let i=0;i<3;i++)g.receive({type:'tlh-hint-used',tab:4,hintKey:'h'+i});perfect(g);return summary(g)},[33.4,24,25,8,90.4,'successor']);
check('L24','Xem lời giải cả Chương III',()=>{const g=engine();g.topReveal(3);perfect(g);return summary(g)},[28,24,25,8,85,'successor']);
check('L25','Một quyết định vội vàng dù điểm cao',()=>{const g=engine();perfect(g);g.setDecision('people','aggressive');return summary(g)},[35,30,19,10,94,'conditional']);
check('L26','Một quyết định do dự dù điểm cao',()=>{const g=engine();perfect(g);g.setDecision('people','hesitant');return summary(g)},[35,30,21,10,96,'conditional']);
check('L27','Hai sự kiện gợi ý không có khóa vẫn ghi hai lần',()=>{const g=engine();g.receive({type:'tlh-hint-used',tab:2});g.receive({type:'tlh-hint-used',tab:2});perfect(g);return [g.get().hints[2],g.calculate().independence]},[2,9]);
check('L28','Câu đã giải trong chương hoàn thành không nhận thêm lỗi',()=>{const g=engine();g.receive({type:'tlh-attempt',tab:1,cp:'t1.gstart',ok:true});g.receive({type:'tlh-status',tab:1,complete:true});g.receive({type:'tlh-attempt',tab:1,cp:'t1.gstart',ok:false,wrong:9});return g.get().attempts[1]['t1.gstart'].wrong},0);
check('L29','calculate chỉ chặn quyết định, không tự chặn năm chương',()=>{const g=engine();for(const k of ['people','northstar','system'])g.setDecision(k,'balanced');return summary(g)},[0,0,18,10,28,'conditional']);
check('L30','Mức tự thực hiện đúng ngưỡng 5',()=>{const g=engine();for(let i=0;i<7;i++)g.receive({type:'tlh-hint-used',tab:1,hintKey:'x'+i});perfect(g);return [g.calculate().independence,g.calculate().ending]},[5,'successor']);
check('L31','Mức tự thực hiện dưới ngưỡng, còn 4',()=>{const g=engine();for(let i=0;i<8;i++)g.receive({type:'tlh-hint-used',tab:1,hintKey:'x'+i});perfect(g);return [g.calculate().independence,g.calculate().ending]},[4,'conditional']);

function assignedFunction(source,name){
 const pos=source.lastIndexOf(name+'=function');if(pos<0)throw new Error('Missing '+name);
 const start=source.indexOf('=',pos)+1;
 for(let end=source.indexOf(';',start);end>=0;end=source.indexOf(';',end+1)){
  const candidate='('+source.slice(start,end)+')';
  try{new vm.Script(candidate);return candidate}catch(e){}
  if(end-start>100000)break;
 }
 throw new Error('Cannot isolate '+name);
}
const presentSource=assignedFunction(chapters[5].original,'presentEvidence');
function present(selected,assessment='rebut'){
 const S={phase:'inquiry',current:'vknow',done:{},selected:{vknow:selected},assessment:{vknow:assessment},locked:{}};
 const events=[];
 const el={classList:{add(){},remove(){}},hasAttribute(){return false}};
 const context=vm.createContext({S,CLAIMS:ch5.CLAIMS,tick(){},resumePending:false,objectionInFlight:false,objectionFeedback:false,objectionSequence:0,
  availableEvidence:()=>Object.keys(ch5.E),TLH:{guard:()=>false,result:(cp,ok)=>events.push(ok)},$:()=>el,
  dismissTour(){},closeOverlay(){},persist(){},allClaimsPerson:()=>false,render(){},nextClaim(){},setTimeout(){}});
 vm.runInContext(presentSource+'()',context,{timeout:1500});
 return [events.length?events[0]:null,!!S.done.vknow];
}
check('L32','Chương V: đúng tập và đúng đánh giá',()=>present(['memo','read']),[true,true]);
check('L33','Chương V: tập dư không được chấp nhận',()=>present(['memo','read','route']),[false,false]);
check('L34','Chương V: mã hồ sơ trùng không được chấp nhận',()=>present(['memo','memo']),[false,false]);
check('L35','Chương V: tập đúng nhưng đánh giá sai',()=>present(['memo','read'],'supported'),[false,false]);
check('L36','Chương V: chưa chọn hồ sơ không chấm',()=>present([]),[null,false]);

// Exercise the authored error ledger with a controlled clock and minimal DOM.
const adapterStart=chapters[3].original.indexOf('window.TLH=(function(){');
const adapterEnd=chapters[3].original.indexOf('\n})();',adapterStart)+'\n})();'.length;
const adapterSource=chapters[3].original.slice(adapterStart,adapterEnd);
function ledgerAdapter(){
 let now=0;const events=[];const elements={};
 const doc={getElementById:k=>elements[k]||null,createElement:()=>({style:{},dataset:{},innerHTML:''}),body:{appendChild:x=>{elements[x.id]=x}}};
 const w={TLH_TAB:3,TLH_PRIOR:{},TLH_GAME:{receive:e=>events.push(e)},tlhAutoHint:cp=>events.push({type:'tlh-auto-hint-local',cp})};
 const context=vm.createContext({window:w,parent:w,document:doc,Date:{now:()=>now},setInterval:()=>1,clearInterval(){},queueMicrotask:fn=>fn()});
 vm.runInContext(adapterSource,context,{timeout:1500});
 return {api:w.TLH,events,advance:ms=>{now+=ms}};
}
check('L37','Tạm dừng từ lỗi mới thứ hai và tự hết sau 15 giây',()=>{const x=ledgerAdapter();x.api.result('t3.boundary',false,'a');const one=x.api.guard('t3.boundary');x.api.result('t3.boundary',false,'b');const two=x.api.guard('t3.boundary');x.advance(15000);return [one,two,x.api.guard('t3.boundary')]},[false,true,false]);
check('L38','Mở lại hồ sơ giải phóng tạm dừng',()=>{const x=ledgerAdapter();x.api.result('t3.boundary',false,'a');x.api.result('t3.boundary',false,'b');x.api.reread();return x.api.guard('t3.boundary')},false);
check('L39','Lặp lại cùng mã lỗi không tăng số sai',()=>{const x=ledgerAdapter();x.api.result('t3.boundary',false,'a');x.api.result('t3.boundary',false,'a');return x.api.state('t3.boundary').wrong},1);
check('L40','Lỗi mới thứ ba gửi sự kiện gợi ý',()=>{const x=ledgerAdapter();x.api.result('t3.boundary',false,'a');x.api.result('t3.boundary',false,'b');x.api.reread();x.api.result('t3.boundary',false,'c');return [x.api.state('t3.boundary').wrong,x.events.filter(e=>e.type==='tlh-attempt').length,x.events.filter(e=>e.type==='tlh-auto-hint-local').length]},[3,3,1]);

const sample=JSON.parse(fs.readFileSync(samplePath,'utf8'));
const financial=[];const round1=x=>Math.round(x*10)/10;
function fcheck(id,label,actual,expected){const passed=JSON.stringify(actual)===JSON.stringify(expected);financial.push({id,label,actual,expected,passed});if(!passed)throw new Error(id+' '+JSON.stringify({actual,expected}))}
const p=sample.income_statement,bs=sample.balance_sheet_extract,rb=sample.revenue_bridge,cf=sample.cash_flow;
fcheck('F01','Tăng doanh thu',round1((p.net_revenue['2025']/p.net_revenue['2024']-1)*100),25);
fcheck('F02','Cầu nối doanh thu',round1(rb.revenue_2024+rb.volume_effect+rb.price_mix_effect),150);
fcheck('F03','Tăng phải thu',round1((bs.trade_receivables['2025']/bs.trade_receivables['2024']-1)*100),16.7);
fcheck('F04','Số ngày thu tiền ước tính',['2024','2025'].map(y=>round1(bs.trade_receivables[y]/p.net_revenue[y]*365)),[54.8,51.1]);
fcheck('F05','Biên lợi nhuận hoạt động',['2024','2025'].map(y=>round1(p.operating_profit[y]/p.net_revenue[y]*100)),[18.6,13.7]);
fcheck('F06','Lợi nhuận gộp và lợi nhuận hoạt động',['2024','2025'].map(y=>[round1(p.net_revenue[y]-p.cost_of_goods_sold[y]),round1(p.gross_profit[y]-p.distribution_expenses[y]-p.marketing_and_administrative_expenses[y]-p.research_and_development_expenses[y]+p.other_operating_income[y]-p.other_operating_expenses[y])]),[[55,22.3],[65,20.5]]);
fcheck('F07','Tách biến động hai năm và chênh lệch kế hoạch',[
 round1((65/150-55/120)*100),round1((65/150-.44)*100),
 round1(p.research_and_development_expenses['2025']-p.research_and_development_expenses['2024']),round1(p.research_and_development_expenses['2025']-sample.aop_2025.research_and_development_plan),
 round1(p.other_operating_expenses['2025']-p.other_operating_expenses['2024']),round1(p.other_operating_expenses['2025']-sample.aop_2025.other_operating_expenses_plan)
],[-2.5,-0.7,1.6,0.1,2.5,0.2]);
fcheck('F08','Năm tài khoản: ngân sách, thực tế và chênh lệch',['budget','actual','variance'].map(k=>round1(ch2.ACCOUNTS.reduce((s,a)=>s+a[k],0))),[18,21,3]);
fcheck('F09','Sổ tư vấn đầy đủ',[ch3.TX.length,round1(ch3.TX.reduce((s,t)=>s+t.amt,0))],[9,4.2]);
fcheck('F10','Đủ hợp đồng tham chiếu',[Object.keys(ch3.CONTRACTS).length,ch3.TX.filter(t=>!ch3.CONTRACTS[t.contract]).length],[7,0]);
fcheck('F11','Đủ hồ sơ bàn giao',[Object.keys(ch3.WORK).length,ch3.TX.filter(t=>!ch3.WORK[t.ref]).length],[9,0]);
fcheck('F12','NST-01 đúng ranh giới',[ch3.TX.filter(t=>t.contract==='NST-01').length,round1(ch3.TX.filter(t=>t.contract==='NST-01').reduce((s,t)=>s+t.amt,0))],[3,2.6]);
fcheck('F13','Báo cáo giám sát đủ dòng',[ch4.MONROWS.length,ch4.MONROWS.filter(r=>r[3]==='NST-01').length],[10,3]);
const flows=[round1(Object.values(cf.operating_bridge_2025).reduce((a,b)=>a+b,0)),round1(cf.investing_2025.reduce((s,x)=>s+x.amount,0)),round1(cf.financing_2025.reduce((s,x)=>s+x.amount,0))];
fcheck('F14','Dòng tiền và tiền cuối kỳ',[...flows,round1(bs.cash_and_cash_equivalents['2024']+flows.reduce((a,b)=>a+b,0))],[11,-11,-2,6]);
const rows=[...ch1.docs.pnl.html.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map(m=>[...m[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(x=>x[1].replace(/<[^>]+>/g,'').trim())).filter(r=>r.length);
const pnlKeys=['net_revenue','cost_of_goods_sold','gross_profit','distribution_expenses','marketing_and_administrative_expenses','research_and_development_expenses','other_operating_income','other_operating_expenses','operating_profit','profit_after_tax'];
fcheck('F15','Các số báo cáo chuẩn hóa khớp HTML',rows.every((row,i)=>['2024','2025'].every((y,j)=>Number(row[j+1].replace(/[()]/g,''))===p[pnlKeys[i]][y])),true);
fcheck('F16','Bản dữ liệu giao dịch khớp mã nguồn',sample.advisory_ledger_2025.every(t=>{const x=ch3.TX.find(x=>x.id===t.id);return x&&x.amt===t.amount&&x.contract===t.contract&&x.program===t.program}),true);
fcheck('F17','Vai trò chứng từ mẫu và tài khoản khác',[ch2.ANSWERS.PERSONNEL.context,ch2.ANSWERS.OTHER.context],[['WAGE_BENCH','NEW_MARKETS'],[]]);
fcheck('F18','Giữ ngày nghiệm thu theo nguồn',[ch3.WORK['NS-051'].accepted,chapters[4].original.includes("['Acceptance date','07/05/2025']")],['05/05',true]);

const inventory={review_date:'2026-10-21',node_version:process.version,source_file:path.basename(gamePath),source_size_bytes:Buffer.byteLength(html),source_sha256:crypto.createHash('sha256').update(html).digest('hex'),
 chapters:Object.entries(chapters).map(([n,c])=>({chapter:+n,decoded_bytes:Buffer.byteLength(c.decoded),decoded_characters:c.decoded.length,original_bytes:Buffer.byteLength(c.original)})),
 source_counts:{chapter_1_documents:Object.keys(ch1.docs).length,chapter_2_accounts:ch2.ACCOUNTS.length,chapter_2_documents:ch2.DOCS.length,chapter_3_transactions:ch3.TX.length,chapter_3_contracts:Object.keys(ch3.CONTRACTS).length,chapter_3_deliverables:Object.keys(ch3.WORK).length,chapter_4_monitoring_rows:ch4.MONROWS.length,chapter_5_documents:Object.keys(ch5.E).length,chapter_5_statements:ch5.CLAIMS.length,checkpoints:Object.fromEntries(Object.entries(engine().CPS).map(([k,v])=>[k,v.length]))},
 method:'Giải nén đủ năm chương từ HTML, đọc các lớp nhúng và chạy hàm gốc trong Node.js vm với phần phụ thuộc giao diện được thay bằng đối tượng tối thiểu. Không chạy trình duyệt hoặc chứng minh toàn bộ giao diện.'};
fs.writeFileSync(path.join(outputPath,'build_inventory.json'),JSON.stringify(inventory,null,2)+'\n');
fs.writeFileSync(path.join(outputPath,'logic_checks.json'),JSON.stringify({review_date:'2026-10-21',method:inventory.method,results},null,2)+'\n');
fs.writeFileSync(path.join(outputPath,'financial_checks.json'),JSON.stringify({review_date:'2026-10-21',method:'Tính trên dữ liệu mẫu đã chuẩn hóa; đối chiếu các số báo cáo và đối tượng dữ liệu với HTML được giải nén trực tiếp.',results:financial},null,2)+'\n');
console.log(JSON.stringify({source_bytes:inventory.source_size_bytes,logic_cases:results.length,logic_passed:results.filter(x=>x.passed).length,financial_cases:financial.length,financial_passed:financial.filter(x=>x.passed).length}));
