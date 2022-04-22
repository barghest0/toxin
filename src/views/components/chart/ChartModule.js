import ChartFacade from '../../../libs/chart/ChartFacade';
import {
  DISAPPOINT_END_COLOR,
  DISAPPOINT_START_COLOR,
  GOOD_END_COLOR,
  GOOD_START_COLOR,
  GREAT_END_COLOR,
  GREAT_START_COLOR,
  SATISFACTORY_END_COLOR,
  SATISFACTORY_START_COLOR,
} from './constants';

class Chart {
  constructor(container, votes, labels) {
    this.container = container;
    this.votes = votes;
    this.labels = labels;
    this.context = container.getContext('2d');
    this.init();
  }

  init() {
    this.setTotalVotes();
    this.setGradients();
    this.createChart();
  }

  setTotalVotes() {
    this.totalVotes = this.votes.reduce((acc, vote) => acc + vote);
  }

  setGradients() {
    this.disappointColorGradient = this.context.createLinearGradient(
      0,
      0,
      0,
      200,
    );
    this.disappointColorGradient.addColorStop(0, DISAPPOINT_START_COLOR);
    this.disappointColorGradient.addColorStop(1, DISAPPOINT_END_COLOR);

    this.satisfactoryColorGradient = this.context.createLinearGradient(
      0,
      0,
      0,
      200,
    );
    this.satisfactoryColorGradient.addColorStop(0, SATISFACTORY_START_COLOR);
    this.satisfactoryColorGradient.addColorStop(1, SATISFACTORY_END_COLOR);

    this.goodColorGradient = this.context.createLinearGradient(0, 0, 0, 200);
    this.goodColorGradient.addColorStop(0, GOOD_START_COLOR);
    this.goodColorGradient.addColorStop(1, GOOD_END_COLOR);

    this.greatColorGradient = this.context.createLinearGradient(0, 0, 0, 200);
    this.greatColorGradient.addColorStop(0, GREAT_START_COLOR);
    this.greatColorGradient.addColorStop(1, GREAT_END_COLOR);

    this.gradients = [
      this.disappointColorGradient,
      this.satisfactoryColorGradient,
      this.goodColorGradient,
      this.greatColorGradient,
    ];
  }

  createChart() {
    this.chart = new ChartFacade(
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
