import { reactive, computed } from 'vue'
import { validateEmail, validatePhone } from '@/utils/helpers'

export function useFormValidation(initialData, rules) {
  const form = reactive({ ...initialData })
  const errors = reactive({})
  const touched = reactive({})

  function validateField(field) {
    const rule = rules[field]
    if (!rule) return true

    const value = form[field]
    let error = null

    if (rule.required && !String(value || '').trim()) {
      error = rule.requiredMessage || 'Ce champ est requis.'
    } else if (rule.email && value && !validateEmail(value)) {
      error = 'Adresse email invalide.'
    } else if (rule.phone && value && !validatePhone(value)) {
      error = 'Numéro de téléphone invalide.'
    } else if (rule.minLength && value && value.length < rule.minLength) {
      error = `Minimum ${rule.minLength} caractères requis.`
    } else if (rule.custom) {
      error = rule.custom(value, form)
    }

    errors[field] = error
    return !error
  }

  function validateAll() {
    let valid = true
    Object.keys(rules).forEach((field) => {
      touched[field] = true
      if (!validateField(field)) valid = false
    })
    return valid
  }

  function touch(field) {
    touched[field] = true
    validateField(field)
  }

  const isValid = computed(() => Object.values(errors).every((e) => !e))

  return { form, errors, touched, validateField, validateAll, touch, isValid }
}
