<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main id="main-content" class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
    <WhatsAppFloat />
    <BackToTop />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import WhatsAppFloat from '@/components/common/WhatsAppFloat.vue'
import BackToTop from '@/components/common/BackToTop.vue'
</script>
