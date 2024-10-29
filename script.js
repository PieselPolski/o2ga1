// script.js

const images = document.querySelectorAll('.floating-image');

images.forEach((img) => {
    let posX = Math.random() * window.innerWidth;
    let posY = Math.random() * window.innerHeight;
    let speedX = (Math.random() - 0.9) * 4;
    let speedY = (Math.random() - 0.9) * 4;

    function animate() {
        posX += speedX;
        posY += speedY;

        // Odbijanie od granic ekranu
        if (posX <= 0 || posX >= window.innerWidth - img.width) speedX *= -1;
        if (posY <= 0 || posY >= window.innerHeight - img.height) speedY *= -1;

        img.style.transform = `translate(${posX}px, ${posY}px)`;

        requestAnimationFrame(animate);
    }

    animate();
});
