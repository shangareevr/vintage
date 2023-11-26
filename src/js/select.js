function selectOpen(){
  const select = document.querySelector('.request__select');
  console.log(document.querySelector('.request__options'));
  select.addEventListener('click',e=>{
    console.log(document.querySelector('.request__options'));
    document.querySelector('.request__current').classList.toggle('no-border');
    document.querySelector('.request__options').classList.toggle('active');
    document.querySelectorAll('.request__option').forEach(option=>{
      option.addEventListener('click',e=>{
        document.querySelector('.request__current').innerText = option.innerText;
      })
    })
  })
}

function selectClose(){
  window.addEventListener('click', e=>{
    if(!e.target.closest('.request__options') && !e.target.closest('.request__current')){
      document.querySelector('.request__current').classList.remove('no-border');
      document.querySelector('.request__options').classList.remove('active');
    }
  })

}

export {selectOpen, selectClose};