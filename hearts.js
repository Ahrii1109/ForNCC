document.addEventListener('DOMContentLoaded', function() {
    const heartsContainer = document.querySelector('.hearts-container');
    const colors = ['#ff7b8f', '#ff5975', '#ffb3c1', '#ff8fa3', '#ff4d6d'];
    const heartTypes = ['♥', '❤', '💗', '💓', '💕'];

    function createHeart() {
        const heart = document.createElement('span');
        heart.className = 'heart';
        
        heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        const startPosition = Math.random() * window.innerWidth;
        const size = Math.random() * 10 + 8;
        const duration = Math.random() * 2 + 1;
        const startOffset = Math.random() * 20 - 10;
        
        heart.style.left = startPosition + 'px';
        heart.style.fontSize = size + 'px';
        heart.style.animationDuration = duration + 's';
        heart.style.transform = `translateX(${startOffset}px)`;
        
        heartsContainer.appendChild(heart);
        
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    function createHearts() {
        const count = Math.floor(Math.random() * 3) + 2;
        for(let i = 0; i < count; i++) {
            setTimeout(createHeart, Math.random() * 100);
        }
    }

    setInterval(createHearts, 100);
}); 