function playSound(e) {
    let keyCode;

    if (e.type === "keydown") {
        keyCode = e.keyCode;
    }

    if (e.type === "click") {
        keyCode = e.currentTarget.dataset.key;
    }

    const keyDiv = document.querySelector(`[data-key="${keyCode}"]`);
    if (keyDiv === null) return;

    const soundName = keyDiv.querySelector(".drumKit__sound").textContent;
    const soundPath = `/assets/sounds/${soundName}.wav`;

    const audio = new Audio(soundPath);
    audio.currentTime = 0;
    audio.play();

    keyDiv.classList.add("active");
    setTimeout(() => keyDiv.classList.remove("active"), 150);
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".drumKit__key");
keys.forEach(key => key.addEventListener("click", playSound));