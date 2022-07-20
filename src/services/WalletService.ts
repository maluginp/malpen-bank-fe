import { createApi } from '@reduxjs/toolkit/query/react'
import { IBalancedWallet, IFoundUserWallet, IUpdateWallet, IWallet } from '../types/wallet'
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
        }),
        updateWallet: build.mutation<IWallet, Partial<IUpdateWallet> & Pick<IUpdateWallet, 'id'>>({
            query: ({
                id,
                ...body
            }) => ({
                url: '/wallets/'+id,
                method: 'POST',
                body
            })
        }),
        findByNickname: build.mutation<IFoundUserWallet[], string>({
            query: (input) => ({
                url: `/wallets/search?nickname=${input}`,
                method: 'GET',
            })
        })
    })
}) 