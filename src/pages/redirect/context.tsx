import { AuthContext } from 'contexts/AuthProvider'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext } from 'react'

const ContextPage: NextPage = () => {
  const user = useContext(AuthContext)
  const router = useRouter()

  // eslint-disable-next-line
  console.log('contextPageの', { user })

  return (
    <div>
      <h1>Context Page見れたよ</h1>
      <p>{user.name}</p>
      <p>{user.token}</p>
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

export default ContextPage
