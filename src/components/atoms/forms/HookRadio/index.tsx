import { useFormContext } from 'react-hook-form'

export type HookRadioProps = {
  name: string
  label: string
  value?: string
}

export const HookRadio = ({
  name,
  value,
  label,
}: HookRadioProps): JSX.Element => {
  const { register } = useFormContext()

  return (
    <label>
      <input type="radio" name={name} value={value} ref={register} />
      <span>{label}</span>
    </label>
  )
}
