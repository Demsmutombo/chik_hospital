import { defineStore } from 'pinia'
import { ref } from 'vue'
import { appointmentService } from '@/services/api'

export const useAppointmentStore = defineStore('appointment', () => {
  const loading = ref(false)
  const success = ref(false)
  const error = ref(null)
  const appointments = ref([])

  async function submitAppointment(data) {
    loading.value = true
    success.value = false
    error.value = null
    try {
      const response = await appointmentService.create(data)
      success.value = true
      return response.data
    } catch (err) {
      if (!import.meta.env.PROD) {
        success.value = true
        return { demo: true, ...data }
      }
      error.value = err.response?.data?.message || 'Une erreur est survenue. Veuillez réessayer.'
      throw err
    } finally {
      loading.value = false
    }
  }

  function resetState() {
    success.value = false
    error.value = null
  }

  return { loading, success, error, appointments, submitAppointment, resetState }
})
