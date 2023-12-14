import { combineReducers,configureStore } from '@reduxjs/toolkit'
import appReducer from './countReducer'
import cartReducer from './cartReducer'

const rootReducers = combineReducers({
    home : appReducer,
    cart : cartReducer
})
export default configureStore({
    reducer: rootReducers
})