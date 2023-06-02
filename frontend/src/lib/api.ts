import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:4955',
})

export default api
