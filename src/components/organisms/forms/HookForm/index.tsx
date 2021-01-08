import { useEffect } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form'
import { HookCheckBox } from 'components/atoms/forms/HookCheckbox'
import { HookRadio } from 'components/atoms/forms/HookRadio'

type Friend = {
  name: string
  email: string
}

export type HookFormValues = {
  name: string
  age: number
  isLike: boolean
  fruit: 'apple' | 'banana' | 'lemon'
  category: 'dog' | 'cat' | 'rabbit'
  friends: Friend[]
}

export type HookFormPresenterProps = {
  onSubmit: (values: HookFormValues) => void
}

export const HookFormPresenter = ({
  onSubmit,
}: HookFormPresenterProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    errors,
    control,
  } = useFormContext<HookFormValues>()
  const { fields, append, remove } = useFieldArray<Friend>({
    control,
    name: 'friends',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">名前</label>
        <input name="name" ref={register} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="age">年齢</label>
        <input name="age" ref={register} type="number" />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <HookCheckBox name="isLike" label="ログホラが好き"></HookCheckBox>
      </div>
      <div>
        <HookRadio name="fruit" value="apple" label="りんご" />
        <HookRadio name="fruit" value="banana" label="ばなな" />
        <HookRadio name="fruit" value="lemon" label="レモン" />
      </div>
      <div>
        <select name="category" ref={register}>
          <option value="dog">犬</option>
          <option value="cat">ねこ</option>
          <option value="rabbit">ウサギ</option>
        </select>
      </div>
      <div>
        {fields.map((f, i) => (
          <div key={f.id}>
            <input name={`friends[${i}].name`} ref={register} />
            <input name={`friends[${i}].email`} ref={register} />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          append({ name: '', email: '' })
        }}
      >
        友達追加
      </button>
      <button
        onClick={() => {
          remove()
        }}
      >
        全削除
      </button>
      <button type="submit">Submit</button>
    </form>
  )
}

export type HookFormContainerProps = {
  onSubmit: (values: HookFormValues) => void
  formValues?: HookFormValues
}

export const HookFormContainer = ({
  onSubmit,
  formValues,
}: HookFormContainerProps): JSX.Element => {
  const { reset } = useFormContext<HookFormValues>()

  useEffect(() => {
    reset(formValues)
  }, [formValues])

  return <HookFormPresenter onSubmit={onSubmit} />
}

export type HookFormProps = {
  onSubmit: (values: HookFormValues) => void
  formValues?: HookFormValues
}

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  age: Yup.number().required(),
  fruit: Yup.mixed().oneOf(['apple', 'banana', 'lemon']).required(),
  category: Yup.mixed().oneOf(['dog', 'cat', 'rabbit']).required(),
})

export const HookForm = ({
  onSubmit,
  formValues,
}: HookFormProps): JSX.Element => {
  const methods = useForm<HookFormValues>({
    resolver: yupResolver(validationSchema),
  })

  return (
    <FormProvider {...methods}>
      <HookFormContainer onSubmit={onSubmit} formValues={formValues} />
    </FormProvider>
  )
}
