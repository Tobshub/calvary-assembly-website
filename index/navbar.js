const navbar = document.querySelector('.nav-bar');
const nav_links = document.querySelectorAll('.nav-item');

class NavLink {
  constructor(elem){
    this.name = elem.id;
    this.dropdown = (elem.lastElementChild == elem.firstElementChild)? '' : elem.lastElementChild;
    elem.addEventListener('mouseover',()=>{
      this.openDropDown(this.dropdown);
    })
    elem.addEventListener('mouseout',()=>{
      this.closeDropDown(this.dropdown);
    })
  }

  openDropDown(dropdown){
    if(dropdown == '') return;
    dropdown.style.height = '100px';
  }

  closeDropDown(dropdown){
    if(dropdown == '') return;
    dropdown.style.height = '';
  }

}

for(let i = 0; i < nav_links.length; i++){
  nav_links[i] = new NavLink(nav_links[i]);
}

