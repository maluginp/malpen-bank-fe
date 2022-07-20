import { useNavigate, useParams } from "react-router-dom";
import AccountDetails from "../components/AccountDetails";
import SidebarProtectedPageWrapper from "../components/SidebarProtectedPageWrapper";
import WalletDetails from "../components/WalletDetails";
import { WalletApi } from "../services/WalletService";

const WalletDetailsPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const walletId = parseInt(id ?? "-1")

    if (walletId <= 0) {
        navigate('/404')
    }


    const {
        data,
        isLoading
    } = WalletApi.useFetchOneQuery(walletId)



    return (
        <SidebarProtectedPageWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-8 pt-lg-4 px-lg-2">
                        {data && (
                            <>
                                <WalletDetails wallet={data} />
                                {/* <p></p>
                                <h2>Транзакции</h2>
                                <TransactionList walletId={data.id} /> */}
                            </>
                        )}

                        {isLoading && (<h3>Загрузка</h3>)}

                    </div>
                    <div className="col-4 py-lg-4 px-lg-2">
                        <AccountDetails />
                    </div>
                </div>
            </div>
        </SidebarProtectedPageWrapper>
    )
}

export default WalletDetailsPage;