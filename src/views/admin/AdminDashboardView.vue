<template>
  <div>
    <div class="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="stat in statCards"
        :key="stat.label"
        class="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-slate-500">{{ stat.label }}</p>
            <p class="mt-1 text-3xl font-bold text-primary dark:text-white">{{ stat.value }}</p>
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-xl" :class="stat.bgClass">
            <component :is="stat.icon" class="h-6 w-6" :class="stat.iconClass" />
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <div class="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
        <h2 class="mb-4 text-lg font-semibold text-primary dark:text-white">Rendez-vous récents</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead>
              <tr class="border-b border-slate-100 dark:border-slate-700">
                <th class="pb-3 font-medium text-slate-500">Patient</th>
                <th class="pb-3 font-medium text-slate-500">Service</th>
                <th class="pb-3 font-medium text-slate-500">Date</th>
                <th class="pb-3 font-medium text-slate-500">Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="appt in adminStore.recentAppointments"
                :key="appt.id"
                class="border-b border-slate-50 dark:border-slate-700/50"
              >
                <td class="py-3 font-medium">{{ appt.patient }}</td>
                <td class="py-3 text-slate-600 dark:text-slate-400">{{ appt.service }}</td>
                <td class="py-3 text-slate-600 dark:text-slate-400">{{ appt.date }}</td>
                <td class="py-3">
                  <span
                    class="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    :class="statusClass(appt.status)"
                  >
                    {{ appt.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800">
        <h2 class="mb-4 text-lg font-semibold text-primary dark:text-white">Connexion API Laravel</h2>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          Ce dashboard est prêt à être connecté à votre backend Laravel. Configurez l'URL de l'API dans le fichier
          <code class="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-700">.env</code> :
        </p>
        <pre class="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-xs text-green-400">VITE_API_URL=http://localhost:8000/api</pre>

        <div class="mt-6 space-y-3">
          <div class="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-700/50">
            <CheckCircleIcon class="h-5 w-5 text-health" />
            <span class="text-sm">Endpoints rendez-vous configurés</span>
          </div>
          <div class="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-700/50">
            <CheckCircleIcon class="h-5 w-5 text-health" />
            <span class="text-sm">Authentification Bearer Token</span>
          </div>
          <div class="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-700/50">
            <CheckCircleIcon class="h-5 w-5 text-health" />
            <span class="text-sm">Intercepteurs Axios prêts</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useAdminStore } from '@/stores/admin'
import {
  CalendarDaysIcon,
  UsersIcon,
  UserGroupIcon,
  EnvelopeIcon,
  CheckCircleIcon,
} from '@heroicons/vue/24/outline'

const adminStore = useAdminStore()

const statCards = computed(() => [
  {
    label: 'Rendez-vous total',
    value: adminStore.stats.totalAppointments,
    icon: CalendarDaysIcon,
    bgClass: 'bg-primary/10',
    iconClass: 'text-primary',
  },
  {
    label: 'En attente',
    value: adminStore.stats.pendingAppointments,
    icon: UsersIcon,
    bgClass: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconClass: 'text-yellow-600',
  },
  {
    label: 'Patients',
    value: adminStore.stats.totalPatients,
    icon: UserGroupIcon,
    bgClass: 'bg-health/10',
    iconClass: 'text-health',
  },
  {
    label: 'Messages non lus',
    value: adminStore.stats.unreadMessages,
    icon: EnvelopeIcon,
    bgClass: 'bg-secondary/10',
    iconClass: 'text-secondary',
  },
])

function statusClass(status) {
  const map = {
    confirmé: 'bg-health/10 text-health',
    'en attente': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    annulé: 'bg-emergency/10 text-emergency',
  }
  return map[status] || 'bg-slate-100 text-slate-600'
}

onMounted(() => adminStore.fetchDashboard())
</script>
