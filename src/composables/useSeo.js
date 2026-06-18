import { HOSPITAL } from '@/utils/constants'

export function useSeo() {
  function updateSeo({ title, description }) {
    const fullTitle = title
      ? `${title} | ${HOSPITAL.shortName}`
      : `${HOSPITAL.shortName} - ${HOSPITAL.name}`

    document.title = fullTitle

    updateMeta('description', description || HOSPITAL.description)
    updateMeta('og:title', fullTitle, 'property')
    updateMeta('og:description', description || HOSPITAL.description, 'property')
    updateMeta('og:url', window.location.href, 'property')
  }

  function updateMeta(name, content, attr = 'name') {
    let el = document.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  function injectHospitalSchema() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Hospital',
      name: HOSPITAL.name,
      alternateName: HOSPITAL.shortName,
      description: HOSPITAL.description,
      url: window.location.origin,
      telephone: HOSPITAL.phone,
      email: HOSPITAL.emails.join(', '),
      address: {
        '@type': 'PostalAddress',
        streetAddress: HOSPITAL.address,
        addressLocality: 'Kinshasa',
        addressRegion: 'Gombe',
        addressCountry: 'CD',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      medicalSpecialty: [
        'General Medicine', 'Gynecology', 'Pediatrics', 'Cardiology', 'Neurology',
        'Dermatology', 'Ophthalmology', 'Orthopedics', 'Urology', 'Dentistry',
      ],
    }

    let script = document.getElementById('hospital-schema')
    if (!script) {
      script = document.createElement('script')
      script.id = 'hospital-schema'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)
  }

  return { updateSeo, injectHospitalSchema }
}
