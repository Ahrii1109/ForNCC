document.addEventListener('DOMContentLoaded', function() {
    // 愛心雨效果
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

    // 倒計時功能
    const birthday = new Date('2025-03-04T00:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const diff = birthday - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // 信件內容和打字效果
    const birthdayMessage = `親愛的Nicole：
        
        又是一年生日到來，看著倒數計時一天天減少，
        就像看著我們的故事一頁頁翻過。
        
        願這一年，妳能繼續在天空中翱翔，
        看遍世界的美景，創造屬於自己的精彩故事。
        
        生日快樂！`;
    
    function typeMessage(text, element) {
        let index = 0;
        element.textContent = '';
        
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                // 加快打字速度
                const delay = text.charAt(index - 1) === '\n' ? 100 : 50; // 從 200/100 改為 100/50
                setTimeout(type, delay);
            }
        }
        
        type();
    }

    // 信封點擊事件
    const envelope = document.getElementById('envelope');
    const messageElement = document.getElementById('birthdayMessage');
    
    envelope.addEventListener('click', function() {
        if (!this.classList.contains('opened')) {
            this.classList.add('opened');
            setTimeout(() => {
                typeMessage(birthdayMessage, messageElement);
            }, 1500);
        }
    });
}); 