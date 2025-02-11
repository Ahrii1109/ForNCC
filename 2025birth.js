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

    // 修改倒計時日期為 2026 年
    const birthday = new Date('2026-03-04T00:00:00');
    
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
            }, 4500);
        }
    });

    // 添加信件點擊產生愛心效果
    const letter = document.querySelector('.letter');
    
    function createClickHeart(x, y) {
        const heart = document.createElement('span');
        heart.className = 'click-heart';
        heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        
        // 使用隨機顏色
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        // 隨機選擇大小和旋轉角度
        const size = Math.random() * 10 + 20;
        const rotation = Math.random() * 30 - 15;
        
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = size + 'px';
        heart.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        
        letter.appendChild(heart);
        
        // 動畫結束後移除愛心
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
    
    let clickCount = 0;
    const CLICK_THRESHOLD = 15;
    
    letter.addEventListener('click', function(e) {
        const envelope = document.getElementById('envelope');
        if (envelope.classList.contains('opened')) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            createClickHeart(x, y);
            
            clickCount++;
            
            if (clickCount === CLICK_THRESHOLD) {
                // 直接將文字透明度設為0
                messageElement.style.opacity = 0;
                
                // 短暫延遲後開始顯示新內容
                setTimeout(() => {
                    messageElement.textContent = secretMessage;
                    // 慢慢顯示新內容
                    fadeInText(messageElement);
                }, 500);
            }
        }
    });

    // 添加淡入效果函數
    function fadeInText(element) {
        let opacity = 0;
        element.style.opacity = opacity;
        
        const fade = setInterval(() => {
            opacity += 0.05;
            element.style.opacity = opacity;
            
            if (opacity >= 1) {
                clearInterval(fade);
            }
        }, 50);
    }

    // 添加彩蛋內容
    const secretMessage = `親愛的Nicole：

        哇！被你發現了這個小彩蛋！
        看來你真的很喜歡點擊產生愛心呢～
        
        其實這個網站的每個角落都藏著我的一點心意，
        就像你總是能在生活中發現美好的小細節一樣。
        
        希望這個小驚喜能讓你開心 ❤️
        
        永遠支持你的 温`;
}); 