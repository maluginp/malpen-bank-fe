import { IBalancedWallet, IWallet } from "../types/wallet"
import { makeShortAddress } from "../utils/address"
import { formatAmount } from "../utils/formatter"

interface WalletListItemProps {
  wallet: IBalancedWallet,
}

const WalletListItem: React.FC<WalletListItemProps> = ({
  wallet,
}) => {

  if (wallet == null) {
    return (<></>)
  }

  return (
    <div className="card">
      <div className="row">
        <div className="col card-body mx-2">
          {wallet.name && (
            <>
              <h5 className="card-title">Название</h5>
              <h4 className="card-subtitle">{makeShortAddress(wallet.name)}</h4>
              <br />
            </>
          )}

          {wallet.address && (
            <>
              <h5 className="card-title">Адрес</h5>
              <h4 className="card-subtitle">{makeShortAddress(wallet.address)}</h4>
              <br />
            </>
          )}

          {wallet.balance && (
            <>
              <h5 className="card-title">Баланс</h5>
              <h3 className="card-subtitle">{formatAmount(wallet.balance)}</h3>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default WalletListItem