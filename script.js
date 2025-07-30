function searchConnections() {
  const from = document.getElementById('from').value.trim();
  const to = document.getElementById('to').value.trim();
  const resultsContainer = document.getElementById('results');

  resultsContainer.innerHTML = '';

  if (!from || !to) {
    alert('Bitte Start- und Zielbahnhof eingeben.');
    return;
  }

  // Dummy-Daten (statt echter API)
  const dummyResults = [
    {
      time: '08:15',
      duration: '1h 45min',
      train: 'ICE 123',
      platform: '5',
    },
    {
      time: '09:30',
      duration: '2h 10min',
      train: 'IC 456',
      platform: '7',
    },
  ];

  dummyResults.forEach((res) => {
    const div = document.createElement('div');
    div.className = 'result-item';
    div.innerHTML = `
      <strong>${res.train}</strong><br/>
      Abfahrt: ${res.time} – Dauer: ${res.duration}<br/>
      Gleis: ${res.platform}
    `;
    resultsContainer.appendChild(div);
  });
}
