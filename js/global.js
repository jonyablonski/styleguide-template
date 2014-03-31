(function (window, document, undefined) {

    'use strict';

    /**
    * Selectors
    */

    var body = document.body;
    var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
    var media = window.matchMedia("(min-width:1024px)");


    /**
    * Methods
    */


    function stickyNav() {

        var pageNav = document.getElementById('js-page-nav');
        var pageNavTop = pageNav.offsetTop;

        if (window.pageYOffset > pageNavTop+60) {
            pageNav.classList.add('is-fixed');
        } else {
            pageNav.classList.remove('is-fixed');
        }

        requestAnimationFrame(stickyNav);

    }

    requestAnimationFrame(stickyNav);

    /**
    * Events/APIs/init
    */

    (function checkSize() {

        if(media.matches) {
        } else {
        }

    })();



})(window, document);
