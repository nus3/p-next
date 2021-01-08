import { useEffect } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'

export type HookFormValues = {
  name: string
  age: number
}

export type HookFormPresenterProps = {
  onSubmit: (values: HookFormValues) => void
}

export const HookFormPresenter = ({
  onSubmit,
}: HookFormPresenterProps): JSX.Element => {
  const { register, handleSubmit, errors } = useFormContext<HookFormValues>()

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
