import { ITransaction, transactionStatusToText } from "../types/transaction"
import { makeShortAddress } from "../utils/address"
import { formatAmount, formateDateTime } from "../utils/formatter"

interface TransactionDetailsProps {
  transaction: ITransaction
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({
  transaction
}) => {
  
  return (
    <div className="container">
      <h5>ID</h5>
      <h3>{transaction.id}</h3>
      <h5>Отправитель</h5>
      <h3>{ makeShortAddress(transaction.senderAddress) }</h3>
      {transaction.receiverAddress && (
        <>
          <h5>Получатель</h5>
          <h3>{ makeShortAddress(transaction.receiverAddress) }</h3>
        </>
      )}
      <h5>Сумма</h5>
      <h3>{ formatAmount(transaction.amount) }</h3>
      <h5>Статус</h5>
      <h3>{ transactionStatusToText(transaction.status) }</h3>
      <h5>Дата создания</h5>
      <h3>{formateDateTime(transaction.createdAt)}</h3>
    </div>
  )
}

export default TransactionDetails