<template>
  <div>
    <PageHeader title="Actualités" subtitle="Les dernières nouvelles, conseils santé et événements du CHIK." />

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div class="relative max-w-md flex-1">
            <MagnifyingGlassIcon class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              v-model="searchInput"
              type="search"
              placeholder="Rechercher un article..."
              class="input-field !pl-11"
              aria-label="Rechercher"
            />
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="cat in newsStore.categories"
              :key="cat"
              type="button"
              class="rounded-full px-4 py-2 text-sm font-medium transition-all"
              :class="newsStore.selectedCategory === cat
                ? 'bg-primary text-white'
                : 'bg-white text-slate-600 hover:bg-primary/5 dark:bg-slate-800 dark:text-slate-300'"
              @click="newsStore.setCategory(cat)"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <div v-if="newsStore.paginatedArticles.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <NewsCard
            v-for="article in newsStore.paginatedArticles"
            :key="article.id"
            :article="article"
          />
        </div>

        <p v-else class="py-16 text-center text-slate-500">
          Aucun article trouvé pour votre recherche.
        </p>

        <div v-if="newsStore.totalPages > 1" class="mt-12 flex items-center justify-center gap-2">
          <button
            type="button"
            class="rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-40"
            :disabled="newsStore.currentPage === 1"
            @click="newsStore.setPage(newsStore.currentPage - 1)"
          >
            Précédent
          </button>
          <button
            v-for="page in newsStore.totalPages"
            :key="page"
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors"
            :class="newsStore.currentPage === page
              ? 'bg-primary text-white'
              : 'bg-white text-slate-600 hover:bg-primary/5 dark:bg-slate-800'"
            @click="newsStore.setPage(page)"
          >
            {{ page }}
          </button>
          <button
            type="button"
            class="rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-40"
            :disabled="newsStore.currentPage === newsStore.totalPages"
            @click="newsStore.setPage(newsStore.currentPage + 1)"
          >
            Suivant
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useNewsStore } from '@/stores/news'
import { debounce } from '@/utils/helpers'
import PageHeader from '@/components/common/PageHeader.vue'
import NewsCard from '@/components/news/NewsCard.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const newsStore = useNewsStore()
const searchInput = ref('')

const debouncedSearch = debounce((val) => newsStore.setSearch(val), 300)

watch(searchInput, debouncedSearch)
</script>
