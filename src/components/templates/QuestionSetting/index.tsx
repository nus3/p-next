import {
  QuestionForm,
  QuestionFormProps,
} from 'components/organisms/forms/QuestionForm'
import { QuestionLayout } from 'components/organisms/layouts/QuestionLayout'

export type QuestionSettingProps = {
  questionFormProps: QuestionFormProps
}

export const QuestionSetting = ({
  questionFormProps,
}: QuestionSettingProps): JSX.Element => (
  <QuestionLayout>
    <QuestionForm {...questionFormProps} />
  </QuestionLayout>
)
