
class LinkDIV {
  constructor(elem){
    this.name = elem.id;
    elem.addEventListener('click', this.onClick);
  }

  onClick() {
    changeURL(this.id);
  }

  
}

function changeURL(dir) {
  window.location = `./${dir}.html`;  
}

const eventsDiv = new LinkDIV(document.getElementById('events'));
const joinOnlineDiv = new LinkDIV(document.getElementById('join-online'));
const missionDiv = new LinkDIV(document.getElementById('mission'));