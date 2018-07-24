import * as types from '../actions/types'

const initialState = {
    activities: [],
    activity: null,
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.FETCHING_ACTIVITIES:
            return {
                ...state,
                loading: true
            }
        case types.FETCHING_ACTIVITIES_SUCCESS:
            return {
                ...state,
                activities: action.activities,
                loading: false
            }
        case types.FETCHING_ACTIVITY:
            return {
                ...state,
                loading: true
            }
        case types.FETCHING_ACTIVITY_SUCCESS:
            return {
                ...state,
                activity: action.activity,
                loading: false
            }
        case types.CREATE_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.activity]
            }
        case types.DELETE_ACTIVITY:
            return {
                ...state,
                activities: state.activities.filter(({ _id }) => _id !== action.id)
            }
    }
}