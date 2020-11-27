import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IBook } from '@/interfaces/IBook'

interface BooksState {
  list: IBook[]
}

const initialState: BooksState = {
  list: []
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<IBook[]>) {
      state.list = action.payload
    }
  }
})

export const { setBooks } = booksSlice.actions

export default booksSlice.reducer
