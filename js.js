$(function(){

    $('.icon_link').on('click', function () {
        event.preventDefault ();
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('.code_link_box').hide();
        }
        else {
            $(this).addClass('opened');
            $('.code_link_box').show();
        }
    });

})