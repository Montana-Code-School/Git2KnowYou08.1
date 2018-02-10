$(function() {
function pulsate(img) {
    $(img || this).delay(3050).fadeOut(300).delay(6050).fadeIn(300, pulsate);
}
    pulsate($('.cone'))
});
