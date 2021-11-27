import {toast} from 'react-toastify';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {ThunkAppDispatch} from '../../types/action';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {postCommentsAction} from '../../store/api-actions';
import {ReviewSetting, RatingStar, REVIEW_FIELD_NAME} from '../../const';
import {getCurrentOffer} from '../../store/app-data/selectors';

const mapStateToProps = (state: State) => ({
  offer: getCurrentOffer(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(commentPost: { id: string, rating: number, comment: string }) {
    return dispatch(postCommentsAction(commentPost));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function CommentFormComponent({offer, onSubmit}: PropsFromReduxType): JSX.Element {

  const [isSendingRequest, setSendingRequest] = useState(false);

  const [formState, setFormState] = useState({
    rating: {
      value: '',
      isValid: false,
    },
    review: {
      value: '',
      isValid: false,
    },
  });

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    Promise.resolve(() => setSendingRequest(true))
      .then(() => onSubmit({
        id: String(offer?.id),
        rating: Number(formState.rating.value),
        comment: formState.review.value,
      }))
      .then(() => setFormState({
        rating: {
          value: '',
          isValid: false,
        },
        review: {
          value: '',
          isValid: false,
        },
      }))
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setSendingRequest(false);
      });
  };

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    let isValid;
    if (name === REVIEW_FIELD_NAME) {
      isValid = Boolean(value.length >= ReviewSetting.Min && value.length <= ReviewSetting.Max);
    } else {
      isValid = true;
    }

    setFormState({
      ...formState,
      [name]: {
        value,
        isValid,
      },
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingStar.map(({score, titleName}) => (
          <React.Fragment key={score}>
            <input className="form__rating-input visually-hidden"
              name="rating"
              value={score}
              id={`${score}-stars`}
              type="radio"
              onChange={handleChange}
              checked={formState.rating.value === String(score)}
            />
            <label htmlFor={`${score}-stars`} className="reviews__rating-label form__rating-label" title={titleName}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea
        value={formState.review.value}
        onChange={handleChange}
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSendingRequest || !formState.review.isValid || !formState.rating.isValid}>Submit</button>
      </div>
    </form>
  );
}

export {CommentFormComponent};
export default connector(CommentFormComponent);
