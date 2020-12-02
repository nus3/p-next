import classnames from 'classnames'
import styles from './style.module.scss'

export type ButtonProps = {
  isError?: boolean
}

export const Button = ({ isError }: ButtonProps): JSX.Element => {
  const classes = classnames(styles.btn, {
    [styles.isError]: isError || false,
  })

  return <button className={classes}>ボタンだよ</button>
}
