$(document).ready(function() {
    let slider = new Swiper('.slider', {
        autoplay: true,
        navigation: {
            nextEl: '.slider__rightArrow',
            prevEl: '.slider__leftArrow'
        },
        pagination: {
            el: '.slider__pagination',
            type: 'fraction'
        }
    })

    let slideProduct = new Swiper('.product__slider', {
        autoplay: false,
        pagination: {
            el: '.product__slider-pagination',
            clickable: true,
        }
    })

    let slideULike = new Swiper('.uLike__content', {
        spaceBetween: 51,
        slidesPerView: 4,
        navigation: {
            nextEl: '.uLike__rightArrow',
            prevEl: '.uLike__leftArrow'
        }
    })

    $('.product__downBox-ex').on('click', function() {
        $(this).toggleClass('active');

        $(this).parent().next().next().slideToggle();
    })

    $('.js-open-select').on('click', function(e) {
        e.preventDefault();

        $('.js-open-select.active').removeClass('active');
        $(this).addClass('active');

        $('.header__column-selected.active').removeClass('active');
        $('.header__column-selected[data-select="' + $(this).data('select') + '"]').addClass('active');
    })

    $('.js-open-catalog').on('click', function(e) {
        e.preventDefault();

        if($('.header').hasClass('abs') && !$('.header__search').is(':visible')){
            $('.header').toggleClass('grey');
        }
        
        $('.header__search').fadeOut();


        $('.header__catalog').fadeToggle();
    })

    $('.js-open-search').on('click', function(e) {
        e.preventDefault();

        if($('.header').hasClass('abs') && !$('.header__catalog').is(':visible')){
            $('.header').toggleClass('grey');
        }

        $('.header__catalog').fadeOut();


        $('.header__search').fadeToggle();
    })
})