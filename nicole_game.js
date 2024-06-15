const images = [
    { name: "图片1", src: "images/photo1.jpg", probability: 0.03 },
    { name: "图片2", src: "images/photo2.jpg", probability: 0.03 },
    { name: "图片3", src: "images/photo3.jpg", probability: 0.03 },
    { name: "图片4", src: "images/photo4.jpg", probability: 0.03 },
    { name: "图片5", src: "images/photo5.jpg", probability: 0.03 },
    { name: "图片6", src: "images/photo6.jpg", probability: 0.03 },
    { name: "图片7", src: "images/photo7.jpg", probability: 0.03 },
    { name: "图片8", src: "images/photo8.jpg", probability: 0.03 },
    { name: "图片9", src: "images/photo9.jpg", probability: 0.03 },
    { name: "图片10", src: "images/photo10.jpg", probability: 0.03 },
    { name: "图片11", src: "images/photo11.jpg", probability: 0.03 },
    { name: "图片12", src: "images/photo12.jpg", probability: 0.03 },
    { name: "图片13", src: "images/photo13.jpg", probability: 0.03 },
    { name: "图片14", src: "images/photo14.jpg", probability: 0.03 },
    { name: "图片15", src: "images/photo15.jpg", probability: 0.03 },
    { name: "图片16", src: "images/photo16.jpg", probability: 0.03 },
    { name: "图片17", src: "images/photo17.jpg", probability: 0.03 },
    { name: "图片18", src: "images/photo18.jpg", probability: 0.03 },
    { name: "图片19", src: "images/photo19.jpg", probability: 0.03 },
    { name: "图片20", src: "images/photo20.jpg", probability: 0.03 },
    { name: "图片21", src: "images/photo21.jpg", probability: 0.03 },
    { name: "图片22", src: "images/photo22.jpg", probability: 0.03 },
    { name: "图片23", src: "images/photo23.jpg", probability: 0.03 },
    { name: "图片24", src: "images/photo24.jpeg", probability: 0.03 },
    { name: "图片25", src: "images/photo25.jpg", probability: 0.03 },
    { name: "图片26", src: "images/photo26.jpg", probability: 0.03 },
    { name: "图片27", src: "images/photo27.jpeg", probability: 0.03 },
    { name: "图片28", src: "images/photo28.jpg", probability: 0.03 },
    { name: "图片29", src: "images/photo29.jpg", probability: 0.03 },
    { name: "图片30", src: "images/photo30.jpg", probability: 0.03 },
    { name: "图片31", src: "images/photo31.jpg", probability: 0.03 },
    { name: "图片32", src: "images/photo32.jpg", probability: 0.03 },
    { name: "图片33", src: "images/photo33.jpg", probability: 0.03 },
    { name: "图片34", src: "images/photo34.jpg", probability: 0.03 },
    { name: "图片35", src: "images/photo35.jpg", probability: 0.03 },
    { name: "图片36", src: "images/photo36.jpg", probability: 0.03 },
    { name: "图片37", src: "images/photo37.jpg", probability: 0.03 },
    { name: "图片38", src: "images/photo38.jpg", probability: 0.03 },
];

document.addEventListener('DOMContentLoaded', function() {
    const randomImageBtn = document.getElementById('randomImageBtn');
    const randomImage = document.getElementById('randomImage');
    const imageName = document.getElementById('imageName');
    const logoutBtn = document.getElementById('ncclogoutBtn');

    randomImageBtn.addEventListener('click', function() {
        // 设置初始闪烁速度
        randomImageBtn.style.display = 'none'; // 隐藏抽取按钮
        let interval = 5;
        
        const flashImage = function() {
            const selectedImage = getRandomImage();
            randomImage.src = selectedImage.src;
            imageName.textContent = selectedImage.name;

            interval *= 1.1; // 逐渐增加时间间隔

            if (interval > 450) {
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