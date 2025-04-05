const messages = [
    "i knew this was coming. Let me .....",
    "Please say yes 😭😭",
    "Ayooo....i know u are a princess but i can serve u my highness...👑👑",
    "I can make u laugh,cry with u and also take care of u 💪💪",
    "Still  a no 😭😭,please say yes",
    "ABEY OYE AB JABARDASTI KRNI PADEGI😤",
    "yrr maan ja na pleasseeeeee.......",
    "dekh ye YES bada hota rhega theek haina ",
    "what about a coffee date??",
    "i knew u will say yes 😊",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Function to create balloons dynamically
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Randomize starting position
    const startX = Math.random() * window.innerWidth;
    balloon.style.left = `${startX}px`;

    // Randomize balloon color
    const colors = ['#ff0000', '#cc0000', '#800000']; // Different shades of red
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(balloon);

    // Animate the balloon upwards
    let posY = window.innerHeight;
    const floatInterval = setInterval(() => {
        posY -= 2; // Move balloon up
        balloon.style.top = `${posY}px`;

        if (posY < -100) {
            clearInterval(floatInterval);
            balloon.remove(); // Remove balloon when it goes off-screen
        }
    }, 20);
}

// Generate new balloons every second
setInterval(createBalloon, 800);
