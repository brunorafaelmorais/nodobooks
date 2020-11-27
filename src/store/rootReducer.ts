import { combineReducers } from '@reduxjs/toolkit'
import { createSelectorHook } from 'react-redux'

import books from '@/store/books'

const rootReducer = combineReducers({ books })

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector = createSelectorHook<RootState>()

export default rootReducer
