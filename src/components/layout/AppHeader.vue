<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 shadow-lg backdrop-blur-md dark:bg-slate-900/95' : 'bg-transparent'"
  >
    <div class="bg-emergency py-1.5 text-center text-xs font-medium text-white md:text-sm">
      <span class="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span class="inline-flex items-center gap-1">
          <PhoneIcon class="h-4 w-4" />
          Tél :
          <a :href="`tel:${HOSPITAL.phone.replace(/\s/g, '')}`" class="underline hover:no-underline">{{ HOSPITAL.phone }}</a>
        </span>
        <span class="hidden sm:inline">|</span>
        <span class="inline-flex items-center gap-1">
          Ambulance :
          <a :href="`tel:${HOSPITAL.ambulance.replace(/\s/g, '')}`" class="underline hover:no-underline">{{ HOSPITAL.ambulance }}</a>
        </span>
        <span class="hidden sm:inline">|</span>
        <span>{{ HOSPITAL.availability }}</span>
      </span>
    </div>

    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
      <div class="flex h-16 items-center justify-between md:h-20">
        <RouterLink to="/" class="group flex items-center gap-3" aria-label="CHIK Accueil">
          <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition-transform group-hover:scale-105">
            <PlusIcon class="h-6 w-6 text-white" stroke-width="2.5" />
          </div>
          <div class="hidden sm:block">
            <p class="text-lg font-bold leading-tight text-primary dark:text-white">CHIK</p>
            <p class="text-[10px] leading-tight text-slate-500 dark:text-slate-400 md:text-xs">
              Centre Hospitalier International
            </p>
          </div>
        </RouterLink>

        <div class="hidden items-center gap-1 lg:flex">
          <RouterLink
            v-for="link in NAV_LINKS"
            :key="link.path"
            :to="link.path"
            class="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-primary/5 hover:text-primary dark:text-slate-300 dark:hover:text-white"
            active-class="!text-primary !bg-primary/10 dark:!text-secondary"
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            :aria-label="themeStore.isDark ? 'Mode clair' : 'Mode sombre'"
            @click="themeStore.toggleTheme()"
          >
            <SunIcon v-if="themeStore.isDark" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>

          <RouterLink to="/rendez-vous" class="btn-primary hidden !px-4 !py-2.5 sm:inline-flex">
            <CalendarDaysIcon class="h-4 w-4" />
            Rendez-vous
          </RouterLink>

          <button
            type="button"
            class="rounded-lg p-2 text-slate-600 lg:hidden dark:text-slate-400"
            aria-label="Menu"
            @click="mobileOpen = !mobileOpen"
          >
            <Bars3Icon v-if="!mobileOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileOpen" class="border-t border-slate-200 pb-4 lg:hidden dark:border-slate-700">
          <RouterLink
            v-for="link in NAV_LINKS"
            :key="link.path"
            :to="link.path"
            class="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-primary/5 dark:text-slate-300"
            active-class="!text-primary !bg-primary/10"
            @click="mobileOpen = false"
          >
            {{ link.name }}
          </RouterLink>
          <RouterLink
            to="/rendez-vous"
            class="btn-primary mx-4 mt-2 w-[calc(100%-2rem)]"
            @click="mobileOpen = false"
          >
            Prendre Rendez-vous
          </RouterLink>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { HOSPITAL, NAV_LINKS } from '@/utils/constants'
import {
  PlusIcon,
  PhoneIcon,
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
  CalendarDaysIcon,
} from '@heroicons/vue/24/outline'

const themeStore = useThemeStore()
const mobileOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
