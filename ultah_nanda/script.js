/* =========================================================
   BIRTHDAY WEBSITE - ANANDA SEBASTIAN
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const opening = document.getElementById("opening");
const openGift = document.getElementById("openGift");
const mainContent = document.getElementById("mainContent");

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

const openLetter = document.getElementById("openLetter");
const envelope = document.getElementById("envelope");
const letterContent = document.getElementById("letterContent");

const funnyButton = document.getElementById("funnyButton");
const funnyMessage = document.getElementById("funnyMessage");


/* =========================================================
   OPENING / BUKA HADIAH
========================================================= */

openGift.addEventListener("click", () => {

    // Hilangkan halaman opening
    opening.classList.add("hide");

    // Tampilkan website utama
    mainContent.classList.remove("hidden");

    // Mulai musik
    bgMusic.volume = 0.45;

    bgMusic.play().catch(() => {
        console.log("Musik belum bisa diputar otomatis.");
    });

    // Scroll ke bagian atas
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   MUSIC PLAYER
========================================================= */

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play();

        musicPlaying = true;

        musicButton.innerHTML = "♫";

        musicButton.style.transform = "scale(1.1)";

    } else {

        bgMusic.pause();

        musicPlaying = false;

        musicButton.innerHTML = "🔇";

        musicButton.style.transform = "scale(1)";

    }

});


/* =========================================================
   UPDATE MUSIC BUTTON
========================================================= */

bgMusic.addEventListener("play", () => {

    musicPlaying = true;

    musicButton.innerHTML = "♫";

});


bgMusic.addEventListener("pause", () => {

    musicPlaying = false;

    musicButton.innerHTML = "🔇";

});


/* =========================================================
   SURAT
========================================================= */

openLetter.addEventListener("click", () => {

    envelope.classList.toggle("opened");

    if (letterContent.classList.contains("hidden")) {

        letterContent.classList.remove("hidden");

        openLetter.innerHTML = "Tutup Surat 💌";

        // Scroll sedikit ke surat
        setTimeout(() => {

            letterContent.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 200);

    } else {

        letterContent.classList.add("hidden");

        openLetter.innerHTML = "Buka Surat ❤️";

    }

});


/* =========================================================
   BAGIAN LUCU
========================================================= */

funnyButton.addEventListener("click", () => {

    funnyMessage.classList.remove("hidden");

    funnyButton.innerHTML = "WKWKWK 😭❤️";

    createConfetti();

    setTimeout(() => {

        funnyMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);

});


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti() {

    const symbols = [
        "❤️",
        "♡",
        "✨",
        "💕",
        "🎉",
        "💗"
    ];

    for (let i = 0; i < 35; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            (Math.random() * 15 + 15) + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        confetti.style.animation =
            `confettiFall ${Math.random() * 2 + 2}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 4500);

    }

}


/* =========================================================
   CONFETTI ANIMATION
========================================================= */

const confettiStyle = document.createElement("style");

confettiStyle.innerHTML = `

@keyframes confettiFall {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 1;

    }

    100% {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;

    }

}

`;

document.head.appendChild(confettiStyle);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".memory-card, .about-card, .timeline-item"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    revealObserver.observe(element);

});


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

const images = document.querySelectorAll(
    ".memory-image img"
);


images.forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        const container = image.parentElement;

        container.style.minHeight = "400px";

        container.style.display = "flex";

        container.style.alignItems = "center";

        container.style.justifyContent = "center";

        container.innerHTML = `
            <p style="
                color:#a9576c;
                text-align:center;
                padding:20px;
            ">
                📸<br>
                Foto belum ditemukan.<br>
                Masukkan foto ke folder <b>foto</b>.
            </p>
        `;

    });

});


/* =========================================================
   DOUBLE CLICK HEART
========================================================= */

document.addEventListener("dblclick", (event) => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = event.clientX + "px";

    heart.style.top = event.clientY + "px";

    heart.style.fontSize = "30px";

    heart.style.zIndex = "9999";

    heart.style.pointerEvents = "none";

    heart.style.animation =
        "heartPop 1s ease forwards";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 1000);

});


/* =========================================================
   HEART POP ANIMATION
========================================================= */

const heartStyle = document.createElement("style");

heartStyle.innerHTML = `

@keyframes heartPop {

    0% {

        transform:
            translate(-50%, -50%)
            scale(0);

        opacity: 0;

    }

    40% {

        transform:
            translate(-50%, -50%)
            scale(1.4);

        opacity: 1;

    }

    100% {

        transform:
            translate(-50%, -100px)
            scale(0.7);

        opacity: 0;

    }

}

`;

document.head.appendChild(heartStyle);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "❤️ Birthday website untuk Ananda Sebastian berhasil dimuat."
);