(function ($) {
    "use strict";

    //сontact

    $(".contact-text").on('click', function () {
        $("body").addClass("contact-on");
    });
    $(".contact-close").on('click', function () {
        $("body").removeClass("contact-on");
    });


    //travel

    $(".travel").on('click', function () {
        $("body").addClass("travel-on");
    });
    $(".travel-close").on('click', function () {
        $("body").removeClass("travel-on");
    });


    //theater

    $(".theater").on('click', function () {
        $("body").addClass("theater-on");
    });
    $(".theater-close").on('click', function () {
        $("body").removeClass("theater-on");
    });


    //portrait

    $(".portrait").on('click', function () {
        $("body").addClass("portrait-on");
    });
    $(".portrait-close").on('click', function () {
        $("body").removeClass("portrait-on");
    });


})(jQuery);
