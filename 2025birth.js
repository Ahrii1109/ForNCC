document.addEventListener('DOMContentLoaded', function() {
    // 設定2025年生日日期
    const birthday = new Date('2025-03-04T00:00:00');
    
    // 倒計時功能
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
    
    // 每秒更新倒計時
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // 生日祝福消息
    const birthdayMessage = `親愛的Nicole：
        
        又是一年生日到來，看著倒數計時一天天減少，
        就像看著我們的故事一頁頁翻過。
        
        願這一年，妳能繼續在天空中翱翔，
        看遍世界的美景，創造屬於自己的精彩故事。
        
        生日快樂！
    `;
    
    document.getElementById('birthdayMessage').innerText = birthdayMessage;

    // 信封點擊事件
    const envelope = document.getElementById('envelope');
    envelope.addEventListener('click', function() {
        if (!this.classList.contains('opened')) {
            this.classList.add('opened');
        }
    });

    // 修改愛心雨效果
    const heartsContainer = document.querySelector('.hearts-container');
    const colors = ['#ff7b8f', '#ff5975', '#ffb3c1', '#ff8fa3', '#ff4d6d'];
    const heartTypes = ['♥', '❤', '💗', '💓', '💕'];

    function createHeart() {
        const heart = document.createElement('span');
        heart.className = 'heart';
        
        // 隨機選擇愛心類型和顏色
        heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        // 隨機位置和大小
        const startPosition = Math.random() * window.innerWidth;
        const size = Math.random() * 10 + 8; // 調整大小範圍
        const duration = Math.random() * 2 + 1; // 加快下落速度
        const startOffset = Math.random() * 20 - 10; // 添加起始位置的隨機偏移
        
        heart.style.left = startPosition + 'px';
        heart.style.fontSize = size + 'px';
        heart.style.animationDuration = duration + 's';
        heart.style.transform = `translateX(${startOffset}px)`; // 添加水平偏移
        
        heartsContainer.appendChild(heart);
        
        // 動畫結束後移除愛心
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // 同時創建多個愛心
    function createHearts() {
        // 每次創建2-4個愛心
        const count = Math.floor(Math.random() * 3) + 2;
        for(let i = 0; i < count; i++) {
            setTimeout(createHeart, Math.random() * 100);
        }
    }

    // 更頻繁地創建愛心
    setInterval(createHearts, 200); // 縮短間隔時間
}); 