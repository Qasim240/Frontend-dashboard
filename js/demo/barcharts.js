

 // Define the chart data and options
 var data = {
    labels: ['Internal', 'External'],
    datasets: [{
      label: 'Facilitators',
      data: [12, 7], // Replace with your actual data values
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', // Internal bar color
        'rgba(54, 162, 235, 0.2)' // External bar color
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', // Internal border color
        'rgba(54, 162, 235, 1)' // External border color
      ],
      borderWidth: 1
    }]
  };
  
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  // Define the reusable createChart function
  function createChart(canvasId, chartType, data, options) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var chart = new Chart(ctx, {
      type: chartType,
      data: data,
      options: options
    });
  }

  // Create the chart using the reusable function
  createChart('facilitatorsChart', 'bar', data, options);
  createChart('ExternalCourses', 'bar', data, options);
  createChart('CourseEnrolment', 'bar', data, options);
  createChart('TotalResumptionLateResumption', 'bar', data, options);



 // Define the chart data and options
 var data = {
    labels: ['Internal', 'External'],
    datasets: [{
      label: 'Facilitators',
      data: [12, 7], // Replace with your actual data values
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', // Internal bar color
        'rgba(54, 162, 235, 0.2)' // External bar color
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', // Internal border color
        'rgba(54, 162, 235, 1)' // External border color
      ],
      borderWidth: 1
    }]
  };
  
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  // Define the reusable createChart function
  function createChart(canvasId, chartType, data, options) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var chart = new Chart(ctx, {
      type: chartType,
      data: data,
      options: options
    });
  }

  // Create the chart using the reusable function
  createChart('facilitatorsChart', 'bar', data, options);
  createChart('ExternalCourses', 'bar', data, options);
  createChart('CourseEnrolment', 'bar', data, options);

  

  