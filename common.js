// 儒藏本体论公共脚本 - 侧边栏 + 主题切换 + 导航
document.addEventListener('DOMContentLoaded', function() {
  // 1. 插入侧边栏（每个页面自动注入）
  const sidebarHTML = `
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner">
      <div class="sidebar-item theme-toggle-item" id="themeToggleBtn">
        <span class="sidebar-icon">◐</span>
        <span class="sidebar-text">主題切換</span>
      </div>
      <a href="index.html" class="sidebar-item ${location.pathname.endsWith('index.html') || location.pathname.endsWith('/') ? 'active' : ''}">
        <span class="sidebar-icon">☯</span>
        <span class="sidebar-text">首頁</span>
      </a>
      <a href="wujing.html" class="sidebar-item">
        <span class="sidebar-icon">經</span>
        <span class="sidebar-text">四書五經</span>
      </a>
      <a href="wuchang.html" class="sidebar-item">
        <span class="sidebar-icon">常</span>
        <span class="sidebar-text">五常義理</span>
      </a>
      <a href="schools.html" class="sidebar-item">
        <span class="sidebar-icon">派</span>
        <span class="sidebar-text">學派流派</span>
      </a>
      <a href="timeline.html" class="sidebar-item">
        <span class="sidebar-icon">脈</span>
        <span class="sidebar-text">儒門道脈</span>
      </a>
      <a href="zhushu.html" class="sidebar-item">
        <span class="sidebar-icon">典</span>
        <span class="sidebar-text">歷代注疏</span>
      </a>
      <a href="library.html" class="sidebar-item ${location.pathname.endsWith('library.html') || location.pathname.endsWith('reader.html') ? 'active' : ''}">
        <span class="sidebar-icon">籍</span>
        <span class="sidebar-text">古籍全文庫</span>
      </a>
      <a href="ontology.html" class="sidebar-item">
        <span class="sidebar-icon">◇</span>
        <span class="sidebar-text">本體/RDF</span>
      </a>
      <a href="graph.html" class="sidebar-item">
        <span class="sidebar-icon">圗</span>
        <span class="sidebar-text">義理圖譜</span>
      </a>
      <a href="dictionary.html" class="sidebar-item">
        <span class="sidebar-icon">辭</span>
        <span class="sidebar-text">儒學詞典</span>
      </a>
      <a href="reasoning.html" class="sidebar-item">
        <span class="sidebar-icon">→</span>
        <span class="sidebar-text">概念推演</span>
      </a>
    </div>
  </div>
  <style>
  .sidebar{position:fixed;left:0;top:90px;bottom:0;width:180px;background:var(--bg2);border-right:1px solid var(--border);overflow-y:auto;z-index:100;overflow-x:hidden}
  .sidebar::-webkit-scrollbar{display:none}
  .sidebar-inner{padding:10px 0}
  .sidebar-item{display:flex;align-items:center;gap:12px;padding:14px 20px;color:var(--ink2);text-decoration:none;font-size:16px;cursor:pointer;transition:all .2s}
  .sidebar-item:hover,.sidebar-item.active{background:var(--bg3);color:var(--accent1);border-left:3px solid var(--accent1)}
  .sidebar-icon{width:24px;text-align:center;font-size:18px;font-weight:bold}
  /* 主题切换面板 */
  .theme-panel{position:fixed;left:200px;top:120px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:12px;box-shadow:0 8px 24px rgba(0,0,0,0.3);z-index:999;display:none;min-width:160px}
  .theme-panel.show{display:block}
  .theme-option{padding:10px 16px;border-radius:4px;cursor:pointer;font-size:15px;color:var(--ink1);transition:all .2s}
  .theme-option:hover{background:var(--bg2);color:var(--accent1)}
  .theme-option.active{background:var(--accent1);color:#fff}
  /* 主内容区偏移 */
  .main-content{margin-left:180px!important;padding:30px!important}
  @media (max-width:768px){
    .sidebar{width:100%;height:auto;bottom:auto;position:relative;display:flex;overflow-x:auto}
    .sidebar-item{padding:10px 14px;font-size:14px}
    .main-content{margin-left:0!important;padding:15px!important}
    .theme-panel{left:20px;top:180px}
  }
  </style>
  `;
  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

  // 2. 主题切换逻辑
  const themes = [
    {id: 'bronze', name: '青銅吉金', css: `
      :root{--bg1:#1a130d;--bg2:#221a10;--bg3:#2d2317;--ink1:#e8d4a8;--ink2:#c8b488;--ink3:#a89468;--accent1:#d4af37;--accent2:#b8860b;--border:#4a3c28;--shadow:rgba(212,175,55,.08);}
      body{background:var(--bg1);color:var(--ink1);background-image:radial-gradient(circle at 20% 30%,rgba(212,175,55,.05) 0%,transparent 50%),radial-gradient(circle at 80% 70%,rgba(184,134,11,.05) 0%,transparent 50%);}
    `},
    {id: 'paper', name: '宣紙古籍', css: `
      :root{--bg1:#f5efe0;--bg2:#efe8d6;--bg3:#e8dfc8;--ink1:#3a2a18;--ink2:#5a4a32;--ink3:#7a6a4a;--accent1:#8b4513;--accent2:#a0522d;--border:#c8b898;--shadow:rgba(139,69,19,.08);}
      body{background:var(--bg1);color:var(--ink1);background-image:repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(139,69,19,.03) 28px,rgba(139,69,19,.03) 29px);}
    `},
    {id: 'ink', name: '水墨山水', css: `
      :root{--bg1:#f0f2f5;--bg2:#e8eaed;--bg3:#dee2e6;--ink1:#1a1a1a;--ink2:#4a4a4a;--ink3:#6a6a6a;--accent1:#2c3e50;--accent2:#34495e;--border:#bdc3c7;--shadow:rgba(44,62,80,.08);}
      body{background:var(--bg1);color:var(--ink1);background-image:radial-gradient(circle at 50% 50%,rgba(44,62,80,.02) 0%,transparent 70%);}
    `},
    {id: 'bamboo', name: '竹簡漢簡', css: `
      :root{--bg1:#e8dcc0;--bg2:#dcccb0;--bg3:#d0c0a0;--ink1:#2a1a0a;--ink2:#4a3a2a;--ink3:#6a5a4a;--accent1:#5d4037;--accent2:#6d4c41;--border:#b0a080;--shadow:rgba(93,64,55,.08);}
      body{background:var(--bg1);color:var(--ink1);background-image:repeating-linear-gradient(90deg,transparent,transparent 22px,rgba(93,64,55,.04) 22px,rgba(93,64,55,.04) 23px);}
    `},
    {id: 'star', name: '星象羅盤', css: `
      :root{--bg1:#0f172a;--bg2:#1e293b;--bg3:#334155;--ink1:#e2e8f0;--ink2:#cbd5e1;--ink3:#94a3b8;--accent1:#f59e0b;--accent2:#d97706;--border:#475569;--shadow:rgba(245,158,11,.08);}
      body{background:var(--bg1);color:var(--ink1);background-image:radial-gradient(circle at 10% 20%,rgba(255,255,255,.03) 1px,transparent 1px),radial-gradient(circle at 30% 70%,rgba(255,255,255,.02) 1px,transparent 1px),radial-gradient(circle at 70% 40%,rgba(255,255,255,.03) 1px,transparent 1px);background-size:100px 100px,150px 150px,80px 80px;}
    `}
  ];

  // 加载已保存主题
  const savedTheme = localStorage.getItem('rucang_theme') || 'bronze';
  applyTheme(savedTheme);

  // 创建主题面板
  const panel = document.createElement('div');
  panel.className = 'theme-panel';
  themes.forEach(t => {
    const opt = document.createElement('div');
    opt.className = 'theme-option' + (t.id === savedTheme ? ' active' : '');
    opt.textContent = t.name;
    opt.dataset.id = t.id;
    opt.onclick = () => {
      applyTheme(t.id);
      panel.querySelectorAll('.theme-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      panel.classList.remove('show');
    };
    panel.appendChild(opt);
  });
  document.body.appendChild(panel);

  // 切换按钮点击
  document.getElementById('themeToggleBtn').onclick = (e) => {
    e.stopPropagation();
    panel.classList.toggle('show');
  };
  document.addEventListener('click', () => panel.classList.remove('show'));
  panel.onclick = (e) => e.stopPropagation();

  function applyTheme(id) {
    let style = document.getElementById('theme-style');
    if(!style){
      style = document.createElement('style');
      style.id = 'theme-style';
      document.head.appendChild(style);
    }
    const t = themes.find(x => x.id === id);
    style.textContent = t.css;
    localStorage.setItem('rucang_theme', id);
  }

  // 修复顶部导航（如果页面没有的话自动补）
  if(!document.querySelector('.nav-top')){
    const navHTML = `
    <nav class="nav-top" style="position:fixed;top:0;left:0;right:0;height:90px;background:var(--bg2);border-bottom:1px solid var(--border);z-index:200;display:flex;align-items:center;padding:0 30px 0 210px;gap:30px">
      <div class="brand" style="font-size:24px;font-weight:bold;color:var(--accent1);margin-right:30px">☰ 儒藏本体論 <small style="font-size:16px;color:var(--ink2);font-weight:normal;margin-left:12px">Confucian Canon</small></div>
      <a href="index.html" style="color:var(--ink2);text-decoration:none;font-size:18px;padding:8px 0">首頁</a>
      <a href="wujing.html" style="color:var(--ink2);text-decoration:none;font-size:18px;padding:8px 0">四書</a>
      <a href="wujing.html" style="color:var(--ink2);text-decoration:none;font-size:18px;padding:8px 0">五經</a>
      <a href="timeline.html" style="color:var(--ink2);text-decoration:none;font-size:18px;padding:8px 0">道脈</a>
      <a href="schools.html" style="color:var(--ink2);text-decoration:none;font-size:18px;padding:8px 0">流派</a>
      <a href="graph.html" style="color:var(--ink2);text-decoration:none;font-size:18px;padding:8px 0">圖譜</a>
      <a href="library.html" style="color:var(--ink2);text-decoration:none;font-size:18px;padding:8px 0">全文庫</a>
      <a href="ontology.html" style="color:var(--ink2);text-decoration:none;font-size:18px;padding:8px 0">本體</a>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    // 给body加顶部边距
    document.body.style.paddingTop = '90px';
  }
});
