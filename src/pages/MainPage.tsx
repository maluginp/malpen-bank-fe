import AccountDetails from "../components/AccountDetails";
import CreateWalletButton from "../components/CreateWalletButton";
import SidebarProtectedPageWrapper from "../components/SidebarProtectedPageWrapper";
import TransactionList from "../components/TransactionList";
import WalletList from "../components/WalletList";

const MainPage: React.FC = () => {
  return (
    <SidebarProtectedPageWrapper>
      <div className="container">
        <div className="row">
          <div className="col-8 py-lg-2 px-lg-2">
            <div className="page-account">
              <WalletList />
              <CreateWalletButton />
            </div>
          </div>
          <div className="col-4 py-lg-4 px-lg-2">
            <AccountDetails />
            <div className="row">
              <div className="col">
                <h4>Последние операции</h4>
                <TransactionList walletId={null}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProtectedPageWrapper>
  )
}

export default MainPage;