import { NextPage } from 'next'

const TestErrorPage: NextPage = () => {
  throw new Error('コンポーネントエラーだよ')

  const handleError = () => {
    throw new Error('テスト')
  }

  return (
    <div style={{ padding: '30px' }}>
      <h1>errorの動作確認</h1>
      <button type="button" onClick={handleError}>
        確認
      </button>
    </div>
  )
}

export default TestErrorPage
