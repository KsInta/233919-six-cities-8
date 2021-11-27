import {Link} from 'react-router-dom';
import {useState, FormEvent, ChangeEvent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import Logo from '../logo/logo';
import {AppRoute, MIN_PASSWORD_LENGTH} from '../../const';
import {AuthData} from '../../types/auth-data';
import {loginAction} from '../../store/api-actions';
import {InputSignInFormProps} from './type';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & InputSignInFormProps;

function SignInScreen(props: ConnectedComponentPropsType): JSX.Element {
  const {onSubmit} = props;

  const [formState, setFormState] = useState<InputSignInFormProps>({
    email: {
      value: '',
      isValid: false,
      regex: '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.+.[a-zA-Z]{2,4}$',
    },
    password: {
      value: '',
      isValid: false,
      regex: '(?=.*[A-Za-zа-яА-Я])(?=.*[0-9])[A-Za-zа-яА-Я0-9]+',
    },
  });

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      email: formState.email.value,
      password: formState.password.value,
    });
  };

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
    const regExp = new RegExp(formState[name].regex);
    const isValid = regExp.test(value);

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        isValid,
      },
    });
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input onChange={handleChange} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onChange={handleChange} className="login__input form__input" type="password" name="password" placeholder="Password" required minLength={MIN_PASSWORD_LENGTH}/>
              </div>
              <button disabled={!formState.email.isValid || !formState.password.isValid} className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={AppRoute.Main} className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {SignInScreen};
export default connector(SignInScreen);
