import { NavLink } from "react-router-dom";
import { TransactionApi } from "../services/TransactionService";
import TransactionListItem from "./TransactionListItem";

interface TransactionListProps {
  walletId: number | null | undefined
}

const TransactionList: React.FC<TransactionListProps> = ({
  walletId
}) => {
  const {
    data: transactions
  } = TransactionApi.useFetchAllQuery()

  if (transactions == null) {
    return (<h2>...</h2>)
  } else if (transactions.length == 0) {
    return (<h2>Список транзакций пуст</h2>)
  } else {
    return (
      <>
        {transactions.map(tr => (
          <NavLink to={`/transactions/${tr.id}`} key={tr.id}>
            <TransactionListItem transaction={tr} />
          </NavLink>
        ))}
      </>
    )
  }
}

export default TransactionList