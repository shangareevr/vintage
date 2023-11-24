function closeSubMenu(){
  window.addEventListener('click', e=>{
    if(!e.target.closest('.nav__items')){
      const submenu = document.querySelector('.nav__submenu');
      submenu.classList.remove('open-submenu');
    }
  })
}
export {closeSubMenu};