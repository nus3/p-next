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

export const InitValue = (): JSX.Element => {
  const initValue: HookFormValues = {
    name: '初期値',
    age: 25,
    isLike: true,
    fruit: 'apple',
    category: 'dog',
  }

  const onSubmit = (values: HookFormValues) => {
    // eslint-disable-next-line
    console.log(values)
  }

  return <HookForm onSubmit={onSubmit} formValues={initValue} />
}
