import { InputText } from 'components/atoms/forms/InputText'
import {
  Field,
  Form,
  ErrorMessage,
  useFormikContext,
  Formik,
  FieldProps,
} from 'formik'
import { useEffect } from 'react'
import * as Yup from 'yup'
import styles from './style.module.scss'

export type FormikCustomFormValues = {
  name: string
}

export const FormikCustomFormPresenter = (): JSX.Element => (
  <Form className={styles.form}>
    <div className={styles.wrap}>
      <Field name="name">
        {({ field }: FieldProps<FormikCustomFormValues['name']>) => (
          <>
            <div className={styles.row}>
              <label className={styles.label} htmlFor="nameInput">
                名前
              </label>
              <InputText
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
            <ErrorMessage name="name" component="div" />
          </>
        )}
      </Field>
    </div>
    <button type="submit" className={styles.btn}>
      Submit
    </button>
  </Form>
)

export type FormikCustomFormContainerProps = {
  formValues?: FormikCustomFormValues
}

export const FormikCustomFormContainer = ({
  formValues,
}: FormikCustomFormContainerProps): JSX.Element => {
  const { setValues } = useFormikContext<FormikCustomFormValues>()

  useEffect(() => {
    setValues(formValues)
  }, [formValues])

  return <FormikCustomFormPresenter></FormikCustomFormPresenter>
}

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
})

export type FormikCustomFormProps = {
  handleSubmit: (values: FormikCustomFormValues) => void
  formValues?: FormikCustomFormValues
}

export const FormikCustomForm = ({
  handleSubmit,
  formValues,
}: FormikCustomFormProps): JSX.Element => {
  const onSubmit = (values: FormikCustomFormValues) => {
    handleSubmit(values)
  }

  const initialValues: FormikCustomFormValues = formValues || {
    name: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormikCustomFormContainer
        formValues={formValues}
      ></FormikCustomFormContainer>
    </Formik>
  )
}
