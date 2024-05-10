// ==UserScript==
// @name         YouTube Fullscreen Title Hider
// @description  Tempermoney script for hiding video title in fullscreen mode on Youtube
// @version      1.0.0
// @author       sh4mim
// @homepageURL  https://github.com/sh-bd/YT-Fullscreen-Title-Hider#readme
// @supportURL   https://github.com/sh-bd/YT-Fullscreen-Title-Hider/issues
// @match        https://www.youtube.com/*
// @namespace    https://github.com/sh-bd/YT-Fullscreen-Title-Hider
// @downloadURL  https://github.com/sh-bd/YT-Fullscreen-Title-Hider/releases/latest/download/yt-fullscreen-title-hider.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to check if the video is in fullscreen mode
    function isFullscreen() {
        return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    }

    // Function to hide the title of the video
    function hideTitle() {
        var title = document.getElementsByClassName("ytp-title-link")[0];
        if (title) {
            title.style.display = "none";
        }
    }

    // Function to show the title of the video
    function showTitle() {
        var title = document.getElementsByClassName("ytp-title-link")[0];
        if (title) {
            title.style.display = "block";
        }
    }

    // Check if the video is in fullscreen mode
    setInterval(function() {
        if (isFullscreen()) {
            hideTitle();
        } else {
            showTitle();
        }
    });
})();