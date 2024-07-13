$(function(){
    'use strict';
    $(window).scroll(function () {
        // window.console.log($('.navbar').height()); //height of navbar
        // window.console.log($(window).scrollTop()); //مسافة عم انزلا بالسكرول
        var navbar = $('.navbar');

        $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled'): navbar.removeClass('scrolled');
     
    });


// deal with Tabs
$('.tab-switch li').click(function() {
    //add selected class to active link
    $(this).addClass('selected').siblings().removeClass('selected'); 

    //hide all dive
    $('.tabs-section .tabs-content > div').hide();

    //show div connected with this link
    $($(this).data('class')).show();
    
});
});