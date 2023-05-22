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
    },
    {
        label: 'Total Late Deliveries',
        data: [5, 7, 3, 4, 2, 8, 5, 3, 4, 6, 2],
        fill: false,
        borderColor: '#ffeb3b',
        backgroundColor: '#ffeb3b',
        borderWidth: 1
    },
    {
        label: 'Total Successfully Completed',
        data: [485, 28, 2413, 13924, 14134, 4083, 4529, 35, 5544, 6787, 4103],
        fill: false,
        borderColor: '#2196f3',
        backgroundColor: '#2196f3',
        borderWidth: 1
    }]
}

internalchart('DeadlinesVsTotalLatevssssss', 'bar', data);
