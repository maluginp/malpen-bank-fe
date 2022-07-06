import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import TransferResult from "./TransferResult";
import { WalletApi } from "../services/WalletService";
import { TransferApi } from "../services/TransferService";


type Inputs = {
  from: string,
  to: string,
  amount: number,
};

const schema = yup.object().shape({
  from: yup.string().required(),
  to: yup.string().required()
    .notOneOf([yup.ref('from')], "Кошельки должны различаться"),
  amount: yup.number().required(),
});

const TransferForm: React.FC = () => {
  const {
    data: wallets
  } = WalletApi.useFetchAllQuery()

  const [transferFunds, {
    isSuccess
  }] = TransferApi.useSendMutation()

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await transferFunds({ ...data })
  }

  if (isSuccess) {
    return (<TransferResult />)
  }

  if (wallets == null) {
    return (
      <h2>Загрузка кошельков</h2>
    )
  } else if (wallets.length == 0) {
    return (
      <h2>Список кошельков пуст</h2>
    )
  } else if (wallets.length == 1) {
    return (
      <h2>Доступен только один кошелек</h2>
    )
  } else {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="component-transfer-form">
          <div className="form-label-group py-2">
            <label htmlFor="receiverInput">Откуда</label>

            <select
              className="form-select form-select-lg mb-3"
              defaultValue={"Выберите кошелек"}
              {...register('from')}
              required
            >
              {wallets.map(w => (
                <option key={w.id} value={w.address}>{w.name}</option>
              ))}

            </select>
            <p>{errors.from?.message}</p>
          </div>
          <div className="form-label-group py-2">
            <label htmlFor="receiverInput">Куда</label>
            <select
              className="form-select form-select-lg mb-3"
              defaultValue={"Выберите кошелек"}
              {...register('to')}
              required
            >
              {wallets.map(w => (
                <option key={w.id} value={w.address}>{w.name}</option>
              ))}

            </select>
            <p>{errors.to?.message}</p>
          </div>

          <div className="form-label-group py-2">
            <label>Сумма</label>
            <input
              {...register('amount')}
              placeholder="Сумма"
              className="form-control form-control-lg"
              type="text" />
            <p>{errors.amount?.message}</p>
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block my-4">Перевести</button>
          </form>
      </>
    )
  }
}

export default TransferForm