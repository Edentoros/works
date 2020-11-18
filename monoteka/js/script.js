const search = document.querySelector('.nav__search')
const navbar = document.querySelector('.nav')
const searchBar = document.querySelector('.nav__search-input')
const radioButtonsOne = document.querySelectorAll('.input-one')
const radioButtonsTwo = document.querySelectorAll('.input-two')


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
        autoplay: true,
        autoplaySpeed: 1500
    });
});
$(document).ready(function () {
    $('.offer__menu').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,


    });
});