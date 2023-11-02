import axios from 'axios'

export const Api = axios.create({
  baseURL: 'http://192.168.1.105:8000/api'
})

Api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const t = localStorage.getItem('token')
    if (t) config.headers['Authorization'] = `Bearer ${t}`

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
Api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('--', error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
    return Promise.reject(error)
  }
)
