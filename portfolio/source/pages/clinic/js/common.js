function isLS() {
    var mod = 'modernizr';
    try {
        localStorage.setItem(mod, mod);
        localStorage.removeItem(mod);
        return true;
    } catch (e) {
        return false;
    }
};

var CONST_ORDER_CITO_TEXT = "Срочно";
var CONST_ORDER_TEXT = "Заказать";
var CONST_ORDER_DEL_TEXT = "Удалить";
var CONST_TIME_BEF_RELOAD = 200;

var items;
var codes = [];
var codesCito = {};

function refreshListAaR() {
    if (isLS() && basketService) {
        items = basketService.getBasketItems();
        codes = [];
        codesCito = {};

        $('button.btn-order').not('.warning').text(CONST_ORDER_TEXT);
        $('button.btn-order.warning').text(CONST_ORDER_CITO_TEXT);

        $.each(items, function () {
            codes.push(this.serviceCode);
            codesCito[this.serviceCode] = this.cito;

        });

        $.each($('button.btn-order'), function () {
            var code = $(this).attr('data-code');
            if (code && code != '')
                if ($.inArray(code, codes) != -1) {
                    if (codesCito[code] === false) {
                        if (!$(this).hasClass('warning'))
                            $(this).text(CONST_ORDER_DEL_TEXT);
                    } else {
                        if ($(this).hasClass('warning'))
                            $(this).text(CONST_ORDER_DEL_TEXT);
                    }
                }
        });
        var homeOrder = localStorage.getItem('cmd-homeorder');
        if (homeOrder) {
            homeOrder = JSON.parse(homeOrder);
            $.each($('.home-order-checkbox'), function () {
                var code = $(this).attr('data-code');
                if (code && code != '')
                    if ($.inArray(code, homeOrder) != -1) {
                        $(this).prev().addClass('chekbox-active')
                    } else {
                        if ($(this).prev().hasClass('chekbox-active')) {
                            $(this).prev().removeClass('chekbox-active');
                        }
                    }
            });
        }
    }
}

function addGroupToCart(th, group) {
    $(th).html('<p style="line-height: 48px">В корзине</p>');
    $(th).css('background', '#00b388');
    $(th).css('color', '#fff');
    $(th).removeClass('btn--dark');

    $.each(ordersGroup[group], function () {
        addOrder(this, false);
    });

    setTimeout(function () {
        $(".basket > div.order-widget > a").addClass("hilight")
    }, 300);
    setTimeout(function () {
        $(".basket > div.order-widget > a").removeClass("hilight")
    }, 600);
    setTimeout(function () {
        $(".basket > div.order-widget > a").addClass("hilight")
    }, 900);
    setTimeout(function () {
        $(".basket > div.order-widget > a").removeClass("hilight")
    }, 1200);
    setTimeout(function () {
        $(".basket > div.order-widget > a").addClass("hilight")
    }, 1500);
    setTimeout(function () {
        $(".basket > div.order-widget > a").removeClass("hilight")
    }, 1800);

    //$("html, body").animate({scrollTop: 0}, '500', 'swing');

}

