import MaskedTextField from './MaskedTextField';
import { FIELD_SELECTOR } from './constants';

$(FIELD_SELECTOR).each((_index, element) => new MaskedTextField($(element)));
