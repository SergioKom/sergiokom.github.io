$(function(){

    $('.icon--menu').on('click', function () {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('.page__menu').removeClass('show');
        }
        else {
            $(this).addClass('opened');
            $('.page__menu').addClass('show');
        }
    });

    $('.icon--close').on('click', function () {
        if ($('.page__menu').hasClass('show')) {
            $('.page__menu').removeClass('show');
            $('.icon--menu').removeClass('opened');
        }
    });

    window.addEventListener('resize',function() {
        if ($(window).width() >= 1024) {
            $('.page__menu').removeClass('show');
            $('.icon--menu').removeClass('opened');
        }
    });

});