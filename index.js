const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener('click', function(){
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden');
    }
})