import { ChangeEvent, ReactNode } from 'react'
import classnames from 'classnames'
import styles from './style.module.scss'

export type CheckboxProps = {
  className?: string
  id: string
  label: ReactNode
  checked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox = ({
  className,
  id,
  label,
  checked,
  onChange,
}: CheckboxProps): JSX.Element => {
  const classes = classnames(styles['label-wrap'], className)

  return (
    <label className={classes} htmlFor={id}>
      <input
        className={styles.input}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  )
}
