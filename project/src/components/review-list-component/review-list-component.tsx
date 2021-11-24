import ReviewComponent from '../review-component/review-component';
import {ReviewListProps} from './type';
import {getActualReviews} from '../../utils/utils';

function ReviewListComponent({reviews}: ReviewListProps): JSX.Element {
  const actualReviews = getActualReviews(reviews);

  return (
    <ul className="reviews__list">
      {actualReviews.map((comment) => <ReviewComponent review={comment} key={comment.id}/>)}
    </ul>
  );
}

export default ReviewListComponent;
