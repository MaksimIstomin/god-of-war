const burger = document.querySelector('.nav-left-burger')
burger.addEventListener('click',function(){
    burger.nextElementSibling.classList.toggle('show')
})