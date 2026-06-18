<template>
  <form class="space-y-5" novalidate @submit.prevent="handleSubmit">
    <div class="grid gap-5 md:grid-cols-2">
      <div>
        <label for="fullName" class="label-field">Nom complet *</label>
        <input
          id="fullName"
          v-model="form.fullName"
          type="text"
          class="input-field"
          :class="{ 'border-emergency': touched.fullName && errors.fullName }"
          placeholder="Votre nom complet"
          @blur="touch('fullName')"
        />
        <p v-if="touched.fullName && errors.fullName" class="mt-1 text-xs text-emergency">{{ errors.fullName }}</p>
      </div>

      <div>
        <label for="phone" class="label-field">Téléphone *</label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          class="input-field"
          :class="{ 'border-emergency': touched.phone && errors.phone }"
          placeholder="+243 XXX XXX XXX"
          @blur="touch('phone')"
        />
        <p v-if="touched.phone && errors.phone" class="mt-1 text-xs text-emergency">{{ errors.phone }}</p>
      </div>

      <div>
        <label for="email" class="label-field">Email *</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="input-field"
          :class="{ 'border-emergency': touched.email && errors.email }"
          placeholder="votre@email.com"
          @blur="touch('email')"
        />
        <p v-if="touched.email && errors.email" class="mt-1 text-xs text-emergency">{{ errors.email }}</p>
      </div>

      <div>
        <label for="service" class="label-field">Service *</label>
        <select
          id="service"
          v-model="form.service"
          class="input-field"
          :class="{ 'border-emergency': touched.service && errors.service }"
          @blur="touch('service')"
          @change="onServiceChange"
        >
          <option value="">Sélectionner un service</option>
          <option v-for="s in SERVICES" :key="s.id" :value="s.name">{{ s.name }}</option>
        </select>
        <p v-if="touched.service && errors.service" class="mt-1 text-xs text-emergency">{{ errors.service }}</p>
      </div>

      <div>
        <label for="doctor" class="label-field">Médecin *</label>
        <select
          id="doctor"
          v-model="form.doctor"
          class="input-field"
          :class="{ 'border-emergency': touched.doctor && errors.doctor }"
          :disabled="!form.service"
          @blur="touch('doctor')"
        >
          <option value="">Sélectionner un médecin</option>
          <option v-for="d in filteredDoctors" :key="d.id" :value="d.name">{{ d.name }}</option>
        </select>
        <p v-if="touched.doctor && errors.doctor" class="mt-1 text-xs text-emergency">{{ errors.doctor }}</p>
      </div>

      <div>
        <label for="date" class="label-field">Date *</label>
        <input
          id="date"
          v-model="form.date"
          type="date"
          class="input-field"
          :class="{ 'border-emergency': touched.date && errors.date }"
          :min="minDate"
          @blur="touch('date')"
        />
        <p v-if="touched.date && errors.date" class="mt-1 text-xs text-emergency">{{ errors.date }}</p>
      </div>

      <div>
        <label for="time" class="label-field">Heure *</label>
        <select
          id="time"
          v-model="form.time"
          class="input-field"
          :class="{ 'border-emergency': touched.time && errors.time }"
          @blur="touch('time')"
        >
          <option value="">Sélectionner une heure</option>
          <option v-for="slot in TIME_SLOTS" :key="slot" :value="slot">{{ slot }}</option>
        </select>
        <p v-if="touched.time && errors.time" class="mt-1 text-xs text-emergency">{{ errors.time }}</p>
      </div>
    </div>

    <div>
      <label for="message" class="label-field">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        class="input-field resize-none"
        placeholder="Décrivez brièvement votre motif de consultation..."
      ></textarea>
    </div>

    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div v-if="success" class="rounded-xl bg-health/10 p-4 text-sm font-medium text-health">
        Votre demande de rendez-vous a été envoyée avec succès. Nous vous contacterons sous peu.
      </div>
    </Transition>

    <p v-if="submitError" class="text-sm text-emergency">{{ submitError }}</p>

    <button type="submit" class="btn-primary w-full md:w-auto" :disabled="loading">
      <span v-if="loading" class="inline-flex items-center gap-2">
        <svg class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
        Envoi en cours...
      </span>
      <span v-else class="inline-flex items-center gap-2">
        <CalendarDaysIcon class="h-5 w-5" />
        Confirmer le Rendez-vous
      </span>
    </button>
  </form>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { CalendarDaysIcon } from '@heroicons/vue/24/outline'
import { useFormValidation } from '@/composables/useValidation'
import { useAppointmentStore } from '@/stores/appointment'
import { SERVICES, DOCTORS, TIME_SLOTS } from '@/utils/constants'

const appointmentStore = useAppointmentStore()
const route = useRoute()
const loading = computed(() => appointmentStore.loading)
const success = computed(() => appointmentStore.success)
const submitError = ref(null)

const minDate = new Date().toISOString().split('T')[0]

const { form, errors, touched, validateAll, touch } = useFormValidation(
  {
    fullName: '',
    phone: '',
    email: '',
    service: '',
    doctor: '',
    date: '',
    time: '',
    message: '',
  },
  {
    fullName: { required: true, requiredMessage: 'Le nom complet est requis.' },
    phone: { required: true, phone: true },
    email: { required: true, email: true },
    service: { required: true, requiredMessage: 'Veuillez sélectionner un service.' },
    doctor: { required: true, requiredMessage: 'Veuillez sélectionner un médecin.' },
    date: { required: true, requiredMessage: 'Veuillez sélectionner une date.' },
    time: { required: true, requiredMessage: 'Veuillez sélectionner une heure.' },
  }
)

const filteredDoctors = computed(() => {
  if (!form.service) return []
  return DOCTORS.filter((d) => d.specialty === form.service)
})

function onServiceChange() {
  form.doctor = ''
}

onMounted(() => {
  if (route.query.service) form.service = String(route.query.service)
  if (route.query.doctor) form.doctor = String(route.query.doctor)
})

async function handleSubmit() {
  submitError.value = null
  appointmentStore.resetState()

  if (!validateAll()) return

  try {
    await appointmentStore.submitAppointment({ ...form })
  } catch {
    submitError.value = appointmentStore.error
  }
}
</script>
