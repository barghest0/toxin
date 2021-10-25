import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const ctx = $('#impressions')

const votesCount = 260
const data = {
    datasets: [
        {
            data: [65, 65, 130, 0],
            backgroundColor: ['#BC9CFF', '#6FCF97', '#FFE39C', '#909090'],
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
chart.canvas.parentNode.style.height = '120px'
chart.canvas.parentNode.style.width = '120px'
