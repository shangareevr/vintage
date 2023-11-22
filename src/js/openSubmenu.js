function openSubmenu(){
  const btn = document.querySelector('.nav__items');
  btn.addEventListener('click', ()=>{
    document.querySelector('.nav__img').classList.toggle('rotate');
    document.querySelector('.nav__submenu').classList.toggle('open-submenu');
  })
}
export {openSubmenu};