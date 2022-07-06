import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Storage from "../Storage";

export interface TokenState {
  token: string | null
}

const initialState: TokenState = {
  token: Storage.getToken()
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    clearToken(state: TokenState) {
      Storage.setToken(null)
      state.token = null
    },
    setToken(state: TokenState, action: PayloadAction<string>) {
      Storage.setToken(action.payload)
      state.token = action.payload
    }
  },
})

export const { clearToken, setToken } = tokenSlice.actions
export default tokenSlice.reducer