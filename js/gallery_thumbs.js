$(document).ready(function() {
  $("#lightSlider").lightSlider({
    item: 1,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,
    mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear", //'for jquery animation',////
    adaptiveHeight: true,
    
    speed: 800, //ms'
    auto: true,
    gallery: true,
    pauseOnHover: true,
    loop: true,
    slideEndAnimation: true,
    pause: 5000

    /*vertical: true,
    verticalHeight: 295,
    vThumbWidth: 50,
    thumbItem: 8,
    thumbMargin: 4,
    slideMargin: 0*/
  });
});
