const petitions = [
    { id: 'PET1234', date: 'March 15, 2025', desc: 'No water supply', status: 'Resolved' },
    { id: 'PET5678', date: 'April 01, 2025', desc: 'Road repair needed', status: 'Pending' }
];
document.getElementById('petition-list').innerHTML = petitions.map(p => `
    <tr>
        <td>${p.id}</td>
        <td>${p.date}</td>
        <td>${p.desc}</td>
        <td>${p.status}</td>
    </tr>
`).join('');

document.getElementById('user-name').textContent = 'User Name';