type CityComponentProps = {
  city: string;
}

function CityComponent({city}: CityComponentProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CityComponent;
