function checkLogin(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const REpassword = document.getElementById('REpassword').value;

    if (username.trim() === '') {
        alert('Vui lòng nhập tài khoản ');
        return;
    }

    if (password.trim()=== ''){
        alert('Vui lòng nhập mật khẩu');
        return;
    }

    if (REpassword.trim()=== ''){
        alert('Vui lòng xác nhận mật khẩu');
        return;
    }

    if (password === REpassword ){
        alert('Đăng kí tài khoản thành công');
        window.location.href = 'index.html';
    }else{
        alert('Mật khẩu và Mật khẩu xác nhận chưa phù hợp');
        return;
    }
    
    document.getElementById('loginForm').addEventListener('keypress', function(e){
        if (e.key = 'Enter'){
            e.preventDefault();
            checkLogin();
        }
    });
}