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

const DOCTOR_IMAGES = [
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  'https://images.unsplash.com/photo-1594824476969-48aa08782a65?w=400&q=80',
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
  'https://images.unsplash.com/photo-1537368910025-700350f59c07?w=400&q=80',
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  'https://images.unsplash.com/photo-1567532936774-74ebdc26673b?w=400&q=80',
  'https://images.unsplash.com/photo-1651008376811-b90baee39c1f?w=400&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
]

export function getDoctorImage(doctor) {
  if (doctor?.image) return doctor.image
  return DOCTOR_IMAGES[(doctor.id - 1) % DOCTOR_IMAGES.length]
}
