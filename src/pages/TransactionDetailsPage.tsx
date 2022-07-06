import { useNavigate, useParams } from "react-router-dom";
import AccountDetails from "../components/AccountDetails";
import SidebarProtectedPageWrapper from "../components/SidebarProtectedPageWrapper";
import TransactionDetails from "../components/TransactionDetails";
import { TransactionApi } from "../services/TransactionService";

const TransactionDetailsPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    if (id == null) {
        navigate('/404')
    }

    const transactionId = parseInt(id ?? "-1")

    const {
        data,
        isLoading
    } = TransactionApi.useFetchOneQuery(transactionId)
    
  
    if (isLoading) {
      return (<h3>Загрузка</h3>)
    }

    if (data) {
        return (
            <SidebarProtectedPageWrapper>
              <div className="container">
                <div className="row">
                  <div className="col-8 pt-lg-4 px-lg-2">
                    <TransactionDetails transaction={data} />
                  </div>
                  <div className="col-4 py-lg-4 px-lg-2">
                    <AccountDetails />
                  </div>
                </div>
              </div>
            </SidebarProtectedPageWrapper>
          )
    }

    return (<></>)
}

export default TransactionDetailsPage;