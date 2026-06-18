<template>
  <section class="py-16 md:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="reveal text-center">
        <h2 class="section-title">Notre Établissement</h2>
        <p class="section-subtitle mx-auto">Découvrez nos installations modernes et accueillantes.</p>
      </div>

      <div class="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:gap-6">
        <div
          v-for="(photo, index) in GALLERY"
          :key="photo.id"
          class="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div class="absolute inset-0 flex items-end bg-gradient-to-t from-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p class="p-4 text-sm font-medium text-white">{{ photo.alt }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { GALLERY } from '@/utils/constants'
</script>
