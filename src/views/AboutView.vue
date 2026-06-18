<template>
  <div>
    <PageHeader title="À Propos du CHIK" subtitle="Un complexe médical moderne au service de la santé à Kinshasa." />

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div class="reveal">
            <h2 class="section-title">Notre Établissement</h2>
            <p class="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {{ HOSPITAL.description }}
            </p>
            <div class="mt-8 space-y-3">
              <div
                v-for="strength in STRENGTHS"
                :key="strength"
                class="flex items-center gap-3"
              >
                <CheckCircleIcon class="h-5 w-5 shrink-0 text-health" />
                <span class="text-slate-700 dark:text-slate-300">{{ strength }}</span>
              </div>
            </div>
          </div>
          <div class="reveal">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80"
              alt="CHIK - Établissement médical"
              class="rounded-3xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light py-16 dark:bg-slate-800/50 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2">
          <div class="reveal card border-l-4 border-primary !bg-white dark:!bg-slate-800">
            <HeartIcon class="mb-4 h-10 w-10 text-primary" />
            <h3 class="text-xl font-bold text-primary dark:text-white">Notre Devise</h3>
            <p class="mt-3 text-lg italic text-slate-600 dark:text-slate-400">"{{ HOSPITAL.motto }}"</p>
          </div>
          <div class="reveal card border-l-4 border-secondary !bg-white dark:!bg-slate-800">
            <EyeIcon class="mb-4 h-10 w-10 text-secondary" />
            <h3 class="text-xl font-bold text-primary dark:text-white">Notre Vision</h3>
            <p class="mt-3 text-lg italic text-slate-600 dark:text-slate-400">"{{ HOSPITAL.vision }}"</p>
          </div>
        </div>
      </div>
    </section>

    <StatsSection />

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-2">
          <div class="reveal">
            <h2 class="section-title">Notre Infrastructure</h2>
            <p class="section-subtitle mt-4">
              Un établissement moderne avec {{ STATS.length }} unités de soins pour répondre à vos besoins de santé.
            </p>
            <div class="mt-8 grid grid-cols-2 gap-4">
              <div v-for="stat in STATS" :key="stat.label" class="rounded-xl bg-light p-4 dark:bg-slate-800">
                <p class="text-2xl font-bold text-primary dark:text-white">{{ stat.value }}</p>
                <p class="text-xs text-slate-600 dark:text-slate-400">{{ stat.label }}</p>
              </div>
            </div>
          </div>
          <div class="reveal">
            <HospitalContact />
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { HOSPITAL, STRENGTHS, STATS } from '@/utils/constants'
import PageHeader from '@/components/common/PageHeader.vue'
import HospitalContact from '@/components/common/HospitalContact.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import CtaSection from '@/components/home/CtaSection.vue'
import { CheckCircleIcon, HeartIcon, EyeIcon } from '@heroicons/vue/24/outline'

onMounted(() => {
  document.querySelectorAll('.reveal').forEach((el) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
  })
})
</script>
