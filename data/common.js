// 儒藏本体论 公共脚本
const THEME_KEY = 'rz_theme';
const FONT_SIZE_KEY = 'rz_font_size';
const LAYOUT_KEY = 'rz_layout';

function applyTheme(theme) {
  const themes = {
    bronze: {
      '--bg': '#1a140f', '--card': '#251e17', '--gold': '#d4af37', '--light': '#e8d5a3',
      '--text': '#c9b99a', '--border': '#3d3225', '--accent': '#a83232'
    },
    paper: {
      '--bg': '#f5efe0', '--card': '#faf6eb', '--gold': '#8b4513', '--light': '#5c4033',
      '--text': '#3a2e23', '--border': '#d4c5a9', '--accent': '#8b0000'
    },
    ink: {
      '--bg': '#f0f0f0', '--card': '#ffffff', '--gold': '#2c2c2c', '--light': '#1a1a1a',
      '--text': '#333333', '--border': '#cccccc', '--accent': '#4a4a4a'
    },
    bamboo: {
      '--bg': '#f0e6c2', '--card': '#f8f1d6', '--gold': '#5c4a1f', '--light': '#3d3010',
      '--text': '#4a3c20', '--border': '#c9b886', '--accent': '#7a3010'
    },
    star: {
      '--bg': '#0f1425', '--card': '#161d35', '--gold': '#99aaff', '--light': '#c7d0ff',
      '--text': '#b0b9e0', '--border': '#2a3560', '--accent': '#667fff'
    }
  };
  const t = themes[theme] || themes.bronze;
  Object.keys(t).forEach(k => document.documentElement.style.setProperty(k, t[k]));
  localStorage.setItem(THEME_KEY, theme);
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'bronze';
  applyTheme(saved);
  
  function waitForSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar || sidebar.querySelector('.theme-btn')) {
      setTimeout(waitForSidebar, 100);
      return;
    }
    const themeBtn = document.createElement('div');
    themeBtn.className = 'sidebar-item theme-btn';
    themeBtn.innerHTML = '🌓 主題切換';
    themeBtn.style.cursor = 'pointer';
    sidebar.insertBefore(themeBtn, sidebar.firstChild);
    
    let panel = null;
    themeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (panel) { panel.remove(); panel = null; return; }
      panel = document.createElement('div');
      panel.style.cssText = 'position:fixed; left:220px; top:70px; background:var(--card); border:1px solid var(--gold); border-radius:8px; padding:16px; z-index:200; box-shadow:0 4px 20px rgba(0,0,0,0.5); min-width:160px;';
      panel.innerHTML = '<div style="font-size:16px; color:var(--gold); margin-bottom:12px; text-align:center;">选择主题</div>' +
        ['bronze:青銅吉金','paper:宣紙古籍','ink:水墨山水','bamboo:竹簡漢簡','star:星象羅盤'].map(t => {
          const [k, name] = t.split(':');
          return '<div class="theme-opt" data-k="' + k + '" style="padding:8px 16px; cursor:pointer; border-radius:4px; color:var(--text); transition:all 0.2s;" onmouseover="this.style.background=\'rgba(212,175,55,0.1)\'" onmouseout="this.style.background=\'transparent\'">' + name + '</div>';
        }).join('');
      document.body.appendChild(panel);
      panel.querySelectorAll('.theme-opt').forEach(opt => {
        opt.addEventListener('click', function() {
          applyTheme(this.dataset.k);
          panel.remove(); panel = null;
        });
      });
      setTimeout(() => document.addEventListener('click', function closeP() {
        if (panel) { panel.remove(); panel = null; }
        document.removeEventListener('click', closeP);
      }), 0);
    });
  }
  setTimeout(waitForSidebar, 100);
}

function initFontSize() {
  let size = parseInt(localStorage.getItem(FONT_SIZE_KEY)) || 18;
  function applySize() {
    document.documentElement.style.fontSize = size + 'px';
    const btn = document.getElementById('fontSizeBtn');
    if (btn) btn.textContent = '字号 ' + (size === 16 ? '小' : size === 18 ? '中' : size === 20 ? '大' : '特大');
  }
  applySize();
  setTimeout(() => {
    const btn = document.getElementById('fontSizeBtn');
    if (btn) btn.addEventListener('click', function() {
      size = size >= 22 ? 16 : size + 2;
      localStorage.setItem(FONT_SIZE_KEY, size);
      applySize();
    });
  }, 100);
}

function initLayoutToggle() {
  let vertical = localStorage.getItem(LAYOUT_KEY) === 'vertical';
  function applyLayout() {
    document.body.classList.toggle('vertical-layout', vertical);
    const btn = document.getElementById('layoutBtn');
    if (btn) btn.textContent = vertical ? '横排' : '竖排';
  }
  applyLayout();
  setTimeout(() => {
    const btn = document.getElementById('layoutBtn');
    if (btn) btn.addEventListener('click', function() {
      vertical = !vertical;
      localStorage.setItem(LAYOUT_KEY, vertical ? 'vertical' : 'horizontal');
      applyLayout();
    });
  }, 100);
}

function initPage() {
  initTheme();
  initFontSize();
  initLayoutToggle();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
