function openBurger(){
  document.querySelector('.burger__menu').addEventListener('click',()=>{
    document.querySelector('.nav__wrapper').classList.toggle('open');
    document.querySelector('.burger__menu').classList.toggle('open');
  })
}
export {openBurger};