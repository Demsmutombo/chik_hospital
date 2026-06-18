<template>
  <div class="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
    <p class="text-8xl font-bold text-primary/20">404</p>
    <h1 class="mt-4 text-2xl font-bold text-primary dark:text-white">Page non trouvée</h1>
    <p class="mt-2 text-slate-600 dark:text-slate-400">La page que vous recherchez n'existe pas ou a été déplacée.</p>
    <RouterLink to="/" class="btn-primary mt-8">
      Retour à l'accueil
    </RouterLink>
  </div>
</template>

<script setup>
</script>
