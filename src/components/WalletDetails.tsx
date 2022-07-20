import { WalletApi } from "../services/WalletService"
import { IBalancedWallet } from "../types/wallet"
import { formatAmount } from "../utils/formatter"
import EditableText from "./EditableText"

interface WalletDetailsProps {
  wallet: IBalancedWallet
}

const WalletDetails: React.FC<WalletDetailsProps> = ({
  wallet
}) => {
  
  const [updateWallet] = WalletApi.useUpdateWalletMutation()

  return (
    <>
      <div className="row">
        <div className="col">
          <h5>Имя</h5>
          <EditableText 
            text={wallet.name}
            onChanged={async (newName) => {
              await updateWallet({
                id: wallet.id,
                name: newName
              }).unwrap()
            }}
            className="fs-4"
          />
          {wallet.isDefault && (
            "Основной кошелек"
          )}
          <h5>Адрес</h5>
          <h4>{ wallet.address }</h4>
          <h5>Баланс</h5>
          <h3>{ formatAmount(wallet.balance) }</h3>
          
        </div>
      </div>
      <div className="row">
        <div className="col text-end">
          <button className="btn btn-danger">Удалить</button>
        </div>
      </div>  
    </>
  )
}

export default WalletDetails