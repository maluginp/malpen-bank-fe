import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthApi } from "../services/AuthService";
import Storage from '../store/Storage'
import { useNavigate } from "react-router-dom";
import { setToken } from "../store/reducers/tokenReducer";
import { useAppDispatch } from "../hooks/useAppDispatch";

type Inputs = {
  email: string,
  password: string,
  repassword: string
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  repassword: yup.string().required()
    .oneOf([yup.ref('password'), null], 'Пароль должны совпадать')
});

const SignUpForm: React.FC = () => {
  const [signUp] = AuthApi.useSignUpMutation()
  const dispatch = useAppDispatch()
  
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const auth = await signUp({
      email: data.email,
      password: data.password,
    }).unwrap()

    dispatch(setToken(auth.token))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="component-sign-up-form">
      <div className="text-center mb-4">
        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Malpen Payment System</h1>
        <p>Регистрация в платежной системе Malpen</p>
        <p><strong>Сайт работает в тестовом режиме</strong></p>
      </div>
      <div className="form-label-group py-2">
        <label htmlFor="inputEmail">Email</label>
        <input
          {...register('email')}
          placeholder="Email"
          className="form-control form-control-lg"
          id="inputEmail"
          type="email" />
      </div>
      <div className="form-label-group py-2">
        <label>Пароль</label>
        <input
          {...register('password')}
          placeholder="Password"
          className="form-control form-control-lg"
          type="password" />
      </div>
      <div className="form-label-group py-2">
        <label>Повторить пароль</label>
        <input
          {...register('repassword')}
          placeholder="Password"
          className="form-control form-control-lg"
          type="password" />
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block my-4">Регистрация</button>
    </form>
  )
}

export default SignUpForm;