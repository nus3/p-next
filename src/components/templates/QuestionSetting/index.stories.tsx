import { QuestionSetting } from '.'

export default {
  title: 'templates/QuestionSetting',
}

export const Default = (): JSX.Element => (
  <QuestionSetting
    questionFormProps={{ onSubmit: () => undefined }}
  ></QuestionSetting>
)
