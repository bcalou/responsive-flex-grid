$(document).ready(function () {

    var windowWidth = window.innerWidth;
    if (windowWidth > '899') {
        var position = $(window).scrollTop();
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var MaxWidth = {
                "max-width": "20%"
            };
            if (scroll > position) {
                $('.header').css('max-height', "10%");
                $('.header__menu').hide();
                $('.header__logo img').css('max-width', '20%');

                $('.header__burger').css('margin-top', "-50px");
                $('.header__last').css('margin-top', "-50px");


            } else if (scroll == 0) {
                $('.header').css('max-height', "unset");
                $('.header__menu').show();

                $('.header__logo  img').css('max-width', '35%');

                $('.header__burger').css('margin-top', "unset");
                $('.header__last').css('margin-top', "unset");

            }
            position = scroll;
        });
    }

});