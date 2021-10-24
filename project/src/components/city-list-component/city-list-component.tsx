import {Link} from 'react-router-dom';
import {Dispatch} from '@reduxjs/toolkit';
import {connect, ConnectedProps} from 'react-redux';
import {changeCity} from '../../store/action';
import {State} from '../../types/state';
import {Actions} from '../../types/action';
import {CITIES} from '../../const';

const mapStateToProps = ({city}: State) => ({
  city,
});

type CityListPropsType = {
}

type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & CityListPropsType;

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(cityName: string) {
    dispatch(changeCity(cityName));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function CityListComponent(props: ConnectedComponentPropsType): JSX.Element {
  const {city, onCityChange}=props;

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((item) => (
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
