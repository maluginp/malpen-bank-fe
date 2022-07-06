import { createApi } from '@reduxjs/toolkit/query/react'
import { ITransaction } from '../types/transaction'
import { baseQueryWithAccessToken } from './core'

export const TransactionApi = createApi({
    reducerPath: 'TransactionApi',
    baseQuery: baseQueryWithAccessToken,
    endpoints: (build) => ({
        fetchAll: build.query<ITransaction[], void>({
            query: () => ({
                url: '/transactions'
            })
        }),
        fetchOne: build.query<ITransaction, number>({
          query: (id) => ({
              url: `/transactions/${id}`,
          })
      }),
    })
}) 