import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 15000,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('chik_admin_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('chik_admin_token')
    }
    return Promise.reject(error)
  }
)

export default api

export const appointmentService = {
  create: (data) => api.post('/appointments', data),
  getAll: () => api.get('/appointments'),
}

export const contactService = {
  send: (data) => api.post('/contact', data),
}

export const newsService = {
  getAll: (params) => api.get('/news', { params }),
  getById: (id) => api.get(`/news/${id}`),
}

export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me'),
}

export const dashboardService = {
  getStats: () => api.get('/admin/dashboard'),
  getAppointments: () => api.get('/admin/appointments'),
  getMessages: () => api.get('/admin/messages'),
}
