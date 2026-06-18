<template>
  <div v-if="article">
    <PageHeader :title="article.title" :subtitle="article.excerpt" />

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div class="overflow-hidden rounded-2xl shadow-lg">
          <img :src="article.image" :alt="article.title" class="aspect-[16/9] w-full object-cover" />
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span class="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">{{ article.category }}</span>
          <time :datetime="article.date">{{ formattedDate }}</time>
          <span>Par {{ article.author }}</span>
        </div>

        <div class="prose prose-slate mt-8 max-w-none dark:prose-invert">
          <p v-for="(paragraph, i) in paragraphs" :key="i" class="mb-4 leading-relaxed text-slate-600 dark:text-slate-400">
            {{ paragraph }}
          </p>
        </div>

        <div class="mt-10 flex flex-wrap gap-4 border-t border-slate-200 pt-8 dark:border-slate-700">
          <RouterLink to="/actualites" class="btn-secondary">
            <ArrowLeftIcon class="h-4 w-4" />
            Toutes les actualités
          </RouterLink>
          <RouterLink to="/rendez-vous" class="btn-primary">
            Prendre rendez-vous
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
    <h2 class="text-2xl font-bold text-primary dark:text-white">Article non trouvé</h2>
    <RouterLink to="/actualites" class="btn-primary mt-6">Retour aux actualités</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { NEWS } from '@/utils/constants'
import { formatDate } from '@/utils/helpers'
import PageHeader from '@/components/common/PageHeader.vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'

const route = useRoute()

const article = computed(() => NEWS.find((a) => String(a.id) === route.params.id))

const formattedDate = computed(() => (article.value ? formatDate(article.value.date) : ''))

const paragraphs = computed(() => {
  if (!article.value) return []
  return article.value.content.split('\n\n').filter(Boolean)
})
</script>
