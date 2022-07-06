import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from "react-router-dom";
import { AuthApi } from "../services/AuthService";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setToken } from "../store/reducers/tokenReducer";

type Inputs = {
  email: string,
  password: string,
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const SignInForm: React.FC = () => {

  const [signIn] = AuthApi.useSignInMutation()
  const dispatch = useAppDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const auth = await signIn({
      email: data.email,
      password: data.password,
    }).unwrap()

    dispatch(setToken(auth.token))
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="component-sign-in-form">
      <div className="text-center mb-4">
        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Malpen Payment System</h1>
        <p>Авторизация в платежной системе Malpen</p>
        <p><strong>Сайт работает в тестовом режиме</strong></p>
      </div>
      <div className="form-label-group py-2">
        <label>Email</label>
        <input
          {...register('email')}
          placeholder="Email"
          className="form-control form-control-lg"
          type="email" />
      </div>
      <div className="form-label-group py-2">
        <label>Пароль</label>
        <input
          {...register('password')}
          placeholder="Пароль"
          className="form-control form-control-lg"
          type="password" />
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block my-4">Войти</button>

      <p className="text-end">
        <NavLink to={"/signup"} className="link-primary fs-4">Регистрация</NavLink>
      </p>
    </form>
  )
}

export default SignInForm;