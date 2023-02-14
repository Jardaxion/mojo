$(document).ready(function() {
    let slider = new Swiper('.slider', {
        autoplay: true,
        autoplay: {
            delay: 5000,
        },
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

        $('.header__menu').removeClass('catalogActiveMini');
        $('.header__menu').addClass('catalogActive');

        $('.header__column-selected.active').removeClass('active');
        $('.header__column-selected[data-select="' + $(this).data('select') + '"]').addClass('active');
    })

    $('.js-open-catalog').hover(() => onMenu('.header__catalog', '.header__search', 371))
    $('.header__catalog').hover(() => 0, () => offMenu('.header__catalog', '.header__search'))

    $('.js-open-search').hover(() => onMenu('.header__search', '.header__catalog', 400))
    $('.header__search').hover(() => 0, () => offMenu('.header__search', '.header__catalog'))
})

let onMenu = (className, secondClassName, height) => {
    if($('.header').hasClass('abs')){
        $('.header').addClass('grey');
    }

    $(secondClassName).removeClass('active');
    $(className).addClass('active');
    if(className == '.header__search'){
        $('.header__menu').addClass('searchActive');
    } else {
        if($('.header__catalog .header__column-page:last-of-type .header__column:first-of-type').hasClass('active')){
            $('.header__menu').addClass('catalogActiveMini');
        } else {
            $('.header__menu').addClass('catalogActive');
        }
    }
}

let offMenu = (className, secondClassName, height) => {
    if($('.header').hasClass('abs')){
        $('.header').removeClass('grey');
    }

    $(className).removeClass('active');
    $(secondClassName).removeClass('active');
        $('.header__menu').removeClass('searchActive');
        $('.header__menu').removeClass('catalogActive');
        $('.header__menu').removeClass('catalogActiveMini');
    // $('.header__menu').animate({
    //     height: 0,
    //     display: 'none'
    // });
}
