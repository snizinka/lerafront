import { combineReducers } from 'redux'
import usersReducer from './userReducer'
import postReducer from './postReducer'
import chatReducer from './chatReducer'
import profileReducer from './profileReducer'

export const rootReducer = combineReducers({
   users: usersReducer,
   post: postReducer,
   chat: chatReducer,
   profile: profileReducer
})
