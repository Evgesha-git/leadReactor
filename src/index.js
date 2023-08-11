import "./html/index.html";
import "./styles/index.scss";

import { animateGsap } from "./scripts/animate";

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


animateGsap();
