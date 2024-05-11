document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get values from form fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simulate authentication (replace this with actual authentication logic)
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to dashboard or any other page
    } else {
      document.getElementById("error-message").textContent = "Invalid username or password";
    }
  });
  