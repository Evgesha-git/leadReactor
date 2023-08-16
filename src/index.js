import "./html/index.html";
import "./styles/index.scss";

import { animateGsap } from "./scripts/animate";
import { burger } from "./scripts/burger";

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video-background");
    const playButton = document.getElementById("playButton");

    // Функция для запуска видео
    if (!video) return;
    if (!playButton) return;
    function playVideo() {
        video.play();
    }

    // Запускаем видео при загрузке страницы
    playVideo();

    // Запускаем видео при клике на кнопку
    playButton.addEventListener("click", playVideo);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const container = document.querySelector(".mobile_nav");
        const button = container.querySelector(".burger");
        const menu = container.querySelector(".hide_nav");
        button.classList.remove("active");
        menu.classList.remove("active");
        document.body.classList.remove("active");

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

burger();

animateGsap();

window.addEventListener('load', () => {
    document.body.classList.remove('active');
    document.querySelector('.preloader').classList.remove('active');
})