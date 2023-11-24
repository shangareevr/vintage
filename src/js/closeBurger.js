function closeBurger(){
  const burger = document.querySelector('.burger__menu');
  const menu = document.querySelector('.nav__wrapper');
  window.addEventListener('click', e=>{

    if(!e.target.closest('.nav__wrapper') && !e.target.closest('.burger__menu')){
      menu.classList.remove('open');
      burger.classList.remove('open');
    }
  })
  window.addEventListener('keydown', e=>{
    if(e.key === 'Escape'){
      menu.classList.remove('open');
      burger.classList.remove('open');
    }
  })
}
export {closeBurger};