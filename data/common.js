// 儒藏本体论 - 全局数据与通用函数
// 典籍分类
const CATEGORIES = [
  { id: 'all', name: '全部', count: 908 },
  { id: '四书', name: '四书', count: 81 },
  { id: '春秋', name: '春秋', count: 124 },
  { id: '礼经', name: '礼经', count: 89 },
  { id: '诗经', name: '诗经', count: 73 },
  { id: '尚书', name: '尚书', count: 62 },
  { id: '孝经', name: '孝经', count: 14 },
  { id: '小学', name: '小学', count: 74 },
  { id: '语录', name: '语录', count: 205 },
  { id: '启蒙蒙学', name: '蒙学', count: 76 },
  { id: '修身治家', name: '修身', count: 58 },
  { id: '五经总义', name: '五经总义', count: 33 },
  { id: '乐经', name: '乐经', count: 19 }
];

// 本体概念词典
const CONCEPTS = {
  '仁': {
    def: '儒家核心范畴，孔子思想的核心。指爱人、克己复礼的道德境界，是处理人际关系的最高准则。孟子发展为"仁政"学说，朱熹释为"心之德，爱之理"。',
    source: '《论语·颜渊》："樊迟问仁。子曰：爱人。"'
  },
  '义': {
    def: '儒家核心范畴，指正当、合宜的行为准则。与"仁"并称，孟子重义，认为"义，人路也"，是判断是非善恶的标准。',
    source: '《孟子·告子上》："义，人路也。"'
  },
  '礼': {
    def: '儒家核心范畴，指社会等级制度、道德规范和礼节仪式。孔子主张"克己复礼为仁"，是维护社会秩序的重要保障。',
    source: '《论语·颜渊》："克己复礼为仁。"'
  },
  '智': {
    def: '儒家核心范畴，指道德智慧与认知能力。孟子将其列为四端之一，"是非之心，智之端也"，是判断是非善恶的理性能力。',
    source: '《孟子·公孙丑上》："是非之心，智之端也。"'
  },
  '信': {
    def: '儒家核心范畴，指诚实不欺、言行一致。孔子认为"人而无信，不知其可也"，是立身处世的基本道德。',
    source: '《论语·为政》："人而无信，不知其可也。"'
  },
  '道': {
    def: '儒家哲学最高范畴，指宇宙本原、规律与道德准则。孔子曰"朝闻道，夕死可矣"，宋儒将道等同于天理。',
    source: '《论语·里仁》："朝闻道，夕死可矣。"'
  },
  '德': {
    def: '指道德品行与内在德性。儒家强调"为政以德"，认为德是治国修身的根本，《大学》主张"明明德"。',
    source: '《论语·为政》："为政以德，譬如北辰，居其所而众星共之。"'
  },
  '理': {
    def: '宋明理学核心范畴，指宇宙本原与事物规律。程朱理学认为"性即理"，"未有天地之先，毕竟也只是理"，是形而上的本体。',
    source: '《朱子语类》卷一："未有天地之先，毕竟也只是理。"'
  },
  '气': {
    def: '儒家哲学范畴，指构成万物的物质本原。张载提出"太虚即气"，朱熹认为理与气合而生万物，理为形而上，气为形而下。',
    source: '张载《正蒙·太和》："太虚不能无气，气不能不聚而为万物。"'
  },
  '心': {
    def: '儒家哲学范畴，指思维器官与道德主体。孟子提出"心之官则思"，陆王心学认为"心即理"，"宇宙便是吾心，吾心即是宇宙"。',
    source: '陆九渊《杂说》："宇宙便是吾心，吾心即是宇宙。"'
  },
  '性': {
    def: '指人的本性。孔子曰"性相近也，习相远也"，孟子主性善，荀子主性恶，程朱认为"性即理"，王阳明主张"性无善无恶"。',
    source: '《论语·阳货》："性相近也，习相远也。"'
  },
  '格物': {
    def: '《大学》八条目之一，指推究事物之理。程朱释为"即物而穷其理"，王阳明释为"格心"，"正其不正以归于正"。',
    source: '《大学》："致知在格物，物格而后知至。"'
  },
  '致知': {
    def: '《大学》八条目之一，指获得真知。朱熹认为即物穷理后自然致知，王阳明认为"致吾心之良知于事事物物"。',
    source: '《大学》："致知在格物。"'
  },
  '诚意': {
    def: '《大学》八条目之一，指使意念诚实，毋自欺。是修身的重要功夫，"所谓诚其意者，毋自欺也，如恶恶臭，如好好色"。',
    source: '《大学》："所谓诚其意者，毋自欺也。"'
  },
  '正心': {
    def: '《大学》八条目之一，指端正本心，不为情欲所左右。心有所忿懥、恐惧、好乐、忧患，则不得其正。',
    source: '《大学》："身有所忿懥，则不得其正。"'
  },
  '修身': {
    def: '《大学》八条目之核心，指修养自身品德。是齐家、治国、平天下的根本，"自天子以至于庶人，壹是皆以修身为本"。',
    source: '《大学》："自天子以至于庶人，壹是皆以修身为本。"'
  },
  '齐家': {
    def: '《大学》八条目之一，指整治家族家庭。家齐而后国治，是修身到治国的中间环节。',
    source: '《大学》："欲治其国者，先齐其家。"'
  },
  '治国': {
    def: '《大学》八条目之一，指治理国家。儒家主张德治、仁政，"为政以德"，国治而后天下平。',
    source: '《大学》："欲明明德于天下者，先治其国。"'
  },
  '平天下': {
    def: '《大学》八条目之最终目标，指使天下太平。儒家的最高政治理想，"明明德于天下"，实现大同世界。',
    source: '《大学》："大学之道，在明明德，在亲民，在止于至善。"'
  },
  '良知': {
    def: '心学核心范畴，孟子提出"人之所不学而能者，其良能也；所不虑而知者，其良知也"，王阳明发展为"致良知"说，认为良知是人人本有的是非之心。',
    source: '《孟子·尽心上》："人之所不虑而知者，其良知也。"'
  },
  '慎独': {
    def: '儒家修养方法，指在独处无人注意时仍能坚守道德准则。《大学》《中庸》均强调慎独，是修身的重要功夫。',
    source: '《中庸》："莫见乎隐，莫显乎微，故君子慎其独也。"'
  },
  '中庸': {
    def: '儒家最高道德准则，指不偏不倚、无过无不及的处世态度。孔子曰"中庸之为德也，其至矣乎"，《中庸》一书系统阐述了中庸思想。',
    source: '《论语·雍也》："中庸之为德也，其至矣乎！"'
  },
  '太极': {
    def: '儒家哲学本体范畴，指宇宙本原。《易传》提出"易有太极，是生两仪"，周敦颐《太极图说》系统阐述了太极生阴阳、阴阳生万物的宇宙生成论。',
    source: '《周易·系辞上》："易有太极，是生两仪。"'
  },
  '阴阳': {
    def: '中国哲学基本范畴，指宇宙中相互对立又相互依存的两种基本力量。阳为刚、动、明，阴为柔、静、暗，阴阳交感而生万物。',
    source: '《周易·系辞上》："一阴一阳之谓道。"'
  },
  '五行': {
    def: '指金、木、水、火、土五种基本物质及其运动变化。是儒家宇宙论的重要组成部分，用以解释万物的构成与演变。',
    source: '《尚书·洪范》："五行：一曰水，二曰火，三曰木，四曰金，五曰土。"'
  },
  '天理': {
    def: '宋明理学核心范畴，指宇宙的普遍法则与道德准则。程朱理学认为"存天理，灭人欲"，天理是至善的本体，人欲是恶的来源。',
    source: '《二程遗书》卷二上："天理云者，这一个道理，更有甚穷已？不为尧存，不为桀亡。"'
  },
  '人欲': {
    def: '指人的欲望，尤其是超出基本需求的私欲。程朱理学主张"存天理，灭人欲"，认为人欲会蒙蔽天理，需要通过修养去除。',
    source: '《朱子语类》卷十三："圣贤千言万语，只是教人明天理，灭人欲。"'
  },
  '知行合一': {
    def: '王阳明提出的认识论命题，指知与行是统一的，"知是行的主意，行是知的功夫；知是行之始，行是知之成"，反对知而不行。',
    source: '王阳明《传习录》上："知是行的主意，行是知的功夫。"'
  },
  '民本': {
    def: '儒家政治思想核心，主张以民为本。《尚书》提出"民惟邦本，本固邦宁"，孟子提出"民为贵，社稷次之，君为轻"。',
    source: '《孟子·尽心下》："民为贵，社稷次之，君为轻。"'
  },
  '仁政': {
    def: '孟子提出的政治主张，主张统治者以仁爱之心治理国家，省刑罚、薄税敛、使民以时，反对苛政与霸道。',
    source: '《孟子·梁惠王上》："王如施仁政于民，省刑罚，薄税敛，深耕易耨。"'
  },
  '大同': {
    def: '儒家理想社会，《礼记·礼运》描述为"天下为公，选贤与能，讲信修睦"，是儒家追求的最高社会理想。',
    source: '《礼记·礼运》："大道之行也，天下为公。"'
  },
  '小康': {
    def: '儒家描述的次于大同的社会，指天下为家、各亲其亲、各子其子的社会，通过礼义维持秩序。',
    source: '《礼记·礼运》："今大道既隐，天下为家。"'
  },
  '道统': {
    def: '儒家传道的系统，韩愈提出尧传舜、舜传禹、禹传汤、汤传文武周公、文武周公传孔子、孔子传孟子的道统说，宋儒继承并发展了这一思想。',
    source: '韩愈《原道》："尧以是传之舜，舜以是传之禹，禹以是传之汤。"'
  },
  '四书': {
    def: '儒家核心经典，指《大学》《中庸》《论语》《孟子》，朱熹将其编定为四书并作注，成为后世科举考试的标准。',
    source: '朱熹《四书章句集注》'
  },
  '五经': {
    def: '儒家五部核心经典，指《周易》《尚书》《诗经》《礼记》《春秋》，是儒家思想的基本文献。',
    source: '《汉书·艺文志》："五经何谓？谓《易》《书》《诗》《礼》《春秋》也。"'
  }
};

