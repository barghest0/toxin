import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

class ChartFacade {
  constructor(container, votes, totalVotes) {
    this.container = container;
    this.votes = votes;
    this.totalVotes = totalVotes;
    this.init();
  }

  init() {
    this.getContext();
    this.setGradients();
    this.setData();
    this.setOptions();
    this.createChart();
  }

  getContext() {
    this.context = this.container.getContext('2d');
  }

  setGradients() {
    this.disappointColorGradient = this.context.createLinearGradient(0, 0, 0, 200);
    this.disappointColorGradient.addColorStop(0, '#909090');
    this.disappointColorGradient.addColorStop(1, '#3D4975');

    this.satisfactoryColorGradient = this.context.createLinearGradient(0, 0, 0, 200);
    this.satisfactoryColorGradient.addColorStop(0, '#BC9CFF');
    this.satisfactoryColorGradient.addColorStop(1, '#8BA4F9');

    this.goodColorGradient = this.context.createLinearGradient(0, 0, 0, 200);
    this.goodColorGradient.addColorStop(0, '#6FCF97');
    this.goodColorGradient.addColorStop(1, '#66D2EA');

    this.greatColorGradient = this.context.createLinearGradient(0, 0, 0, 200);
    this.greatColorGradient.addColorStop(0, '#FFE39C');
    this.greatColorGradient.addColorStop(1, '#FFBA9C');
  }

  setData() {
    this.data = {
      labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
      datasets: [
        {
          data: this.votes,
          backgroundColor: [
            this.disappointColorGradient,
            this.satisfactoryColorGradient,
            this.goodColorGradient,
            this.greatColorGradient,
          ],
        },
      ],
    };
  }

  setOptions() {
    this.options = {
      cutout: '90%',
      radius: '61',
      responsive: true,
      maintainAspectRatio: false,

      elements: {
        responsive: true,
        center: {
          votesCount: this.votesCount,
          votes: 'ГОЛОСОВ',
        },
      },

      layout: {
        padding: {
          left: -10,
          right: 0,
          top: 0,
          bottom: -5,
        },
      },

      plugins: {
        legend: {
          position: 'right',
          align: 'end',
          reverse: true,
          labels: {
            boxWidth: 8,
            boxHeight: 8,
            borderRadius: '50%',
            usePointStyle: true,
            pointStyle: 'circle',
            font: {
              family: 'Montserrat',
              style: 'normal',
              weight: 'normal',
              size: 14,
              lineHeight: 24,
              color: 'rgba(31, 32, 65, 0.75)',
            },
          },
        },
      },
    };
  }

  createChart() {
    new Chart(this.container, {
      type: 'doughnut',
      data: this.data,
      options: this.options,
    });
  }
}

export default ChartFacade;
