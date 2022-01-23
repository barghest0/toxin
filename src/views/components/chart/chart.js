import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const ctx = document.querySelector('#impressions').getContext('2d')

const purpleGradient = ctx.createLinearGradient(0, 0, 0, 200)
purpleGradient.addColorStop(0, '#BC9CFF')
purpleGradient.addColorStop(1, '#8BA4F9')

const greenGradient = ctx.createLinearGradient(0, 0, 0, 200)
greenGradient.addColorStop(0, '#6FCF97')
greenGradient.addColorStop(1, '#66D2EA')

const yellowGradient = ctx.createLinearGradient(0, 0, 0, 200)
yellowGradient.addColorStop(0, '#FFE39C')
yellowGradient.addColorStop(1, '#FFBA9C')

const blackGradient = ctx.createLinearGradient(0, 0, 0, 200)
blackGradient.addColorStop(0, '#909090')
blackGradient.addColorStop(1, '#3D4975')

const votesCount = 260
const data = {
    datasets: [
        {
            data: [65, 65, 130, 0],
            backgroundColor: [
                purpleGradient,
                greenGradient,
                yellowGradient,
                blackGradient,
            ],
        },
    ],
}
const options = {
    cutout: '90%',
    responsive: true,
    maintainAspectRatio: true,

    elements: {
        responsive: true,
        center: {
            votesCount: votesCount,
            votes: 'ГОЛОСОВ',
        },
    },
}

const chart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options,
    plugins: [
        {
            beforeDraw: function (chart, args, options) {
                const width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx

                ctx.restore()
                ctx.font = 'bold 24px sans-serif'
                ctx.fillStyle = '#BC9CFF'
                ctx.textBaseline = 'middle'
                let text = chart.config.options.elements.center.votesCount,
                    textX = Math.round(
                        (width - ctx.measureText(text).width) / 2
                    ),
                    textY = height / 2.1
                ctx.fillText(text, textX, textY)
                ctx.font = 'bold 12px sans-serif'
                ;(text = chart.config.options.elements.center.votes),
                    ctx.fillText(text, textX - 10, textY + 20)
                ctx.save()
            },
        },
    ],
})

if (chart.canvas) {
    chart.canvas.parentNode.style.height = '120px'
    chart.canvas.parentNode.style.width = '120px'
}
