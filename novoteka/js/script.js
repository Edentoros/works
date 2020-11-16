const search = document.querySelector('.nav__search')
const navbar = document.querySelector('.nav')
const searchBar = document.querySelector('.nav__search-input')


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
        autoplay: true,
        autoplaySpeed: 1500
    });
});