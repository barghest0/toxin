import ChartFacade from '../libs/chart/ChartFacade';

class Chart {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    this.setVotes();
    this.setTotalVotes();
    this.createChart();
  }

  setTotalVotes() {
    this.totalVotes = this.votes.reduce((acc, vote) => acc + vote);

  }

  setVotes() {
    this.votes = [0, 65, 65, 130];
  }

  createChart() {
    new ChartFacade(this.container, this.votes, this.totalVotes);
  }
}

export default Chart;
