// Floating Images Animation
const images = document.querySelectorAll('.floating-image');

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

// Button Actions
document.getElementById('sharcoPartyBtn').addEventListener('click', () => {
    window.open('party.html', '_blank');
});

document.getElementById('robloxAccountBtn').addEventListener('click', () => {
    window.location.href = 'https://www.roblox.com/users/YourRobloxID/profile'; // Replace with your Roblox profile link
});
