const rccgLogo = document.getElementById("rccg-logo");

function goToRCCG() {
  window.location = 'https://www.rccg.org/#'; 
}

rccgLogo.addEventListener('click', goToRCCG);
rccgLogo.addEventListener('focus', ()=>{
  window.addEventListener('keypress', e=>{
    if(e.code == 'Enter' && 
      document.activeElement == rccgLogo){
      goToRCCG();
    }
  }, {once: true});
})