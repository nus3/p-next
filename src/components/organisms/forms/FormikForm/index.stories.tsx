import { FormikForm, FormikFormValues } from './'

export default {
  title: 'organisms/forms/FormikForm',
}

export const Default = (): JSX.Element => {
  const formValues: FormikFormValues = {
    age: 0,
    name: '',
  }

  const onSubmit = (values: FormikFormValues) => {
    // eslint-disable-next-line
    console.log(values)
  }

  return <FormikForm formValues={formValues} handleSubmit={onSubmit} />
}
