import { QuestionLayout } from 'components/organisms/layouts/QuestionLayout'
import { Question, QuestionProps } from 'components/organisms/question/Question'

export type QuestionTemplateProps = {
  questionProps: QuestionProps
}

export const QuestionTemplate = ({
  questionProps,
}: QuestionTemplateProps): JSX.Element => (
  <QuestionLayout>
    <Question {...questionProps} />
  </QuestionLayout>
)
