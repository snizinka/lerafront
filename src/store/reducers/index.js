import { combineReducers } from 'redux'
import usersReducer from './userReducer'
import postReducer from './postReducer'

export const rootReducer = combineReducers({
   users: usersReducer,
   post: postReducer
})
