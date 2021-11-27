import {ActionType, Actions} from '../../types/action';
import {OptionProcess} from '../../types/state';
import {SortType, cities} from '../../const';

const initialState: OptionProcess = {
  city: cities[0],
  sortType: SortType.Popular,
};

const optionProcess = (state = initialState, action: Actions): OptionProcess => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.ChangeSorting:
      return {...state, sortType: action.payload};
    default:
      return state;
  }
};

export {optionProcess};
