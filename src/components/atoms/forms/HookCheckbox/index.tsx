import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

export type HookCheckBoxProps = {
  name: string
  label: ReactNode
}

export const HookCheckBox = ({
  name,
  label,
}: HookCheckBoxProps): JSX.Element => {
  const { register } = useFormContext()

  return (
    <label htmlFor={name}>
      <input type="checkbox" id={name} name={name} ref={register} />
      <span>{label}</span>
    </label>
  )
}
