import { createApi } from '@reduxjs/toolkit/query/react'
import { ITransaction } from '../types/transaction'
import { ITransferFund } from '../types/transfer'
import { baseQueryWithAccessToken } from './core'

export const TransferApi = createApi({
    reducerPath: 'TransferApi',
    baseQuery: baseQueryWithAccessToken,
    endpoints: (build) => ({
        sendInternal: build.mutation<ITransaction, ITransferFund>({
            query: ({...body}) => ({
                url: '/transfer/internal',
                method: 'POST',
                body
            })
        }),
        sendExternal: build.mutation<ITransaction, ITransferFund>({
            query: ({...body}) => ({
                url: '/transfer/external',
                method: 'POST',
                body
            })
        })
    })
}) 