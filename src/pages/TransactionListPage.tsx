import AccountDetails from "../components/AccountDetails";
import SidebarProtectedPageWrapper from "../components/SidebarProtectedPageWrapper";
import TransactionList from "../components/TransactionList";

const TransactionListPage: React.FC = () => {
  return (
    <SidebarProtectedPageWrapper>
      <div className="container">
        <div className="row">
          <div className="col-8 pt-lg-4 px-lg-2">
            <TransactionList walletId={null}/>
          </div>
          <div className="col-4 py-lg-4 px-lg-2">
            <AccountDetails />
          </div>
        </div>
      </div>
    </SidebarProtectedPageWrapper>
  )
}

export default TransactionListPage;