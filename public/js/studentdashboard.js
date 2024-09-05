  // Chart.js code to create a bar chart for the Theory and Practical values
  var ctx = document.getElementById('subjectChart').getContext('2d');
  var subjectChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['EDA', 'MTS', 'DSA', 'DBMS'],
      datasets: [
        {
          label: 'Theory (60%)',
          backgroundColor: '#1a2a38',
          data: [40, 39, 35, 50]
        },
        {
          label: 'Practical (40%)',
          backgroundColor: '#f39c12',
          data: [33, 33, 32, 25]
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 60
        }
      }
    }
  });

  // Chart.js code to create a line chart for Performance section
  var ctxPerformance = document.getElementById('performanceChart').getContext('2d');
  var performanceChart = new Chart(ctxPerformance, {
    type: 'line',
    data: {
        labels: ['FE', 'SE', 'TE', 'BE'],  // Years
        datasets: [
            {
                label: 'Pointers',
                backgroundColor: 'rgba(26, 42, 56, 0.6)',
                borderColor: '#1a2a38',
                data: [7.5, 8, 8.5, 9.5],  // Pointers
                fill: false,
                tension: 0.1
            },
            {
                label: 'Growth',
                backgroundColor: 'rgba(243, 156, 18, 0.6)',
                borderColor: '#f39c12',
                data: [7.5, 0.5, 0.5, 1.0],  // Growth
                fill: false,
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 10
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
  });