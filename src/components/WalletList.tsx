import { NavLink } from "react-router-dom"
import { WalletApi } from "../services/WalletService"
import { splitByChunk } from "../utils/chunks"
import WalletListItem from "./WalletListItem"

const WalletList: React.FC = () => {
  const {
    data: wallets
  } = WalletApi.useFetchAllQuery()

  if (wallets == null) {
    return (<h2>Загрузка</h2>)
  } else if (wallets.length == 0) {
    return (<h2>Список кошельков пуст</h2>)
  } else {
    const chunks = splitByChunk(wallets, 2)

    return (
      <div className="container">
        {chunks.map(chunk => (
          <div className="row my-4" key={`${chunk[0].id}`}>
            <div className="col">
              {chunk[0] && (
                <NavLink to={`/wallets/${chunk[0].id}`}>
                  <WalletListItem
                    wallet={chunk[0]}
                  />
                </NavLink>
              )}
            </div>
            <div className="col">
              <div className="col">
                {chunk[1] && (
                  <NavLink to={`/wallets/${chunk[1].id}`}>
                    <WalletListItem
                      wallet={chunk[1]}
                    />
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default WalletList