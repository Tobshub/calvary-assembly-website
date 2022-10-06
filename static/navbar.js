const navbar = document.querySelector('.nav-bar');
const nav_links = document.querySelectorAll('.nav-item');

class NavLink {
  constructor(elem){
    this.name = elem.id;
    this.dropdown = (elem.lastElementChild == elem.firstElementChild)? '' : elem.lastElementChild;
    this.state = {
      dropdownOpen: false,
    }
    elem.addEventListener('click',()=>{
      this.DropDown();
    })
    elem.addEventListener('mouseleave', ()=>{
      this.closeDropdown()
    })
  }

  DropDown(){
    if(this.dropdown === '') return;
    if (this.state.dropdownOpen) {
      this.dropdown.style.height = '0';
      this.dropdown.style.padding = '0';
      this.state.dropdownOpen = false;
    }
    else {
      this.dropdown.style.height = 'fit-content';
      this.dropdown.style.padding = '.5em .75em';
      this.state.dropdownOpen = true;
    }
  }
  closeDropdown() {
    if(this.dropdown === '') return;
    this.dropdown.style.height = '0';
    this.dropdown.style.padding = '0';
    this.state.dropdownOpen = false;
  }
}

for(let i = 0; i < nav_links.length; i++){
  new NavLink(nav_links[i]);
}

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
});


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

const mainEl = document.querySelector('.landing-page');

window.addEventListener('scroll',()=>{
  const mainRects = mainEl.getBoundingClientRect();

  if(mainRects.bottom <= 20) {
    document.documentElement.style.setProperty('--nav-bg-lightness', 10);
  } else {
    document.documentElement.style.setProperty('--nav-bg-lightness', 20);
  }
})

const headerToggle = document.getElementById('header-toggle');
const header = document.getElementById('header');
let headerOpen = false;

headerToggle.onclick = () => {
  if (headerOpen) {
    header.style.height = '0';
    headerOpen = false;
  } else {
    header.style.height = 'fit-content'
    headerOpen = true;
  }
}