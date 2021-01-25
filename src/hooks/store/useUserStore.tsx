import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { userSlice } from 'store/user'
import { UpdateUserPayload, UserState } from 'store/user/types'

export interface UseUserStore {
  user: UserState
  update: (payload: UpdateUserPayload) => void
  fetched: (payload: boolean) => void
  reset: () => void
  addHistory: (payload: string) => void
}

export const useUserStore = (): UseUserStore => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const update = (payload: UpdateUserPayload) =>
    dispatch(userSlice.actions.updateUser(payload))
  const fetched = (payload: boolean) => {
    dispatch(userSlice.actions.fetched(payload))
  }
  const reset = () => {
    dispatch(userSlice.actions.reset())
  }
  const addHistory = (payload: string) => {
    dispatch(userSlice.actions.addHistory(payload))
  }

  return {
    user,
    update,
    fetched,
    reset,
    addHistory,
  }
}
