import { useEffect } from 'react'
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
  const { register, handleSubmit } = useFormContext<HookFormValues>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">名前</label>
        <input name="name" ref={register} />
      </div>
      <div>
        <label htmlFor="age">年齢</label>
        <input name="age" ref={register} type="number" />
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

export const HookForm = ({
  onSubmit,
  formValues,
}: HookFormProps): JSX.Element => {
  const methods = useForm<HookFormValues>()

  return (
    <FormProvider {...methods}>
      <HookFormContainer onSubmit={onSubmit} formValues={formValues} />
    </FormProvider>
  )
}
