import { createApi } from '@reduxjs/toolkit/query/react'
import { ITransaction } from '../types/transaction'
import { ITransferFund } from '../types/transfer'
import { baseQueryWithAccessToken } from './core'

export const TransferApi = createApi({
    reducerPath: 'TransferApi',
    baseQuery: baseQueryWithAccessToken,
    endpoints: (build) => ({
        send: build.mutation<ITransaction, ITransferFund>({
            query: ({...body}) => ({
                url: '/transfer',
                method: 'POST',
                body
            })
        })
    })
}) 