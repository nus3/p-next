import { QuestionTemplate } from 'components/templates/Question'
import { useQuestionStore } from 'hooks/store/useQuestionStore'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

const QuestionPage: NextPage = () => {
  const { question } = useQuestionStore()

  const [currentQuestions, setCurrentQuestions] = useState<string | undefined>(
    question.currentQuestion
  )

  useEffect(() => {
    setCurrentQuestions(question.currentQuestion)
  }, [question.currentQuestion])

  return (
    <QuestionTemplate
      questionProps={{
        text: currentQuestions,
      }}
    />
  )
}

export default QuestionPage
