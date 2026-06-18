<template>
  <section class="py-16 md:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="reveal text-center">
        <h2 class="section-title">Ce que disent nos patients</h2>
        <p class="section-subtitle mx-auto">La confiance de nos patients est notre plus belle récompense.</p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(item, index) in TESTIMONIALS"
          :key="item.id"
          class="reveal card flex flex-col"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="mb-4 flex gap-1">
            <StarIcon v-for="n in item.rating" :key="n" class="h-4 w-4 text-yellow-400" />
          </div>
          <p class="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">"{{ item.text }}"</p>
          <div class="mt-4 border-t border-slate-100 pt-4 dark:border-slate-700">
            <p class="font-semibold text-primary dark:text-white">{{ item.name }}</p>
            <p class="text-xs text-slate-500">{{ item.service }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { TESTIMONIALS } from '@/utils/constants'
import { StarIcon } from '@heroicons/vue/24/solid'
</script>
