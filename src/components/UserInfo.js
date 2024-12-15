export default class UserInfo {
  constructor({ usernameSelector, jobSelector }) {
    this._name = usernameSelector;
    this._job = jobSelector;
  }
  getUserInfo() {
    return {
      username: this._name.textContent,
      job: this._job.textContent,
    };
  }

  setUserInfo(username, job) {
    this._name.textContent = username;
    this._job.textContent = job;
  }
}
