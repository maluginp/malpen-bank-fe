import { AccountApi } from "../services/AccountService";

const Balance: React.FC = () => {
    const {
        data
    } = AccountApi.useGetBalanceQuery()

    if (data == null) {
        return (<></>)
    }

    return (
        <div className="container component-balance">
            <div className="row">
                <label className="title">Balance</label>
                <label className="total">{data.balance}</label>
            </div>
        </div>
    )
}

export default Balance; 