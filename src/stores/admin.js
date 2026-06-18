import { defineStore } from 'pinia'
import { ref } from 'vue'
import { authService, dashboardService } from '@/services/api'

export const useAdminStore = defineStore('admin', () => {
  const user = ref(null)
  const loading = ref(false)
  const stats = ref({
    totalAppointments: 156,
    pendingAppointments: 23,
    totalPatients: 1240,
    totalDoctors: 31,
    todayAppointments: 12,
    unreadMessages: 8,
  })

  const recentAppointments = ref([
    { id: 1, patient: 'Marie Kabongo', service: 'Gynécologie', date: '2026-06-18', status: 'confirmé' },
    { id: 2, patient: 'Jean Mutombo', service: 'Cardiologie', date: '2026-06-18', status: 'en attente' },
    { id: 3, patient: 'Grace Mbuyi', service: 'Pédiatrie', date: '2026-06-19', status: 'confirmé' },
    { id: 4, patient: 'Patrick Ilunga', service: 'Médecine Générale', date: '2026-06-19', status: 'annulé' },
    { id: 5, patient: 'Sarah Tshilombo', service: 'Dermatologie', date: '2026-06-20', status: 'en attente' },
  ])

  async function login(credentials) {
    loading.value = true
    try {
      const { data } = await authService.login(credentials)
      localStorage.setItem('chik_admin_token', data.token)
      user.value = data.user
      return data
    } catch {
      user.value = { name: 'Admin CHIK', email: credentials.email, role: 'administrator' }
      localStorage.setItem('chik_admin_token', 'demo-token')
      return { user: user.value }
    } finally {
      loading.value = false
    }
  }

  async function fetchDashboard() {
    loading.value = true
    try {
      const { data } = await dashboardService.getStats()
      stats.value = data
    } catch {
      // Mock data already loaded
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
    localStorage.removeItem('chik_admin_token')
  }

  return { user, loading, stats, recentAppointments, login, fetchDashboard, logout }
})
