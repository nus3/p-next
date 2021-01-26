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
  onSelect: (question?: string) => void
}

export const QuestionFormPresenter = ({
  onSubmit,
  onSelect,
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
              defaultValue={f.text}
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
            <button
              className={styles['btn']}
              type="button"
              onClick={() => {
                onSelect(f.text)
              }}
            >
              選択
            </button>
          </div>
        ))}
      </div>
      <footer>
        <button
          className={styles['footer-btn']}
          type="button"
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
  onSelect: QuestionFormPresenterProps['onSelect']
  formValues?: QuestionFormValues
}

export const QuestionFormContainer = ({
  onSubmit,
  formValues,
  onSelect,
}: QuestionFormContainerProps): JSX.Element => {
  const { reset } = useFormContext<QuestionFormValues>()

  useEffect(() => {
    reset(formValues)
  }, [formValues])

  return <QuestionFormPresenter onSubmit={onSubmit} onSelect={onSelect} />
}

export type QuestionFormProps = {
  onSubmit: (values: QuestionFormValues) => void
  onSelect: QuestionFormPresenterProps['onSelect']
  formValues?: QuestionFormValues
}

export const QuestionForm = ({
  onSubmit,
  onSelect,
  formValues,
}: QuestionFormProps): JSX.Element => {
  const methods = useForm<QuestionFormValues>({
    defaultValues: {
      questions: formValues.questions,
    },
  })

  return (
    <FormProvider {...methods}>
      <QuestionFormContainer
        onSubmit={onSubmit}
        onSelect={onSelect}
        formValues={formValues}
      />
    </FormProvider>
  )
}
