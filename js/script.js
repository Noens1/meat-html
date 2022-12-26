$(function(){
    $('.commerce-slider').slick({
        slidesToShow: 1,
        nextArrow: `<button class="arrow arrow__right"><img src="images/arrow-rights.svg" alt="arrow right"></button>`,
        prevArrow: `<button class="arrow arrow__left"><img src="images/arrow-left.svg" alt="arrow left"></button>`,
        dots: true,
        dotsClass: 'commerce-slider__dots',
        responsive: [
            {
              breakpoint: 481,
              settings: {
                arrows: false,
              }
            },
        ]
    })

    $('.popular__slider').slick({
        slidesToShow: 1,
        arrows: false, 
        dots: true,
        dotsClass: 'popular__dots',
    })

    $('.catalog-product__slider').slick({
      slidesToShow: 1,
      arrows: false, 
      dots: true,
      dotsClass: 'catalog-product__dots',
  })

    $('.popular__heart').on({
      click: function(){
        $(this).toggleClass('active')
      },
    })

    $('.popular__cart').on('click', function(e){
      e.preventDefault();
      $(this).parent().next().toggleClass('active')
    })

    // MODAL

    $('#feedback').on('click', function(e){
      e.preventDefault();
      $('.modal_feedback').addClass('active');
    })

    $('.modal__close').on('click', function(e){
      e.preventDefault();
      $('.modal').removeClass('active');
    })

    $('.catalog__higher').on('click', function(e){
      e.preventDefault();
      $('.catalog__higher-dropdown').toggleClass('active');
    })

    $('.catalog-btn, .header-dropdown').on({
      mouseenter: function(e){
        e.preventDefault()
        $('.header-dropdown').addClass('active')
      },
      mouseleave: function(){
        $('.header-dropdown').removeClass('active')
      },
    })

    $('.header-btn').on('click', function(){
      $('.sidebar_main').addClass('active')
    })

    $('.sidebar__back').on('click', function(){
      $(this).parent().parent().removeClass('active')
    })

    $('#catalog').on('click', function(e){
      e.preventDefault();
      $('.sidebar_catalog').addClass('active')
    })

    $('#catalog').on('click', function(e){
      e.preventDefault();
      $('.sidebar_catalog').addClass('active')
    })

    $('#prize').on('click', function(e){
      e.preventDefault();
      $('.sidebar_prize').addClass('active')
    })


    $('.sidebar__close').on('click', function(){
      $('.sidebar').removeClass('active')
    })

});

let fileInput = document.querySelector('.modal__file')
let fileInputText = document.querySelector('.modal__file span')
let inputFile = document.querySelector('.modal__file input')

fileInput.addEventListener('click', function(){
  inputFile.click();
})