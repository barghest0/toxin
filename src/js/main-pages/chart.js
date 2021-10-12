import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const ctx = $('#impressions')

const data = {
    labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
    datasets: [
        {
            label: 'My First dataset',
            data: [25, 25, 50, 0],
            backgroundColor: ['#FFE39C', '#6FCF97', '#BC9CFF', '#909090'],
            borderWidth: 1,
        },
    ],
}

const options = {
    cutout: '90%',
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 10,
                boxHeight: 10,
            },
        },
    },
}

const chart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options,
})
