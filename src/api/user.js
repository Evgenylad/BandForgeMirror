import { API_URL } from '../../config/constants'

export default {
  getUser () {
    this.$http.get(API_URL+'/user')
      .then((user) => {
        console.log("user is: ", user)
      })
      .catch((err) => {
        console.log("Error checking user ", err)
      })
  },

  loginUser (user) {
    this.$http.post(API_URL+'/user', user)
      .then((user) => {
        console.log("User logged in")
        console.log(user)
      })
      .catch((err) => {
        console.log("Error logging in user: ", err)
      })
  },

  logoutUser () {
    this.$http.post(API_URL+'/logout')
      .then(() => {
        console.log("user logged out")
      })
  }
}
