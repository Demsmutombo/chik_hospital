<template>
  <div>
    <PageHeader
      title="Prendre Rendez-vous"
      subtitle="Réservez votre consultation en ligne avec l'un de nos spécialistes."
    />

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div class="card">
          <div class="mb-6 flex items-center gap-3 border-b border-slate-100 pb-6 dark:border-slate-700">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <CalendarDaysIcon class="h-6 w-6" />
            </div>
            <div>
              <h2 class="text-lg font-bold text-primary dark:text-white">Formulaire de rendez-vous</h2>
              <p class="text-sm text-slate-500">Remplissez le formulaire ci-dessous pour planifier votre consultation.</p>
            </div>
          </div>
          <AppointmentForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHeader from '@/components/common/PageHeader.vue'
import AppointmentForm from '@/components/appointment/AppointmentForm.vue'
import { CalendarDaysIcon } from '@heroicons/vue/24/outline'
</script>
