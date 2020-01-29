function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(-${distance * speed}px)`;
}
function parallax2(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(-${(distance - h1) * speed}px)`;
}

window.addEventListener("scroll", function () {
    parallax(".first", window.scrollY, 0.4);
    parallax(".second", window.scrollY, 0.7);
    parallax(".third", window.scrollY, 0.3);
    parallax(".fourth", window.scrollY, 0.2);
})
let header = document.querySelector('.first-section');
let year = document.querySelector('.second-section');
let h = year.clientHeight;
let h1 = header.clientHeight;
console.log(h);

document.addEventListener('scroll', function(){
    if(scrollY > h){
        window.addEventListener("scroll", function () {
            parallax2(".y", window.scrollY, 0.6);
            parallax2(".e", window.scrollY, 0.4);
            parallax2(".a", window.scrollY, 0.3);
            parallax2(".r", window.scrollY, 0.5);
        });
    };
})