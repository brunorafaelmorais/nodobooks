import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BooksState {
  purchaseModalIsOpen: boolean
}

const initialState: BooksState = {
  purchaseModalIsOpen: false
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setPurchaseModalIsOpen(state, action: PayloadAction<boolean>) {
      state.purchaseModalIsOpen = action.payload
    }
  }
})

export const { setPurchaseModalIsOpen } = booksSlice.actions

export default booksSlice.reducer
