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
    const birthdayMessage = `給世界上最漂亮的空姐 Nicole ：
        
        如何 我設計的卡片超級好看的對吧
        金屬卡片我只能說嘎嘎頂啊 請好好的收在錢包裡
        (雖然你的錢包總是換了又換)
        
        這是我們在一起後第一次沒有待再一起慶祝你的生日好像
        沒辦法 被抓去國軍online了 你收到這個卡片時我可能正在接受國軍偉大的洗禮
        要不是還不知道我的結訓日期 不然我肯定會把上面的計時器改成我的結訓倒數
        
        總之 自從去年寫了個酷網站給妳後 我發現你點進來的次數是越來越少了昂
        這讓我非常心灰意冷 所以趁著你生日做了這個NFC卡片給你 讓你掃一下就能來看看
        或是有乘客or機長問你有沒有男朋友時 請直接把這張卡甩他臉上
        我相信他們會知男而退的
        
        最後就是祝你生日快樂啦
        等我結訓就去找你玩
        
        生日快樂`;
    
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
    const secretMessage = `啊哈!
    
        驚不驚喜!
        意不意外!
        
        想不到還有小彩蛋吧!!!
        還敢手癢一直點愛心啊

        畢竟沒辦法跟妳一起開箱卡片 所以就用這種方式跟妳互動互動
        搞不好可以讓妳有陪伴的感覺 希望有啦

        啊再點下去就真的啥都沒有了 所以可以不用繼續點了
        甚至本來是設定要點100次 但我想妳應該沒那個耐心 這樣這個彩蛋會石沉大海
        所以還特意改少了觸發次數

        希望明年 後年 還有以後妳的每一次生日我都能親手把卡片交給妳啦
        不要再像這樣遠端過生日了

        生日快樂啦!!!
        
    `;
}); 