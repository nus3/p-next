import { ChangeEvent, ReactNode } from 'react'
import classnames from 'classnames'
import styles from './style.module.scss'

export type RadioProps = {
  className?: string
  name: string
  value?: string
  label: ReactNode
  checked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Radio = ({
  className,
  label,
  checked,
  onChange,
  name,
  value,
}: RadioProps): JSX.Element => {
  const classes = classnames(styles['label-wrap'], className)

  return (
    <label className={classes}>
      <input
        className={styles.input}
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <span>{label}</span>
    </label>
  )
}
