import { WalletApi } from "../services/WalletService"

const CreateWalletButton: React.FC = () => {

  const {
    data: wallets,
    refetch
  } = WalletApi.useFetchAllQuery()

  const [createWallet] = WalletApi.useCreateMutation()

  async function handleCreateWallet() {
    try {
      await createWallet().unwrap()
      refetch()
    } catch (err) {
        
    }
  }

  if (wallets == null) {
    return (<></>)
  } else if (wallets.length < 5) {
    return (
      <button
        className="btn btn-primary btn-lg"
        onClick={() => handleCreateWallet()}
      >Создать кошелек</button>
    )
  }
  return (<></>)
}


export default CreateWalletButton