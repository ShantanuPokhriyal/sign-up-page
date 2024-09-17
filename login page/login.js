// login.js

// Define the valid users and passwords
const validUsers = {
    shantanu: 'shantanu1234',
    sanyam: 'sanyam1234',
    somya: 'somya1234',
    shristhi: 'shristhi1234',
    anushka: 'anushka1234',
    saurabh: 'saurabh1234'
};

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Get the message div
    const messageDiv = document.getElementById('message');

    // Validate the login credentials
    if (validUsers[username] && validUsers[username] === password) {
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';
        // Redirect to index.html after a successful login
        window.location.href = '../index.html'; // Correct path to index.html from the login page folder
    } else {
        messageDiv.textContent = 'Invalid username or password.';
        messageDiv.style.color = 'red';
    }
});
