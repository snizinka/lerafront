import { combineReducers } from 'redux'
import usersReducer from './userReducer'
import postReducer from './postReducer'
import chatReducer from './chatReducer'

export const rootReducer = combineReducers({
   users: usersReducer,
   post: postReducer,
   chat: chatReducer
})
