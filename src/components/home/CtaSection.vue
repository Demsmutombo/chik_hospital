<template>
  <section class="bg-gradient-to-r from-primary to-primary-dark py-16 text-white md:py-20">
    <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <div class="reveal">
        <h2 class="text-3xl font-bold md:text-4xl">Votre santé, notre priorité</h2>
        <p class="mt-4 text-lg text-white/80">
          Prenez rendez-vous dès maintenant avec l'un de nos spécialistes ou contactez-nous pour toute urgence.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <RouterLink to="/rendez-vous" class="btn-health">
            <CalendarDaysIcon class="h-5 w-5" />
            Prendre Rendez-vous
          </RouterLink>
          <a :href="`tel:${HOSPITAL.phone.replace(/\s/g, '')}`" class="btn-secondary !border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-primary">
            <PhoneIcon class="h-5 w-5" />
            {{ HOSPITAL.phone }}
          </a>
          <a
            :href="`https://wa.me/${HOSPITAL.whatsapp.replace(/[\s+]/g, '')}`"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary !border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-primary"
          >
            WhatsApp
          </a>
          <a :href="`tel:${HOSPITAL.ambulance.replace(/\s/g, '')}`" class="inline-flex items-center justify-center gap-2 rounded-xl bg-emergency px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:brightness-110">
            <TruckIcon class="h-5 w-5" />
            Ambulance {{ HOSPITAL.ambulance }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { HOSPITAL } from '@/utils/constants'
import { CalendarDaysIcon, PhoneIcon, TruckIcon } from '@heroicons/vue/24/outline'
</script>
