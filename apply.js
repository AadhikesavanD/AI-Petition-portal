function togglePetitionerDetails() {
    const type = document.getElementById('petition-type').value;
    const detailsSection = document.getElementById('petitioner-details');
    detailsSection.style.display = type === 'others' ? 'block' : 'none';
    const inputs = detailsSection.querySelectorAll('input, textarea');
    inputs.forEach(input => input.required = type === 'others');
}

document.getElementById('petition-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const petitionId = 'PET' + Math.floor(Math.random() * 10000);
    const petitionIdDisplay = document.getElementById('petition-id');
    petitionIdDisplay.style.display = 'block';
    petitionIdDisplay.querySelector('span').textContent = petitionId;
    document.getElementById('petition-form').reset();
    document.getElementById('petitioner-details').style.display = 'none';
    alert('Petition submitted successfully! Your Petition ID: ' + petitionId);
});

document.getElementById('user-name').textContent = 'User Name';