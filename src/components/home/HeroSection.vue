<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark py-20 text-white md:py-28">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-health blur-3xl"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="animate-fade-in">
          <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span class="h-2 w-2 animate-pulse rounded-full bg-health"></span>
            Ouvert {{ HOSPITAL.availability }}
          </span>
          <h1 class="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Bienvenue au Centre Hospitalier International de Kinshasa
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Des soins de qualité, une équipe médicale qualifiée et des équipements modernes au service de votre santé 24h/24 et 7j/7.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <RouterLink to="/rendez-vous" class="btn-health">
              <CalendarDaysIcon class="h-5 w-5" />
              Prendre Rendez-vous
            </RouterLink>
            <RouterLink to="/services" class="btn-secondary !border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-primary">
              <SparklesIcon class="h-5 w-5" />
              Découvrir Nos Services
            </RouterLink>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              :href="HOSPITAL.mapsLink"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <MapPinIcon class="h-5 w-5 shrink-0 text-health" />
              <span>{{ HOSPITAL.address }}, {{ HOSPITAL.addressDetail }}</span>
            </a>
            <a
              :href="`tel:${HOSPITAL.phone.replace(/\s/g, '')}`"
              class="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <PhoneIcon class="h-5 w-5 shrink-0 text-health" />
              <span>{{ HOSPITAL.phone }}</span>
            </a>
          </div>
        </div>

        <div class="relative hidden lg:block">
          <div class="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
              alt="Centre Hospitalier International de Kinshasa"
              class="h-[480px] w-full object-cover"
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
              <p class="text-sm font-medium italic">"{{ HOSPITAL.motto }}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { HOSPITAL } from '@/utils/constants'
import { CalendarDaysIcon, SparklesIcon, MapPinIcon, PhoneIcon } from '@heroicons/vue/24/outline'
</script>
