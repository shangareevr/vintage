function openModal(){
  const modal = document.querySelector('.request');
  document.querySelector('.header__request').addEventListener('click',e=>{
    modal.classList.toggle('open');
  })
}
export {openModal};