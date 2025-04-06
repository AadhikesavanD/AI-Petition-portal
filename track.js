document.getElementById('track-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const status = { status: 'Under Review', date: 'April 02, 2025' };
    document.getElementById('status-result').style.display = 'block';
    document.getElementById('status-text').textContent = status.status;
    document.getElementById('status-date').textContent = status.date;
});

document.getElementById('user-name').textContent = 'User Name';