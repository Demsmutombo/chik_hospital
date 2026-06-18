<template>
  <RouterView />
</template>

<script setup>
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSeo } from '@/composables/useSeo'
import { SERVICES, NEWS } from '@/utils/constants'

const route = useRoute()
const { updateSeo, injectHospitalSchema } = useSeo()

function resolveSeo() {
  let title = route.meta.title
  let description = route.meta.description

  if (route.name === 'service-detail') {
    const service = SERVICES.find((s) => s.id === route.params.id)
    if (service) {
      title = service.name
      description = service.description
    }
  }

  if (route.name === 'news-detail') {
    const article = NEWS.find((a) => String(a.id) === route.params.id)
    if (article) {
      title = article.title
      description = article.excerpt
    }
  }

  updateSeo({ title, description })
}

watch(() => route.fullPath, resolveSeo, { immediate: true })

onMounted(() => injectHospitalSchema())
</script>
