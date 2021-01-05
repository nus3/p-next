import { FormikCustomForm, FormikCustomFormValues } from '.'

export default {
  title: 'organisms/forms/FormikCustomForm',
}

export const Default = (): JSX.Element => {
  const formValues: FormikCustomFormValues = {
    name: '',
  }

  const onSubmit = (values: FormikCustomFormValues) => {
    // eslint-disable-next-line
    console.log(values)
  }

  return <FormikCustomForm formValues={formValues} handleSubmit={onSubmit} />
}
