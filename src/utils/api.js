import axios from 'axios'

class API {
    constructor () {
        this.api = axios.create({ baseURL: 'http://www.localhost:3001' })
    }
    getProfiles() {
        this.api.get('/api/profile')
    }
    getProfile(id) {
        this.api.get(`/api/profile/${id}`)
    }
    createProfile(profile) {
        this.api.post('/api/profile', profile)
    }
    deleteProfile(id) {
        this.api.delete(`/api/profile/${id}`)
    }
    getActivities() {
        this.api.get('/api/activity')
    }
    getActivity(id) {
        this.api.get(`/api/activity/${id}`)
    }
    createActivity(activity) {
        this.api.post('/api/activity', activity)
    }
    deleteActivity(id) {
        this.api.delete(`/api/activity/${id}`)
    }
}

export default new API()