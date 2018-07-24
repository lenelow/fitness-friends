import * as types from '../actions/types'

const initialState = {
    profiles: [],
    profile: null,
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.FETCHING_PROFILES:
            return {
                ...state,
                loading: true
            }
        case types.FETCHING_PROFILES_SUCCESS:
            return {
                ...state,
                profiles: action.profiles,
                loading: false
            }
        case types.FETCHING_PROFILE:
            return {
                ...state,
                loading: true
            }
        case types.FETCHING_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile,
                loading: false
            }
        case types.CREATE_PROFILE:
            return {
                ...state,
                profiles: [...state.profiles, action.profile]
            }
        case types.DELETE_PROFILE:
            return {
                ...state,
                profiles: state.profiles.filter(({ _id }) => _id !== action.id)
            }
    }
}