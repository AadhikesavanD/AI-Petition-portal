let isLoginMode = true;

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    const title = document.getElementById('auth-title');
    const formTitle = document.getElementById('form-title');
    const subtitle = document.getElementById('form-subtitle');
    const authBtn = document.getElementById('auth-btn');
    const toggleText = document.getElementById('toggle-auth');
    const signupDetails = document.getElementById('signup-details');

    if (isLoginMode) {
        title.textContent = 'Login';
        formTitle.textContent = 'Login to Your Account';
        subtitle.textContent = 'Access your petitions and manage your account.';
        authBtn.innerHTML = 'Login <i class="fas fa-sign-in-alt"></i>';
        toggleText.innerHTML = 'Don\'t have an account? <a href="#" onclick="toggleAuthMode()">Sign Up</a>';
        signupDetails.style.display = 'none';
        document.querySelectorAll('#signup-details input, #signup-details select, #signup-details textarea').forEach(input => input.required = false);
    } else {
        title.textContent = 'Sign Up';
        formTitle.textContent = 'Create a New Account';
        subtitle.textContent = 'Join the portal to file and track petitions.';
        authBtn.innerHTML = 'Sign Up <i class="fas fa-user-plus"></i>';
        toggleText.innerHTML = 'Already have an account? <a href="#" onclick="toggleAuthMode()">Login</a>';
        signupDetails.style.display = 'block';
        document.querySelectorAll('#signup-details input, #signup-details select, #signup-details textarea').forEach(input => input.required = true);
    }
}

document.getElementById('auth-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (isLoginMode) {
        alert('Login successful! Redirecting to Home page...');
        window.location.href = 'index.html';
    } else {
        alert('Sign Up successful! Redirecting to Home page...');
        window.location.href = 'index.html';
    }
});