function auditpieChart(canvasId, chartType, data) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var chart = new Chart(ctx, {
        type: chartType,
        data: data,
        options: {}
    });
}

var data = {
    labels: ["Successful Logins", "Failed Logins"],
    datasets: [{
        label: 'Login Status',
        data: [100, 25], // Replace with actual values
        backgroundColor: ['green', 'red'], // Choose appropriate colors
        borderWidth: 1
    }]
};
var signupdata = {
    labels: ["Total Successful Signups", "Total Failed Signups"],
    datasets: [{
        label: 'Login Status',
        data: [50, 25], // Replace with actual values
        backgroundColor: ['green', 'red'], // Choose appropriate colors
        borderWidth: 1
    }]
};

auditpieChart('logndetails', 'pie', data);

auditpieChart('Signupdetails', 'pie', signupdata);
