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
closeBtn.addEventListener('click', ()=> closePanel(panel));
window.addEventListener('scroll', ()=> closePanel(panel));