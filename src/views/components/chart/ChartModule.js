import ChartFacade from '../../../libs/chart/ChartFacade';

class Chart {
  constructor(container) {
    this.container = container;
    this.context = container.getContext('2d');
    this.init();
  }

  init() {
    this.setVotes();
    this.setTotalVotes();
    this.setLabels();
    this.setGradients();
    this.createChart();
  }

  setVotes() {
    this.votes = [0, 65, 65, 130];
  }

  setTotalVotes() {
    this.totalVotes = this.votes.reduce((acc, vote) => acc + vote);
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

    this.gradients = [
      this.disappointColorGradient,
      this.satisfactoryColorGradient,
      this.goodColorGradient,
      this.greatColorGradient,
    ];
  }

  setLabels() {
    this.labels = ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'];
  }

  createChart() {
    new ChartFacade(
      this.container,
      this.context,
      this.votes,
      this.totalVotes,
      this.gradients,
      this.labels,
    );
  }
}

export default Chart;
