document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cat-container');
    const catCount = 6;

    for (let i = 0; i < catCount; i++) {
        let cat = document.createElement('div');
        cat.classList.add('cat');
        container.appendChild(cat);

        animateCat(cat);
    }
});

function animateCat(cat) {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    let x = Math.random() * containerWidth;
    let y = Math.random() * containerHeight;
    let speedX = (Math.random() - 0.5) * 4;
    let speedY = (Math.random() - 0.5) * 4;

    function bounce() {
        x += speedX;
        y += speedY;

        if (x <= 0 || x >= containerWidth - 100) speedX = -speedX;
        if (y <= 0 || y >= containerHeight - 100) speedY = -speedY;

        cat.style.left = x + 'px';
        cat.style.top = y + 'px';

        requestAnimationFrame(bounce);
    }

    bounce();
}
