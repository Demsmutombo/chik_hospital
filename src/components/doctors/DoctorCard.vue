<template>
  <div class="card group text-center">
    <div class="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full ring-4 ring-mint shadow-lg shadow-primary/15 transition-transform duration-300 group-hover:scale-105 dark:ring-primary/40">
      <img
        v-if="!imgError"
        :src="doctorImage"
        :alt="doctor.name"
        class="h-full w-full object-cover object-top"
        loading="lazy"
        @error="imgError = true"
      />
      <div
        v-else
        class="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-secondary text-2xl font-bold text-white"
      >
        {{ initials }}
      </div>
    </div>
    <h3 class="text-base font-bold text-primary dark:text-white">{{ doctor.name }}</h3>
    <span class="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-secondary/10 dark:text-secondary">
      {{ doctor.specialty }}
    </span>
    <RouterLink
      :to="{ path: '/rendez-vous', query: { service: doctor.specialty, doctor: doctor.name } }"
      class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary dark:hover:text-white"
    >
      <CalendarDaysIcon class="h-4 w-4" />
      Prendre RDV
    </RouterLink>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { getInitials, getDoctorImage } from '@/utils/helpers'
import { CalendarDaysIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  doctor: { type: Object, required: true },
})

const imgError = ref(false)
const initials = computed(() => getInitials(props.doctor.name))
const doctorImage = computed(() => getDoctorImage(props.doctor))
</script>
