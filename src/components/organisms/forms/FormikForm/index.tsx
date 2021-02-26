import { Field, Form, ErrorMessage, useFormikContext, Formik } from 'formik'
import { useEffect } from 'react'
import * as Yup from 'yup'
import styles from './style.module.scss'

export type FormikFormValues = {
  name: string
  age: number
}

export const FormikFormPresenter = (): JSX.Element => (
  <Form className={styles.form}>
    <div className={styles.wrap}>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="nameInput">
          名前
        </label>
        <Field id="nameInput" name="name" />
      </div>
      <ErrorMessage name="name" component="div" />
    </div>
    <div className={styles.wrap}>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="ageInput">
          年齢
        </label>
        <Field id="ageInput" name="age" type="number" />
      </div>
      <ErrorMessage name="name" component="div" />
    </div>
    <button type="submit" className={styles.btn}>
      Submit
    </button>
  </Form>
)

export type FormikFormContainerProps = {
  formValues?: FormikFormValues
}

export const FormikFormContainer = ({
  formValues,
}: FormikFormContainerProps): JSX.Element => {
  const { setValues } = useFormikContext<FormikFormValues>()

  useEffect(() => {
    setValues(formValues)
  }, [formValues])

  return <FormikFormPresenter />
}

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  age: Yup.number().required(),
})

export type FormikFormProps = {
  handleSubmit: (values: FormikFormValues) => void
  formValues?: FormikFormValues
}

export const FormikForm = ({
  handleSubmit,
  formValues,
}: FormikFormProps): JSX.Element => {
  const onSubmit = (values: FormikFormValues) => {
    handleSubmit(values)
  }

  const initialValues: FormikFormValues = formValues || {
    name: '',
    age: 0,
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormikFormContainer formValues={formValues} />
    </Formik>
  )
}