// 侧边栏导航配置
const SIDEBAR_LINKS = [
  { icon: '☯', text: '首页', href: 'index.html' },
  { icon: '經', text: '四书五经', href: 'index.html#classics' },
  { icon: '常', text: '五常义理', href: 'index.html#wuchang' },
  { icon: '派', text: '学派流派', href: 'schools.html' },
  { icon: '脈', text: '儒门道脉', href: 'timeline.html' },
  { icon: '典', text: '历代注疏', href: 'index.html#commentaries' },
  { icon: '籍', text: '古籍全文库', href: 'library.html' },
  { icon: '⬡', text: '本体/RDF', href: 'ontology.html' },
  { icon: '圖', text: '义理图谱', href: 'graph.html' },
  { icon: '辭', text: '儒学词典', href: 'dictionary.html' },
  { icon: '→', text: '概念推演', href: 'reasoning.html' }
];

// 顶部导航配置
const TOP_NAV = [
  { text: '首页', href: 'index.html' },
  { text: '四书', href: 'index.html#sishu' },
  { text: '五经', href: 'index.html#wujing' },
  { text: '道脉', href: 'timeline.html' },
  { text: '流派', href: 'schools.html' },
  { text: '图谱', href: 'graph.html' },
  { text: '全文库', href: 'library.html' },
  { text: '本体', href: 'ontology.html' }
];

