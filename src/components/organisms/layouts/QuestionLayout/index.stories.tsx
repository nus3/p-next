import { QuestionLayout } from 'components/organisms/layouts/QuestionLayout'
import { Question } from 'components/organisms/question/Question'

export default {
  title: 'organisms/layouts/QuestionLayout',
}

export const Default = (): JSX.Element => (
  <QuestionLayout>
    <Question text="質問文です" />
  </QuestionLayout>
)
