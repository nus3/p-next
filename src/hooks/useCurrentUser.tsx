import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { UserState } from 'store/user/types'

export const useCurrentUser = (): UserState => {
  const { user } = useSelector((state: RootState) => ({ ...state }))

  return user
}
