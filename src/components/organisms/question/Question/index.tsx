import styles from './style.module.scss'

export type QuestionProps = {
  text?: string
}

export const Question = ({ text }: QuestionProps): JSX.Element => (
  <div className={styles.wrap}>
    <h1 className={styles.question}>{text}</h1>
  </div>
)
