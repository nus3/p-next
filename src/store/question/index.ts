import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  QuestionState,
  UpdateQuestionsPayload,
  SelectCurrentQuestionsPayload,
} from 'store/question/types'

export const initialState: QuestionState = {
  questions: [],
  currentQuestion: undefined,
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    update(state, action: PayloadAction<UpdateQuestionsPayload>) {
      state.questions = action.payload
    },
    selectCurrentQuestion(
      state,
      action: PayloadAction<SelectCurrentQuestionsPayload>
    ) {
      state.currentQuestion = action.payload
    },
  },
})
