// 儒藏主题切换逻辑（仅注入按钮和切换功能，不改动任何现有布局）
(function() {
  const themes = [
    { id: 'bronze', icon: '鼎', name: '青銅吉金', desc: '玄黑金·商周銅器（默认）' },
    { id: 'paper', icon: '卷', name: '宣紙古籍', desc: '米黃朱紅·傳統注疏' },
    { id: 'ink', icon: '☁', name: '水墨山水', desc: '素白淡墨·文人寫意' },
    { id: 'bamboo', icon: '⺮', name: '竹簡漢簡', desc: '青竹墨·漢簡書風' },
    { id: 'starry', icon: '✦', name: '星象羅盤', desc: '深空藍·星空羅盤' }
  ];

  // 读取保存的主题，默认青铜（当前版本）
  const savedTheme = localStorage.getItem('rucang_theme') || 'bronze';
  applyTheme(savedTheme);

  // 等DOM加载完注入按钮
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeButton);
  } else {
    initThemeButton();
  }

  function initThemeButton() {
    const sidebar = document.querySelector('.sidebar-menu');
    if (!sidebar) return; // 没有侧边栏的页面不注入

    // 1. 创建主题切换按钮
    const btn = document.createElement('button');
    btn.className = 'theme-toggle-btn';
    btn.innerHTML = `<span class="icon">◐</span><span>主題切換</span>`;
    // 插入到侧边栏最顶部
    sidebar.parentElement.insertBefore(btn, sidebar);

    // 2. 创建主题面板
    const panel = document.createElement('div');
    panel.className = 'theme-panel';
    panel.innerHTML = themes.map(t => `
      <div class="theme-item ${t.id === savedTheme ? 'active' : ''}" data-theme="${t.id}">
        <span class="theme-icon">${t.icon}</span>
        <div>
          <div style="font-weight:500">${t.name}</div>
          <div style="font-size:12px; opacity:0.7; margin-top:2px">${t.desc}</div>
        </div>
      </div>
    `).join('');
    document.body.appendChild(panel);

    // 3. 按钮点击显示/隐藏面板
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.classList.toggle('show');
      // 定位到按钮旁边
      const btnRect = btn.getBoundingClientRect();
      panel.style.top = btnRect.top + 'px';
    });

    // 4. 点击主题切换
    panel.querySelectorAll('.theme-item').forEach(item => {
      item.addEventListener('click', () => {
        const themeId = item.dataset.theme;
        applyTheme(themeId);
        localStorage.setItem('rucang_theme', themeId);
        // 更新active状态
        panel.querySelectorAll('.theme-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        panel.classList.remove('show');
      });
    });

    // 5. 点击外部关闭面板
    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && e.target !== btn) {
        panel.classList.remove('show');
      }
    });
  }

  function applyTheme(themeId) {
    document.documentElement.setAttribute('data-theme', themeId);
    document.body.setAttribute('data-theme', themeId);
  }
})();

// 原有公共功能（字号切换、横排竖排等）完全保留
document.addEventListener('DOMContentLoaded', function() {
  // 字号调整
  const fontLargeBtn = document.getElementById('fontLarge');
  const fontSmallBtn = document.getElementById('fontSmall');
  if (fontLargeBtn) {
    fontLargeBtn.addEventListener('click', function() {
      document.body.classList.toggle('large-font');
      if (document.body.classList.contains('large-font')) {
        document.body.style.fontSize = '20px';
        localStorage.setItem('rucang_fontsize', 'large');
      } else {
        document.body.style.fontSize = '18px';
        localStorage.setItem('rucang_fontsize', 'normal');
      }
    });
  }
  if (fontSmallBtn) {
    fontSmallBtn.addEventListener('click', function() {
      document.body.classList.toggle('small-font');
    });
  }

  // 恢复字号
  const savedFont = localStorage.getItem('rucang_fontsize');
  if (savedFont === 'large') {
    document.body.style.fontSize = '20px';
  }

  // 竖排/横排切换
  const layoutBtn = document.getElementById('layoutToggle');
  if (layoutBtn) {
    layoutBtn.addEventListener('click', function() {
      const content = document.querySelector('.reading-content') || document.querySelector('.card');
      if (content) {
        content.classList.toggle('vertical-text');
        layoutBtn.textContent = content.classList.contains('vertical-text') ? '豎排' : '橫排';
      }
    });
  }

  // 全局搜索
  const searchInput = document.getElementById('globalSearch');
  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const q = this.value.trim();
        if (q) window.location.href = `dict.html?q=${encodeURIComponent(q)}`;
      }
    });
  }
});
