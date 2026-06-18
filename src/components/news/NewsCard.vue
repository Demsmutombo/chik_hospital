<template>
  <article class="card group flex h-full flex-col overflow-hidden !p-0">
    <div class="relative aspect-[16/10] overflow-hidden">
      <img
        :src="article.image"
        :alt="article.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span class="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
        {{ article.category }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <time :datetime="article.date" class="text-xs text-slate-500">{{ formattedDate }}</time>
      <h3 class="mt-2 text-lg font-bold text-primary transition-colors group-hover:text-secondary dark:text-white">
        <RouterLink :to="`/actualites/${article.id}`">{{ article.title }}</RouterLink>
      </h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{{ article.excerpt }}</p>
      <div class="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-700">
        <span class="text-xs text-slate-500">{{ article.author }}</span>
        <RouterLink
          :to="`/actualites/${article.id}`"
          class="text-sm font-semibold text-secondary hover:text-primary dark:hover:text-white"
        >
          Lire la suite →
        </RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { formatDate } from '@/utils/helpers'

const props = defineProps({
  article: { type: Object, required: true },
})

const formattedDate = computed(() => formatDate(props.article.date))
</script>
