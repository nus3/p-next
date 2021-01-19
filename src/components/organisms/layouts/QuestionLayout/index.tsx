import { ReactNode } from 'react'
import styles from './style.module.scss'

export type QuestionLayoutProps = {
  children: ReactNode
}

export const QuestionLayout = ({
  children,
}: QuestionLayoutProps): JSX.Element => (
  <div className={styles.wrap}>{children}</div>
)
