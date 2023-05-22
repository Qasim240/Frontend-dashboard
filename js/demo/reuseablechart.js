function createChart(canvasId, chartType, data) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var chart = new Chart(ctx, {
        type: chartType,
        data: data,
        options: {}
    });
}

var data1 = {
    labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Ag", "Sep", "Oct", "Nov"],
    datasets: [{
        label: 'Series 1', // Name the series
        data: [500, 50, 2424, 14040, 14141, 4111, 4544, 47, 5555, 6811], // Specify the data values array
        fill: false,
        borderColor: '#2196f3', // Add custom color border (Line)
        backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
        borderWidth: 1 // Specify bar border width
    }]
}
createChart('TrendofTotalSubscribers', 'line',data1)
createChart('TrendofTotalPartners', 'line',data1)
createChart('TrendofTotalCourseEnrolments', 'line',data1)
createChart('leaveChart', 'line',data1)
createChart('TrendofTotalAssessmentsCreated', 'line',data1)
createChart('AssessmentSubmitted', 'line',data1)






