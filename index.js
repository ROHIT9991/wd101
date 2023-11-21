document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var entryList = document.getElementById('entryList');
    var entry = document.createElement('div');
    entry.className = 'entries';
    entry.innerHTML = '<p>' + name + '</p><p>' + email + '</p><p>' + password + '</p><p>' + dob + '</p>';
    entryList.appendChild(entry);
    alert('Form submitted successfully!');
});
