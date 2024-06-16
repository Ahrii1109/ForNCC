const images = [
    { name: "你今天運氣普普通通餒QQ", src: "images/photo1.jpg", probability: 0.04 },
    { name: "你今天運氣普普通通餒QQ", src: "images/photo2.jpg", probability: 0.04 },
    { name: "你今天運氣普普通通餒QQ", src: "images/photo3.jpg", probability: 0.04 },
    { name: "你今天運氣普普通通餒QQ", src: "images/photo4.jpg", probability: 0.04 },
    { name: "你今天運氣普普通通餒QQ", src: "images/photo5.jpg", probability: 0.04 },
    { name: "你今天運氣普普通通餒QQ", src: "images/photo6.jpg", probability: 0.04 },
    { name: "你今天運氣普普通通餒QQ", src: "images/photo7.jpg", probability: 0.04 },
    { name: "你今天運氣普普通通餒QQ", src: "images/photo8.jpg", probability: 0.04 },
    { name: "你今天運氣普普通通餒QQ", src: "images/photo9.jpg", probability: 0.04 },
    { name: "你今天運氣普普通通餒QQ", src: "images/photo10.jpg", probability: 0.04 },
    { name: "你今天運氣還不錯喔!!!", src: "images/photo14.jpg", probability: 0.03 },
    { name: "你今天運氣還不錯喔!!!", src: "images/photo15.jpg", probability: 0.03 },
    { name: "你今天運氣還不錯喔!!!", src: "images/photo16.jpg", probability: 0.03 },
    { name: "你今天運氣還不錯喔!!!", src: "images/photo23.jpg", probability: 0.03 },
    { name: "運氣爆棚啦!!!走在路上注意看地板有可能會撿到錢喔喔喔!!!", src: "images/photo43.jpg", probability: 0.01 },
    { name: "你今天運氣還不錯喔!!!", src: "images/photo24.jpeg", probability: 0.03 },
    { name: "你今天運氣還不錯喔!!!", src: "images/photo26.jpg", probability: 0.03 },
    { name: "你今天運氣還不錯喔!!!", src: "images/photo31.jpg", probability: 0.03 },
    { name: "你今天運氣還不錯喔!!!", src: "images/photo32.jpg", probability: 0.03 },
    { name: "你今天運氣還不錯喔!!!", src: "images/photo33.jpg", probability: 0.03 },
    { name: "你今天運氣嘎嘎頂 要不要考慮買刮刮樂啊~~~", src: "images/photo11.jpg", probability: 0.02 },
    { name: "你今天運氣嘎嘎頂 要不要考慮買刮刮樂啊~~~", src: "images/photo12.jpg", probability: 0.02 },
    { name: "你今天運氣嘎嘎頂 要不要考慮買刮刮樂啊~~~", src: "images/photo13.jpg", probability: 0.02 },
    { name: "你今天運氣嘎嘎頂 要不要考慮買刮刮樂啊~~~", src: "images/photo19.jpg", probability: 0.02 },
    { name: "你今天運氣嘎嘎頂 要不要考慮買刮刮樂啊~~~", src: "images/photo17.jpg", probability: 0.02 },
    { name: "你今天運氣嘎嘎頂 要不要考慮買刮刮樂啊~~~", src: "images/photo18.jpg", probability: 0.02 },
    { name: "你今天運氣嘎嘎頂 要不要考慮買刮刮樂啊~~~", src: "images/photo37.jpg", probability: 0.02 },
    { name: "你今天運氣嘎嘎頂 要不要考慮買刮刮樂啊~~~", src: "images/photo38.jpg", probability: 0.02 },
    { name: "你今天運氣嘎嘎頂 要不要考慮買刮刮樂啊~~~", src: "images/photo27.jpeg", probability: 0.015 },
    { name: "你今天運氣嘎嘎頂 要不要考慮買刮刮樂啊~~~", src: "images/photo41.jpg", probability: 0.015 },
    { name: "抽到我算你雖到有剩了...出門小心啊...", src: "images/photo42.jpg", probability: 0.01 },
    { name: "你今天運氣還不錯喔!!!", src: "images/photo28.jpg", probability: 0.03 }
];

document.addEventListener('DOMContentLoaded', function() {
    const randomImageBtn = document.getElementById('randomImageBtn');
    const randomImage = document.getElementById('randomImage');
    const imageName = document.getElementById('imageName');
    const logoutBtn = document.getElementById('logoutBtn');

    randomImageBtn.addEventListener('click', function() {
        // 设置初始闪烁速度
        randomImageBtn.style.display = 'none'; // 隐藏抽取按钮
        let interval = 5;
        
        const flashImage = function() {
            const selectedImage = getRandomImage();
            randomImage.src = selectedImage.src;
            imageName.textContent = selectedImage.name;

            interval *= 1.07; // 逐渐增加时间间隔

            if (interval > 400) {
                setTimeout(function() {
                    const finalImage = getRandomImage();
                    randomImage.src = finalImage.src;
                    imageName.textContent = finalImage.name;
                    logoutBtn.style.display = 'block';
                }, 500); // 最终显示时间
            } else {
                setTimeout(flashImage, interval); // 逐渐增加时间间隔
            }
        };
        
        setTimeout(flashImage, interval);
    });

    // 登出按钮
    logoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('loggedIn');
        window.location.href = 'game.html';
    });
});

// 根据概率随机选择图片
function getRandomImage() {
    const randomValue = Math.random();
    let cumulativeProbability = 0;

    for (const image of images) {
        cumulativeProbability += image.probability;
        if (randomValue < cumulativeProbability) {
            return image;
        }
    }

    // 防止浮点数累加误差
    return images[images.length - 1];
}