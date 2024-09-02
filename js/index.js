const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');

if(menu){
    menu.addEventListener('click', ()=>{
        navList.classList.toggle('open');
    })
}