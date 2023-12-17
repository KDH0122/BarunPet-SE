const labels = [
  '0','1', '2', '3', '4', '5', '6', '7', '8', '9', 
  '10','11', '12', '13', '14', '15', '16', '17', '18', '19',
  '20','21', '22', '23', '24', '25', '26', '27', '28', '29',
  '30','31', '32', '33', '34', '35', '36', '37', '38', '39',
  '40'
];

const data = {
    labels: labels,
    datasets: [
      {
        label: 'IMU Data',
        data: [-5, -5, 8, -5, -44, -138, -101, -100, -70, -46,
        -20, -11, 5, 23, 1, 11, 90, 186, 75, 38, 
        39, 15, 5, 16, -1, -8, -5, -7, -5, -1
        -2, -8, -5, -9, -6,-7, -11, -6, -5, -7],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
        yAxisID: 'y',
      },
      {
        label: 'Kalman filter',
        data: [-7, -7, -8, -8, -10, -23, -22, -31, -38, -43
        -46, -43, -45, -48, -47, -42, -27, -25, -17, -7
        -5, -1, 0, 2, 2, 3, 2, 2, 4, 3,
        3, 4, 3, 3, 3, 3, 2, 3, 3, 2],
        borderColor: 'rgb(141, 214, 255)',
        backgroundColor: 'rgb(141, 214, 255)',
        yAxisID: 'y1',
      }
    ]
  };

const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis'
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
  
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
    },
  };

const ctx = document.getElementById('GaitStabilityGraph').getContext('2d');

const myChart = new Chart(
    ctx,
    config
);

/*
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
*/