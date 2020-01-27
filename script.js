function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
window.addEventListener("scroll", function () {
    parallax(".first", window.scrollY, 0.4);
    parallax(".second", window.scrollY, 0.1);
    parallax(".third", window.scrollY, 0.3);
    parallax(".fourth", window.scrollY, 0.2);
})

const year = document.querySelector('.about');



function pxCounter() {

    window.addEventListener("scroll", function () {
        parallax(".y", window.scrollY, 0.1);
        parallax(".e", window.scrollY, 0.5);
        parallax(".a", window.scrollY, 0.3);
        parallax(".r", window.scrollY, 0.2);
    });

}

window.addEventListener('scroll', debounce(pxCounter));







