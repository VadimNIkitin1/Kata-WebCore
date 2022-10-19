import '../src/scss/style.scss'

const btnCall = document.querySelector('#btn-call')
const btnFeedback = document.querySelector('#btn-feedback')
const modalCall = document.querySelector('#modal-call')
const modalFeedback = document.querySelector('#modal-feedback')
const btnCloseF = document.querySelector('#cls-modl-f')
const btnCloseC = document.querySelector('#cls-modl-c')
const modalBtns = document.querySelector('.modal__btn-cls')

const btnText = document.querySelector('#text-btn')
const newText = document.querySelector('#new-text')

const btnBrands = document.querySelector('#brands-btn')
const newBrands = document.querySelectorAll('.brands-wrap')

const btnTypeTech = document.querySelector('#btn-type-tech')
const wrapTypeTech = document.querySelector('.type-tech-wrap')

const servicesTab = document.querySelectorAll('[data-tab]')
const elementsTab = document.querySelectorAll('.services__item')

const mobMenuTab = document.querySelectorAll('[data-tabMob]')
const mobElMenuTab = document.querySelectorAll('.mob-menu__item')

const burgerBtn = document.querySelector('#burger')
const closeMobMenuBtn = document.querySelector('#close-mob-menu')
const mobileMenu = document.querySelector('#mob-menu')

const navBtnCMob = document.querySelector('#navBtn-call')

const closeModalCMob = document.querySelector('#cls-modl-c-mob')
const closeModalFeedMob = document.querySelector('#cls-modl-f-mob')

// Close Modal Mobile

closeModalCMob.addEventListener('click', () => {
  modalCall.classList.add('none')
})
closeModalFeedMob.addEventListener('click', () => {
  modalFeedback.classList.add('none')
})

// Open and close mobile menu

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('none')
})
closeMobMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('none')
})

// Close mobile menu by fade

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('none')
})

mobileMenu
  .querySelector('.mob-menu__container')
  .addEventListener('click', (e) => {
    e.stopPropagation()
  })

// Open modal

btnCall.addEventListener('click', () => {
  modalCall.classList.remove('none')
})
btnFeedback.addEventListener('click', () => {
  modalFeedback.classList.remove('none')
})

// navBtnCMob.addEventListener("click", () => {
//   modalCall.classList.remove("none");
// });

// Close modal by button

btnCloseC.addEventListener('click', () => {
  modalCall.classList.add('none')
})
btnCloseF.addEventListener('click', () => {
  modalFeedback.classList.add('none')
})

// Close modal by fade

modalCall.addEventListener('click', () => {
  modalCall.classList.add('none')
})
modalFeedback.addEventListener('click', () => {
  modalFeedback.classList.add('none')
})

modalCall.querySelector('.modal__container').addEventListener('click', (e) => {
  e.stopPropagation()
})
modalFeedback
  .querySelector('.modal__container')
  .addEventListener('click', (e) => {
    e.stopPropagation()
  })

// Close text info

btnText.addEventListener('click', () => {
  if (newText.classList.toggle('none')) {
    btnText.textContent = 'Читать далее'
  } else {
    btnText.textContent = 'Скрыть'
  }
})

// Close open new brands

btnBrands.addEventListener('click', () => {
  newBrands.forEach((i) => {
    if (i.classList.toggle('brands-wrap')) {
      btnBrands.textContent = 'Показать все'
    } else {
      btnBrands.textContent = 'Скрыть'
    }
  })
})

// Close open type tech

btnTypeTech.addEventListener('click', () => {
  if (wrapTypeTech.classList.toggle('type-tech-wrap')) {
    btnTypeTech.textContent = 'Показать все'
  } else {
    btnTypeTech.textContent = 'Скрыть'
  }
})

// Title tab

servicesTab.forEach((i) => {
  i.addEventListener('click', () => {
    elementsTab.forEach((item) => {
      item.classList.remove('marked')

      const elTab = document.querySelector('#' + i.dataset.tab)
      elTab.classList.add('marked')
    })
  })
})

// Mobile menu tab

mobMenuTab.forEach((i) => {
  i.addEventListener('click', () => {
    mobElMenuTab.forEach((item) => {
      item.classList.remove('mob-marked')
    })
    const elTab = document.querySelector('#' + i.dataset.tabmob)
    elTab.classList.add('mob-marked')
  })
})

// Slider

let swiper
function mobileSlider() {
  if (window.innerWidth < 768) {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1.22,
      spaceBetween: 16,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        dynamicBullets: true,
        dynamicMainBullets: 8
      }
    })
  } else {
    if (swiper) {
      swiper.forEach((e) => {
        e.destroy()
      })
    }
  }
}

mobileSlider()
window.addEventListener('resize', mobileSlider)
