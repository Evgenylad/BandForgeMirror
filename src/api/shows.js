const _shows = [
  {"id":"1", "title":"Show 1", "date":"10/12/12"},
  {"id":"1", "title":"Show 1", "date":"10/12/12"},
  {"id":"1", "title":"Show 1", "date":"10/12/12"},
  {"id":"1", "title":"Show 1", "date":"10/12/12"},
  {"id":"1", "title":"Show 1", "date":"10/12/12"}
]

export default {
  getShowsList (cb) {
    setTimeout(() => cb(_shows), 100)
  }
}
