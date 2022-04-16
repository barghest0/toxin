import MaskedTextField from './MaskedTextFieldModule';
import { FIELD_SELECTOR } from './constants';

$(FIELD_SELECTOR).each((_index, element) => new MaskedTextField($(element)));
