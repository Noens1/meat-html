// const swiperProduct = new Swiper('.swiper-product-article', {
//   loop: false,
//   slidesPerView: 'auto',
//   slidesPerGroup: 1,
//   allowTouchMove: true,
//   freeMode: true,
//   navigation: {
//     nextEl: '.product-button-next',
//     prevEl: '.product-button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//   breakpoints: {
//     1313: {
//       slidesPerView: 5,
//     },
//     1025: {
//       slidesPerView: 4,
//     },
//     841: {
//       slidesPerView: 3,
//       freeMode: false,
//       allowTouchMove: false,
//     },
//   },
// });
// const swiperMoreIdeas = new Swiper('.swiperMoreIdeas', {
//   loop: false,
//   watchOverflow: true,
//   slidesPerView: 2,
//   slidesPerGroup: 2,
//   allowTouchMove: false,
//   spaceBetween: 20,
//   navigation: {
//     nextEl: '.moreideas-button-next',
//     prevEl: '.moreideas-button-prev',
//   },
//   breakpoints: {
//     1313: {
//       slidesPerView: 4,
//     },
//     1025: {
//       slidesPerView: 3,
//       watchOverflow: false,
//     },
//   },
// });
// const swiperSlide = new Swiper('.swiperslide', {
//   loop: false,
//   slidesPerView: 1,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

class TabList {
  constructor(buttonsContainer, tabs) {
    this.buttonsContainer = buttonsContainer;
    this.tabs = tabs;

    this.buttonsContainer?.addEventListener('click', event => {
      const index = event.target.closest('.help__button').dataset.value;

      this.openTab(index);
    });
  }
  openTab(index) {
    this.tabs.querySelector('.help__item--active').classList.remove('help__item--active');
    this.tabs.querySelector(`[data-content="${index}"]`).classList.add('help__item--active');
    this.buttonsContainer.querySelector('.help__button--active').classList.remove('help__button--active');
    this.buttonsContainer.querySelector(`[data-value="${index}"]`).classList.add('help__button--active');
  }
}
document.addEventListener('DOMContentLoaded', ()=>{
  const buttonsContainer = document.querySelector('.help__buttons');
  const tabs             = document.querySelector('.help__items');
  const tabList          = new TabList(buttonsContainer, tabs);
});

const items = document.querySelectorAll(".accordion-item__button");
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach(item => item.addEventListener('click', toggleAccordion));