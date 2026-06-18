<template>
  <div class="rounded-2xl bg-white p-6 shadow-md dark:bg-slate-800" :class="compact ? 'space-y-4' : 'space-y-5'">
    <h3 v-if="showTitle" class="text-lg font-bold text-primary dark:text-white">Nos Coordonnées</h3>

    <div class="flex items-start gap-3">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <MapPinIcon class="h-5 w-5" />
      </div>
      <div>
        <p class="text-sm font-semibold text-primary dark:text-white">Adresse</p>
        <p class="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{{ HOSPITAL.address }}</p>
        <p class="text-sm text-slate-500">{{ HOSPITAL.addressDetail }}</p>
        <a
          :href="HOSPITAL.mapsLink"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-1 inline-block text-sm font-medium text-secondary hover:underline"
        >
          Voir sur Google Maps →
        </a>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <PhoneIcon class="h-5 w-5" />
      </div>
      <div>
        <p class="text-sm font-semibold text-primary dark:text-white">Téléphone</p>
        <a :href="`tel:${HOSPITAL.phone.replace(/\s/g, '')}`" class="text-sm text-secondary hover:underline">
          {{ HOSPITAL.phone }}
        </a>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-health/10 text-health">
        <ChatBubbleLeftRightIcon class="h-5 w-5" />
      </div>
      <div>
        <p class="text-sm font-semibold text-primary dark:text-white">WhatsApp</p>
        <a
          :href="`https://wa.me/${HOSPITAL.whatsapp.replace(/[\s+]/g, '')}`"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-health hover:underline"
        >
          {{ HOSPITAL.whatsapp }}
        </a>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emergency/10 text-emergency">
        <TruckIcon class="h-5 w-5" />
      </div>
      <div>
        <p class="text-sm font-semibold text-primary dark:text-white">Ambulance</p>
        <a :href="`tel:${HOSPITAL.ambulance.replace(/\s/g, '')}`" class="text-sm text-emergency hover:underline">
          {{ HOSPITAL.ambulance }}
        </a>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <EnvelopeIcon class="h-5 w-5" />
      </div>
      <div>
        <p class="text-sm font-semibold text-primary dark:text-white">Emails</p>
        <a
          v-for="email in HOSPITAL.emails"
          :key="email"
          :href="`mailto:${email}`"
          class="block text-sm text-secondary hover:underline"
        >
          {{ email }}
        </a>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
        <ClockIcon class="h-5 w-5" />
      </div>
      <div>
        <p class="text-sm font-semibold text-primary dark:text-white">Disponibilité</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">{{ HOSPITAL.availability }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HOSPITAL } from '@/utils/constants'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/vue/24/outline'

defineProps({
  showTitle: { type: Boolean, default: true },
  compact: { type: Boolean, default: false },
})
</script>
