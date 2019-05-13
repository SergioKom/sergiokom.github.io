$(function(){

    $('.icon_link').on('click', function () {
        event.preventDefault ();
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $(this).children('.code_link_box').hide();
        }
        else {
            $(this).addClass('opened');
            $(this).children('.code_link_box').show();
        }
    });

    // $('.icon_link').on('mouseover', function () {
    //     event.preventDefault ();
    //     $(this).children('.code_link_box').show();
    // });
    // $('.icon_link').on('mouseout', function () {
    //     event.preventDefault ();
    //     $(this).children('.code_link_box').hide();  
    // });


})