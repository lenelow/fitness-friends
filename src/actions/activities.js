import * as types from './types'
import API from '../utils/api'
import uuid from 'uuid'

export const fetchingActivities = () => ({
    type: types.FETCHING_ACTIVITIES
})

export const fetchingActivitiesError = error => ({
    type: types.FETCHING_ACTIVITIES_ERROR,
    error
})

export const fetchingActivitiesSuccess = activities => ({
    type: types.FETCHING_ACTIVITIES_SUCCESS,
    activities
})

export const fetchAndHandleActivities = () => dispatch => {
    dispatch(fetchingActivities())
    API.getActivities().then(res => {
        dispatch(fetchingActivitiesSuccess(res.data))
    }).catch(err => {
        dispatch(fetchingActivitiesError(err))
    })
}

export const fetchingActivity = () => ({
    type: types.FETCHING_ACTIVITY
})

export const fetchingActivityError = error => ({
    type: types.FETCHING_ACTIVITY_ERROR,
    error
})

export const fetchingActivitySuccess = activity => ({
    type: types.FETCHING_ACTIVITY_SUCCESS,
    activity
})

export const fetchAndHandleActivity = () => dispatch => {
    dispatch(fetchingActivity())
    API.getActivity().then(res => {
        dispatch(fetchingActivitySuccess(res.data))
    }).catch(err => {
        dispatch(fetchingActivityError(err))
    })
}

export const handleCreateActivity = activity => dispatch => {
    dispatch({ type: types.CREATE_ACTIVITY, activity: {_id: uuid(), ...activity} })
    API.createActivity(activity).then(res => res.data).catch(err =>{
        console.log('could not create activity:', err)
    })
}

export const handleDeleteActivity = id => dispatch => {
    dispatch({ type: types.DELETE_ACTIVITY, id})
    API.deleteActivity(id).then(res => res.data).catch(err => {
        console.log('could not delete activity:', err)
    })
}