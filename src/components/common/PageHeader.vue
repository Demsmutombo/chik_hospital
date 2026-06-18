<template>
  <div class="bg-gradient-to-br from-primary/5 to-secondary/5 py-12 md:py-16 dark:from-primary/10 dark:to-secondary/10">
    <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-primary md:text-4xl dark:text-white">{{ title }}</h1>
      <p v-if="subtitle" class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>
