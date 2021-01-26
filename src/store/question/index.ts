import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuestionState, UpdateQuestionsPayload } from 'store/question/types'

export const initialState: QuestionState = {
  questions: [],
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    update(state, action: PayloadAction<UpdateQuestionsPayload>) {
      state.questions = action.payload
    },
  },
})
