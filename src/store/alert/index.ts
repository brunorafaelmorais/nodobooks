import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

import { IAlertMessage } from '@/interfaces'

interface AlertState {
  message: IAlertMessage
  alertModalIsOpen: boolean
}

const initialState: AlertState = {
  message: {} as IAlertMessage,
  alertModalIsOpen: false
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    addAlertMessage(state, action: PayloadAction<Omit<IAlertMessage, 'id'>>) {
      state.message = { ...action.payload, id: uuid() }
      state.alertModalIsOpen = true
    },
    setAlertModalIsOpen(state, action: PayloadAction<boolean>) {
      state.alertModalIsOpen = action.payload
    }
  }
})

export const { addAlertMessage, setAlertModalIsOpen } = alertSlice.actions

export default alertSlice.reducer
