var ctx = document.getElementById('myChart3');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data : {
        labels: [
        'Andamento',
        'Concluido',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [120, 50],
            backgroundColor: [
                'rgb(140, 40, 220)',
                'rgb(50, 150, 150)',
            ],
            hoverOffset: 4
        }]
    },
});