<template>
  <section class="bg-white py-16 dark:bg-slate-900 md:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
        <div
          v-for="(stat, index) in STATS"
          :key="stat.label"
          class="reveal card group text-center"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-secondary/10 dark:text-secondary">
            <component :is="iconMap[stat.icon]" class="h-6 w-6" />
          </div>
          <p class="text-3xl font-bold text-primary dark:text-white">{{ stat.value }}</p>
          <p class="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400 md:text-sm">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { STATS } from '@/utils/constants'
import {
  HomeModernIcon,
  HeartIcon,
  UserIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline'

const iconMap = {
  bed: HomeModernIcon,
  baby: SparklesIcon,
  child: UserIcon,
  emergency: ExclamationTriangleIcon,
  surgery: WrenchScrewdriverIcon,
  birth: HeartIcon,
}
</script>
