<template>
  <div class="card group flex h-full flex-col">
    <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-secondary group-hover:text-white dark:text-secondary">
      <component :is="iconComponent" class="h-7 w-7" />
    </div>
    <h3 class="text-lg font-bold text-primary dark:text-white">{{ service.name }}</h3>
    <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{{ service.description }}</p>
    <RouterLink
      :to="`/services/${service.id}`"
      class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-colors hover:text-primary dark:hover:text-white"
    >
      En savoir plus
      <ArrowRightIcon class="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  HeartIcon,
  UserGroupIcon,
  BeakerIcon,
  FaceSmileIcon,
  SparklesIcon,
  BoltIcon,
  SpeakerWaveIcon,
  SunIcon,
  EyeIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps({
  service: { type: Object, required: true },
})

const iconMap = {
  HeartIcon,
  UserGroupIcon,
  BeakerIcon,
  FaceSmileIcon,
  SparklesIcon,
  BoltIcon,
  SpeakerWaveIcon,
  SunIcon,
  EyeIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
}

const iconComponent = computed(() => iconMap[props.service.icon] || HeartIcon)
</script>
