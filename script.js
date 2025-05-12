document.getElementById("clickButton").addEventListener("click", function() {
    alert("Button was clicked!");
});
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function() {
    hoverBox.style.backgroundColor = "blue";
});

hoverBox.addEventListener("mouseout", function() {
    hoverBox.style.backgroundColor = "red";
});
document.getElementById("textInput").addEventListener("keypress", function(event) {
    console.log("Key pressed: " + event.key);
});
// Double click event
document.getElementById("secretButton").addEventListener("dblclick", function() {
    alert("You discovered the secret!");
});

// Long press event
let timer;
document.getElementById("secretButton").addEventListener("mousedown", function() {
    timer = setTimeout(function() {
        alert("Long press detected!");
    }, 1000);  // 1000ms = 1 second
});

document.getElementById("secretButton").addEventListener("mouseup", function() {
    clearTimeout(timer);
});
document.getElementById("changeButton").addEventListener("click", function() {
    this.style.backgroundColor = "green";
    this.textContent = "I Changed!";
});
let currentImageIndex = 0;
const images = ["one.jpg", "two.jpg"]; // Replace with actual image paths

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("gallery").src = images[currentImageIndex];
}
function showTab(contentId) {
    const tabs = document.querySelectorAll(".tabContent");
    tabs.forEach(tab => tab.style.display = "none");

    document.getElementById(contentId).style.display = "block";
}
document.getElementById("myForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Username check
    if (!username) {
        alert("Username is required!");
        event.preventDefault();  // Prevent form submission
        return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        event.preventDefault();
        return;
    }

    // Password check (min 8 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        event.preventDefault();
        return;
    }
});
document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    const feedback = document.getElementById("passwordFeedback");
    if (password.length < 8) {
        feedback.textContent = "Password is too short!";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Password is strong!";
        feedback.style.color = "green";
    }
});
