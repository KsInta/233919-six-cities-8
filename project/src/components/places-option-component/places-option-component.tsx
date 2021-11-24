import {useEffect, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import {SortType} from '../../const';
import {State} from '../../types/state';
import {changeSorting} from '../../store/action';

type PropsFromReduxType = ConnectedProps<typeof connector>
type ConnectedComponentPropsType = PropsFromReduxType;

const mapStateToProps = ({city, offers, sortType}: State) => ({
  city,
  offers,
  sortType,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSortChange(sortType: SortType) {
    dispatch(changeSorting(sortType));
  },
});


const connector = connect(mapStateToProps, mapDispatchToProps);

function PlacesOptionComponent ({sortType, city, onSortChange}: ConnectedComponentPropsType): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    setIsOpened(false);
  }, [city]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={()=>setIsOpened((prevState) => !prevState)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened&&'places__options--opened'}`}>
        {
          Object.values(SortType).map((item) => (
            <li key ={item}
              className={`places__option ${(item===sortType)&&'places__option--active'}`}
              tabIndex={0}
              onClick={
                ()=>{
                  setIsOpened((prevState) => !prevState);
                  onSortChange(item);
                }
              }
            >{item}
            </li>))
        }

      </ul>
    </form>
  );
}

export {PlacesOptionComponent};
export default connector(PlacesOptionComponent);
