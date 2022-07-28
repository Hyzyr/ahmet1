let menu = document.getElementById("nav");
let menuBtn = document.getElementById("burger");
let body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};

// Slider
$(".intro__inner").slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
});
