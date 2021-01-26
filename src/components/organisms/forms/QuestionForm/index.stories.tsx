import {
  QuestionForm,
  QuestionFormValues,
} from 'components/organisms/forms/QuestionForm'

export default {
  title: 'organisms/forms/QuestionForm',
}

export const Default = (): JSX.Element => {
  const onSubmit = (values: QuestionFormValues) => {
    // eslint-disable-next-line
    console.log(values)
  }

  return <QuestionForm onSubmit={onSubmit} onSelect={() => undefined} />
}
