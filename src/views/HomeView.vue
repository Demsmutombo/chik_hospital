<template>
  <div>
    <HeroSection />
    <StatsSection />
    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="reveal text-center">
          <h2 class="section-title">Nos Services Médicaux</h2>
          <p class="section-subtitle mx-auto">Plus de 16 spécialités pour répondre à tous vos besoins de santé.</p>
        </div>
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(service, index) in previewServices"
            :key="service.id"
            class="reveal"
            :style="{ transitionDelay: `${index * 60}ms` }"
          >
            <ServiceCard :service="service" />
          </div>
        </div>
        <div class="mt-10 text-center">
          <RouterLink to="/services" class="btn-secondary">
            Voir tous les services
          </RouterLink>
        </div>
      </div>
    </section>
    <TestimonialsSection />
    <GallerySection />
    <FaqSection />
    <CtaSection />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { SERVICES } from '@/utils/constants'
import { useScrollReveal } from '@/composables/useScrollReveal'
import HeroSection from '@/components/home/HeroSection.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import GallerySection from '@/components/home/GallerySection.vue'
import FaqSection from '@/components/home/FaqSection.vue'
import CtaSection from '@/components/home/CtaSection.vue'
import ServiceCard from '@/components/services/ServiceCard.vue'

useScrollReveal()

const previewServices = computed(() => SERVICES.slice(0, 8))

onMounted(() => {
  setTimeout(() => {
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
  }, 100)
})
</script>
