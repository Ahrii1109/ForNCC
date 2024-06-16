const images = [
    { name: "安慰賞 貼圖抱抱一個", src: "images/photo1.jpg", probability: 0.04 },
    { name: "安慰賞 貼圖抱抱一個", src: "images/photo2.jpg", probability: 0.04 },
    { name: "安慰賞 貼圖抱抱一個", src: "images/photo3.jpg", probability: 0.04 },
    { name: "安慰賞 貼圖抱抱一個", src: "images/photo4.jpg", probability: 0.04 },
    { name: "安慰賞 貼圖抱抱一個", src: "images/photo5.jpg", probability: 0.04 },
    { name: "安慰賞 抱抱一個", src: "images/photo6.jpg", probability: 0.04 },
    { name: "安慰賞 抱抱一個", src: "images/photo7.jpg", probability: 0.04 },
    { name: "安慰賞 抱抱一個", src: "images/photo8.jpg", probability: 0.04 },
    { name: "安慰賞 抱抱一個", src: "images/photo9.jpg", probability: 0.04 },
    { name: "安慰賞 抱抱一個", src: "images/photo10.jpg", probability: 0.04 },
    { name: "四獎 照片親親一個", src: "images/photo11.jpg", probability: 0.03 },
    { name: "四獎 照片親親一個", src: "images/photo12.jpg", probability: 0.03 },
    { name: "四獎 照片親親一個", src: "images/photo13.jpg", probability: 0.03 },
    { name: "四獎 照片親親一個", src: "images/photo14.jpg", probability: 0.03 },
    { name: "四獎 照片親親一個", src: "images/photo15.jpg", probability: 0.03 },
    { name: "四獎 照片親親一個", src: "images/photo16.jpg", probability: 0.03 },
    { name: "四獎 照片親親一個", src: "images/photo17.jpg", probability: 0.03 },
    { name: "四獎 照片親親一個", src: "images/photo18.jpg", probability: 0.03 },
    { name: "四獎 照片親親一個", src: "images/photo19.jpg", probability: 0.03 },
    { name: "終極大獎 飛往新加坡機票一張", src: "images/photo20.jpg", probability: 0.005 },
    { name: "三獎 葛請外送(200內)", src: "images/photo21.jpg", probability: 0.03 },
    { name: "三獎 葛請外送(200內)", src: "images/photo22.jpg", probability: 0.03 },
    { name: "三獎 葛請外送(200內)", src: "images/photo23.jpg", probability: 0.03 },
    { name: "三獎 葛請外送(200內)", src: "images/photo24.jpeg", probability: 0.03 },
    { name: "三獎 葛請外送(200內)", src: "images/photo25.jpg", probability: 0.03 },
    { name: "三獎 葛請外送(200內)", src: "images/photo26.jpg", probability: 0.03 },
    { name: "三獎 葛請外送(200內)", src: "images/photo27.jpeg", probability: 0.03 },
    { name: "二獎 葛買禮物", src: "images/photo28.jpg", probability: 0.01 },
    { name: "二獎 葛買禮物", src: "images/photo29.jpg", probability: 0.01 },
    { name: "二獎 葛買禮物", src: "images/photo30.jpg", probability: 0.01 },
    { name: "二獎 葛買禮物", src: "images/photo31.jpg", probability: 0.01 },
    { name: "二獎 葛買禮物", src: "images/photo32.jpg", probability: 0.01 },
    { name: "二獎 葛買禮物", src: "images/photo33.jpg", probability: 0.01 },
    { name: "頭獎 許願卡一張", src: "images/photo34.jpg", probability: 0.008 },
    { name: "頭獎 許願卡一張", src: "images/photo35.jpg", probability: 0.008 },
    { name: "頭獎 許願卡一張", src: "images/photo36.jpg", probability: 0.008 },
    { name: "頭獎 許願卡一張", src: "images/photo37.jpg", probability: 0.008 },
    { name: "頭獎 許願卡一張", src: "images/photo38.jpg", probability: 0.008 },
];

document.addEventListener('DOMContentLoaded', function() {
    const randomImageBtn = document.getElementById('randomImageBtn');
    const randomImage = document.getElementById('randomImage');
    const imageName = document.getElementById('imageName');
    const logoutBtn = document.getElementById('ncclogoutBtn');

    randomImageBtn.addEventListener('click', function() {
        randomImageBtn.style.display = 'none'; 
        let interval = 5;
        
        const flashImage = function() {
            const selectedImage = getRandomImage();
            randomImage.src = selectedImage.src;
            imageName.textContent = selectedImage.name;

            interval *= 1.07; 

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


    logoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('nicoleLoggedIn');
        window.location.href = 'game.html';
    });
});


function getRandomImage() {
    const randomValue = Math.random();
    let cumulativeProbability = 0;

    for (const image of images) {
        cumulativeProbability += image.probability;
        if (randomValue < cumulativeProbability) {
            return image;
        }
    }

    return images[images.length - 1];
}