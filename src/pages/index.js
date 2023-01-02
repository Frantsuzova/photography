import "./index.css";
import $ from 'jquery'
let a = $;

(function (a) {
    "use strict";

    //сontact

    a(".contact-text").on('click', function () {
        a("body").addClass("contact-on");
    });
    a(".contact-close").on('click', function () {
        a("body").removeClass("contact-on");
    });


    //travel

    a(".travel").on('click', function () {
        a("body").addClass("travel-on");
    });
    a(".travel-close").on('click', function () {
        a("body").removeClass("travel-on");
    });


    //theater

    a(".theater").on('click', function () {
        a("body").addClass("theater-on");
    });
    a(".theater-close").on('click', function () {
        a("body").removeClass("theater-on");
    });


    //portrait

    a(".portrait").on('click', function () {
        a("body").addClass("portrait-on");
    });
    a(".portrait-close").on('click', function () {
        a("body").removeClass("portrait-on");
    });


})(jQuery);

//img antisave

const img = document.getElementsByTagName('img');

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('contextmenu', event => event.preventDefault());
}