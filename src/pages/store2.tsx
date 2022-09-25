import { useUserStore } from 'hooks/store/useUserStore'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'

const Store2Page: NextPage = () => {
  const userStore = useUserStore()

  const router = useRouter()

  const handleConfirm = () => {
    // eslint-disable-next-line
    console.log(userStore.user)
  }

  const handleAddHistory = () => {
    userStore.addHistory('foo')
  }

  return (
    <div>
      <h1>storeの動作確認</h1>
      <button type="button" onClick={handleConfirm}>
        確認
      </button>
      <button type="button" onClick={handleAddHistory}>
        addHistory
      </button>
      <p>{userStore.user.age}</p>
      <p>{userStore.user.name}</p>
      <p>{userStore.user.email}</p>
      <p>{userStore.user.token}</p>
      <p>ヒストリーの数：{userStore.user.history.length}</p>
      <button
        type="button"
        onClick={() => {
          router.push('/store')
        }}
      >
        storeへ
      </button>
    </div>
  )
}

export default Store2Page
