import { QuestionFormValues } from 'components/organisms/forms/QuestionForm'
import { QuestionSetting } from 'components/templates/QuestionSetting'
import { useQuestionStore } from 'hooks/store/useQuestionStore'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

const QuestionSettingPage: NextPage = () => {
  const { question, update, selectCurrentQuestion } = useQuestionStore()

  const [currentQuestions, setCurrentQuestions] = useState<string[]>(
    question.questions
  )

  useEffect(() => {
    setCurrentQuestions(question.questions)
  }, [question])

  const handleSubmit = (v: QuestionFormValues) => {
    const qs = v.questions.map((q) => {
      return q.text
    })

    update(qs)
  }

  const handleSelect = (v?: string) => {
    selectCurrentQuestion(v)
  }

  return (
    <QuestionSetting
      questionFormProps={{
        formValues: {
          questions: currentQuestions.map((c) => {
            return {
              text: c,
            }
          }),
        },
        onSubmit: handleSubmit,
        onSelect: handleSelect,
      }}
    />
  )
}

export default QuestionSettingPage
