import { NavLink } from "react-router-dom"
import { formatAmount } from "../utils/formatter"
import * as Icon from 'react-bootstrap-icons';
import { AccountApi } from "../services/AccountService";

interface AccountDetailsProps { }

const AccountDetails: React.FC<AccountDetailsProps> = () => {
  const {
    data
  } = AccountApi.useGetBalanceQuery()


  if (data?.balance == null) {
    return (<></>)
  }

  return (
    <>
      <div className="row">
        <div className="col pb-3 text-center">
          <h4>Баланс</h4>
        </div>
      </div>

      {data?.balance &&
        <div className="row">
          <div className="col text-center pb-3">
            <h1>{formatAmount(data?.balance)}</h1>
          </div>
        </div>
      }

      <div className="row pb-lg-5">
        <div className="col" />
        <div className="col text-center">
          <NavLink to="/transfer">
            <Icon.ArrowUpCircle size={32} /><br />
            Отправить
          </NavLink>
        </div>
        {/* <div className="col text-center">
          <NavLink to="/transfer">
            <Icon.ArrowDownCircle size={32} /><br />
            Получить
          </NavLink>
        </div> */}
        <div className="col" />
      </div>
    </>
  )
}

export default AccountDetails