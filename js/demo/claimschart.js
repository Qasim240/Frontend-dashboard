

  
  // Get the canvas element
  var ctx = document.getElementById('claims-chart').getContext('2d');

  // Define the chart data
  var data = {
      labels: ['Total Approved Claims', 'Total Declined Claims'],
      datasets: [{
          data: [80, 20], // Example data
          backgroundColor: ['#28a745', '#dc3545'] // Green for Approved Claims and Red for Declined Claims
      }]
  };
  
  // Configure the chart options
  var options = {
      responsive: true,
      legend: {
          display: false
      },
      scales: {
          xAxes: [{
              ticks: {
                  beginAtZero: true,
                  callback: function (value) {
                      return value + '%';
                  }
              }
          }]
      }
  };
  
  // Create the chart
  var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: data,
      options: options
  });
  
  
  
  
  
   
    // Get the canvas element
    var ctx = document.getElementById('claims-amount').getContext('2d');
  
    // Define the chart data
    var data = {
        labels: ['Total Approved Claims', 'Total Declined Claims'],
        datasets: [{
            data: [48, 60], // Example data
            backgroundColor: ['#28a745', '#dc3545'] // Green for Approved Claims and Red for Declined Claims
        }]
    };
    
    // Configure the chart options
    var options = {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                        return value + '%';
                    }
                }
            }]
        }
    };
    
    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: options
    });
  





    
   
    // Get the canvas element
    var ctx = document.getElementById('Acquisition-Requests').getContext('2d');
  
    // Define the chart data
    var data = {
        labels: ['Total Approved Claims', 'Total Declined Claims'],
        datasets: [{
            data: [20, 30], // Example data
            backgroundColor: ['#28a745', '#dc3545'] // Green for Approved Claims and Red for Declined Claims
        }]
    };
    
    // Configure the chart options
    var options = {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                        return value + '%';
                    }
                }
            }]
        }
    };
    
    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: options
    });
  






    
   
    // Get the canvas element
    var ctx = document.getElementById('Approved-Asset-Acquisition').getContext('2d');
  
    // Define the chart data
    var data = {
        labels: ['Total Approved Claims', 'Total Declined Claims'],
        datasets: [{
            data: [35, 28], // Example data
            backgroundColor: ['#28a745', '#dc3545'] // Green for Approved Claims and Red for Declined Claims
        }]
    };
    
    // Configure the chart options
    var options = {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                        return value + '%';
                    }
                }
            }]
        }
    };
    
    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: options
    });
  