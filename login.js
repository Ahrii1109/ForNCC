// login.js 文件
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;



    // 簡單的驗證（實際應用中應該使用更安全的驗證方式）
    if (username === 'Guest' && password === 'password') {
        sessionStorage.setItem('loggedIn', true);
        alert('訪客登入成功');
        window.location.href = 'game.html';
    }
    else if (username === 'Nicole' && password === '649518'){
        sessionStorage.setItem('nicoleLoggedIn', true);
        alert('尊貴的妮可登入成功');
        window.location.href = 'nicole_game.html'; // 重定向到 Nicole 专属的页面
    }
    else {
        alert('都跟你說帳號密碼了，為啥能打錯!!!');
    }
});

    document.getElementById('guestBtn').addEventListener('click', function() {
        alert('訪客帳號:Guest\n訪客密碼:password\n登入後可以抽籤喔喔喔!!!');
    });

document.addEventListener('DOMContentLoaded', function() {
    // 檢查用戶是否已登入
    const loggedIn = sessionStorage.getItem('loggedIn');

    if (loggedIn) {
        // 已登入用户，显示正常游戏页面
        document.getElementById('game-container').style.display = 'block';
        document.getElementById('login-container').style.display = 'none';

    } 
});
