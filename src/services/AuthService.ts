import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Config from "../store/Config";
import { 
  ISignInQuery, 
  ISignInResponse, 
  ISignUpQuery, 
  ISignUpResponse 
} from "../types/auth";

export const AuthApi = createApi({
  reducerPath: 'AuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BaseUrl,
  }),
  endpoints: (build) => ({
    signIn: build.mutation<ISignInResponse, ISignInQuery>({
      query: ({...body}) => ({
        url: '/auth/signin',
        method: 'POST',
        body
      })
    }),
    signUp: build.mutation<ISignUpResponse, ISignUpQuery>({
      query: ({...body}) => ({
        url: '/auth/signup',
        method: 'POST',
        body
      })
    }),
  })
}) 