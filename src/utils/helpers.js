export function formatDate(dateStr, locale = 'fr-FR') {
  const date = new Date(dateStr)
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getInitials(name) {
  return name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validatePhone(phone) {
  return /^[\d\s+\-()]{8,20}$/.test(phone)
}

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function debounce(fn, delay = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export function getServiceById(services, id) {
  return services.find((s) => s.id === id)
}

export function getNewsById(articles, id) {
  return articles.find((a) => String(a.id) === String(id))
}

export function getDoctorsBySpecialty(doctors, specialty) {
  return doctors.filter((d) => d.specialty === specialty)
}
