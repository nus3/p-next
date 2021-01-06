import { ErrorMessage as FormikErrorMessage } from 'formik'
import { setLocale } from 'yup'
import styles from './style.module.scss'

setLocale({
  mixed: {
    required: () => `入力必須項目です。`,
  },
})

export type ErrorMessageProps = {
  className?: string
  name: string
}

export const ErrorMessage = ({
  className,
  name,
}: ErrorMessageProps): JSX.Element => (
  <FormikErrorMessage name={name} className={className}>
    {(errorMessage: string) => (
      <div className={className}>
        <span className={styles['error-message']}>{errorMessage}</span>
      </div>
    )}
  </FormikErrorMessage>
)
