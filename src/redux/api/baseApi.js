import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout } from '../features/auth/authSlice'

// main base query
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState()
    const token = state.auth?.token

    if (token) {
      headers.set('authorization', token)
    }

    return headers
  }
})

const BaseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status === 401) {
    api.dispatch(logout())
  }

  return result
}

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: BaseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ['user']
})
