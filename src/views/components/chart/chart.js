import Chart from './ChartModule';
import { CONTAINER_SELECTOR } from './constants';

$(CONTAINER_SELECTOR).each((_index, element) => new Chart(element));
