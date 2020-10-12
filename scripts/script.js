$(document).ready(function () {
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'focus'
})