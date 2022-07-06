import { createApi } from '@reduxjs/toolkit/query/react'
import { IBalancedWallet, IWallet } from '../types/wallet'
import { baseQueryWithAccessToken } from './core'

export const WalletApi = createApi({
    reducerPath: 'WalletApi',
    baseQuery: baseQueryWithAccessToken,
    endpoints: (build) => ({
        fetchAll: build.query<IBalancedWallet[], void>({
            query: () => ({
                url: '/wallets'
            })
        }),
        fetchOne: build.query<IBalancedWallet, number>({
            query: (id) => ({
                url: `/wallets/${id}`,
            })
        }),
        create: build.mutation<IWallet, void>({
            query: () => ({
                url: '/wallets',
                method: 'POST'
            })
        })
    })
}) 