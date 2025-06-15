document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const username = getInputValue("username");
        const email = getInputValue("email");
        const password = getInputValue("password");

        const { isValid, messages } = validateInputs(username, email, password);

        displayFeedback(isValid, messages, feedbackDiv);

        console.log({ username, email, password, isValid, messages });
    });
});

function getInputValue(id) {
    return document.getElementById(id).value.trim();
}

function validateInputs(username, email, password) {
    let isValid = true;
    const messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
    }

    if (!email.includes("@") || !email.includes(".")) {
        isValid = false;
        messages.push("Email must contain '@' and '.' characters.");
    }

    if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
    }

    return { isValid, messages };
}

function displayFeedback(isValid, messages, feedbackDiv) {
    feedbackDiv.style.display = "block";
    if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745"; 
    } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"; 
    }
}
