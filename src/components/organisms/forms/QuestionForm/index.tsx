import { useEffect } from 'react'
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form'
import styles from './style.module.scss'

export type Question = {
  text: string
}

export type QuestionFormValues = {
  questions: Question[]
}

export type QuestionFormPresenterProps = {
  onSubmit: (values: QuestionFormValues) => void
}

export const QuestionFormPresenter = ({
  onSubmit,
}: QuestionFormPresenterProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
  } = useFormContext<QuestionFormValues>()
  const { fields, append, remove } = useFieldArray<Question>({
    control,
    name: 'questions',
  })

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['question-list-wrap']}>
        {fields.map((f, i) => (
          <div key={f.id} className={styles['question-wrap']}>
            <input
              className={styles['input']}
              name={`questions[${i}].text`}
              ref={register()}
              placeholder="text"
            />
            <button
              className={styles['btn']}
              type="button"
              onClick={() => {
                remove(i)
              }}
            >
              削除
            </button>
          </div>
        ))}
      </div>
      <footer>
        <button
          className={styles['footer-btn']}
          onClick={() => {
            append({ text: '' })
          }}
        >
          質問追加
        </button>
        <button className={styles['footer-btn']} type="submit">
          保存
        </button>
      </footer>
    </form>
  )
}

export type QuestionFormContainerProps = {
  onSubmit: (values: QuestionFormValues) => void
  formValues?: QuestionFormValues
}

export const QuestionFormContainer = ({
  onSubmit,
  formValues,
}: QuestionFormContainerProps): JSX.Element => {
  const { reset } = useFormContext<QuestionFormValues>()

  useEffect(() => {
    reset(formValues)
  }, [formValues])

  return <QuestionFormPresenter onSubmit={onSubmit} />
}

export type QuestionFormProps = {
  onSubmit: (values: QuestionFormValues) => void
  formValues?: QuestionFormValues
}

export const QuestionForm = ({
  onSubmit,
  formValues,
}: QuestionFormProps): JSX.Element => {
  const methods = useForm<QuestionFormValues>()

  return (
    <FormProvider {...methods}>
      <QuestionFormContainer onSubmit={onSubmit} formValues={formValues} />
    </FormProvider>
  )
}
