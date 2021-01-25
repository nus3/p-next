import { useRequireName } from 'hooks/redirector/useRequireName'
import { useCurrentUser } from 'hooks/useCurrentUser'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'

const RedirectPage: NextPage = () => {
  const user = useCurrentUser()
  const router = useRouter()

  useRequireName()

  // ローディングコンポーネントにするとか
  if (!user.isChecking) return <p style={{ color: 'red' }}>読み込み中</p>

  const handleMoveIndex = () => {
    router.push('/store')
  }

  return (
    <div>
      <h1>redirectの動作確認</h1>
      <button type="button" onClick={handleMoveIndex}>
        home
      </button>
    </div>
  )
}

export default RedirectPage
