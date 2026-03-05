document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var message = document.getElementById('message').value;

    var output = document.getElementById('output');

    if (name === '' || email === '' || password === '') {
        output.innerHTML = '<p class="error">Please fill in all required fields!</p>';
        return;
    }

    if (password.length < 6) {
        output.innerHTML = '<p class="error">Password must be at least 6 characters long!</p>';
        return;
    }

    output.innerHTML = '<h2>Registration Successful!</h2>' +
        '<p><strong>Name:</strong> ' + name + '</p>' +
        '<p><strong>Email:</strong> ' + email + '</p>' +
        '<p><strong>Phone:</strong> ' + (phone || 'Not provided') + '</p>' +
        '<p><strong>Gender:</strong> ' + (gender || 'Not specified') + '</p>' +
        '<p><strong>Message:</strong> ' + (message || 'No message') + '</p>';

    output.classList.add('success');
});
