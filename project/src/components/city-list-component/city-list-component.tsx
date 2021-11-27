import {Link} from 'react-router-dom';
import {Dispatch} from '@reduxjs/toolkit';
import {connect, ConnectedProps} from 'react-redux';
import {changeCity} from '../../store/action';
import {State} from '../../types/state';
import {Actions} from '../../types/action';
import {cities} from '../../const';
import {getActiveCity} from '../../store/option-process/selectors';

const mapStateToProps = (state: State) => ({
  city: getActiveCity(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(cityName: string) {
    dispatch(changeCity(cityName));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function CityListComponent({city, onCityChange}: PropsFromReduxType): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => (
        <li key={item} className="locations__item">
          <Link className={`locations__item-link tabs__item ${(city===item)&&'tabs__item--active'}`}
            onClick = {(evt)=>{
              evt.preventDefault();
              onCityChange(item);}} to="/"
          >
            <span>{item}</span>
          </Link>
        </li>))}
    </ul>
  );
}

export {CityListComponent};
export default connector(CityListComponent);
