import Chart from './ChartModule';
import { CONTAINER_CLASS } from './constants';

const container = document.querySelector(`.${CONTAINER_CLASS}`);

new Chart(container);
