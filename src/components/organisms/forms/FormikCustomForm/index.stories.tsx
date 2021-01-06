import { FormikCustomForm, FormikCustomFormValues } from '.'

export default {
  title: 'organisms/forms/FormikCustomForm',
}

export const Default = (): JSX.Element => {
  const formValues: FormikCustomFormValues = {
    name: '',
    isLike: false,
    fruit: 'apple',
    category: 'dog',
    date: '',
  }

  const onSubmit = (values: FormikCustomFormValues) => {
    // eslint-disable-next-line
    console.log(values)
  }

  return <FormikCustomForm formValues={formValues} handleSubmit={onSubmit} />
}
