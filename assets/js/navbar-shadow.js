
$(window).scroll(function () {
    var y = $(window).scrollTop();
    if (y > 0) {
        $("#global-navbar").addClass('--not-top');
    } else {
        $("#global-navbar").removeClass('--not-top');
    }
});