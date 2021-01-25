import { useRequireName } from 'hooks/redirector/useRequireName'
import { useUserStore } from 'hooks/store/useUserStore'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

const RedirectPage: NextPage = () => {
  useRequireName()

  const { user } = useUserStore()
  const [isFetch, setIsFetch] = useState<boolean>()
  useEffect(() => {
    setIsFetch(user.isFetched)
  }, [user.isFetched])

  // ローディング
  if (!isFetch) return <h1 style={{ color: 'red' }}>ローディング中</h1>

  const router = useRouter()
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
