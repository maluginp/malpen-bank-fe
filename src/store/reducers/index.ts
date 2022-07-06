import { combineReducers } from "redux";
import { TransactionApi } from "../../services/TransactionService";
import { WalletApi } from "../../services/WalletService";
import { AccountApi } from "../../services/AccountService";
import { TransferApi } from "../../services/TransferService";
import { AuthApi } from "../../services/AuthService";
import tokenReducer from "./tokenReducer"

export const rootReducer = combineReducers({
    tokenReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [TransactionApi.reducerPath]: TransactionApi.reducer,
    [WalletApi.reducerPath]: WalletApi.reducer,
    [AccountApi.reducerPath]: AccountApi.reducer,
    [TransferApi.reducerPath]: TransferApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>