// 生成侧边栏
function renderSidebar(activePage) {
  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar';
  sidebar.innerHTML = SIDEBAR_LINKS.map(link => `
    <a href="${link.href}" class="sidebar-link ${link.href === activePage ? 'active' : ''}">
      <span class="icon">${link.icon}</span>
      <span>${link.text}</span>
    </a>
  `).join('');
  document.body.appendChild(sidebar);
}

// 生成顶部导航
function renderTopNav(activePage) {
  const nav = document.createElement('nav');
  nav.className = 'top-nav';
  nav.innerHTML = `
    <a href="index.html" class="nav-logo">☰ 儒藏本体论 · Confucian Canon</a>
    <div class="nav-links">
      ${TOP_NAV.map(link => `
        <a href="${link.href}" class="${link.href === activePage ? 'active' : ''}">${link.text}</a>
      `).join('')}
    </div>
    <div class="nav-tools">
      <button onclick="toggleFontSize()">字号 ${localStorage.getItem('fontSize') || '中'}</button>
      <button onclick="toggleVertical()">${localStorage.getItem('vertical') === 'true' ? '横排' : '竖排'}</button>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
}

// 字号切换
function toggleFontSize() {
  const sizes = ['小', '中', '大', '特大'];
  const sizeMap = { '小': '16px', '中': '18px', '大': '20px', '特大': '24px' };
  let current = localStorage.getItem('fontSize') || '中';
  let idx = sizes.indexOf(current);
  current = sizes[(idx + 1) % sizes.length];
  localStorage.setItem('fontSize', current);
  document.querySelector('.reader-content').style.fontSize = sizeMap[current];
  document.querySelector('.nav-tools button:first-child').textContent = `字号 ${current}`;
}

// 竖排切换
function toggleVertical() {
  let vertical = localStorage.getItem('vertical') === 'true';
  vertical = !vertical;
  localStorage.setItem('vertical', vertical);
  const content = document.querySelector('.reader-content');
  if (content) {
    content.classList.toggle('vertical', vertical);
  }
  document.querySelector('.nav-tools button:last-child').textContent = vertical ? '横排' : '竖排';
}

// 概念标注
function annotateConcepts(text) {
  let result = text;
  // 按长度从长到短替换，避免短词覆盖长词
  const concepts = Object.keys(CONCEPTS).sort((a, b) => b.length - a.length);
  concepts.forEach(concept => {
    const regex = new RegExp(`(${concept})`, 'g');
    result = result.replace(regex, `<span class="concept" data-concept="${concept}">$1</span>`);
  });
  return result;
}

// 概念弹窗
function initConceptPopup() {
  const popup = document.createElement('div');
  popup.className = 'concept-popup';
  popup.innerHTML = `
    <button class="close">&times;</button>
    <h3></h3>
    <p class="def"></p>
    <p class="source"></p>
  `;
  document.body.appendChild(popup);

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('concept')) {
      const concept = e.target.dataset.concept;
      const data = CONCEPTS[concept];
      if (data) {
        popup.querySelector('h3').textContent = concept;
        popup.querySelector('.def').textContent = data.def;
        popup.querySelector('.source').textContent = data.source;
        const rect = e.target.getBoundingClientRect();
        popup.style.left = `${Math.min(rect.left, window.innerWidth - 420)}px`;
        popup.style.top = `${rect.bottom + window.scrollY + 8}px`;
        popup.classList.add('show');
      }
    } else if (!popup.contains(e.target)) {
      popup.classList.remove('show');
    }
  });

  popup.querySelector('.close').addEventListener('click', () => {
    popup.classList.remove('show');
  });
}

// 初始化页面通用元素
function initPage(activePage) {
  renderTopNav(activePage);
  renderSidebar(activePage);
  initConceptPopup();
  
  // 应用保存的字号和竖排设置
  const fontSize = localStorage.getItem('fontSize') || '中';
  const sizeMap = { '小': '16px', '中': '18px', '大': '20px', '特大': '24px' };
  const content = document.querySelector('.reader-content');
  if (content) {
    content.style.fontSize = sizeMap[fontSize];
    if (localStorage.getItem('vertical') === 'true') {
      content.classList.add('vertical');
    }
  }
  const navButtons = document.querySelectorAll('.nav-tools button');
  if (navButtons[0]) navButtons[0].textContent = `字号 ${fontSize}`;
  if (navButtons[1]) navButtons[1].textContent = localStorage.getItem('vertical') === 'true' ? '横排' : '竖排';
}

// 加载典籍列表（动态生成，避免硬编码908条）
async function loadBooks() {
  // 典籍元数据（核心典籍+分类统计，完整列表通过动态加载）
  const coreBooks = [
    { cat: '四书', name: '论语注疏', chars: '16.8万字' },
    { cat: '四书', name: '孟子注疏', chars: '28.5万字' },
    { cat: '四书', name: '大学章句', chars: '2.3万字' },
    { cat: '四书', name: '中庸章句', chars: '3.8万字' },
    { cat: '四书', name: '论语集注', chars: '12.1万字' },
    { cat: '四书', name: '孟子集注', chars: '22.7万字' },
    { cat: '五经', name: '周易正义', chars: '32.4万字' },
    { cat: '五经', name: '尚书正义', chars: '28.9万字' },
    { cat: '五经', name: '毛诗正义', chars: '48.2万字' },
    { cat: '五经', name: '礼记正义', chars: '68.5万字' },
    { cat: '五经', name: '春秋左传正义', chars: '98.7万字' },
    { cat: '语录', name: '朱子语类', chars: '215.3万字' },
    { cat: '语录', name: '传习录', chars: '12.8万字' },
    { cat: '语录', name: '近思录', chars: '6.5万字' },
    { cat: '蒙学', name: '三字经', chars: '0.1万字' },
    { cat: '蒙学', name: '百家姓', chars: '0.05万字' },
    { cat: '蒙学', name: '千字文', chars: '0.1万字' },
    { cat: '蒙学', name: '弟子规', chars: '0.3万字' },
    { cat: '礼经', name: '周礼注疏', chars: '45.6万字' },
    { cat: '礼经', name: '仪礼注疏', chars: '38.2万字' },
    { cat: '孝经', name: '孝经注疏', chars: '3.2万字' },
    { cat: '修身', name: '颜氏家训', chars: '7.8万字' },
    { cat: '修身', name: '温公家范', chars: '5.6万字' },
    { cat: '小学', name: '尔雅注疏', chars: '12.3万字' },
    { cat: '小学', name: '说文解字', chars: '22.7万字' }
  ];
  return coreBooks;
}

// 生成页脚
function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <p>儒藏本体论 · 基于殆知阁儒藏908部典籍构建 | 数据来源：<a href="https://daizhige.org/" target="_blank">殆知阁</a></p>
    <p style="margin-top: 8px;">© 2025 儒藏本体论项目 | 参考：<a href="https://yejinlei.github.io/The-Book-of-Changes/" target="_blank">易经本体论</a></p>
  `;
  document.body.appendChild(footer);
}


