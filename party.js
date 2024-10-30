document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.querySelector('.confetti');
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDelay = `${Math.random() * 3}s`;
        confettiContainer.appendChild(confettiPiece);
    }
});
