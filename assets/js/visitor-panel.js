(function(){
  const copy={
    en:{title:'Visitor Record',intro:'Thank you for visiting my academic homepage.',badge:'Welcome',history:'Historical Visits',historyText:'Monthly visitor trend of this homepage.',earlier:'Earlier',recent:'Recent',map:'Visitor Map',mapText:'Regional distribution of visits.',ea:'East Asia · —',na:'North America · —',eu:'Europe · —',au:'Oceania · —'},
    zh:{title:'访客记录',intro:'感谢你访问我的学术主页。',badge:'欢迎',history:'历史访问人数',historyText:'本主页的月度访问趋势。',earlier:'较早',recent:'最近',map:'访客地图',mapText:'访问来源地区分布。',ea:'东亚 · —',na:'北美 · —',eu:'欧洲 · —',au:'大洋洲 · —'}
  };
  function lang(){return localStorage.getItem('homepage-language')==='zh'?'zh':'en'}
  function markup(){const t=copy[lang()];return `
    <div class="visitor-top"><div><h2>${t.title}</h2><p>${t.intro}</p></div><span class="visitor-mode">${t.badge}</span></div>
    <div class="visitor-showcase">
      <article class="visitor-visual-card">
        <h3>${t.history}</h3><p>${t.historyText}</p>
        <div class="history-chart" aria-label="${t.history}"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
        <div class="history-axis"><span>${t.earlier}</span><span>${t.recent}</span></div>
      </article>
      <a class="map-admin-link" href="https://analytics.google.com/analytics/web/" target="_blank" rel="noopener" aria-label="${t.map}">
        <article class="visitor-visual-card"><h3>${t.map}</h3><p>${t.mapText}</p>
          <div class="visitor-map"><svg viewBox="0 0 760 300" role="img" aria-label="${t.map}"><path class="map-land" d="M106 98L152 70L216 83L245 118L224 150L175 146L152 180L111 160L78 127Z"/><path class="map-land" d="M230 175L264 190L284 233L258 276L224 246L205 204Z"/><path class="map-land" d="M356 92L402 74L448 92L436 128L388 134L348 118Z"/><path class="map-land" d="M388 136L444 142L470 198L438 252L390 228L366 174Z"/><path class="map-land" d="M474 84L558 64L658 90L684 136L630 170L560 150L518 182L474 140Z"/><path class="map-land" d="M610 210L666 218L694 248L660 268L606 252Z"/><circle class="map-dot" cx="550" cy="112" r="6"/><circle class="map-dot" cx="182" cy="118" r="6"/><circle class="map-dot" cx="402" cy="112" r="6"/><circle class="map-dot" cx="648" cy="238" r="6"/></svg><span class="map-label ea">${t.ea}</span><span class="map-label na">${t.na}</span><span class="map-label eu">${t.eu}</span><span class="map-label au">${t.au}</span></div>
        </article>
      </a>
    </div>`}
  function render(){const panel=document.querySelector('.visitor-panel');if(panel)panel.innerHTML=markup()}
  document.addEventListener('DOMContentLoaded',function(){render();document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setTimeout(render,0)))})
})();