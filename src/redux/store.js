import { createStore, combineReducers } from 'redux'

// Reducers
import cardsReducer from './reducers/cardsReducer'
import bannedReducer from './reducers/bannedReducer'

let store = createStore(combineReducers({cardsReducer, bannedReducer}))
export default store