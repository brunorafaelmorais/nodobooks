import { combineReducers } from '@reduxjs/toolkit'
import { createSelectorHook } from 'react-redux'

import alert from './alert'
import ui from './ui'

const rootReducer = combineReducers({ alert, ui })

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector = createSelectorHook<RootState>()

export default rootReducer
