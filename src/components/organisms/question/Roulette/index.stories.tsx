import { Roulette, RouletteProps } from './index'

export default {
  title: 'organisms/question/Roulette',
}

const questions: RouletteProps['questions'] = [
  '質問1',
  '質問2',
  '質問3',
  '質問4',
  '質問5',
  '質問6',
  '質問7',
  '質問8',
  '質問9',
  '質問10',
]

export const Default = (): JSX.Element => (
  <div style={{ height: '600px' }}>
    <Roulette questions={questions} />
  </div>
)
