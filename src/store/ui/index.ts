import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UiState {
  purchaseModalIsOpen: boolean
  categoriesAsideIsOpen: boolean
}

const initialState: UiState = {
  purchaseModalIsOpen: false,
  categoriesAsideIsOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setPurchaseModalIsOpen(state, action: PayloadAction<boolean>) {
      state.purchaseModalIsOpen = action.payload
    },
    toggleCategoriesAside(state) {
      state.categoriesAsideIsOpen = !state.categoriesAsideIsOpen
    }
  }
})

export const { setPurchaseModalIsOpen, toggleCategoriesAside } = uiSlice.actions

export default uiSlice.reducer
