document.getElementById('complaint-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Complaint submitted successfully!');
    document.getElementById('complaint-form').reset();
});

document.getElementById('user-name').textContent = 'User Name';