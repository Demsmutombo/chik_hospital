<template>
  <div v-if="service">
    <PageHeader :title="service.name" :subtitle="service.description" />

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-3">
          <div class="lg:col-span-2">
            <div class="card">
              <h2 class="text-xl font-bold text-primary dark:text-white">À propos de ce service</h2>
              <p class="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">{{ service.details }}</p>

              <h3 class="mt-8 text-lg font-bold text-primary dark:text-white">Nos prestations</h3>
              <ul class="mt-4 space-y-2">
                <li
                  v-for="benefit in service.benefits"
                  :key="benefit"
                  class="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <CheckCircleIcon class="mt-0.5 h-5 w-5 shrink-0 text-health" />
                  {{ benefit }}
                </li>
              </ul>

              <div v-if="doctors.length" class="mt-8">
                <h3 class="text-lg font-bold text-primary dark:text-white">Médecins disponibles</h3>
                <div class="mt-4 flex flex-wrap gap-2">
                  <RouterLink
                    v-for="doc in doctors"
                    :key="doc.id"
                    :to="{ path: '/rendez-vous', query: { service: doc.specialty, doctor: doc.name } }"
                    class="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white dark:bg-secondary/10 dark:text-secondary"
                  >
                    {{ doc.name }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="card bg-gradient-to-br from-primary to-primary-dark text-white">
              <h3 class="text-lg font-bold">Prendre rendez-vous</h3>
              <p class="mt-2 text-sm text-white/80">
                Consultez nos spécialistes en {{ service.name.toLowerCase() }}.
              </p>
              <RouterLink
                :to="{ path: '/rendez-vous', query: { service: service.name } }"
                class="btn-health mt-4 w-full"
              >
                <CalendarDaysIcon class="h-5 w-5" />
                Réserver une consultation
              </RouterLink>
            </div>
            <HospitalContact :compact="true" />
          </div>
        </div>

        <div class="mt-10">
          <RouterLink to="/services" class="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary">
            <ArrowLeftIcon class="h-4 w-4" />
            Retour aux services
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
    <h2 class="text-2xl font-bold text-primary dark:text-white">Service non trouvé</h2>
    <RouterLink to="/services" class="btn-primary mt-6">Retour aux services</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { SERVICES, DOCTORS } from '@/utils/constants'
import { enrichServices } from '@/utils/serviceDetails'
import { getDoctorsBySpecialty } from '@/utils/helpers'
import PageHeader from '@/components/common/PageHeader.vue'
import HospitalContact from '@/components/common/HospitalContact.vue'
import { CheckCircleIcon, CalendarDaysIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const enrichedServices = enrichServices(SERVICES)

const service = computed(() => enrichedServices.find((s) => s.id === route.params.id))

const doctors = computed(() => {
  if (!service.value) return []
  return getDoctorsBySpecialty(DOCTORS, service.value.name)
})
</script>
