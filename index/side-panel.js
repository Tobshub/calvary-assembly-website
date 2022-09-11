const openButton = document.getElementById('panel-open');
const panel = document.getElementById('side-panel');
const closeBtn = document.getElementById('panel-close');

function openPanel(el){
  el.style.setProperty('--width', '50');
}

function closePanel(el){
  el.style.setProperty('--width', '0')
}

openButton.addEventListener('click', ()=> openPanel(panel));
openButton.addEventListener('focus', ()=>{
  window.addEventListener('keypress', e=>{
    if(e.code == 'Enter' &&
      document.activeElement == openButton){
      openPanel(panel);
    }
  }, {once: true});
})
closeBtn.addEventListener('click', ()=> closePanel(panel));
closeBtn.addEventListener('focus', ()=>{
  window.addEventListener('keypress', e=>{
    if(e.code == 'Enter' &&
      document.activeElement == closeBtn){
      closePanel(panel);
    }
  }, {once: true});
})
window.addEventListener('scroll', ()=> closePanel(panel));