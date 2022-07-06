import { ITransaction } from "../types/transaction"
import { makeShortAddress } from "../utils/address"
import { getAmountAsPair } from "../utils/formatter"


interface TransactionListItemProps {
  transaction: ITransaction,
}

const TransactionListItem: React.FC<TransactionListItemProps> = ({
  transaction,
}) => {

  const {
    total,
    currency,
  } = getAmountAsPair(transaction.amount)

  return (
    <div className="card my-lg-2">
      <div className="row card-body">
        <div className="col-8">
          {transaction.senderAddress && (
            <>
              <h5 className="card-title">Откуда</h5>
              <h4 className="card-subtitle mb-2 text-muted">{makeShortAddress(transaction.senderAddress)}</h4>
            </>
          )}
          {transaction.receiverAddress && (
            <>
              <h5 className="card-title">Куда</h5>
              <h4 className="card-subtitle mb-2 text-muted">{makeShortAddress(transaction.receiverAddress)}</h4>
            </>
          )}
        </div>
        <div className="col-4 text-end">
          <span className="fs-4">{total}</span><br />
          <span className="fs-6">{currency}</span>
        </div>
      </div>
    </div>
  )
}

export default TransactionListItem