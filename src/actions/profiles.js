import * as types from './types'
import API from '../utils/api'
import uuid from 'uuid'

export const fetchingProfiles = () => ({
    type: types.FETCHING_PROFILES
})

export const fetchingProfilesError = error => ({
    type: types.FETCHING_PROFILES_ERROR,
    error
})

export const fetchingProfilesSuccess = profiles => ({
    type: types.FETCHING_PROFILES_SUCCESS,
    profiles
})

export const fetchAndHandleProfiles = () => dispatch => {
    dispatch(fetchingProfiles())
    API.getProfiles().then(res => {
        dispatch(fetchingProfilesSuccess(res.data))
    }).catch(err => {
        dispatch(fetchingProfilesError(err))
    })
}

export const fetchingProfile = () => ({
    type: types.FETCHING_PROFILE
})

export const fetchingProfileError = error => ({
    type: types.FETCHING_PROFILE_ERROR,
    error
})

export const fetchingProfileSuccess = profile => ({
    type: types.FETCHING_PROFILE_SUCCESS,
    profile
})

export const fetchAndHandleProfile = () => dispatch => {
    dispatch(fetchingProfile())
    API.getProfile().then(res => {
        dispatch(fetchingProfileSuccess(res.data))
    }).catch(err => {
        dispatch(fetchingProfileError(err))
    })
}

export const handleCreateProfile = profile => dispatch => {
    dispatch({ type: types.CREATE_PROFILE, profile: {_id: uuid(), ...profile} })
    API.createProfile(profile).then(res => res.data).catch(err =>{
        console.log('could not create profile:', err)
    })
}

export const handleDeleteProfile = id => dispatch => {
    dispatch({ type: types.DELETE_PROFILE, id})
    API.deleteProfile(id).then(res => res.data).catch(err => {
        console.log('could not delete profile:', err)
    })
}

