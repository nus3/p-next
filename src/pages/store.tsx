import { useUserStore } from 'hooks/store/useUserStore'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'

const StorePage: NextPage = () => {
  const userStore = useUserStore()

  const router = useRouter()

  const handleConfirm = () => {
    // eslint-disable-next-line
    console.log(userStore.user)
  }
  const handleUpdate = () => {
    // NOTE: apiから認証後にjwtを受け取る(_app.tsxでやる)
    userStore.fetched(true)

    userStore.update({
      name: 'name',
      age: 28,
      email: 'email',
      token: 'token',
      history: [],
    })
  }
  const handleReset = () => {
    userStore.reset()
  }
  const handleAddHistory = () => {
    userStore.addHistory('foo')
  }

  const handleMoveIndex = () => {
    router.push('/redirect')
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
      <p>{userStore.user.age}</p>
      <p>{userStore.user.name}</p>
      <p>{userStore.user.email}</p>
      <p>{userStore.user.token}</p>
      <p>ヒストリーの数：{userStore.user.history.length}</p>
      <button type="button" onClick={handleMoveIndex}>
        redirectページへ
      </button>
      <button
        type="button"
        onClick={() => {
          router.push('/redirect/context')
        }}
      >
        contextへ
      </button>
    </div>
  )
}

export default StorePage
