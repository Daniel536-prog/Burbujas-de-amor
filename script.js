const messages = [
    "💖 Te quiero muchísimo 💖",
    "💘 Eres todo lo que quiero 💘",
    "🌟 Quiero que sepas que eres muy especial para mí 🌟",
    "🤝💞 Quiero estar a tu lado siempre 🤝💞",
    "🫶✨ Eres consciente de lo importante que eres para mí 🫶✨",
    "😍🌹 Te adoro como eres 😍🌹",
    "🛡️❤️‍🔥 Quiero cuidarte y protegerte siempre 🛡️❤️‍🔥",
    "😵‍💫💓 Me tienes loco de amor 😵‍💫💓",
    "💭💗 Pienso en ti todo el tiempo 💭💗",
    "🌸😊 Hermosa florecita 🌸😊",
    "❤️‍🔥🔐 Te quiero solo a ti y solo a ti ❤️‍🔥🔐",
];

let lastPositions = []; // Evitar que se junten

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    // Posición horizontal aleatoria evitando choques
    let leftPos;
    let tries = 0;
    do {
        leftPos = Math.random() * 80;
        tries++;
    } while (lastPositions.some(pos => Math.abs(pos - leftPos) < 15) && tries < 10);

    lastPositions.push(leftPos);
    if (lastPositions.length > 5) lastPositions.shift();

    bubble.style.left = leftPos + "vw";
    bubble.style.animationDuration = (6 + Math.random() * 4) + "s";

    // Aparición con efecto suave
    bubble.style.transform = "scale(0)";
    setTimeout(() => {
        bubble.style.transform = "scale(1)";
    }, 50);

    document.getElementById("bubbles-text").appendChild(bubble);

    // Eliminar después de un tiempo
    setTimeout(() => {
        bubble.remove();
        lastPositions = lastPositions.filter(pos => pos !== leftPos);
    }, 10000);
}

// Crear burbujas continuamente
setInterval(createTextBubble, 500);
