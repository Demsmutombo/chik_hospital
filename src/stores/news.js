import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { NEWS, NEWS_CATEGORIES } from '@/utils/constants'

const ITEMS_PER_PAGE = 6

export const useNewsStore = defineStore('news', () => {
  const articles = ref([...NEWS])
  const searchQuery = ref('')
  const selectedCategory = ref('Tous')
  const currentPage = ref(1)

  const filteredArticles = computed(() => {
    let result = articles.value

    if (selectedCategory.value !== 'Tous') {
      result = result.filter((a) => a.category === selectedCategory.value)
    }

    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.content.toLowerCase().includes(query) ||
          a.author.toLowerCase().includes(query)
      )
    }

    return result.sort((a, b) => new Date(b.date) - new Date(a.date))
  })

  const totalPages = computed(() =>
    Math.ceil(filteredArticles.value.length / ITEMS_PER_PAGE)
  )

  const paginatedArticles = computed(() => {
    const start = (currentPage.value - 1) * ITEMS_PER_PAGE
    return filteredArticles.value.slice(start, start + ITEMS_PER_PAGE)
  })

  const categories = computed(() => NEWS_CATEGORIES)

  function setCategory(category) {
    selectedCategory.value = category
    currentPage.value = 1
  }

  function setSearch(query) {
    searchQuery.value = query
    currentPage.value = 1
  }

  function setPage(page) {
    currentPage.value = page
  }

  return {
    articles,
    searchQuery,
    selectedCategory,
    currentPage,
    filteredArticles,
    paginatedArticles,
    totalPages,
    categories,
    setCategory,
    setSearch,
    setPage,
  }
})
