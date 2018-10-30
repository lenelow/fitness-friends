import activitiesReducer from './activities'
import profilesReducer from './profiles'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    activities: activitiesReducer,
    profiles: profilesReducer
})

export default rootReducer;