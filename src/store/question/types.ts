export type QuestionState = {
  questions: string[]
  currentQuestion?: string
}

export type UpdateQuestionsPayload = string[]
export type SelectCurrentQuestionsPayload = string | undefined
