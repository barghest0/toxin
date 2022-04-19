import { Chart, registerables } from 'chart.js';

import { TURNING_POINT } from '../../views/components/chart/constants';

Chart.register(...registerables);

class ChartFacade {
  constructor(container, context, votes, totalVotes, backgroundColors, labels) {
    this.container = container;
    this.context = context;
    this.votes = votes;
    this.totalVotes = totalVotes;
    this.backgroundColors = backgroundColors;
    this.labels = labels;
    this.init();
  }

  init() {
    this.setData();
    this.setOptions();
    this.setPlugins();
    this.createChart();
    this.attachListeners();
  }

  setData() {
    this.data = {
      labels: this.labels,
      datasets: [
        {
          data: this.votes,
          backgroundColor: this.backgroundColors,
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
          votesCount: this.totalVotes,
          votes: 'ГОЛОСОВ',
        },
      },

      layout: {
        padding: {
          bottom: -5,
          left: -5,
        },
      },

      plugins: {
        legend: {
          position: window.innerWidth >= TURNING_POINT ? 'right' : 'bottom',
          doughnutMode: true,
          align: window.innerWidth >= TURNING_POINT ? 'end' : 'center',
          reverse: true,
          onClick: false,
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

  setPlugins() {
    this.plugins = [
      {
        beforeDraw: chart => {
          const {
            ctx,
            chartArea: { width, height },
          } = chart;

          ctx.save();
          ctx.fillStyle = '#BC9CFF';
          const x = width / 2;
          const y = height / 2;
          const text = 'ГОЛОСОВ';
          ctx.font = 'bold 12px Montserrat';
          ctx.textAlign = 'center';
          ctx.fillText(text, x, y + 20);
          ctx.font = 'bold 24px Montserrat';
          ctx.fillText(this.totalVotes, x, y);
        },
      },
    ];
  }

  handleWindowResize() {
    this.chart = new Chart(this.container, {
      type: 'doughnut',
      data: this.data,
      options: this.options,
      plugins: this.plugins,
    });
  }

  createChart() {
    window.addEventListener('load', this.handleWindowResize.bind(this));
  }

  attachListeners() {
    window.addEventListener('resize', this.checkWindowSize.bind(this));
  }

  checkWindowSize(event) {
    if (event.target.innerWidth <= TURNING_POINT) {
      this.changeLegendPositionToBottom();
    } else {
      this.changeLegendPositionToRight();
    }
  }

  changeLegendPositionToBottom() {
    this.chart.options.plugins.legend.position = 'bottom';
    this.chart.options.plugins.legend.align = 'center';
    this.chart.update();
  }

  changeLegendPositionToRight() {
    this.chart.options.plugins.legend.position = 'right';
    this.chart.options.plugins.legend.align = 'end';
    this.chart.update();
  }
}

export default ChartFacade;
