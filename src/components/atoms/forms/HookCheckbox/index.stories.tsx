import { FormProvider, useForm } from 'react-hook-form'
import { HookCheckBox } from '.'

export default {
  title: 'atoms/forms/HookCheckBox',
}

export const Default = (): JSX.Element => {
  const methods = useForm()
  // HACK: any問題

  return (
    <FormProvider {...methods}>
      <HookCheckBox name="name" label="ラベル" />
    </FormProvider>
  )
}
