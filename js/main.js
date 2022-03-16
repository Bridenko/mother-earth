window.addEventListener('DOMContentLoaded', () => {

    /* Header background color - start */

    (function () {
        const header = document.querySelector('.header');
        window.onscroll = () => {
            if (window.pageYOffset > 20) {
                header.classList.add('header-background-opacity-25');
            } else {
                header.classList.remove('header-background-opacity-25');
            }

            if (window.pageYOffset > 40) {
                header.classList.add('header-background-opacity-50');
            } else {
                header.classList.remove('header-background-opacity-50');
            }

            if (window.pageYOffset > 60) {
                header.classList.add('header-background-opacity-75');
            } else {
                header.classList.remove('header-background-opacity-75');
            }

            if (window.pageYOffset > 80) {
                header.classList.add('header-background-opacity-100');
            } else {
                header.classList.remove('header-background-opacity-100');
            }
        }
    }());


    /* Header background color - end */

    /* Header burger menu - start */

    (function () {
        const burgerItem = document.querySelector('.header-burger'); /* При нажатии на бургер */
        const menu = document.querySelector('.header-menu'); /* Ищем меню */
        const menuCloseItem = document.querySelector('.header-menu__close-button'); /* Нажимая на кнопу close закрываем выпадающее меню */
        const menuLinks = document.querySelectorAll('.header-menu__link'); /* При нажатии на ссылки закрывается выпадающее меню */
        burgerItem.addEventListener('click', () => {
            /* Активируем выпадающее меню */
            menu.classList.add('header-menu-active')
        });
        menuCloseItem.addEventListener('click', () => {
            /* Нажимая на кнопу close закрываем выпадающее меню */
            menu.classList.remove('header-menu-active')
        });
        if (window.innerWidth <= 5000) {
            for (let i = 0; i < menuLinks.length; i += 1) {
                /* При нажатии на ссылки закрывается выпадающее меню */
                menuLinks[i].addEventListener('click', () => {
                    menu.classList.remove('header-menu-active');
                });
            };
        };
    }());



    /* Header burger menu - end */

    /* Scroll for item menu - start */

    (function () {

        const smoothScroll = function (targetEl, duration) {
            const headerElHeight = document.querySelector('.header').clientHeight;
            let target = document.querySelector(targetEl);
            let targetPosition = target.getBoundingClientRect().top - headerElHeight;
            let startPosition = window.pageYOffset;
            let startTime = null;

            const ease = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };

            const animation = function (currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, targetPosition, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };
            requestAnimationFrame(animation);

        };

        const scrollTo = function () {
            const links = document.querySelectorAll('.js-scroll');
            links.forEach(each => {
                each.addEventListener('click', function () {
                    const currentTarget = this.getAttribute('href');
                    smoothScroll(currentTarget, 1000);
                });
            });
        };
        scrollTo();
    }());

    /* Scroll for item menu - end */

    // Animation on scroll - srart

    const animItems = document.querySelectorAll('.anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        animOnScroll ();
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 2;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('active-anim');
                } else {
                    if (animItem.classList.contains('anim-no-hide')) {
                        animItem.classList.remove('active-anim');
                    }
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }
    }

    // Animation on scroll - srart

    // Slider - start

    $('.slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: 'ease-in-out',
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
    });

    // Slider - end

});