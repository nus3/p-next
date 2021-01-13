import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddHistoryPayload, UpdateUserPayload, UserState } from './types'

export const initialState: UserState = {
  user: {
    name: null,
    age: null,
    email: null,
    token: null,
    history: [],
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // HACK: reducerも分けたくなるかな？
  reducers: {
    updateUser(state, action: PayloadAction<UpdateUserPayload>) {
      state.user = action.payload
    },
    addHistory(state, action: PayloadAction<AddHistoryPayload>) {
      state.user.history.push(action.payload)
    },
    reset(): UserState {
      return initialState
    },
  },
})
