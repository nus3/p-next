import { QuestionTemplate } from 'components/templates/Question'
import { useQuestionStore } from 'hooks/store/useQuestionStore'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

const QuestionPage: NextPage = () => {
  const { question } = useQuestionStore()

  const [currentQuestion, setCurrentQuestion] = useState<string | undefined>(
    question.currentQuestion
  )

  window.addEventListener('storage', (e) => {
    if (e.key !== 'persist:p-next-test') {
      return
    }

    const store = JSON.parse(e.newValue)
    if (!('question' in store)) return

    const q = JSON.parse(store.question)
    if (!('currentQuestion' in q)) return
    if (typeof q.currentQuestion !== 'string') return

    setCurrentQuestion(q.currentQuestion)
  })

  useEffect(() => {
    setCurrentQuestion(question.currentQuestion)
  }, [question.currentQuestion])

  return (
    <QuestionTemplate
      questionProps={{
        text: currentQuestion,
      }}
    />
  )
}

export default QuestionPage
