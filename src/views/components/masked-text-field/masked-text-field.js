import { FIELD_SELECTOR } from './constants';

import MaskedTextField from './MaskedTextFieldModule';

$(FIELD_SELECTOR).each((_index, element) => new MaskedTextField($(element)));
