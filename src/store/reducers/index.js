import { combineReducers } from 'redux'
import usersReducer from './userReducer'
import postReducer from './postReducer'
import chatReducer from './chatReducer'
import profileReducer from './profileReducer'
import moderatorReducer from './moderatorReducer'
import notificationReducer from './notificationReducer'
import searchReducer from './searchReducer'

export const rootReducer = combineReducers({
   users: usersReducer,
   post: postReducer,
   chat: chatReducer,
   profile: profileReducer,
   moderator: moderatorReducer,
   notification: notificationReducer,
   search: searchReducer
})
