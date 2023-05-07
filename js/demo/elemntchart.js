var ctx = document.getElementById('elementChart').getContext('2d');
  var elementChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ['Total Statutory Element', 'Total Deductible Element', 'Total Custom Element'],
      datasets: [{
        label: 'Total Amount',
        backgroundColor: ['#007bff', '#28a745', '#dc3545'],
        data: [5000, 8000, 3000]
      }]
    },
    options: {
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true
          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            reverse: true
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });






