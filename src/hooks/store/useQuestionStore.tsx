import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { questionSlice } from 'store/question'
import {
  QuestionState,
  SelectCurrentQuestionsPayload,
  UpdateQuestionsPayload,
} from 'store/question/types'

export interface UseQuestionStore {
  question: QuestionState
  update: (payload: UpdateQuestionsPayload) => void
  selectCurrentQuestion: (payload: SelectCurrentQuestionsPayload) => void
}

export const useQuestionStore = (): UseQuestionStore => {
  const dispatch = useDispatch()
  const question = useSelector((state: RootState) => state.question)

  const update = (payload: UpdateQuestionsPayload) => {
    dispatch(questionSlice.actions.update(payload))
  }
  const selectCurrentQuestion = (payload: SelectCurrentQuestionsPayload) => {
    dispatch(questionSlice.actions.selectCurrentQuestion(payload))
  }

  return {
    question,
    update,
    selectCurrentQuestion,
  }
}
