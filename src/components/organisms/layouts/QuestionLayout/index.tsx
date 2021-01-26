import { ReactNode } from 'react'
import styles from './style.module.scss'

export type QuestionLayoutProps = {
  children: ReactNode
}

export const QuestionLayout = ({
  children,
}: QuestionLayoutProps): JSX.Element => (
  <div className={styles.wrap}>
    <img
      className={styles['wrap-top-img']}
      src="/img/logo-sotpodcast-txt_02.png"
    />
    <img
      className={styles['wrap-bottom-img']}
      src="/img/logo-sotpodcast-txt_01.png"
    />
    {children}
  </div>
)
