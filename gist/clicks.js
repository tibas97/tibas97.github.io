/*global $*/
/*jslint sloppy:true, browser: true, white: true*/
$("h1.page-title").text("My code is better than yours!");
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX});
});

$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX,
                       top: e.pageY});
});



$(window).on('mousemove', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    $('.logo').toggleClass('rotated');
});

setInterval(function () {
    $('.logo').css({
        'margin-left': 200 * Math.random() - 100
    });
}, 200);

function randomMargin() {
    return Math.random() * 200 - 100;
}
setInterval(function () {
    $('.logo').css({
        'margin-left': randomMargin(),
        'margin-top': randomMargin()
    });
}, 200);



var x = $(window).width() / 2;
var y = $(window).height() / 2;
var theta = 0;
var vtheta = Math.PI / 180;
var r = 60;
setInterval(function () {
    $('.logo').css({
        'left': x + r * Math.cos(theta),
        'top': y + r * Math.sin(theta)
    });
    theta = theta + vtheta;
}, 20);