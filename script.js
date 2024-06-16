document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "　　還記得大一的時候妳跟我說你要出國讀研究所嗎？   結果妳現在跑去新加坡當空姐了，只能說這很有妳的風格，為了不讓妳在國外太無聊所以小小的做了這個網站讓妳每天抽獎抽抽看，搞不好會有意想不到的結果喔！！！",
        "　　眾所不一定周知，妳是個妥妥的急性子，一有想法就馬上安排那種，不然妳也不會一上酷航就高歌離席。  而我卻是需要計畫好一切才會行動的那種人，因為我很不喜歡做看不到結果的事情。",
        "　　而這份給妳的禮物就是被妳影響的證明，換作是以前的我根本不可能生的出這個網站，雖然很簡陋但至少是個好的嘗試吧！",
        "　　感謝妳充實了我的大學生活，希望在未來的日子裡也能在我的身邊看到妳的身影。",
        "　　接下來我要認真讀書準備考試啦，希望半年後的我們都會成為更好的自己，讓大學成為我們人生的序章，並繼續書寫我們未完的每一天！！！"
    ];

    const ids = ["text1", "text2", "text3", "text4","text5"];
    const typingSpeed = 130; 
    let currentIndex = 0;

    function typeText(index) {
        const element = document.getElementById(ids[index]);
        const text = texts[index];
        typeWriter(text, element, typingSpeed, function() {
            currentIndex++;
            if (currentIndex < texts.length) {
                setTimeout(function() {
                    typeText(currentIndex);
                }, 500); 
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
