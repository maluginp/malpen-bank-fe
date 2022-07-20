import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import TransferResult from "./TransferResult";
import { WalletApi } from "../services/WalletService";
import { TransferApi } from "../services/TransferService";
import AsyncSelect from 'react-select/async';
import { useState } from "react";

type ReactSelectSelected = {
  value: string
  label: string
}

type Inputs = {
  from: string,
  to: ReactSelectSelected,
  amount: number,
};

const schema = yup.object().shape({
  from: yup.string().required(),
  to: yup.object().shape({
    value: yup.string().required("Required"),
    label: yup.string().required("Required"),
  }),
  amount: yup.number().required(),
});

const ExternalTransferForm: React.FC = () => {
  const [_, setInputToValue] = useState("");

  const {
    data: wallets
  } = WalletApi.useFetchAllQuery()

  const [findByNickname] = WalletApi.useFindByNicknameMutation()

  const [transferFunds, {
    isSuccess
  }] = TransferApi.useSendExternalMutation()

  const { register, handleSubmit, control, formState: { errors } } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    await transferFunds({
      from: data.from,
      to: data.to.value,
      amount: data.amount
     })
  }

  const handleInputChange = (value: string) => {
    setInputToValue(value);
  };

  const loadOptions = async (inputValue: string): Promise<any> => {
    if (inputValue.length <= 2) {
      return []
    }

    const foundWallets = await findByNickname(inputValue).unwrap()

    return foundWallets.map(w => ({
      value: w.address,
      label: w.nickname
    }))
  };

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
            <Controller
              name="to"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <AsyncSelect
                  {...field}
                  isClearable
                  defaultOptions
                  placeholder={"Получатель"}
                  loadOptions={loadOptions}
                  onInputChange={handleInputChange}
                  className="form-react-select-lg"
                />
              )}
            />
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

export default ExternalTransferForm