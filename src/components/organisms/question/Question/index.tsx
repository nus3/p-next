import { useEffect, useState } from 'react'
import styles from './style.module.scss'

export type QuestionProps = {
  text?: string
}

export const Question = ({ text }: QuestionProps): JSX.Element => {
  const [question, setQuestion] = useState<string | undefined>(text)

  useEffect(() => {
    setQuestion(text)
  }, [text])

  return (
    <div className={styles.wrap}>
      <h1 className={styles.question}>{question}</h1>
    </div>
  )
}
