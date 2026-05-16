(function(){
  const copy={
    en:{thanks:'Thank you for visiting my academic homepage.',history:'View historical visits',map:'View visitor map'},
    zh:{thanks:'感谢你浏览我的学术主页。',history:'查看历史访问',map:'查看访客地图'}
  };
  function lang(){return localStorage.getItem('homepage-language')==='zh'?'zh':'en'}
  function markup(){const t=copy[lang()];return `<div class="visitor-compact"><p class="visitor-thanks">${t.thanks}</p><div class="visitor-real-links"><a class="visitor-real-link" href="https://analytics.google.com/analytics/web/" target="_blank" rel="noopener">${t.history}</a><a class="visitor-real-link" href="https://analytics.google.com/analytics/web/" target="_blank" rel="noopener">${t.map}</a></div></div>`}
  function render(){const panel=document.querySelector('.visitor-panel');if(panel)panel.innerHTML=markup()}
  document.addEventListener('DOMContentLoaded',function(){render();document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setTimeout(render,0)))})
})();