import classnames from 'classnames'
import { ChangeEvent, FocusEvent } from 'react'
import styles from './style.module.scss'

export type InputTextProps = {
  name: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  className?: string
  type?: string
  autoFocus?: boolean
}

export const InputText = ({
  type = 'text',
  className,
  ...props
}: InputTextProps): JSX.Element => {
  const classes = classnames(styles.field, className)
  return <input className={classes} type={type} {...props}></input>
}
