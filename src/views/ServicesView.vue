<template>
  <div>
    <PageHeader
      title="Nos Services Médicaux"
      subtitle="Découvrez l'ensemble de nos spécialités médicales et paramédicales."
    />

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
            v-for="(service, index) in SERVICES"
            :key="service.id"
            class="reveal"
            :style="{ transitionDelay: `${index * 50}ms` }"
          >
            <ServiceCard :service="service" />
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { SERVICES } from '@/utils/constants'
import PageHeader from '@/components/common/PageHeader.vue'
import ServiceCard from '@/components/services/ServiceCard.vue'
import CtaSection from '@/components/home/CtaSection.vue'

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
