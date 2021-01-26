import classnames from 'classnames'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'

export type QuestionProps = {
  text?: string
}

export const Question = ({ text }: QuestionProps): JSX.Element => {
  const [question, setQuestion] = useState<string | undefined>(text)
  const [isAnimation, setIsAnimation] = useState<boolean>(false)

  const sleep = (msec: number): Promise<unknown> => {
    return new Promise((resolve) => setTimeout(resolve, msec))
  }

  const h1Classes = classnames(styles.question, {
    [styles.animation]: isAnimation,
  })

  useEffect(() => {
    setQuestion(text)
    setIsAnimation(true)
    sleep(5000).then(() => {
      setIsAnimation(false)
    })
  }, [text])

  return (
    <div className={styles.wrap}>
      <h1 className={h1Classes}>{question}</h1>
    </div>
  )
}
