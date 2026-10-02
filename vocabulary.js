(() => {
  'use strict';
  const todayEl=document.querySelector('#todayDate');
  if(todayEl){
    const updateDate=()=>{todayEl.textContent=new Intl.DateTimeFormat('zh-CN',{weekday:'long',year:'numeric',month:'long',day:'numeric'}).format(new Date());};
    updateDate();
    setInterval(updateDate,1000);
    window.addEventListener('focus',updateDate);
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateDate()});
  }
  const $ = s => document.querySelector(s);
  const groups = {
    '商务沟通': [
      ['clarify','澄清；阐明','Could you clarify the last point?'],['insight','洞察','Her insight helped us solve the problem.'],['efficient','高效的','This process is more efficient.'],['deadline','截止日期','The deadline is next Friday.'],['schedule','安排；日程','Let us schedule a meeting.'],['proposal','提议；方案','We discussed your proposal.'],['feedback','反馈','Thank you for your helpful feedback.'],['negotiate','协商','We need to negotiate the price.'],['collaborate','合作','Our teams collaborate on this project.'],['priority','优先事项','Safety is our first priority.'],['budget','预算','The project is within our budget.'],['confirm','确认','Please confirm your attendance.']
    ],
    '旅行出行': [
      ['reservation','预订','I have a reservation for two nights.'],['departure','出发','Our departure is at nine.'],['arrival','到达','Please check the arrival time.'],['luggage','行李','Where can I leave my luggage?'],['passport','护照','Please show your passport.'],['itinerary','行程','Here is our travel itinerary.'],['destination','目的地','What is your final destination?'],['boarding pass','登机牌','Keep your boarding pass ready.'],['platform','站台','The train leaves from platform three.'],['fare','车费','How much is the bus fare?'],['accommodation','住宿','We need affordable accommodation.'],['refund','退款','Can I get a refund?']
    ],
    '日常短语': [
      ['wake up','醒来','I wake up at seven.'],['look for','寻找','I am looking for my keys.'],['give up','放弃','Do not give up on your dream.'],['turn down','调低；拒绝','Please turn down the music.'],['find out','查明','Let us find out what happened.'],['pick up','接；捡起','I will pick you up at six.'],['put off','推迟','We had to put off the trip.'],['run out of','用完','We have run out of milk.'],['get along with','与……相处','I get along with my neighbors.'],['take care of','照顾','Please take care of the cat.'],['look forward to','期待','I look forward to meeting you.'],['carry on','继续','Please carry on with your work.']
    ],
    '性格情绪': [
      ['curious','好奇的','Children are curious about the world.'],['confident','自信的','She sounds confident today.'],['patient','耐心的','Please be patient with beginners.'],['reliable','可靠的','He is a reliable teammate.'],['generous','慷慨的','That was very generous of you.'],['anxious','焦虑的','I feel anxious about the exam.'],['grateful','感激的','We are grateful for your help.'],['frustrated','沮丧的','She felt frustrated by the delay.'],['optimistic','乐观的','I am optimistic about our future.'],['thoughtful','体贴的','That was a thoughtful gift.'],['determined','坚定的','He is determined to improve.'],['relieved','如释重负的','I was relieved to hear the news.']
    ],
    '学习生活': [
      ['practice','练习','Regular practice makes a difference.'],['improve','提高','Reading can improve your vocabulary.'],['understand','理解','I understand your question.'],['remember','记住','Remember to bring your notebook.'],['explain','解释','Can you explain this rule?'],['compare','比较','Compare the two answers.'],['review','复习','Review your notes after class.'],['achieve','实现','You can achieve your goal.'],['habit','习惯','Reading is a useful habit.'],['challenge','挑战','Learning a language is a challenge.'],['progress','进步','You are making steady progress.'],['opportunity','机会','This is an opportunity to learn.']
    ],
    '饮食健康': [
      ['ingredient','原料','What ingredients do we need?'],['recipe','食谱','This recipe is easy to follow.'],['portion','一份','I would like a small portion.'],['flavor','风味','The soup has a rich flavor.'],['fresh','新鲜的','We buy fresh vegetables.'],['balanced','均衡的','A balanced diet is important.'],['exercise','运动','I exercise every morning.'],['rest','休息','You need some rest.'],['appointment','预约','I have an appointment at ten.'],['recover','恢复','I hope you recover soon.'],['allergy','过敏','Do you have a food allergy?'],['thirsty','口渴的','I am thirsty after the walk.']
    ]
  };
  Object.assign(groups, {
    '大学英语四级 CET-4': [
      ['adapt','适应','Students adapt to a new environment.'],['accurate','准确的','Please give an accurate answer.'],['contribute','贡献','Everyone can contribute an idea.'],['device','设备','This device saves time.'],['factor','因素','Cost is an important factor.'],['indicate','表明','The results indicate progress.'],['maintain','维持','It is hard to maintain focus.'],['obvious','明显的','The difference is obvious.'],['potential','潜力','She has great potential.'],['require','需要','This task requires patience.']
    ],
    '大学英语六级 CET-6': [
      ['ambiguous','含糊的','The instructions are ambiguous.'],['controversial','有争议的','It is a controversial topic.'],['diminish','减少；削弱','The pain began to diminish.'],['elaborate','详尽说明','Could you elaborate on that point?'],['inevitable','不可避免的','Change is inevitable.'],['integrity','正直；完整性','She is known for her integrity.'],['mitigate','缓和；减轻','Trees help mitigate heat.'],['prevalent','普遍的','The problem is prevalent in cities.'],['substantial','大量的；实质的','They made substantial progress.'],['undergo','经历','The bridge will undergo repairs.']
    ],
    '雅思 IELTS': [
      ['allocate','分配','We should allocate more time to reading.'],['coherent','连贯的','Her answer was clear and coherent.'],['crucial','至关重要的','Sleep is crucial for memory.'],['diverse','多样的','The city has a diverse population.'],['emission','排放','We need to reduce carbon emissions.'],['fluctuate','波动','Prices fluctuate throughout the year.'],['infrastructure','基础设施','Public infrastructure needs investment.'],['phenomenon','现象','This is a global phenomenon.'],['sustainable','可持续的','We need sustainable solutions.'],['vulnerable','脆弱的','Children are vulnerable to stress.']
    ],
    '托福 TOEFL': [
      ['consequence','后果','Every action has a consequence.'],['derive','源自；获得','The word is derived from Latin.'],['empirical','以实证为基础的','The claim needs empirical evidence.'],['hypothesis','假设','The experiment tested the hypothesis.'],['nevertheless','然而','It was difficult; nevertheless, we continued.'],['prioritize','优先处理','We must prioritize urgent cases.'],['relevant','相关的','Please include relevant details.'],['retain','保留；记住','Sleep helps us retain information.'],['trigger','触发；引发','Stress can trigger headaches.'],['whereas','然而；而','He prefers tea, whereas I prefer coffee.']
    ],
    'GRE 学术词汇': [
      ['abate','减弱','The storm began to abate.'],['conundrum','难题','The decision presents a conundrum.'],['ephemeral','短暂的','Fame can be ephemeral.'],['fastidious','一丝不苟的','He is fastidious about details.'],['laconic','简洁的','Her laconic reply ended the debate.'],['magnanimous','宽宏大量的','The winner was magnanimous.'],['ostensible','表面上的','The ostensible reason was cost.'],['pragmatic','务实的','We need a pragmatic solution.'],['scrutinize','仔细检查','Researchers scrutinize the data.'],['tenacious','坚韧的','She is tenacious in pursuit of her goal.']
    ]
  });
  const prep = {
    '大学英语四级 CET-4': ['校园生活 · 主旨理解','A campus library introduced a device that reminds students to take short breaks. Some students first thought it would waste time. After a month, however, they reported that it helped them maintain focus while studying.','What benefit did students report?',['Better concentration','Longer library hours','Lower tuition fees'],0,'maintain focus 表示保持专注。转折词 however 后说明了设备的实际作用。','用 3 句英语描述一种帮助你集中注意力的学习习惯。'],
    '大学英语六级 CET-6': ['城市环境 · 推断关系','Urban trees can mitigate summer heat, but planting alone is insufficient. Without adequate water and long-term maintenance, many young trees fail to survive. A successful program must therefore fund care as well as planting.','What does the passage imply?',['Planting more trees is always sufficient','Maintenance is essential to success','Young trees need no water'],1,'therefore 引出的结论强调养护与种植同样需要投入。','用 4 句英语讨论城市绿化的益处与实施难点。'],
    '雅思 IELTS': ['可持续交通 · 识别论点','A town allocated more road space to buses and bicycles. Although some drivers objected at first, bus travel became more reliable. The council argues that sustainable transport requires both infrastructure and changes in travel habits.','Which claim does the council make?',['Only travel habits matter','Cars must be banned immediately','Infrastructure and habits both matter'],2,'both … and … 表示两个条件都重要；原文没有主张立即禁车。','写一段英语，讨论政府和个人如何共同改善城市交通。'],
    '托福 TOEFL': ['学术研究 · 证据与假设','Researchers tested the hypothesis that a brief rest after learning improves memory. One group rested quietly, whereas another completed a demanding task. The resting group later retained more information, though the researchers cautioned that larger studies were needed.','Why are larger studies needed?',['To confirm the initial finding','To prove that all tasks harm memory','To eliminate the need for rest'],0,'研究提供初步证据，但不能据此作出适用于所有情境的结论。','用英语概括研究方法、结果及一个局限。'],
    'GRE 学术词汇': ['论证分析 · 找出假设','A publisher claims that shorter book reviews will increase readership because readers have little time. Yet brevity alone may not attract readers: a laconic review can omit the evidence needed to judge a book. The proposal assumes that length is the principal barrier.','Which assumption is identified?',['All short reviews are accurate','Review length is the main obstacle','Readers dislike all evidence'],1,'论证把篇幅视为主要障碍，却没有排除内容质量等因素。','用英语写出该论证的一项假设，并提出一种检验方法。']
  };
  const deck = Object.entries(groups).flatMap(([topic, rows]) => rows.map(([word, meaning, example]) => ({id:word,topic,word,meaning,example})));
  const key = 'linguaflow.vocabulary.v1';
  let state = {records:{},topic:'全部',filter:'全部',current:'clarify',events:[]};
  try { const saved=JSON.parse(localStorage.getItem(key)); if(saved && saved.records && Array.isArray(saved.events)) state={...state,...saved}; } catch {}
  let query='', revealed=false;
  function save(){try{localStorage.setItem(key,JSON.stringify(state));$('#saveState').textContent='已自动保存到此浏览器';}catch{$('#saveState').textContent='浏览器未允许保存；本次记录仅在当前页面保留';}}
  const style=document.createElement('style');style.textContent=`
    .nav button.active,.nav button.active:hover{background:#050f16;color:white;box-shadow:inset 4px 0 #f7c95f}
    .nav button:focus-visible{outline:2px solid #f7c95f;outline-offset:3px}
    .v-controls{display:flex;flex-wrap:wrap;gap:12px;margin:20px 0}.v-controls label{display:grid;gap:6px;font-size:12px;color:#53616b}.v-controls input,.v-controls select{padding:10px;border:1px solid #ccd8df;border-radius:8px;background:white;font:inherit;min-width:155px}
    .v-card{text-align:center;background:#fff;border:1px solid #dce6e8;border-radius:18px;padding:30px;margin:18px 0}.v-card h2{font-size:38px;margin:18px 0}.v-card p{line-height:1.8}.v-actions{display:flex;justify-content:center;flex-wrap:wrap;gap:10px;margin:18px 0}.v-actions button{padding:11px 16px;border-radius:9px;background:#e5efee;color:#174a46}.v-actions .v-primary{background:#0d8b83;color:white}.v-actions button:disabled{opacity:.4;cursor:not-allowed}.v-summary{display:flex;flex-wrap:wrap;gap:20px;background:#e4f2ed;padding:18px;border-radius:12px;color:#22554f}.v-history{width:100%;border-collapse:collapse;font-size:13px}.v-history td,.v-history th{padding:12px 6px;border-bottom:1px solid #e5ebef;text-align:left}.v-status{font-size:12px;color:#61766f}#vAnswer{min-height:90px}#saveState{font-size:12px;color:#53616b}
    @media(max-width:900px){aside{display:flex;padding:12px}.tag,.side-card{display:none}.nav{display:flex;overflow:auto;margin-top:12px}.nav button{white-space:nowrap}.v-card{padding:20px}.v-card h2{font-size:30px}}
  `;document.head.appendChild(style);
  $('#libraryView').innerHTML=`<div class="eyebrow">VOCABULARY COLLECTION</div><h1>词汇卡片</h1><p>6 个主题 · 72 张词汇卡片 · 每张均含释义与英文例句</p><div class="v-summary" id="vSummary"></div><div class="v-controls"><label>学习主题<select id="vTopic"></select></label><label>学习状态<select id="vFilter"><option>全部</option><option>未学习</option><option>待复习</option><option>已掌握</option></select></label><label>搜索单词或中文<input id="vSearch" placeholder="如：旅行、deadline" type="search"></label></div><div class="v-card"><div id="vPosition" class="v-status"></div><h2 id="vWord"></h2><div id="vAnswer" aria-live="polite"></div><div class="v-actions"><button id="vReveal">翻卡查看释义</button><button id="vSpeak">▶ 英语发音</button></div><div class="v-actions"><button id="vPrev">← 上一张</button><button id="vReview">待复习</button><button class="v-primary" id="vMaster">已掌握 ✓</button><button id="vNext">下一张 →</button></div><p id="saveState" role="status">学习记录保存在此浏览器，刷新后可继续</p></div><section class="panel"><h3>最近学习记录</h3><p class="v-status">翻卡计为浏览；标记“待复习”或“已掌握”计为一次学习。</p><table class="v-history"><thead><tr><th>单词</th><th>状态</th><th>学习次数</th><th>最近学习</th></tr></thead><tbody id="vHistory"></tbody></table></section>`;
  Object.keys(groups).forEach(t=>$('#vTopic').add(new Option(t,t)));$('#vTopic').insertBefore(new Option('全部','全部'),$('#vTopic').firstChild);
  if(!['全部',...Object.keys(groups)].includes(state.topic))state.topic='全部';
  if(!['全部','未学习','待复习','已掌握'].includes(state.filter))state.filter='全部';
  $('#vTopic').value=state.topic;$('#vFilter').value=state.filter;
  const historyPanel=$('#vHistory').closest('section');
  historyPanel.style.cssText='margin-top:20px;overflow-x:auto';
  historyPanel.querySelector('.v-status').textContent='显示最近更新的 12 个词汇。标记待复习或已掌握计为一次学习；取消掌握保留历史次数。';
  $('#statsView').innerHTML='<div class="library-head"><div><div class="eyebrow">YOUR PROGRESS</div><h2>学习统计</h2></div></div><p class="v-status">根据此浏览器保存的词汇记录统计。</p><div class="v-summary" id="statsSummary" aria-live="polite"></div>';
  $('#statsView').append(historyPanel);
  const prepPanel=document.createElement('section');prepPanel.className='panel';prepPanel.style.marginBottom='20px';
  $('#libraryView').append(prepPanel);
  function renderPrep(){
    prepPanel.replaceChildren();const p=prep[state.topic];prepPanel.hidden=!p;if(!p)return;
    const heading=document.createElement('h3');heading.textContent='备考加练 · '+p[0];
    const note=document.createElement('p');note.className='v-status';note.textContent='原创专项练习，非官方真题。答案与写作草稿自动保存在本机。';
    const passage=document.createElement('p');passage.textContent=p[1];passage.style.lineHeight='1.9';
    const question=document.createElement('p');question.textContent=p[2];
    const answer=document.createElement('p');answer.setAttribute('role','status');
    const row=document.createElement('div');row.className='choices';
    state.prep ||= {};const record=state.prep[state.topic]||{};
    p[3].forEach((text,i)=>{const b=document.createElement('button');b.className='choice';b.textContent=text;if(record.answer===i)b.classList.add(i===p[4]?'correct':'wrong');b.onclick=()=>{state.prep[state.topic]={...state.prep[state.topic],answer:i};save();renderPrep()};row.append(b)});
    if(Number.isInteger(record.answer))answer.textContent=(record.answer===p[4]?'回答正确。':'再想一想。正确答案：'+p[3][p[4]]+'。')+p[5];
    const label=document.createElement('label');label.textContent='写作拓展：'+p[6];label.htmlFor='prepDraft';
    const draft=document.createElement('textarea');draft.id='prepDraft';draft.rows=5;draft.style.cssText='display:block;width:100%;margin-top:12px;padding:12px;font:inherit;border:1px solid #ccd8df;border-radius:8px';draft.value=record.draft||'';
    draft.oninput=()=>{state.prep[state.topic]={...state.prep[state.topic],draft:draft.value};save()};
    prepPanel.append(heading,note,passage,question,row,answer,label,draft);
  }
  function filtered(){return deck.filter(w=>(state.topic==='全部'||w.topic===state.topic)&&(state.filter==='全部'||(state.records[w.id]?.status||'未学习')===state.filter)&&`${w.word} ${w.meaning} ${w.topic}`.toLowerCase().includes(query.toLowerCase()));}
  function current(){return filtered().find(w=>w.id===state.current);}
  function render(){
    const list=filtered();if(!list.some(w=>w.id===state.current))state.current=list[0]?.id||'';
    const w=current(), rec=w?state.records[w.id]:null;
    const known=deck.filter(w=>state.records[w.id]?.status==='已掌握').length,review=deck.filter(w=>state.records[w.id]?.status==='待复习').length;
    $('#vSummary').innerHTML=`<div class="v-stat"><strong>${deck.length}</strong><span>全部词汇</span></div><div class="v-stat"><strong>${known}</strong><span>已掌握</span></div><div class="v-stat"><strong>${review}</strong><span>待复习</span></div><div class="v-stat"><strong>${deck.length-known-review}</strong><span>未学习</span></div>`;
    const studied=deck.filter(w=>state.records[w.id]?.count).length;
    const studyCount=deck.reduce((sum,w)=>sum+(state.records[w.id]?.count||0),0);
    $('#statsSummary').textContent=`累计学习 ${studied} 个词汇　　学习标记 ${studyCount} 次　　已掌握 ${known}　　待复习 ${review}　　掌握比例 ${Math.round(known/deck.length*100)}%`;
    $('#vWord').textContent=w?.word||'暂无匹配词汇';$('#vPosition').textContent=w?`${w.topic} · ${list.indexOf(w)+1} / ${list.length} · ${rec?.status||'未学习'}`:'请调整主题、状态或搜索条件';
    $('#vAnswer').replaceChildren();if(w){for(const text of revealed?[w.meaning,w.example]:['先试着回忆词义，再翻卡核对。']){const p=document.createElement('p');p.textContent=text;$('#vAnswer').append(p);}}
    $('#vReveal').textContent=revealed?'收起释义':'翻卡查看释义';
    ['vReveal','vSpeak','vReview','vMaster'].forEach(id=>$('#'+id).disabled=!w);['vPrev','vNext'].forEach(id=>$('#'+id).disabled=list.length<2);
    const isMastered=rec?.status==='已掌握';
    $('#vMaster').textContent='已掌握';
    $('#vMaster').classList.toggle('is-mastered',isMastered);
    $('#vMaster').setAttribute('aria-pressed',String(isMastered));
    $('#vMaster').title=isMastered?'点击取消掌握':'尚未掌握，点击标记为已掌握';
    $('#vMaster').disabled=!w;
    $('#vReview').textContent=rec?.status==='待复习'?'待复习（当前状态）':'标记为待复习';
    $('#vHistory').replaceChildren();const recent=deck.filter(w=>state.records[w.id]?.count).sort((a,b)=>state.records[b.id].last-state.records[a.id].last).slice(0,12);
    if(!recent.length){const tr=document.createElement('tr');const td=document.createElement('td');td.colSpan=4;td.textContent='还没有记录，完成一次标记即可开始累计。';tr.append(td);$('#vHistory').append(tr);}
    recent.forEach(w=>{const r=state.records[w.id],tr=document.createElement('tr');[w.word,r.status,r.count,new Date(r.last).toLocaleString('zh-CN')].forEach(t=>{const td=document.createElement('td');td.textContent=t;tr.append(td)});$('#vHistory').append(tr)});
    renderPrep();save();
  }
  function move(delta){const list=filtered();if(!list.length)return;state.current=list[(list.findIndex(w=>w.id===state.current)+delta+list.length)%list.length].id;revealed=false;render();}
  function mark(status){const w=current();if(!w)return;const now=Date.now();state.records[w.id]={...state.records[w.id],status,count:(state.records[w.id]?.count||0)+1,last:now};state.events.push({id:w.id,status,at:now});revealed=false;render();toast(`已记录：${w.word} · ${status}`);}
  $('#vTopic').onchange=e=>{state.topic=e.target.value;revealed=false;render()};$('#vFilter').onchange=e=>{state.filter=e.target.value;revealed=false;render()};$('#vSearch').oninput=e=>{query=e.target.value;revealed=false;render()};
  $('#vPrev').onclick=()=>move(-1);$('#vNext').onclick=()=>move(1);$('#vReview').onclick=()=>mark('待复习');$('#vMaster').onclick=()=>toggleMaster();$('#vReveal').onclick=()=>{revealed=!revealed;render()};
  function toggleMaster(){const w=current();if(!w)return;const rec=state.records[w.id]||{};if(rec.status==='已掌握'){state.records[w.id]={...rec,status:'未学习',last:Date.now()};state.events.push({id:w.id,status:'取消掌握',at:Date.now()});revealed=false;render();toast(`已取消掌握：${w.word}`);return}mark('已掌握');}
  $('#vSpeak').onclick=()=>{if(!('speechSynthesis' in window)){toast('此浏览器不支持语音播放');return;}const u=new SpeechSynthesisUtterance(current().word);u.lang='en-US';u.rate=.8;u.onerror=()=>toast('语音播放失败，请检查设备的英语语音支持');speechSynthesis.cancel();speechSynthesis.speak(u)};
  const views=['dashboardView','libraryView','listeningView','writingView','statsView'];const nav=[...document.querySelectorAll('.nav button')];
  function show(index){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===views[index]));nav.forEach((b,i)=>{b.classList.toggle('active',i===index);if(i===index)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});if(index===1||index===4)render();}
  nav.forEach((b,i)=>b.onclick=()=>show(i));$('#backBtn').onclick=()=>show(0);
  $('#heroCta').textContent='开始今日背单词　→';
  $('#heroCta').onclick=()=>{show(1);window.scrollTo(0,0)};
  // The dashboard card uses the same persisted record as the full vocabulary deck.
  function daily(){const w=deck[wi%deck.length];$('#word').textContent=w.word;$('#pron').textContent=w.topic;$('#meaning').textContent=w.meaning;$('#flip').textContent='查看例句';const known=state.records[w.id]?.status==='已掌握';$('#mastered').disabled=false;$('#mastered').textContent='已掌握';$('#mastered').style.background=known?'#102f36':'#e5efee';$('#mastered').style.color=known?'white':'#174a46';$('#mastered').setAttribute('aria-pressed',String(known));$('#mastered').title=known?'点击取消掌握':'点击标记为已掌握';}
  $('#nextWord').onclick=e=>{e.preventDefault();wi=(wi+1)%deck.length;daily()};$('#flip').onclick=()=>{const w=deck[wi%deck.length];$('#meaning').textContent=$('#meaning').textContent===w.example?w.meaning:w.example};
  $('#mastered').onclick=()=>{const w=deck[wi%deck.length],rec=state.records[w.id]||{},now=Date.now();if(rec.status==='已掌握'){state.records[w.id]={...rec,status:'未学习',last:now};state.events.push({id:w.id,status:'取消掌握',at:now});save();daily();toast('已取消掌握状态');return}state.records[w.id]={...rec,status:'已掌握',count:(rec.count||0)+1,last:now};state.events.push({id:w.id,status:'已掌握',at:now});save();daily();toast('词汇学习记录已保存')};
  nav[0].onclick=()=>{daily();show(0)};
  const speaking=document.createElement('div');speaking.id='speakingView';speaking.className='view';
  speaking.innerHTML='<div class="study-shell"><button class="back" id="speakingBack">← 返回概览</button><div class="panel" style="margin-top:20px"><div class="eyebrow">SPEAKING PRACTICE</div><h2>口语跟读</h2><p>听示范后，自己大声跟读。可反复播放，练习自然停顿。</p><p id="speakingLine" style="font-size:24px;line-height:1.6"></p><p id="speakingMeaning"></p><div class="v-actions"><button id="speakingPlay">▶ 播放示范</button><button id="speakingNext">下一句 →</button></div><p id="speakingStatus" role="status"></p></div></div>';
  $('main').append(speaking);
  const lines=[['Could you clarify the last point?','你能解释一下最后一点吗？'],['I look forward to working with you.','我期待与你合作。'],['Could I get a latte with oat milk, please?','请给我一杯燕麦奶拿铁。'],['Would Friday morning work for you?','星期五上午你方便吗？']];let lineIndex=0;
  function renderSpeaking(){$('#speakingLine').textContent=lines[lineIndex][0];$('#speakingMeaning').textContent=lines[lineIndex][1];$('#speakingStatus').textContent=`第 ${lineIndex+1} / ${lines.length} 句`;}
  $('#speakingNext').onclick=()=>{if(window.speechSynthesis)speechSynthesis.cancel();lineIndex=(lineIndex+1)%lines.length;renderSpeaking()};
  $('#speakingPlay').onclick=()=>{if(!window.speechSynthesis){$('#speakingStatus').textContent='此浏览器不支持语音播放，请根据文字跟读。';return;}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(lines[lineIndex][0]);u.lang='en-US';u.rate=.8;u.onerror=()=>$('#speakingStatus').textContent='播放失败，请检查设备英语语音支持。';speechSynthesis.speak(u)};
  $('#speakingBack').onclick=()=>{if(window.speechSynthesis)speechSynthesis.cancel();show(0)};
  function openExtra(id){show(0);$('#dashboardView').classList.remove('active');$('#'+id).classList.add('active');window.scrollTo(0,0);}
  const shortcuts=[
    ()=>{state.topic='商务沟通';state.filter='全部';query='';revealed=false;$('#vTopic').value=state.topic;$('#vFilter').value=state.filter;$('#vSearch').value='';show(1)},
    ()=>show(2),
    ()=>{qi=0;openExtra('studyView');renderQ()},
    ()=>{openExtra('speakingView');renderSpeaking()}
  ];
  document.querySelectorAll('.lesson-card').forEach((card,i)=>{card.setAttribute('role','button');card.tabIndex=0;card.setAttribute('aria-label','进入'+card.querySelector('h4').textContent);card.onclick=()=>{shortcuts[i]();window.scrollTo(0,0)};card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();card.click()}}});
  const shortcutStyle=document.createElement('style');shortcutStyle.textContent='.lesson-card{cursor:pointer}.lesson-card:hover{border-color:var(--teal)}.lesson-card:focus-visible{outline:3px solid var(--teal);outline-offset:3px}';document.head.append(shortcutStyle);
  $('#libraryView > p').innerHTML=`<span class="v-intro-count">${Object.keys(groups).length} 个学习分类 · ${deck.length} 张词汇卡片</span><span class="v-intro-note">每张包含释义与英文例句；备考分类为精选练习词汇，不是完整考试词表。</span>`;
  const statusStyle=document.createElement('style');
  statusStyle.textContent='.v-actions #vMaster{background:#e5efee;color:#174a46;opacity:1}.v-actions #vMaster.is-mastered{background:#102f36;color:white;opacity:1}.v-intro-count{display:block;font-size:15px;color:#29434d;font-weight:700}.v-intro-note{display:block;margin-top:5px;font-size:12px;color:#71808f}.v-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:0;padding:0;overflow:hidden;background:#e4f2ed}.v-stat{padding:17px 20px;border-right:1px solid rgba(13,139,131,.12)}.v-stat:last-child{border-right:0}.v-stat strong{display:block;font-size:23px;color:#174a46;line-height:1.1}.v-stat span{display:block;margin-top:6px;font-size:12px;color:#5e7777}.v-controls{margin-top:20px}@media(max-width:600px){.v-summary{grid-template-columns:repeat(2,1fr)}.v-stat:nth-child(2){border-right:0}.v-stat{border-bottom:1px solid rgba(13,139,131,.12)}}';
  document.head.append(statusStyle);
  render();daily();show(0);
})();
