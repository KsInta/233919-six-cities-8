import ReviewComponent from '../review-component/review-component';
import {ReviewListProps} from './type';

function ReviewListComponent(props: ReviewListProps): JSX.Element {
  const {comments} = props;

  return (
    <ul className="reviews__list">
      {comments.map((comment) => <ReviewComponent comment={comment} key={comment.id}/>)}
    </ul>
  );
}

export default ReviewListComponent;
