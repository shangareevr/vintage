function closeSubMenu(){
  window.addEventListener('click', e=>{
    console.log(e.target)
      if (document.querySelector('.nav__submenu').classList.contains('open-submenu') && !e.target.classList.contains('nav__items')){
        document.querySelector('.nav__img').classList.remove('rotate');
        document.querySelector('.nav__submenu').classList.remove('open-submenu');
      }
  })
}
export {closeSubMenu}