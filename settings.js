document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
});

document.getElementById('user-name').textContent = 'User Name';