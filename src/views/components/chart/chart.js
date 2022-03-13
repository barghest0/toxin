import Chart from './ChartModule';
import { CONTAINER_SELECTOR } from './constants';

const container = document.querySelector(CONTAINER_SELECTOR);

new Chart(container);
