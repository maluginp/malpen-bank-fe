import { IBalancedWallet } from "../types/wallet"
import { formatAmount } from "../utils/formatter"

interface WalletDetailsProps {
  wallet: IBalancedWallet
}

const TransactionDetails: React.FC<WalletDetailsProps> = ({
  wallet
}) => {
  
  return (
    <div className="row">
      <div className="col">
        <h2>Кошелек</h2>
        <h5>Адрес</h5>
        <h4>{ wallet.address }</h4>
        <h5>Баланс</h5>
        <h3>{ formatAmount(wallet.balance) }</h3>
      </div>
    </div>
  )
}

export default TransactionDetails