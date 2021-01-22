import { useFriendStatus } from 'hooks/friend'
import { NextPage } from 'next'

const HookPage: NextPage = () => {
  const isOnline = useFriendStatus('1')

  return (
    <div>
      <p>ユーザは{isOnline ? 'オンライン' : 'オフライン'}です</p>
    </div>
  )
}

export default HookPage
