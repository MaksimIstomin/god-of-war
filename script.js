const burger = document.querySelector('.nav-left-burger')
const cardBtns = document.querySelectorAll('.editions-card-item-buy')
const modalClose = document.querySelector('.modal-close')
const modalPrice = document.querySelector('.modal-form-box-price')
burger.addEventListener('click',function(){
    burger.nextElementSibling.classList.toggle('show')
})

cardBtns.forEach(function (element, index) {
    element.addEventListener('click',function(){
        modalPrice.textContent = element.previousElementSibling.textContent
        document.body.firstElementChild.firstElementChild.style.display = 'flex'
    })
})
modalClose.addEventListener('click',()=>{
    modalClose.parentElement.parentElement.style.display = 'none'
})