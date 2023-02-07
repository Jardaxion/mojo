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

    $('.js-open-catalog').hover(() => onMenu('.header__catalog', '.header__search'))
    $('.header__catalog').hover(() => 0, () => offMenu('.header__catalog', '.header__search'))
    $('.header__link:not(.js-open-catalog)').hover(() => offMenu('.header__catalog'));

    $('.js-open-search').hover(() => onMenu('.header__search', '.header__catalog'))
    $('.header__search').hover(() => 0, () => offMenu('.header__search', '.header__catalog'))
    $('.header__link:not(.js-open-search)').hover(() => offMenu('.header__search'));
})

let onMenu = (className, secondClassName) => {
    if($('.header').hasClass('abs')){
        $('.header').addClass('grey');
    }

    $(secondClassName).fadeOut();

    $(className).fadeIn();
}

let offMenu = (className, secondClassName) => {
    if($('.header').hasClass('abs')){
        $('.header').removeClass('grey');
    }

    $(secondClassName).fadeOut();

    $(className).fadeOut();
}