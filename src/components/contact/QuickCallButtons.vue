<template>
  <div class="grid gap-4 sm:grid-cols-3">
    <a
      :href="`tel:${HOSPITAL.phone.replace(/\s/g, '')}`"
      class="card flex items-center gap-4 !p-4 transition-colors hover:border-secondary"
    >
      <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <PhoneIcon class="h-6 w-6" />
      </div>
      <div>
        <p class="text-xs font-medium text-slate-500">Téléphone</p>
        <p class="text-sm font-bold text-primary dark:text-white">{{ HOSPITAL.phone }}</p>
      </div>
    </a>

    <a
      :href="`tel:${HOSPITAL.ambulance.replace(/\s/g, '')}`"
      class="card flex items-center gap-4 !p-4 transition-colors hover:border-emergency"
    >
      <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emergency/10 text-emergency">
        <TruckIcon class="h-6 w-6" />
      </div>
      <div>
        <p class="text-xs font-medium text-slate-500">Ambulance</p>
        <p class="text-sm font-bold text-emergency">{{ HOSPITAL.ambulance }}</p>
      </div>
    </a>

    <a
      :href="`https://wa.me/${HOSPITAL.whatsapp.replace(/[\s+]/g, '')}`"
      target="_blank"
      rel="noopener noreferrer"
      class="card flex items-center gap-4 !p-4 transition-colors hover:border-health"
    >
      <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-health/10 text-health">
        <ChatBubbleLeftRightIcon class="h-6 w-6" />
      </div>
      <div>
        <p class="text-xs font-medium text-slate-500">WhatsApp</p>
        <p class="text-sm font-bold text-health">{{ HOSPITAL.whatsapp }}</p>
      </div>
    </a>
  </div>
</template>

<script setup>
import { HOSPITAL } from '@/utils/constants'
import { PhoneIcon, TruckIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
</script>
