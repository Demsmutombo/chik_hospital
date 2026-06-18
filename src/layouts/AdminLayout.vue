<template>
  <div class="flex min-h-screen bg-slate-100 dark:bg-slate-950">
    <aside class="hidden w-64 shrink-0 bg-primary lg:block">
      <div class="sticky top-0 flex h-screen flex-col">
        <div class="border-b border-white/10 p-6">
          <RouterLink to="/" class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <PlusIcon class="h-6 w-6 text-white" />
            </div>
            <div>
              <p class="text-sm font-bold text-white">CHIK Admin</p>
              <p class="text-xs text-white/60">Dashboard</p>
            </div>
          </RouterLink>
        </div>
        <nav class="flex-1 space-y-1 p-4">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            active-class="!bg-white/15 !text-white"
          >
            <component :is="item.icon" class="h-5 w-5" />
            {{ item.label }}
          </RouterLink>
        </nav>
        <div class="border-t border-white/10 p-4">
          <RouterLink to="/" class="flex items-center gap-2 text-sm text-white/60 hover:text-white">
            <ArrowLeftIcon class="h-4 w-4" />
            Retour au site
          </RouterLink>
        </div>
      </div>
    </aside>
    <div class="flex flex-1 flex-col">
      <header class="sticky top-0 z-30 border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
        <div class="flex items-center justify-between">
          <h1 class="text-lg font-semibold text-primary dark:text-white">Tableau de bord</h1>
          <div class="flex items-center gap-4">
            <span class="hidden text-sm text-slate-500 sm:block">Prêt pour API Laravel</span>
            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
              A
            </div>
          </div>
        </div>
      </header>
      <main class="flex-1 p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon, ArrowLeftIcon, ChartBarIcon, CalendarDaysIcon, UsersIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const navItems = [
  { label: 'Vue d\'ensemble', path: '/admin', icon: ChartBarIcon },
  { label: 'Rendez-vous', path: '/admin', icon: CalendarDaysIcon },
  { label: 'Patients', path: '/admin', icon: UsersIcon },
  { label: 'Messages', path: '/admin', icon: EnvelopeIcon },
]
</script>
