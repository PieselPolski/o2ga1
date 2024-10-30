// Floating Images Animation
const images = document.querySelectorAll('.floating-image');
const sharcoPartyBtn = document.getElementById('sharcoPartyBtn');
const robloxAccountBtn = document.getElementById('robloxAccountBtn');
const confettiContainer = document.getElementById('confetti-container');

// Floating Image Movement
images.forEach((img) => {
    let posX = Math.random() * window.innerWidth;
    let posY = Math.random() * window.innerHeight;
    let speedX = (Math.random() - 0.5) * 4;
    let speedY = (Math.random() - 0.5) * 4;

    function animate() {
        posX += speedX;
        posY += speedY;

        if (posX <= 0 || posX >= window.innerWidth - img.width) speedX *= -1;
        if (posY <= 0 || posY >= window.innerHeight - img.height) speedY *= -1;

        img.style.transform = `translate(${posX}px, ${posY}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});

// Activate Party Mode
sharcoPartyBtn.addEventListener('click', () => {
    document.body.classList.add('party-mode');
    generateConfetti();
});

// Redirect to Roblox Account
robloxAccountBtn.addEventListener('click', () => {
    window.location.href = 'https://www.roblox.com/users/YourRobloxID/profile'; // Replace with your Roblox profile link
});

// Generate Confetti
function generateConfetti() {
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.top = `${-10 + Math.random() * 100}vh`;
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiPiece.style.animationDelay = `${Math.random() * 3}s`;
        confettiContainer.appendChild(confettiPiece);
    }
}

// Helper function to get a random color for confetti
function getRandomColor() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
}
