import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { userSlice } from 'store/user'

const StorePage: NextPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const router = useRouter()

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

  const handleMoveIndex = () => {
    router.push('/')
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
      <p>{user.user.age}</p>
      <p>{user.user.name}</p>
      <p>{user.user.email}</p>
      <p>{user.user.token}</p>
      <p>ヒストリーの数：{user.user.history.length}</p>
      <button type="button" onClick={handleMoveIndex}>
        home
      </button>
    </div>
  )
}

export default StorePage
