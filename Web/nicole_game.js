const images = [
    { name: "图片1", src: "images/photo1.jpg", probability: 0.2 },
    { name: "图片2", src: "images/photo2.jpg", probability: 0.2 },
    { name: "图片3", src: "images/photo3.jpg", probability: 0.2 },
    { name: "图片4", src: "images/photo4.jpg", probability: 0.2 },
    { name: "图片5", src: "images/photo5.jpg", probability: 0.05 },
    { name: "图片6", src: "images/photo6.jpg", probability: 0.05 },
    { name: "图片7", src: "images/photo7.jpg", probability: 0.03 },
    { name: "图片8", src: "images/photo8.jpg", probability: 0.03 },
    { name: "图片9", src: "images/photo9.jpg", probability: 0.03 },
    { name: "图片10", src: "images/photo10.jpg", probability: 0.01 }
];

document.addEventListener('DOMContentLoaded', function() {
    const randomImageBtn = document.getElementById('randomImageBtn');
    const randomImage = document.getElementById('randomImage');
    const imageName = document.getElementById('imageName');
    const logoutBtn = document.getElementById('ncclogoutBtn');

    randomImageBtn.addEventListener('click', function() {
        // 设置初始闪烁速度
        randomImageBtn.style.display = 'none'; // 隐藏抽取按钮
        let interval = 100;
        
        const flashInterval = setInterval(function() {
            const selectedImage = getRandomImage();
            randomImage.src = selectedImage.src;
            imageName.textContent = selectedImage.name;
            
            // 递减闪烁速度
            interval -= 5;
            if (interval < 1) {
                clearInterval(flashInterval);
                // 显示最终奖项
                setTimeout(function() {
                    const selectedImage = getRandomImage();
                    randomImage.src = selectedImage.src;
                    imageName.textContent = selectedImage.name;
                    logoutBtn.style.display = 'block';
                }, 100); // 最终显示时间
            }
        }, interval); // 控制闪烁速度
    });

    // 登出按钮
    logoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('nicoleLoggedIn');
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