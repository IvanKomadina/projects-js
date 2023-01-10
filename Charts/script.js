//LINE CHART
const lineChart = document.querySelector('#lineChart');

const labels = [
    '22 May',
    '23 May',
    '24 May',
    '25 May',
    '26 May',
    '27 May',
    '28 May',
    '29 May',
    '30 May',
    '31 May',
    '01 May',
    '03 May',
    '04 May',
    '05 May',
    '06 May',
    '07 May',
    '08 May',
    '09 May',
]

new Chart(lineChart, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Returning views',
                data: [1844 , 1554 , 1273 , 1284 , 1126 , 946  , 964  , 1793 , 1432 , 1130 , 1074 , 954 , 856 , 833 , 1536 , 1416 , 1248 , 1226],
                borderColor: 'rgba(66, 138, 245, 1)',
            },
            {
                label: 'New views',
                data: [1199 , 1314 , 1147 , 1403 , 1217 , 1015 , 1138 , 1272 , 957  , 862  , 716  , 712 , 610 , 585 , 847  , 744  , 756  , 781],
                borderColor: 'rgba(235, 134, 52, 1)',
            }
        ]
    }
});

//PIE CHART
const pieChart = document.querySelector('#pieChart');

new Chart(pieChart, {
    type: 'pie',
    data: {
        labels: ['Serbia', 'Bosnia and Herzegovina', 'Croatia', 'N. Macedonia', 'Montenegro', 'Other'],
        datasets: [
            {
                label: 'Countries',
                data: [49.6, 20.3, 9.5, 3.6, 2.6, 14,4],
                backgroundColor: [
                    'rgba(52, 235, 143, 1)',
                    'rgba(235, 201, 52, 1)',
                    'rgba(52, 153, 235, 1)',
                    'rgba(235, 52, 119, 1)',
                    'rgba(186, 52, 235, 1)',
                    'rgba(52, 153, 170, 1)'
                ]
            }
        ]
    }
});

//BAR CHART
const barChart = document.querySelector('#barChart');

new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['13 - 17', '18 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65+'],
        datasets: [
            {
                label: 'Audience by age',
                data: [1.7, 43.3, 34.4, 13.6, 5.6, 1.2, 0.3],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(155, 159, 64, 1)'
                ]
            }
        ]
    }
});