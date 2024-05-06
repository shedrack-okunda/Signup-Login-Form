// switch to different forms
document.addEventListener("DOMContentLoaded", function () {
  const singupForm = document.getElementById("signupForm");
  const loginLink = document.getElementById("loginLink");
  const loginForm = document.getElementById("loginForm");
  const signupLink = document.getElementById("signupLink");
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  const signupLink2 = document.getElementById("signupLink");

  // show login form when login link is clicked in the sign up form
  loginLink.addEventListener("click", function (e) {
    e.preventDefault();
    singupForm.style.display = "none";
    forgotPasswordForm.style.display = "none";
    loginForm.style.display = "block";
  });

  // show sign up form when sign up link is clicked in the login form
  signupLink.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.style.display = "none";
    forgotPasswordForm.style.display = "none";
    singupForm.style.display = "block";
  });

  // show forgot password form when forgot password link is clicked
  forgotPasswordLink.addEventListener("click", function (e) {
    e.preventDefault();
    singupForm.style.display = "none";
    loginForm.style.display = "none";
    forgotPasswordForm.style.display = "block";
  });

  // show sign up form when sign up link is clicked in the forgot password form
  signupLink2.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.style.display = "none";
    forgotPasswordForm.style.display = "none";
    singupForm.style.display = "block";
  });
});

// validation sign up form
const form = document.getElementById("form");
const name = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nameValue = name.value.trim();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (nameValue === "") {
    setErrorFor(name, "Name cannot be empty.");
  } else {
    setSuccessFor(name);
  }

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be empty.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty.");
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  formGroup.className = "form-group error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

function isEmail(email) {
  return /@/.test(email);
}

// validation log in form
const form1 = document.getElementById("myForm");
const email1 = document.getElementById("email1");
const password1 = document.getElementById("password1");

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  checkLogInputs();
});

function checkLogInputs() {
  const email1Value = email1.value.trim();
  const password1Value = password1.value.trim();

  if (email1Value === "") {
    setErrorFor(email1, "Email cannot be empty.");
  } else if (!isEmail(email1Value)) {
    setErrorFor(email1, "Not a valid email.");
  } else {
    setSuccessFor(email1);
  }

  if (password1Value === "") {
    setErrorFor(password1, "Password cannot be empty.");
  } else {
    setSuccessFor(password1);
  }

  function isEmail(email) {
    return /@/.test(email);
  }
}

// validation forgot password form
const form2 = document.getElementById("forgotForm");
const email2 = document.getElementById("forgotPasswordEmail");

form2.addEventListener("submit", (e) => {
  e.preventDefault();

  checkResetInputs();
});

function checkResetInputs() {
  const email2Value = email2.value.trim();

  if (email2Value === "") {
    setErrorFor(email2, "Email cannot be empty.");
  } else if (!isEmail(email2Value)) {
    setErrorFor(email2, "Not a valid email.");
  } else {
    setSuccessFor(email2);
  }

  function isEmail(email) {
    return /@/.test(email);
  }
}

// shows the password
const passShow = document.querySelectorAll(".pass-show");

passShow.forEach((eyeSlash) => {
  eyeSlash.addEventListener("click", () => {
    let passInput = eyeSlash.parentElement.querySelectorAll(".form-input");

    passInput.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeSlash.classList.replace("fa-eye-slash", "fa-eye");
        return;
      }

      password.type = "password";
      eyeSlash.classList.replace("fa-eye", "fa-eye-slash");
    });
  });
});
