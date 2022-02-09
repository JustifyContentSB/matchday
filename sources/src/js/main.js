"use strict";

$(document).ready(function () {
    // Your code here
    matchSwiper()
    lectureSwiper()
    memeSwiper()
    giftManSwiper()
    giftWomanSwiper()
    navOpen()
    navClose()
});

// Your functions here

function matchSwiper() {
    var matchSwiper = new Swiper(".match__slider-container", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: false,
        speed: 500,
        navigation: {
            prevEl: ".match__prev",
            nextEl: ".match__next"
        },
    });
}

function lectureSwiper() {
    if ($(window).width() < 1024) {
        var lectureSwiper = new Swiper(".lecture__slider-container", {
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: false,
            navigation: {
                nextEl: ".lecture__next"
            },
        });
    }
}

function memeSwiper() {
    var memeSwiper = new Swiper(".meme__slider-container", {
        slidesPerView: 'auto',
        spaceBetween: 26,
        loop: false,
        navigation: {
            nextEl: ".meme__next"
        },
        breakpoints: {
            1280: {
                slidesPerView: 4,
                spaceBetween: 40,
                slidesPerGroup: 4,
            },
        },
    });
}

function giftManSwiper() {
    var giftManSwiper = new Swiper(".gift__slider-man .gift__slider-container", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: false,
        navigation: {
            prevEl: ".gift__slider-man .gift__prev",
            nextEl: ".gift__slider-man .gift__next"
        },
    });
}

function giftWomanSwiper() {
    var giftWomanSwiper = new Swiper(".gift__slider-woman .gift__slider-container", {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: false,
        navigation: {
            prevEl: ".gift__slider-woman .gift__prev",
            nextEl: ".gift__slider-woman .gift__next"
        },
    });
}

function navOpen() {
    $('.header__burger').on('click', function (e) {
        e.preventDefault();
        $('.header__nav').addClass('header__nav--active');
        $('body').addClass('no-scroll');
    });
}

function navClose() {
    $('.header__nav-close').on('click', function (e) {
        e.preventDefault();
        $('.header__nav').removeClass('header__nav--active');
        $('body').removeClass('no-scroll');
    });
}


document.addEventListener('DOMContentLoaded', function () {
    // конечная дата
    const deadline = new Date('2022-02-09 18:00:00');
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
});