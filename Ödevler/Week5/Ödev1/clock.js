let isim = prompt("İsminizi giriniz:");
document.querySelector(".greeting").innerText = isim;

function updateClock() {
    const now = new Date();

    const time = now.toTimeString().slice(0, 8);
    const day = now.toLocaleDateString("tr-TR", { weekday: "long" });

    document.querySelector(".current-time").innerText = `${time} ${day}`;
}

setInterval(updateClock, 1000);

updateClock();