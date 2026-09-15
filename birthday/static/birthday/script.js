/* ================= NO BUTTON ================= */

function noSurprise() {

    const message = document.getElementById("message");
    const noButton = document.querySelector(".no-btn");

    message.innerHTML =
        "😂 You crazy boy! NO is not allowed! 🚫<br>Try YES ❤️";

    message.style.color = "#ff6b81";

    noButton.classList.remove("shake");

    void noButton.offsetWidth;

    noButton.classList.add("shake");
}


/* ================= OPEN SURPRISE ================= */

function openSurprise() {

    const openingScreen =
        document.getElementById("opening-screen");

    const birthdayScreen =
        document.getElementById("birthday-screen");

    openingScreen.style.display = "none";

    birthdayScreen.classList.add("show");
}


/* ================= BIRTHDAY → MESSAGE ================= */

function showMessage() {

    const birthdayScreen =
        document.getElementById("birthday-screen");

    const messageScreen =
        document.getElementById("message-screen");

    birthdayScreen.style.display = "none";

    messageScreen.style.display = "flex";
}


/* ================= MESSAGE → MEMORIES ================= */

function showMemories() {

    const messageScreen =
        document.getElementById("message-screen");

    const memoriesScreen =
        document.getElementById("memories-screen");

    messageScreen.style.display = "none";

    memoriesScreen.style.display = "flex";
}


/* ================= MEMORIES → FINAL ================= */

function showFinal() {

    const memoriesScreen =
        document.getElementById("memories-screen");

    const finalScreen =
        document.getElementById("final-screen");

    memoriesScreen.style.display = "none";

    finalScreen.style.display = "flex";

    createConfetti();
}


/* ================= CONFETTI ================= */

function createConfetti() {

    const symbols = ["🎉", "✨", "🎊", "⭐", "🎈"];

    for (let i = 0; i < 25; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-50px";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex = "1000";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            2 + Math.random() * 3;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(360deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}
function cutCake() {

    const cake = document.querySelector(".cake");
    const message = document.getElementById("cake-message");
    const surpriseArea = document.getElementById("surprise-area");

    cake.classList.add("cake-cut");

    message.innerHTML =
        "🎉 Cake Cut! Happy Birthday, Kayes! 🎂🖤";

    message.classList.add("cake-wish");

    surpriseArea.classList.add("show-surprise");

    createConfetti();
}


function openFinalSurprise() {

    const surpriseArea =
        document.getElementById("surprise-area");

    const hiddenSurprise =
        document.getElementById("hidden-surprise");

    surpriseArea.style.display = "none";

    hiddenSurprise.classList.add("show-hidden");

    createConfetti();
}