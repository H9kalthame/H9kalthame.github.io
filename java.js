$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }
    });
    function smoothScroll(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            if ($(hash).length > 0) {
                smoothScroll(hash);

                history.pushState(null, null, hash);
            }
        }
    });
});
