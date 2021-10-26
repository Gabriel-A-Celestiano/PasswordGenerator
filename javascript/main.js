function getPassword() {
    var chars = '!@#0123456789abcdefghijklmnopqrstuvwxz!@#ABCDEFGHIJKLMNOPQRSTUVWXZ!@#';
    var passwordLength = 9;
    var password = "";

    for(var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById('password').value = password;
    alertBox.innerHTML = `New Password Copied: <br> ${password}`;
}


var alertBox = document.querySelector('.alertBox');

function copyPassword() {
    var copyPassText = document.getElementById('password');
    copyPassText.select();
    copyPassText.setSelectionRange(0,9999);
    document.execCommand('copy');
    alertBox.classList.toggle('active');

    setTimeout(function(){
        alertBox.classList.toggle('active');
    }, 2000);

}