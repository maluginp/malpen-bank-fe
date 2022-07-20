import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthApi } from "../services/AuthService";
import { setToken } from "../store/reducers/tokenReducer";
import { useAppDispatch } from "../hooks/useAppDispatch";

type Inputs = {
  email: string,
  password: string,
  repassword: string,
  nickname: string,
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  repassword: yup.string().required()
    .oneOf([yup.ref('password'), null], 'Пароль должны совпадать'),
  nickname: yup.string()
    .required()
    .min(3, 'Никнейм не может быть меньше 3 символов')
    .max(50, 'Никнейм не может быть больше 50 символов')
    .matches(/[a-zA-Z0-9]/, "Разрешенны только символы на латинице и цифры")
    ,  
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
      nickname: data.nickname,
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
        <label htmlFor="inputNickname">Никнейм</label>
        <input
          {...register('nickname')}
          placeholder="Никнейм"
          className="form-control form-control-lg"
          id="inputNickname"
          type="text" />
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
          placeholder="Пароль"
          className="form-control form-control-lg"
          type="password" />
      </div>
      <div className="form-label-group py-2">
        <label>Повторить пароль</label>
        <input
          {...register('repassword')}
          placeholder="Пароль"
          className="form-control form-control-lg"
          type="password" />
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block my-4">Регистрация</button>
    </form>
  )
}

export default SignUpForm;