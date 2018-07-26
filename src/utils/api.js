import axios from "axios";

class API {
  constructor() {
    this.api = axios.create({
      baseURL: "http://fitness-friends-api.herokuapp.com"
    });
  }
  getProfiles() {
    return this.api.get("/api/profile");
  }
  getProfile(id) {
    return this.api.get(`/api/profile/${id}`);
  }
  createProfile(profile) {
    return this.api.post("/api/profile", profile);
  }
  deleteProfile(id) {
    return this.api.delete(`/api/profile/${id}`);
  }
  getActivities() {
    return this.api.get("/api/activity");
  }
  getActivity(id) {
    return this.api.get(`/api/activity/${id}`);
  }
  createActivity(activity) {
    return this.api.post("/api/activity", activity);
  }
  deleteActivity(id) {
    return this.api.delete(`/api/activity/${id}`);
  }
}

export default new API();