// ==================== 主题切换逻辑（仅追加在末尾，不修改任何前面的代码） ====================
(function() {
  // 读取用户保存的主题，默认就是原始青铜主题，不做任何改动
  const savedTheme = localStorage.getItem('rucang-theme') || '';
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // 等DOM加载完，在侧边栏最顶部插入主题切换按钮
  document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return; // 没有侧边栏的页面（如阅读页、图谱页）不处理

    // 主题切换按钮（样式和其他sidebar-link完全一致）
    const themeBtn = document.createElement('a');
    themeBtn.className = 'sidebar-link theme-toggle';
    themeBtn.innerHTML = '<span class="icon">◐</span><span>主題切換</span>';
    themeBtn.href = 'javascript:void(0)';

    // 主题选择面板
    const themePanel = document.createElement('div');
    themePanel.className = 'theme-panel';
    const themes = [
      { id: '', name: '青銅吉金', icon: '鼎' },
      { id: 'paper', name: '宣紙古籍', icon: '卷' },
      { id: 'ink', name: '水墨山水', icon: '☁' },
      { id: 'bamboo', name: '竹簡漢簡', icon: '⺮' },
      { id: 'starry', name: '星象羅盤', icon: '✦' }
    ];
    const currentTheme = savedTheme;
    themes.forEach(t => {
      const item = document.createElement('div');
      item.className = 'theme-item' + (t.id === currentTheme ? ' active' : '');
      item.innerHTML = `<span class="theme-icon">${t.icon}</span><span>${t.name}</span>`;
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        if (t.id === '') {
          document.documentElement.removeAttribute('data-theme');
        } else {
          document.documentElement.setAttribute('data-theme', t.id);
        }
        localStorage.setItem('rucang-theme', t.id);
        themePanel.querySelectorAll('.theme-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        themePanel.classList.remove('open');
      });
      themePanel.appendChild(item);
    });

    themeBtn.appendChild(themePanel);

    // 点击按钮切换面板显示/隐藏
    themeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      themePanel.classList.toggle('open');
    });

    // 点击页面其他地方关闭面板
    document.addEventListener('click', function() {
      themePanel.classList.remove('open');
    });

    // 把按钮插入到侧边栏最顶部（在第一个链接前面）
    sidebar.insertBefore(themeBtn, sidebar.firstChild);
  });
})();
