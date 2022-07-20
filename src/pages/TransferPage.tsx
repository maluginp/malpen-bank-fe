import AccountDetails from "../components/AccountDetails";
import SidebarProtectedPageWrapper from "../components/SidebarProtectedPageWrapper";
import TransactionList from "../components/TransactionList";
import InternalTransferForm from "../components/InternalTransferForm";
import ExternalTransferForm from "../components/ExternalTransferForm";

const TransferPage: React.FC = () => {
  return (
    <SidebarProtectedPageWrapper>
      <div className="container">
        <div className="row">
          <div className="col-8 py-lg-2 px-lg-5">
            <InternalTransferForm />

            <h2>External</h2>
            <ExternalTransferForm />
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

export default TransferPage;