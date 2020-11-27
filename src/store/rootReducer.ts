import { combineReducers } from '@reduxjs/toolkit'
import { createSelectorHook } from 'react-redux'

import books from './books'
import feedback from './feedback'

const rootReducer = combineReducers({ books, feedback })

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector = createSelectorHook<RootState>()

export default rootReducer
