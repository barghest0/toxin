import Chart from './ChartModule';

import { CONTAINER_SELECTOR } from './constants';

$(CONTAINER_SELECTOR).each(
  (_index, element) =>
    new Chart(
      element,
      [0, 65, 65, 130],
      ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
    ),
);
