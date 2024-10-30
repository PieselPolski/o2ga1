const images = document.querySelectorAll('.floating-image');
const menuBtn = document.getElementById('menuBtn');
const menuOptions = document.getElementById('menuOptions');
const sharcoPartyBtn = document.getElementById('sharcoPartyBtn');
const robloxAccountBtn = document.getElementById('robloxAccountBtn');

// Toggle menu options
menuBtn.addEventListener('click', () => {
    menuOptions.style.display = menuOptions.style.display === 'none' ? 'block' : 'none';
});

// Sharco Party Animation
sharcoPartyBtn.addEventListener('click', () => {
    images.forEach((img) => {
        img.classList.add('bouncing'); // Add class to trigger animations
    });
});

robloxAccountBtn.addEventListener('click', () => {
    window.location.href = 'https://www.roblox.com/users/YourRobloxID/profile'; // Replace with your Roblox profile link
});

// Floating and Bouncing Animations
images.forEach((img) => {
    let posX = Math.random() * window.innerWidth;
    let posY = Math.random() * window.innerHeight;
    let speedX = (Math.random() - 0.9) * 4;
    let speedY = (Math.random() - 0.9) * 4;

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
