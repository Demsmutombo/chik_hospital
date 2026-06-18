<template>
  <section class="bg-mint/40 py-16 dark:bg-primary-dark/50 md:py-20">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div class="reveal text-center">
        <h2 class="section-title">Questions Fréquentes</h2>
        <p class="section-subtitle mx-auto">Trouvez rapidement les réponses à vos questions médicales et pratiques.</p>
      </div>

      <div class="mt-10 space-y-3">
        <div
          v-for="(item, index) in FAQ"
          :key="item.id"
          class="reveal overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-slate-800"
          :style="{ transitionDelay: `${index * 60}ms` }"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50"
            :aria-expanded="openId === item.id"
            @click="toggle(item.id)"
          >
            <span class="pr-4 text-sm font-semibold text-primary dark:text-white md:text-base">{{ item.question }}</span>
            <ChevronDownIcon
              class="h-5 w-5 shrink-0 text-secondary transition-transform duration-300"
              :class="{ 'rotate-180': openId === item.id }"
            />
          </button>
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-show="openId === item.id" class="overflow-hidden">
              <p class="px-6 pb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{{ item.answer }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { FAQ } from '@/utils/constants'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const openId = ref(FAQ[0]?.id ?? null)

function toggle(id) {
  openId.value = openId.value === id ? null : id
}
</script>
