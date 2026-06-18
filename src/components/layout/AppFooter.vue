<template>
  <footer class="bg-primary text-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <PlusIcon class="h-6 w-6" />
            </div>
            <div>
              <p class="text-lg font-bold">CHIK</p>
              <p class="text-xs text-white/70">Kinshasa</p>
            </div>
          </div>
          <p class="text-sm leading-relaxed text-white/70">
            Des soins de qualité, une équipe médicale qualifiée et des équipements modernes au service de votre santé.
          </p>
        </div>

        <div>
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider">Navigation</h3>
          <ul class="space-y-2">
            <li v-for="link in NAV_LINKS" :key="link.path">
              <RouterLink :to="link.path" class="text-sm text-white/70 transition-colors hover:text-white">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
          <ul class="space-y-3 text-sm text-white/70">
            <li class="flex items-start gap-2">
              <MapPinIcon class="mt-0.5 h-4 w-4 shrink-0" />
              <a :href="HOSPITAL.mapsLink" target="_blank" rel="noopener noreferrer" class="hover:text-white">
                {{ HOSPITAL.address }}<br />{{ HOSPITAL.addressDetail }}
              </a>
            </li>
            <li class="flex items-center gap-2">
              <PhoneIcon class="h-4 w-4 shrink-0" />
              <a :href="`tel:${HOSPITAL.phone.replace(/\s/g, '')}`" class="hover:text-white">{{ HOSPITAL.phone }}</a>
            </li>
            <li class="flex items-center gap-2">
              <ChatBubbleLeftRightIcon class="h-4 w-4 shrink-0" />
              <a
                :href="`https://wa.me/${HOSPITAL.whatsapp.replace(/[\s+]/g, '')}`"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white"
              >
                {{ HOSPITAL.whatsapp }}
              </a>
            </li>
            <li class="flex items-center gap-2">
              <TruckIcon class="h-4 w-4 shrink-0" />
              <a :href="`tel:${HOSPITAL.ambulance.replace(/\s/g, '')}`" class="hover:text-white">{{ HOSPITAL.ambulance }}</a>
            </li>
            <li class="flex items-start gap-2">
              <EnvelopeIcon class="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                <a
                  v-for="email in HOSPITAL.emails"
                  :key="email"
                  :href="`mailto:${email}`"
                  class="block hover:text-white"
                >
                  {{ email }}
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider">Horaires</h3>
          <p class="text-sm text-white/70">
            Ouvert {{ HOSPITAL.availability }}
          </p>
          <div class="mt-4 flex flex-wrap gap-3">
            <a
              :href="`tel:${HOSPITAL.phone.replace(/\s/g, '')}`"
              class="inline-flex items-center gap-1 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold transition-colors hover:brightness-110"
            >
              <PhoneIcon class="h-4 w-4" />
              Appeler
            </a>
            <a
              :href="`tel:${HOSPITAL.ambulance.replace(/\s/g, '')}`"
              class="inline-flex items-center gap-1 rounded-lg bg-emergency px-3 py-2 text-xs font-semibold transition-colors hover:brightness-110"
            >
              <TruckIcon class="h-4 w-4" />
              Ambulance
            </a>
            <a
              :href="`https://wa.me/${HOSPITAL.whatsapp.replace(/[\s+]/g, '')}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 rounded-lg bg-health px-3 py-2 text-xs font-semibold transition-colors hover:brightness-110"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
        <p>&copy; {{ year }} {{ HOSPITAL.name }}. Tous droits réservés.</p>
        <p class="mt-1 italic text-white/40">"{{ HOSPITAL.motto }}"</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { HOSPITAL, NAV_LINKS } from '@/utils/constants'
import { PlusIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, TruckIcon } from '@heroicons/vue/24/outline'

const year = computed(() => new Date().getFullYear())
</script>
