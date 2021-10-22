/**
 * Ronijan
 * version 1.0.0
 * 2021
 * https://github.com/ronijan/cookie-banner
 */

const b = document.querySelector('.ro-container'),
    accept = document.querySelector('.ro-btn-accept');
if (!localStorage.COOKIES_MONTH) {
    b.style.display = "inherit";
} else {
    b.style.display = "none";
}

accept.addEventListener('click', function () {
    b.style.display = "none";
    let d = new Date(),
        m = d.getMonth() + 1;
    localStorage.COOKIES_MONTH = btoa(m.toString());
});

if (navigator.userAgent.match(/Opera|OPR\//)) {
    b.style.display = "inherit";
}