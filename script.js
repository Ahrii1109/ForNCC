document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "       還記得大一的時候",
        "在這裡，我們想向您表達我們的愛與敬意。",
        "希望我們的心意能帶給您一些溫暖與快樂。"
    ];

    const ids = ["text1", "text2", "text3"];
    const typingSpeed = 100; 
    let currentIndex = 0;

    function typeText(index) {
        const element = document.getElementById(ids[index]);
        const text = texts[index];
        typeWriter(text, element, typingSpeed, function() {
            currentIndex++;
            if (currentIndex < texts.length) {
                setTimeout(function() {
                    typeText(currentIndex);
                }, 500); // 在切换文本前等待 1 秒
            }
        });
    }

    function typeWriter(text, element, speed, callback) {
        let i = 0;
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.innerHTML = '|';
        element.appendChild(cursor);

        function type() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1);
                element.appendChild(cursor);
                i++;
                setTimeout(type, speed);
            } else {
                cursor.remove();
                if (callback) callback();
            }
        }
        type();
    }

    typeText(currentIndex);

  
    const style = document.createElement('style');
    style.innerHTML = `
        .cursor {
            display: inline-block;
            animation: blink 500ms steps(1) infinite;
        }
        @keyframes blink {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
