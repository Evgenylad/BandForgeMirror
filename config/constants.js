module.exports = {
  API_URL: process.env.NODE_ENV === 'production'
    ? 'https://bandforgeapp.com'
    : 'http://192.241.196.190:8001'
}
