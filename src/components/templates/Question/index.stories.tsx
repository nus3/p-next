import { QuestionTemplate } from '.'

export default {
  title: 'templates/Question',
}

export const Default = (): JSX.Element => (
  <QuestionTemplate
    questionProps={{
      text: '質問文です',
    }}
  />
)
