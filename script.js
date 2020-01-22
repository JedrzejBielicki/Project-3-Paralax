function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
window.addEventListener("scroll", function () {
    parallax(".first", window.scrollY, 0.1);
    parallax(".second", window.scrollY, 0.5);
    parallax(".third", window.scrollY, 0.3);
    parallax(".fourth", window.scrollY, 0.2);
})