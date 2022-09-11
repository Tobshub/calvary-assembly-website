
class LinkDIV {
  constructor(elem){
    this.name = elem.id;
    elem.addEventListener('click', ()=>this.onClick(this.name));
    elem.addEventListener('focus', ()=>{
      window.addEventListener('keypress', e=>{
        if(e.code == 'Enter' &&
          document.activeElement.id == this.name){
          this.onClick(this.name);
        }
      }, {once: true})
    })
  }

  onClick(val) {
    changeURL(val);
  }

  
}

function changeURL(dir) {
  window.location = `./index/${dir}.html`;  
}

const eventsDiv = new LinkDIV(document.getElementById('events'));
const joinOnlineDiv = new LinkDIV(document.getElementById('join-online'));
const missionDiv = new LinkDIV(document.getElementById('mission'));