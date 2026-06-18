<template>
  <div>
    <PageHeader title="Contactez-nous" subtitle="Nous sommes disponibles 24h/24 et 7j/7 pour répondre à vos besoins." />

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <QuickCallButtons />

        <div class="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 class="text-2xl font-bold text-primary dark:text-white">Nos Coordonnées</h2>
            <div class="mt-6 space-y-6">
              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPinIcon class="h-6 w-6" />
                </div>
                <div>
                  <p class="font-semibold text-primary dark:text-white">Adresse</p>
                  <p class="mt-1 text-slate-600 dark:text-slate-400">{{ HOSPITAL.address }}</p>
                  <p class="text-slate-500">{{ HOSPITAL.addressDetail }}</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <PhoneIcon class="h-6 w-6" />
                </div>
                <div>
                  <p class="font-semibold text-primary dark:text-white">Téléphone</p>
                  <a :href="`tel:${HOSPITAL.phone.replace(/\s/g, '')}`" class="mt-1 block text-secondary hover:underline">
                    {{ HOSPITAL.phone }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-health/10 text-health">
                  <ChatBubbleLeftRightIcon class="h-6 w-6" />
                </div>
                <div>
                  <p class="font-semibold text-primary dark:text-white">WhatsApp</p>
                  <a
                    :href="`https://wa.me/${HOSPITAL.whatsapp.replace(/[\s+]/g, '')}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-1 block text-health hover:underline"
                  >
                    {{ HOSPITAL.whatsapp }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emergency/10 text-emergency">
                  <TruckIcon class="h-6 w-6" />
                </div>
                <div>
                  <p class="font-semibold text-primary dark:text-white">Ambulance</p>
                  <a :href="`tel:${HOSPITAL.ambulance.replace(/\s/g, '')}`" class="mt-1 block text-emergency hover:underline">
                    {{ HOSPITAL.ambulance }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <EnvelopeIcon class="h-6 w-6" />
                </div>
                <div>
                  <p class="font-semibold text-primary dark:text-white">Emails</p>
                  <a
                    v-for="email in HOSPITAL.emails"
                    :key="email"
                    :href="`mailto:${email}`"
                    class="mt-1 block text-secondary hover:underline"
                  >
                    {{ email }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <ClockIcon class="h-6 w-6" />
                </div>
                <div>
                  <p class="font-semibold text-primary dark:text-white">Disponibilité</p>
                  <p class="mt-1 text-slate-600 dark:text-slate-400">{{ HOSPITAL.availability }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <h2 class="mb-6 text-xl font-bold text-primary dark:text-white">Envoyez-nous un message</h2>
            <ContactForm />
          </div>
        </div>

        <div class="mt-12 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            :src="HOSPITAL.mapsEmbed"
            width="100%"
            height="450"
            style="border:0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localisation CHIK sur Google Maps"
          ></iframe>
        </div>
        <p class="mt-4 text-center">
          <a
            :href="HOSPITAL.mapsLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary dark:hover:text-white"
          >
            <MapPinIcon class="h-4 w-4" />
            Ouvrir dans Google Maps
          </a>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { HOSPITAL } from '@/utils/constants'
import PageHeader from '@/components/common/PageHeader.vue'
import QuickCallButtons from '@/components/contact/QuickCallButtons.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/vue/24/outline'
</script>
