function leavechartmore(canvasId, chartType, data) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var chart = new Chart(ctx, {
        type: chartType,
        data: data,
        options: {}
    });
}


var data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [{
        label: 'Total Approved Leave Request',
        data: [500, 50, 2424, 14040, 14141, 4111, 4544, 47, 5555, 6811],
        fill: false,
        borderColor: '#2196f3',
        backgroundColor: '#2196f3',
        borderWidth: 1
    },
    {
        label: 'Total Declined Leave Request',
        data: [100, 20, 303, 2020, 4545, 1000, 2323, 30, 4000, 5050],
        fill: false,
        borderColor: '#ff5722',
        backgroundColor: '#ff5722',
        borderWidth: 1
    }]
}


// leavechartmore('LeaveLateResumptionchart', 'line', data2);
// leavechartmore('LeaveTotalDeclined', 'line', data2);
// leavechartmore('LeaveTotalResumption', 'line', data2);
// leavechartmore('LeaveLateResumption', 'line', data2);
leavechartmore('LeaveApprovedvsDecline', 'bar', data22);
