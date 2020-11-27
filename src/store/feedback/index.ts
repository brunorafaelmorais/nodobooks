import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

import { IFeedbackMessage } from '@/interfaces/IFeedbackMessage'

interface FeedbackState {
  message: IFeedbackMessage
  feedbackModalIsOpen: boolean
}

const initialState: FeedbackState = {
  message: {} as IFeedbackMessage,
  feedbackModalIsOpen: false
}

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    addFeedbackMessage(
      state,
      action: PayloadAction<Omit<IFeedbackMessage, 'id'>>
    ) {
      state.message = { ...action.payload, id: uuid() }
      state.feedbackModalIsOpen = true
    },
    setFeedbackModalIsOpen(state, action: PayloadAction<boolean>) {
      state.feedbackModalIsOpen = action.payload
    }
  }
})

export const {
  addFeedbackMessage,
  setFeedbackModalIsOpen
} = feedbackSlice.actions

export default feedbackSlice.reducer
