(function ($) {
    'use strict';

    var $window = $(window);

    // ScrollUp
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }
    $window.on('scroll', function () {
        if ($window.scrollTop() > 798) {
            $('#scrollUp').css("display", "");
        } else {
            $('#scrollUp').css("display", "none");
        }
    });

    // Menu
    $window.on('scroll', function () {
        if ($window.scrollTop() > 48) {
            $('.header_area').addClass('sticky slideInDown');
            $('#scrollUp').css("display", "");
        } else {
            $('.header_area').removeClass('sticky slideInDown');
            $('#scrollUp').css("display", "none");
        }
    });

})(jQuery);