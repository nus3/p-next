import { HookForm, HookFormValues } from '.'

export default {
  title: 'organisms/forms/HookForm',
}

export const Default = (): JSX.Element => {
  const onSubmit = (values: HookFormValues) => {
    // eslint-disable-next-line
    console.log(values)
  }

  return <HookForm onSubmit={onSubmit} />
}
