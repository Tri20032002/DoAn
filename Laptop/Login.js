function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("message").innerHTML = "Vui lòng điền đầy đủ thông tin.";
        return false;
    }

    // Thực hiện kiểm tra thông tin đăng nhập ở đây (sử dụng AJAX nếu cần).
    // Nếu thông tin không đúng, hiển thị thông báo "Sai tên đăng nhập hoặc mật khẩu."
    // Nếu thông tin đúng, chuyển đến trang chính hoặc trang khác.

    return true;
}

function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function validateRegistration() {
    var regUsername = document.getElementById("regUsername").value;
    var regPassword = document.getElementById("regPassword").value;
    var regConfirmPassword = document.getElementById("regConfirmPassword").value;

    if (regUsername === "" || regPassword === "" || regConfirmPassword === "") {
        document.getElementById("regMessage").innerHTML = "Vui lòng điền đầy đủ thông tin.";
        return false;
    }

    if (regPassword !== regConfirmPassword) {
        document.getElementById("regMessage").innerHTML = "Mật khẩu xác nhận không khớp.";
        return false;
    }

    // Thực hiện lưu thông tin tài khoản ở đây (sử dụng AJAX nếu cần).
    // Sau khi lưu thành công, chuyển đến trang đăng nhập.

    return true;
}
