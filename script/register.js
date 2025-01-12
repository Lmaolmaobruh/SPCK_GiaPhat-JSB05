document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Reset error messages
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirm-password-error").textContent = "";

    // Validate password length
    if (password.length < 8) {
      document.getElementById("password-error").textContent =
        "Password must be at least 8 characters long";
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      document.getElementById("confirm-password-error").textContent =
        "Passwords do not match";
      return;
    }
    alert("Account created successfully!");
    window.location.href = "./index.html";
  });
