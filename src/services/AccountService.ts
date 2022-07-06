import { createApi } from '@reduxjs/toolkit/query/react'
import { IAccountBalance, IProfile } from '../types/account'
import { baseQueryWithAccessToken } from './core'

export const AccountApi = createApi({
  reducerPath: 'AccountApi',
  baseQuery: baseQueryWithAccessToken,
  endpoints: (build) => ({
    getBalance: build.query<IAccountBalance, void>({
      query: () => ({
        url: '/account/balance'
      })
    }),
    getProfile: build.query<IProfile, void>({
      query: () => ({
        url: '/account'
      })
    }),
  })
}) 