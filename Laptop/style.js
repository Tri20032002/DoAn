document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("#contact-form button[type='submit']");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        if (emailInput.value.trim() === "") {
            errorMessage.textContent = "Please input your Email!!!!!";
            errorMessage.style.display = "block";
        } else {
            // Gửi form nếu thông tin hợp lệ
            errorMessage.textContent = "";
            errorMessage.style.display = "none";
            // Đoạn mã để gửi form tới server ở đây (hoặc chuyển hướng tới trang xử lý form)
        }
    });
});

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const body = document.body;

    if (scrollY > 200) { // Điều kiện để hiển thị nút back to top
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});



