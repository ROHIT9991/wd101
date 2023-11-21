document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var terms = document.getElementById('terms').checked;

    // Validate email
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate age
    var age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 18 || age > 55) {
        alert('Age must be between 18 and 55.');
        return;
    }

    // Add entry to table
    var entryList = document.getElementById('entryList');
    var row = document.createElement('tr');
    row.innerHTML = '<td>' + name + '</td><td>' + email + '</td><td>' + password + '</td><td>' + dob + '</td><td>' + (terms ? 'Yes' : 'No') + '</td>';
    entryList.appendChild(row);

    // Save entries to local storage
    var entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.push({ name: name, email: email, password: password, dob: dob, terms: terms });
    localStorage.setItem('entries', JSON.stringify(entries));
});

window.onload = function() {
    // Clear local storage
    localStorage.clear();

    var entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.forEach(function(entry) {
        var entryList = document.getElementById('entryList');
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + entry.name + '</td><td>' + entry.email + '</td><td>' + entry.password + '</td><td>' + entry.dob + '</td><td>' + (entry.terms ? 'Yes' : 'No') + '</td>';
        entryList.appendChild(row);
    });
};

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    /* Your existing form submission code here... */
});
