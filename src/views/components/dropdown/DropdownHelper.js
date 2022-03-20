import {
  GUESTS,
  NEWBORNS,
  BEDROOMS,
  BEDS,
  BATHROOMS,
  FIRST_ENDING,
  SECOND_ENDING,
  THIRD_ENDING,
} from './constants';

class DropdownHelper {
  constructor() {
    this.guests = GUESTS;
    this.newborns = NEWBORNS;
    this.bedrooms = BEDROOMS;
    this.beds = BEDS;
    this.bathrooms = BATHROOMS;
  }

  getNewbornsEnding(count) {
    if (count === 1) {
      return this.newborns[FIRST_ENDING];
    }
    if (count > 1 && count < 5) {
      return this.newborns[SECOND_ENDING];
    }
    return this.newborns[THIRD_ENDING];
  }

  getGuestEnding(totalCount) {
    if (totalCount === 1) {
      return this.guests[FIRST_ENDING];
    }
    if (totalCount > 1 && totalCount < 5) {
      return this.guests[SECOND_ENDING];
    }
    return this.guests[THIRD_ENDING];
  }

  getBedroomsEnding(count) {
    if (count === 1) {
      return this.bedrooms[FIRST_ENDING];
    }
    if (count > 1 && count < 5) {
      return this.bedrooms[SECOND_ENDING];
    }
    return this.bedrooms[THIRD_ENDING];
  }

  getBedsEnding(count) {
    if (count === 1) {
      return this.beds[FIRST_ENDING];
    }
    if (count > 1 && count < 5) {
      return this.beds[SECOND_ENDING];
    }
    return this.beds[THIRD_ENDING];
  }

  getBathroomsEnding(count) {
    if (count === 1) {
      return this.bathrooms[FIRST_ENDING];
    }
    if (count > 1 && count < 5) {
      return this.bathrooms[SECOND_ENDING];
    }
    return this.bathrooms[THIRD_ENDING];
  }
}
export default DropdownHelper;
