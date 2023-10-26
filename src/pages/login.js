// loginScreen.js

const container = document.createElement("div");
container.style.textAlign = "center";
container.style.marginTop = "100px";

const heading = document.createElement("h2");
heading.textContent = "Login";

const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.id = "username";
usernameInput.placeholder = "Username";
usernameInput.style.padding = "10px";

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.id = "password";
passwordInput.placeholder = "Password";
passwordInput.style.padding = "10px";

const loginButton = document.createElement("button");
loginButton.id = "login-button";
loginButton.textContent = "Login";

const signupButton = document.createElement("button");
signupButton.id = "signup-button";
signupButton.textContent = "Sign Up";

container.appendChild(heading);
container.appendChild(usernameInput);
container.appendChild(document.createElement("br"));
container.appendChild(passwordInput);
container.appendChild(document.createElement("br"));
container.appendChild(loginButton);
container.appendChild(signupButton);

document.body.appendChild(container);

loginButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send a request to the server for authentication (server-side logic is not included here)
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // User is authenticated; handle success
            alert("Login successful");
        } else {
            // Authentication failed; handle error
            alert("Login failed");
        }
    })
    .catch(error => {
        // Handle any network or server errors
        console.error("Error:", error);
    });
});

signupButton.addEventListener("click", () => {
    // Redirect to the sign-up page or perform the desired action
    // This is where you would navigate the user to a registration page.
    alert("Sign Up clicked");
});
