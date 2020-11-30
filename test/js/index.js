$('.main__percent').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$('.main__rating-number').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(now.toFixed(1));
        }
    });
});
$('.main__percent-dec').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$('.members__count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text(now.toFixed(1) + "%");
        }
    });
});
$('.members__amount').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.round(now));
        }
    });
});
$('.members__percent').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text("+" + now.toFixed(1) + "%");
        }
    });
});
$('.members__percent-last').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text("-" + now.toFixed(1) + "%");
        }
    });
});