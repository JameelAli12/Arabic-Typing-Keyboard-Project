window.addEventListener("keydown", e => {
    if(!localStorage.getItem("fontAlertShown")) {
        alert("Please use Arabic font for better experience!")
        localStorage.setItem("fontAlertShown", "true");
    }
    
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0
    audio.play()
    audio.playbackRate = 2;
    key.classList.add("playing");

    function removeTransition(e) {
        if(e.propertyName !== "transform") return;
        this.classList.remove("playing")
    }
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener('transitionend',removeTransition))})
