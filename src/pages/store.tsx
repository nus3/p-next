import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { userSlice } from 'store/user'

const StorePage = (): JSX.Element => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const handleConfirm = () => {
    // eslint-disable-next-line
    console.log(user)
  }
  const handleUpdate = () => {
    dispatch(
      userSlice.actions.updateUser({
        name: 'name',
        age: 28,
        email: 'email',
        token: 'token',
        history: [],
      })
    )
  }
  const handleReset = () => {
    dispatch(userSlice.actions.reset())
  }
  const handleAddHistory = () => {
    dispatch(userSlice.actions.addHistory('push'))
  }

  return (
    <div>
      <h1>storeの動作確認</h1>
      <button type="button" onClick={handleConfirm}>
        確認
      </button>
      <button type="button" onClick={handleUpdate}>
        update
      </button>
      <button type="button" onClick={handleReset}>
        reset
      </button>
      <button type="button" onClick={handleAddHistory}>
        addHistory
      </button>
    </div>
  )
}

export default StorePage
