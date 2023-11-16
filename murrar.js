const registerName = document.getElementById("registerName").value;
const registerEmail = document.getElementById("registerEmail").value;
const registerPassword = document.getElementById("registerPassword").value;
const registerConPassword = document.getElementById("registerConPassword").value;

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const registerSubmitButton = document.getElementById("registerSubmit");
const registerButton = document.getElementById("registerButton");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const isAdmin = document.getElementById("isAdmin").checked;
    const validEmail = "example@example.com";
    const validPassword = "123";
    const inValidMessage = document.getElementById("inValidMessage");

    if (email === validEmail && password === validPassword) {
        const user = {
            email: email,
            isAdmin: isAdmin
        };
        localStorage.setItem("user", JSON.stringify(user));
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("logoutButton").style.display = "block";
    } else {
        inValidMessage.style.display = "block";
        inValidMessage.classList.add('inValidMessage');
    }
});

registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    alert(`Registration Successful!\nName: ${registerName}\nEmail: ${registerEmail}`);
    registerForm.style.display = "none";
    loginForm.style.display = "block";

});

registerButton.addEventListener("click", function () {
    document.getElementById("loginForm").style.display = "none";
    registerForm.style.display = "block";
    inValidMessage.style.display = "none";
});

document.getElementById("logoutButton").addEventListener("click", function () {
    localStorage.removeItem("user");
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("logoutButton").style.display = "none";
});
