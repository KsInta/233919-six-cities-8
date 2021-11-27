import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {SortType} from '../../const';

const getActiveCity = (state: State): string => state[NameSpace.option].city;

const getSorting = (state: State): SortType => state[NameSpace.option].sortType;

export {getActiveCity, getSorting};
