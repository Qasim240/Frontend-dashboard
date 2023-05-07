// Get the canvas element
var faqVsKbCanvas = document.getElementById('faqVsKbChart');

// Set chart options
var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        position: 'bottom',
        labels: {
            fontColor: '#333',
            usePointStyle: true,
        }
    },
    tooltips: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#FFF',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        borderColor: '#333',
        borderWidth: 1
    },
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Date'
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Number of Views/Searches'
            }
        }]
    }
};

// Set chart data
var chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'FAQ Views',
        data: [20, 25, 40, 35, 45, 50, 60, 55, 70, 80, 75, 90],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
    }, {
        label: 'Knowledgebase Searches',
        data: [10, 15, 20, 25, 30, 40, 50, 60, 70, 75, 80, 85],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
    }]
};

// Create the chart object
var faqVsKbChart = new Chart(faqVsKbCanvas, {
    type: 'line',
    data: chartData,
    options: chartOptions
});




