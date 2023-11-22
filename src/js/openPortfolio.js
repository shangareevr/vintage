function openPortfolio(){
  document.querySelector('.portfolio__btn').addEventListener('click',()=>{
    document.querySelector('.portfolio__content').classList.add('hide');
  })
}
export {openPortfolio};