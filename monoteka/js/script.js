const search = document.querySelector('.nav__search')
const navbar = document.querySelector('.nav')
const searchBar = document.querySelector('.nav__search-input')
const radioButtonsOne = document.querySelectorAll('.input-one')
const radioButtonsTwo = document.querySelectorAll('.input-two')
const burgerButton = document.querySelector('.burger__button')


radioButtonsOne.forEach(button => {

    button.addEventListener('click', function () {

        for (i = 0; i <= radioButtonsOne.length; i++) {

            this.closest('label').classList.add('active');
            radioButtonsOne[i].closest('label').classList.remove('active');
        }
    });
});
radioButtonsTwo.forEach(button => {

    button.addEventListener('click', function () {

        for (i = 0; i <= radioButtonsTwo.length; i++) {

            this.closest('label').classList.add('active');
            radioButtonsTwo[i].closest('label').classList.remove('active');
        }
    });
});




search.addEventListener('click', () => {
        search.classList.add('visible');
        searchBar.onfocus = function () {

            document.body.style.transitionDuration = '0.5s';
            document.body.style.opacity = 0.7;


        }
        searchBar.focus();

    },
    searchBar.onblur = function () {
        search.classList.remove('visible');

        document.body.style.transitionDuration = '0.5s';
        document.body.style.opacity = 1;



    }
)

$(document).ready(function () {
    $('.promo__slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1500

    });
});
$(document).ready(function () {
    $('.offer__menu').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1690,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1310,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 685,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
});

burgerButton.addEventListener('click', () => {
    document.querySelector('.burger__menu').classList.toggle('open');
    document.querySelector('.burger__menu-item').classList.toggle('open');
    burgerButton.classList.toggle('open')
    if (document.querySelector('.burger__menu').classList.contains('open')) {
        document.body.style.position = 'fixed'
    } else {
        document.body.style.position = 'static'
    }
})