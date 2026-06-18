<template>
  <div class="card group text-center">
    <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-2xl font-bold text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
      {{ initials }}
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
import { computed } from 'vue'
import { getInitials } from '@/utils/helpers'
import { CalendarDaysIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  doctor: { type: Object, required: true },
})

const initials = computed(() => getInitials(props.doctor.name))
</script>
