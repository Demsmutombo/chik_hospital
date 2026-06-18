<template>
  <div>
    <PageHeader
      title="Nos Médecins"
      subtitle="Une équipe médicale qualifiée et expérimentée à votre service."
    />

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-10 flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-full px-4 py-2 text-sm font-medium transition-all"
            :class="selectedSpecialty === 'Tous'
              ? 'bg-primary text-white shadow-lg shadow-primary/25'
              : 'bg-white text-slate-600 hover:bg-primary/5 dark:bg-slate-800 dark:text-slate-300'"
            @click="selectedSpecialty = 'Tous'"
          >
            Tous ({{ DOCTORS.length }})
          </button>
          <button
            v-for="specialty in SPECIALTIES"
            :key="specialty"
            type="button"
            class="rounded-full px-4 py-2 text-sm font-medium transition-all"
            :class="selectedSpecialty === specialty
              ? 'bg-primary text-white shadow-lg shadow-primary/25'
              : 'bg-white text-slate-600 hover:bg-primary/5 dark:bg-slate-800 dark:text-slate-300'"
            @click="selectedSpecialty = specialty"
          >
            {{ specialty }} ({{ countBySpecialty(specialty) }})
          </button>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div
            v-for="(doctor, index) in filteredDoctors"
            :key="doctor.id"
            class="reveal"
            :style="{ transitionDelay: `${index * 40}ms` }"
          >
            <DoctorCard :doctor="doctor" />
          </div>
        </div>

        <p v-if="filteredDoctors.length === 0" class="py-12 text-center text-slate-500">
          Aucun médecin trouvé pour cette spécialité.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { DOCTORS, SPECIALTIES } from '@/utils/constants'
import PageHeader from '@/components/common/PageHeader.vue'
import DoctorCard from '@/components/doctors/DoctorCard.vue'

const selectedSpecialty = ref('Tous')

const filteredDoctors = computed(() => {
  if (selectedSpecialty.value === 'Tous') return DOCTORS
  return DOCTORS.filter((d) => d.specialty === selectedSpecialty.value)
})

function countBySpecialty(specialty) {
  return DOCTORS.filter((d) => d.specialty === specialty).length
}

onMounted(() => {
  document.querySelectorAll('.reveal').forEach((el) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
  })
})
</script>
