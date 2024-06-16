document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;




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

    const loggedIn = sessionStorage.getItem('loggedIn');

    if (loggedIn) {
        document.getElementById('game-container').style.display = 'block';
        document.getElementById('login-container').style.display = 'none';

    } 
});
