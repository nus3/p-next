import { useFriendStatus } from 'hooks/friend'

const HookPage = (): JSX.Element => {
  const isOnline = useFriendStatus('1')

  return (
    <div>
      <p>ユーザは{isOnline ? 'オンライン' : 'オフライン'}です</p>
    </div>
  )
}

export default HookPage
