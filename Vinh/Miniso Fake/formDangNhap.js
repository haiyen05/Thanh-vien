function checkLogin(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Vui lòng nhập đầy đủ tài khoản và mật khẩu');
        return;
    }
    window.location.href = 'index.html';
    
    document.getElementById('loginForm').addEventListener('keypress', function(e){
        if (e.key = 'Enter'){
            e.preventDefault();
            checkLogin();
        }
    });
}