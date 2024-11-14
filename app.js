const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const show = document.querySelector(".show");
const passwordInput = document.getElementById("password");

generateButton.onclick = function generatePassword() {
    const character =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!@#$%^&*_";

    const pwdLength = 8;
    let password = "";

    for (let i = 0; i < pwdLength; i++) {
        let generatePwd = Math.floor(Math.random() * character.length);
        password += character.substring(generatePwd, generatePwd + 1);
    }

    passwordInput.value = password;
};

copyButton.onclick = function copyPwd() {
    const passwordValue = passwordInput.value;
    let validPassword =
        passwordValue.trim().length < 8 || passwordValue.trim.length > 8;

    if (passwordValue.trim() === "") {
        alert("Password is empty!\nGenerate a password first.");
    } else if (validPassword) {
        alert("Password length should only be 8! Please try again.");
    } else {
        navigator.clipboard.writeText(passwordValue).then(function () {
            show.innerHTML = "Your new password is:<br> " + passwordValue;

            show.classList.add("active");
            setTimeout(() => {
                show.classList.remove("active");
            }, 2000);

            passwordInput.value = "";
            //// No need for a catch block right now :) ////
        });
    }
};
