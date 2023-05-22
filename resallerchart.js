function internalchart(canvasId, chartType, data) {
  var ctx = document.getElementById(canvasId).getContext('2d');
  var chart = new Chart(ctx, {
      type: chartType,
      data: data,
      options: {}
  });
}

var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  datasets: [{
      label: 'Total Missed Deadlines',
      data: [10, 15, 8, 12, 5, 20, 10, 9, 7, 18, 6],
      fill: false,
      borderColor: '#ff5722',
      backgroundColor: '#ff5722',
      borderWidth: 1
  }
 ]
}

internalchart('ResallerTrendofTotalAssessmentsCreated', 'line', data);
internalchart('ResallerAssessmentSubmitted', 'line', data);
