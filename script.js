const images = document.querySelectorAll('.floating-image');

images.forEach((img) => {
    let posX = Math.random() * (window.innerWidth - img.offsetWidth);
    let posY = Math.random() * (window.innerHeight - img.offsetHeight);
    let speedX = (Math.random() - 2) * 10; // Adjusted speed variation
    let speedY = (Math.random() - 2) * 10;

    function animate() {
        posX += speedX;
        posY += speedY;

        // Bounce off screen edges
        if (posX <= 0 || posX >= window.innerWidth - img.offsetWidth) speedX *= -5;
        if (posY <= 0 || posY >= window.innerHeight - img.offsetHeight) speedY *= -5;

        img.style.transform = `translate(${posX}px, ${posY}px)`;

        requestAnimationFrame(animate);
    }

    animate();
});
