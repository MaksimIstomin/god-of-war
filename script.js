const swiper = new Swiper('.swiper', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 3,
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

const closeFaq1 = document.querySelector('.c-f-1')
const closeFaq2 = document.querySelector('.c-f-2')
const unv1 = document.querySelector('.unv-1')
const unv2 = document.querySelector('.unv-2')


burger.addEventListener('click', function () {
    burger.nextElementSibling.classList.toggle('show')
})

cardBtns.forEach(function (element, index) {
    element.addEventListener('click', function () {
        modalPrice.textContent = element.previousElementSibling.textContent
        document.body.firstElementChild.firstElementChild.style.display = 'flex'
    })
})
modalClose.addEventListener('click', () => {
    modalClose.parentElement.parentElement.style.display = 'none'
})

modalClose.addEventListener('click', () => {
    modalClose.unvisibleFaq.style.display = 'none'
})


closeFaq1.addEventListener('click', () => {
    if (unv1.style.display === 'none' || unv1.style.display === '') {
        unv1.style.display = 'block'
    } else {
        unv1.style.display = 'none'
    }
})
closeFaq2.addEventListener('click', () => {
    if (unv2.style.display === 'none' || unv2.style.display === '') {
        unv2.style.display = 'block'
    } else {
        unv2.style.display = 'none'
    }
})




const PCn = document.querySelectorAll('.PCn')
const psn = document.querySelectorAll('.PSn')
const pc = document.querySelectorAll('.PC')
const ps = document.querySelectorAll('.PS')
const exCS = document.querySelectorAll('.explore-card-switch')

exCS.forEach(btn => {
    btn.addEventListener('click', () => {
        PCn.forEach(el => el.classList.toggle('hidden'))
        psn.forEach(el => el.classList.toggle('hidden'))
        pc.forEach(el => el.classList.toggle('hidden'))
        ps.forEach(el => el.classList.toggle('hidden'))
    })
})

console.log(cardBtns)
