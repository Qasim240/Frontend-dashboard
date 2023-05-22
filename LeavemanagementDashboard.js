function leavemanachart(canvasId, chartType, data) {
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
        label: 'Series 1', // Name the series
        data: [500, 50, 2424, 14040, 14141, 4111, 4544, 47, 5555, 6811], // Specify the data values array
        fill: false,
        borderColor: '#2196f3', // Add custom color border (Line)
        backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
        borderWidth: 1 // Specify bar border width
    }]
}
var data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [{
        label: 'Total Resumption',
        data: [500, 50, 2424, 14040, 14141, 4111, 4544, 47, 5555, 6811],
        fill: false,
        borderColor: '#2196f3',
        backgroundColor: '#2196f3',
        borderWidth: 1
    },
    {
        label: 'Total Late Resumption',
        data: [100, 20, 303, 2020, 4545, 1000, 2323, 30, 4000, 5050],
        fill: false,
        borderColor: '#ff5722',
        backgroundColor: '#ff5722',
        borderWidth: 1
    }]
}
leavemanachart('LeaveTrendofTotalSubscribers', 'line', data);
leavemanachart('leaveTrendofTotalPartners', 'line', data);
leavemanachart('LeaveTrendofTotalCourseEnrolments', 'line', data);
leavemanachart('LeaveTotalApproved', 'line', data);
leavemanachart('LeaveTotalDeclined', 'line', data1);
