const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView:3,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});






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