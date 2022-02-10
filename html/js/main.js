"use strict";

$(document).ready(function () {
  // Your code here
  matchSwiper();
  lectureSwiper();
  memeSwiper();
  giftManSwiper();
  giftWomanSwiper();
  navOpen();
  navClose();
  music();
}); // Your functions here

function matchSwiper() {
  var matchSwiper = new Swiper(".match__slider-container", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    speed: 500,
    navigation: {
      prevEl: ".match__prev",
      nextEl: ".match__next"
    }
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
      }
    });
  }
}

function memeSwiper() {
  var memeSwiper = new Swiper(".meme__slider-container", {
    slidesPerView: 'auto',
    spaceBetween: 26,
    loop: false,
    navigation: {
      prevEl: ".meme__prev",
      nextEl: ".meme__next"
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 4
      }
    }
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
    }
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
    }
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
  var deadline = new Date('2032-02-12 18:00:00'); // id таймера

  var timerId = null; // склонение числительных

  function declensionNum(num, words) {
    return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
  } // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов


  function countdownTimer() {
    var diff = deadline - new Date();

    if (diff <= 0) {
      clearInterval(timerId);
    }

    var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  } // получаем элементы, содержащие компоненты даты


  var $hours = document.querySelector('.timer__hours');
  var $minutes = document.querySelector('.timer__minutes');
  var $seconds = document.querySelector('.timer__seconds'); // вызываем функцию countdownTimer

  countdownTimer(); // вызываем функцию countdownTimer каждую секунду

  timerId = setInterval(countdownTimer, 1000);
});

function music() {
  $('.music__toggle').on('click', function (e) {
    e.preventDefault();
    $('.music__inner').addClass('music__inner--active');
  });
  $('.music__top-toggle').on('click', function (e) {
    e.preventDefault();
    $('.music__inner').toggleClass('music__inner--active');
  });
}

var track = document.getElementById("track");
var trackArtist = document.getElementById("track-artist");
var trackTitle = document.getElementById("track-title");
var durationTime = document.getElementById("durationTime");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var pause2 = document.getElementById("pause2");
var next = document.getElementById("next-track");
var prev = document.getElementById("prev-track");
trackIndex = 0;
tracks = ["https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3", "https://res.cloudinary.com/cbanlawi/video/upload/v1614144520/Justin_Bieber-Yummy_vercib.mp3", "https://res.cloudinary.com/cbanlawi/video/upload/v1614186705/Loud_Luxury_ft._Brando_-_Body_fm7cdr.mp3"];
trackArtists = ["Harry Styles", "Justin Bieber", "Loud Luxury ft. Brando"];
trackTitles = ["Watermelon Sugar", "Yummy", "Body"];
var playing = true;

function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";
    track.play();
    playing = false;
  } else {
    pause.style.display = "none";
    play.style.display = "block";
    track.pause();
    playing = true;
  }
}

function pausePlay2() {
  pause.style.display = "none";
  play.style.display = "block";
  track.pause();
  playing = true;
}

play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);
pause2.addEventListener("click", pausePlay2);
track.addEventListener("ended", nextTrack);

function nextTrack() {
  trackIndex++;

  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }

  track.src = tracks[trackIndex];
  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];
  playing = true;
  pausePlay();
}

next.addEventListener("click", nextTrack);

function prevTrack() {
  trackIndex--;

  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }

  track.src = tracks[trackIndex];
  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];
  playing = true;
  pausePlay();
}

prev.addEventListener("click", prevTrack);

function progressValue() {
  durationTime.textContent = formatTime(track.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
  var minutes = Math.floor(sec / 60);
  var seconds = Math.floor(sec - minutes * 60);

  if (seconds < 10) {
    seconds = "0".concat(seconds);
  }

  return "".concat(minutes, ":").concat(seconds);
}