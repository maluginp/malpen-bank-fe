import { 
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query'
import Config from '../store/Config'
import Storage from '../store/Storage'
import HttpCodes from '../store/HttpCodes'
import { clearToken } from '../store/reducers/tokenReducer'

const baseQuery = fetchBaseQuery({
  baseUrl: Config.BaseUrl,
  prepareHeaders: (headers) => {
    const token = Storage.getToken()

    if (token) {
      headers.set('authorization', 'bearer '+token)
    }

    return headers
  }
})

export const baseQueryWithAccessToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === HttpCodes.Unauthorized) {
    api.dispatch(clearToken())
  }
  return result
}
