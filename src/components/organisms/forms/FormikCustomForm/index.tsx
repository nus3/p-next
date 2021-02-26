import { CheckBox } from 'components/atoms/forms/Checkbox'
import { InputText } from 'components/atoms/forms/InputText'
import { Radio } from 'components/atoms/forms/Radio'
import { ErrorMessage } from 'components/molecules/forms/ErrorMessage'
import {
  Field,
  Form,
  useFormikContext,
  Formik,
  FieldProps,
  FieldArray,
  ArrayHelpers,
} from 'formik'
import { useEffect } from 'react'
import * as Yup from 'yup'
import styles from './style.module.scss'
import dayjs from 'dayjs'
import classnames from 'classnames'

type Friend = {
  name: string
  email: string
}

export type FormikCustomFormValues = {
  name: string
  isLike: boolean
  fruit: 'apple' | 'banana' | 'lemon'
  category: 'dog' | 'cat' | 'rabbit'
  date: string
  friends: Friend[]
}

export const FormikCustomFormPresenter = (): JSX.Element => (
  <Form className={styles.form}>
    <div className={styles.wrap}>
      <Field name="name">
        {({ field }: FieldProps<FormikCustomFormValues['name']>) => (
          <>
            <div className={styles.row}>
              <label className={styles.label}>名前</label>
              <InputText
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
            <ErrorMessage name="name" />
          </>
        )}
      </Field>
    </div>
    <div className={styles.wrap}>
      <Field name="isLike">
        {({ field }: FieldProps<FormikCustomFormValues['isLike']>) => (
          <>
            <div className={styles.row}>
              <label className={styles.label} htmlFor="isLike">
                ログホラが
              </label>
              <CheckBox
                id="isLike"
                label="好きか"
                checked={field.value}
                onChange={field.onChange}
              />
            </div>
            <ErrorMessage name="isLike" />
          </>
        )}
      </Field>
    </div>
    <div className={styles.wrap}>
      <Field name="fruit">
        {({ field }: FieldProps<FormikCustomFormValues['fruit']>) => (
          <>
            <div className={styles.row}>
              <label className={styles.label}>フルーツ</label>
              <div className={styles['radio-area']}>
                <Radio
                  name={field.name}
                  value="apple"
                  checked={field.value === 'apple'}
                  label="りんご"
                  onChange={field.onChange}
                />
                <Radio
                  name={field.name}
                  value="banana"
                  checked={field.value === 'banana'}
                  label="バナナ"
                  onChange={field.onChange}
                />
                <Radio
                  name={field.name}
                  value="lemon"
                  checked={field.value === 'lemon'}
                  label="レモン"
                  onChange={field.onChange}
                />
              </div>
            </div>
            <ErrorMessage name="fruit" />
          </>
        )}
      </Field>
    </div>
    <div className={styles.wrap}>
      <div className={styles.row}>
        <label className={styles.label}>ペット</label>
        <Field className={styles.select} as="select" name="category">
          <option value="dog">犬</option>
          <option value="cat">猫</option>
          <option value="rabbit">ウサギ</option>
        </Field>
      </div>
      <ErrorMessage name="category" />
    </div>
    <div className={styles.wrap}>
      <Field name="date">
        {({ field }: FieldProps<FormikCustomFormValues['date']>) => (
          <>
            <div className={styles.row}>
              <label className={styles.label}>日付</label>
              <InputText
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
            <ErrorMessage name="date" />
          </>
        )}
      </Field>
    </div>
    <div className={styles.wrap}>
      <Field name="friends">
        {({ field }: FieldProps<FormikCustomFormValues['friends']>) => (
          <FieldArray name={field.name}>
            {({ remove, push }: ArrayHelpers) => (
              <div>
                {field.value.map((f, i) => (
                  <div key={i}>
                    <div className={classnames(styles.row, styles['mb-4'])}>
                      <label className={styles.label}>名前</label>
                      <InputText
                        name={`friends.${i}.name`}
                        value={f.name}
                        onChange={field.onChange}
                      />
                      <ErrorMessage name={`friends.${i}.name`} />
                    </div>
                    <div className={styles.row}>
                      <label className={styles.label}>メール</label>
                      <InputText
                        name={`friends.${i}.email`}
                        value={f.email}
                        onChange={field.onChange}
                      />
                      <ErrorMessage name={`friends.${i}.email`} />
                    </div>
                    <button
                      className={styles['mb-4']}
                      type="button"
                      onClick={() => {
                        remove(i)
                      }}
                    >
                      削除
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    push({ name: '', email: '' })
                  }}
                >
                  友達追加
                </button>
              </div>
            )}
          </FieldArray>
        )}
      </Field>
    </div>
    <div className={styles['btn-wrap']}>
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </div>
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

  return <FormikCustomFormPresenter />
}

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  isLike: Yup.boolean().required(),
  fruit: Yup.mixed().oneOf(['apple', 'banana', 'lemon']).required(),
  category: Yup.mixed().oneOf(['dog', 'cat', 'rabbit']).required(),
  date: Yup.string()
    .required()
    .test('checkDateFormat', '日付の形式が間違ってます', (value): boolean => {
      if (!dayjs(value).isValid()) return false
      const format = 'YYYY/MM/DD'
      return dayjs(value, format).format(format) === value
    }),
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
    isLike: false,
    fruit: 'apple',
    category: 'dog',
    date: '',
    friends: [
      {
        name: '',
        email: '',
      },
    ],
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormikCustomFormContainer formValues={formValues} />
    </Formik>
  )
}
