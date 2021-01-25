import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddHistoryPayload, UpdateUserPayload, UserState } from './types'

export const initialState: UserState = {
  name: null,
  age: null,
  email: null,
  token: null,
  history: [],
  isChecking: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // HACK: reducerも分けたくなるかな？
  reducers: {
    check(state, action: PayloadAction<boolean>) {
      state.isChecking = action.payload
    },
    updateUser(state, action: PayloadAction<UpdateUserPayload>) {
      // HACK: スプレッド構文で渡したい
      state.name = action.payload.name
      state.age = action.payload.age
      state.email = action.payload.email
      state.token = action.payload.token
      state.history = action.payload.history
    },
    addHistory(state, action: PayloadAction<AddHistoryPayload>) {
      state.history.push(action.payload)
    },
    reset(state): UserState {
      return { ...initialState, isChecking: state.isChecking }
    },
  },
})