function clickOrder(th, code, cito) {
    $(th).html('В корзине');
    
    $(th).css('color', '#fff');
    $(th).removeClass('btn--dark');

    addOrder(code, cito);
}
function addOrder(code, cito) {
    //var code = $(this).attr('data-code').trim();
    //var code = $.trim($(this).attr('data-code'));
    //var cito = false;
    var currentState = $(this).text();

    if (basketService) {
        if (code && code != '')
            if ($.inArray(code, codes) != -1) {
                //already in basket
                console.log('already in basket');
                console.log(code);
                console.log(basketService);

                if (codesCito[this.serviceCode] !== cito && currentState != CONST_ORDER_DEL_TEXT) {
                    basketService.updateBasketItem(code, {"cito": cito});
                    $(this).text(CONST_ORDER_DEL_TEXT);
                } else {
                    basketService.deleteBasketItem(code);
                    var homeOrder = localStorage.getItem('cmd-homeorder');
                    if (homeOrder) {
                        homeOrder = JSON.parse(homeOrder);
                        for (var i = homeOrder.length - 1; i >= 0; i--) {
                            if (homeOrder[i] == code) {
                                homeOrder.splice(i, 1);
                            }
                        }
                        localStorage.setItem('cmd-homeorder', JSON.stringify(homeOrder));
                    }
                    if ($(this).hasClass('warning'))
                        $(this).text(CONST_ORDER_CITO_TEXT);
                    else
                        $(this).text(CONST_ORDER_TEXT);
                }
            } else {
                //if (currentState == CONST_ORDER_TEXT || currentState == CONST_ORDER_CITO_TEXT) {
                if (basketService.addBasketItem(code, cito)) {
                    //$(this).text(CONST_ORDER_DEL_TEXT);
                } else {
                    //alert('Ошибка при добавлении в корзину!');
                }
                /*
            } else {
                basketService.deleteBasketItem(code);
                var homeOrder = localStorage.getItem('cmd-homeorder');
                if (homeOrder) {
                    homeOrder = JSON.parse(homeOrder);
                    for (var i = homeOrder.length - 1; i >= 0; i--) {
                        if (homeOrder[i] == code) {
                            homeOrder.splice(i, 1);
                        }
                    }
                    localStorage.setItem('cmd-homeorder', JSON.stringify(homeOrder));
                }
                if ($(this).hasClass('warning'))
                    $(this).text(CONST_ORDER_CITO_TEXT);
                else
                    $(this).text(CONST_ORDER_TEXT);
            }*/
            }
    } else {
        console.log('basketService error');
    }
    refreshListAaR();
}

$(document).ready(function (e) {

    $('#basket-place-landing').basketinfolandingblue(LABOFFICE_CONFIG).basketinfolandingblue('render');
    $('#basket-place-landing-fix').basketinfolandingblue(LABOFFICE_CONFIG).basketinfolandingblue('render');

    if (isLS() && basketService) {
        try {
            items = basketService.getBasketItems();
        } catch (e) {
            basketService.clearBasket();
            console.log(e);
        }
    }

    refreshListAaR();

});


$(document).ready(function () {

    var USER_ID = document.body.getAttribute('data-u');

    var TIME_MS_IN_DAY = 1000 * 60 * 60 * 24;
    var PREORDER_LIFETIME = 365;

    $(function () {
        $.payCallback(LABOFFICE_CONFIG).always(function () {
            $('#previous-orders').orderlistMP(LABOFFICE_CONFIG).orderlistMP('render');
            $('#basket-mini-landing').basketinfolanding(LABOFFICE_CONFIG).basketinfolanding('render');
        });
    });

    $('#basket-mini-landing').basketinfolandingblue(LABOFFICE_CONFIG).basketinfolandingblue('render');

    function dotDate(data) {
        var today = new Date(data);
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = dd + '.' + mm + '.' + yyyy;
        return today;
    }

//BX.Vue.create({


    //получение кук
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    /*function fixedHeaderControll() {
        yy = window.pageYOffset > 72 ? 0 : -100;
        $('.fixedHeader').css('top', yy);
    }
    document.onscroll = fixedHeaderControll;
    fixedHeaderControll();*/
});


function blink (th) {
    th.css("border","1px #aaa solid");
    setTimeout(function() {
        th.css("transition", "1s");
        th.css("border", "1px #f8485e solid");
        setTimeout(function () {
            th.css("border", "1px #aaa solid")
        }, 2000);
    }, 50);
}

$(document).ready(function (e) {

    $(".test1 .fastButton").click(function() {
        $(".test1 .q").hide();
        $(".test1 .a").show();
    });
    $(".test1 .nextTest").click(function() {
        $(".test1 .q").show();
        $(".test1 .a").hide();
        $(".test1").hide();
        $(".test2").show();
    });
    $(".test2 .fastButton").click(function() {
        $(".test2 .q").hide();
        $(".test2 .a").show();
    });
    $(".test2 .nextTest").click(function() {
        $(".test2 .q").show();
        $(".test2 .a").hide();
        $(".test2").hide();
        $(".test3").show();
    });
    $(".test3 .fastButton").click(function() {
        $(".test3 .q").hide();
        $(".test3 .a").show();
    });
    $(".test3 .nextTest").click(function() {
        $(".test3 .q").show();
        $(".test3 .a").hide();
        $(".test3").hide();
        $(".test1").show();
    });

});

