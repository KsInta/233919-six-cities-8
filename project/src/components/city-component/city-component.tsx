import {CityComponentProps} from './type';
import {Link} from 'react-router-dom';

function CityComponent({city}: CityComponentProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="/">
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityComponent;
